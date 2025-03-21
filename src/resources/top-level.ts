// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { OffsetPagination, type OffsetPaginationParams } from '../pagination';

export type ListConnectionConfigsResponsesOffsetPagination = OffsetPagination<ListConnectionConfigsResponse>;

export type ListConnectionsResponsesOffsetPagination = OffsetPagination<ListConnectionsResponse>;

export interface CheckConnectionResponse {
  /**
   * The id of the connection, starts with `conn_`
   */
  id: string;

  /**
   * Connection status: healthy (all well), disconnected (needs reconnection), error
   * (system issue), manual (import connection)
   */
  status: 'healthy' | 'disconnected' | 'error' | 'manual';

  /**
   * Error types: refresh_failed and unknown_external_error
   */
  error?: 'refresh_failed' | 'unknown_external_error';

  /**
   * Optional expanded error message
   */
  errorMessage?: string;
}

export interface CreateMagicLinkResponse {
  /**
   * The Connect magic link url to share with the user.
   */
  magic_link_url: string;
}

export interface CreateTokenResponse {
  /**
   * The authentication token to use for API requests
   */
  token: string;
}

/**
 * The connection details
 */
export type GetConnectionResponse =
  | GetConnectionResponse.ConnectorsAircallConnectionSettings
  | GetConnectionResponse.ConnectorsAirtableConnectionSettings
  | GetConnectionResponse.ConnectorsApolloConnectionSettings
  | GetConnectionResponse.ConnectorsBeancountConnectionSettings
  | GetConnectionResponse.ConnectorsBrexConnectionSettings
  | GetConnectionResponse.ConnectorsCodaConnectionSettings
  | GetConnectionResponse.ConnectorsConfluenceConnectionSettings
  | GetConnectionResponse.ConnectorsDiscordConnectionSettings
  | GetConnectionResponse.ConnectorsFinchConnectionSettings
  | GetConnectionResponse.ConnectorsFirebaseConnectionSettings
  | GetConnectionResponse.ConnectorsForeceiptConnectionSettings
  | GetConnectionResponse.ConnectorsGitHubConnectionSettings
  | GetConnectionResponse.ConnectorsGongConnectionSettings
  | GetConnectionResponse.ConnectorsGoogleConnectionSettings
  | GetConnectionResponse.ConnectorsGreenhouseConnectionSettings
  | GetConnectionResponse.ConnectorsHeronConnectionSettings
  | GetConnectionResponse.ConnectorsHubspotConnectionSettings
  | GetConnectionResponse.ConnectorsIntercomConnectionSettings
  | GetConnectionResponse.ConnectorsJiraConnectionSettings
  | GetConnectionResponse.ConnectorsKustomerConnectionSettings
  | GetConnectionResponse.ConnectorsLeverConnectionSettings
  | GetConnectionResponse.ConnectorsLinearConnectionSettings
  | GetConnectionResponse.ConnectorsLunchmoneyConnectionSettings
  | GetConnectionResponse.ConnectorsMercuryConnectionSettings
  | GetConnectionResponse.ConnectorsMergeConnectionSettings
  | GetConnectionResponse.ConnectorsMicrosoftConnectionSettings
  | GetConnectionResponse.ConnectorsMootaConnectionSettings
  | GetConnectionResponse.ConnectorsOnebrickConnectionSettings
  | GetConnectionResponse.ConnectorsOutreachConnectionSettings
  | GetConnectionResponse.ConnectorsPipedriveConnectionSettings
  | GetConnectionResponse.ConnectorsPlaidConnectionSettings
  | GetConnectionResponse.ConnectorsPostgresConnectionSettings
  | GetConnectionResponse.ConnectorsQboConnectionSettings
  | GetConnectionResponse.ConnectorsRampConnectionSettings
  | GetConnectionResponse.ConnectorsSalesforceConnectionSettings
  | GetConnectionResponse.ConnectorsSalesloftConnectionSettings
  | GetConnectionResponse.ConnectorsSaltedgeConnectionSettings
  | GetConnectionResponse.ConnectorsSlackConnectionSettings
  | GetConnectionResponse.ConnectorsSplitwiseConnectionSettings
  | GetConnectionResponse.ConnectorsStripeConnectionSettings
  | GetConnectionResponse.ConnectorsTellerConnectionSettings
  | GetConnectionResponse.ConnectorsTogglConnectionSettings
  | GetConnectionResponse.ConnectorsTwentyConnectionSettings
  | GetConnectionResponse.ConnectorsVenmoConnectionSettings
  | GetConnectionResponse.ConnectorsWiseConnectionSettings
  | GetConnectionResponse.ConnectorsXeroConnectionSettings
  | GetConnectionResponse.ConnectorsYodleeConnectionSettings
  | GetConnectionResponse.ConnectorsZohodeskConnectionSettings
  | GetConnectionResponse.ConnectorsGoogledriveConnectionSettings;

export namespace GetConnectionResponse {
  export interface ConnectorsAircallConnectionSettings {
    connector_name: 'aircall';

    settings: ConnectorsAircallConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsAircallConnectionSettings {
    export interface Settings {
      apiId: string;

      apiToken: string;
    }
  }

  export interface ConnectorsAirtableConnectionSettings {
    connector_name: 'airtable';

    settings: ConnectorsAirtableConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsAirtableConnectionSettings {
    export interface Settings {
      airtableBase: string;

      apiKey: string;
    }
  }

  export interface ConnectorsApolloConnectionSettings {
    connector_name: 'apollo';

