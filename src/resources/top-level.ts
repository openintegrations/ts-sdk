// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export type CheckHealthResponse = string;

export interface RetrieveConnectionResponse {
  items: Array<RetrieveConnectionResponse.PlaidConnection | RetrieveConnectionResponse.GreenhouseConnection>;
}

export namespace RetrieveConnectionResponse {
  /**
   * Plaid Connection
   */
  export interface PlaidConnection {
    connector_name: 'plaid';

    secrets: PlaidConnection.Secrets;

    settings: PlaidConnection.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace PlaidConnection {
    export interface Secrets {
      access_token: string;
    }

    export interface Settings {
      item_id: string;
    }
  }

  /**
   * Greenhouse Connection
   */
  export interface GreenhouseConnection {
    connector_name: 'greenhouse';

    secrets: GreenhouseConnection.Secrets;

    settings: unknown;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace GreenhouseConnection {
    export interface Secrets {
      api_key: string;
    }
  }
}

export interface RetrieveConnectorConfigResponse {
  items: Array<
    | RetrieveConnectorConfigResponse.PlaidConnectorConfig
    | RetrieveConnectorConfigResponse.GreenhouseConnectorConfig
  >;
}

export namespace RetrieveConnectorConfigResponse {
  /**
   * Plaid Connector Config
   */
  export interface PlaidConnectorConfig {
    config: PlaidConnectorConfig.Config;

    connector_name: 'plaid';

    secrets: PlaidConnectorConfig.Secrets;

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace PlaidConnectorConfig {
    export interface Config {
      client_name: string;

      products: Array<'transactions' | 'balances'>;
    }

    export interface Secrets {
      client_id: string;

      client_secret: string;
    }
  }

  /**
   * Greenhouse Connector Config
   */
  export interface GreenhouseConnectorConfig {
    config: unknown;

    connector_name: 'greenhouse';

    secrets: unknown;

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }
}

export declare namespace TopLevel {
  export {
    type CheckHealthResponse as CheckHealthResponse,
    type RetrieveConnectionResponse as RetrieveConnectionResponse,
    type RetrieveConnectorConfigResponse as RetrieveConnectorConfigResponse,
  };
}
