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
import {Title} from '@shopify/react-html-next';
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
            return (
              <>
                <Title>Customer</Title>
                <SkeletonPage breadcrumbs />
              </>
            );
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

                let mutationMarkup: React.ReactNode = null;

                if (mutating) {
                  const variables = {
                    customer: {
                      id: customer && customer.id,
                      firstName: fields.firstName.value,
                      lastName: fields.lastName.value,
                    },
                  };

                  mutationMarkup = isCreating ? (
                    <Mutation
                      mutation={createCustomerMutation}
                      onCompleted={this.handleCustomerCreation}
                      variables={variables}
                    />
                  ) : (
                    <Mutation
                      mutation={updateCustomerMutation}
                      variables={variables}
                    />
                  );
                }

                return (
                  <>
                    <Title>{title}</Title>
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

  private handleCustomerCreation = ({
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
