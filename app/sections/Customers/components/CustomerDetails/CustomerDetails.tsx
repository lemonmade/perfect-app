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
}

export default class CustomerDetails extends React.Component<Props, State> {
  state: State = {};

  private get isCreating() {
    return this.props.id == null;
  }

  render() {
    const {isCreating} = this;
    const {id} = this.props;
    const {redirect} = this.state;

    if (redirect) {
      return <Redirect url={redirect} />;
    }

    return (
      <Query
        query={customerDetailsQuery}
        variables={{id: composeGid('Customer', id || 'new')}}
        fetchPolicy="cache-first"
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

          const mutation = isCreating
            ? createCustomerMutation
            : updateCustomerMutation;

          return (
            <Mutation
              mutation={mutation}
              onCompleted={this.handleMutationCompletion}
            >
              {(updateOrCreateCustomer, {loading: mutationLoading}) => {
                const customer = (data && data.customer) || undefined;
                const title = customer ? customer.displayName : 'New customer';

                return (
                  <FormState
                    onSubmit={async ({fields}) => {
                      await updateOrCreateCustomer({
                        variables: {
                          customer: {
                            id: customer && customer.id,
                            firstName: fields.firstName.value,
                            lastName: fields.lastName.value,
                          },
                        },
                      });
                    }}
                    initialValues={initialValuesFromCustomer(customer)}
                  >
                    {({submit, fields, dirty}) => {
                      const primaryAction = {
                        content: 'Save',
                        onAction: submit,
                        disabled: !dirty || mutationLoading,
                        loading: mutationLoading,
                      };

                      return (
                        <Page
                          title={title}
                          breadcrumbs={[
                            {url: '/customers', content: 'Customers'},
                          ]}
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
                      );
                    }}
                  </FormState>
                );
              }}
            </Mutation>
          );
        }}
      </Query>
    );
  }

  private handleMutationCompletion = ({
    customerCreate,
  }: CreateCustomerMutationData) => {
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
