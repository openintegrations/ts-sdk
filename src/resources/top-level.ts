// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { OffsetPagination, type OffsetPaginationParams } from '../core/pagination';

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

export type CreateConnectionResponse =
  | CreateConnectionResponse.ConnectorsAircallConnectionSettings
  | CreateConnectionResponse.ConnectorsAirtableConnectionSettings
  | CreateConnectionResponse.ConnectorsApolloConnectionSettings
  | CreateConnectionResponse.ConnectorsBrexConnectionSettings
  | CreateConnectionResponse.ConnectorsCodaConnectionSettings
  | CreateConnectionResponse.ConnectorsConfluenceConnectionSettings
  | CreateConnectionResponse.ConnectorsDiscordConnectionSettings
  | CreateConnectionResponse.ConnectorsFacebookConnectionSettings
  | CreateConnectionResponse.ConnectorsFinchConnectionSettings
  | CreateConnectionResponse.ConnectorsFirebaseConnectionSettings
  | CreateConnectionResponse.ConnectorsForeceiptConnectionSettings
  | CreateConnectionResponse.ConnectorsGitHubConnectionSettings
  | CreateConnectionResponse.ConnectorsGongConnectionSettings
  | CreateConnectionResponse.ConnectorsGooglecalendarConnectionSettings
  | CreateConnectionResponse.ConnectorsGoogledocsConnectionSettings
  | CreateConnectionResponse.ConnectorsGoogledriveConnectionSettings
  | CreateConnectionResponse.ConnectorsGooglemailConnectionSettings
  | CreateConnectionResponse.ConnectorsGooglesheetConnectionSettings
  | CreateConnectionResponse.ConnectorsGreenhouseConnectionSettings
  | CreateConnectionResponse.ConnectorsHeronConnectionSettings
  | CreateConnectionResponse.ConnectorsHubspotConnectionSettings
  | CreateConnectionResponse.ConnectorsInstagramConnectionSettings
  | CreateConnectionResponse.ConnectorsIntercomConnectionSettings
  | CreateConnectionResponse.ConnectorsJiraConnectionSettings
  | CreateConnectionResponse.ConnectorsKustomerConnectionSettings
  | CreateConnectionResponse.ConnectorsLeverConnectionSettings
  | CreateConnectionResponse.ConnectorsLinearConnectionSettings
  | CreateConnectionResponse.ConnectorsLinkedinConnectionSettings
  | CreateConnectionResponse.ConnectorsLunchmoneyConnectionSettings
  | CreateConnectionResponse.ConnectorsMercuryConnectionSettings
  | CreateConnectionResponse.ConnectorsMergeConnectionSettings
  | CreateConnectionResponse.ConnectorsMicrosoftConnectionSettings
  | CreateConnectionResponse.ConnectorsMootaConnectionSettings
  | CreateConnectionResponse.ConnectorsNotionConnectionSettings
  | CreateConnectionResponse.ConnectorsOnebrickConnectionSettings
  | CreateConnectionResponse.ConnectorsOutreachConnectionSettings
  | CreateConnectionResponse.ConnectorsPipedriveConnectionSettings
  | CreateConnectionResponse.ConnectorsPlaidConnectionSettings
  | CreateConnectionResponse.ConnectorsPostgresConnectionSettings
  | CreateConnectionResponse.ConnectorsQuickbooksConnectionSettings
  | CreateConnectionResponse.ConnectorsRampConnectionSettings
  | CreateConnectionResponse.ConnectorsRedditConnectionSettings
  | CreateConnectionResponse.ConnectorsSalesforceConnectionSettings
  | CreateConnectionResponse.ConnectorsSalesloftConnectionSettings
  | CreateConnectionResponse.ConnectorsSaltedgeConnectionSettings
  | CreateConnectionResponse.ConnectorsSharepointonlineConnectionSettings
  | CreateConnectionResponse.ConnectorsSlackConnectionSettings
  | CreateConnectionResponse.ConnectorsSplitwiseConnectionSettings
  | CreateConnectionResponse.ConnectorsStripeConnectionSettings
  | CreateConnectionResponse.ConnectorsTellerConnectionSettings
  | CreateConnectionResponse.ConnectorsTogglConnectionSettings
  | CreateConnectionResponse.ConnectorsTwentyConnectionSettings
  | CreateConnectionResponse.ConnectorsTwitterConnectionSettings
  | CreateConnectionResponse.ConnectorsVenmoConnectionSettings
  | CreateConnectionResponse.ConnectorsWiseConnectionSettings
  | CreateConnectionResponse.ConnectorsXeroConnectionSettings
  | CreateConnectionResponse.ConnectorsYodleeConnectionSettings
  | CreateConnectionResponse.ConnectorsZohodeskConnectionSettings;

export namespace CreateConnectionResponse {
  export interface ConnectorsAircallConnectionSettings {
    connector_name: 'aircall';

