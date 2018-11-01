import * as React from 'react';
import {withRouter, RouteComponentProps} from 'react-router';

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

function CustomerDetails({id, history}: Props & RouteComponentProps<unknown>) {
  const isCreating = id == null;

  return (
    <Query
      query={customerDetailsQuery}
      variables={{id: composeGid('Customer', id || 'new')}}
      fetchPolicy="cache-and-network"
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

        const handleMutationCompletion = isCreating
          ? ({customerCreate}: CreateCustomerMutationData) => {
              if (customerCreate == null || customerCreate.customer == null) {
                return;
              }

              history.push(
                `/customers/${parseGid(customerCreate.customer.id)}`,
              );
            }
          : undefined;

        return (
          <Mutation mutation={mutation} onCompleted={handleMutationCompletion}>
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

export default withRouter(CustomerDetails);

function initialValuesFromCustomer(
  customer: CustomerDetailsQueryData.Customer | undefined,
) {
  return {
    firstName: (customer && customer.firstName) || '',
    lastName: (customer && customer.lastName) || '',
  };
}
