// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as TopLevelAPI from './top-level';
import { OffsetPagination, type OffsetPaginationParams } from '../core/pagination';

export type ListConnectionsResponsesOffsetPagination = OffsetPagination<ListConnectionsResponse>;

export type ListConnectorConfigsResponsesOffsetPagination = OffsetPagination<ListConnectorConfigsResponse>;

export type ListConnectorsResponsesOffsetPagination = OffsetPagination<ListConnectorsResponse>;

export type ListConnnectorConfigsResponsesOffsetPagination = OffsetPagination<ListConnnectorConfigsResponse>;

export type ListCustomersResponsesOffsetPagination = OffsetPagination<ListCustomersResponse>;

export type ListEventsResponsesOffsetPagination = OffsetPagination<ListEventsResponse>;

export interface Connector {
  name: string;

  auth_type?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

  display_name?: string;

  has_openint_credentials?: boolean;

  logo_url?: string;

  openint_allowed_scopes?: Array<string>;

  openint_default_scopes?: Array<string>;

  platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

  required_scopes?: Array<string>;

  schemas?: Connector.Schemas;

  scopes?: Array<Connector.Scope>;

  stage?: 'alpha' | 'beta' | 'ga' | 'hidden';
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

  export interface Scope {
    scope: string;

    description?: string;

    display_name?: string;
  }
}

export interface Integration {
  id: string;

  connector_name:
    | 'acme-apikey'
    | 'acme-oauth2'
    | 'apollo'
    | 'asana'
    | 'bigquery'
    | 'box'
    | 'calendly'
    | 'confluence'
    | 'databricks'
    | 'discord'
    | 'dropbox'
    | 'figma'
    | 'github'
    | 'google-calendar'
    | 'google-docs'
    | 'google-drive'
    | 'google-mail'
    | 'google-sheet'
    | 'hubspot'
    | 'instagram'
    | 'jira'
    | 'linear'
    | 'monday'
    | 'notion'
    | 'onedrive'
    | 'outlook'
    | 'plaid'
    | 'postgres'
    | 'resend'
    | 'salesforce'
    | 'sendgrid'
    | 'sharepoint'
    | 'slack'
    | 'slack-agent'
    | 'slack-agent-builder'
    | 'slack-deployed-agent'
    | 'snowflake'
    | 'spotify'
    | 'stripe'
    | 'stripe-agent-sandbox'
    | 'twilio'
    | 'workato'
    | 'youtube'
    | 'zendesk'
    | 'zoom';

  created_at: string;

  external: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

  name: string;

  standard: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

  updated_at: string;

  auth_type?: string | null;

  category?: string | null;

  logo_url?: string | null;

  platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

  stage?: 'alpha' | 'beta' | 'ga' | null;

  version?: string | null;
}

export interface AssignConnectionResponse {
  /**
   * The id of the connection, starts with `conn_`
   */
  id: string;

  assignments?: Array<string>;
}

export interface CheckConnectionResponse {
  id: string;

  status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

  status_message?: string | null;
}

export type ConnectorRpcResponse = { [key: string]: unknown };

export type CreateConnectionResponse = unknown;

export type CreateConnnectorConfigResponse =
  | CreateConnnectorConfigResponse.ConnectorAcmeApikeyDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorAcmeOauth2DiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorAsanaDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorBigqueryDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorBoxDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorCalendlyDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorConfluenceDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorDatabricksDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorDiscordDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorDropboxDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorFigmaDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorGitHubDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorGoogleCalendarDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorGoogleDocsDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorGoogleDriveDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorGoogleMailDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorGoogleSheetDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorHubspotDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorInstagramDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorJiraDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorLinearDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorMondayDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorNotionDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorOnedriveDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorOutlookDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorResendDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorSalesforceDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorSendgridDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorSharepointDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorSlackDeployedAgentDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorSlackDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorSnowflakeDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorSpotifyDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorYoutubeDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorZendeskDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorZoomDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorApolloDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorPlaidDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorPostgresDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorSlackAgentDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorSlackAgentBuilderDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorStripeDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorStripeAgentSandboxDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorTwilioDiscriminatedConnectorConfig
  | CreateConnnectorConfigResponse.ConnectorWorkatoDiscriminatedConnectorConfig;

export namespace CreateConnnectorConfigResponse {
  export interface ConnectorAcmeApikeyDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'acme-apikey';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorAcmeOauth2DiscriminatedConnectorConfig {
    config: ConnectorAcmeOauth2DiscriminatedConnectorConfig.Config;