    settings: ConnectorsAircallConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsAircallConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsAirtableConnectionSettings {
    connector_name: 'airtable';

    settings: ConnectorsAirtableConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

  export interface ConnectorsBrexConnectionSettings {
    connector_name: 'brex';

    settings: ConnectorsBrexConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsConfluenceConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsDiscordConnectionSettings {
    connector_name: 'discord';

    settings: ConnectorsDiscordConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsDiscordConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsFacebookConnectionSettings {
    connector_name: 'facebook';

    settings: ConnectorsFacebookConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsFacebookConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsForeceiptConnectionSettings {
    export interface Settings {
      envName: 'staging' | 'production';

      _id?: unknown;

      credentials?: unknown;
    }
  }

  export interface ConnectorsGitHubConnectionSettings {
    connector_name: 'github';

    settings: ConnectorsGitHubConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGitHubConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsGongConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorsGongConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

  export interface ConnectorsGooglecalendarConnectionSettings {
    connector_name: 'googlecalendar';

    settings: ConnectorsGooglecalendarConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGooglecalendarConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsGoogledocsConnectionSettings {
    connector_name: 'googledocs';

    settings: ConnectorsGoogledocsConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGoogledocsConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsGoogledriveConnectionSettings {
    connector_name: 'googledrive';

    settings: ConnectorsGoogledriveConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGoogledriveConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsGooglemailConnectionSettings {
    connector_name: 'googlemail';

    settings: ConnectorsGooglemailConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGooglemailConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsGooglesheetConnectionSettings {
    connector_name: 'googlesheet';

    settings: ConnectorsGooglesheetConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGooglesheetConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsGreenhouseConnectionSettings {
    connector_name: 'greenhouse';

    settings: ConnectorsGreenhouseConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export interface ConnectorsHubspotConnectionSettings {
    connector_name: 'hubspot';

    settings: ConnectorsHubspotConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsHubspotConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsInstagramConnectionSettings {
    connector_name: 'instagram';

    settings: ConnectorsInstagramConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsInstagramConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsLinearConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsLinkedinConnectionSettings {
    connector_name: 'linkedin';

    settings: ConnectorsLinkedinConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsLinkedinConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsLunchmoneyConnectionSettings {
    connector_name: 'lunchmoney';

    settings: null;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export interface ConnectorsMercuryConnectionSettings {
    connector_name: 'mercury';

    settings: null;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export interface ConnectorsMergeConnectionSettings {
    connector_name: 'merge';

    settings: ConnectorsMergeConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export interface ConnectorsNotionConnectionSettings {
    connector_name: 'notion';

    settings: ConnectorsNotionConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsNotionConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsOnebrickConnectionSettings {
    connector_name: 'onebrick';

    settings: ConnectorsOnebrickConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsPostgresConnectionSettings {
    export interface Settings {
      databaseUrl: string;

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

  export interface ConnectorsQuickbooksConnectionSettings {
    connector_name: 'quickbooks';

    settings: ConnectorsQuickbooksConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsQuickbooksConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * The realmId of your quickbooks company (e.g., 9341453474484455)
       */
      realmId: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsRampConnectionSettings {
    connector_name: 'ramp';

    settings: ConnectorsRampConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsRampConnectionSettings {
    export interface Settings {
      accessToken?: string | null;

      startAfterTransactionId?: string | null;
    }
  }

  export interface ConnectorsRedditConnectionSettings {
    connector_name: 'reddit';

    settings: ConnectorsRedditConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsRedditConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

  export interface ConnectorsSalesforceConnectionSettings {
    connector_name: 'salesforce';

    settings: ConnectorsSalesforceConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsSalesforceConnectionSettings {
    export interface Settings {
      /**
       * The instance URL of your Salesforce account (e.g., example)
       */
      instance_url: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsSalesloftConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorsSalesloftConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    settings?: unknown;

    updated_at?: string;
  }

  export interface ConnectorsSharepointonlineConnectionSettings {
    connector_name: 'sharepointonline';

    settings: ConnectorsSharepointonlineConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsSharepointonlineConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsSlackConnectionSettings {
    connector_name: 'slack';

    settings: ConnectorsSlackConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsSlackConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsSplitwiseConnectionSettings {
    connector_name: 'splitwise';

    settings: ConnectorsSplitwiseConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsTwentyConnectionSettings {
    export interface Settings {
      access_token: string;
    }
  }

  export interface ConnectorsTwitterConnectionSettings {
    connector_name: 'twitter';

    settings: ConnectorsTwitterConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsTwitterConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

  export interface ConnectorsVenmoConnectionSettings {
    connector_name: 'venmo';

    settings: ConnectorsVenmoConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

export interface DeleteConnectionResponse {
  /**
   * The id of the connection, starts with `conn_`
   */
  id: string;
}

/**
 * The connection details
 */
export type GetConnectionResponse =
  | GetConnectionResponse.ConnectorsAircallConnectionSettings
  | GetConnectionResponse.ConnectorsAirtableConnectionSettings
  | GetConnectionResponse.ConnectorsApolloConnectionSettings
  | GetConnectionResponse.ConnectorsBrexConnectionSettings
  | GetConnectionResponse.ConnectorsCodaConnectionSettings
  | GetConnectionResponse.ConnectorsConfluenceConnectionSettings
  | GetConnectionResponse.ConnectorsDiscordConnectionSettings
  | GetConnectionResponse.ConnectorsFacebookConnectionSettings
  | GetConnectionResponse.ConnectorsFinchConnectionSettings
  | GetConnectionResponse.ConnectorsFirebaseConnectionSettings
  | GetConnectionResponse.ConnectorsForeceiptConnectionSettings
  | GetConnectionResponse.ConnectorsGitHubConnectionSettings
  | GetConnectionResponse.ConnectorsGongConnectionSettings
  | GetConnectionResponse.ConnectorsGooglecalendarConnectionSettings
  | GetConnectionResponse.ConnectorsGoogledocsConnectionSettings
  | GetConnectionResponse.ConnectorsGoogledriveConnectionSettings
  | GetConnectionResponse.ConnectorsGooglemailConnectionSettings
  | GetConnectionResponse.ConnectorsGooglesheetConnectionSettings
  | GetConnectionResponse.ConnectorsGreenhouseConnectionSettings
  | GetConnectionResponse.ConnectorsHeronConnectionSettings
  | GetConnectionResponse.ConnectorsHubspotConnectionSettings
  | GetConnectionResponse.ConnectorsInstagramConnectionSettings
  | GetConnectionResponse.ConnectorsIntercomConnectionSettings
  | GetConnectionResponse.ConnectorsJiraConnectionSettings
  | GetConnectionResponse.ConnectorsKustomerConnectionSettings
  | GetConnectionResponse.ConnectorsLeverConnectionSettings
  | GetConnectionResponse.ConnectorsLinearConnectionSettings
  | GetConnectionResponse.ConnectorsLinkedinConnectionSettings
  | GetConnectionResponse.ConnectorsLunchmoneyConnectionSettings
  | GetConnectionResponse.ConnectorsMercuryConnectionSettings
  | GetConnectionResponse.ConnectorsMergeConnectionSettings
  | GetConnectionResponse.ConnectorsMicrosoftConnectionSettings
  | GetConnectionResponse.ConnectorsMootaConnectionSettings
  | GetConnectionResponse.ConnectorsNotionConnectionSettings
  | GetConnectionResponse.ConnectorsOnebrickConnectionSettings
  | GetConnectionResponse.ConnectorsOutreachConnectionSettings
  | GetConnectionResponse.ConnectorsPipedriveConnectionSettings
  | GetConnectionResponse.ConnectorsPlaidConnectionSettings
  | GetConnectionResponse.ConnectorsPostgresConnectionSettings
  | GetConnectionResponse.ConnectorsQuickbooksConnectionSettings
  | GetConnectionResponse.ConnectorsRampConnectionSettings
  | GetConnectionResponse.ConnectorsRedditConnectionSettings
  | GetConnectionResponse.ConnectorsSalesforceConnectionSettings
  | GetConnectionResponse.ConnectorsSalesloftConnectionSettings
  | GetConnectionResponse.ConnectorsSaltedgeConnectionSettings
  | GetConnectionResponse.ConnectorsSharepointonlineConnectionSettings
  | GetConnectionResponse.ConnectorsSlackConnectionSettings
  | GetConnectionResponse.ConnectorsSplitwiseConnectionSettings
  | GetConnectionResponse.ConnectorsStripeConnectionSettings
  | GetConnectionResponse.ConnectorsTellerConnectionSettings
  | GetConnectionResponse.ConnectorsTogglConnectionSettings
  | GetConnectionResponse.ConnectorsTwentyConnectionSettings
  | GetConnectionResponse.ConnectorsTwitterConnectionSettings
  | GetConnectionResponse.ConnectorsVenmoConnectionSettings
  | GetConnectionResponse.ConnectorsWiseConnectionSettings
  | GetConnectionResponse.ConnectorsXeroConnectionSettings
  | GetConnectionResponse.ConnectorsYodleeConnectionSettings
  | GetConnectionResponse.ConnectorsZohodeskConnectionSettings;

export namespace GetConnectionResponse {
  export interface ConnectorsAircallConnectionSettings {
    connector_name: 'aircall';

    settings: ConnectorsAircallConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsAircallConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsAircallConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsAirtableConnectionSettings {
    connector_name: 'airtable';

    settings: ConnectorsAirtableConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsAirtableConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsAirtableConnectionSettings {
    export interface Settings {
      airtableBase: string;

      apiKey: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsApolloConnectionSettings {
    connector_name: 'apollo';

    settings: ConnectorsApolloConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsApolloConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsBrexConnectionSettings {
    connector_name: 'brex';

    settings: ConnectorsBrexConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsBrexConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsBrexConnectionSettings {
    export interface Settings {
      accessToken: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsCodaConnectionSettings {
    connector_name: 'coda';

    settings: ConnectorsCodaConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsCodaConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsCodaConnectionSettings {
    export interface Settings {
      apiKey: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsConfluenceConnectionSettings {
    connector_name: 'confluence';

    settings: ConnectorsConfluenceConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsConfluenceConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsConfluenceConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsDiscordConnectionSettings {
    connector_name: 'discord';

    settings: ConnectorsDiscordConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsDiscordConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsDiscordConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsFacebookConnectionSettings {
    connector_name: 'facebook';

    settings: ConnectorsFacebookConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsFacebookConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsFacebookConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsFinchConnectionSettings {
    connector_name: 'finch';

    settings: ConnectorsFinchConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsFinchConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsFinchConnectionSettings {
    export interface Settings {
      access_token: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsFirebaseConnectionSettings {
    connector_name: 'firebase';

    settings:
      | ConnectorsFirebaseConnectionSettings.UnionMember0
      | ConnectorsFirebaseConnectionSettings.UnionMember1;

    id?: string;

    connector?: ConnectorsFirebaseConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsForeceiptConnectionSettings {
    connector_name: 'foreceipt';

    settings: ConnectorsForeceiptConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsForeceiptConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsForeceiptConnectionSettings {
    export interface Settings {
      envName: 'staging' | 'production';

      _id?: unknown;

      credentials?: unknown;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGitHubConnectionSettings {
    connector_name: 'github';

    settings: ConnectorsGitHubConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGitHubConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGitHubConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGongConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorsGongConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGongConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGooglecalendarConnectionSettings {
    connector_name: 'googlecalendar';

    settings: ConnectorsGooglecalendarConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGooglecalendarConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGooglecalendarConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGoogledocsConnectionSettings {
    connector_name: 'googledocs';

    settings: ConnectorsGoogledocsConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGoogledocsConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGoogledocsConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGoogledriveConnectionSettings {
    connector_name: 'googledrive';

    settings: ConnectorsGoogledriveConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGoogledriveConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGoogledriveConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGooglemailConnectionSettings {
    connector_name: 'googlemail';

    settings: ConnectorsGooglemailConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGooglemailConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGooglemailConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGooglesheetConnectionSettings {
    connector_name: 'googlesheet';

    settings: ConnectorsGooglesheetConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGooglesheetConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGooglesheetConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGreenhouseConnectionSettings {
    connector_name: 'greenhouse';

    settings: ConnectorsGreenhouseConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGreenhouseConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGreenhouseConnectionSettings {
    export interface Settings {
      apiKey: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsHeronConnectionSettings {
    connector_name: 'heron';

    settings: null;

    id?: string;

    connector?: ConnectorsHeronConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsHeronConnectionSettings {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsHubspotConnectionSettings {
    connector_name: 'hubspot';

    settings: ConnectorsHubspotConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsHubspotConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsHubspotConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsInstagramConnectionSettings {
    connector_name: 'instagram';

    settings: ConnectorsInstagramConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsInstagramConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsInstagramConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsIntercomConnectionSettings {
    connector_name: 'intercom';

    settings: ConnectorsIntercomConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsIntercomConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsJiraConnectionSettings {
    connector_name: 'jira';

    settings: ConnectorsJiraConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsJiraConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsKustomerConnectionSettings {
    connector_name: 'kustomer';

    settings: ConnectorsKustomerConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsKustomerConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsLeverConnectionSettings {
    connector_name: 'lever';

    settings: ConnectorsLeverConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsLeverConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsLinearConnectionSettings {
    connector_name: 'linear';

    settings: ConnectorsLinearConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsLinearConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsLinearConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsLinkedinConnectionSettings {
    connector_name: 'linkedin';

    settings: ConnectorsLinkedinConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsLinkedinConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsLinkedinConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsLunchmoneyConnectionSettings {
    connector_name: 'lunchmoney';

    settings: null;

    id?: string;

    connector?: ConnectorsLunchmoneyConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsLunchmoneyConnectionSettings {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsMercuryConnectionSettings {
    connector_name: 'mercury';

    settings: null;

    id?: string;

    connector?: ConnectorsMercuryConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsMercuryConnectionSettings {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsMergeConnectionSettings {
    connector_name: 'merge';

    settings: ConnectorsMergeConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsMergeConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsMergeConnectionSettings {
    export interface Settings {
      accountToken: string;

      accountDetails?: unknown;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsMicrosoftConnectionSettings {
    connector_name: 'microsoft';

    settings: ConnectorsMicrosoftConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsMicrosoftConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsMootaConnectionSettings {
    connector_name: 'moota';

    settings: null;

    id?: string;

    connector?: ConnectorsMootaConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsMootaConnectionSettings {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsNotionConnectionSettings {
    connector_name: 'notion';

    settings: ConnectorsNotionConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsNotionConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsNotionConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsOnebrickConnectionSettings {
    connector_name: 'onebrick';

    settings: ConnectorsOnebrickConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsOnebrickConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsOnebrickConnectionSettings {
    export interface Settings {
      accessToken: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsOutreachConnectionSettings {
    connector_name: 'outreach';

    settings: ConnectorsOutreachConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsOutreachConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsPipedriveConnectionSettings {
    connector_name: 'pipedrive';

    settings: ConnectorsPipedriveConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsPipedriveConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsPlaidConnectionSettings {
    connector_name: 'plaid';

    settings: ConnectorsPlaidConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsPlaidConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsPostgresConnectionSettings {
    connector_name: 'postgres';

    settings: ConnectorsPostgresConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsPostgresConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsPostgresConnectionSettings {
    export interface Settings {
      databaseUrl: string;

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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsQuickbooksConnectionSettings {
    connector_name: 'quickbooks';

    settings: ConnectorsQuickbooksConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsQuickbooksConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsQuickbooksConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * The realmId of your quickbooks company (e.g., 9341453474484455)
       */
      realmId: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsRampConnectionSettings {
    connector_name: 'ramp';

    settings: ConnectorsRampConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsRampConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsRampConnectionSettings {
    export interface Settings {
      accessToken?: string | null;

      startAfterTransactionId?: string | null;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsRedditConnectionSettings {
    connector_name: 'reddit';

    settings: ConnectorsRedditConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsRedditConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsRedditConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsSalesforceConnectionSettings {
    connector_name: 'salesforce';

    settings: ConnectorsSalesforceConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsSalesforceConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsSalesforceConnectionSettings {
    export interface Settings {
      /**
       * The instance URL of your Salesforce account (e.g., example)
       */
      instance_url: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsSalesloftConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorsSalesloftConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsSalesloftConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsSaltedgeConnectionSettings {
    connector_name: 'saltedge';

    id?: string;

    connector?: ConnectorsSaltedgeConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    settings?: unknown;

    updated_at?: string;
  }

  export namespace ConnectorsSaltedgeConnectionSettings {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsSharepointonlineConnectionSettings {
    connector_name: 'sharepointonline';

    settings: ConnectorsSharepointonlineConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsSharepointonlineConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsSharepointonlineConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsSlackConnectionSettings {
    connector_name: 'slack';

    settings: ConnectorsSlackConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsSlackConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsSlackConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsSplitwiseConnectionSettings {
    connector_name: 'splitwise';

    settings: ConnectorsSplitwiseConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsSplitwiseConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsStripeConnectionSettings {
    connector_name: 'stripe';

    settings: ConnectorsStripeConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsStripeConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsStripeConnectionSettings {
    export interface Settings {
      secretKey: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsTellerConnectionSettings {
    connector_name: 'teller';

    settings: ConnectorsTellerConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsTellerConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsTellerConnectionSettings {
    export interface Settings {
      token: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsTogglConnectionSettings {
    connector_name: 'toggl';

    settings: ConnectorsTogglConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsTogglConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsTogglConnectionSettings {
    export interface Settings {
      apiToken: string;

      email?: string | null;

      password?: string | null;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsTwentyConnectionSettings {
    connector_name: 'twenty';

    settings: ConnectorsTwentyConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsTwentyConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsTwentyConnectionSettings {
    export interface Settings {
      access_token: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsTwitterConnectionSettings {
    connector_name: 'twitter';

    settings: ConnectorsTwitterConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsTwitterConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsTwitterConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsVenmoConnectionSettings {
    connector_name: 'venmo';

    settings: ConnectorsVenmoConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsVenmoConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsVenmoConnectionSettings {
    export interface Settings {
      credentials?: unknown;

      me?: unknown;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsWiseConnectionSettings {
    connector_name: 'wise';

    settings: ConnectorsWiseConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsWiseConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsWiseConnectionSettings {
    export interface Settings {
      envName: 'sandbox' | 'live';

      apiToken?: string | null;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsXeroConnectionSettings {
    connector_name: 'xero';

    settings: ConnectorsXeroConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsXeroConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsYodleeConnectionSettings {
    connector_name: 'yodlee';

    settings: ConnectorsYodleeConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsYodleeConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsZohodeskConnectionSettings {
    connector_name: 'zohodesk';

    settings: ConnectorsZohodeskConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsZohodeskConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
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
  | ListConnectionConfigsResponse.ConnectorsBrexConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsCodaConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsConfluenceConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsDiscordConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsFacebookConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsFinchConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsFirebaseConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsForeceiptConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsGitHubConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsGongConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsGooglecalendarConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsGoogledocsConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsGoogledriveConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsGooglemailConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsGooglesheetConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsGreenhouseConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsHeronConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsHubspotConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsInstagramConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsIntercomConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsJiraConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsKustomerConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsLeverConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsLinearConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsLinkedinConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsLunchmoneyConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsMercuryConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsMergeConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsMicrosoftConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsMootaConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsNotionConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsOnebrickConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsOutreachConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsPipedriveConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsPlaidConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsPostgresConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsQuickbooksConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsRampConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsRedditConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsSalesforceConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsSalesloftConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsSaltedgeConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsSharepointonlineConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsSlackConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsSplitwiseConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsStripeConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsTellerConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsTogglConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsTwentyConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsTwitterConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsVenmoConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsWiseConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsXeroConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsYodleeConnectorConfig
  | ListConnectionConfigsResponse.ConnectorsZohodeskConnectorConfig;

export namespace ListConnectionConfigsResponse {
  export interface ConnectorsAircallConnectorConfig {
    config: ConnectorsAircallConnectorConfig.Config;

    connector_name: 'aircall';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsAircallConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsAircallConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsAircallConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsAirtableConnectorConfig {
    config: null;

    connector_name: 'airtable';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsAirtableConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsAirtableConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsAirtableConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsApolloConnectorConfig {
    config: null;

    connector_name: 'apollo';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsApolloConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsApolloConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsApolloConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsBrexConnectorConfig {
    config: ConnectorsBrexConnectorConfig.Config;

    connector_name: 'brex';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsBrexConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsBrexConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsCodaConnectorConfig {
    config: null;

    connector_name: 'coda';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsCodaConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsCodaConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsCodaConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsConfluenceConnectorConfig {
    config: ConnectorsConfluenceConnectorConfig.Config;

    connector_name: 'confluence';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsConfluenceConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsConfluenceConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsConfluenceConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsDiscordConnectorConfig {
    config: ConnectorsDiscordConnectorConfig.Config;

    connector_name: 'discord';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsDiscordConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsDiscordConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsDiscordConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsFacebookConnectorConfig {
    config: ConnectorsFacebookConnectorConfig.Config;

    connector_name: 'facebook';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsFacebookConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsFacebookConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsFacebookConnectorConfig {
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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsFinchConnectorConfig {
    config: ConnectorsFinchConnectorConfig.Config;

    connector_name: 'finch';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsFinchConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsFinchConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsFirebaseConnectorConfig {
    config: null;

    connector_name: 'firebase';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsFirebaseConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsFirebaseConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsFirebaseConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsForeceiptConnectorConfig {
    config: null;

    connector_name: 'foreceipt';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsForeceiptConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsForeceiptConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsForeceiptConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsGitHubConnectorConfig {
    config: ConnectorsGitHubConnectorConfig.Config;

    connector_name: 'github';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsGitHubConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsGitHubConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGitHubConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsGongConnectorConfig {
    config: ConnectorsGongConnectorConfig.Config;

    connector_name: 'gong';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsGongConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsGongConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsGooglecalendarConnectorConfig {
    config: ConnectorsGooglecalendarConnectorConfig.Config;

    connector_name: 'googlecalendar';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsGooglecalendarConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsGooglecalendarConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGooglecalendarConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsGoogledocsConnectorConfig {
    config: ConnectorsGoogledocsConnectorConfig.Config;

    connector_name: 'googledocs';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsGoogledocsConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsGoogledocsConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGoogledocsConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsGoogledriveConnectorConfig {
    config: ConnectorsGoogledriveConnectorConfig.Config;

    connector_name: 'googledrive';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsGoogledriveConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsGoogledriveConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGoogledriveConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsGooglemailConnectorConfig {
    config: ConnectorsGooglemailConnectorConfig.Config;

    connector_name: 'googlemail';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsGooglemailConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsGooglemailConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGooglemailConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsGooglesheetConnectorConfig {
    config: ConnectorsGooglesheetConnectorConfig.Config;

    connector_name: 'googlesheet';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsGooglesheetConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsGooglesheetConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGooglesheetConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsGreenhouseConnectorConfig {
    config: null;

    connector_name: 'greenhouse';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsGreenhouseConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsGreenhouseConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGreenhouseConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsHeronConnectorConfig {
    config: ConnectorsHeronConnectorConfig.Config;

    connector_name: 'heron';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsHeronConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsHeronConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsHubspotConnectorConfig {
    config: ConnectorsHubspotConnectorConfig.Config;

    connector_name: 'hubspot';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsHubspotConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsHubspotConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsHubspotConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsInstagramConnectorConfig {
    config: ConnectorsInstagramConnectorConfig.Config;

    connector_name: 'instagram';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsInstagramConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsInstagramConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsInstagramConnectorConfig {
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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsIntercomConnectorConfig {
    config: ConnectorsIntercomConnectorConfig.Config;

    connector_name: 'intercom';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsIntercomConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsIntercomConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsJiraConnectorConfig {
    config: ConnectorsJiraConnectorConfig.Config;

    connector_name: 'jira';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsJiraConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsJiraConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsKustomerConnectorConfig {
    config: ConnectorsKustomerConnectorConfig.Config;

    connector_name: 'kustomer';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsKustomerConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsKustomerConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsLeverConnectorConfig {
    config: ConnectorsLeverConnectorConfig.Config;

    connector_name: 'lever';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsLeverConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsLeverConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsLinearConnectorConfig {
    config: ConnectorsLinearConnectorConfig.Config;

    connector_name: 'linear';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsLinearConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsLinearConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsLinearConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsLinkedinConnectorConfig {
    config: ConnectorsLinkedinConnectorConfig.Config;

    connector_name: 'linkedin';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsLinkedinConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsLinkedinConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsLinkedinConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsLunchmoneyConnectorConfig {
    config: ConnectorsLunchmoneyConnectorConfig.Config;

    connector_name: 'lunchmoney';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsLunchmoneyConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsLunchmoneyConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsMercuryConnectorConfig {
    config: ConnectorsMercuryConnectorConfig.Config;

    connector_name: 'mercury';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsMercuryConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsMercuryConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsMergeConnectorConfig {
    config: ConnectorsMergeConnectorConfig.Config;

    connector_name: 'merge';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsMergeConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsMergeConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsMicrosoftConnectorConfig {
    config: ConnectorsMicrosoftConnectorConfig.Config;

    connector_name: 'microsoft';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsMicrosoftConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsMicrosoftConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsMootaConnectorConfig {
    config: ConnectorsMootaConnectorConfig.Config;

    connector_name: 'moota';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsMootaConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsMootaConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsNotionConnectorConfig {
    config: ConnectorsNotionConnectorConfig.Config;

    connector_name: 'notion';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsNotionConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsNotionConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsNotionConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsOnebrickConnectorConfig {
    config: ConnectorsOnebrickConnectorConfig.Config;

    connector_name: 'onebrick';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsOnebrickConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsOnebrickConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsOutreachConnectorConfig {
    config: ConnectorsOutreachConnectorConfig.Config;

    connector_name: 'outreach';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsOutreachConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsOutreachConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsPipedriveConnectorConfig {
    config: ConnectorsPipedriveConnectorConfig.Config;

    connector_name: 'pipedrive';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsPipedriveConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsPipedriveConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsPlaidConnectorConfig {
    config: ConnectorsPlaidConnectorConfig.Config;

    connector_name: 'plaid';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsPlaidConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsPlaidConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsPostgresConnectorConfig {
    config: null;

    connector_name: 'postgres';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsPostgresConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsPostgresConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsPostgresConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsQuickbooksConnectorConfig {
    config: ConnectorsQuickbooksConnectorConfig.Config;

    connector_name: 'quickbooks';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsQuickbooksConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsQuickbooksConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsQuickbooksConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsRampConnectorConfig {
    config: ConnectorsRampConnectorConfig.Config;

    connector_name: 'ramp';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsRampConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsRampConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsRedditConnectorConfig {
    config: ConnectorsRedditConnectorConfig.Config;

    connector_name: 'reddit';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsRedditConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsRedditConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsRedditConnectorConfig {
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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsSalesforceConnectorConfig {
    config: ConnectorsSalesforceConnectorConfig.Config;

    connector_name: 'salesforce';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsSalesforceConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsSalesforceConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSalesforceConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsSalesloftConnectorConfig {
    config: ConnectorsSalesloftConnectorConfig.Config;

    connector_name: 'salesloft';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsSalesloftConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsSalesloftConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsSaltedgeConnectorConfig {
    config: ConnectorsSaltedgeConnectorConfig.Config;

    connector_name: 'saltedge';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsSaltedgeConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsSaltedgeConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsSharepointonlineConnectorConfig {
    config: ConnectorsSharepointonlineConnectorConfig.Config;

    connector_name: 'sharepointonline';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsSharepointonlineConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsSharepointonlineConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSharepointonlineConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsSlackConnectorConfig {
    config: ConnectorsSlackConnectorConfig.Config;

    connector_name: 'slack';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsSlackConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsSlackConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSlackConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsSplitwiseConnectorConfig {
    config: null;

    connector_name: 'splitwise';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsSplitwiseConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsSplitwiseConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSplitwiseConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsStripeConnectorConfig {
    config: ConnectorsStripeConnectorConfig.Config;

    connector_name: 'stripe';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsStripeConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsStripeConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsTellerConnectorConfig {
    config: ConnectorsTellerConnectorConfig.Config;

    connector_name: 'teller';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsTellerConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsTellerConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsTogglConnectorConfig {
    config: null;

    connector_name: 'toggl';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsTogglConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsTogglConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsTogglConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsTwentyConnectorConfig {
    config: null;

    connector_name: 'twenty';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsTwentyConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsTwentyConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsTwentyConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsTwitterConnectorConfig {
    config: ConnectorsTwitterConnectorConfig.Config;

    connector_name: 'twitter';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsTwitterConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsTwitterConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsTwitterConnectorConfig {
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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsVenmoConnectorConfig {
    config: ConnectorsVenmoConnectorConfig.Config;

    connector_name: 'venmo';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsVenmoConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsVenmoConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsWiseConnectorConfig {
    config: null;

    connector_name: 'wise';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsWiseConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsWiseConnectorConfig.Integrations>;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsWiseConnectorConfig {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsXeroConnectorConfig {
    config: ConnectorsXeroConnectorConfig.Config;

    connector_name: 'xero';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsXeroConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsXeroConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsYodleeConnectorConfig {
    config: ConnectorsYodleeConnectorConfig.Config;

    connector_name: 'yodlee';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsYodleeConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsYodleeConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }

  export interface ConnectorsZohodeskConnectorConfig {
    config: ConnectorsZohodeskConnectorConfig.Config;

    connector_name: 'zohodesk';

    id?: string;

    connection_count?: number;

    connector?: ConnectorsZohodeskConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorsZohodeskConnectorConfig.Integrations>;

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

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }

    export interface Integrations {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }
  }
}

/**
 * The connection details
 */
export type ListConnectionsResponse =
  | ListConnectionsResponse.ConnectorsAircallConnectionSettings
  | ListConnectionsResponse.ConnectorsAirtableConnectionSettings
  | ListConnectionsResponse.ConnectorsApolloConnectionSettings
  | ListConnectionsResponse.ConnectorsBrexConnectionSettings
  | ListConnectionsResponse.ConnectorsCodaConnectionSettings
  | ListConnectionsResponse.ConnectorsConfluenceConnectionSettings
  | ListConnectionsResponse.ConnectorsDiscordConnectionSettings
  | ListConnectionsResponse.ConnectorsFacebookConnectionSettings
  | ListConnectionsResponse.ConnectorsFinchConnectionSettings
  | ListConnectionsResponse.ConnectorsFirebaseConnectionSettings
  | ListConnectionsResponse.ConnectorsForeceiptConnectionSettings
  | ListConnectionsResponse.ConnectorsGitHubConnectionSettings
  | ListConnectionsResponse.ConnectorsGongConnectionSettings
  | ListConnectionsResponse.ConnectorsGooglecalendarConnectionSettings
  | ListConnectionsResponse.ConnectorsGoogledocsConnectionSettings
  | ListConnectionsResponse.ConnectorsGoogledriveConnectionSettings
  | ListConnectionsResponse.ConnectorsGooglemailConnectionSettings
  | ListConnectionsResponse.ConnectorsGooglesheetConnectionSettings
  | ListConnectionsResponse.ConnectorsGreenhouseConnectionSettings
  | ListConnectionsResponse.ConnectorsHeronConnectionSettings
  | ListConnectionsResponse.ConnectorsHubspotConnectionSettings
  | ListConnectionsResponse.ConnectorsInstagramConnectionSettings
  | ListConnectionsResponse.ConnectorsIntercomConnectionSettings
  | ListConnectionsResponse.ConnectorsJiraConnectionSettings
  | ListConnectionsResponse.ConnectorsKustomerConnectionSettings
  | ListConnectionsResponse.ConnectorsLeverConnectionSettings
  | ListConnectionsResponse.ConnectorsLinearConnectionSettings
  | ListConnectionsResponse.ConnectorsLinkedinConnectionSettings
  | ListConnectionsResponse.ConnectorsLunchmoneyConnectionSettings
  | ListConnectionsResponse.ConnectorsMercuryConnectionSettings
  | ListConnectionsResponse.ConnectorsMergeConnectionSettings
  | ListConnectionsResponse.ConnectorsMicrosoftConnectionSettings
  | ListConnectionsResponse.ConnectorsMootaConnectionSettings
  | ListConnectionsResponse.ConnectorsNotionConnectionSettings
  | ListConnectionsResponse.ConnectorsOnebrickConnectionSettings
  | ListConnectionsResponse.ConnectorsOutreachConnectionSettings
  | ListConnectionsResponse.ConnectorsPipedriveConnectionSettings
  | ListConnectionsResponse.ConnectorsPlaidConnectionSettings
  | ListConnectionsResponse.ConnectorsPostgresConnectionSettings
  | ListConnectionsResponse.ConnectorsQuickbooksConnectionSettings
  | ListConnectionsResponse.ConnectorsRampConnectionSettings
  | ListConnectionsResponse.ConnectorsRedditConnectionSettings
  | ListConnectionsResponse.ConnectorsSalesforceConnectionSettings
  | ListConnectionsResponse.ConnectorsSalesloftConnectionSettings
  | ListConnectionsResponse.ConnectorsSaltedgeConnectionSettings
  | ListConnectionsResponse.ConnectorsSharepointonlineConnectionSettings
  | ListConnectionsResponse.ConnectorsSlackConnectionSettings
  | ListConnectionsResponse.ConnectorsSplitwiseConnectionSettings
  | ListConnectionsResponse.ConnectorsStripeConnectionSettings
  | ListConnectionsResponse.ConnectorsTellerConnectionSettings
  | ListConnectionsResponse.ConnectorsTogglConnectionSettings
  | ListConnectionsResponse.ConnectorsTwentyConnectionSettings
  | ListConnectionsResponse.ConnectorsTwitterConnectionSettings
  | ListConnectionsResponse.ConnectorsVenmoConnectionSettings
  | ListConnectionsResponse.ConnectorsWiseConnectionSettings
  | ListConnectionsResponse.ConnectorsXeroConnectionSettings
  | ListConnectionsResponse.ConnectorsYodleeConnectionSettings
  | ListConnectionsResponse.ConnectorsZohodeskConnectionSettings;

export namespace ListConnectionsResponse {
  export interface ConnectorsAircallConnectionSettings {
    connector_name: 'aircall';

    settings: ConnectorsAircallConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsAircallConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsAircallConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsAirtableConnectionSettings {
    connector_name: 'airtable';

    settings: ConnectorsAirtableConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsAirtableConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsAirtableConnectionSettings {
    export interface Settings {
      airtableBase: string;

      apiKey: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsApolloConnectionSettings {
    connector_name: 'apollo';

    settings: ConnectorsApolloConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsApolloConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsBrexConnectionSettings {
    connector_name: 'brex';

    settings: ConnectorsBrexConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsBrexConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsBrexConnectionSettings {
    export interface Settings {
      accessToken: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsCodaConnectionSettings {
    connector_name: 'coda';

    settings: ConnectorsCodaConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsCodaConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsCodaConnectionSettings {
    export interface Settings {
      apiKey: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsConfluenceConnectionSettings {
    connector_name: 'confluence';

    settings: ConnectorsConfluenceConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsConfluenceConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsConfluenceConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsDiscordConnectionSettings {
    connector_name: 'discord';

    settings: ConnectorsDiscordConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsDiscordConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsDiscordConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsFacebookConnectionSettings {
    connector_name: 'facebook';

    settings: ConnectorsFacebookConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsFacebookConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsFacebookConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsFinchConnectionSettings {
    connector_name: 'finch';

    settings: ConnectorsFinchConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsFinchConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsFinchConnectionSettings {
    export interface Settings {
      access_token: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsFirebaseConnectionSettings {
    connector_name: 'firebase';

    settings:
      | ConnectorsFirebaseConnectionSettings.UnionMember0
      | ConnectorsFirebaseConnectionSettings.UnionMember1;

    id?: string;

    connector?: ConnectorsFirebaseConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsForeceiptConnectionSettings {
    connector_name: 'foreceipt';

    settings: ConnectorsForeceiptConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsForeceiptConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsForeceiptConnectionSettings {
    export interface Settings {
      envName: 'staging' | 'production';

      _id?: unknown;

      credentials?: unknown;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGitHubConnectionSettings {
    connector_name: 'github';

    settings: ConnectorsGitHubConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGitHubConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGitHubConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGongConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorsGongConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGongConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGooglecalendarConnectionSettings {
    connector_name: 'googlecalendar';

    settings: ConnectorsGooglecalendarConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGooglecalendarConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGooglecalendarConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGoogledocsConnectionSettings {
    connector_name: 'googledocs';

    settings: ConnectorsGoogledocsConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGoogledocsConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGoogledocsConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGoogledriveConnectionSettings {
    connector_name: 'googledrive';

    settings: ConnectorsGoogledriveConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGoogledriveConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGoogledriveConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGooglemailConnectionSettings {
    connector_name: 'googlemail';

    settings: ConnectorsGooglemailConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGooglemailConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGooglemailConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGooglesheetConnectionSettings {
    connector_name: 'googlesheet';

    settings: ConnectorsGooglesheetConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGooglesheetConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGooglesheetConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsGreenhouseConnectionSettings {
    connector_name: 'greenhouse';

    settings: ConnectorsGreenhouseConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsGreenhouseConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsGreenhouseConnectionSettings {
    export interface Settings {
      apiKey: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsHeronConnectionSettings {
    connector_name: 'heron';

    settings: null;

    id?: string;

    connector?: ConnectorsHeronConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsHeronConnectionSettings {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsHubspotConnectionSettings {
    connector_name: 'hubspot';

    settings: ConnectorsHubspotConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsHubspotConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsHubspotConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsInstagramConnectionSettings {
    connector_name: 'instagram';

    settings: ConnectorsInstagramConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsInstagramConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsInstagramConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsIntercomConnectionSettings {
    connector_name: 'intercom';

    settings: ConnectorsIntercomConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsIntercomConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsJiraConnectionSettings {
    connector_name: 'jira';

    settings: ConnectorsJiraConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsJiraConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsKustomerConnectionSettings {
    connector_name: 'kustomer';

    settings: ConnectorsKustomerConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsKustomerConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsLeverConnectionSettings {
    connector_name: 'lever';

    settings: ConnectorsLeverConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsLeverConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsLinearConnectionSettings {
    connector_name: 'linear';

    settings: ConnectorsLinearConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsLinearConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsLinearConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsLinkedinConnectionSettings {
    connector_name: 'linkedin';

    settings: ConnectorsLinkedinConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsLinkedinConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsLinkedinConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsLunchmoneyConnectionSettings {
    connector_name: 'lunchmoney';

    settings: null;

    id?: string;

    connector?: ConnectorsLunchmoneyConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsLunchmoneyConnectionSettings {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsMercuryConnectionSettings {
    connector_name: 'mercury';

    settings: null;

    id?: string;

    connector?: ConnectorsMercuryConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsMercuryConnectionSettings {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsMergeConnectionSettings {
    connector_name: 'merge';

    settings: ConnectorsMergeConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsMergeConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsMergeConnectionSettings {
    export interface Settings {
      accountToken: string;

      accountDetails?: unknown;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsMicrosoftConnectionSettings {
    connector_name: 'microsoft';

    settings: ConnectorsMicrosoftConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsMicrosoftConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsMootaConnectionSettings {
    connector_name: 'moota';

    settings: null;

    id?: string;

    connector?: ConnectorsMootaConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsMootaConnectionSettings {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsNotionConnectionSettings {
    connector_name: 'notion';

    settings: ConnectorsNotionConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsNotionConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsNotionConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsOnebrickConnectionSettings {
    connector_name: 'onebrick';

    settings: ConnectorsOnebrickConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsOnebrickConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsOnebrickConnectionSettings {
    export interface Settings {
      accessToken: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsOutreachConnectionSettings {
    connector_name: 'outreach';

    settings: ConnectorsOutreachConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsOutreachConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsPipedriveConnectionSettings {
    connector_name: 'pipedrive';

    settings: ConnectorsPipedriveConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsPipedriveConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsPlaidConnectionSettings {
    connector_name: 'plaid';

    settings: ConnectorsPlaidConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsPlaidConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsPostgresConnectionSettings {
    connector_name: 'postgres';

    settings: ConnectorsPostgresConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsPostgresConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsPostgresConnectionSettings {
    export interface Settings {
      databaseUrl: string;

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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsQuickbooksConnectionSettings {
    connector_name: 'quickbooks';

    settings: ConnectorsQuickbooksConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsQuickbooksConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsQuickbooksConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * The realmId of your quickbooks company (e.g., 9341453474484455)
       */
      realmId: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsRampConnectionSettings {
    connector_name: 'ramp';

    settings: ConnectorsRampConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsRampConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsRampConnectionSettings {
    export interface Settings {
      accessToken?: string | null;

      startAfterTransactionId?: string | null;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsRedditConnectionSettings {
    connector_name: 'reddit';

    settings: ConnectorsRedditConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsRedditConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsRedditConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsSalesforceConnectionSettings {
    connector_name: 'salesforce';

    settings: ConnectorsSalesforceConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsSalesforceConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsSalesforceConnectionSettings {
    export interface Settings {
      /**
       * The instance URL of your Salesforce account (e.g., example)
       */
      instance_url: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsSalesloftConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorsSalesloftConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsSalesloftConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsSaltedgeConnectionSettings {
    connector_name: 'saltedge';

    id?: string;

    connector?: ConnectorsSaltedgeConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    settings?: unknown;

    updated_at?: string;
  }

  export namespace ConnectorsSaltedgeConnectionSettings {
    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsSharepointonlineConnectionSettings {
    connector_name: 'sharepointonline';

    settings: ConnectorsSharepointonlineConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsSharepointonlineConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsSharepointonlineConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsSlackConnectionSettings {
    connector_name: 'slack';

    settings: ConnectorsSlackConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsSlackConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsSlackConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsSplitwiseConnectionSettings {
    connector_name: 'splitwise';

    settings: ConnectorsSplitwiseConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsSplitwiseConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsStripeConnectionSettings {
    connector_name: 'stripe';

    settings: ConnectorsStripeConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsStripeConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsStripeConnectionSettings {
    export interface Settings {
      secretKey: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsTellerConnectionSettings {
    connector_name: 'teller';

    settings: ConnectorsTellerConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsTellerConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsTellerConnectionSettings {
    export interface Settings {
      token: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsTogglConnectionSettings {
    connector_name: 'toggl';

    settings: ConnectorsTogglConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsTogglConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsTogglConnectionSettings {
    export interface Settings {
      apiToken: string;

      email?: string | null;

      password?: string | null;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsTwentyConnectionSettings {
    connector_name: 'twenty';

    settings: ConnectorsTwentyConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsTwentyConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsTwentyConnectionSettings {
    export interface Settings {
      access_token: string;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsTwitterConnectionSettings {
    connector_name: 'twitter';

    settings: ConnectorsTwitterConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsTwitterConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsTwitterConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsVenmoConnectionSettings {
    connector_name: 'venmo';

    settings: ConnectorsVenmoConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsVenmoConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsVenmoConnectionSettings {
    export interface Settings {
      credentials?: unknown;

      me?: unknown;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsWiseConnectionSettings {
    connector_name: 'wise';

    settings: ConnectorsWiseConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsWiseConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

    updated_at?: string;
  }

  export namespace ConnectorsWiseConnectionSettings {
    export interface Settings {
      envName: 'sandbox' | 'live';

      apiToken?: string | null;
    }

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsXeroConnectionSettings {
    connector_name: 'xero';

    settings: ConnectorsXeroConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsXeroConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsYodleeConnectionSettings {
    connector_name: 'yodlee';

    settings: ConnectorsYodleeConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsYodleeConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }

  export interface ConnectorsZohodeskConnectionSettings {
    connector_name: 'zohodesk';

    settings: ConnectorsZohodeskConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorsZohodeskConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string;

    integration_id?: string | null;

    metadata?: Record<string, unknown> | null;

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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    export interface Connector {
      name: string;

      display_name?: string;

      logo_url?: string;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

      schemas?: Connector.Schemas;

      stage?: 'alpha' | 'beta' | 'ga';
    }

    export namespace Connector {
      export interface Schemas {
        connect_input?: unknown;

        connect_output?: unknown;

        connection_settings?: unknown;

        connector_config?: unknown;

        integration_data?: unknown;

        pre_connect_input?: unknown;

        webhook_input?: unknown;
      }
    }
  }
}

/**
 * List of connectors with selected fields
 */
export type ListConnectorsResponse = Array<ListConnectorsResponse.ListConnectorsResponseItem>;

export namespace ListConnectorsResponse {
  export interface ListConnectorsResponseItem {
    name: string;

    display_name?: string;

    integrations?: Array<ListConnectorsResponseItem.Integration>;

    logo_url?: string;

    platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

    schemas?: ListConnectorsResponseItem.Schemas;

    stage?: 'alpha' | 'beta' | 'ga';
  }

  export namespace ListConnectorsResponseItem {
    export interface Integration {
      connector_name: string;

      name: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
      [k: string]: unknown;
    }

    export interface Schemas {
      connect_input?: unknown;

      connect_output?: unknown;

      connection_settings?: unknown;

      connector_config?: unknown;

      integration_data?: unknown;

      pre_connect_input?: unknown;

      webhook_input?: unknown;
    }
  }
}

export interface CreateConnectionParams {
  /**
   * The id of the connector config, starts with `ccfg_`
   */
  connector_config_id: string;

  /**
   * The id of the customer in your application. Ensure it is unique for that
   * customer.
   */
  customer_id: string;

  /**
   * Connector specific data
   */
  data:
    | CreateConnectionParams.ConnectorsAircallConnectionSettings
    | CreateConnectionParams.ConnectorsAirtableConnectionSettings
    | CreateConnectionParams.ConnectorsApolloConnectionSettings
    | CreateConnectionParams.ConnectorsBrexConnectionSettings
    | CreateConnectionParams.ConnectorsCodaConnectionSettings
    | CreateConnectionParams.ConnectorsConfluenceConnectionSettings
    | CreateConnectionParams.ConnectorsDiscordConnectionSettings
    | CreateConnectionParams.ConnectorsFacebookConnectionSettings
    | CreateConnectionParams.ConnectorsFinchConnectionSettings
    | CreateConnectionParams.ConnectorsFirebaseConnectionSettings
    | CreateConnectionParams.ConnectorsForeceiptConnectionSettings
    | CreateConnectionParams.ConnectorsGitHubConnectionSettings
    | CreateConnectionParams.ConnectorsGongConnectionSettings
    | CreateConnectionParams.ConnectorsGooglecalendarConnectionSettings
    | CreateConnectionParams.ConnectorsGoogledocsConnectionSettings
    | CreateConnectionParams.ConnectorsGoogledriveConnectionSettings
    | CreateConnectionParams.ConnectorsGooglemailConnectionSettings
    | CreateConnectionParams.ConnectorsGooglesheetConnectionSettings
    | CreateConnectionParams.ConnectorsGreenhouseConnectionSettings
    | CreateConnectionParams.ConnectorsHeronConnectionSettings
    | CreateConnectionParams.ConnectorsHubspotConnectionSettings
    | CreateConnectionParams.ConnectorsInstagramConnectionSettings
    | CreateConnectionParams.ConnectorsIntercomConnectionSettings
    | CreateConnectionParams.ConnectorsJiraConnectionSettings
    | CreateConnectionParams.ConnectorsKustomerConnectionSettings
    | CreateConnectionParams.ConnectorsLeverConnectionSettings
    | CreateConnectionParams.ConnectorsLinearConnectionSettings
    | CreateConnectionParams.ConnectorsLinkedinConnectionSettings
    | CreateConnectionParams.ConnectorsLunchmoneyConnectionSettings
    | CreateConnectionParams.ConnectorsMercuryConnectionSettings
    | CreateConnectionParams.ConnectorsMergeConnectionSettings
    | CreateConnectionParams.ConnectorsMicrosoftConnectionSettings
    | CreateConnectionParams.ConnectorsMootaConnectionSettings
    | CreateConnectionParams.ConnectorsNotionConnectionSettings
    | CreateConnectionParams.ConnectorsOnebrickConnectionSettings
    | CreateConnectionParams.ConnectorsOutreachConnectionSettings
    | CreateConnectionParams.ConnectorsPipedriveConnectionSettings
    | CreateConnectionParams.ConnectorsPlaidConnectionSettings
    | CreateConnectionParams.ConnectorsPostgresConnectionSettings
    | CreateConnectionParams.ConnectorsQuickbooksConnectionSettings
    | CreateConnectionParams.ConnectorsRampConnectionSettings
    | CreateConnectionParams.ConnectorsRedditConnectionSettings
    | CreateConnectionParams.ConnectorsSalesforceConnectionSettings
    | CreateConnectionParams.ConnectorsSalesloftConnectionSettings
    | CreateConnectionParams.ConnectorsSaltedgeConnectionSettings
    | CreateConnectionParams.ConnectorsSharepointonlineConnectionSettings
    | CreateConnectionParams.ConnectorsSlackConnectionSettings
    | CreateConnectionParams.ConnectorsSplitwiseConnectionSettings
    | CreateConnectionParams.ConnectorsStripeConnectionSettings
    | CreateConnectionParams.ConnectorsTellerConnectionSettings
    | CreateConnectionParams.ConnectorsTogglConnectionSettings
    | CreateConnectionParams.ConnectorsTwentyConnectionSettings
    | CreateConnectionParams.ConnectorsTwitterConnectionSettings
    | CreateConnectionParams.ConnectorsVenmoConnectionSettings
    | CreateConnectionParams.ConnectorsWiseConnectionSettings
    | CreateConnectionParams.ConnectorsXeroConnectionSettings
    | CreateConnectionParams.ConnectorsYodleeConnectionSettings
    | CreateConnectionParams.ConnectorsZohodeskConnectionSettings;

  metadata?: Record<string, unknown>;
}

export namespace CreateConnectionParams {
  export interface ConnectorsAircallConnectionSettings {
    connector_name: 'aircall';

    settings: ConnectorsAircallConnectionSettings.Settings;
  }

  export namespace ConnectorsAircallConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsAirtableConnectionSettings {
    connector_name: 'airtable';

    settings: ConnectorsAirtableConnectionSettings.Settings;
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

  export interface ConnectorsBrexConnectionSettings {
    connector_name: 'brex';

    settings: ConnectorsBrexConnectionSettings.Settings;
  }

  export namespace ConnectorsBrexConnectionSettings {
    export interface Settings {
      accessToken: string;
    }
  }

  export interface ConnectorsCodaConnectionSettings {
    connector_name: 'coda';

    settings: ConnectorsCodaConnectionSettings.Settings;
  }

  export namespace ConnectorsCodaConnectionSettings {
    export interface Settings {
      apiKey: string;
    }
  }

  export interface ConnectorsConfluenceConnectionSettings {
    connector_name: 'confluence';

    settings: ConnectorsConfluenceConnectionSettings.Settings;
  }

  export namespace ConnectorsConfluenceConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsDiscordConnectionSettings {
    connector_name: 'discord';

    settings: ConnectorsDiscordConnectionSettings.Settings;
  }

  export namespace ConnectorsDiscordConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsFacebookConnectionSettings {
    connector_name: 'facebook';

    settings: ConnectorsFacebookConnectionSettings.Settings;
  }

  export namespace ConnectorsFacebookConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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
  }

  export namespace ConnectorsForeceiptConnectionSettings {
    export interface Settings {
      envName: 'staging' | 'production';

      _id?: unknown;

      credentials?: unknown;
    }
  }

  export interface ConnectorsGitHubConnectionSettings {
    connector_name: 'github';

    settings: ConnectorsGitHubConnectionSettings.Settings;
  }

  export namespace ConnectorsGitHubConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsGongConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorsGongConnectionSettings.Settings;
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

  export interface ConnectorsGooglecalendarConnectionSettings {
    connector_name: 'googlecalendar';

    settings: ConnectorsGooglecalendarConnectionSettings.Settings;
  }

  export namespace ConnectorsGooglecalendarConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsGoogledocsConnectionSettings {
    connector_name: 'googledocs';

    settings: ConnectorsGoogledocsConnectionSettings.Settings;
  }

  export namespace ConnectorsGoogledocsConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsGoogledriveConnectionSettings {
    connector_name: 'googledrive';

    settings: ConnectorsGoogledriveConnectionSettings.Settings;
  }

  export namespace ConnectorsGoogledriveConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsGooglemailConnectionSettings {
    connector_name: 'googlemail';

    settings: ConnectorsGooglemailConnectionSettings.Settings;
  }

  export namespace ConnectorsGooglemailConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsGooglesheetConnectionSettings {
    connector_name: 'googlesheet';

    settings: ConnectorsGooglesheetConnectionSettings.Settings;
  }

  export namespace ConnectorsGooglesheetConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsGreenhouseConnectionSettings {
    connector_name: 'greenhouse';

    settings: ConnectorsGreenhouseConnectionSettings.Settings;
  }

  export namespace ConnectorsGreenhouseConnectionSettings {
    export interface Settings {
      apiKey: string;
    }
  }

  export interface ConnectorsHeronConnectionSettings {
    connector_name: 'heron';

    settings: null;
  }

  export interface ConnectorsHubspotConnectionSettings {
    connector_name: 'hubspot';

    settings: ConnectorsHubspotConnectionSettings.Settings;
  }

  export namespace ConnectorsHubspotConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsInstagramConnectionSettings {
    connector_name: 'instagram';

    settings: ConnectorsInstagramConnectionSettings.Settings;
  }

  export namespace ConnectorsInstagramConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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
  }

  export namespace ConnectorsLinearConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsLinkedinConnectionSettings {
    connector_name: 'linkedin';

    settings: ConnectorsLinkedinConnectionSettings.Settings;
  }

  export namespace ConnectorsLinkedinConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsLunchmoneyConnectionSettings {
    connector_name: 'lunchmoney';

    settings: null;
  }

  export interface ConnectorsMercuryConnectionSettings {
    connector_name: 'mercury';

    settings: null;
  }

  export interface ConnectorsMergeConnectionSettings {
    connector_name: 'merge';

    settings: ConnectorsMergeConnectionSettings.Settings;
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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
  }

  export interface ConnectorsNotionConnectionSettings {
    connector_name: 'notion';

    settings: ConnectorsNotionConnectionSettings.Settings;
  }

  export namespace ConnectorsNotionConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsOnebrickConnectionSettings {
    connector_name: 'onebrick';

    settings: ConnectorsOnebrickConnectionSettings.Settings;
  }

  export namespace ConnectorsOnebrickConnectionSettings {
    export interface Settings {
      accessToken: string;
    }
  }

  export interface ConnectorsOutreachConnectionSettings {
    connector_name: 'outreach';

    settings: ConnectorsOutreachConnectionSettings.Settings;
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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
  }

  export namespace ConnectorsPostgresConnectionSettings {
    export interface Settings {
      databaseUrl: string;

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

  export interface ConnectorsQuickbooksConnectionSettings {
    connector_name: 'quickbooks';

    settings: ConnectorsQuickbooksConnectionSettings.Settings;
  }

  export namespace ConnectorsQuickbooksConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * The realmId of your quickbooks company (e.g., 9341453474484455)
       */
      realmId: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsRampConnectionSettings {
    connector_name: 'ramp';

    settings: ConnectorsRampConnectionSettings.Settings;
  }

  export namespace ConnectorsRampConnectionSettings {
    export interface Settings {
      accessToken?: string | null;

      startAfterTransactionId?: string | null;
    }
  }

  export interface ConnectorsRedditConnectionSettings {
    connector_name: 'reddit';

    settings: ConnectorsRedditConnectionSettings.Settings;
  }

  export namespace ConnectorsRedditConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

  export interface ConnectorsSalesforceConnectionSettings {
    connector_name: 'salesforce';

    settings: ConnectorsSalesforceConnectionSettings.Settings;
  }

  export namespace ConnectorsSalesforceConnectionSettings {
    export interface Settings {
      /**
       * The instance URL of your Salesforce account (e.g., example)
       */
      instance_url: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsSalesloftConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorsSalesloftConnectionSettings.Settings;
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

    settings?: unknown;
  }

  export interface ConnectorsSharepointonlineConnectionSettings {
    connector_name: 'sharepointonline';

    settings: ConnectorsSharepointonlineConnectionSettings.Settings;
  }

  export namespace ConnectorsSharepointonlineConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsSlackConnectionSettings {
    connector_name: 'slack';

    settings: ConnectorsSlackConnectionSettings.Settings;
  }

  export namespace ConnectorsSlackConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at: string;

        last_fetched_at: string;

        metadata: Record<string, unknown> | null;

        updated_at: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          client_id: string;

          raw: Record<string, unknown>;

          scope: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorsSplitwiseConnectionSettings {
    connector_name: 'splitwise';

    settings: ConnectorsSplitwiseConnectionSettings.Settings;
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
  }

  export namespace ConnectorsStripeConnectionSettings {
    export interface Settings {
      secretKey: string;
    }
  }

  export interface ConnectorsTellerConnectionSettings {
    connector_name: 'teller';

    settings: ConnectorsTellerConnectionSettings.Settings;
  }

  export namespace ConnectorsTellerConnectionSettings {
    export interface Settings {
      token: string;
    }
  }

  export interface ConnectorsTogglConnectionSettings {
    connector_name: 'toggl';

    settings: ConnectorsTogglConnectionSettings.Settings;
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
  }

  export namespace ConnectorsTwentyConnectionSettings {
    export interface Settings {
      access_token: string;
    }
  }

  export interface ConnectorsTwitterConnectionSettings {
    connector_name: 'twitter';

    settings: ConnectorsTwitterConnectionSettings.Settings;
  }

  export namespace ConnectorsTwitterConnectionSettings {
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

  export interface ConnectorsVenmoConnectionSettings {
    connector_name: 'venmo';

    settings: ConnectorsVenmoConnectionSettings.Settings;
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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

            expires_at?: string;

            expires_in?: number;

            refresh_token?: string | null;

            refresh_token_expires_in?: number | null;

            scope?: string;

            token_type?: string | null;
            [k: string]: unknown;
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
}

export interface CreateMagicLinkParams {
  /**
   * Search params to configure the connect page. Not signed as part of JWT and
   * therefore can be modified by client
   */
  client_options?: CreateMagicLinkParams.ClientOptions;

  /**
   * How long the magic link will be valid for (in seconds) before it expires
   */
  validity_in_seconds?: number;
}

export namespace CreateMagicLinkParams {
  /**
   * Search params to configure the connect page. Not signed as part of JWT and
   * therefore can be modified by client
   */
  export interface ClientOptions {
    '--background'?: string;

    '--card'?: string;

    '--card-foreground'?: string;

    '--foreground'?: string;

    '--primary'?: string;

    /**
     * The name of the connector to limit connection to. Default to all otherwise
     */
    connector_name?: 'plaid' | 'greenhouse';

    /**
     * Whether to enable debug mode
     */
    debug?: boolean;

    /**
     * The default view to show when the magic link is opened. Defaults to "add"
     */
    view?: 'add' | 'manage';
  }
}

export interface CreateTokenParams {
  /**
   * How long the token will be valid for (in seconds) before it expires
   */
  validity_in_seconds?: number;
}

export interface GetConnectionParams {
  expand?: Array<'connector'>;

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
    | 'brex'
    | 'coda'
    | 'confluence'
    | 'discord'
    | 'facebook'
    | 'finch'
    | 'firebase'
    | 'foreceipt'
    | 'github'
    | 'gong'
    | 'googlecalendar'
    | 'googledocs'
    | 'googledrive'
    | 'googlemail'
    | 'googlesheet'
    | 'greenhouse'
    | 'heron'
    | 'hubspot'
    | 'instagram'
    | 'intercom'
    | 'jira'
    | 'kustomer'
    | 'lever'
    | 'linear'
    | 'linkedin'
    | 'lunchmoney'
    | 'merge'
    | 'microsoft'
    | 'moota'
    | 'notion'
    | 'onebrick'
    | 'outreach'
    | 'pipedrive'
    | 'plaid'
    | 'quickbooks'
    | 'ramp'
    | 'reddit'
    | 'salesforce'
    | 'salesloft'
    | 'saltedge'
    | 'sharepointonline'
    | 'slack'
    | 'splitwise'
    | 'stripe'
    | 'teller'
    | 'toggl'
    | 'twenty'
    | 'twitter'
    | 'wise'
    | 'xero'
    | 'yodlee'
    | 'zohodesk';

  /**
   * Comma separated list of fields to optionally expand.
   *
   * Available Options: `connector`, `enabled_integrations`
   */
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
    | 'brex'
    | 'coda'
    | 'confluence'
    | 'discord'
    | 'facebook'
    | 'finch'
    | 'firebase'
    | 'foreceipt'
    | 'github'
    | 'gong'
    | 'googlecalendar'
    | 'googledocs'
    | 'googledrive'
    | 'googlemail'
    | 'googlesheet'
    | 'greenhouse'
    | 'heron'
    | 'hubspot'
    | 'instagram'
    | 'intercom'
    | 'jira'
    | 'kustomer'
    | 'lever'
    | 'linear'
    | 'linkedin'
    | 'lunchmoney'
    | 'merge'
    | 'microsoft'
    | 'moota'
    | 'notion'
    | 'onebrick'
    | 'outreach'
    | 'pipedrive'
    | 'plaid'
    | 'quickbooks'
    | 'ramp'
    | 'reddit'
    | 'salesforce'
    | 'salesloft'
    | 'saltedge'
    | 'sharepointonline'
    | 'slack'
    | 'splitwise'
    | 'stripe'
    | 'teller'
    | 'toggl'
    | 'twenty'
    | 'twitter'
    | 'wise'
    | 'xero'
    | 'yodlee'
    | 'zohodesk';

  /**
   * The id of the customer in your application. Ensure it is unique for that
   * customer.
   */
  customer_id?: string;

  expand?: Array<'connector'>;

  /**
   * Controls secret inclusion: none (default), basic (auth only), or all secrets
   */
  include_secrets?: 'none' | 'basic' | 'all';

  /**
   * Limit the number of items returned
   */
  limit?: number;
}

export interface ListConnectorsParams {
  /**
   * Comma separated list of fields to optionally expand.
   *
   * Available Options: `integrations`
   */
  expand?: string;
}

export declare namespace TopLevel {
  export {
    type CheckConnectionResponse as CheckConnectionResponse,
    type CreateConnectionResponse as CreateConnectionResponse,
    type CreateMagicLinkResponse as CreateMagicLinkResponse,
    type CreateTokenResponse as CreateTokenResponse,
    type DeleteConnectionResponse as DeleteConnectionResponse,
    type GetConnectionResponse as GetConnectionResponse,
    type GetCurrentUserResponse as GetCurrentUserResponse,
    type ListConnectionConfigsResponse as ListConnectionConfigsResponse,
    type ListConnectionsResponse as ListConnectionsResponse,
    type ListConnectorsResponse as ListConnectorsResponse,
    type ListConnectionConfigsResponsesOffsetPagination as ListConnectionConfigsResponsesOffsetPagination,
    type ListConnectionsResponsesOffsetPagination as ListConnectionsResponsesOffsetPagination,
    type CreateConnectionParams as CreateConnectionParams,
    type CreateMagicLinkParams as CreateMagicLinkParams,
    type CreateTokenParams as CreateTokenParams,
    type GetConnectionParams as GetConnectionParams,
    type ListConnectionConfigsParams as ListConnectionConfigsParams,
    type ListConnectionsParams as ListConnectionsParams,
    type ListConnectorsParams as ListConnectorsParams,
  };
}