    settings: ConnectorsApolloConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsApolloConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsBeancountConnectionSettings {
    connector_name: 'beancount';

    settings: null;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export interface ConnectorsBrexConnectionSettings {
    connector_name: 'brex';

    settings: ConnectorsBrexConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsBrexConnectionSettings {
    export interface Settings {
      accessToken: string;
    }
  }

  export interface ConnectorsCodaConnectionSettings {
    connector_name: 'coda';

    settings: ConnectorsCodaConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsCodaConnectionSettings {
    export interface Settings {
      apiKey: string;
    }
  }

  export interface ConnectorsConfluenceConnectionSettings {
    connector_name: 'confluence';

    settings: ConnectorsConfluenceConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsConfluenceConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsDiscordConnectionSettings {
    connector_name: 'discord';

    settings: ConnectorsDiscordConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsDiscordConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsFinchConnectionSettings {
    connector_name: 'finch';

    settings: ConnectorsFinchConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsFinchConnectionSettings {
    export interface Settings {
      access_token: string;
    }
  }

  export interface ConnectorsFirebaseConnectionSettings {
    connector_name: 'firebase';

    settings:
      | ConnectorsFirebaseConnectionSettings.UnionMember0
      | ConnectorsFirebaseConnectionSettings.UnionMember1;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsFirebaseConnectionSettings {
    export interface UnionMember0 {
      role: 'admin';

      serviceAccount: UnionMember0.ServiceAccount;
    }

    export namespace UnionMember0 {
      export interface ServiceAccount {
        project_id: string;
        [k: string]: unknown;
      }
    }

    export interface UnionMember1 {
      authData: UnionMember1.UnionMember0 | UnionMember1.UnionMember1 | UnionMember1.UnionMember2;

      firebaseConfig: UnionMember1.FirebaseConfig;

      role: 'user';
    }

    export namespace UnionMember1 {
      export interface UnionMember0 {
        method: 'userJson';

        userJson: UnionMember0.UserJson;
      }

      export namespace UnionMember0 {
        export interface UserJson {
          appName: string;

          stsTokenManager: Record<string, unknown>;

          uid: string;
          [k: string]: unknown;
        }
      }

      export interface UnionMember1 {
        customToken: string;

        method: 'customToken';
      }

      export interface UnionMember2 {
        email: string;

        method: 'emailPassword';

        password: string;
      }

      export interface FirebaseConfig {
        apiKey: string;

        appId: string;

        authDomain: string;

        databaseURL: string;

        projectId: string;

        measurementId?: string;

        messagingSenderId?: string;

        storageBucket?: string;
      }
    }
  }

  export interface ConnectorsForeceiptConnectionSettings {
    connector_name: 'foreceipt';

    settings: ConnectorsForeceiptConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsForeceiptConnectionSettings {
    export interface Settings {
      envName: 'staging' | 'production';

      _id?: unknown;

      credentials?: unknown;

      options?: unknown;
    }
  }

  export interface ConnectorsGitHubConnectionSettings {
    connector_name: 'github';

    settings: ConnectorsGitHubConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGitHubConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsGongConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorsGongConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGongConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsGoogleConnectionSettings {
    connector_name: 'google';

    settings: ConnectorsGoogleConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGoogleConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      client_id?: string;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsGreenhouseConnectionSettings {
    connector_name: 'greenhouse';

    settings: ConnectorsGreenhouseConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGreenhouseConnectionSettings {
    export interface Settings {
      apiKey: string;
    }
  }

  export interface ConnectorsHeronConnectionSettings {
    connector_name: 'heron';

    settings: null;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export interface ConnectorsHubspotConnectionSettings {
    connector_name: 'hubspot';

    settings: ConnectorsHubspotConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsHubspotConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;

      extra?: unknown;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsIntercomConnectionSettings {
    connector_name: 'intercom';

    settings: ConnectorsIntercomConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsIntercomConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsJiraConnectionSettings {
    connector_name: 'jira';

    settings: ConnectorsJiraConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsJiraConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsKustomerConnectionSettings {
    connector_name: 'kustomer';

    settings: ConnectorsKustomerConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsKustomerConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsLeverConnectionSettings {
    connector_name: 'lever';

    settings: ConnectorsLeverConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsLeverConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsLinearConnectionSettings {
    connector_name: 'linear';

    settings: ConnectorsLinearConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsLinearConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsLunchmoneyConnectionSettings {
    connector_name: 'lunchmoney';

    settings: null;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export interface ConnectorsMercuryConnectionSettings {
    connector_name: 'mercury';

    settings: null;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export interface ConnectorsMergeConnectionSettings {
    connector_name: 'merge';

    settings: ConnectorsMergeConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsMergeConnectionSettings {
    export interface Settings {
      accountToken: string;

      accountDetails?: unknown;
    }
  }

  export interface ConnectorsMicrosoftConnectionSettings {
    connector_name: 'microsoft';

    settings: ConnectorsMicrosoftConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsMicrosoftConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      client_id?: string;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsMootaConnectionSettings {
    connector_name: 'moota';

    settings: null;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export interface ConnectorsOnebrickConnectionSettings {
    connector_name: 'onebrick';

    settings: ConnectorsOnebrickConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsOnebrickConnectionSettings {
    export interface Settings {
      accessToken: string;
    }
  }

  export interface ConnectorsOutreachConnectionSettings {
    connector_name: 'outreach';

    settings: ConnectorsOutreachConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsOutreachConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsPipedriveConnectionSettings {
    connector_name: 'pipedrive';

    settings: ConnectorsPipedriveConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsPipedriveConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsPlaidConnectionSettings {
    connector_name: 'plaid';

    settings: ConnectorsPlaidConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsPlaidConnectionSettings {
    export interface Settings {
      accessToken: string;

      institution?: unknown;

      item?: unknown;

      itemId?: string | null;

      status?: unknown;

      webhookItemError?: null;
    }
  }

  export interface ConnectorsPostgresConnectionSettings {
    connector_name: 'postgres';

    settings: ConnectorsPostgresConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsPostgresConnectionSettings {
    export interface Settings {
      databaseUrl: string;

      migrateTables?: boolean;

      sourceQueries?: Settings.SourceQueries;
    }

    export namespace Settings {
      export interface SourceQueries {
        /**
         * Should order by lastModifiedAt and id descending
         */
        invoice?: string | null;
      }
    }
  }

  export interface ConnectorsQboConnectionSettings {
    connector_name: 'qbo';

    settings: ConnectorsQboConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsQboConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        connection_config: OAuth.ConnectionConfig;

        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;
      }

      export namespace OAuth {
        export interface ConnectionConfig {
          realmId: string;
        }

        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsRampConnectionSettings {
    connector_name: 'ramp';

    settings: ConnectorsRampConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsRampConnectionSettings {
    export interface Settings {
      accessToken?: string | null;

      startAfterTransactionId?: string | null;
    }
  }

  export interface ConnectorsSalesforceConnectionSettings {
    connector_name: 'salesforce';

    settings: ConnectorsSalesforceConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSalesforceConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsSalesloftConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorsSalesloftConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSalesloftConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsSaltedgeConnectionSettings {
    connector_name: 'saltedge';

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    settings?: unknown;

    updated_at?: string;
  }

  export interface ConnectorsSlackConnectionSettings {
    connector_name: 'slack';

    settings: ConnectorsSlackConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSlackConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsSplitwiseConnectionSettings {
    connector_name: 'splitwise';

    settings: ConnectorsSplitwiseConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSplitwiseConnectionSettings {
    export interface Settings {
      accessToken: string;

      currentUser?: Settings.CurrentUser | null;
    }

    export namespace Settings {
      export interface CurrentUser {
        id: number;

        country_code: string;

        custom_picture: boolean;

        date_format: string;

        default_currency: string;

        default_group_id: number;

        email: string;

        first_name: string;

        force_refresh_at: string;

        last_name: string;

        locale: string;

        notifications: CurrentUser.Notifications;

        notifications_count: number;

        notifications_read: string;

        picture: CurrentUser.Picture;

        registration_status: string;
      }

      export namespace CurrentUser {
        export interface Notifications {
          added_as_friend: boolean;

          added_to_group: boolean;

          announcements: boolean;

          bills: boolean;

          expense_added: boolean;

          expense_updated: boolean;

          monthly_summary: boolean;

          payments: boolean;
        }

        export interface Picture {
          large?: string | null;

          medium?: string | null;

          original?: string | null;

          small?: string | null;

          xlarge?: string | null;

          xxlarge?: string | null;
        }
      }
    }
  }

  export interface ConnectorsStripeConnectionSettings {
    connector_name: 'stripe';

    settings: ConnectorsStripeConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsStripeConnectionSettings {
    export interface Settings {
      secretKey: string;
    }
  }

  export interface ConnectorsTellerConnectionSettings {
    connector_name: 'teller';

    settings: ConnectorsTellerConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsTellerConnectionSettings {
    export interface Settings {
      token: string;
    }
  }

  export interface ConnectorsTogglConnectionSettings {
    connector_name: 'toggl';

    settings: ConnectorsTogglConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsTogglConnectionSettings {
    export interface Settings {
      apiToken: string;

      email?: string | null;

      password?: string | null;
    }
  }

  export interface ConnectorsTwentyConnectionSettings {
    connector_name: 'twenty';

    settings: ConnectorsTwentyConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsTwentyConnectionSettings {
    export interface Settings {
      access_token: string;
    }
  }

  export interface ConnectorsVenmoConnectionSettings {
    connector_name: 'venmo';

    settings: ConnectorsVenmoConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsVenmoConnectionSettings {
    export interface Settings {
      credentials?: unknown;

      me?: unknown;
    }
  }

  export interface ConnectorsWiseConnectionSettings {
    connector_name: 'wise';

    settings: ConnectorsWiseConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsWiseConnectionSettings {
    export interface Settings {
      envName: 'sandbox' | 'live';

      apiToken?: string | null;
    }
  }

  export interface ConnectorsXeroConnectionSettings {
    connector_name: 'xero';

    settings: ConnectorsXeroConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsXeroConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsYodleeConnectionSettings {
    connector_name: 'yodlee';

    settings: ConnectorsYodleeConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsYodleeConnectionSettings {
    export interface Settings {
      loginName: string;

      providerAccountId: number | string;

      accessToken?: Settings.AccessToken | null;

      provider?: null;

      providerAccount?: Settings.ProviderAccount | null;

      user?: null;
    }

    export namespace Settings {
      export interface AccessToken {
        accessToken: string;

        expiresIn: number;

        issuedAt: string;
      }

      export interface ProviderAccount {
        id: number;

        aggregationSource: string;

        createdDate: string;

        dataset: Array<unknown>;

        isManual: boolean;

        providerId: number;

        status:
          | 'LOGIN_IN_PROGRESS'
          | 'USER_INPUT_REQUIRED'
          | 'IN_PROGRESS'
          | 'PARTIAL_SUCCESS'
          | 'SUCCESS'
          | 'FAILED';

        isDeleted?: boolean | null;
      }
    }
  }

  export interface ConnectorsZohodeskConnectionSettings {
    connector_name: 'zohodesk';

    settings: ConnectorsZohodeskConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsZohodeskConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsGoogledriveConnectionSettings {
    connector_name: 'googledrive';

    settings: ConnectorsGoogledriveConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGoogledriveConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      metadata?: Record<string, unknown>;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: unknown;
      }
    }
  }
}

export interface GetCurrentUserResponse {
  role: 'customer' | 'org' | 'anon' | 'user';
}

export type ListConnectionConfigsResponse =
  | ListConnectionConfigsResponse.ConnectorsAircallConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsAirtableConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsApolloConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsBeancountConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsBrexConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsCodaConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsConfluenceConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsDiscordConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsFinchConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsFirebaseConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsForeceiptConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsGitHubConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsGongConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsGoogleConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsGreenhouseConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsHeronConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsHubspotConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsIntercomConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsJiraConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsKustomerConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsLeverConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsLinearConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsLunchmoneyConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsMercuryConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsMergeConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsMicrosoftConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsMootaConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsOnebrickConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsOutreachConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsPipedriveConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsPlaidConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsPostgresConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsQboConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsRampConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsSalesforceConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsSalesloftConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsSaltedgeConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsSlackConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsSplitwiseConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsStripeConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsTellerConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsTogglConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsTwentyConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsVenmoConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsWiseConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsXeroConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsYodleeConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsZohodeskConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsGoogledriveConnectorConfig;

export namespace ListConnectionConfigsResponse {
  export interface ConnectorsAircallConnectorConfig {
    config: null;

    connector_name: 'aircall';

    id?: string;

    connector?: ConnectorsAircallConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsAircallConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsAirtableConnectorConfig {
    config: null;

    connector_name: 'airtable';

    id?: string;

    connector?: ConnectorsAirtableConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsAirtableConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsApolloConnectorConfig {
    config: null;

    connector_name: 'apollo';

    id?: string;

    connector?: ConnectorsApolloConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsApolloConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsBeancountConnectorConfig {
    config: null;

    connector_name: 'beancount';

    id?: string;

    connector?: ConnectorsBeancountConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsBeancountConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsBrexConnectorConfig {
    config: ConnectorsBrexConnectorConfig.Config;

    connector_name: 'brex';

    id?: string;

    connector?: ConnectorsBrexConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsBrexConnectorConfig {
    export interface Config {
      /**
       * API key auth support
       */
      apikeyAuth?: boolean;

      /**
       * Configure oauth
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Configure oauth
       */
      export interface OAuth {
        clientId: string;

        clientSecret: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsCodaConnectorConfig {
    config: null;

    connector_name: 'coda';

    id?: string;

    connector?: ConnectorsCodaConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsCodaConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsConfluenceConnectorConfig {
    config: ConnectorsConfluenceConnectorConfig.Config;

    connector_name: 'confluence';

    id?: string;

    connector?: ConnectorsConfluenceConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsConfluenceConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsDiscordConnectorConfig {
    config: ConnectorsDiscordConnectorConfig.Config;

    connector_name: 'discord';

    id?: string;

    connector?: ConnectorsDiscordConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsDiscordConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsFinchConnectorConfig {
    config: ConnectorsFinchConnectorConfig.Config;

    connector_name: 'finch';

    id?: string;

    connector?: ConnectorsFinchConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsFinchConnectorConfig {
    export interface Config {
      client_id: string;

      client_secret: string;

      /**
       * Finch products to access, @see
       * https://developer.tryfinch.com/api-reference/development-guides/Permissions
       */
      products: Array<
        | 'company'
        | 'directory'
        | 'individual'
        | 'ssn'
        | 'employment'
        | 'payment'
        | 'pay_statement'
        | 'benefits'
      >;

      /**
       * Finch API version
       */
      api_version?: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsFirebaseConnectorConfig {
    config: null;

    connector_name: 'firebase';

    id?: string;

    connector?: ConnectorsFirebaseConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsFirebaseConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsForeceiptConnectorConfig {
    config: null;

    connector_name: 'foreceipt';

    id?: string;

    connector?: ConnectorsForeceiptConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsForeceiptConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsGitHubConnectorConfig {
    config: ConnectorsGitHubConnectorConfig.Config;

    connector_name: 'github';

    id?: string;

    connector?: ConnectorsGitHubConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGitHubConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsGongConnectorConfig {
    config: ConnectorsGongConnectorConfig.Config;

    connector_name: 'gong';

    id?: string;

    connector?: ConnectorsGongConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGongConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsGoogleConnectorConfig {
    config: ConnectorsGoogleConnectorConfig.Config;

    connector_name: 'google';

    id?: string;

    connector?: ConnectorsGoogleConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGoogleConnectorConfig {
    export interface Config {
      integrations: Config.Integrations;

      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface Integrations {
        calendar?: Integrations.Calendar;

        docs?: Integrations.Docs;

        drive?: Integrations.Drive;

        gmail?: Integrations.Gmail;

        sheets?: Integrations.Sheets;

        slides?: Integrations.Slides;
      }

      export namespace Integrations {
        export interface Calendar {
          enabled?: boolean;

          /**
           * calendar specific space separated scopes
           */
          scopes?: string;
        }

        export interface Docs {
          enabled?: boolean;

          /**
           * docs specific space separated scopes
           */
          scopes?: string;
        }

        export interface Drive {
          enabled?: boolean;

          /**
           * drive specific space separated scopes
           */
          scopes?: string;
        }

        export interface Gmail {
          enabled?: boolean;

          /**
           * gmail specific space separated scopes
           */
          scopes?: string;
        }

        export interface Sheets {
          enabled?: boolean;

          /**
           * sheets specific space separated scopes
           */
          scopes?: string;
        }

        export interface Slides {
          enabled?: boolean;

          /**
           * slides specific space separated scopes
           */
          scopes?: string;
        }
      }

      export interface OAuth {
        client_id: string;

        client_secret: string;

        /**
         * global google connector space separated scopes
         */
        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsGreenhouseConnectorConfig {
    config: null;

    connector_name: 'greenhouse';

    id?: string;

    connector?: ConnectorsGreenhouseConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGreenhouseConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsHeronConnectorConfig {
    config: ConnectorsHeronConnectorConfig.Config;

    connector_name: 'heron';

    id?: string;

    connector?: ConnectorsHeronConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsHeronConnectorConfig {
    export interface Config {
      apiKey: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsHubspotConnectorConfig {
    config: ConnectorsHubspotConnectorConfig.Config;

    connector_name: 'hubspot';

    id?: string;

    connector?: ConnectorsHubspotConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsHubspotConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsIntercomConnectorConfig {
    config: ConnectorsIntercomConnectorConfig.Config;

    connector_name: 'intercom';

    id?: string;

    connector?: ConnectorsIntercomConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsIntercomConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsJiraConnectorConfig {
    config: ConnectorsJiraConnectorConfig.Config;

    connector_name: 'jira';

    id?: string;

    connector?: ConnectorsJiraConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsJiraConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsKustomerConnectorConfig {
    config: ConnectorsKustomerConnectorConfig.Config;

    connector_name: 'kustomer';

    id?: string;

    connector?: ConnectorsKustomerConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsKustomerConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsLeverConnectorConfig {
    config: ConnectorsLeverConnectorConfig.Config;

    connector_name: 'lever';

    id?: string;

    connector?: ConnectorsLeverConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsLeverConnectorConfig {
    export interface Config {
      envName: 'sandbox' | 'production';

      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsLinearConnectorConfig {
    config: ConnectorsLinearConnectorConfig.Config;

    connector_name: 'linear';

    id?: string;

    connector?: ConnectorsLinearConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsLinearConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsLunchmoneyConnectorConfig {
    config: ConnectorsLunchmoneyConnectorConfig.Config;

    connector_name: 'lunchmoney';

    id?: string;

    connector?: ConnectorsLunchmoneyConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsLunchmoneyConnectorConfig {
    export interface Config {
      accessToken: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsMercuryConnectorConfig {
    config: ConnectorsMercuryConnectorConfig.Config;

    connector_name: 'mercury';

    id?: string;

    connector?: ConnectorsMercuryConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsMercuryConnectorConfig {
    export interface Config {
      /**
       * API key auth support
       */
      apikeyAuth?: boolean;

      /**
       * Configure oauth
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Configure oauth
       */
      export interface OAuth {
        clientId: string;

        clientSecret: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsMergeConnectorConfig {
    config: ConnectorsMergeConnectorConfig.Config;

    connector_name: 'merge';

    id?: string;

    connector?: ConnectorsMergeConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsMergeConnectorConfig {
    export interface Config {
      apiKey: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsMicrosoftConnectorConfig {
    config: ConnectorsMicrosoftConnectorConfig.Config;

    connector_name: 'microsoft';

    id?: string;

    connector?: ConnectorsMicrosoftConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsMicrosoftConnectorConfig {
    export interface Config {
      integrations: Config.Integrations;

      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface Integrations {
        outlook?: Integrations.Outlook;

        sharepoint?: Integrations.Sharepoint;

        teams?: Integrations.Teams;
      }

      export namespace Integrations {
        export interface Outlook {
          enabled?: boolean;

          /**
           * outlook specific space separated scopes
           */
          scopes?: string;
        }

        export interface Sharepoint {
          enabled?: boolean;

          /**
           * sharepoint specific space separated scopes
           */
          scopes?: string;
        }

        export interface Teams {
          enabled?: boolean;

          /**
           * teams specific space separated scopes
           */
          scopes?: string;
        }
      }

      export interface OAuth {
        client_id: string;

        client_secret: string;

        /**
         * global microsoft connector space separated scopes
         */
        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsMootaConnectorConfig {
    config: ConnectorsMootaConnectorConfig.Config;

    connector_name: 'moota';

    id?: string;

    connector?: ConnectorsMootaConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsMootaConnectorConfig {
    export interface Config {
      token: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsOnebrickConnectorConfig {
    config: ConnectorsOnebrickConnectorConfig.Config;

    connector_name: 'onebrick';

    id?: string;

    connector?: ConnectorsOnebrickConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsOnebrickConnectorConfig {
    export interface Config {
      clientId: string;

      clientSecret: string;

      envName: 'sandbox' | 'production';

      publicToken: string;

      accessToken?: string | null;

      redirectUrl?: string | null;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsOutreachConnectorConfig {
    config: ConnectorsOutreachConnectorConfig.Config;

    connector_name: 'outreach';

    id?: string;

    connector?: ConnectorsOutreachConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsOutreachConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsPipedriveConnectorConfig {
    config: ConnectorsPipedriveConnectorConfig.Config;

    connector_name: 'pipedrive';

    id?: string;

    connector?: ConnectorsPipedriveConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsPipedriveConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsPlaidConnectorConfig {
    config: ConnectorsPlaidConnectorConfig.Config;

    connector_name: 'plaid';

    id?: string;

    connector?: ConnectorsPlaidConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsPlaidConnectorConfig {
    export interface Config {
      /**
       * The name of your application, as it should be displayed in Link. Maximum length
       * of 30 characters. If a value longer than 30 characters is provided, Link will
       * display "This Application" instead.
       */
      clientName: string;

      countryCodes: Array<
        | 'US'
        | 'GB'
        | 'ES'
        | 'NL'
        | 'FR'
        | 'IE'
        | 'CA'
        | 'DE'
        | 'IT'
        | 'PL'
        | 'DK'
        | 'NO'
        | 'SE'
        | 'EE'
        | 'LT'
        | 'LV'
      >;

      envName: 'sandbox' | 'development' | 'production';

      language: 'en' | 'fr' | 'es' | 'nl' | 'de';

      products: Array<
        | 'assets'
        | 'auth'
        | 'balance'
        | 'identity'
        | 'investments'
        | 'liabilities'
        | 'payment_initiation'
        | 'identity_verification'
        | 'transactions'
        | 'credit_details'
        | 'income'
        | 'income_verification'
        | 'deposit_switch'
        | 'standing_orders'
        | 'transfer'
        | 'employment'
        | 'recurring_transactions'
      >;

      credentials?: Config.Credentials | null;
    }

    export namespace Config {
      export interface Credentials {
        clientId: string;

        clientSecret: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsPostgresConnectorConfig {
    config: null;

    connector_name: 'postgres';

    id?: string;

    connector?: ConnectorsPostgresConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsPostgresConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsQboConnectorConfig {
    config: ConnectorsQboConnectorConfig.Config;

    connector_name: 'qbo';

    id?: string;

    connector?: ConnectorsQboConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsQboConnectorConfig {
    export interface Config {
      envName: 'sandbox' | 'production';

      oauth: Config.OAuth;

      /**
       * For proxies, not typically needed
       */
      url?: string | null;

      /**
       * For webhooks
       */
      verifierToken?: string | null;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsRampConnectorConfig {
    config: ConnectorsRampConnectorConfig.Config;

    connector_name: 'ramp';

    id?: string;

    connector?: ConnectorsRampConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsRampConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        clientId: string;

        clientSecret: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsSalesforceConnectorConfig {
    config: ConnectorsSalesforceConnectorConfig.Config;

    connector_name: 'salesforce';

    id?: string;

    connector?: ConnectorsSalesforceConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSalesforceConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsSalesloftConnectorConfig {
    config: ConnectorsSalesloftConnectorConfig.Config;

    connector_name: 'salesloft';

    id?: string;

    connector?: ConnectorsSalesloftConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSalesloftConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsSaltedgeConnectorConfig {
    config: ConnectorsSaltedgeConnectorConfig.Config;

    connector_name: 'saltedge';

    id?: string;

    connector?: ConnectorsSaltedgeConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSaltedgeConnectorConfig {
    export interface Config {
      appId: string;

      secret: string;

      url?: string | null;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsSlackConnectorConfig {
    config: ConnectorsSlackConnectorConfig.Config;

    connector_name: 'slack';

    id?: string;

    connector?: ConnectorsSlackConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSlackConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsSplitwiseConnectorConfig {
    config: null;

    connector_name: 'splitwise';

    id?: string;

    connector?: ConnectorsSplitwiseConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSplitwiseConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsStripeConnectorConfig {
    config: ConnectorsStripeConnectorConfig.Config;

    connector_name: 'stripe';

    id?: string;

    connector?: ConnectorsStripeConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsStripeConnectorConfig {
    export interface Config {
      /**
       * API key auth support
       */
      apikeyAuth?: boolean;

      /**
       * Configure oauth
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Configure oauth
       */
      export interface OAuth {
        clientId: string;

        clientSecret: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsTellerConnectorConfig {
    config: ConnectorsTellerConnectorConfig.Config;

    connector_name: 'teller';

    id?: string;

    connector?: ConnectorsTellerConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsTellerConnectorConfig {
    export interface Config {
      applicationId: string;

      token?: string | null;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsTogglConnectorConfig {
    config: null;

    connector_name: 'toggl';

    id?: string;

    connector?: ConnectorsTogglConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsTogglConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsTwentyConnectorConfig {
    config: null;

    connector_name: 'twenty';

    id?: string;

    connector?: ConnectorsTwentyConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsTwentyConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsVenmoConnectorConfig {
    config: ConnectorsVenmoConnectorConfig.Config;

    connector_name: 'venmo';

    id?: string;

    connector?: ConnectorsVenmoConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsVenmoConnectorConfig {
    export interface Config {
      proxy?: Config.Proxy | null;

      v1BaseURL?: string | null;

      v5BaseURL?: string | null;
    }

    export namespace Config {
      export interface Proxy {
        cert: string;

        url: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsWiseConnectorConfig {
    config: null;

    connector_name: 'wise';

    id?: string;

    connector?: ConnectorsWiseConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsWiseConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsXeroConnectorConfig {
    config: ConnectorsXeroConnectorConfig.Config;

    connector_name: 'xero';

    id?: string;

    connector?: ConnectorsXeroConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsXeroConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsYodleeConnectorConfig {
    config: ConnectorsYodleeConnectorConfig.Config;

    connector_name: 'yodlee';

    id?: string;

    connector?: ConnectorsYodleeConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsYodleeConnectorConfig {
    export interface Config {
      adminLoginName: string;

      clientId: string;

      clientSecret: string;

      envName: 'sandbox' | 'development' | 'production';

      proxy?: Config.Proxy | null;

      sandboxLoginName?: string | null;
    }

    export namespace Config {
      export interface Proxy {
        cert: string;

        url: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsZohodeskConnectorConfig {
    config: ConnectorsZohodeskConnectorConfig.Config;

    connector_name: 'zohodesk';

    id?: string;

    connector?: ConnectorsZohodeskConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsZohodeskConnectorConfig {
    export interface Config {
      oauth: Config.OAuth;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }

  export interface ConnectorsGoogledriveConnectorConfig {
    config: ConnectorsGoogledriveConnectorConfig.Config;

    connector_name: 'googledrive';

    id?: string;

    connector?: ConnectorsGoogledriveConnectorConfig.Connector;

    created_at?: string;

    integrations?: Record<string, Record<string, unknown>>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGoogledriveConnectorConfig {
    export interface Config {
      client_id: string;

      client_secret: string;

      scopes?: Array<string> | null;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<string>;

      stage?: string;
    }
  }
}

export type ListConnectionsResponse =
  | ListConnectionsResponse.ConnectorsAircallConnectionSettings
  | ListConnectionsResponse.ConnectorsAirtableConnectionSettings
  | ListConnectionsResponse.ConnectorsApolloConnectionSettings
  | ListConnectionsResponse.ConnectorsBeancountConnectionSettings
  | ListConnectionsResponse.ConnectorsBrexConnectionSettings
  | ListConnectionsResponse.ConnectorsCodaConnectionSettings
  | ListConnectionsResponse.ConnectorsConfluenceConnectionSettings
  | ListConnectionsResponse.ConnectorsDiscordConnectionSettings
  | ListConnectionsResponse.ConnectorsFinchConnectionSettings
  | ListConnectionsResponse.ConnectorsFirebaseConnectionSettings
  | ListConnectionsResponse.ConnectorsForeceiptConnectionSettings
  | ListConnectionsResponse.ConnectorsGitHubConnectionSettings
  | ListConnectionsResponse.ConnectorsGongConnectionSettings
  | ListConnectionsResponse.ConnectorsGoogleConnectionSettings
  | ListConnectionsResponse.ConnectorsGreenhouseConnectionSettings
  | ListConnectionsResponse.ConnectorsHeronConnectionSettings
  | ListConnectionsResponse.ConnectorsHubspotConnectionSettings
  | ListConnectionsResponse.ConnectorsIntercomConnectionSettings
  | ListConnectionsResponse.ConnectorsJiraConnectionSettings
  | ListConnectionsResponse.ConnectorsKustomerConnectionSettings
  | ListConnectionsResponse.ConnectorsLeverConnectionSettings
  | ListConnectionsResponse.ConnectorsLinearConnectionSettings
  | ListConnectionsResponse.ConnectorsLunchmoneyConnectionSettings
  | ListConnectionsResponse.ConnectorsMercuryConnectionSettings
  | ListConnectionsResponse.ConnectorsMergeConnectionSettings
  | ListConnectionsResponse.ConnectorsMicrosoftConnectionSettings
  | ListConnectionsResponse.ConnectorsMootaConnectionSettings
  | ListConnectionsResponse.ConnectorsOnebrickConnectionSettings
  | ListConnectionsResponse.ConnectorsOutreachConnectionSettings
  | ListConnectionsResponse.ConnectorsPipedriveConnectionSettings
  | ListConnectionsResponse.ConnectorsPlaidConnectionSettings
  | ListConnectionsResponse.ConnectorsPostgresConnectionSettings
  | ListConnectionsResponse.ConnectorsQboConnectionSettings
  | ListConnectionsResponse.ConnectorsRampConnectionSettings
  | ListConnectionsResponse.ConnectorsSalesforceConnectionSettings
  | ListConnectionsResponse.ConnectorsSalesloftConnectionSettings
  | ListConnectionsResponse.ConnectorsSaltedgeConnectionSettings
  | ListConnectionsResponse.ConnectorsSlackConnectionSettings
  | ListConnectionsResponse.ConnectorsSplitwiseConnectionSettings
  | ListConnectionsResponse.ConnectorsStripeConnectionSettings
  | ListConnectionsResponse.ConnectorsTellerConnectionSettings
  | ListConnectionsResponse.ConnectorsTogglConnectionSettings
  | ListConnectionsResponse.ConnectorsTwentyConnectionSettings
  | ListConnectionsResponse.ConnectorsVenmoConnectionSettings
  | ListConnectionsResponse.ConnectorsWiseConnectionSettings
  | ListConnectionsResponse.ConnectorsXeroConnectionSettings
  | ListConnectionsResponse.ConnectorsYodleeConnectionSettings
  | ListConnectionsResponse.ConnectorsZohodeskConnectionSettings
  | ListConnectionsResponse.ConnectorsGoogledriveConnectionSettings;

export namespace ListConnectionsResponse {
  export interface ConnectorsAircallConnectionSettings {
    connector_name: 'aircall';

    settings: ConnectorsAircallConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsAircallConnectionSettings {
    export interface Settings {
      apiId: string;

      apiToken: string;
    }
  }

  export interface ConnectorsAirtableConnectionSettings {
    connector_name: 'airtable';

    settings: ConnectorsAirtableConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsAirtableConnectionSettings {
    export interface Settings {
      airtableBase: string;

      apiKey: string;
    }
  }

  export interface ConnectorsApolloConnectionSettings {
    connector_name: 'apollo';

    settings: ConnectorsApolloConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsApolloConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsBeancountConnectionSettings {
    connector_name: 'beancount';

    settings: null;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export interface ConnectorsBrexConnectionSettings {
    connector_name: 'brex';

    settings: ConnectorsBrexConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsBrexConnectionSettings {
    export interface Settings {
      accessToken: string;
    }
  }

  export interface ConnectorsCodaConnectionSettings {
    connector_name: 'coda';

    settings: ConnectorsCodaConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsCodaConnectionSettings {
    export interface Settings {
      apiKey: string;
    }
  }

  export interface ConnectorsConfluenceConnectionSettings {
    connector_name: 'confluence';

    settings: ConnectorsConfluenceConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsConfluenceConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsDiscordConnectionSettings {
    connector_name: 'discord';

    settings: ConnectorsDiscordConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsDiscordConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsFinchConnectionSettings {
    connector_name: 'finch';

    settings: ConnectorsFinchConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsFinchConnectionSettings {
    export interface Settings {
      access_token: string;
    }
  }

  export interface ConnectorsFirebaseConnectionSettings {
    connector_name: 'firebase';

    settings:
      | ConnectorsFirebaseConnectionSettings.UnionMember0
      | ConnectorsFirebaseConnectionSettings.UnionMember1;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsFirebaseConnectionSettings {
    export interface UnionMember0 {
      role: 'admin';

      serviceAccount: UnionMember0.ServiceAccount;
    }

    export namespace UnionMember0 {
      export interface ServiceAccount {
        project_id: string;
        [k: string]: unknown;
      }
    }

    export interface UnionMember1 {
      authData: UnionMember1.UnionMember0 | UnionMember1.UnionMember1 | UnionMember1.UnionMember2;

      firebaseConfig: UnionMember1.FirebaseConfig;

      role: 'user';
    }

    export namespace UnionMember1 {
      export interface UnionMember0 {
        method: 'userJson';

        userJson: UnionMember0.UserJson;
      }

      export namespace UnionMember0 {
        export interface UserJson {
          appName: string;

          stsTokenManager: Record<string, unknown>;

          uid: string;
          [k: string]: unknown;
        }
      }

      export interface UnionMember1 {
        customToken: string;

        method: 'customToken';
      }

      export interface UnionMember2 {
        email: string;

        method: 'emailPassword';

        password: string;
      }

      export interface FirebaseConfig {
        apiKey: string;

        appId: string;

        authDomain: string;

        databaseURL: string;

        projectId: string;

        measurementId?: string;

        messagingSenderId?: string;

        storageBucket?: string;
      }
    }
  }

  export interface ConnectorsForeceiptConnectionSettings {
    connector_name: 'foreceipt';

    settings: ConnectorsForeceiptConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsForeceiptConnectionSettings {
    export interface Settings {
      envName: 'staging' | 'production';

      _id?: unknown;

      credentials?: unknown;

      options?: unknown;
    }
  }

  export interface ConnectorsGitHubConnectionSettings {
    connector_name: 'github';

    settings: ConnectorsGitHubConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGitHubConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsGongConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorsGongConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGongConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsGoogleConnectionSettings {
    connector_name: 'google';

    settings: ConnectorsGoogleConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGoogleConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      client_id?: string;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsGreenhouseConnectionSettings {
    connector_name: 'greenhouse';

    settings: ConnectorsGreenhouseConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGreenhouseConnectionSettings {
    export interface Settings {
      apiKey: string;
    }
  }

  export interface ConnectorsHeronConnectionSettings {
    connector_name: 'heron';

    settings: null;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export interface ConnectorsHubspotConnectionSettings {
    connector_name: 'hubspot';

    settings: ConnectorsHubspotConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsHubspotConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;

      extra?: unknown;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsIntercomConnectionSettings {
    connector_name: 'intercom';

    settings: ConnectorsIntercomConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsIntercomConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsJiraConnectionSettings {
    connector_name: 'jira';

    settings: ConnectorsJiraConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsJiraConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsKustomerConnectionSettings {
    connector_name: 'kustomer';

    settings: ConnectorsKustomerConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsKustomerConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsLeverConnectionSettings {
    connector_name: 'lever';

    settings: ConnectorsLeverConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsLeverConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsLinearConnectionSettings {
    connector_name: 'linear';

    settings: ConnectorsLinearConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsLinearConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsLunchmoneyConnectionSettings {
    connector_name: 'lunchmoney';

    settings: null;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export interface ConnectorsMercuryConnectionSettings {
    connector_name: 'mercury';

    settings: null;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export interface ConnectorsMergeConnectionSettings {
    connector_name: 'merge';

    settings: ConnectorsMergeConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsMergeConnectionSettings {
    export interface Settings {
      accountToken: string;

      accountDetails?: unknown;
    }
  }

  export interface ConnectorsMicrosoftConnectionSettings {
    connector_name: 'microsoft';

    settings: ConnectorsMicrosoftConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsMicrosoftConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      client_id?: string;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsMootaConnectionSettings {
    connector_name: 'moota';

    settings: null;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export interface ConnectorsOnebrickConnectionSettings {
    connector_name: 'onebrick';

    settings: ConnectorsOnebrickConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsOnebrickConnectionSettings {
    export interface Settings {
      accessToken: string;
    }
  }

  export interface ConnectorsOutreachConnectionSettings {
    connector_name: 'outreach';

    settings: ConnectorsOutreachConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsOutreachConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsPipedriveConnectionSettings {
    connector_name: 'pipedrive';

    settings: ConnectorsPipedriveConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsPipedriveConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsPlaidConnectionSettings {
    connector_name: 'plaid';

    settings: ConnectorsPlaidConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsPlaidConnectionSettings {
    export interface Settings {
      accessToken: string;

      institution?: unknown;

      item?: unknown;

      itemId?: string | null;

      status?: unknown;

      webhookItemError?: null;
    }
  }

  export interface ConnectorsPostgresConnectionSettings {
    connector_name: 'postgres';

    settings: ConnectorsPostgresConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsPostgresConnectionSettings {
    export interface Settings {
      databaseUrl: string;

      migrateTables?: boolean;

      sourceQueries?: Settings.SourceQueries;
    }

    export namespace Settings {
      export interface SourceQueries {
        /**
         * Should order by lastModifiedAt and id descending
         */
        invoice?: string | null;
      }
    }
  }

  export interface ConnectorsQboConnectionSettings {
    connector_name: 'qbo';

    settings: ConnectorsQboConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsQboConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        connection_config: OAuth.ConnectionConfig;

        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;
      }

      export namespace OAuth {
        export interface ConnectionConfig {
          realmId: string;
        }

        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsRampConnectionSettings {
    connector_name: 'ramp';

    settings: ConnectorsRampConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsRampConnectionSettings {
    export interface Settings {
      accessToken?: string | null;

      startAfterTransactionId?: string | null;
    }
  }

  export interface ConnectorsSalesforceConnectionSettings {
    connector_name: 'salesforce';

    settings: ConnectorsSalesforceConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSalesforceConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsSalesloftConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorsSalesloftConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSalesloftConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsSaltedgeConnectionSettings {
    connector_name: 'saltedge';

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    settings?: unknown;

    updated_at?: string;
  }

  export interface ConnectorsSlackConnectionSettings {
    connector_name: 'slack';

    settings: ConnectorsSlackConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSlackConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsSplitwiseConnectionSettings {
    connector_name: 'splitwise';

    settings: ConnectorsSplitwiseConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSplitwiseConnectionSettings {
    export interface Settings {
      accessToken: string;

      currentUser?: Settings.CurrentUser | null;
    }

    export namespace Settings {
      export interface CurrentUser {
        id: number;

        country_code: string;

        custom_picture: boolean;

        date_format: string;

        default_currency: string;

        default_group_id: number;

        email: string;

        first_name: string;

        force_refresh_at: string;

        last_name: string;

        locale: string;

        notifications: CurrentUser.Notifications;

        notifications_count: number;

        notifications_read: string;

        picture: CurrentUser.Picture;

        registration_status: string;
      }

      export namespace CurrentUser {
        export interface Notifications {
          added_as_friend: boolean;

          added_to_group: boolean;

          announcements: boolean;

          bills: boolean;

          expense_added: boolean;

          expense_updated: boolean;

          monthly_summary: boolean;

          payments: boolean;
        }

        export interface Picture {
          large?: string | null;

          medium?: string | null;

          original?: string | null;

          small?: string | null;

          xlarge?: string | null;

          xxlarge?: string | null;
        }
      }
    }
  }

  export interface ConnectorsStripeConnectionSettings {
    connector_name: 'stripe';

    settings: ConnectorsStripeConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsStripeConnectionSettings {
    export interface Settings {
      secretKey: string;
    }
  }

  export interface ConnectorsTellerConnectionSettings {
    connector_name: 'teller';

    settings: ConnectorsTellerConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsTellerConnectionSettings {
    export interface Settings {
      token: string;
    }
  }

  export interface ConnectorsTogglConnectionSettings {
    connector_name: 'toggl';

    settings: ConnectorsTogglConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsTogglConnectionSettings {
    export interface Settings {
      apiToken: string;

      email?: string | null;

      password?: string | null;
    }
  }

  export interface ConnectorsTwentyConnectionSettings {
    connector_name: 'twenty';

    settings: ConnectorsTwentyConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsTwentyConnectionSettings {
    export interface Settings {
      access_token: string;
    }
  }

  export interface ConnectorsVenmoConnectionSettings {
    connector_name: 'venmo';

    settings: ConnectorsVenmoConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsVenmoConnectionSettings {
    export interface Settings {
      credentials?: unknown;

      me?: unknown;
    }
  }

  export interface ConnectorsWiseConnectionSettings {
    connector_name: 'wise';

    settings: ConnectorsWiseConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsWiseConnectionSettings {
    export interface Settings {
      envName: 'sandbox' | 'live';

      apiToken?: string | null;
    }
  }

  export interface ConnectorsXeroConnectionSettings {
    connector_name: 'xero';

    settings: ConnectorsXeroConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsXeroConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsYodleeConnectionSettings {
    connector_name: 'yodlee';

    settings: ConnectorsYodleeConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsYodleeConnectionSettings {
    export interface Settings {
      loginName: string;

      providerAccountId: number | string;

      accessToken?: Settings.AccessToken | null;

      provider?: null;

      providerAccount?: Settings.ProviderAccount | null;

      user?: null;
    }

    export namespace Settings {
      export interface AccessToken {
        accessToken: string;

        expiresIn: number;

        issuedAt: string;
      }

      export interface ProviderAccount {
        id: number;

        aggregationSource: string;

        createdDate: string;

        dataset: Array<unknown>;

        isManual: boolean;

        providerId: number;

        status:
          | 'LOGIN_IN_PROGRESS'
          | 'USER_INPUT_REQUIRED'
          | 'IN_PROGRESS'
          | 'PARTIAL_SUCCESS'
          | 'SUCCESS'
          | 'FAILED';

        isDeleted?: boolean | null;
      }
    }
  }

  export interface ConnectorsZohodeskConnectionSettings {
    connector_name: 'zohodesk';

    settings: ConnectorsZohodeskConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsZohodeskConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      error?: Settings.Error | null;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: OAuth.Credentials;

        metadata: Record<string, unknown> | null;

        connection_config?: OAuth.ConnectionConfig | null;
      }

      export namespace OAuth {
        export interface Credentials {
          raw: Credentials.Raw;

          type: 'OAUTH2' | 'OAUTH1' | 'BASIC' | 'API_KEY';

          access_token?: string;

          api_key?: string | null;

          expires_at?: string;

          refresh_token?: string;
        }

        export namespace Credentials {
          export interface Raw {
            access_token: string;

            token_type: string;

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;
          }
        }

        export interface ConnectionConfig {
          instance_url?: string | null;

          portalId?: number | null;
          [k: string]: unknown;
        }
      }

      export interface Error {
        code: 'refresh_token_external_error' | (string & {});

        message?: string | null;
      }
    }
  }

  export interface ConnectorsGoogledriveConnectionSettings {
    connector_name: 'googledrive';

    settings: ConnectorsGoogledriveConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGoogledriveConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      metadata?: Record<string, unknown>;
    }

    export namespace Settings {
      export interface OAuth {
        credentials: unknown;
      }
    }
  }
}

export interface CreateMagicLinkParams {
  /**
   * The specific connection id to load
   */
  connection_id?: string;

  /**
   * Filter integrations by connector names
   */
  connector_names?: Array<
    | 'aircall'
    | 'airtable'
    | 'apollo'
    | 'beancount'
    | 'brex'
    | 'coda'
    | 'confluence'
    | 'discord'
    | 'finch'
    | 'firebase'
    | 'foreceipt'
    | 'github'
    | 'gong'
    | 'google'
    | 'greenhouse'
    | 'heron'
    | 'hubspot'
    | 'intercom'
    | 'jira'
    | 'kustomer'
    | 'lever'
    | 'linear'
    | 'lunchmoney'
    | 'merge'
    | 'microsoft'
    | 'moota'
    | 'onebrick'
    | 'outreach'
    | 'pipedrive'
    | 'plaid'
    | 'qbo'
    | 'ramp'
    | 'salesforce'
    | 'salesloft'
    | 'saltedge'
    | 'slack'
    | 'splitwise'
    | 'stripe'
    | 'teller'
    | 'toggl'
    | 'twenty'
    | 'wise'
    | 'xero'
    | 'yodlee'
    | 'zohodesk'
    | 'googledrive'
  >;

  /**
   * Where to send user to after connect / if they press back button
   */
  redirect_url?: string;

  /**
   * Magic Link display theme
   */
  theme?: 'light' | 'dark';

  /**
   * How long the magic link will be valid for (in seconds) before it expires
   */
  validity_in_seconds?: number;

  /**
   * Magic Link tab view to load in the connect magic link
   */
  view?: 'manage' | 'manage-deeplink' | 'add' | 'add-deeplink';
}

export interface CreateTokenParams {
  /**
   * How long the token will be valid for (in seconds) before it expires
   */
  validity_in_seconds?: number;
}

export interface GetConnectionParams {
  expand?: Array<'connector' | 'enabled_integrations'>;

  /**
   * Controls secret inclusion: none (default), basic (auth only), or all secrets
   */
  include_secrets?: 'none' | 'basic' | 'all';

  /**
   * Controls credential refresh: none (never), force (always), or auto (when
   * expired, default)
   */
  refresh_policy?: 'none' | 'force' | 'auto';
}

export interface ListConnectionConfigsParams extends OffsetPaginationParams {
  /**
   * The name of the connector
   */
  connector_name?:
    | 'aircall'
    | 'airtable'
    | 'apollo'
    | 'beancount'
    | 'brex'
    | 'coda'
    | 'confluence'
    | 'discord'
    | 'finch'
    | 'firebase'
    | 'foreceipt'
    | 'github'
    | 'gong'
    | 'google'
    | 'greenhouse'
    | 'heron'
    | 'hubspot'
    | 'intercom'
    | 'jira'
    | 'kustomer'
    | 'lever'
    | 'linear'
    | 'lunchmoney'
    | 'merge'
    | 'microsoft'
    | 'moota'
    | 'onebrick'
    | 'outreach'
    | 'pipedrive'
    | 'plaid'
    | 'qbo'
    | 'ramp'
    | 'salesforce'
    | 'salesloft'
    | 'saltedge'
    | 'slack'
    | 'splitwise'
    | 'stripe'
    | 'teller'
    | 'toggl'
    | 'twenty'
    | 'wise'
    | 'xero'
    | 'yodlee'
    | 'zohodesk'
    | 'googledrive';

  expand?: string;

  /**
   * Limit the number of items returned
   */
  limit?: number;
}

export interface ListConnectionsParams extends OffsetPaginationParams {
  /**
   * The id of the connector config, starts with `ccfg_`
   */
  connector_config_id?: string;

  /**
   * The name of the connector
   */
  connector_name?:
    | 'aircall'
    | 'airtable'
    | 'apollo'
    | 'beancount'
    | 'brex'
    | 'coda'
    | 'confluence'
    | 'discord'
    | 'finch'
    | 'firebase'
    | 'foreceipt'
    | 'github'
    | 'gong'
    | 'google'
    | 'greenhouse'
    | 'heron'
    | 'hubspot'
    | 'intercom'
    | 'jira'
    | 'kustomer'
    | 'lever'
    | 'linear'
    | 'lunchmoney'
    | 'merge'
    | 'microsoft'
    | 'moota'
    | 'onebrick'
    | 'outreach'
    | 'pipedrive'
    | 'plaid'
    | 'qbo'
    | 'ramp'
    | 'salesforce'
    | 'salesloft'
    | 'saltedge'
    | 'slack'
    | 'splitwise'
    | 'stripe'
    | 'teller'
    | 'toggl'
    | 'twenty'
    | 'wise'
    | 'xero'
    | 'yodlee'
    | 'zohodesk'
    | 'googledrive';

  /**
   * The id of the customer in your application. Ensure it is unique for that
   * customer.
   */
  customer_id?: string;

  expand?: Array<'connector' | 'enabled_integrations'>;

  /**
   * Controls secret inclusion: none (default), basic (auth only), or all secrets
   */
  include_secrets?: 'none' | 'basic' | 'all';

  /**
   * Limit the number of items returned
   */
  limit?: number;
}

export declare namespace TopLevel {
  export {
    type CheckConnectionResponse as CheckConnectionResponse,
    type CreateMagicLinkResponse as CreateMagicLinkResponse,
    type CreateTokenResponse as CreateTokenResponse,
    type GetConnectionResponse as GetConnectionResponse,
    type GetCurrentUserResponse as GetCurrentUserResponse,
    type ListConnectionConfigsResponse as ListConnectionConfigsResponse,
    type ListConnectionsResponse as ListConnectionsResponse,
    type ListConnectionConfigsResponsesOffsetPagination as ListConnectionConfigsResponsesOffsetPagination,
    type ListConnectionsResponsesOffsetPagination as ListConnectionsResponsesOffsetPagination,
    type CreateMagicLinkParams as CreateMagicLinkParams,
    type CreateTokenParams as CreateTokenParams,
    type GetConnectionParams as GetConnectionParams,
    type ListConnectionConfigsParams as ListConnectionConfigsParams,
    type ListConnectionsParams as ListConnectionsParams,
  };
}
