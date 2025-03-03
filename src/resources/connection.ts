// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class Connection extends APIResource {
  retrieve(options?: RequestOptions): APIPromise<ConnectionRetrieveResponse> {
    return this._client.get('/connection', options);
  }
}

export interface ConnectionRetrieveResponse {
  items: Array<
    | ConnectionRetrieveResponse.ConnectorsAircallConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsAirtableConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsApolloConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsBeancountConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsBrexConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsCodaConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsConfluenceConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsDebugConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsDiscordConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsFinchConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsFirebaseConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsForeceiptConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsFsConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsGitHubConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsGongConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsGoogleConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsGreenhouseConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsHeronConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsHubspotConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsIntercomConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsJiraConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsKustomerConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsLeverConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsLinearConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsLunchmoneyConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsMercuryConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsMergeConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsMicrosoftConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsMongoDBConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsMootaConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsOnebrickConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsOutreachConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsPipedriveConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsPlaidConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsPostgresConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsQboConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsRampConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsRevertConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsSalesforceConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsSalesloftConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsSaltedgeConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsSlackConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsSplitwiseConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsSpreadsheetConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsStripeConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsTellerConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsTogglConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsTwentyConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsVenmoConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsWebhookConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsWiseConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsXeroConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsYodleeConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsZohodeskConnectionSettings
    | ConnectionRetrieveResponse.ConnectorsGoogledriveConnectionSettings
  >;
}

export namespace ConnectionRetrieveResponse {
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

  export interface ConnectorsDebugConnectionSettings {
    connector_name: 'debug';

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    settings?: unknown;

    updated_at?: string;
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

  export interface ConnectorsFsConnectionSettings {
    connector_name: 'fs';

    settings: ConnectorsFsConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsFsConnectionSettings {
    export interface Settings {
      basePath: string;
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

  export interface ConnectorsMongoDBConnectionSettings {
    connector_name: 'mongodb';

    settings: ConnectorsMongoDBConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsMongoDBConnectionSettings {
    export interface Settings {
      databaseName: string;

      databaseUrl: string;
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

  export interface ConnectorsRevertConnectionSettings {
    connector_name: 'revert';

    settings: ConnectorsRevertConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsRevertConnectionSettings {
    export interface Settings {
      tenant_id: string;
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

  export interface ConnectorsSpreadsheetConnectionSettings {
    connector_name: 'spreadsheet';

    settings: ConnectorsSpreadsheetConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSpreadsheetConnectionSettings {
    export interface Settings {
      accountExternalId: string;

      preset:
        | 'ramp'
        | 'apple-card'
        | 'alliant-credit-union'
        | 'bbva-mexico'
        | 'brex-cash'
        | 'brex'
        | 'capitalone-bank'
        | 'capitalone'
        | 'coinbase'
        | 'coinkeeper'
        | 'etrade'
        | 'first-republic'
        | 'wise';
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

  export interface ConnectorsWebhookConnectionSettings {
    connector_name: 'webhook';

    settings: ConnectorsWebhookConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }

  export namespace ConnectorsWebhookConnectionSettings {
    export interface Settings {
      destinationUrl: string;
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

    settings: null;

    id?: string;

    connector_config_id?: string;

    created_at?: string;

    updated_at?: string;
  }
}

export declare namespace Connection {
  export { type ConnectionRetrieveResponse as ConnectionRetrieveResponse };
}