    connector_name: 'acme-oauth2';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorAsanaDiscriminatedConnectorConfig {
    config: ConnectorAsanaDiscriminatedConnectorConfig.Config;

    connector_name: 'asana';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorAsanaDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorBigqueryDiscriminatedConnectorConfig {
    config: ConnectorBigqueryDiscriminatedConnectorConfig.Config;

    connector_name: 'bigquery';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorBigqueryDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorBoxDiscriminatedConnectorConfig {
    config: ConnectorBoxDiscriminatedConnectorConfig.Config;

    connector_name: 'box';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorBoxDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorCalendlyDiscriminatedConnectorConfig {
    config: ConnectorCalendlyDiscriminatedConnectorConfig.Config;

    connector_name: 'calendly';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorCalendlyDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectorConfig {
    config: ConnectorConfluenceDiscriminatedConnectorConfig.Config;

    connector_name: 'confluence';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorConfluenceDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDatabricksDiscriminatedConnectorConfig {
    config: ConnectorDatabricksDiscriminatedConnectorConfig.Config;

    connector_name: 'databricks';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDatabricksDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectorConfig {
    config: ConnectorDiscordDiscriminatedConnectorConfig.Config;

    connector_name: 'discord';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDiscordDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDropboxDiscriminatedConnectorConfig {
    config: ConnectorDropboxDiscriminatedConnectorConfig.Config;

    connector_name: 'dropbox';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDropboxDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorFigmaDiscriminatedConnectorConfig {
    config: ConnectorFigmaDiscriminatedConnectorConfig.Config;

    connector_name: 'figma';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorFigmaDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectorConfig {
    config: ConnectorGitHubDiscriminatedConnectorConfig.Config;

    connector_name: 'github';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGitHubDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectorConfig {
    config: ConnectorGoogleCalendarDiscriminatedConnectorConfig.Config;

    connector_name: 'google-calendar';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectorConfig {
    config: ConnectorGoogleDocsDiscriminatedConnectorConfig.Config;

    connector_name: 'google-docs';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectorConfig {
    config: ConnectorGoogleDriveDiscriminatedConnectorConfig.Config;

    connector_name: 'google-drive';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectorConfig {
    config: ConnectorGoogleMailDiscriminatedConnectorConfig.Config;

    connector_name: 'google-mail';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectorConfig {
    config: ConnectorGoogleSheetDiscriminatedConnectorConfig.Config;

    connector_name: 'google-sheet';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectorConfig {
    config: ConnectorHubspotDiscriminatedConnectorConfig.Config;

    connector_name: 'hubspot';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorHubspotDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectorConfig {
    config: ConnectorInstagramDiscriminatedConnectorConfig.Config;

    connector_name: 'instagram';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorInstagramDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorJiraDiscriminatedConnectorConfig {
    config: ConnectorJiraDiscriminatedConnectorConfig.Config;

    connector_name: 'jira';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorJiraDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorLinearDiscriminatedConnectorConfig {
    config: ConnectorLinearDiscriminatedConnectorConfig.Config;

    connector_name: 'linear';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorLinearDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorMondayDiscriminatedConnectorConfig {
    config: ConnectorMondayDiscriminatedConnectorConfig.Config;

    connector_name: 'monday';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorMondayDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorNotionDiscriminatedConnectorConfig {
    config: ConnectorNotionDiscriminatedConnectorConfig.Config;

    connector_name: 'notion';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorNotionDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorOnedriveDiscriminatedConnectorConfig {
    config: ConnectorOnedriveDiscriminatedConnectorConfig.Config;

    connector_name: 'onedrive';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorOnedriveDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorOutlookDiscriminatedConnectorConfig {
    config: ConnectorOutlookDiscriminatedConnectorConfig.Config;

    connector_name: 'outlook';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorOutlookDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorResendDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'resend';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSalesforceDiscriminatedConnectorConfig {
    config: ConnectorSalesforceDiscriminatedConnectorConfig.Config;

    connector_name: 'salesforce';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSalesforceDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSendgridDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'sendgrid';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSharepointDiscriminatedConnectorConfig {
    config: ConnectorSharepointDiscriminatedConnectorConfig.Config;

    connector_name: 'sharepoint';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSharepointDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSlackDeployedAgentDiscriminatedConnectorConfig {
    config: ConnectorSlackDeployedAgentDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-deployed-agent';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackDeployedAgentDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSlackDiscriminatedConnectorConfig {
    config: ConnectorSlackDiscriminatedConnectorConfig.Config;

    connector_name: 'slack';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSnowflakeDiscriminatedConnectorConfig {
    config: ConnectorSnowflakeDiscriminatedConnectorConfig.Config;

    connector_name: 'snowflake';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSnowflakeDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSpotifyDiscriminatedConnectorConfig {
    config: ConnectorSpotifyDiscriminatedConnectorConfig.Config;

    connector_name: 'spotify';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSpotifyDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorYoutubeDiscriminatedConnectorConfig {
    config: ConnectorYoutubeDiscriminatedConnectorConfig.Config;

    connector_name: 'youtube';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorYoutubeDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorZendeskDiscriminatedConnectorConfig {
    config: ConnectorZendeskDiscriminatedConnectorConfig.Config;

    connector_name: 'zendesk';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorZendeskDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorZoomDiscriminatedConnectorConfig {
    config: ConnectorZoomDiscriminatedConnectorConfig.Config;

    connector_name: 'zoom';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorZoomDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorApolloDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'apollo';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorPlaidDiscriminatedConnectorConfig {
    config: ConnectorPlaidDiscriminatedConnectorConfig.Config;

    connector_name: 'plaid';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorPlaidDiscriminatedConnectorConfig {
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
  }

  export interface ConnectorPostgresDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'postgres';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSlackAgentDiscriminatedConnectorConfig {
    config: ConnectorSlackAgentDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-agent';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackAgentDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Previous challenge code - e.g. challenge_slack_abc123xyz
       */
      challenge_code: string;

      /**
       * USER_PASTED_TOKEN - SLACK_ONETIME_CHALLENGE_CODE
       */
      challenge_response: string;

      /**
       * App description - Replit integration app for Slack workspace
       */
      app_description?: string;

      /**
       * App ID - A1234567890
       */
      app_id?: string;

      /**
       * App name - Replit Agent App
       */
      app_name?: string;

      /**
       * Client ID - 1234567890.1234567890
       */
      client_id?: string;

      /**
       * Client secret - abc123...
       */
      client_secret?: string;

      /**
       * Initial event subscription URL
       */
      event_subscription_url?: string;

      /**
       * Initial OAuth URL - https://slack.com/oauth/v2/authorize?...
       */
      initial_oauth_url?: string;

      /**
       * Service token - xoxb-...
       */
      service_token?: string;

      /**
       * Signing secret - abc123...
       */
      signing_secret?: string;

      /**
       * Verification token - xyz123...
       */
      verification_token?: string;
    }
  }

  export interface ConnectorSlackAgentBuilderDiscriminatedConnectorConfig {
    config: ConnectorSlackAgentBuilderDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-agent-builder';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackAgentBuilderDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorStripeDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'stripe';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorStripeAgentSandboxDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'stripe-agent-sandbox';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorTwilioDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'twilio';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorWorkatoDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'workato';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }
}

export interface CreateTokenResponse {
  /**
   * A short-lived publishable authentication token to use for customer api requests
   * from the frontend. This token by default expires in 30 days unless otherwise
   * specified via the validity_in_seconds parameter.
   */
  token: string;

  /**
   * A long-lived customer API key to use for API requests. Not meant to be published
   * to the frontend.
   */
  api_key: string | null;

  /**
   * A link that can be shared with customers to use @Connect in any browser. This
   * link will expire in 30 days by default unless otherwise specified via the
   * validity_in_seconds parameter.
   */
  magic_link_url: string;
}

export interface DeleteAssignmentResponse {
  /**
   * The id of the connection, starts with `conn_`
   */
  id: string;

  assignments: Array<string>;
}

export interface DeleteConnectionResponse {
  /**
   * The id of the connection, starts with `conn_`
   */
  id: string;
}

export interface DeleteConnectorConfigResponse {
  /**
   * The id of the connector config, starts with `ccfg_`
   */
  id: string;
}

export type GetConectorConfigResponse =
  | GetConectorConfigResponse.ConnectorAcmeApikeyDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorAcmeOauth2DiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorAsanaDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorBigqueryDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorBoxDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorCalendlyDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorConfluenceDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorDatabricksDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorDiscordDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorDropboxDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorFigmaDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorGitHubDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorGoogleCalendarDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorGoogleDocsDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorGoogleDriveDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorGoogleMailDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorGoogleSheetDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorHubspotDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorInstagramDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorJiraDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorLinearDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorMondayDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorNotionDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorOnedriveDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorOutlookDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorResendDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorSalesforceDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorSendgridDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorSharepointDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorSlackDeployedAgentDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorSlackDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorSnowflakeDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorSpotifyDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorYoutubeDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorZendeskDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorZoomDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorApolloDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorPlaidDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorPostgresDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorSlackAgentDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorSlackAgentBuilderDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorStripeDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorStripeAgentSandboxDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorTwilioDiscriminatedConnectorConfig
  | GetConectorConfigResponse.ConnectorWorkatoDiscriminatedConnectorConfig;

export namespace GetConectorConfigResponse {
  export interface ConnectorAcmeApikeyDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'acme-apikey';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorAcmeOauth2DiscriminatedConnectorConfig {
    config: ConnectorAcmeOauth2DiscriminatedConnectorConfig.Config;

    connector_name: 'acme-oauth2';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorAsanaDiscriminatedConnectorConfig {
    config: ConnectorAsanaDiscriminatedConnectorConfig.Config;

    connector_name: 'asana';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorAsanaDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorBigqueryDiscriminatedConnectorConfig {
    config: ConnectorBigqueryDiscriminatedConnectorConfig.Config;

    connector_name: 'bigquery';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorBigqueryDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorBoxDiscriminatedConnectorConfig {
    config: ConnectorBoxDiscriminatedConnectorConfig.Config;

    connector_name: 'box';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorBoxDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorCalendlyDiscriminatedConnectorConfig {
    config: ConnectorCalendlyDiscriminatedConnectorConfig.Config;

    connector_name: 'calendly';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorCalendlyDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectorConfig {
    config: ConnectorConfluenceDiscriminatedConnectorConfig.Config;

    connector_name: 'confluence';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorConfluenceDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDatabricksDiscriminatedConnectorConfig {
    config: ConnectorDatabricksDiscriminatedConnectorConfig.Config;

    connector_name: 'databricks';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDatabricksDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectorConfig {
    config: ConnectorDiscordDiscriminatedConnectorConfig.Config;

    connector_name: 'discord';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDiscordDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDropboxDiscriminatedConnectorConfig {
    config: ConnectorDropboxDiscriminatedConnectorConfig.Config;

    connector_name: 'dropbox';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDropboxDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorFigmaDiscriminatedConnectorConfig {
    config: ConnectorFigmaDiscriminatedConnectorConfig.Config;

    connector_name: 'figma';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorFigmaDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectorConfig {
    config: ConnectorGitHubDiscriminatedConnectorConfig.Config;

    connector_name: 'github';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGitHubDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectorConfig {
    config: ConnectorGoogleCalendarDiscriminatedConnectorConfig.Config;

    connector_name: 'google-calendar';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectorConfig {
    config: ConnectorGoogleDocsDiscriminatedConnectorConfig.Config;

    connector_name: 'google-docs';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectorConfig {
    config: ConnectorGoogleDriveDiscriminatedConnectorConfig.Config;

    connector_name: 'google-drive';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectorConfig {
    config: ConnectorGoogleMailDiscriminatedConnectorConfig.Config;

    connector_name: 'google-mail';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectorConfig {
    config: ConnectorGoogleSheetDiscriminatedConnectorConfig.Config;

    connector_name: 'google-sheet';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectorConfig {
    config: ConnectorHubspotDiscriminatedConnectorConfig.Config;

    connector_name: 'hubspot';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorHubspotDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectorConfig {
    config: ConnectorInstagramDiscriminatedConnectorConfig.Config;

    connector_name: 'instagram';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorInstagramDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorJiraDiscriminatedConnectorConfig {
    config: ConnectorJiraDiscriminatedConnectorConfig.Config;

    connector_name: 'jira';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorJiraDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorLinearDiscriminatedConnectorConfig {
    config: ConnectorLinearDiscriminatedConnectorConfig.Config;

    connector_name: 'linear';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorLinearDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorMondayDiscriminatedConnectorConfig {
    config: ConnectorMondayDiscriminatedConnectorConfig.Config;

    connector_name: 'monday';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorMondayDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorNotionDiscriminatedConnectorConfig {
    config: ConnectorNotionDiscriminatedConnectorConfig.Config;

    connector_name: 'notion';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorNotionDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorOnedriveDiscriminatedConnectorConfig {
    config: ConnectorOnedriveDiscriminatedConnectorConfig.Config;

    connector_name: 'onedrive';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorOnedriveDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorOutlookDiscriminatedConnectorConfig {
    config: ConnectorOutlookDiscriminatedConnectorConfig.Config;

    connector_name: 'outlook';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorOutlookDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorResendDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'resend';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSalesforceDiscriminatedConnectorConfig {
    config: ConnectorSalesforceDiscriminatedConnectorConfig.Config;

    connector_name: 'salesforce';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSalesforceDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSendgridDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'sendgrid';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSharepointDiscriminatedConnectorConfig {
    config: ConnectorSharepointDiscriminatedConnectorConfig.Config;

    connector_name: 'sharepoint';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSharepointDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSlackDeployedAgentDiscriminatedConnectorConfig {
    config: ConnectorSlackDeployedAgentDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-deployed-agent';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackDeployedAgentDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSlackDiscriminatedConnectorConfig {
    config: ConnectorSlackDiscriminatedConnectorConfig.Config;

    connector_name: 'slack';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSnowflakeDiscriminatedConnectorConfig {
    config: ConnectorSnowflakeDiscriminatedConnectorConfig.Config;

    connector_name: 'snowflake';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSnowflakeDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSpotifyDiscriminatedConnectorConfig {
    config: ConnectorSpotifyDiscriminatedConnectorConfig.Config;

    connector_name: 'spotify';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSpotifyDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorYoutubeDiscriminatedConnectorConfig {
    config: ConnectorYoutubeDiscriminatedConnectorConfig.Config;

    connector_name: 'youtube';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorYoutubeDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorZendeskDiscriminatedConnectorConfig {
    config: ConnectorZendeskDiscriminatedConnectorConfig.Config;

    connector_name: 'zendesk';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorZendeskDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorZoomDiscriminatedConnectorConfig {
    config: ConnectorZoomDiscriminatedConnectorConfig.Config;

    connector_name: 'zoom';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorZoomDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorApolloDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'apollo';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorPlaidDiscriminatedConnectorConfig {
    config: ConnectorPlaidDiscriminatedConnectorConfig.Config;

    connector_name: 'plaid';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorPlaidDiscriminatedConnectorConfig {
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
  }

  export interface ConnectorPostgresDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'postgres';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSlackAgentDiscriminatedConnectorConfig {
    config: ConnectorSlackAgentDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-agent';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackAgentDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Previous challenge code - e.g. challenge_slack_abc123xyz
       */
      challenge_code: string;

      /**
       * USER_PASTED_TOKEN - SLACK_ONETIME_CHALLENGE_CODE
       */
      challenge_response: string;

      /**
       * App description - Replit integration app for Slack workspace
       */
      app_description?: string;

      /**
       * App ID - A1234567890
       */
      app_id?: string;

      /**
       * App name - Replit Agent App
       */
      app_name?: string;

      /**
       * Client ID - 1234567890.1234567890
       */
      client_id?: string;

      /**
       * Client secret - abc123...
       */
      client_secret?: string;

      /**
       * Initial event subscription URL
       */
      event_subscription_url?: string;

      /**
       * Initial OAuth URL - https://slack.com/oauth/v2/authorize?...
       */
      initial_oauth_url?: string;

      /**
       * Service token - xoxb-...
       */
      service_token?: string;

      /**
       * Signing secret - abc123...
       */
      signing_secret?: string;

      /**
       * Verification token - xyz123...
       */
      verification_token?: string;
    }
  }

  export interface ConnectorSlackAgentBuilderDiscriminatedConnectorConfig {
    config: ConnectorSlackAgentBuilderDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-agent-builder';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackAgentBuilderDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorStripeDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'stripe';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorStripeAgentSandboxDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'stripe-agent-sandbox';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorTwilioDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'twilio';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorWorkatoDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'workato';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }
}

export type GetConnectionResponse = unknown;

export interface GetCurrentUserResponse {
  role: 'anon' | 'customer' | 'user' | 'org' | 'system' | 'util';

  [k: string]: unknown;
}

export interface ListAssignmentsResponse {
  /**
   * The id of the connection, starts with `conn_`
   */
  id: string;

  assignments: Array<string>;
}

export type ListConnectionsResponse = unknown;

export type ListConnectorConfigsResponse =
  | ListConnectorConfigsResponse.ConnectorAcmeApikeyDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorAcmeOauth2DiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorAsanaDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorBigqueryDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorBoxDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorCalendlyDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorConfluenceDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorDatabricksDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorDiscordDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorDropboxDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorFigmaDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorGitHubDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorGoogleCalendarDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorGoogleDocsDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorGoogleDriveDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorGoogleMailDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorGoogleSheetDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorHubspotDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorInstagramDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorJiraDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorLinearDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorMondayDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorNotionDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorOnedriveDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorOutlookDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorResendDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorSalesforceDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorSendgridDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorSharepointDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorSlackDeployedAgentDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorSlackDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorSnowflakeDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorSpotifyDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorYoutubeDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorZendeskDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorZoomDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorApolloDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorPlaidDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorPostgresDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorSlackAgentDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorSlackAgentBuilderDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorStripeDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorStripeAgentSandboxDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorTwilioDiscriminatedConnectorConfig
  | ListConnectorConfigsResponse.ConnectorWorkatoDiscriminatedConnectorConfig;

export namespace ListConnectorConfigsResponse {
  export interface ConnectorAcmeApikeyDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'acme-apikey';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorAcmeOauth2DiscriminatedConnectorConfig {
    config: ConnectorAcmeOauth2DiscriminatedConnectorConfig.Config;

    connector_name: 'acme-oauth2';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorAsanaDiscriminatedConnectorConfig {
    config: ConnectorAsanaDiscriminatedConnectorConfig.Config;

    connector_name: 'asana';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorAsanaDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorBigqueryDiscriminatedConnectorConfig {
    config: ConnectorBigqueryDiscriminatedConnectorConfig.Config;

    connector_name: 'bigquery';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorBigqueryDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorBoxDiscriminatedConnectorConfig {
    config: ConnectorBoxDiscriminatedConnectorConfig.Config;

    connector_name: 'box';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorBoxDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorCalendlyDiscriminatedConnectorConfig {
    config: ConnectorCalendlyDiscriminatedConnectorConfig.Config;

    connector_name: 'calendly';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorCalendlyDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectorConfig {
    config: ConnectorConfluenceDiscriminatedConnectorConfig.Config;

    connector_name: 'confluence';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorConfluenceDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDatabricksDiscriminatedConnectorConfig {
    config: ConnectorDatabricksDiscriminatedConnectorConfig.Config;

    connector_name: 'databricks';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDatabricksDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectorConfig {
    config: ConnectorDiscordDiscriminatedConnectorConfig.Config;

    connector_name: 'discord';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDiscordDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDropboxDiscriminatedConnectorConfig {
    config: ConnectorDropboxDiscriminatedConnectorConfig.Config;

    connector_name: 'dropbox';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDropboxDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorFigmaDiscriminatedConnectorConfig {
    config: ConnectorFigmaDiscriminatedConnectorConfig.Config;

    connector_name: 'figma';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorFigmaDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectorConfig {
    config: ConnectorGitHubDiscriminatedConnectorConfig.Config;

    connector_name: 'github';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGitHubDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectorConfig {
    config: ConnectorGoogleCalendarDiscriminatedConnectorConfig.Config;

    connector_name: 'google-calendar';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectorConfig {
    config: ConnectorGoogleDocsDiscriminatedConnectorConfig.Config;

    connector_name: 'google-docs';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectorConfig {
    config: ConnectorGoogleDriveDiscriminatedConnectorConfig.Config;

    connector_name: 'google-drive';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectorConfig {
    config: ConnectorGoogleMailDiscriminatedConnectorConfig.Config;

    connector_name: 'google-mail';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectorConfig {
    config: ConnectorGoogleSheetDiscriminatedConnectorConfig.Config;

    connector_name: 'google-sheet';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectorConfig {
    config: ConnectorHubspotDiscriminatedConnectorConfig.Config;

    connector_name: 'hubspot';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorHubspotDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectorConfig {
    config: ConnectorInstagramDiscriminatedConnectorConfig.Config;

    connector_name: 'instagram';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorInstagramDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorJiraDiscriminatedConnectorConfig {
    config: ConnectorJiraDiscriminatedConnectorConfig.Config;

    connector_name: 'jira';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorJiraDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorLinearDiscriminatedConnectorConfig {
    config: ConnectorLinearDiscriminatedConnectorConfig.Config;

    connector_name: 'linear';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorLinearDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorMondayDiscriminatedConnectorConfig {
    config: ConnectorMondayDiscriminatedConnectorConfig.Config;

    connector_name: 'monday';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorMondayDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorNotionDiscriminatedConnectorConfig {
    config: ConnectorNotionDiscriminatedConnectorConfig.Config;

    connector_name: 'notion';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorNotionDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorOnedriveDiscriminatedConnectorConfig {
    config: ConnectorOnedriveDiscriminatedConnectorConfig.Config;

    connector_name: 'onedrive';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorOnedriveDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorOutlookDiscriminatedConnectorConfig {
    config: ConnectorOutlookDiscriminatedConnectorConfig.Config;

    connector_name: 'outlook';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorOutlookDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorResendDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'resend';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSalesforceDiscriminatedConnectorConfig {
    config: ConnectorSalesforceDiscriminatedConnectorConfig.Config;

    connector_name: 'salesforce';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSalesforceDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSendgridDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'sendgrid';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSharepointDiscriminatedConnectorConfig {
    config: ConnectorSharepointDiscriminatedConnectorConfig.Config;

    connector_name: 'sharepoint';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSharepointDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSlackDeployedAgentDiscriminatedConnectorConfig {
    config: ConnectorSlackDeployedAgentDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-deployed-agent';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackDeployedAgentDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSlackDiscriminatedConnectorConfig {
    config: ConnectorSlackDiscriminatedConnectorConfig.Config;

    connector_name: 'slack';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSnowflakeDiscriminatedConnectorConfig {
    config: ConnectorSnowflakeDiscriminatedConnectorConfig.Config;

    connector_name: 'snowflake';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSnowflakeDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSpotifyDiscriminatedConnectorConfig {
    config: ConnectorSpotifyDiscriminatedConnectorConfig.Config;

    connector_name: 'spotify';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSpotifyDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorYoutubeDiscriminatedConnectorConfig {
    config: ConnectorYoutubeDiscriminatedConnectorConfig.Config;

    connector_name: 'youtube';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorYoutubeDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorZendeskDiscriminatedConnectorConfig {
    config: ConnectorZendeskDiscriminatedConnectorConfig.Config;

    connector_name: 'zendesk';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorZendeskDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorZoomDiscriminatedConnectorConfig {
    config: ConnectorZoomDiscriminatedConnectorConfig.Config;

    connector_name: 'zoom';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorZoomDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorApolloDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'apollo';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorPlaidDiscriminatedConnectorConfig {
    config: ConnectorPlaidDiscriminatedConnectorConfig.Config;

    connector_name: 'plaid';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorPlaidDiscriminatedConnectorConfig {
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
  }

  export interface ConnectorPostgresDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'postgres';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSlackAgentDiscriminatedConnectorConfig {
    config: ConnectorSlackAgentDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-agent';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackAgentDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Previous challenge code - e.g. challenge_slack_abc123xyz
       */
      challenge_code: string;

      /**
       * USER_PASTED_TOKEN - SLACK_ONETIME_CHALLENGE_CODE
       */
      challenge_response: string;

      /**
       * App description - Replit integration app for Slack workspace
       */
      app_description?: string;

      /**
       * App ID - A1234567890
       */
      app_id?: string;

      /**
       * App name - Replit Agent App
       */
      app_name?: string;

      /**
       * Client ID - 1234567890.1234567890
       */
      client_id?: string;

      /**
       * Client secret - abc123...
       */
      client_secret?: string;

      /**
       * Initial event subscription URL
       */
      event_subscription_url?: string;

      /**
       * Initial OAuth URL - https://slack.com/oauth/v2/authorize?...
       */
      initial_oauth_url?: string;

      /**
       * Service token - xoxb-...
       */
      service_token?: string;

      /**
       * Signing secret - abc123...
       */
      signing_secret?: string;

      /**
       * Verification token - xyz123...
       */
      verification_token?: string;
    }
  }

  export interface ConnectorSlackAgentBuilderDiscriminatedConnectorConfig {
    config: ConnectorSlackAgentBuilderDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-agent-builder';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackAgentBuilderDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorStripeDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'stripe';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorStripeAgentSandboxDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'stripe-agent-sandbox';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorTwilioDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'twilio';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorWorkatoDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'workato';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }
}

export interface ListConnectorsResponse extends Connector {
  integrations?: Array<Integration>;
}

export type ListConnnectorConfigsResponse =
  | ListConnnectorConfigsResponse.ConnectorAcmeApikeyDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorAcmeOauth2DiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorAsanaDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorBigqueryDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorBoxDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorCalendlyDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorConfluenceDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorDatabricksDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorDiscordDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorDropboxDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorFigmaDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorGitHubDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorGoogleCalendarDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorGoogleDocsDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorGoogleDriveDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorGoogleMailDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorGoogleSheetDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorHubspotDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorInstagramDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorJiraDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorLinearDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorMondayDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorNotionDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorOnedriveDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorOutlookDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorResendDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorSalesforceDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorSendgridDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorSharepointDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorSlackDeployedAgentDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorSlackDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorSnowflakeDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorSpotifyDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorYoutubeDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorZendeskDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorZoomDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorApolloDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorPlaidDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorPostgresDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorSlackAgentDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorSlackAgentBuilderDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorStripeDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorStripeAgentSandboxDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorTwilioDiscriminatedConnectorConfig
  | ListConnnectorConfigsResponse.ConnectorWorkatoDiscriminatedConnectorConfig;

export namespace ListConnnectorConfigsResponse {
  export interface ConnectorAcmeApikeyDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'acme-apikey';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorAcmeOauth2DiscriminatedConnectorConfig {
    config: ConnectorAcmeOauth2DiscriminatedConnectorConfig.Config;

    connector_name: 'acme-oauth2';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorAsanaDiscriminatedConnectorConfig {
    config: ConnectorAsanaDiscriminatedConnectorConfig.Config;

    connector_name: 'asana';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorAsanaDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorBigqueryDiscriminatedConnectorConfig {
    config: ConnectorBigqueryDiscriminatedConnectorConfig.Config;

    connector_name: 'bigquery';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorBigqueryDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorBoxDiscriminatedConnectorConfig {
    config: ConnectorBoxDiscriminatedConnectorConfig.Config;

    connector_name: 'box';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorBoxDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorCalendlyDiscriminatedConnectorConfig {
    config: ConnectorCalendlyDiscriminatedConnectorConfig.Config;

    connector_name: 'calendly';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorCalendlyDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectorConfig {
    config: ConnectorConfluenceDiscriminatedConnectorConfig.Config;

    connector_name: 'confluence';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorConfluenceDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDatabricksDiscriminatedConnectorConfig {
    config: ConnectorDatabricksDiscriminatedConnectorConfig.Config;

    connector_name: 'databricks';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDatabricksDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectorConfig {
    config: ConnectorDiscordDiscriminatedConnectorConfig.Config;

    connector_name: 'discord';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDiscordDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDropboxDiscriminatedConnectorConfig {
    config: ConnectorDropboxDiscriminatedConnectorConfig.Config;

    connector_name: 'dropbox';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDropboxDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorFigmaDiscriminatedConnectorConfig {
    config: ConnectorFigmaDiscriminatedConnectorConfig.Config;

    connector_name: 'figma';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorFigmaDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectorConfig {
    config: ConnectorGitHubDiscriminatedConnectorConfig.Config;

    connector_name: 'github';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGitHubDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectorConfig {
    config: ConnectorGoogleCalendarDiscriminatedConnectorConfig.Config;

    connector_name: 'google-calendar';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectorConfig {
    config: ConnectorGoogleDocsDiscriminatedConnectorConfig.Config;

    connector_name: 'google-docs';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectorConfig {
    config: ConnectorGoogleDriveDiscriminatedConnectorConfig.Config;

    connector_name: 'google-drive';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectorConfig {
    config: ConnectorGoogleMailDiscriminatedConnectorConfig.Config;

    connector_name: 'google-mail';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectorConfig {
    config: ConnectorGoogleSheetDiscriminatedConnectorConfig.Config;

    connector_name: 'google-sheet';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectorConfig {
    config: ConnectorHubspotDiscriminatedConnectorConfig.Config;

    connector_name: 'hubspot';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorHubspotDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectorConfig {
    config: ConnectorInstagramDiscriminatedConnectorConfig.Config;

    connector_name: 'instagram';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorInstagramDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorJiraDiscriminatedConnectorConfig {
    config: ConnectorJiraDiscriminatedConnectorConfig.Config;

    connector_name: 'jira';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorJiraDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorLinearDiscriminatedConnectorConfig {
    config: ConnectorLinearDiscriminatedConnectorConfig.Config;

    connector_name: 'linear';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorLinearDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorMondayDiscriminatedConnectorConfig {
    config: ConnectorMondayDiscriminatedConnectorConfig.Config;

    connector_name: 'monday';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorMondayDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorNotionDiscriminatedConnectorConfig {
    config: ConnectorNotionDiscriminatedConnectorConfig.Config;

    connector_name: 'notion';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorNotionDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorOnedriveDiscriminatedConnectorConfig {
    config: ConnectorOnedriveDiscriminatedConnectorConfig.Config;

    connector_name: 'onedrive';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorOnedriveDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorOutlookDiscriminatedConnectorConfig {
    config: ConnectorOutlookDiscriminatedConnectorConfig.Config;

    connector_name: 'outlook';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorOutlookDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorResendDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'resend';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSalesforceDiscriminatedConnectorConfig {
    config: ConnectorSalesforceDiscriminatedConnectorConfig.Config;

    connector_name: 'salesforce';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSalesforceDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSendgridDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'sendgrid';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSharepointDiscriminatedConnectorConfig {
    config: ConnectorSharepointDiscriminatedConnectorConfig.Config;

    connector_name: 'sharepoint';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSharepointDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSlackDeployedAgentDiscriminatedConnectorConfig {
    config: ConnectorSlackDeployedAgentDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-deployed-agent';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackDeployedAgentDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSlackDiscriminatedConnectorConfig {
    config: ConnectorSlackDiscriminatedConnectorConfig.Config;

    connector_name: 'slack';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSnowflakeDiscriminatedConnectorConfig {
    config: ConnectorSnowflakeDiscriminatedConnectorConfig.Config;

    connector_name: 'snowflake';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSnowflakeDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSpotifyDiscriminatedConnectorConfig {
    config: ConnectorSpotifyDiscriminatedConnectorConfig.Config;

    connector_name: 'spotify';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSpotifyDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorYoutubeDiscriminatedConnectorConfig {
    config: ConnectorYoutubeDiscriminatedConnectorConfig.Config;

    connector_name: 'youtube';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorYoutubeDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorZendeskDiscriminatedConnectorConfig {
    config: ConnectorZendeskDiscriminatedConnectorConfig.Config;

    connector_name: 'zendesk';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorZendeskDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorZoomDiscriminatedConnectorConfig {
    config: ConnectorZoomDiscriminatedConnectorConfig.Config;

    connector_name: 'zoom';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorZoomDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorApolloDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'apollo';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorPlaidDiscriminatedConnectorConfig {
    config: ConnectorPlaidDiscriminatedConnectorConfig.Config;

    connector_name: 'plaid';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorPlaidDiscriminatedConnectorConfig {
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
  }

  export interface ConnectorPostgresDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'postgres';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSlackAgentDiscriminatedConnectorConfig {
    config: ConnectorSlackAgentDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-agent';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackAgentDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Previous challenge code - e.g. challenge_slack_abc123xyz
       */
      challenge_code: string;

      /**
       * USER_PASTED_TOKEN - SLACK_ONETIME_CHALLENGE_CODE
       */
      challenge_response: string;

      /**
       * App description - Replit integration app for Slack workspace
       */
      app_description?: string;

      /**
       * App ID - A1234567890
       */
      app_id?: string;

      /**
       * App name - Replit Agent App
       */
      app_name?: string;

      /**
       * Client ID - 1234567890.1234567890
       */
      client_id?: string;

      /**
       * Client secret - abc123...
       */
      client_secret?: string;

      /**
       * Initial event subscription URL
       */
      event_subscription_url?: string;

      /**
       * Initial OAuth URL - https://slack.com/oauth/v2/authorize?...
       */
      initial_oauth_url?: string;

      /**
       * Service token - xoxb-...
       */
      service_token?: string;

      /**
       * Signing secret - abc123...
       */
      signing_secret?: string;

      /**
       * Verification token - xyz123...
       */
      verification_token?: string;
    }
  }

  export interface ConnectorSlackAgentBuilderDiscriminatedConnectorConfig {
    config: ConnectorSlackAgentBuilderDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-agent-builder';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackAgentBuilderDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorStripeDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'stripe';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorStripeAgentSandboxDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'stripe-agent-sandbox';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorTwilioDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'twilio';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorWorkatoDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'workato';

    id?: string;

    connection_count?: number;

    connector?: TopLevelAPI.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: { [key: string]: TopLevelAPI.Integration };

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }
}

export interface ListCustomersResponse {
  /**
   * Customer Id
   */
  id: string | null;

  connection_count: number;

  /**
   * postgres timestamp format, not yet ISO
   */
  created_at: string;

  /**
   * postgres timestamp format, not yet ISO
   */
  updated_at: string;
}

export type ListEventsResponse =
  | ListEventsResponse.UnionMember0
  | ListEventsResponse.UnionMember1
  | ListEventsResponse.UnionMember2
  | ListEventsResponse.UnionMember3
  | ListEventsResponse.UnionMember4
  | ListEventsResponse.UnionMember5
  | ListEventsResponse.UnionMember6
  | ListEventsResponse.UnionMember7
  | ListEventsResponse.UnionMember8
  | ListEventsResponse.UnionMember9
  | ListEventsResponse.UnionMember10
  | ListEventsResponse.UnionMember11
  | ListEventsResponse.UnionMember12
  | ListEventsResponse.UnionMember13
  | ListEventsResponse.UnionMember14
  | ListEventsResponse.UnionMember15
  | ListEventsResponse.UnionMember16
  | ListEventsResponse.UnionMember17
  | ListEventsResponse.UnionMember18
  | ListEventsResponse.UnionMember19
  | ListEventsResponse.UnionMember20;

export namespace ListEventsResponse {
  export interface UnionMember0 {
    data: unknown;

    name: 'debug.debug';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export interface UnionMember1 {
    data: UnionMember1.Data;

    name: 'webhook.received';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export namespace UnionMember1 {
    export interface Data {
      headers: { [key: string]: unknown };

      method: string;

      path: string;

      query: { [key: string]: unknown };

      traceId: string;

      body?: unknown;
    }
  }

  export interface UnionMember2 {
    data: unknown;

    name: 'db.user-created';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export interface UnionMember3 {
    data: unknown;

    name: 'db.user-deleted';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export interface UnionMember4 {
    data: UnionMember4.Data;

    name: 'db.connection-created';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export namespace UnionMember4 {
    export interface Data {
      /**
       * Must start with 'conn\_'
       */
      connection_id: string;
    }
  }

  export interface UnionMember5 {
    data: UnionMember5.Data;

    name: 'db.connection-deleted';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export namespace UnionMember5 {
    export interface Data {
      /**
       * Must start with 'conn\_'
       */
      connection_id: string;
    }
  }

  export interface UnionMember6 {
    data: unknown;

    name: 'user.signin';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export interface UnionMember7 {
    data: unknown;

    name: 'user.signout';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export interface UnionMember8 {
    data: UnionMember8.Data;

    name: 'connect.session-started';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export namespace UnionMember8 {
    export interface Data {
      connector_name: string;

      meta?: unknown;
    }
  }

  export interface UnionMember9 {
    data: UnionMember9.Data;

    name: 'connect.session-cancelled';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export namespace UnionMember9 {
    export interface Data {
      connector_name: string;

      meta?: unknown;
    }
  }

  export interface UnionMember10 {
    data: UnionMember10.Data;

    name: 'connect.session-succeeded';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export namespace UnionMember10 {
    export interface Data {
      connector_name: string;

      meta?: unknown;
    }
  }

  export interface UnionMember11 {
    data: UnionMember11.Data;

    name: 'connect.session-errored';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export namespace UnionMember11 {
    export interface Data {
      connector_name: string;

      meta?: unknown;
    }
  }

  export interface UnionMember12 {
    data: unknown;

    name: 'connect.loaded';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export interface UnionMember13 {
    data: UnionMember13.Data;

    name: 'connect.loading-error';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export namespace UnionMember13 {
    export interface Data {
      error_details?: string | null;

      error_message?: string | null;
    }
  }

  export interface UnionMember14 {
    data: UnionMember14.Data;

    name: 'connect.connection-connected';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export namespace UnionMember14 {
    export interface Data {
      /**
       * Must start with 'conn\_'
       */
      connection_id: string;

      customer_id: string | null;
    }
  }

  export interface UnionMember15 {
    data: UnionMember15.Data;

    name: 'connect.connection-deleted';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export namespace UnionMember15 {
    export interface Data {
      /**
       * Must start with 'conn\_'
       */
      connection_id: string;

      customer_id: string;
    }
  }

  export interface UnionMember16 {
    data: UnionMember16.Data;

    name: 'connect.connection-checked';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export namespace UnionMember16 {
    export interface Data {
      /**
       * Must start with 'conn\_'
       */
      connection_id: string;

      customer_id: string;

      status: string | null;

      status_message: string | null;
    }
  }

  export interface UnionMember17 {
    data: unknown;

    name: 'api.token-copied';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export interface UnionMember18 {
    data: unknown;

    name: 'api.graphql-request';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export interface UnionMember19 {
    data: unknown;

    name: 'api.rest-request';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export interface UnionMember20 {
    data: UnionMember20.Data;

    name: 'pageview';

    id?: string;

    customer_id?: string | null;

    org_id?: string | null;

    prompt?: string | null;

    timestamp?: string;

    user?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    user_id?: string | null;

    v?: string | null;
  }

  export namespace UnionMember20 {
    export interface Data {
      current_url: string;

      path: string;
    }
  }
}

export type PostConnectResponse =
  | PostConnectResponse.ConnectorAcmeApikeyDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorAcmeOauth2DiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorAsanaDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorBigqueryDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorBoxDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorCalendlyDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorConfluenceDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorDatabricksDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorDiscordDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorDropboxDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorFigmaDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorGitHubDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorGoogleCalendarDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorGoogleDocsDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorGoogleDriveDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorGoogleMailDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorGoogleSheetDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorHubspotDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorInstagramDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorJiraDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorLinearDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorMondayDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorNotionDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorOnedriveDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorOutlookDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorResendDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorSalesforceDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorSendgridDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorSharepointDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorSlackDeployedAgentDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorSlackDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorSnowflakeDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorSpotifyDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorYoutubeDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorZendeskDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorZoomDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorApolloDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorPlaidDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorPostgresDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorSlackAgentDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorSlackAgentBuilderDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorStripeDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorStripeAgentSandboxDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorTwilioDiscriminatedConnectionSettings
  | PostConnectResponse.ConnectorWorkatoDiscriminatedConnectionSettings;

export namespace PostConnectResponse {
  export interface ConnectorAcmeApikeyDiscriminatedConnectionSettings {
    connector_name: 'acme-apikey';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorAcmeApikeyDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorAcmeApikeyDiscriminatedConnectionSettings {
    export interface Settings {
      api_key: string;
    }
  }

  export interface ConnectorAcmeOauth2DiscriminatedConnectionSettings {
    connector_name: 'acme-oauth2';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorAcmeOauth2DiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorAsanaDiscriminatedConnectionSettings {
    connector_name: 'asana';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorAsanaDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorAsanaDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorBigqueryDiscriminatedConnectionSettings {
    connector_name: 'bigquery';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorBigqueryDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorBigqueryDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorBoxDiscriminatedConnectionSettings {
    connector_name: 'box';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorBoxDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorBoxDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorCalendlyDiscriminatedConnectionSettings {
    connector_name: 'calendly';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorCalendlyDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorCalendlyDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectionSettings {
    connector_name: 'confluence';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorConfluenceDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorConfluenceDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorDatabricksDiscriminatedConnectionSettings {
    connector_name: 'databricks';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorDatabricksDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorDatabricksDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The Databricks workspace instance name (e.g., "your-workspace" for
       * your-workspace.cloud.databricks.com)
       */
      databricks_instance: string;

      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectionSettings {
    connector_name: 'discord';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorDiscordDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorDiscordDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorDropboxDiscriminatedConnectionSettings {
    connector_name: 'dropbox';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorDropboxDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorDropboxDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorFigmaDiscriminatedConnectionSettings {
    connector_name: 'figma';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorFigmaDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorFigmaDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectionSettings {
    connector_name: 'github';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorGitHubDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGitHubDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectionSettings {
    connector_name: 'google-calendar';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorGoogleCalendarDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectionSettings {
    connector_name: 'google-docs';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorGoogleDocsDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectionSettings {
    connector_name: 'google-drive';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorGoogleDriveDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectionSettings {
    connector_name: 'google-mail';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorGoogleMailDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectionSettings {
    connector_name: 'google-sheet';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorGoogleSheetDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectionSettings {
    connector_name: 'hubspot';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorHubspotDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorHubspotDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectionSettings {
    connector_name: 'instagram';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorInstagramDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorInstagramDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorJiraDiscriminatedConnectionSettings {
    connector_name: 'jira';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorJiraDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorJiraDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorLinearDiscriminatedConnectionSettings {
    connector_name: 'linear';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorLinearDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorLinearDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorMondayDiscriminatedConnectionSettings {
    connector_name: 'monday';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorMondayDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorMondayDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorNotionDiscriminatedConnectionSettings {
    connector_name: 'notion';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorNotionDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorNotionDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorOnedriveDiscriminatedConnectionSettings {
    connector_name: 'onedrive';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorOnedriveDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorOnedriveDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorOutlookDiscriminatedConnectionSettings {
    connector_name: 'outlook';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorOutlookDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorOutlookDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorResendDiscriminatedConnectionSettings {
    connector_name: 'resend';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorResendDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorResendDiscriminatedConnectionSettings {
    export interface Settings {
      api_key: string;
    }
  }

  export interface ConnectorSalesforceDiscriminatedConnectionSettings {
    connector_name: 'salesforce';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorSalesforceDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSalesforceDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The instance URL of your Salesforce account (e.g., example)
       */
      instance_url: string;

      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSendgridDiscriminatedConnectionSettings {
    connector_name: 'sendgrid';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorSendgridDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSendgridDiscriminatedConnectionSettings {
    export interface Settings {
      api_key: string;
    }
  }

  export interface ConnectorSharepointDiscriminatedConnectionSettings {
    connector_name: 'sharepoint';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorSharepointDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSharepointDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSlackDeployedAgentDiscriminatedConnectionSettings {
    connector_name: 'slack-deployed-agent';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorSlackDeployedAgentDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSlackDeployedAgentDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSlackDiscriminatedConnectionSettings {
    connector_name: 'slack';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorSlackDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSlackDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSnowflakeDiscriminatedConnectionSettings {
    connector_name: 'snowflake';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorSnowflakeDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSnowflakeDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * The domain of your Snowflake account (e.g., https://example-subdomain)
       */
      snowflake_account_url: string;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSpotifyDiscriminatedConnectionSettings {
    connector_name: 'spotify';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorSpotifyDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSpotifyDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorYoutubeDiscriminatedConnectionSettings {
    connector_name: 'youtube';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorYoutubeDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorYoutubeDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorZendeskDiscriminatedConnectionSettings {
    connector_name: 'zendesk';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorZendeskDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorZendeskDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * The subdomain of your Zendesk account (e.g., https://domain.zendesk.com)
       */
      subdomain: string;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorZoomDiscriminatedConnectionSettings {
    connector_name: 'zoom';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorZoomDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorZoomDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorApolloDiscriminatedConnectionSettings {
    connector_name: 'apollo';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorApolloDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorApolloDiscriminatedConnectionSettings {
    export interface Settings {
      api_key: string;
    }
  }

  export interface ConnectorPlaidDiscriminatedConnectionSettings {
    connector_name: 'plaid';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorPlaidDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorPlaidDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken: string;

      institution?: unknown;

      item?: unknown;

      itemId?: string | null;

      status?: unknown;

      webhookItemError?: null;
    }
  }

  export interface ConnectorPostgresDiscriminatedConnectionSettings {
    connector_name: 'postgres';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorPostgresDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorPostgresDiscriminatedConnectionSettings {
    export interface Settings {
      database_url?: string;
    }
  }

  export interface ConnectorSlackAgentDiscriminatedConnectionSettings {
    connector_name: 'slack-agent';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorSlackAgentDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSlackAgentDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * Bot OAuth token - xoxb-...
       */
      access_token: string;
    }
  }

  export interface ConnectorSlackAgentBuilderDiscriminatedConnectionSettings {
    connector_name: 'slack-agent-builder';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorSlackAgentBuilderDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSlackAgentBuilderDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;

      agent_builder?: Settings.AgentBuilder;

      /**
       * URL for Slack event subscriptions
       */
      event_subscription_url?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }

      export interface AgentBuilder {
        oauth: AgentBuilder.OAuth;

        /**
         * Slack app configuration created by the agent builder
         */
        app?: AgentBuilder.App;
      }

      export namespace AgentBuilder {
        export interface OAuth {
          created_at?: string;

          /**
           * Output of the postConnect hook for oauth2 connectors
           */
          credentials?: OAuth.Credentials;

          last_fetched_at?: string;

          metadata?: { [key: string]: unknown } | null;

          updated_at?: string;
        }

        export namespace OAuth {
          /**
           * Output of the postConnect hook for oauth2 connectors
           */
          export interface Credentials {
            access_token: string;

            /**
             * Client ID used for the connection
             */
            client_id?: string;

            expires_at?: string;

            expires_in?: number;

            raw?: { [key: string]: unknown };

            refresh_token?: string;

            scope?: string;

            token_type?: string;
          }
        }

        /**
         * Slack app configuration created by the agent builder
         */
        export interface App {
          /**
           * The Slack app ID
           */
          app_id: string;

          /**
           * The client ID for the app
           */
          client_id: string;

          /**
           * The client secret for the app
           */
          client_secret: string;

          /**
           * The OAuth authorization URL for the app
           */
          oauth_url: string;

          /**
           * The signing secret for the app
           */
          signing_secret: string;

          /**
           * The verification token for the app
           */
          verification_token: string;
        }
      }
    }
  }

  export interface ConnectorStripeDiscriminatedConnectionSettings {
    connector_name: 'stripe';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorStripeDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorStripeDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * MCP access token
       */
      mcp: string;

      /**
       * Stripe publishable key for production
       */
      publishable: string;

      /**
       * Stripe secret key for production
       */
      secret: string;
    }
  }

  export interface ConnectorStripeAgentSandboxDiscriminatedConnectionSettings {
    connector_name: 'stripe-agent-sandbox';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorStripeAgentSandboxDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorStripeAgentSandboxDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * URL to claim/access the Stripe sandbox
       */
      claim_url: string;

      /**
       * MCP access token
       */
      mcp: string;

      /**
       * Stripe publishable key for the sandbox
       */
      publishable: string;

      /**
       * Stripe secret key for the sandbox
       */
      secret: string;
    }
  }

  export interface ConnectorTwilioDiscriminatedConnectionSettings {
    connector_name: 'twilio';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorTwilioDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorTwilioDiscriminatedConnectionSettings {
    export interface Settings {
      account_sid: string;

      api_key: string;

      api_key_secret: string;
    }
  }

  export interface ConnectorWorkatoDiscriminatedConnectionSettings {
    connector_name: 'workato';

    id?: string;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    settings?: ConnectorWorkatoDiscriminatedConnectionSettings.Settings;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | 'unknown' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorWorkatoDiscriminatedConnectionSettings {
    export interface Settings {
      workato_api_host: string;

      workato_api_token: string;

      workato_account_id?: string;
    }
  }
}

export type PreConfigureConnectorResponse = { [key: string]: unknown };

export type PreConnectResponse =
  | PreConnectResponse.ConnectorAcmeApikeyDiscriminatedConnectInput
  | PreConnectResponse.ConnectorAcmeOauth2DiscriminatedConnectInput
  | PreConnectResponse.ConnectorAsanaDiscriminatedConnectInput
  | PreConnectResponse.ConnectorBigqueryDiscriminatedConnectInput
  | PreConnectResponse.ConnectorBoxDiscriminatedConnectInput
  | PreConnectResponse.ConnectorCalendlyDiscriminatedConnectInput
  | PreConnectResponse.ConnectorConfluenceDiscriminatedConnectInput
  | PreConnectResponse.ConnectorDatabricksDiscriminatedConnectInput
  | PreConnectResponse.ConnectorDiscordDiscriminatedConnectInput
  | PreConnectResponse.ConnectorDropboxDiscriminatedConnectInput
  | PreConnectResponse.ConnectorFigmaDiscriminatedConnectInput
  | PreConnectResponse.ConnectorGitHubDiscriminatedConnectInput
  | PreConnectResponse.ConnectorGoogleCalendarDiscriminatedConnectInput
  | PreConnectResponse.ConnectorGoogleDocsDiscriminatedConnectInput
  | PreConnectResponse.ConnectorGoogleDriveDiscriminatedConnectInput
  | PreConnectResponse.ConnectorGoogleMailDiscriminatedConnectInput
  | PreConnectResponse.ConnectorGoogleSheetDiscriminatedConnectInput
  | PreConnectResponse.ConnectorHubspotDiscriminatedConnectInput
  | PreConnectResponse.ConnectorInstagramDiscriminatedConnectInput
  | PreConnectResponse.ConnectorJiraDiscriminatedConnectInput
  | PreConnectResponse.ConnectorLinearDiscriminatedConnectInput
  | PreConnectResponse.ConnectorMondayDiscriminatedConnectInput
  | PreConnectResponse.ConnectorNotionDiscriminatedConnectInput
  | PreConnectResponse.ConnectorOnedriveDiscriminatedConnectInput
  | PreConnectResponse.ConnectorOutlookDiscriminatedConnectInput
  | PreConnectResponse.ConnectorResendDiscriminatedConnectInput
  | PreConnectResponse.ConnectorSalesforceDiscriminatedConnectInput
  | PreConnectResponse.ConnectorSendgridDiscriminatedConnectInput
  | PreConnectResponse.ConnectorSharepointDiscriminatedConnectInput
  | PreConnectResponse.ConnectorSlackDeployedAgentDiscriminatedConnectInput
  | PreConnectResponse.ConnectorSlackDiscriminatedConnectInput
  | PreConnectResponse.ConnectorSnowflakeDiscriminatedConnectInput
  | PreConnectResponse.ConnectorSpotifyDiscriminatedConnectInput
  | PreConnectResponse.ConnectorYoutubeDiscriminatedConnectInput
  | PreConnectResponse.ConnectorZendeskDiscriminatedConnectInput
  | PreConnectResponse.ConnectorZoomDiscriminatedConnectInput
  | PreConnectResponse.ConnectorApolloDiscriminatedConnectInput
  | PreConnectResponse.ConnectorPlaidDiscriminatedConnectInput
  | PreConnectResponse.ConnectorPostgresDiscriminatedConnectInput
  | PreConnectResponse.ConnectorSlackAgentDiscriminatedConnectInput
  | PreConnectResponse.ConnectorSlackAgentBuilderDiscriminatedConnectInput
  | PreConnectResponse.ConnectorStripeDiscriminatedConnectInput
  | PreConnectResponse.ConnectorStripeAgentSandboxDiscriminatedConnectInput
  | PreConnectResponse.ConnectorTwilioDiscriminatedConnectInput
  | PreConnectResponse.ConnectorWorkatoDiscriminatedConnectInput;

export namespace PreConnectResponse {
  export interface ConnectorAcmeApikeyDiscriminatedConnectInput {
    connect_input: unknown;

    connector_name: 'acme-apikey';
  }

  export interface ConnectorAcmeOauth2DiscriminatedConnectInput {
    connect_input: ConnectorAcmeOauth2DiscriminatedConnectInput.ConnectInput;

    connector_name: 'acme-oauth2';
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorAsanaDiscriminatedConnectInput {
    connect_input: ConnectorAsanaDiscriminatedConnectInput.ConnectInput;

    connector_name: 'asana';
  }

  export namespace ConnectorAsanaDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorBigqueryDiscriminatedConnectInput {
    connect_input: ConnectorBigqueryDiscriminatedConnectInput.ConnectInput;

    connector_name: 'bigquery';
  }

  export namespace ConnectorBigqueryDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorBoxDiscriminatedConnectInput {
    connect_input: ConnectorBoxDiscriminatedConnectInput.ConnectInput;

    connector_name: 'box';
  }

  export namespace ConnectorBoxDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorCalendlyDiscriminatedConnectInput {
    connect_input: ConnectorCalendlyDiscriminatedConnectInput.ConnectInput;

    connector_name: 'calendly';
  }

  export namespace ConnectorCalendlyDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectInput {
    connect_input: ConnectorConfluenceDiscriminatedConnectInput.ConnectInput;

    connector_name: 'confluence';
  }

  export namespace ConnectorConfluenceDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorDatabricksDiscriminatedConnectInput {
    connect_input: ConnectorDatabricksDiscriminatedConnectInput.ConnectInput;

    connector_name: 'databricks';
  }

  export namespace ConnectorDatabricksDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectInput {
    connect_input: ConnectorDiscordDiscriminatedConnectInput.ConnectInput;

    connector_name: 'discord';
  }

  export namespace ConnectorDiscordDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorDropboxDiscriminatedConnectInput {
    connect_input: ConnectorDropboxDiscriminatedConnectInput.ConnectInput;

    connector_name: 'dropbox';
  }

  export namespace ConnectorDropboxDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorFigmaDiscriminatedConnectInput {
    connect_input: ConnectorFigmaDiscriminatedConnectInput.ConnectInput;

    connector_name: 'figma';
  }

  export namespace ConnectorFigmaDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectInput {
    connect_input: ConnectorGitHubDiscriminatedConnectInput.ConnectInput;

    connector_name: 'github';
  }

  export namespace ConnectorGitHubDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectInput {
    connect_input: ConnectorGoogleCalendarDiscriminatedConnectInput.ConnectInput;

    connector_name: 'google-calendar';
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectInput {
    connect_input: ConnectorGoogleDocsDiscriminatedConnectInput.ConnectInput;

    connector_name: 'google-docs';
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectInput {
    connect_input: ConnectorGoogleDriveDiscriminatedConnectInput.ConnectInput;

    connector_name: 'google-drive';
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectInput {
    connect_input: ConnectorGoogleMailDiscriminatedConnectInput.ConnectInput;

    connector_name: 'google-mail';
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectInput {
    connect_input: ConnectorGoogleSheetDiscriminatedConnectInput.ConnectInput;

    connector_name: 'google-sheet';
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectInput {
    connect_input: ConnectorHubspotDiscriminatedConnectInput.ConnectInput;

    connector_name: 'hubspot';
  }

  export namespace ConnectorHubspotDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectInput {
    connect_input: ConnectorInstagramDiscriminatedConnectInput.ConnectInput;

    connector_name: 'instagram';
  }

  export namespace ConnectorInstagramDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorJiraDiscriminatedConnectInput {
    connect_input: ConnectorJiraDiscriminatedConnectInput.ConnectInput;

    connector_name: 'jira';
  }

  export namespace ConnectorJiraDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorLinearDiscriminatedConnectInput {
    connect_input: ConnectorLinearDiscriminatedConnectInput.ConnectInput;

    connector_name: 'linear';
  }

  export namespace ConnectorLinearDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorMondayDiscriminatedConnectInput {
    connect_input: ConnectorMondayDiscriminatedConnectInput.ConnectInput;

    connector_name: 'monday';
  }

  export namespace ConnectorMondayDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorNotionDiscriminatedConnectInput {
    connect_input: ConnectorNotionDiscriminatedConnectInput.ConnectInput;

    connector_name: 'notion';
  }

  export namespace ConnectorNotionDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorOnedriveDiscriminatedConnectInput {
    connect_input: ConnectorOnedriveDiscriminatedConnectInput.ConnectInput;

    connector_name: 'onedrive';
  }

  export namespace ConnectorOnedriveDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorOutlookDiscriminatedConnectInput {
    connect_input: ConnectorOutlookDiscriminatedConnectInput.ConnectInput;

    connector_name: 'outlook';
  }

  export namespace ConnectorOutlookDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorResendDiscriminatedConnectInput {
    connect_input: unknown;

    connector_name: 'resend';
  }

  export interface ConnectorSalesforceDiscriminatedConnectInput {
    connect_input: ConnectorSalesforceDiscriminatedConnectInput.ConnectInput;

    connector_name: 'salesforce';
  }

  export namespace ConnectorSalesforceDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorSendgridDiscriminatedConnectInput {
    connect_input: unknown;

    connector_name: 'sendgrid';
  }

  export interface ConnectorSharepointDiscriminatedConnectInput {
    connect_input: ConnectorSharepointDiscriminatedConnectInput.ConnectInput;

    connector_name: 'sharepoint';
  }

  export namespace ConnectorSharepointDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorSlackDeployedAgentDiscriminatedConnectInput {
    connect_input: ConnectorSlackDeployedAgentDiscriminatedConnectInput.ConnectInput;

    connector_name: 'slack-deployed-agent';
  }

  export namespace ConnectorSlackDeployedAgentDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorSlackDiscriminatedConnectInput {
    connect_input: ConnectorSlackDiscriminatedConnectInput.ConnectInput;

    connector_name: 'slack';
  }

  export namespace ConnectorSlackDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorSnowflakeDiscriminatedConnectInput {
    connect_input: ConnectorSnowflakeDiscriminatedConnectInput.ConnectInput;

    connector_name: 'snowflake';
  }

  export namespace ConnectorSnowflakeDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorSpotifyDiscriminatedConnectInput {
    connect_input: ConnectorSpotifyDiscriminatedConnectInput.ConnectInput;

    connector_name: 'spotify';
  }

  export namespace ConnectorSpotifyDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorYoutubeDiscriminatedConnectInput {
    connect_input: ConnectorYoutubeDiscriminatedConnectInput.ConnectInput;

    connector_name: 'youtube';
  }

  export namespace ConnectorYoutubeDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorZendeskDiscriminatedConnectInput {
    connect_input: ConnectorZendeskDiscriminatedConnectInput.ConnectInput;

    connector_name: 'zendesk';
  }

  export namespace ConnectorZendeskDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorZoomDiscriminatedConnectInput {
    connect_input: ConnectorZoomDiscriminatedConnectInput.ConnectInput;

    connector_name: 'zoom';
  }

  export namespace ConnectorZoomDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorApolloDiscriminatedConnectInput {
    connect_input: unknown;

    connector_name: 'apollo';
  }

  export interface ConnectorPlaidDiscriminatedConnectInput {
    connect_input:
      | ConnectorPlaidDiscriminatedConnectInput.LinkToken
      | ConnectorPlaidDiscriminatedConnectInput.PublicToken;

    connector_name: 'plaid';
  }

  export namespace ConnectorPlaidDiscriminatedConnectInput {
    export interface LinkToken {
      link_token: string;
    }

    export interface PublicToken {
      public_token: string;
    }
  }

  export interface ConnectorPostgresDiscriminatedConnectInput {
    connect_input: unknown;

    connector_name: 'postgres';
  }

  export interface ConnectorSlackAgentDiscriminatedConnectInput {
    connect_input: ConnectorSlackAgentDiscriminatedConnectInput.ConnectInput;

    connector_name: 'slack-agent';
  }

  export namespace ConnectorSlackAgentDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * Configuration URL - https://api.slack.com/apps/A1234567890/oauth...
       */
      configuration_url: string;
    }
  }

  export interface ConnectorSlackAgentBuilderDiscriminatedConnectInput {
    connect_input: ConnectorSlackAgentBuilderDiscriminatedConnectInput.ConnectInput;

    connector_name: 'slack-agent-builder';
  }

  export namespace ConnectorSlackAgentBuilderDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * URL to take user to for approval
       */
      authorization_url: string;

      /**
       * Code verifier for PKCE
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorStripeDiscriminatedConnectInput {
    connect_input: ConnectorStripeDiscriminatedConnectInput.ConnectInput;

    connector_name: 'stripe';
  }

  export namespace ConnectorStripeDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * MCP access token
       */
      mcp: string;

      /**
       * Stripe publishable key for the sandbox
       */
      publishable: string;

      /**
       * Stripe secret key for the sandbox
       */
      secret: string;
    }
  }

  export interface ConnectorStripeAgentSandboxDiscriminatedConnectInput {
    connect_input: ConnectorStripeAgentSandboxDiscriminatedConnectInput.ConnectInput;

    connector_name: 'stripe-agent-sandbox';
  }

  export namespace ConnectorStripeAgentSandboxDiscriminatedConnectInput {
    export interface ConnectInput {
      /**
       * MCP access token
       */
      mcp: string;

      /**
       * Stripe publishable key for the sandbox
       */
      publishable: string;

      /**
       * Stripe secret key for the sandbox
       */
      secret: string;

      /**
       * URL to claim/access the Stripe sandbox
       */
      claim_url?: string;
    }
  }

  export interface ConnectorTwilioDiscriminatedConnectInput {
    connect_input: unknown;

    connector_name: 'twilio';
  }

  export interface ConnectorWorkatoDiscriminatedConnectInput {
    connect_input: unknown;

    connector_name: 'workato';
  }
}

export type UpsertConnnectorConfigResponse =
  | UpsertConnnectorConfigResponse.ConnectorAcmeApikeyDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorAcmeOauth2DiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorAsanaDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorBigqueryDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorBoxDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorCalendlyDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorConfluenceDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorDatabricksDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorDiscordDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorDropboxDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorFigmaDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorGitHubDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorGoogleCalendarDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorGoogleDocsDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorGoogleDriveDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorGoogleMailDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorGoogleSheetDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorHubspotDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorInstagramDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorJiraDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorLinearDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorMondayDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorNotionDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorOnedriveDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorOutlookDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorResendDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorSalesforceDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorSendgridDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorSharepointDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorSlackDeployedAgentDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorSlackDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorSnowflakeDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorSpotifyDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorYoutubeDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorZendeskDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorZoomDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorApolloDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorPlaidDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorPostgresDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorSlackAgentDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorSlackAgentBuilderDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorStripeDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorStripeAgentSandboxDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorTwilioDiscriminatedConnectorConfig
  | UpsertConnnectorConfigResponse.ConnectorWorkatoDiscriminatedConnectorConfig;

export namespace UpsertConnnectorConfigResponse {
  export interface ConnectorAcmeApikeyDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'acme-apikey';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorAcmeOauth2DiscriminatedConnectorConfig {
    config: ConnectorAcmeOauth2DiscriminatedConnectorConfig.Config;

    connector_name: 'acme-oauth2';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorAsanaDiscriminatedConnectorConfig {
    config: ConnectorAsanaDiscriminatedConnectorConfig.Config;

    connector_name: 'asana';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorAsanaDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorBigqueryDiscriminatedConnectorConfig {
    config: ConnectorBigqueryDiscriminatedConnectorConfig.Config;

    connector_name: 'bigquery';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorBigqueryDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorBoxDiscriminatedConnectorConfig {
    config: ConnectorBoxDiscriminatedConnectorConfig.Config;

    connector_name: 'box';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorBoxDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorCalendlyDiscriminatedConnectorConfig {
    config: ConnectorCalendlyDiscriminatedConnectorConfig.Config;

    connector_name: 'calendly';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorCalendlyDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectorConfig {
    config: ConnectorConfluenceDiscriminatedConnectorConfig.Config;

    connector_name: 'confluence';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorConfluenceDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDatabricksDiscriminatedConnectorConfig {
    config: ConnectorDatabricksDiscriminatedConnectorConfig.Config;

    connector_name: 'databricks';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDatabricksDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectorConfig {
    config: ConnectorDiscordDiscriminatedConnectorConfig.Config;

    connector_name: 'discord';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDiscordDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorDropboxDiscriminatedConnectorConfig {
    config: ConnectorDropboxDiscriminatedConnectorConfig.Config;

    connector_name: 'dropbox';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDropboxDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorFigmaDiscriminatedConnectorConfig {
    config: ConnectorFigmaDiscriminatedConnectorConfig.Config;

    connector_name: 'figma';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorFigmaDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectorConfig {
    config: ConnectorGitHubDiscriminatedConnectorConfig.Config;

    connector_name: 'github';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGitHubDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectorConfig {
    config: ConnectorGoogleCalendarDiscriminatedConnectorConfig.Config;

    connector_name: 'google-calendar';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectorConfig {
    config: ConnectorGoogleDocsDiscriminatedConnectorConfig.Config;

    connector_name: 'google-docs';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectorConfig {
    config: ConnectorGoogleDriveDiscriminatedConnectorConfig.Config;

    connector_name: 'google-drive';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectorConfig {
    config: ConnectorGoogleMailDiscriminatedConnectorConfig.Config;

    connector_name: 'google-mail';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectorConfig {
    config: ConnectorGoogleSheetDiscriminatedConnectorConfig.Config;

    connector_name: 'google-sheet';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectorConfig {
    config: ConnectorHubspotDiscriminatedConnectorConfig.Config;

    connector_name: 'hubspot';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorHubspotDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectorConfig {
    config: ConnectorInstagramDiscriminatedConnectorConfig.Config;

    connector_name: 'instagram';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorInstagramDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorJiraDiscriminatedConnectorConfig {
    config: ConnectorJiraDiscriminatedConnectorConfig.Config;

    connector_name: 'jira';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorJiraDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorLinearDiscriminatedConnectorConfig {
    config: ConnectorLinearDiscriminatedConnectorConfig.Config;

    connector_name: 'linear';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorLinearDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorMondayDiscriminatedConnectorConfig {
    config: ConnectorMondayDiscriminatedConnectorConfig.Config;

    connector_name: 'monday';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorMondayDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorNotionDiscriminatedConnectorConfig {
    config: ConnectorNotionDiscriminatedConnectorConfig.Config;

    connector_name: 'notion';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorNotionDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorOnedriveDiscriminatedConnectorConfig {
    config: ConnectorOnedriveDiscriminatedConnectorConfig.Config;

    connector_name: 'onedrive';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorOnedriveDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorOutlookDiscriminatedConnectorConfig {
    config: ConnectorOutlookDiscriminatedConnectorConfig.Config;

    connector_name: 'outlook';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorOutlookDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorResendDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'resend';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSalesforceDiscriminatedConnectorConfig {
    config: ConnectorSalesforceDiscriminatedConnectorConfig.Config;

    connector_name: 'salesforce';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSalesforceDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSendgridDiscriminatedConnectorConfig {
    /**
     * Base configuration for api key connector
     */
    config: unknown;

    connector_name: 'sendgrid';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSharepointDiscriminatedConnectorConfig {
    config: ConnectorSharepointDiscriminatedConnectorConfig.Config;

    connector_name: 'sharepoint';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSharepointDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSlackDeployedAgentDiscriminatedConnectorConfig {
    config: ConnectorSlackDeployedAgentDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-deployed-agent';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackDeployedAgentDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSlackDiscriminatedConnectorConfig {
    config: ConnectorSlackDiscriminatedConnectorConfig.Config;

    connector_name: 'slack';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSnowflakeDiscriminatedConnectorConfig {
    config: ConnectorSnowflakeDiscriminatedConnectorConfig.Config;

    connector_name: 'snowflake';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSnowflakeDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorSpotifyDiscriminatedConnectorConfig {
    config: ConnectorSpotifyDiscriminatedConnectorConfig.Config;

    connector_name: 'spotify';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSpotifyDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorYoutubeDiscriminatedConnectorConfig {
    config: ConnectorYoutubeDiscriminatedConnectorConfig.Config;

    connector_name: 'youtube';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorYoutubeDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorZendeskDiscriminatedConnectorConfig {
    config: ConnectorZendeskDiscriminatedConnectorConfig.Config;

    connector_name: 'zendesk';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorZendeskDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorZoomDiscriminatedConnectorConfig {
    config: ConnectorZoomDiscriminatedConnectorConfig.Config;

    connector_name: 'zoom';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorZoomDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorApolloDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'apollo';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorPlaidDiscriminatedConnectorConfig {
    config: ConnectorPlaidDiscriminatedConnectorConfig.Config;

    connector_name: 'plaid';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorPlaidDiscriminatedConnectorConfig {
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
  }

  export interface ConnectorPostgresDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'postgres';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorSlackAgentDiscriminatedConnectorConfig {
    config: ConnectorSlackAgentDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-agent';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackAgentDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Previous challenge code - e.g. challenge_slack_abc123xyz
       */
      challenge_code: string;

      /**
       * USER_PASTED_TOKEN - SLACK_ONETIME_CHALLENGE_CODE
       */
      challenge_response: string;

      /**
       * App description - Replit integration app for Slack workspace
       */
      app_description?: string;

      /**
       * App ID - A1234567890
       */
      app_id?: string;

      /**
       * App name - Replit Agent App
       */
      app_name?: string;

      /**
       * Client ID - 1234567890.1234567890
       */
      client_id?: string;

      /**
       * Client secret - abc123...
       */
      client_secret?: string;

      /**
       * Initial event subscription URL
       */
      event_subscription_url?: string;

      /**
       * Initial OAuth URL - https://slack.com/oauth/v2/authorize?...
       */
      initial_oauth_url?: string;

      /**
       * Service token - xoxb-...
       */
      service_token?: string;

      /**
       * Signing secret - abc123...
       */
      signing_secret?: string;

      /**
       * Verification token - xyz123...
       */
      verification_token?: string;
    }
  }

  export interface ConnectorSlackAgentBuilderDiscriminatedConnectorConfig {
    config: ConnectorSlackAgentBuilderDiscriminatedConnectorConfig.Config;

    connector_name: 'slack-agent-builder';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackAgentBuilderDiscriminatedConnectorConfig {
    export interface Config {
      /**
       * Base oauth configuration for the connector
       */
      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      /**
       * Base oauth configuration for the connector
       */
      export interface OAuth {
        client_id?: string | null;

        client_secret?: string | null;

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }
  }

  export interface ConnectorStripeDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'stripe';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorStripeAgentSandboxDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'stripe-agent-sandbox';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorTwilioDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'twilio';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorWorkatoDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'workato';

    id?: string;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: { [key: string]: unknown } | null;

    org_id?: string;

    updated_at?: string;
  }
}

export interface UpsertCustomerResponse {
  id: string;

  api_key: string | null;

  created_at: string;

  metadata: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

  org_id: string;

  updated_at: string;
}

export interface UpsertOrganizationResponse {
  id: string;

  api_key: string;

  created: boolean;
}

export interface AssignConnectionParams {
  /**
   * The id of the connection, starts with `conn_`
   */
  id: string;
}

export interface ConnectorRpcParams {
  /**
   * Path param: The id of the connector config, starts with `ccfg_`
   */
  connector_config_id: string;

  /**
   * Body param:
   */
  input: { [key: string]: unknown };
}

export interface CreateConnectionParams {
  /**
   * The id of the connector config, starts with `ccfg_`
   */
  connector_config_id: string;

  /**
   * Connector specific data
   */
  data:
    | CreateConnectionParams.ConnectorAcmeApikeyDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorAcmeOauth2DiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorAsanaDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorBigqueryDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorBoxDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorCalendlyDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorConfluenceDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorDatabricksDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorDiscordDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorDropboxDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorFigmaDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGitHubDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGoogleCalendarDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGoogleDocsDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGoogleDriveDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGoogleMailDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGoogleSheetDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorHubspotDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorInstagramDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorJiraDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorLinearDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorMondayDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorNotionDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorOnedriveDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorOutlookDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorResendDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSalesforceDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSendgridDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSharepointDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSlackDeployedAgentDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSlackDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSnowflakeDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSpotifyDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorYoutubeDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorZendeskDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorZoomDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorApolloDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorPlaidDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorPostgresDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSlackAgentDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSlackAgentBuilderDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorStripeDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorStripeAgentSandboxDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorTwilioDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorWorkatoDiscriminatedConnectionSettings;

  /**
   * Perform a synchronous connection check before creating it.
   */
  check_connection?: boolean;

  /**
   * The id of the customer in your application. Ensure it is unique for that
   * customer.
   */
  customer_id?: string;

  metadata?: { [key: string]: unknown };
}

export namespace CreateConnectionParams {
  export interface ConnectorAcmeApikeyDiscriminatedConnectionSettings {
    connector_name: 'acme-apikey';

    settings?: ConnectorAcmeApikeyDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorAcmeApikeyDiscriminatedConnectionSettings {
    export interface Settings {
      api_key: string;
    }
  }

  export interface ConnectorAcmeOauth2DiscriminatedConnectionSettings {
    connector_name: 'acme-oauth2';

    settings?: ConnectorAcmeOauth2DiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorAsanaDiscriminatedConnectionSettings {
    connector_name: 'asana';

    settings?: ConnectorAsanaDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorAsanaDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorBigqueryDiscriminatedConnectionSettings {
    connector_name: 'bigquery';

    settings?: ConnectorBigqueryDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorBigqueryDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorBoxDiscriminatedConnectionSettings {
    connector_name: 'box';

    settings?: ConnectorBoxDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorBoxDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorCalendlyDiscriminatedConnectionSettings {
    connector_name: 'calendly';

    settings?: ConnectorCalendlyDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorCalendlyDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectionSettings {
    connector_name: 'confluence';

    settings?: ConnectorConfluenceDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorConfluenceDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorDatabricksDiscriminatedConnectionSettings {
    connector_name: 'databricks';

    settings?: ConnectorDatabricksDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorDatabricksDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The Databricks workspace instance name (e.g., "your-workspace" for
       * your-workspace.cloud.databricks.com)
       */
      databricks_instance: string;

      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectionSettings {
    connector_name: 'discord';

    settings?: ConnectorDiscordDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorDiscordDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorDropboxDiscriminatedConnectionSettings {
    connector_name: 'dropbox';

    settings?: ConnectorDropboxDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorDropboxDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorFigmaDiscriminatedConnectionSettings {
    connector_name: 'figma';

    settings?: ConnectorFigmaDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorFigmaDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectionSettings {
    connector_name: 'github';

    settings?: ConnectorGitHubDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGitHubDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectionSettings {
    connector_name: 'google-calendar';

    settings?: ConnectorGoogleCalendarDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectionSettings {
    connector_name: 'google-docs';

    settings?: ConnectorGoogleDocsDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectionSettings {
    connector_name: 'google-drive';

    settings?: ConnectorGoogleDriveDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectionSettings {
    connector_name: 'google-mail';

    settings?: ConnectorGoogleMailDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectionSettings {
    connector_name: 'google-sheet';

    settings?: ConnectorGoogleSheetDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectionSettings {
    connector_name: 'hubspot';

    settings?: ConnectorHubspotDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorHubspotDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectionSettings {
    connector_name: 'instagram';

    settings?: ConnectorInstagramDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorInstagramDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorJiraDiscriminatedConnectionSettings {
    connector_name: 'jira';

    settings?: ConnectorJiraDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorJiraDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorLinearDiscriminatedConnectionSettings {
    connector_name: 'linear';

    settings?: ConnectorLinearDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorLinearDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorMondayDiscriminatedConnectionSettings {
    connector_name: 'monday';

    settings?: ConnectorMondayDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorMondayDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorNotionDiscriminatedConnectionSettings {
    connector_name: 'notion';

    settings?: ConnectorNotionDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorNotionDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorOnedriveDiscriminatedConnectionSettings {
    connector_name: 'onedrive';

    settings?: ConnectorOnedriveDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorOnedriveDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorOutlookDiscriminatedConnectionSettings {
    connector_name: 'outlook';

    settings?: ConnectorOutlookDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorOutlookDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorResendDiscriminatedConnectionSettings {
    connector_name: 'resend';

    settings?: ConnectorResendDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorResendDiscriminatedConnectionSettings {
    export interface Settings {
      api_key: string;
    }
  }

  export interface ConnectorSalesforceDiscriminatedConnectionSettings {
    connector_name: 'salesforce';

    settings?: ConnectorSalesforceDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSalesforceDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The instance URL of your Salesforce account (e.g., example)
       */
      instance_url: string;

      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSendgridDiscriminatedConnectionSettings {
    connector_name: 'sendgrid';

    settings?: ConnectorSendgridDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSendgridDiscriminatedConnectionSettings {
    export interface Settings {
      api_key: string;
    }
  }

  export interface ConnectorSharepointDiscriminatedConnectionSettings {
    connector_name: 'sharepoint';

    settings?: ConnectorSharepointDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSharepointDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSlackDeployedAgentDiscriminatedConnectionSettings {
    connector_name: 'slack-deployed-agent';

    settings?: ConnectorSlackDeployedAgentDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSlackDeployedAgentDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSlackDiscriminatedConnectionSettings {
    connector_name: 'slack';

    settings?: ConnectorSlackDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSlackDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSnowflakeDiscriminatedConnectionSettings {
    connector_name: 'snowflake';

    settings?: ConnectorSnowflakeDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSnowflakeDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * The domain of your Snowflake account (e.g., https://example-subdomain)
       */
      snowflake_account_url: string;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSpotifyDiscriminatedConnectionSettings {
    connector_name: 'spotify';

    settings?: ConnectorSpotifyDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSpotifyDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorYoutubeDiscriminatedConnectionSettings {
    connector_name: 'youtube';

    settings?: ConnectorYoutubeDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorYoutubeDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorZendeskDiscriminatedConnectionSettings {
    connector_name: 'zendesk';

    settings?: ConnectorZendeskDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorZendeskDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * The subdomain of your Zendesk account (e.g., https://domain.zendesk.com)
       */
      subdomain: string;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorZoomDiscriminatedConnectionSettings {
    connector_name: 'zoom';

    settings?: ConnectorZoomDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorZoomDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorApolloDiscriminatedConnectionSettings {
    connector_name: 'apollo';

    settings?: ConnectorApolloDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorApolloDiscriminatedConnectionSettings {
    export interface Settings {
      api_key: string;
    }
  }

  export interface ConnectorPlaidDiscriminatedConnectionSettings {
    connector_name: 'plaid';

    settings?: ConnectorPlaidDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorPlaidDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken: string;

      institution?: unknown;

      item?: unknown;

      itemId?: string | null;

      status?: unknown;

      webhookItemError?: null;
    }
  }

  export interface ConnectorPostgresDiscriminatedConnectionSettings {
    connector_name: 'postgres';

    settings?: ConnectorPostgresDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorPostgresDiscriminatedConnectionSettings {
    export interface Settings {
      database_url?: string;
    }
  }

  export interface ConnectorSlackAgentDiscriminatedConnectionSettings {
    connector_name: 'slack-agent';

    settings?: ConnectorSlackAgentDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSlackAgentDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * Bot OAuth token - xoxb-...
       */
      access_token: string;
    }
  }

  export interface ConnectorSlackAgentBuilderDiscriminatedConnectionSettings {
    connector_name: 'slack-agent-builder';

    settings?: ConnectorSlackAgentBuilderDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSlackAgentBuilderDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * Same as oauth.credentials.access_token, but more convenient to access. Optional
       * for backward compatibility until we remove the oauth field
       */
      access_token?: string;

      agent_builder?: Settings.AgentBuilder;

      /**
       * URL for Slack event subscriptions
       */
      event_subscription_url?: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: { [key: string]: unknown } | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          raw?: { [key: string]: unknown };

          refresh_token?: string;

          scope?: string;

          token_type?: string;
        }
      }

      export interface AgentBuilder {
        oauth: AgentBuilder.OAuth;

        /**
         * Slack app configuration created by the agent builder
         */
        app?: AgentBuilder.App;
      }

      export namespace AgentBuilder {
        export interface OAuth {
          created_at?: string;

          /**
           * Output of the postConnect hook for oauth2 connectors
           */
          credentials?: OAuth.Credentials;

          last_fetched_at?: string;

          metadata?: { [key: string]: unknown } | null;

          updated_at?: string;
        }

        export namespace OAuth {
          /**
           * Output of the postConnect hook for oauth2 connectors
           */
          export interface Credentials {
            access_token: string;

            /**
             * Client ID used for the connection
             */
            client_id?: string;

            expires_at?: string;

            expires_in?: number;

            raw?: { [key: string]: unknown };

            refresh_token?: string;

            scope?: string;

            token_type?: string;
          }
        }

        /**
         * Slack app configuration created by the agent builder
         */
        export interface App {
          /**
           * The Slack app ID
           */
          app_id: string;

          /**
           * The client ID for the app
           */
          client_id: string;

          /**
           * The client secret for the app
           */
          client_secret: string;

          /**
           * The OAuth authorization URL for the app
           */
          oauth_url: string;

          /**
           * The signing secret for the app
           */
          signing_secret: string;

          /**
           * The verification token for the app
           */
          verification_token: string;
        }
      }
    }
  }

  export interface ConnectorStripeDiscriminatedConnectionSettings {
    connector_name: 'stripe';

    settings?: ConnectorStripeDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorStripeDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * MCP access token
       */
      mcp: string;

      /**
       * Stripe publishable key for production
       */
      publishable: string;

      /**
       * Stripe secret key for production
       */
      secret: string;
    }
  }

  export interface ConnectorStripeAgentSandboxDiscriminatedConnectionSettings {
    connector_name: 'stripe-agent-sandbox';

    settings?: ConnectorStripeAgentSandboxDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorStripeAgentSandboxDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * URL to claim/access the Stripe sandbox
       */
      claim_url: string;

      /**
       * MCP access token
       */
      mcp: string;

      /**
       * Stripe publishable key for the sandbox
       */
      publishable: string;

      /**
       * Stripe secret key for the sandbox
       */
      secret: string;
    }
  }

  export interface ConnectorTwilioDiscriminatedConnectionSettings {
    connector_name: 'twilio';

    settings?: ConnectorTwilioDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorTwilioDiscriminatedConnectionSettings {
    export interface Settings {
      account_sid: string;

      api_key: string;

      api_key_secret: string;
    }
  }

  export interface ConnectorWorkatoDiscriminatedConnectionSettings {
    connector_name: 'workato';

    settings?: ConnectorWorkatoDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorWorkatoDiscriminatedConnectionSettings {
    export interface Settings {
      workato_api_host: string;

      workato_api_token: string;

      workato_account_id?: string;
    }
  }
}

export interface CreateConnnectorConfigParams {
  connector_name: string;

  config?: { [key: string]: unknown } | null;

  disabled?: boolean | null;

  display_name?: string | null;

  metadata?: { [key: string]: unknown } | null;
}

export interface CreateTokenParams {
  connect_options?: CreateTokenParams.ConnectOptions;

  /**
   * How long the publishable token and magic link url will be valid for (in seconds)
   * before it expires. By default it will be valid for 30 days unless otherwise
   * specified.
   */
  validity_in_seconds?: number;
}

export namespace CreateTokenParams {
  export interface ConnectOptions {
    /**
     * Automatically trigger connection flow for the specified connector when the page
     * loads. Only works when view is "add" and the connector is available.
     */
    auto_connect?:
      | 'acme-apikey'
      | 'acme-oauth2'
      | 'apollo'
      | 'asana'
      | 'bigquery'
      | 'box'
      | 'calendly'
      | 'confluence'
      | 'databricks'
      | 'discord'
      | 'dropbox'
      | 'figma'
      | 'github'
      | 'google-calendar'
      | 'google-docs'
      | 'google-drive'
      | 'google-mail'
      | 'google-sheet'
      | 'hubspot'
      | 'instagram'
      | 'jira'
      | 'linear'
      | 'monday'
      | 'notion'
      | 'onedrive'
      | 'outlook'
      | 'plaid'
      | 'postgres'
      | 'resend'
      | 'salesforce'
      | 'sendgrid'
      | 'sharepoint'
      | 'slack'
      | 'slack-agent'
      | 'slack-agent-builder'
      | 'slack-deployed-agent'
      | 'snowflake'
      | 'spotify'
      | 'stripe'
      | 'stripe-agent-sandbox'
      | 'twilio'
      | 'workato'
      | 'youtube'
      | 'zendesk'
      | 'zoom';

    /**
     * The names of the connectors to show in the connect page. If not provided, all
     * connectors will be shown
     */
    connector_names?: Array<
      | 'acme-apikey'
      | 'acme-oauth2'
      | 'apollo'
      | 'asana'
      | 'bigquery'
      | 'box'
      | 'calendly'
      | 'confluence'
      | 'databricks'
      | 'discord'
      | 'dropbox'
      | 'figma'
      | 'github'
      | 'google-calendar'
      | 'google-docs'
      | 'google-drive'
      | 'google-mail'
      | 'google-sheet'
      | 'hubspot'
      | 'instagram'
      | 'jira'
      | 'linear'
      | 'monday'
      | 'notion'
      | 'onedrive'
      | 'outlook'
      | 'plaid'
      | 'postgres'
      | 'resend'
      | 'salesforce'
      | 'sendgrid'
      | 'sharepoint'
      | 'slack'
      | 'slack-agent'
      | 'slack-agent-builder'
      | 'slack-deployed-agent'
      | 'snowflake'
      | 'spotify'
      | 'stripe'
      | 'stripe-agent-sandbox'
      | 'twilio'
      | 'workato'
      | 'youtube'
      | 'zendesk'
      | 'zoom'
    >;

    /**
     * Whether to enable debug mode
     */
    debug?: boolean;

    /**
     * Whether to hide the navigation bar. This is useful for hardcoding to a
     * particular view.
     */
    hide_navigation?: boolean;

    /**
     * Whether to enable embedded mode. Embedded mode hides the side bar with extra
     * context for the end user (customer) on the organization
     */
    is_embedded?: boolean;

    /**
     * Optional URL to return customers after adding a connection or if they press the
     * Return To Organization button
     */
    return_url?: string;

    /**
     * The theme to use for the connect page. Defaults to light if not specified.
     */
    theme?: 'light' | 'dark';

    /**
     * The default view to show when the magic link is opened. If omitted, by default
     * it will smartly load the right view based on whether the user has connections or
     * not
     */
    view?: 'add' | 'manage';
  }
}

export interface DeleteAssignmentParams {
  /**
   * The id of the connection, starts with `conn_`
   */
  id: string;
}

export interface GetConectorConfigParams {
  expand?: Array<'connector' | 'connector.schemas' | 'connection_count'>;
}

export interface GetConnectionParams {
  expand?: Array<'connector'>;

  include_secrets?: boolean;

  /**
   * Controls credential refresh: none (never), force (always), or auto (when
   * expired, default)
   */
  refresh_policy?: 'none' | 'force' | 'auto';
}

export interface ListConnectionsParams extends OffsetPaginationParams {
  connection_ids?: Array<string>;

  /**
   * The id of the connector config, starts with `ccfg_`
   */
  connector_config_id?: string;

  connector_names?: Array<
    | 'acme-apikey'
    | 'acme-oauth2'
    | 'apollo'
    | 'asana'
    | 'bigquery'
    | 'box'
    | 'calendly'
    | 'confluence'
    | 'databricks'
    | 'discord'
    | 'dropbox'
    | 'figma'
    | 'github'
    | 'google-calendar'
    | 'google-docs'
    | 'google-drive'
    | 'google-mail'
    | 'google-sheet'
    | 'hubspot'
    | 'instagram'
    | 'jira'
    | 'linear'
    | 'monday'
    | 'notion'
    | 'onedrive'
    | 'outlook'
    | 'plaid'
    | 'postgres'
    | 'resend'
    | 'salesforce'
    | 'sendgrid'
    | 'sharepoint'
    | 'slack'
    | 'slack-agent'
    | 'slack-agent-builder'
    | 'slack-deployed-agent'
    | 'snowflake'
    | 'spotify'
    | 'stripe'
    | 'stripe-agent-sandbox'
    | 'twilio'
    | 'workato'
    | 'youtube'
    | 'zendesk'
    | 'zoom'
  >;

  /**
   * The id of the customer in your application. Ensure it is unique for that
   * customer.
   */
  customer_id?: string;

  /**
   * Expand the response with additional optionals
   */
  expand?: Array<'connector'>;

  include_secrets?: boolean;

  /**
   * Limit the number of items returned
   */
  limit?: number;

  /**
   * Controls credential refresh: none (never), force (always), or auto (when
   * expired, default)
   */
  refresh_policy?: 'none' | 'force' | 'auto';

  repl_id?: string;

  search_query?: string;
}

export interface ListConnectorConfigsParams extends OffsetPaginationParams {
  connector_names?: Array<
    | 'acme-apikey'
    | 'acme-oauth2'
    | 'apollo'
    | 'asana'
    | 'bigquery'
    | 'box'
    | 'calendly'
    | 'confluence'
    | 'databricks'
    | 'discord'
    | 'dropbox'
    | 'figma'
    | 'github'
    | 'google-calendar'
    | 'google-docs'
    | 'google-drive'
    | 'google-mail'
    | 'google-sheet'
    | 'hubspot'
    | 'instagram'
    | 'jira'
    | 'linear'
    | 'monday'
    | 'notion'
    | 'onedrive'
    | 'outlook'
    | 'plaid'
    | 'postgres'
    | 'resend'
    | 'salesforce'
    | 'sendgrid'
    | 'sharepoint'
    | 'slack'
    | 'slack-agent'
    | 'slack-agent-builder'
    | 'slack-deployed-agent'
    | 'snowflake'
    | 'spotify'
    | 'stripe'
    | 'stripe-agent-sandbox'
    | 'twilio'
    | 'workato'
    | 'youtube'
    | 'zendesk'
    | 'zoom'
  >;

  expand?: Array<'connector' | 'connector.schemas' | 'connection_count'>;

  /**
   * Include disabled connector configs in the response. By default, disabled configs
   * are filtered out.
   */
  include_disabled?: boolean;

  /**
   * Limit the number of items returned
   */
  limit?: number;

  search_query?: string | null;
}

export interface ListConnectorsParams extends OffsetPaginationParams {
  connector_name?: string;

  expand?: Array<'schemas'>;

  /**
   * Limit the number of items returned
   */
  limit?: number;
}

export interface ListConnnectorConfigsParams extends OffsetPaginationParams {
  connector_names?: Array<
    | 'acme-apikey'
    | 'acme-oauth2'
    | 'apollo'
    | 'asana'
    | 'bigquery'
    | 'box'
    | 'calendly'
    | 'confluence'
    | 'databricks'
    | 'discord'
    | 'dropbox'
    | 'figma'
    | 'github'
    | 'google-calendar'
    | 'google-docs'
    | 'google-drive'
    | 'google-mail'
    | 'google-sheet'
    | 'hubspot'
    | 'instagram'
    | 'jira'
    | 'linear'
    | 'monday'
    | 'notion'
    | 'onedrive'
    | 'outlook'
    | 'plaid'
    | 'postgres'
    | 'resend'
    | 'salesforce'
    | 'sendgrid'
    | 'sharepoint'
    | 'slack'
    | 'slack-agent'
    | 'slack-agent-builder'
    | 'slack-deployed-agent'
    | 'snowflake'
    | 'spotify'
    | 'stripe'
    | 'stripe-agent-sandbox'
    | 'twilio'
    | 'workato'
    | 'youtube'
    | 'zendesk'
    | 'zoom'
  >;

  expand?: Array<'connector' | 'connector.schemas' | 'connection_count'>;

  /**
   * Include disabled connector configs in the response. By default, disabled configs
   * are filtered out.
   */
  include_disabled?: boolean;

  /**
   * Limit the number of items returned
   */
  limit?: number;

  search_query?: string | null;
}

export interface ListCustomersParams extends OffsetPaginationParams {
  /**
   * Limit the number of items returned
   */
  limit?: number;

  search_query?: string | null;
}

export interface ListEventsParams extends OffsetPaginationParams {
  include_prompt?: boolean;

  /**
   * Limit the number of items returned
   */
  limit?: number;

  search_query?: string;

  since?: string;
}

export interface PostConnectParams {
  /**
   * Must correspond to data.connector_name. Technically id should imply
   * connector_name already but there is no way to specify a discriminated union with
   * id alone.
   */
  connector_config_id: string;

  discriminated_data:
    | PostConnectParams.ConnectorAcmeApikeyDiscriminatedConnectOutput
    | PostConnectParams.ConnectorAcmeOauth2DiscriminatedConnectOutput
    | PostConnectParams.ConnectorAsanaDiscriminatedConnectOutput
    | PostConnectParams.ConnectorBigqueryDiscriminatedConnectOutput
    | PostConnectParams.ConnectorBoxDiscriminatedConnectOutput
    | PostConnectParams.ConnectorCalendlyDiscriminatedConnectOutput
    | PostConnectParams.ConnectorConfluenceDiscriminatedConnectOutput
    | PostConnectParams.ConnectorDatabricksDiscriminatedConnectOutput
    | PostConnectParams.ConnectorDiscordDiscriminatedConnectOutput
    | PostConnectParams.ConnectorDropboxDiscriminatedConnectOutput
    | PostConnectParams.ConnectorFigmaDiscriminatedConnectOutput
    | PostConnectParams.ConnectorGitHubDiscriminatedConnectOutput
    | PostConnectParams.ConnectorGoogleCalendarDiscriminatedConnectOutput
    | PostConnectParams.ConnectorGoogleDocsDiscriminatedConnectOutput
    | PostConnectParams.ConnectorGoogleDriveDiscriminatedConnectOutput
    | PostConnectParams.ConnectorGoogleMailDiscriminatedConnectOutput
    | PostConnectParams.ConnectorGoogleSheetDiscriminatedConnectOutput
    | PostConnectParams.ConnectorHubspotDiscriminatedConnectOutput
    | PostConnectParams.ConnectorInstagramDiscriminatedConnectOutput
    | PostConnectParams.ConnectorJiraDiscriminatedConnectOutput
    | PostConnectParams.ConnectorLinearDiscriminatedConnectOutput
    | PostConnectParams.ConnectorMondayDiscriminatedConnectOutput
    | PostConnectParams.ConnectorNotionDiscriminatedConnectOutput
    | PostConnectParams.ConnectorOnedriveDiscriminatedConnectOutput
    | PostConnectParams.ConnectorOutlookDiscriminatedConnectOutput
    | PostConnectParams.ConnectorResendDiscriminatedConnectOutput
    | PostConnectParams.ConnectorSalesforceDiscriminatedConnectOutput
    | PostConnectParams.ConnectorSendgridDiscriminatedConnectOutput
    | PostConnectParams.ConnectorSharepointDiscriminatedConnectOutput
    | PostConnectParams.ConnectorSlackDeployedAgentDiscriminatedConnectOutput
    | PostConnectParams.ConnectorSlackDiscriminatedConnectOutput
    | PostConnectParams.ConnectorSnowflakeDiscriminatedConnectOutput
    | PostConnectParams.ConnectorSpotifyDiscriminatedConnectOutput
    | PostConnectParams.ConnectorYoutubeDiscriminatedConnectOutput
    | PostConnectParams.ConnectorZendeskDiscriminatedConnectOutput
    | PostConnectParams.ConnectorZoomDiscriminatedConnectOutput
    | PostConnectParams.ConnectorApolloDiscriminatedConnectOutput
    | PostConnectParams.ConnectorPlaidDiscriminatedConnectOutput
    | PostConnectParams.ConnectorPostgresDiscriminatedConnectOutput
    | PostConnectParams.ConnectorSlackAgentDiscriminatedConnectOutput
    | PostConnectParams.ConnectorSlackAgentBuilderDiscriminatedConnectOutput
    | PostConnectParams.ConnectorStripeDiscriminatedConnectOutput
    | PostConnectParams.ConnectorStripeAgentSandboxDiscriminatedConnectOutput
    | PostConnectParams.ConnectorTwilioDiscriminatedConnectOutput
    | PostConnectParams.ConnectorWorkatoDiscriminatedConnectOutput;

  options: PostConnectParams.Options;
}

export namespace PostConnectParams {
  export interface ConnectorAcmeApikeyDiscriminatedConnectOutput {
    connect_output: ConnectorAcmeApikeyDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'acme-apikey';
  }

  export namespace ConnectorAcmeApikeyDiscriminatedConnectOutput {
    export interface ConnectOutput {
      api_key: string;
    }
  }

  export interface ConnectorAcmeOauth2DiscriminatedConnectOutput {
    connect_output: ConnectorAcmeOauth2DiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'acme-oauth2';
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorAsanaDiscriminatedConnectOutput {
    connect_output: ConnectorAsanaDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'asana';
  }

  export namespace ConnectorAsanaDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorBigqueryDiscriminatedConnectOutput {
    connect_output: ConnectorBigqueryDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'bigquery';
  }

  export namespace ConnectorBigqueryDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorBoxDiscriminatedConnectOutput {
    connect_output: ConnectorBoxDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'box';
  }

  export namespace ConnectorBoxDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorCalendlyDiscriminatedConnectOutput {
    connect_output: ConnectorCalendlyDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'calendly';
  }

  export namespace ConnectorCalendlyDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectOutput {
    connect_output: ConnectorConfluenceDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'confluence';
  }

  export namespace ConnectorConfluenceDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorDatabricksDiscriminatedConnectOutput {
    connect_output: ConnectorDatabricksDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'databricks';
  }

  export namespace ConnectorDatabricksDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectOutput {
    connect_output: ConnectorDiscordDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'discord';
  }

  export namespace ConnectorDiscordDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorDropboxDiscriminatedConnectOutput {
    connect_output: ConnectorDropboxDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'dropbox';
  }

  export namespace ConnectorDropboxDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorFigmaDiscriminatedConnectOutput {
    connect_output: ConnectorFigmaDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'figma';
  }

  export namespace ConnectorFigmaDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectOutput {
    connect_output: ConnectorGitHubDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'github';
  }

  export namespace ConnectorGitHubDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectOutput {
    connect_output: ConnectorGoogleCalendarDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'google-calendar';
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectOutput {
    connect_output: ConnectorGoogleDocsDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'google-docs';
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectOutput {
    connect_output: ConnectorGoogleDriveDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'google-drive';
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectOutput {
    connect_output: ConnectorGoogleMailDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'google-mail';
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectOutput {
    connect_output: ConnectorGoogleSheetDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'google-sheet';
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectOutput {
    connect_output: ConnectorHubspotDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'hubspot';
  }

  export namespace ConnectorHubspotDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectOutput {
    connect_output: ConnectorInstagramDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'instagram';
  }

  export namespace ConnectorInstagramDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorJiraDiscriminatedConnectOutput {
    connect_output: ConnectorJiraDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'jira';
  }

  export namespace ConnectorJiraDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorLinearDiscriminatedConnectOutput {
    connect_output: ConnectorLinearDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'linear';
  }

  export namespace ConnectorLinearDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorMondayDiscriminatedConnectOutput {
    connect_output: ConnectorMondayDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'monday';
  }

  export namespace ConnectorMondayDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorNotionDiscriminatedConnectOutput {
    connect_output: ConnectorNotionDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'notion';
  }

  export namespace ConnectorNotionDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorOnedriveDiscriminatedConnectOutput {
    connect_output: ConnectorOnedriveDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'onedrive';
  }

  export namespace ConnectorOnedriveDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorOutlookDiscriminatedConnectOutput {
    connect_output: ConnectorOutlookDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'outlook';
  }

  export namespace ConnectorOutlookDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorResendDiscriminatedConnectOutput {
    connect_output: ConnectorResendDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'resend';
  }

  export namespace ConnectorResendDiscriminatedConnectOutput {
    export interface ConnectOutput {
      api_key: string;
    }
  }

  export interface ConnectorSalesforceDiscriminatedConnectOutput {
    connect_output: ConnectorSalesforceDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'salesforce';
  }

  export namespace ConnectorSalesforceDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorSendgridDiscriminatedConnectOutput {
    connect_output: ConnectorSendgridDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'sendgrid';
  }

  export namespace ConnectorSendgridDiscriminatedConnectOutput {
    export interface ConnectOutput {
      api_key: string;
    }
  }

  export interface ConnectorSharepointDiscriminatedConnectOutput {
    connect_output: ConnectorSharepointDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'sharepoint';
  }

  export namespace ConnectorSharepointDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorSlackDeployedAgentDiscriminatedConnectOutput {
    connect_output: ConnectorSlackDeployedAgentDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'slack-deployed-agent';
  }

  export namespace ConnectorSlackDeployedAgentDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorSlackDiscriminatedConnectOutput {
    connect_output: ConnectorSlackDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'slack';
  }

  export namespace ConnectorSlackDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorSnowflakeDiscriminatedConnectOutput {
    connect_output: ConnectorSnowflakeDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'snowflake';
  }

  export namespace ConnectorSnowflakeDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorSpotifyDiscriminatedConnectOutput {
    connect_output: ConnectorSpotifyDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'spotify';
  }

  export namespace ConnectorSpotifyDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorYoutubeDiscriminatedConnectOutput {
    connect_output: ConnectorYoutubeDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'youtube';
  }

  export namespace ConnectorYoutubeDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorZendeskDiscriminatedConnectOutput {
    connect_output: ConnectorZendeskDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'zendesk';
  }

  export namespace ConnectorZendeskDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorZoomDiscriminatedConnectOutput {
    connect_output: ConnectorZoomDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'zoom';
  }

  export namespace ConnectorZoomDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorApolloDiscriminatedConnectOutput {
    connect_output: ConnectorApolloDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'apollo';
  }

  export namespace ConnectorApolloDiscriminatedConnectOutput {
    export interface ConnectOutput {
      api_key: string;
    }
  }

  export interface ConnectorPlaidDiscriminatedConnectOutput {
    connect_output: ConnectorPlaidDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'plaid';
  }

  export namespace ConnectorPlaidDiscriminatedConnectOutput {
    export interface ConnectOutput {
      public_token: string;

      meta?: unknown;
    }
  }

  export interface ConnectorPostgresDiscriminatedConnectOutput {
    connect_output: ConnectorPostgresDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'postgres';
  }

  export namespace ConnectorPostgresDiscriminatedConnectOutput {
    export interface ConnectOutput {
      database_url?: string;
    }
  }

  export interface ConnectorSlackAgentDiscriminatedConnectOutput {
    connect_output: ConnectorSlackAgentDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'slack-agent';
  }

  export namespace ConnectorSlackAgentDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * Bot OAuth token - xoxb-...
       */
      access_token: string;
    }
  }

  export interface ConnectorSlackAgentBuilderDiscriminatedConnectOutput {
    connect_output: ConnectorSlackAgentBuilderDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'slack-agent-builder';
  }

  export namespace ConnectorSlackAgentBuilderDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * OAuth2 authorization code used for token exchange
       */
      code: string;

      /**
       * OAuth2 state
       */
      state: string;

      /**
       * Custom client ID to use for token exchange
       */
      client_id?: string;

      /**
       * Custom client secret to use for token exchange
       */
      client_secret?: string;

      /**
       * Code verifier for PKCE from the connect input
       */
      code_verifier?: string;
    }
  }

  export interface ConnectorStripeDiscriminatedConnectOutput {
    connect_output: ConnectorStripeDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'stripe';
  }

  export namespace ConnectorStripeDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * MCP access token
       */
      mcp: string;

      /**
       * Stripe publishable key for production
       */
      publishable: string;

      /**
       * Stripe secret key for production
       */
      secret: string;
    }
  }

  export interface ConnectorStripeAgentSandboxDiscriminatedConnectOutput {
    connect_output: ConnectorStripeAgentSandboxDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'stripe-agent-sandbox';
  }

  export namespace ConnectorStripeAgentSandboxDiscriminatedConnectOutput {
    export interface ConnectOutput {
      /**
       * URL to claim/access the Stripe sandbox
       */
      claim_url: string;

      /**
       * MCP access token
       */
      mcp: string;

      /**
       * Stripe publishable key for the sandbox
       */
      publishable: string;

      /**
       * Stripe secret key for the sandbox
       */
      secret: string;
    }
  }

  export interface ConnectorTwilioDiscriminatedConnectOutput {
    connect_output: ConnectorTwilioDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'twilio';
  }

  export namespace ConnectorTwilioDiscriminatedConnectOutput {
    export interface ConnectOutput {
      account_sid: string;

      api_key: string;

      api_key_secret: string;
    }
  }

  export interface ConnectorWorkatoDiscriminatedConnectOutput {
    connect_output: ConnectorWorkatoDiscriminatedConnectOutput.ConnectOutput;

    connector_name: 'workato';
  }

  export namespace ConnectorWorkatoDiscriminatedConnectOutput {
    export interface ConnectOutput {
      workato_api_host: string;

      workato_api_token: string;

      workato_account_id?: string;
    }
  }

  export interface Options {
    connectionExternalId?: string | number | null;

    integrationExternalId?: string | number | null;

    /**
     * Must start with 'int\_'
     */
    integrationId?: string | null;

    syncInBand?: boolean | null;
  }
}

export interface PreConfigureConnectorParams {
  connector_name:
    | 'acme-apikey'
    | 'acme-oauth2'
    | 'apollo'
    | 'asana'
    | 'bigquery'
    | 'box'
    | 'calendly'
    | 'confluence'
    | 'databricks'
    | 'discord'
    | 'dropbox'
    | 'figma'
    | 'github'
    | 'google-calendar'
    | 'google-docs'
    | 'google-drive'
    | 'google-mail'
    | 'google-sheet'
    | 'hubspot'
    | 'instagram'
    | 'jira'
    | 'linear'
    | 'monday'
    | 'notion'
    | 'onedrive'
    | 'outlook'
    | 'plaid'
    | 'postgres'
    | 'resend'
    | 'salesforce'
    | 'sendgrid'
    | 'sharepoint'
    | 'slack'
    | 'slack-agent'
    | 'slack-agent-builder'
    | 'slack-deployed-agent'
    | 'snowflake'
    | 'spotify'
    | 'stripe'
    | 'stripe-agent-sandbox'
    | 'twilio'
    | 'workato'
    | 'youtube'
    | 'zendesk'
    | 'zoom';
}

export interface PreConnectParams {
  /**
   * Must correspond to data.connector_name. Technically id should imply
   * connector_name already but there is no way to specify a discriminated union with
   * id alone.
   */
  connector_config_id: string;

  discriminated_data?:
    | PreConnectParams.ConnectorAcmeApikeyDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorAcmeOauth2DiscriminatedPreConnectInput
    | PreConnectParams.ConnectorAsanaDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorBigqueryDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorBoxDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorCalendlyDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorConfluenceDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorDatabricksDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorDiscordDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorDropboxDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorFigmaDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorGitHubDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorGoogleCalendarDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorGoogleDocsDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorGoogleDriveDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorGoogleMailDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorGoogleSheetDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorHubspotDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorInstagramDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorJiraDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorLinearDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorMondayDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorNotionDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorOnedriveDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorOutlookDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorResendDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorSalesforceDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorSendgridDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorSharepointDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorSlackDeployedAgentDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorSlackDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorSnowflakeDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorSpotifyDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorYoutubeDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorZendeskDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorZoomDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorApolloDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorPlaidDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorPostgresDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorSlackAgentDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorSlackAgentBuilderDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorStripeDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorStripeAgentSandboxDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorTwilioDiscriminatedPreConnectInput
    | PreConnectParams.ConnectorWorkatoDiscriminatedPreConnectInput;

  options?: PreConnectParams.Options;
}

export namespace PreConnectParams {
  export interface ConnectorAcmeApikeyDiscriminatedPreConnectInput {
    connector_name: 'acme-apikey';

    pre_connect_input: unknown;
  }

  export interface ConnectorAcmeOauth2DiscriminatedPreConnectInput {
    connector_name: 'acme-oauth2';

    pre_connect_input: unknown;
  }

  export interface ConnectorAsanaDiscriminatedPreConnectInput {
    connector_name: 'asana';

    pre_connect_input: unknown;
  }

  export interface ConnectorBigqueryDiscriminatedPreConnectInput {
    connector_name: 'bigquery';

    pre_connect_input: unknown;
  }

  export interface ConnectorBoxDiscriminatedPreConnectInput {
    connector_name: 'box';

    pre_connect_input: unknown;
  }

  export interface ConnectorCalendlyDiscriminatedPreConnectInput {
    connector_name: 'calendly';

    pre_connect_input: unknown;
  }

  export interface ConnectorConfluenceDiscriminatedPreConnectInput {
    connector_name: 'confluence';

    pre_connect_input: ConnectorConfluenceDiscriminatedPreConnectInput.PreConnectInput;
  }

  export namespace ConnectorConfluenceDiscriminatedPreConnectInput {
    export interface PreConnectInput {
      /**
       * Your Atlassian site URL (e.g., https://your-domain.atlassian.net). You can find
       * this in your browser when logged into Confluence.
       */
      site_url: string;
    }
  }

  export interface ConnectorDatabricksDiscriminatedPreConnectInput {
    connector_name: 'databricks';

    pre_connect_input: unknown;
  }

  export interface ConnectorDiscordDiscriminatedPreConnectInput {
    connector_name: 'discord';

    pre_connect_input: unknown;
  }

  export interface ConnectorDropboxDiscriminatedPreConnectInput {
    connector_name: 'dropbox';

    pre_connect_input: unknown;
  }

  export interface ConnectorFigmaDiscriminatedPreConnectInput {
    connector_name: 'figma';

    pre_connect_input: unknown;
  }

  export interface ConnectorGitHubDiscriminatedPreConnectInput {
    connector_name: 'github';

    pre_connect_input: unknown;
  }

  export interface ConnectorGoogleCalendarDiscriminatedPreConnectInput {
    connector_name: 'google-calendar';

    pre_connect_input: unknown;
  }

  export interface ConnectorGoogleDocsDiscriminatedPreConnectInput {
    connector_name: 'google-docs';

    pre_connect_input: unknown;
  }

  export interface ConnectorGoogleDriveDiscriminatedPreConnectInput {
    connector_name: 'google-drive';

    pre_connect_input: unknown;
  }

  export interface ConnectorGoogleMailDiscriminatedPreConnectInput {
    connector_name: 'google-mail';

    pre_connect_input: unknown;
  }

  export interface ConnectorGoogleSheetDiscriminatedPreConnectInput {
    connector_name: 'google-sheet';

    pre_connect_input: unknown;
  }

  export interface ConnectorHubspotDiscriminatedPreConnectInput {
    connector_name: 'hubspot';

    pre_connect_input: unknown;
  }

  export interface ConnectorInstagramDiscriminatedPreConnectInput {
    connector_name: 'instagram';

    pre_connect_input: unknown;
  }

  export interface ConnectorJiraDiscriminatedPreConnectInput {
    connector_name: 'jira';

    pre_connect_input: ConnectorJiraDiscriminatedPreConnectInput.PreConnectInput;
  }

  export namespace ConnectorJiraDiscriminatedPreConnectInput {
    export interface PreConnectInput {
      /**
       * Your Atlassian site URL (e.g., https://your-domain.atlassian.net). You can find
       * this in your browser when logged into Jira.
       */
      site_url: string;
    }
  }

  export interface ConnectorLinearDiscriminatedPreConnectInput {
    connector_name: 'linear';

    pre_connect_input: unknown;
  }

  export interface ConnectorMondayDiscriminatedPreConnectInput {
    connector_name: 'monday';

    pre_connect_input: unknown;
  }

  export interface ConnectorNotionDiscriminatedPreConnectInput {
    connector_name: 'notion';

    pre_connect_input: unknown;
  }

  export interface ConnectorOnedriveDiscriminatedPreConnectInput {
    connector_name: 'onedrive';

    pre_connect_input: unknown;
  }

  export interface ConnectorOutlookDiscriminatedPreConnectInput {
    connector_name: 'outlook';

    pre_connect_input: unknown;
  }

  export interface ConnectorResendDiscriminatedPreConnectInput {
    connector_name: 'resend';

    pre_connect_input: unknown;
  }

  export interface ConnectorSalesforceDiscriminatedPreConnectInput {
    connector_name: 'salesforce';

    pre_connect_input: unknown;
  }

  export interface ConnectorSendgridDiscriminatedPreConnectInput {
    connector_name: 'sendgrid';

    pre_connect_input: unknown;
  }

  export interface ConnectorSharepointDiscriminatedPreConnectInput {
    connector_name: 'sharepoint';

    pre_connect_input: unknown;
  }

  export interface ConnectorSlackDeployedAgentDiscriminatedPreConnectInput {
    connector_name: 'slack-deployed-agent';

    pre_connect_input: unknown;
  }

  export interface ConnectorSlackDiscriminatedPreConnectInput {
    connector_name: 'slack';

    pre_connect_input: unknown;
  }

  export interface ConnectorSnowflakeDiscriminatedPreConnectInput {
    connector_name: 'snowflake';

    pre_connect_input: unknown;
  }

  export interface ConnectorSpotifyDiscriminatedPreConnectInput {
    connector_name: 'spotify';

    pre_connect_input: unknown;
  }

  export interface ConnectorYoutubeDiscriminatedPreConnectInput {
    connector_name: 'youtube';

    pre_connect_input: unknown;
  }

  export interface ConnectorZendeskDiscriminatedPreConnectInput {
    connector_name: 'zendesk';

    pre_connect_input: ConnectorZendeskDiscriminatedPreConnectInput.PreConnectInput;
  }

  export namespace ConnectorZendeskDiscriminatedPreConnectInput {
    export interface PreConnectInput {
      /**
       * Your Zendesk subdomain. This is the first part of your Zendesk URL. For example,
       * if your Zendesk URL is https://acme.zendesk.com, then your subdomain is "acme".
       */
      subdomain: string;
    }
  }

  export interface ConnectorZoomDiscriminatedPreConnectInput {
    connector_name: 'zoom';

    pre_connect_input: unknown;
  }

  export interface ConnectorApolloDiscriminatedPreConnectInput {
    connector_name: 'apollo';

    pre_connect_input: unknown;
  }

  export interface ConnectorPlaidDiscriminatedPreConnectInput {
    connector_name: 'plaid';

    pre_connect_input: ConnectorPlaidDiscriminatedPreConnectInput.PreConnectInput;
  }

  export namespace ConnectorPlaidDiscriminatedPreConnectInput {
    export interface PreConnectInput {
      language?: 'en' | 'fr' | 'es' | 'nl' | 'de';

      sandboxPublicTokenCreate?: boolean;
    }
  }

  export interface ConnectorPostgresDiscriminatedPreConnectInput {
    connector_name: 'postgres';

    pre_connect_input: unknown;
  }

  export interface ConnectorSlackAgentDiscriminatedPreConnectInput {
    connector_name: 'slack-agent';

    pre_connect_input: unknown;
  }

  export interface ConnectorSlackAgentBuilderDiscriminatedPreConnectInput {
    connector_name: 'slack-agent-builder';

    pre_connect_input: unknown;
  }

  export interface ConnectorStripeDiscriminatedPreConnectInput {
    connector_name: 'stripe';

    pre_connect_input: unknown;
  }

  export interface ConnectorStripeAgentSandboxDiscriminatedPreConnectInput {
    connector_name: 'stripe-agent-sandbox';

    pre_connect_input: ConnectorStripeAgentSandboxDiscriminatedPreConnectInput.PreConnectInput;
  }

  export namespace ConnectorStripeAgentSandboxDiscriminatedPreConnectInput {
    export interface PreConnectInput {
      /**
       * Email address of the user for sandbox prefill
       */
      email: string;

      /**
       * Country code for sandbox prefill
       */
      country?: string;
    }
  }

  export interface ConnectorTwilioDiscriminatedPreConnectInput {
    connector_name: 'twilio';

    pre_connect_input: unknown;
  }

  export interface ConnectorWorkatoDiscriminatedPreConnectInput {
    connector_name: 'workato';

    pre_connect_input: unknown;
  }

  export interface Options {
    connectionExternalId?: string | number | null;

    integrationExternalId?: string | number | null;
  }
}

export interface UpsertConnnectorConfigParams {
  config?: { [key: string]: unknown } | null;

  disabled?: boolean;

  display_name?: string;
}

export interface UpsertCustomerParams {
  id?: string;

  metadata?: { [key: string]: unknown };
}

export interface UpsertOrganizationParams {
  name?: string;

  slug?: string;
}

export declare namespace TopLevel {
  export {
    type Connector as Connector,
    type Integration as Integration,
    type AssignConnectionResponse as AssignConnectionResponse,
    type CheckConnectionResponse as CheckConnectionResponse,
    type ConnectorRpcResponse as ConnectorRpcResponse,
    type CreateConnectionResponse as CreateConnectionResponse,
    type CreateConnnectorConfigResponse as CreateConnnectorConfigResponse,
    type CreateTokenResponse as CreateTokenResponse,
    type DeleteAssignmentResponse as DeleteAssignmentResponse,
    type DeleteConnectionResponse as DeleteConnectionResponse,
    type DeleteConnectorConfigResponse as DeleteConnectorConfigResponse,
    type GetConectorConfigResponse as GetConectorConfigResponse,
    type GetConnectionResponse as GetConnectionResponse,
    type GetCurrentUserResponse as GetCurrentUserResponse,
    type ListAssignmentsResponse as ListAssignmentsResponse,
    type ListConnectionsResponse as ListConnectionsResponse,
    type ListConnectorConfigsResponse as ListConnectorConfigsResponse,
    type ListConnectorsResponse as ListConnectorsResponse,
    type ListConnnectorConfigsResponse as ListConnnectorConfigsResponse,
    type ListCustomersResponse as ListCustomersResponse,
    type ListEventsResponse as ListEventsResponse,
    type PostConnectResponse as PostConnectResponse,
    type PreConfigureConnectorResponse as PreConfigureConnectorResponse,
    type PreConnectResponse as PreConnectResponse,
    type UpsertConnnectorConfigResponse as UpsertConnnectorConfigResponse,
    type UpsertCustomerResponse as UpsertCustomerResponse,
    type UpsertOrganizationResponse as UpsertOrganizationResponse,
    type ListConnectionsResponsesOffsetPagination as ListConnectionsResponsesOffsetPagination,
    type ListConnectorConfigsResponsesOffsetPagination as ListConnectorConfigsResponsesOffsetPagination,
    type ListConnectorsResponsesOffsetPagination as ListConnectorsResponsesOffsetPagination,
    type ListConnnectorConfigsResponsesOffsetPagination as ListConnnectorConfigsResponsesOffsetPagination,
    type ListCustomersResponsesOffsetPagination as ListCustomersResponsesOffsetPagination,
    type ListEventsResponsesOffsetPagination as ListEventsResponsesOffsetPagination,
    type AssignConnectionParams as AssignConnectionParams,
    type ConnectorRpcParams as ConnectorRpcParams,
    type CreateConnectionParams as CreateConnectionParams,
    type CreateConnnectorConfigParams as CreateConnnectorConfigParams,
    type CreateTokenParams as CreateTokenParams,
    type DeleteAssignmentParams as DeleteAssignmentParams,
    type GetConectorConfigParams as GetConectorConfigParams,
    type GetConnectionParams as GetConnectionParams,
    type ListConnectionsParams as ListConnectionsParams,
    type ListConnectorConfigsParams as ListConnectorConfigsParams,
    type ListConnectorsParams as ListConnectorsParams,
    type ListConnnectorConfigsParams as ListConnnectorConfigsParams,
    type ListCustomersParams as ListCustomersParams,
    type ListEventsParams as ListEventsParams,
    type PostConnectParams as PostConnectParams,
    type PreConfigureConnectorParams as PreConfigureConnectorParams,
    type PreConnectParams as PreConnectParams,
    type UpsertConnnectorConfigParams as UpsertConnnectorConfigParams,
    type UpsertCustomerParams as UpsertCustomerParams,
    type UpsertOrganizationParams as UpsertOrganizationParams,
  };
}
