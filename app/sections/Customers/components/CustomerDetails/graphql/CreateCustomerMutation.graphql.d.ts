import { DocumentNode } from "graphql-typed";
import { CustomerInput } from "../../../../../types/graphql/types";
export namespace CreateCustomerMutationPartialData {
  export interface CustomerCreateCustomer {
    __typename?: "Customer" | null;
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    displayName?: string | null;
  }
  export interface CustomerCreate {
    __typename?: "CustomerCreatePayload" | null;
    customer?: CreateCustomerMutationPartialData.CustomerCreateCustomer | null;
  }
}
export interface CreateCustomerMutationPartialData {
  customerCreate?: CreateCustomerMutationPartialData.CustomerCreate | null;
}
export namespace CreateCustomerMutationData {
  export interface Variables {
    customer: CustomerInput;
  }
  export interface CustomerCreateCustomer {
    __typename: "Customer";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    displayName: string;
  }
  export interface CustomerCreate {
    __typename: "CustomerCreatePayload";
    customer?: CreateCustomerMutationData.CustomerCreateCustomer | null;
  }
}
export interface CreateCustomerMutationData {
  customerCreate?: CreateCustomerMutationData.CustomerCreate | null;
}
declare const document: DocumentNode<CreateCustomerMutationData, CreateCustomerMutationData.Variables, CreateCustomerMutationPartialData>;
export default document;