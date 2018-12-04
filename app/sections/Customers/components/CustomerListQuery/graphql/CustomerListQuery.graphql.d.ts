import { DocumentNode } from "graphql-typed";
export namespace CustomerListTwoQueryPartialData {
  export interface CustomersEdgesNode {
    __typename?: "Customer" | null;
    id?: string | null;
    displayName?: string | null;
  }
  export interface CustomersEdges {
    __typename?: "CustomerEdge" | null;
    node?: CustomerListTwoQueryPartialData.CustomersEdgesNode | null;
  }
  export interface Customers {
    __typename?: "CustomerConnection" | null;
    edges?: (CustomerListTwoQueryPartialData.CustomersEdges | null)[] | null;
  }
}
export interface CustomerListTwoQueryPartialData {
  customers?: CustomerListTwoQueryPartialData.Customers | null;
}
export namespace CustomerListTwoQueryData {
  export interface CustomersEdgesNode {
    __typename: "Customer";
    id: string;
    displayName: string;
  }
  export interface CustomersEdges {
    __typename: "CustomerEdge";
    node: CustomerListTwoQueryData.CustomersEdgesNode;
  }
  export interface Customers {
    __typename: "CustomerConnection";
    edges: CustomerListTwoQueryData.CustomersEdges[];
  }
}
export interface CustomerListTwoQueryData {
  customers: CustomerListTwoQueryData.Customers;
}
declare const document: DocumentNode<CustomerListTwoQueryData, never, CustomerListTwoQueryPartialData>;
export default document;