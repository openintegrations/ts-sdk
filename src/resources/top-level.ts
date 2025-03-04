// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface CheckHealthResponse {
  ok: boolean;
}

export interface GetConnectionResponse {
  items: Array<GetConnectionResponse.Item>;
}

export namespace GetConnectionResponse {
  export interface Item {
    id: string;

    connector_config_id: string | null;
  }
}

export interface GetConnectionConfigResponse {
  items: Array<GetConnectionConfigResponse.Item>;
}

export namespace GetConnectionConfigResponse {
  export interface Item {
    id: string;

    org_id: string;
  }
}

export declare namespace TopLevel {
  export {
    type CheckHealthResponse as CheckHealthResponse,
    type GetConnectionResponse as GetConnectionResponse,
    type GetConnectionConfigResponse as GetConnectionConfigResponse,
  };
}
