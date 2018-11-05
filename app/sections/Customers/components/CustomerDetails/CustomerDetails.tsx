import * as React from 'react';

import {Redirect} from '@shopify/react-router';
import {Query, Mutation} from '@shopify/react-apollo';
import {
  Page,
  SkeletonPage,
  Card,
  Form,
  FormLayout,
  TextField,
} from '@shopify/polaris';
import FormState from '@shopify/react-form-state';
import {composeGid, parseGid} from '@shopify/admin-graphql-api-utilities';

import {NotFound} from 'components';

import customerDetailsQuery, {
  CustomerDetailsQueryData,
} from './graphql/CustomerDetailsQuery.graphql';

import updateCustomerMutation from './graphql/UpdateCustomerMutation.graphql';
import createCustomerMutation, {
  CreateCustomerMutationData,
} from './graphql/CreateCustomerMutation.graphql';

interface Props {
  id?: string;
}

interface State {
  redirect?: string;
  mutating: boolean;
}

export default class CustomerDetails extends React.Component<Props, State> {
  state: State = {
    mutating: false,
  };

  private get isCreating() {
    return this.props.id == null;
  }

  render() {
    const {isCreating} = this;
    const {id} = this.props;
    const {redirect, mutating} = this.state;

    if (redirect) {
      return <Redirect url={redirect} />;
    }

    return (
      <Query
        query={customerDetailsQuery}
        variables={{id: composeGid('Customer', id || 'new')}}
      >
        {({data, loading}) => {
          if (
            !isCreating &&
            !loading &&
            (data == null || data.customer == null)
          ) {
            return <NotFound />;
          }

          if (!isCreating && (data == null || data.customer == null)) {
            return <SkeletonPage breadcrumbs />;
          }

          const customer = (data && data.customer) || undefined;

          return (
            <FormState
              onSubmit={() => this.setState({mutating: true})}
              initialValues={initialValuesFromCustomer(customer)}
            >
              {({submit, fields, dirty}) => {
                const title = customer ? customer.displayName : 'New customer';

                const primaryAction = {
                  content: 'Save',
                  onAction: submit,
                  disabled: !dirty || mutating,
                  loading: mutating,
                };

                const mutation = isCreating
                  ? createCustomerMutation
                  : updateCustomerMutation;

                const mutationMarkup = mutating ? (
                  <Mutation
                    mutation={mutation}
                    onCompleted={this.handleMutationCompletion}
                    variables={{
                      customer: {
                        id: customer && customer.id,
                        firstName: fields.firstName.value,
                        lastName: fields.lastName.value,
                      },
                    }}
                  />
                ) : null;

                return (
                  <>
                    {mutationMarkup}
                    <Page
                      title={title}
                      breadcrumbs={[{url: '/customers', content: 'Customers'}]}
                      primaryAction={primaryAction}
                    >
                      <Form onSubmit={submit}>
                        <Card sectioned>
                          <FormLayout>
                            <TextField
                              id="firstName"
                              label="First name"
                              {...fields.firstName}
                            />
                            <TextField
                              id="lastName"
                              label="Last name"
                              {...fields.lastName}
                            />
                          </FormLayout>
                        </Card>
                      </Form>
                    </Page>
                  </>
                );
              }}
            </FormState>
          );
        }}
      </Query>
    );
  }

  private handleMutationCompletion = ({
    customerCreate,
  }: CreateCustomerMutationData) => {
    this.setState({mutating: false});

    if (
      !this.isCreating ||
      customerCreate == null ||
      customerCreate.customer == null
    ) {
      return;
    }

    this.setState({
      redirect: `/customers/${parseGid(customerCreate.customer.id)}`,
    });
  };
}

function initialValuesFromCustomer(
  customer: CustomerDetailsQueryData.Customer | undefined,
) {
  return {
    firstName: (customer && customer.firstName) || '',
    lastName: (customer && customer.lastName) || '',
  };
}
