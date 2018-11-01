import { DocumentNode } from "graphql-typed";
import { CustomerInput } from "../../../../../types/graphql/types";
export namespace UpdateCustomerMutationPartialData {
  export interface CustomerUpdateCustomer {
    __typename?: "Customer" | null;
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    displayName?: string | null;
  }
  export interface CustomerUpdate {
    __typename?: "CustomerUpdatePayload" | null;
    customer?: UpdateCustomerMutationPartialData.CustomerUpdateCustomer | null;
  }
}
export interface UpdateCustomerMutationPartialData {
  customerUpdate?: UpdateCustomerMutationPartialData.CustomerUpdate | null;
}
export namespace UpdateCustomerMutationData {
  export interface Variables {
    customer: CustomerInput;
  }
  export interface CustomerUpdateCustomer {
    __typename: "Customer";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    displayName: string;
  }
  export interface CustomerUpdate {
    __typename: "CustomerUpdatePayload";
    customer?: UpdateCustomerMutationData.CustomerUpdateCustomer | null;
  }
}
export interface UpdateCustomerMutationData {
  customerUpdate?: UpdateCustomerMutationData.CustomerUpdate | null;
}
declare const document: DocumentNode<UpdateCustomerMutationData, UpdateCustomerMutationData.Variables, UpdateCustomerMutationPartialData>;
export default document;