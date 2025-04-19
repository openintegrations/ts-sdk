// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { OffsetPagination, type OffsetPaginationParams } from '../core/pagination';

export type ListConnectionConfigsResponsesOffsetPagination = OffsetPagination<ListConnectionConfigsResponse>;

export type ListConnectionsResponsesOffsetPagination = OffsetPagination<ListConnectionsResponse>;

export interface CheckConnectionResponse {
  id: string;

  status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

  status_message?: string | null;
}

export type CreateConnectionResponse =
  | CreateConnectionResponse.ConnectorAcmeOauth2DiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorAircallDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorConfluenceDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorDiscordDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorFacebookDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGitHubDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGongDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGoogleCalendarDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGoogleDocsDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGoogleDriveDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGoogleMailDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGoogleSheetDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorHubspotDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorInstagramDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorIntercomDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorJiraDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorLeverDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorLinearDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorLinkedinDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorNotionDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorOutreachDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorPipedriveDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorQuickbooksDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorRedditDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorSalesloftDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorSharepointDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorSlackDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorTwitterDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorXeroDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorZohoDeskDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorAirtableDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorApolloDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorBrexDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorCodaDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorFinchDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorFirebaseDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorForeceiptDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGreenhouseDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorHeronDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorLunchmoneyDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorMercuryDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorMergeDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorMootaDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorOnebrickDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorPlaidDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorPostgresDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorRampDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorSaltedgeDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorSplitwiseDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorStripeDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorTellerDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorTogglDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorTwentyDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorVenmoDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorWiseDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorYodleeDiscriminatedConnectionSettings;

export namespace CreateConnectionResponse {
  export interface ConnectorAcmeOauth2DiscriminatedConnectionSettings {
    connector_name: 'acme-oauth2';

    settings: ConnectorAcmeOauth2DiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorAircallDiscriminatedConnectionSettings {
    connector_name: 'aircall';

    settings: ConnectorAircallDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorAircallDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectionSettings {
    connector_name: 'confluence';

    settings: ConnectorConfluenceDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorConfluenceDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectionSettings {
    connector_name: 'discord';

    settings: ConnectorDiscordDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorDiscordDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorFacebookDiscriminatedConnectionSettings {
    connector_name: 'facebook';

    settings: ConnectorFacebookDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorFacebookDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectionSettings {
    connector_name: 'github';

    settings: ConnectorGitHubDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGitHubDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGongDiscriminatedConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorGongDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGongDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The base URL of your Gong account (e.g., example)
       */
      api_base_url_for_customer: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectionSettings {
    connector_name: 'google-calendar';

    settings: ConnectorGoogleCalendarDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectionSettings {
    connector_name: 'google-docs';

    settings: ConnectorGoogleDocsDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectionSettings {
    connector_name: 'google-drive';

    settings: ConnectorGoogleDriveDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectionSettings {
    connector_name: 'google-mail';

    settings: ConnectorGoogleMailDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectionSettings {
    connector_name: 'google-sheet';

    settings: ConnectorGoogleSheetDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectionSettings {
    connector_name: 'hubspot';

    settings: ConnectorHubspotDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorHubspotDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectionSettings {
    connector_name: 'instagram';

    settings: ConnectorInstagramDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorInstagramDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorIntercomDiscriminatedConnectionSettings {
    connector_name: 'intercom';

    settings: ConnectorIntercomDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorIntercomDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorJiraDiscriminatedConnectionSettings {
    connector_name: 'jira';

    settings: ConnectorJiraDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorJiraDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorLeverDiscriminatedConnectionSettings {
    connector_name: 'lever';

    settings: ConnectorLeverDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorLeverDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorLinearDiscriminatedConnectionSettings {
    connector_name: 'linear';

    settings: ConnectorLinearDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorLinearDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorLinkedinDiscriminatedConnectionSettings {
    connector_name: 'linkedin';

    settings: ConnectorLinkedinDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorLinkedinDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorNotionDiscriminatedConnectionSettings {
    connector_name: 'notion';

    settings: ConnectorNotionDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorNotionDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorOutreachDiscriminatedConnectionSettings {
    connector_name: 'outreach';

    settings: ConnectorOutreachDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorOutreachDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorPipedriveDiscriminatedConnectionSettings {
    connector_name: 'pipedrive';

    settings: ConnectorPipedriveDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorPipedriveDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The API URL of your Pipedrive account (e.g., example)
       */
      api_domain: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorQuickbooksDiscriminatedConnectionSettings {
    connector_name: 'quickbooks';

    settings: ConnectorQuickbooksDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorQuickbooksDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * The realmId of your quickbooks company (e.g., 9341453474484455)
       */
      realmId: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorRedditDiscriminatedConnectionSettings {
    connector_name: 'reddit';

    settings: ConnectorRedditDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorRedditDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSalesloftDiscriminatedConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorSalesloftDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSalesloftDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSharepointDiscriminatedConnectionSettings {
    connector_name: 'sharepoint';

    settings: ConnectorSharepointDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSharepointDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSlackDiscriminatedConnectionSettings {
    connector_name: 'slack';

    settings: ConnectorSlackDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSlackDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorTwitterDiscriminatedConnectionSettings {
    connector_name: 'twitter';

    settings: ConnectorTwitterDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorTwitterDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorXeroDiscriminatedConnectionSettings {
    connector_name: 'xero';

    settings: ConnectorXeroDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorXeroDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorZohoDeskDiscriminatedConnectionSettings {
    connector_name: 'zoho-desk';

    settings: ConnectorZohoDeskDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorZohoDeskDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The domain extension of your Zoho account (e.g., https://accounts.zoho.com/)
       */
      extension: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorAirtableDiscriminatedConnectionSettings {
    connector_name: 'airtable';

    settings: ConnectorAirtableDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorAirtableDiscriminatedConnectionSettings {
    export interface Settings {
      airtableBase: string;

      apiKey: string;
    }
  }

  export interface ConnectorApolloDiscriminatedConnectionSettings {
    connector_name: 'apollo';

    settings: ConnectorApolloDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorApolloDiscriminatedConnectionSettings {
    export interface Settings {
      api_key: string;
    }
  }

  export interface ConnectorBrexDiscriminatedConnectionSettings {
    connector_name: 'brex';

    settings: ConnectorBrexDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorBrexDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken: string;
    }
  }

  export interface ConnectorCodaDiscriminatedConnectionSettings {
    connector_name: 'coda';

    settings: ConnectorCodaDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorCodaDiscriminatedConnectionSettings {
    export interface Settings {
      apiKey: string;
    }
  }

  export interface ConnectorFinchDiscriminatedConnectionSettings {
    connector_name: 'finch';

    settings: ConnectorFinchDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorFinchDiscriminatedConnectionSettings {
    export interface Settings {
      access_token: string;
    }
  }

  export interface ConnectorFirebaseDiscriminatedConnectionSettings {
    connector_name: 'firebase';

    settings:
      | ConnectorFirebaseDiscriminatedConnectionSettings.UnionMember0
      | ConnectorFirebaseDiscriminatedConnectionSettings.UnionMember1;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorFirebaseDiscriminatedConnectionSettings {
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

  export interface ConnectorForeceiptDiscriminatedConnectionSettings {
    connector_name: 'foreceipt';

    settings: ConnectorForeceiptDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorForeceiptDiscriminatedConnectionSettings {
    export interface Settings {
      envName: 'staging' | 'production';

      _id?: unknown;

      credentials?: unknown;
    }
  }

  export interface ConnectorGreenhouseDiscriminatedConnectionSettings {
    connector_name: 'greenhouse';

    settings: ConnectorGreenhouseDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGreenhouseDiscriminatedConnectionSettings {
    export interface Settings {
      apiKey: string;
    }
  }

  export interface ConnectorHeronDiscriminatedConnectionSettings {
    connector_name: 'heron';

    settings: unknown;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export interface ConnectorLunchmoneyDiscriminatedConnectionSettings {
    connector_name: 'lunchmoney';

    settings: unknown;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export interface ConnectorMercuryDiscriminatedConnectionSettings {
    connector_name: 'mercury';

    settings: unknown;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export interface ConnectorMergeDiscriminatedConnectionSettings {
    connector_name: 'merge';

    settings: ConnectorMergeDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorMergeDiscriminatedConnectionSettings {
    export interface Settings {
      accountToken: string;

      accountDetails?: unknown;
    }
  }

  export interface ConnectorMootaDiscriminatedConnectionSettings {
    connector_name: 'moota';

    settings: unknown;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export interface ConnectorOnebrickDiscriminatedConnectionSettings {
    connector_name: 'onebrick';

    settings: ConnectorOnebrickDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorOnebrickDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken: string;
    }
  }

  export interface ConnectorPlaidDiscriminatedConnectionSettings {
    connector_name: 'plaid';

    settings: ConnectorPlaidDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

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

    settings: ConnectorPostgresDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorPostgresDiscriminatedConnectionSettings {
    export interface Settings {
      databaseURL: string;

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

  export interface ConnectorRampDiscriminatedConnectionSettings {
    connector_name: 'ramp';

    settings: ConnectorRampDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorRampDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken?: string | null;

      startAfterTransactionId?: string | null;
    }
  }

  export interface ConnectorSaltedgeDiscriminatedConnectionSettings {
    connector_name: 'saltedge';

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
    metadata?: Record<string, unknown> | null;

    settings?: unknown;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export interface ConnectorSplitwiseDiscriminatedConnectionSettings {
    connector_name: 'splitwise';

    settings: ConnectorSplitwiseDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSplitwiseDiscriminatedConnectionSettings {
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

  export interface ConnectorStripeDiscriminatedConnectionSettings {
    connector_name: 'stripe';

    settings: ConnectorStripeDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorStripeDiscriminatedConnectionSettings {
    export interface Settings {
      secretKey: string;
    }
  }

  export interface ConnectorTellerDiscriminatedConnectionSettings {
    connector_name: 'teller';

    settings: ConnectorTellerDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorTellerDiscriminatedConnectionSettings {
    export interface Settings {
      token: string;
    }
  }

  export interface ConnectorTogglDiscriminatedConnectionSettings {
    connector_name: 'toggl';

    settings: ConnectorTogglDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorTogglDiscriminatedConnectionSettings {
    export interface Settings {
      apiToken: string;

      email?: string | null;

      password?: string | null;
    }
  }

  export interface ConnectorTwentyDiscriminatedConnectionSettings {
    connector_name: 'twenty';

    settings: ConnectorTwentyDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorTwentyDiscriminatedConnectionSettings {
    export interface Settings {
      access_token: string;
    }
  }

  export interface ConnectorVenmoDiscriminatedConnectionSettings {
    connector_name: 'venmo';

    settings: ConnectorVenmoDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorVenmoDiscriminatedConnectionSettings {
    export interface Settings {
      credentials?: unknown;

      me?: unknown;
    }
  }

  export interface ConnectorWiseDiscriminatedConnectionSettings {
    connector_name: 'wise';

    settings: ConnectorWiseDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorWiseDiscriminatedConnectionSettings {
    export interface Settings {
      envName: 'sandbox' | 'live';

      apiToken?: string | null;
    }
  }

  export interface ConnectorYodleeDiscriminatedConnectionSettings {
    connector_name: 'yodlee';

    settings: ConnectorYodleeDiscriminatedConnectionSettings.Settings;

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
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorYodleeDiscriminatedConnectionSettings {
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
  | GetConnectionResponse.ConnectorAcmeOauth2DiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorAircallDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorConfluenceDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorDiscordDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorFacebookDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGitHubDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGongDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGoogleCalendarDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGoogleDocsDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGoogleDriveDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGoogleMailDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGoogleSheetDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorHubspotDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorInstagramDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorIntercomDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorJiraDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorLeverDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorLinearDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorLinkedinDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorNotionDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorOutreachDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorPipedriveDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorQuickbooksDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorRedditDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorSalesloftDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorSharepointDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorSlackDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorTwitterDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorXeroDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorZohoDeskDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorAirtableDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorApolloDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorBrexDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorCodaDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorFinchDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorFirebaseDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorForeceiptDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGreenhouseDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorHeronDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorLunchmoneyDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorMercuryDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorMergeDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorMootaDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorOnebrickDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorPlaidDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorPostgresDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorRampDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorSaltedgeDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorSplitwiseDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorStripeDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorTellerDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorTogglDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorTwentyDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorVenmoDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorWiseDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorYodleeDiscriminatedConnectionSettings;

export namespace GetConnectionResponse {
  export interface ConnectorAcmeOauth2DiscriminatedConnectionSettings {
    connector_name: 'acme-oauth2';

    settings: ConnectorAcmeOauth2DiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorAcmeOauth2DiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorAcmeOauth2DiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorAircallDiscriminatedConnectionSettings {
    connector_name: 'aircall';

    settings: ConnectorAircallDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorAircallDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorAircallDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorAircallDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectionSettings {
    connector_name: 'confluence';

    settings: ConnectorConfluenceDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorConfluenceDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorConfluenceDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorConfluenceDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectionSettings {
    connector_name: 'discord';

    settings: ConnectorDiscordDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorDiscordDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorDiscordDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorDiscordDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorFacebookDiscriminatedConnectionSettings {
    connector_name: 'facebook';

    settings: ConnectorFacebookDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorFacebookDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorFacebookDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorFacebookDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectionSettings {
    connector_name: 'github';

    settings: ConnectorGitHubDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGitHubDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGitHubDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGitHubDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGongDiscriminatedConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorGongDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGongDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGongDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGongDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The base URL of your Gong account (e.g., example)
       */
      api_base_url_for_customer: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectionSettings {
    connector_name: 'google-calendar';

    settings: ConnectorGoogleCalendarDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogleCalendarDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGoogleCalendarDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectionSettings {
    connector_name: 'google-docs';

    settings: ConnectorGoogleDocsDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogleDocsDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGoogleDocsDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectionSettings {
    connector_name: 'google-drive';

    settings: ConnectorGoogleDriveDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogleDriveDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGoogleDriveDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectionSettings {
    connector_name: 'google-mail';

    settings: ConnectorGoogleMailDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogleMailDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGoogleMailDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectionSettings {
    connector_name: 'google-sheet';

    settings: ConnectorGoogleSheetDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogleSheetDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGoogleSheetDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectionSettings {
    connector_name: 'hubspot';

    settings: ConnectorHubspotDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorHubspotDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorHubspotDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorHubspotDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectionSettings {
    connector_name: 'instagram';

    settings: ConnectorInstagramDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorInstagramDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorInstagramDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorInstagramDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorIntercomDiscriminatedConnectionSettings {
    connector_name: 'intercom';

    settings: ConnectorIntercomDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorIntercomDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorIntercomDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorIntercomDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorJiraDiscriminatedConnectionSettings {
    connector_name: 'jira';

    settings: ConnectorJiraDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorJiraDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorJiraDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorJiraDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorLeverDiscriminatedConnectionSettings {
    connector_name: 'lever';

    settings: ConnectorLeverDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorLeverDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorLeverDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorLeverDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorLinearDiscriminatedConnectionSettings {
    connector_name: 'linear';

    settings: ConnectorLinearDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorLinearDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorLinearDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorLinearDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorLinkedinDiscriminatedConnectionSettings {
    connector_name: 'linkedin';

    settings: ConnectorLinkedinDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorLinkedinDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorLinkedinDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorLinkedinDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorNotionDiscriminatedConnectionSettings {
    connector_name: 'notion';

    settings: ConnectorNotionDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorNotionDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorNotionDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorNotionDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorOutreachDiscriminatedConnectionSettings {
    connector_name: 'outreach';

    settings: ConnectorOutreachDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorOutreachDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorOutreachDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorOutreachDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorPipedriveDiscriminatedConnectionSettings {
    connector_name: 'pipedrive';

    settings: ConnectorPipedriveDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorPipedriveDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorPipedriveDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorPipedriveDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The API URL of your Pipedrive account (e.g., example)
       */
      api_domain: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorQuickbooksDiscriminatedConnectionSettings {
    connector_name: 'quickbooks';

    settings: ConnectorQuickbooksDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorQuickbooksDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorQuickbooksDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorQuickbooksDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * The realmId of your quickbooks company (e.g., 9341453474484455)
       */
      realmId: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorRedditDiscriminatedConnectionSettings {
    connector_name: 'reddit';

    settings: ConnectorRedditDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorRedditDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorRedditDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorRedditDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSalesloftDiscriminatedConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorSalesloftDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSalesloftDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorSalesloftDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSalesloftDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSharepointDiscriminatedConnectionSettings {
    connector_name: 'sharepoint';

    settings: ConnectorSharepointDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSharepointDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorSharepointDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSharepointDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSlackDiscriminatedConnectionSettings {
    connector_name: 'slack';

    settings: ConnectorSlackDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSlackDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorSlackDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSlackDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorTwitterDiscriminatedConnectionSettings {
    connector_name: 'twitter';

    settings: ConnectorTwitterDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTwitterDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorTwitterDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorTwitterDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorXeroDiscriminatedConnectionSettings {
    connector_name: 'xero';

    settings: ConnectorXeroDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorXeroDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorXeroDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorXeroDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorZohoDeskDiscriminatedConnectionSettings {
    connector_name: 'zoho-desk';

    settings: ConnectorZohoDeskDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorZohoDeskDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorZohoDeskDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorZohoDeskDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The domain extension of your Zoho account (e.g., https://accounts.zoho.com/)
       */
      extension: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorAirtableDiscriminatedConnectionSettings {
    connector_name: 'airtable';

    settings: ConnectorAirtableDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorAirtableDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorAirtableDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorAirtableDiscriminatedConnectionSettings {
    export interface Settings {
      airtableBase: string;

      apiKey: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorApolloDiscriminatedConnectionSettings {
    connector_name: 'apollo';

    settings: ConnectorApolloDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorApolloDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorApolloDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorApolloDiscriminatedConnectionSettings {
    export interface Settings {
      api_key: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorBrexDiscriminatedConnectionSettings {
    connector_name: 'brex';

    settings: ConnectorBrexDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorBrexDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorBrexDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorBrexDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorCodaDiscriminatedConnectionSettings {
    connector_name: 'coda';

    settings: ConnectorCodaDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorCodaDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorCodaDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorCodaDiscriminatedConnectionSettings {
    export interface Settings {
      apiKey: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorFinchDiscriminatedConnectionSettings {
    connector_name: 'finch';

    settings: ConnectorFinchDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorFinchDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorFinchDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorFinchDiscriminatedConnectionSettings {
    export interface Settings {
      access_token: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorFirebaseDiscriminatedConnectionSettings {
    connector_name: 'firebase';

    settings:
      | ConnectorFirebaseDiscriminatedConnectionSettings.UnionMember0
      | ConnectorFirebaseDiscriminatedConnectionSettings.UnionMember1;

    id?: string;

    connector?: ConnectorFirebaseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorFirebaseDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorFirebaseDiscriminatedConnectionSettings {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorForeceiptDiscriminatedConnectionSettings {
    connector_name: 'foreceipt';

    settings: ConnectorForeceiptDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorForeceiptDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorForeceiptDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorForeceiptDiscriminatedConnectionSettings {
    export interface Settings {
      envName: 'staging' | 'production';

      _id?: unknown;

      credentials?: unknown;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGreenhouseDiscriminatedConnectionSettings {
    connector_name: 'greenhouse';

    settings: ConnectorGreenhouseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGreenhouseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGreenhouseDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGreenhouseDiscriminatedConnectionSettings {
    export interface Settings {
      apiKey: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorHeronDiscriminatedConnectionSettings {
    connector_name: 'heron';

    settings: unknown;

    id?: string;

    connector?: ConnectorHeronDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorHeronDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorHeronDiscriminatedConnectionSettings {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorLunchmoneyDiscriminatedConnectionSettings {
    connector_name: 'lunchmoney';

    settings: unknown;

    id?: string;

    connector?: ConnectorLunchmoneyDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorLunchmoneyDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorLunchmoneyDiscriminatedConnectionSettings {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorMercuryDiscriminatedConnectionSettings {
    connector_name: 'mercury';

    settings: unknown;

    id?: string;

    connector?: ConnectorMercuryDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorMercuryDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorMercuryDiscriminatedConnectionSettings {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorMergeDiscriminatedConnectionSettings {
    connector_name: 'merge';

    settings: ConnectorMergeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorMergeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorMergeDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorMergeDiscriminatedConnectionSettings {
    export interface Settings {
      accountToken: string;

      accountDetails?: unknown;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorMootaDiscriminatedConnectionSettings {
    connector_name: 'moota';

    settings: unknown;

    id?: string;

    connector?: ConnectorMootaDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorMootaDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorMootaDiscriminatedConnectionSettings {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorOnebrickDiscriminatedConnectionSettings {
    connector_name: 'onebrick';

    settings: ConnectorOnebrickDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorOnebrickDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorOnebrickDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorOnebrickDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorPlaidDiscriminatedConnectionSettings {
    connector_name: 'plaid';

    settings: ConnectorPlaidDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorPlaidDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorPlaidDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

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

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorPostgresDiscriminatedConnectionSettings {
    connector_name: 'postgres';

    settings: ConnectorPostgresDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorPostgresDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorPostgresDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorPostgresDiscriminatedConnectionSettings {
    export interface Settings {
      databaseURL: string;

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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorRampDiscriminatedConnectionSettings {
    connector_name: 'ramp';

    settings: ConnectorRampDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorRampDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorRampDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorRampDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken?: string | null;

      startAfterTransactionId?: string | null;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSaltedgeDiscriminatedConnectionSettings {
    connector_name: 'saltedge';

    id?: string;

    connector?: ConnectorSaltedgeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorSaltedgeDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    settings?: unknown;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSaltedgeDiscriminatedConnectionSettings {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSplitwiseDiscriminatedConnectionSettings {
    connector_name: 'splitwise';

    settings: ConnectorSplitwiseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSplitwiseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorSplitwiseDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSplitwiseDiscriminatedConnectionSettings {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorStripeDiscriminatedConnectionSettings {
    connector_name: 'stripe';

    settings: ConnectorStripeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorStripeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorStripeDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorStripeDiscriminatedConnectionSettings {
    export interface Settings {
      secretKey: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorTellerDiscriminatedConnectionSettings {
    connector_name: 'teller';

    settings: ConnectorTellerDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTellerDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorTellerDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorTellerDiscriminatedConnectionSettings {
    export interface Settings {
      token: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorTogglDiscriminatedConnectionSettings {
    connector_name: 'toggl';

    settings: ConnectorTogglDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTogglDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorTogglDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorTogglDiscriminatedConnectionSettings {
    export interface Settings {
      apiToken: string;

      email?: string | null;

      password?: string | null;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorTwentyDiscriminatedConnectionSettings {
    connector_name: 'twenty';

    settings: ConnectorTwentyDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTwentyDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorTwentyDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorTwentyDiscriminatedConnectionSettings {
    export interface Settings {
      access_token: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorVenmoDiscriminatedConnectionSettings {
    connector_name: 'venmo';

    settings: ConnectorVenmoDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorVenmoDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorVenmoDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorVenmoDiscriminatedConnectionSettings {
    export interface Settings {
      credentials?: unknown;

      me?: unknown;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorWiseDiscriminatedConnectionSettings {
    connector_name: 'wise';

    settings: ConnectorWiseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorWiseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorWiseDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorWiseDiscriminatedConnectionSettings {
    export interface Settings {
      envName: 'sandbox' | 'live';

      apiToken?: string | null;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorYodleeDiscriminatedConnectionSettings {
    connector_name: 'yodlee';

    settings: ConnectorYodleeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorYodleeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorYodleeDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorYodleeDiscriminatedConnectionSettings {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }
}

export interface GetCurrentUserResponse {
  role: 'anon' | 'customer' | 'user' | 'org' | 'system';

  [k: string]: unknown;
}

export type ListConnectionConfigsResponse =
  | ListConnectionConfigsResponse.ConnectorAcmeOauth2DiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorAircallDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorConfluenceDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorDiscordDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorFacebookDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGitHubDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGongDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGoogleCalendarDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGoogleDocsDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGoogleDriveDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGoogleMailDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGoogleSheetDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorHubspotDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorInstagramDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorIntercomDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorJiraDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorLeverDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorLinearDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorLinkedinDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorNotionDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorOutreachDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorPipedriveDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorQuickbooksDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorRedditDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorSalesloftDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorSharepointDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorSlackDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorTwitterDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorXeroDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorZohoDeskDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorAirtableDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorApolloDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorBrexDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorCodaDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorFinchDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorFirebaseDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorForeceiptDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGreenhouseDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorHeronDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorLunchmoneyDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorMercuryDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorMergeDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorMootaDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorOnebrickDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorPlaidDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorPostgresDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorRampDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorSaltedgeDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorSplitwiseDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorStripeDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorTellerDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorTogglDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorTwentyDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorVenmoDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorWiseDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorYodleeDiscriminatedConnectorConfig;

export namespace ListConnectionConfigsResponse {
  export interface ConnectorAcmeOauth2DiscriminatedConnectorConfig {
    config: ConnectorAcmeOauth2DiscriminatedConnectorConfig.Config;

    connector_name: 'acme-oauth2';

    id?: string;

    connection_count?: number;

    connector?: ConnectorAcmeOauth2DiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorAcmeOauth2DiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorAircallDiscriminatedConnectorConfig {
    config: ConnectorAircallDiscriminatedConnectorConfig.Config;

    connector_name: 'aircall';

    id?: string;

    connection_count?: number;

    connector?: ConnectorAircallDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorAircallDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorAircallDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectorConfig {
    config: ConnectorConfluenceDiscriminatedConnectorConfig.Config;

    connector_name: 'confluence';

    id?: string;

    connection_count?: number;

    connector?: ConnectorConfluenceDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorConfluenceDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorConfluenceDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectorConfig {
    config: ConnectorDiscordDiscriminatedConnectorConfig.Config;

    connector_name: 'discord';

    id?: string;

    connection_count?: number;

    connector?: ConnectorDiscordDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorDiscordDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDiscordDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorFacebookDiscriminatedConnectorConfig {
    config: ConnectorFacebookDiscriminatedConnectorConfig.Config;

    connector_name: 'facebook';

    id?: string;

    connection_count?: number;

    connector?: ConnectorFacebookDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorFacebookDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorFacebookDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectorConfig {
    config: ConnectorGitHubDiscriminatedConnectorConfig.Config;

    connector_name: 'github';

    id?: string;

    connection_count?: number;

    connector?: ConnectorGitHubDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorGitHubDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGitHubDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGongDiscriminatedConnectorConfig {
    config: ConnectorGongDiscriminatedConnectorConfig.Config;

    connector_name: 'gong';

    id?: string;

    connection_count?: number;

    connector?: ConnectorGongDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorGongDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGongDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectorConfig {
    config: ConnectorGoogleCalendarDiscriminatedConnectorConfig.Config;

    connector_name: 'google-calendar';

    id?: string;

    connection_count?: number;

    connector?: ConnectorGoogleCalendarDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorGoogleCalendarDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectorConfig {
    config: ConnectorGoogleDocsDiscriminatedConnectorConfig.Config;

    connector_name: 'google-docs';

    id?: string;

    connection_count?: number;

    connector?: ConnectorGoogleDocsDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorGoogleDocsDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectorConfig {
    config: ConnectorGoogleDriveDiscriminatedConnectorConfig.Config;

    connector_name: 'google-drive';

    id?: string;

    connection_count?: number;

    connector?: ConnectorGoogleDriveDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorGoogleDriveDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectorConfig {
    config: ConnectorGoogleMailDiscriminatedConnectorConfig.Config;

    connector_name: 'google-mail';

    id?: string;

    connection_count?: number;

    connector?: ConnectorGoogleMailDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorGoogleMailDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectorConfig {
    config: ConnectorGoogleSheetDiscriminatedConnectorConfig.Config;

    connector_name: 'google-sheet';

    id?: string;

    connection_count?: number;

    connector?: ConnectorGoogleSheetDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorGoogleSheetDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectorConfig {
    config: ConnectorHubspotDiscriminatedConnectorConfig.Config;

    connector_name: 'hubspot';

    id?: string;

    connection_count?: number;

    connector?: ConnectorHubspotDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorHubspotDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorHubspotDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectorConfig {
    config: ConnectorInstagramDiscriminatedConnectorConfig.Config;

    connector_name: 'instagram';

    id?: string;

    connection_count?: number;

    connector?: ConnectorInstagramDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorInstagramDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorInstagramDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorIntercomDiscriminatedConnectorConfig {
    config: ConnectorIntercomDiscriminatedConnectorConfig.Config;

    connector_name: 'intercom';

    id?: string;

    connection_count?: number;

    connector?: ConnectorIntercomDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorIntercomDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorIntercomDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorJiraDiscriminatedConnectorConfig {
    config: ConnectorJiraDiscriminatedConnectorConfig.Config;

    connector_name: 'jira';

    id?: string;

    connection_count?: number;

    connector?: ConnectorJiraDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorJiraDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorJiraDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorLeverDiscriminatedConnectorConfig {
    config: ConnectorLeverDiscriminatedConnectorConfig.Config;

    connector_name: 'lever';

    id?: string;

    connection_count?: number;

    connector?: ConnectorLeverDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorLeverDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorLeverDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorLinearDiscriminatedConnectorConfig {
    config: ConnectorLinearDiscriminatedConnectorConfig.Config;

    connector_name: 'linear';

    id?: string;

    connection_count?: number;

    connector?: ConnectorLinearDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorLinearDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorLinearDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorLinkedinDiscriminatedConnectorConfig {
    config: ConnectorLinkedinDiscriminatedConnectorConfig.Config;

    connector_name: 'linkedin';

    id?: string;

    connection_count?: number;

    connector?: ConnectorLinkedinDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorLinkedinDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorLinkedinDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorNotionDiscriminatedConnectorConfig {
    config: ConnectorNotionDiscriminatedConnectorConfig.Config;

    connector_name: 'notion';

    id?: string;

    connection_count?: number;

    connector?: ConnectorNotionDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorNotionDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorNotionDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorOutreachDiscriminatedConnectorConfig {
    config: ConnectorOutreachDiscriminatedConnectorConfig.Config;

    connector_name: 'outreach';

    id?: string;

    connection_count?: number;

    connector?: ConnectorOutreachDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorOutreachDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorOutreachDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorPipedriveDiscriminatedConnectorConfig {
    config: ConnectorPipedriveDiscriminatedConnectorConfig.Config;

    connector_name: 'pipedrive';

    id?: string;

    connection_count?: number;

    connector?: ConnectorPipedriveDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorPipedriveDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorPipedriveDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorQuickbooksDiscriminatedConnectorConfig {
    config: ConnectorQuickbooksDiscriminatedConnectorConfig.Config;

    connector_name: 'quickbooks';

    id?: string;

    connection_count?: number;

    connector?: ConnectorQuickbooksDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorQuickbooksDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorQuickbooksDiscriminatedConnectorConfig {
    export interface Config {
      envName: 'sandbox' | 'production';

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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorRedditDiscriminatedConnectorConfig {
    config: ConnectorRedditDiscriminatedConnectorConfig.Config;

    connector_name: 'reddit';

    id?: string;

    connection_count?: number;

    connector?: ConnectorRedditDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorRedditDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorRedditDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSalesloftDiscriminatedConnectorConfig {
    config: ConnectorSalesloftDiscriminatedConnectorConfig.Config;

    connector_name: 'salesloft';

    id?: string;

    connection_count?: number;

    connector?: ConnectorSalesloftDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorSalesloftDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSalesloftDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSharepointDiscriminatedConnectorConfig {
    config: ConnectorSharepointDiscriminatedConnectorConfig.Config;

    connector_name: 'sharepoint';

    id?: string;

    connection_count?: number;

    connector?: ConnectorSharepointDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorSharepointDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSharepointDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSlackDiscriminatedConnectorConfig {
    config: ConnectorSlackDiscriminatedConnectorConfig.Config;

    connector_name: 'slack';

    id?: string;

    connection_count?: number;

    connector?: ConnectorSlackDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorSlackDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSlackDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorTwitterDiscriminatedConnectorConfig {
    config: ConnectorTwitterDiscriminatedConnectorConfig.Config;

    connector_name: 'twitter';

    id?: string;

    connection_count?: number;

    connector?: ConnectorTwitterDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorTwitterDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorTwitterDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorXeroDiscriminatedConnectorConfig {
    config: ConnectorXeroDiscriminatedConnectorConfig.Config;

    connector_name: 'xero';

    id?: string;

    connection_count?: number;

    connector?: ConnectorXeroDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorXeroDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorXeroDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorZohoDeskDiscriminatedConnectorConfig {
    config: ConnectorZohoDeskDiscriminatedConnectorConfig.Config;

    connector_name: 'zoho-desk';

    id?: string;

    connection_count?: number;

    connector?: ConnectorZohoDeskDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorZohoDeskDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorZohoDeskDiscriminatedConnectorConfig {
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

        /**
         * Custom redirect URI
         */
        redirect_uri?: string | null;

        scopes?: Array<string> | null;
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorAirtableDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'airtable';

    id?: string;

    connection_count?: number;

    connector?: ConnectorAirtableDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorAirtableDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorAirtableDiscriminatedConnectorConfig {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorApolloDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'apollo';

    id?: string;

    connection_count?: number;

    connector?: ConnectorApolloDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorApolloDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorApolloDiscriminatedConnectorConfig {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorBrexDiscriminatedConnectorConfig {
    config: ConnectorBrexDiscriminatedConnectorConfig.Config;

    connector_name: 'brex';

    id?: string;

    connection_count?: number;

    connector?: ConnectorBrexDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorBrexDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorBrexDiscriminatedConnectorConfig {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorCodaDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'coda';

    id?: string;

    connection_count?: number;

    connector?: ConnectorCodaDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorCodaDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorCodaDiscriminatedConnectorConfig {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorFinchDiscriminatedConnectorConfig {
    config: ConnectorFinchDiscriminatedConnectorConfig.Config;

    connector_name: 'finch';

    id?: string;

    connection_count?: number;

    connector?: ConnectorFinchDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorFinchDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorFinchDiscriminatedConnectorConfig {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorFirebaseDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'firebase';

    id?: string;

    connection_count?: number;

    connector?: ConnectorFirebaseDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorFirebaseDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorFirebaseDiscriminatedConnectorConfig {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorForeceiptDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'foreceipt';

    id?: string;

    connection_count?: number;

    connector?: ConnectorForeceiptDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorForeceiptDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorForeceiptDiscriminatedConnectorConfig {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGreenhouseDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'greenhouse';

    id?: string;

    connection_count?: number;

    connector?: ConnectorGreenhouseDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorGreenhouseDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGreenhouseDiscriminatedConnectorConfig {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorHeronDiscriminatedConnectorConfig {
    config: ConnectorHeronDiscriminatedConnectorConfig.Config;

    connector_name: 'heron';

    id?: string;

    connection_count?: number;

    connector?: ConnectorHeronDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorHeronDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorHeronDiscriminatedConnectorConfig {
    export interface Config {
      apiKey: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorLunchmoneyDiscriminatedConnectorConfig {
    config: ConnectorLunchmoneyDiscriminatedConnectorConfig.Config;

    connector_name: 'lunchmoney';

    id?: string;

    connection_count?: number;

    connector?: ConnectorLunchmoneyDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorLunchmoneyDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorLunchmoneyDiscriminatedConnectorConfig {
    export interface Config {
      accessToken: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorMercuryDiscriminatedConnectorConfig {
    config: ConnectorMercuryDiscriminatedConnectorConfig.Config;

    connector_name: 'mercury';

    id?: string;

    connection_count?: number;

    connector?: ConnectorMercuryDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorMercuryDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorMercuryDiscriminatedConnectorConfig {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorMergeDiscriminatedConnectorConfig {
    config: ConnectorMergeDiscriminatedConnectorConfig.Config;

    connector_name: 'merge';

    id?: string;

    connection_count?: number;

    connector?: ConnectorMergeDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorMergeDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorMergeDiscriminatedConnectorConfig {
    export interface Config {
      apiKey: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorMootaDiscriminatedConnectorConfig {
    config: ConnectorMootaDiscriminatedConnectorConfig.Config;

    connector_name: 'moota';

    id?: string;

    connection_count?: number;

    connector?: ConnectorMootaDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorMootaDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorMootaDiscriminatedConnectorConfig {
    export interface Config {
      token: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorOnebrickDiscriminatedConnectorConfig {
    config: ConnectorOnebrickDiscriminatedConnectorConfig.Config;

    connector_name: 'onebrick';

    id?: string;

    connection_count?: number;

    connector?: ConnectorOnebrickDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorOnebrickDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorOnebrickDiscriminatedConnectorConfig {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorPlaidDiscriminatedConnectorConfig {
    config: ConnectorPlaidDiscriminatedConnectorConfig.Config;

    connector_name: 'plaid';

    id?: string;

    connection_count?: number;

    connector?: ConnectorPlaidDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorPlaidDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

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

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorPostgresDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'postgres';

    id?: string;

    connection_count?: number;

    connector?: ConnectorPostgresDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorPostgresDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorPostgresDiscriminatedConnectorConfig {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorRampDiscriminatedConnectorConfig {
    config: ConnectorRampDiscriminatedConnectorConfig.Config;

    connector_name: 'ramp';

    id?: string;

    connection_count?: number;

    connector?: ConnectorRampDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorRampDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorRampDiscriminatedConnectorConfig {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSaltedgeDiscriminatedConnectorConfig {
    config: ConnectorSaltedgeDiscriminatedConnectorConfig.Config;

    connector_name: 'saltedge';

    id?: string;

    connection_count?: number;

    connector?: ConnectorSaltedgeDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorSaltedgeDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSaltedgeDiscriminatedConnectorConfig {
    export interface Config {
      appId: string;

      secret: string;

      url?: string | null;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSplitwiseDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'splitwise';

    id?: string;

    connection_count?: number;

    connector?: ConnectorSplitwiseDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorSplitwiseDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSplitwiseDiscriminatedConnectorConfig {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorStripeDiscriminatedConnectorConfig {
    config: ConnectorStripeDiscriminatedConnectorConfig.Config;

    connector_name: 'stripe';

    id?: string;

    connection_count?: number;

    connector?: ConnectorStripeDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorStripeDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorStripeDiscriminatedConnectorConfig {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorTellerDiscriminatedConnectorConfig {
    config: ConnectorTellerDiscriminatedConnectorConfig.Config;

    connector_name: 'teller';

    id?: string;

    connection_count?: number;

    connector?: ConnectorTellerDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorTellerDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorTellerDiscriminatedConnectorConfig {
    export interface Config {
      applicationId: string;

      token?: string | null;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorTogglDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'toggl';

    id?: string;

    connection_count?: number;

    connector?: ConnectorTogglDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorTogglDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorTogglDiscriminatedConnectorConfig {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorTwentyDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'twenty';

    id?: string;

    connection_count?: number;

    connector?: ConnectorTwentyDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorTwentyDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorTwentyDiscriminatedConnectorConfig {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorVenmoDiscriminatedConnectorConfig {
    config: ConnectorVenmoDiscriminatedConnectorConfig.Config;

    connector_name: 'venmo';

    id?: string;

    connection_count?: number;

    connector?: ConnectorVenmoDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorVenmoDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorVenmoDiscriminatedConnectorConfig {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorWiseDiscriminatedConnectorConfig {
    config: unknown;

    connector_name: 'wise';

    id?: string;

    connection_count?: number;

    connector?: ConnectorWiseDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorWiseDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorWiseDiscriminatedConnectorConfig {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorYodleeDiscriminatedConnectorConfig {
    config: ConnectorYodleeDiscriminatedConnectorConfig.Config;

    connector_name: 'yodlee';

    id?: string;

    connection_count?: number;

    connector?: ConnectorYodleeDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorYodleeDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorYodleeDiscriminatedConnectorConfig {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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

    export interface Integrations {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }
}

/**
 * The connection details
 */
export type ListConnectionsResponse =
  | ListConnectionsResponse.ConnectorAcmeOauth2DiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorAircallDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorConfluenceDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorDiscordDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorFacebookDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGitHubDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGongDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGoogleCalendarDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGoogleDocsDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGoogleDriveDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGoogleMailDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGoogleSheetDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorHubspotDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorInstagramDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorIntercomDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorJiraDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorLeverDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorLinearDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorLinkedinDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorNotionDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorOutreachDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorPipedriveDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorQuickbooksDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorRedditDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorSalesloftDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorSharepointDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorSlackDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorTwitterDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorXeroDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorZohoDeskDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorAirtableDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorApolloDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorBrexDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorCodaDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorFinchDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorFirebaseDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorForeceiptDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGreenhouseDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorHeronDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorLunchmoneyDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorMercuryDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorMergeDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorMootaDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorOnebrickDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorPlaidDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorPostgresDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorRampDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorSaltedgeDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorSplitwiseDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorStripeDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorTellerDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorTogglDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorTwentyDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorVenmoDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorWiseDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorYodleeDiscriminatedConnectionSettings;

export namespace ListConnectionsResponse {
  export interface ConnectorAcmeOauth2DiscriminatedConnectionSettings {
    connector_name: 'acme-oauth2';

    settings: ConnectorAcmeOauth2DiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorAcmeOauth2DiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorAcmeOauth2DiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorAircallDiscriminatedConnectionSettings {
    connector_name: 'aircall';

    settings: ConnectorAircallDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorAircallDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorAircallDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorAircallDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectionSettings {
    connector_name: 'confluence';

    settings: ConnectorConfluenceDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorConfluenceDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorConfluenceDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorConfluenceDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectionSettings {
    connector_name: 'discord';

    settings: ConnectorDiscordDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorDiscordDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorDiscordDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorDiscordDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorFacebookDiscriminatedConnectionSettings {
    connector_name: 'facebook';

    settings: ConnectorFacebookDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorFacebookDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorFacebookDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorFacebookDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectionSettings {
    connector_name: 'github';

    settings: ConnectorGitHubDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGitHubDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGitHubDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGitHubDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGongDiscriminatedConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorGongDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGongDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGongDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGongDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The base URL of your Gong account (e.g., example)
       */
      api_base_url_for_customer: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectionSettings {
    connector_name: 'google-calendar';

    settings: ConnectorGoogleCalendarDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogleCalendarDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGoogleCalendarDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectionSettings {
    connector_name: 'google-docs';

    settings: ConnectorGoogleDocsDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogleDocsDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGoogleDocsDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectionSettings {
    connector_name: 'google-drive';

    settings: ConnectorGoogleDriveDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogleDriveDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGoogleDriveDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectionSettings {
    connector_name: 'google-mail';

    settings: ConnectorGoogleMailDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogleMailDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGoogleMailDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectionSettings {
    connector_name: 'google-sheet';

    settings: ConnectorGoogleSheetDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogleSheetDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGoogleSheetDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectionSettings {
    connector_name: 'hubspot';

    settings: ConnectorHubspotDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorHubspotDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorHubspotDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorHubspotDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectionSettings {
    connector_name: 'instagram';

    settings: ConnectorInstagramDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorInstagramDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorInstagramDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorInstagramDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorIntercomDiscriminatedConnectionSettings {
    connector_name: 'intercom';

    settings: ConnectorIntercomDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorIntercomDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorIntercomDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorIntercomDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorJiraDiscriminatedConnectionSettings {
    connector_name: 'jira';

    settings: ConnectorJiraDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorJiraDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorJiraDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorJiraDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorLeverDiscriminatedConnectionSettings {
    connector_name: 'lever';

    settings: ConnectorLeverDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorLeverDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorLeverDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorLeverDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorLinearDiscriminatedConnectionSettings {
    connector_name: 'linear';

    settings: ConnectorLinearDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorLinearDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorLinearDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorLinearDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorLinkedinDiscriminatedConnectionSettings {
    connector_name: 'linkedin';

    settings: ConnectorLinkedinDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorLinkedinDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorLinkedinDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorLinkedinDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorNotionDiscriminatedConnectionSettings {
    connector_name: 'notion';

    settings: ConnectorNotionDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorNotionDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorNotionDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorNotionDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorOutreachDiscriminatedConnectionSettings {
    connector_name: 'outreach';

    settings: ConnectorOutreachDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorOutreachDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorOutreachDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorOutreachDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorPipedriveDiscriminatedConnectionSettings {
    connector_name: 'pipedrive';

    settings: ConnectorPipedriveDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorPipedriveDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorPipedriveDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorPipedriveDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The API URL of your Pipedrive account (e.g., example)
       */
      api_domain: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorQuickbooksDiscriminatedConnectionSettings {
    connector_name: 'quickbooks';

    settings: ConnectorQuickbooksDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorQuickbooksDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorQuickbooksDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorQuickbooksDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * The realmId of your quickbooks company (e.g., 9341453474484455)
       */
      realmId: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorRedditDiscriminatedConnectionSettings {
    connector_name: 'reddit';

    settings: ConnectorRedditDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorRedditDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorRedditDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorRedditDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSalesloftDiscriminatedConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorSalesloftDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSalesloftDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorSalesloftDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSalesloftDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSharepointDiscriminatedConnectionSettings {
    connector_name: 'sharepoint';

    settings: ConnectorSharepointDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSharepointDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorSharepointDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSharepointDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSlackDiscriminatedConnectionSettings {
    connector_name: 'slack';

    settings: ConnectorSlackDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSlackDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorSlackDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSlackDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorTwitterDiscriminatedConnectionSettings {
    connector_name: 'twitter';

    settings: ConnectorTwitterDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTwitterDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorTwitterDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorTwitterDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorXeroDiscriminatedConnectionSettings {
    connector_name: 'xero';

    settings: ConnectorXeroDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorXeroDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorXeroDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorXeroDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorZohoDeskDiscriminatedConnectionSettings {
    connector_name: 'zoho-desk';

    settings: ConnectorZohoDeskDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorZohoDeskDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorZohoDeskDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorZohoDeskDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The domain extension of your Zoho account (e.g., https://accounts.zoho.com/)
       */
      extension: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorAirtableDiscriminatedConnectionSettings {
    connector_name: 'airtable';

    settings: ConnectorAirtableDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorAirtableDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorAirtableDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorAirtableDiscriminatedConnectionSettings {
    export interface Settings {
      airtableBase: string;

      apiKey: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorApolloDiscriminatedConnectionSettings {
    connector_name: 'apollo';

    settings: ConnectorApolloDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorApolloDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorApolloDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorApolloDiscriminatedConnectionSettings {
    export interface Settings {
      api_key: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorBrexDiscriminatedConnectionSettings {
    connector_name: 'brex';

    settings: ConnectorBrexDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorBrexDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorBrexDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorBrexDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorCodaDiscriminatedConnectionSettings {
    connector_name: 'coda';

    settings: ConnectorCodaDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorCodaDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorCodaDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorCodaDiscriminatedConnectionSettings {
    export interface Settings {
      apiKey: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorFinchDiscriminatedConnectionSettings {
    connector_name: 'finch';

    settings: ConnectorFinchDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorFinchDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorFinchDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorFinchDiscriminatedConnectionSettings {
    export interface Settings {
      access_token: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorFirebaseDiscriminatedConnectionSettings {
    connector_name: 'firebase';

    settings:
      | ConnectorFirebaseDiscriminatedConnectionSettings.UnionMember0
      | ConnectorFirebaseDiscriminatedConnectionSettings.UnionMember1;

    id?: string;

    connector?: ConnectorFirebaseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorFirebaseDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorFirebaseDiscriminatedConnectionSettings {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorForeceiptDiscriminatedConnectionSettings {
    connector_name: 'foreceipt';

    settings: ConnectorForeceiptDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorForeceiptDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorForeceiptDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorForeceiptDiscriminatedConnectionSettings {
    export interface Settings {
      envName: 'staging' | 'production';

      _id?: unknown;

      credentials?: unknown;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorGreenhouseDiscriminatedConnectionSettings {
    connector_name: 'greenhouse';

    settings: ConnectorGreenhouseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGreenhouseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorGreenhouseDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorGreenhouseDiscriminatedConnectionSettings {
    export interface Settings {
      apiKey: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorHeronDiscriminatedConnectionSettings {
    connector_name: 'heron';

    settings: unknown;

    id?: string;

    connector?: ConnectorHeronDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorHeronDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorHeronDiscriminatedConnectionSettings {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorLunchmoneyDiscriminatedConnectionSettings {
    connector_name: 'lunchmoney';

    settings: unknown;

    id?: string;

    connector?: ConnectorLunchmoneyDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorLunchmoneyDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorLunchmoneyDiscriminatedConnectionSettings {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorMercuryDiscriminatedConnectionSettings {
    connector_name: 'mercury';

    settings: unknown;

    id?: string;

    connector?: ConnectorMercuryDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorMercuryDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorMercuryDiscriminatedConnectionSettings {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorMergeDiscriminatedConnectionSettings {
    connector_name: 'merge';

    settings: ConnectorMergeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorMergeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorMergeDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorMergeDiscriminatedConnectionSettings {
    export interface Settings {
      accountToken: string;

      accountDetails?: unknown;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorMootaDiscriminatedConnectionSettings {
    connector_name: 'moota';

    settings: unknown;

    id?: string;

    connector?: ConnectorMootaDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorMootaDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorMootaDiscriminatedConnectionSettings {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorOnebrickDiscriminatedConnectionSettings {
    connector_name: 'onebrick';

    settings: ConnectorOnebrickDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorOnebrickDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorOnebrickDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorOnebrickDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorPlaidDiscriminatedConnectionSettings {
    connector_name: 'plaid';

    settings: ConnectorPlaidDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorPlaidDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorPlaidDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

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

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorPostgresDiscriminatedConnectionSettings {
    connector_name: 'postgres';

    settings: ConnectorPostgresDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorPostgresDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorPostgresDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorPostgresDiscriminatedConnectionSettings {
    export interface Settings {
      databaseURL: string;

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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorRampDiscriminatedConnectionSettings {
    connector_name: 'ramp';

    settings: ConnectorRampDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorRampDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorRampDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorRampDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken?: string | null;

      startAfterTransactionId?: string | null;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSaltedgeDiscriminatedConnectionSettings {
    connector_name: 'saltedge';

    id?: string;

    connector?: ConnectorSaltedgeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorSaltedgeDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    settings?: unknown;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSaltedgeDiscriminatedConnectionSettings {
    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorSplitwiseDiscriminatedConnectionSettings {
    connector_name: 'splitwise';

    settings: ConnectorSplitwiseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSplitwiseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorSplitwiseDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorSplitwiseDiscriminatedConnectionSettings {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorStripeDiscriminatedConnectionSettings {
    connector_name: 'stripe';

    settings: ConnectorStripeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorStripeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorStripeDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorStripeDiscriminatedConnectionSettings {
    export interface Settings {
      secretKey: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorTellerDiscriminatedConnectionSettings {
    connector_name: 'teller';

    settings: ConnectorTellerDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTellerDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorTellerDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorTellerDiscriminatedConnectionSettings {
    export interface Settings {
      token: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorTogglDiscriminatedConnectionSettings {
    connector_name: 'toggl';

    settings: ConnectorTogglDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTogglDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorTogglDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorTogglDiscriminatedConnectionSettings {
    export interface Settings {
      apiToken: string;

      email?: string | null;

      password?: string | null;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorTwentyDiscriminatedConnectionSettings {
    connector_name: 'twenty';

    settings: ConnectorTwentyDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTwentyDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorTwentyDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorTwentyDiscriminatedConnectionSettings {
    export interface Settings {
      access_token: string;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorVenmoDiscriminatedConnectionSettings {
    connector_name: 'venmo';

    settings: ConnectorVenmoDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorVenmoDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorVenmoDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorVenmoDiscriminatedConnectionSettings {
    export interface Settings {
      credentials?: unknown;

      me?: unknown;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorWiseDiscriminatedConnectionSettings {
    connector_name: 'wise';

    settings: ConnectorWiseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorWiseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorWiseDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorWiseDiscriminatedConnectionSettings {
    export interface Settings {
      envName: 'sandbox' | 'live';

      apiToken?: string | null;
    }

    export interface Connector {
      name: string;

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }

  export interface ConnectorYodleeDiscriminatedConnectionSettings {
    connector_name: 'yodlee';

    settings: ConnectorYodleeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorYodleeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string | null;

    created_at?: string;

    customer_id?: string | null;

    disabled?: boolean | null;

    display_name?: string | null;

    integration?: ConnectorYodleeDiscriminatedConnectionSettings.Integration;

    integration_id?: string | null;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null;

    status_message?: string | null;

    updated_at?: string;
  }

  export namespace ConnectorYodleeDiscriminatedConnectionSettings {
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

      authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

      display_name?: string;

      logo_url?: string;

      openint_scopes?: Array<string>;

      platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

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
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
    }
  }
}

/**
 * List of connectors
 */
export interface ListConnectorsResponse {
  items: Array<ListConnectorsResponse.Item>;

  /**
   * Limit the number of items returned
   */
  limit: number;

  /**
   * Offset the items returned
   */
  offset: number;

  /**
   * Total number of items in the database for the organization
   */
  total: number;
}

export namespace ListConnectorsResponse {
  export interface Item {
    name: string;

    authType?: 'BASIC' | 'OAUTH1' | 'OAUTH2' | 'OAUTH2CC' | 'API_KEY' | 'CUSTOM';

    display_name?: string;

    integrations?: Array<Item.Integration>;

    logo_url?: string;

    openint_scopes?: Array<string>;

    platforms?: Array<'web' | 'mobile' | 'desktop' | 'local' | 'cloud'>;

    schemas?: Item.Schemas;

    scopes?: Array<Item.Scope>;

    stage?: 'alpha' | 'beta' | 'ga' | 'hidden';
  }

  export namespace Item {
    export interface Integration {
      id: string;

      connector_name:
        | 'acme-oauth2'
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
        | 'google-calendar'
        | 'google-docs'
        | 'google-drive'
        | 'google-mail'
        | 'google-sheet'
        | 'greenhouse'
        | 'heron'
        | 'hubspot'
        | 'instagram'
        | 'intercom'
        | 'jira'
        | 'lever'
        | 'linear'
        | 'linkedin'
        | 'lunchmoney'
        | 'mercury'
        | 'merge'
        | 'moota'
        | 'notion'
        | 'onebrick'
        | 'outreach'
        | 'pipedrive'
        | 'plaid'
        | 'postgres'
        | 'quickbooks'
        | 'ramp'
        | 'reddit'
        | 'salesloft'
        | 'saltedge'
        | 'sharepoint'
        | 'slack'
        | 'splitwise'
        | 'stripe'
        | 'teller'
        | 'toggl'
        | 'twenty'
        | 'twitter'
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zoho-desk';

      created_at: string;

      external: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      name: string;

      standard: string | number | boolean | Record<string, unknown> | Array<unknown> | null;

      updated_at: string;

      auth_type?: string | null;

      category?: string | null;

      logo_url?: string | null;

      platforms?: Array<'web' | 'mobile' | 'desktop'> | null;

      stage?: 'alpha' | 'beta' | 'ga' | null;

      version?: string | null;
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

    export interface Scope {
      scope: string;

      description?: string;

      display_name?: string;
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
    | CreateConnectionParams.ConnectorAcmeOauth2DiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorAircallDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorConfluenceDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorDiscordDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorFacebookDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGitHubDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGongDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGoogleCalendarDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGoogleDocsDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGoogleDriveDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGoogleMailDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGoogleSheetDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorHubspotDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorInstagramDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorIntercomDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorJiraDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorLeverDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorLinearDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorLinkedinDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorNotionDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorOutreachDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorPipedriveDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorQuickbooksDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorRedditDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSalesloftDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSharepointDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSlackDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorTwitterDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorXeroDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorZohoDeskDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorAirtableDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorApolloDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorBrexDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorCodaDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorFinchDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorFirebaseDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorForeceiptDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGreenhouseDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorHeronDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorLunchmoneyDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorMercuryDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorMergeDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorMootaDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorOnebrickDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorPlaidDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorPostgresDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorRampDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSaltedgeDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSplitwiseDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorStripeDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorTellerDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorTogglDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorTwentyDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorVenmoDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorWiseDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorYodleeDiscriminatedConnectionSettings;

  metadata?: Record<string, unknown>;
}

export namespace CreateConnectionParams {
  export interface ConnectorAcmeOauth2DiscriminatedConnectionSettings {
    connector_name: 'acme-oauth2';

    settings: ConnectorAcmeOauth2DiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorAcmeOauth2DiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorAircallDiscriminatedConnectionSettings {
    connector_name: 'aircall';

    settings: ConnectorAircallDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorAircallDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorConfluenceDiscriminatedConnectionSettings {
    connector_name: 'confluence';

    settings: ConnectorConfluenceDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorConfluenceDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorDiscordDiscriminatedConnectionSettings {
    connector_name: 'discord';

    settings: ConnectorDiscordDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorDiscordDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorFacebookDiscriminatedConnectionSettings {
    connector_name: 'facebook';

    settings: ConnectorFacebookDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorFacebookDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGitHubDiscriminatedConnectionSettings {
    connector_name: 'github';

    settings: ConnectorGitHubDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGitHubDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGongDiscriminatedConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorGongDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGongDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The base URL of your Gong account (e.g., example)
       */
      api_base_url_for_customer: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleCalendarDiscriminatedConnectionSettings {
    connector_name: 'google-calendar';

    settings: ConnectorGoogleCalendarDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGoogleCalendarDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleDocsDiscriminatedConnectionSettings {
    connector_name: 'google-docs';

    settings: ConnectorGoogleDocsDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGoogleDocsDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleDriveDiscriminatedConnectionSettings {
    connector_name: 'google-drive';

    settings: ConnectorGoogleDriveDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGoogleDriveDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleMailDiscriminatedConnectionSettings {
    connector_name: 'google-mail';

    settings: ConnectorGoogleMailDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGoogleMailDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorGoogleSheetDiscriminatedConnectionSettings {
    connector_name: 'google-sheet';

    settings: ConnectorGoogleSheetDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGoogleSheetDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorHubspotDiscriminatedConnectionSettings {
    connector_name: 'hubspot';

    settings: ConnectorHubspotDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorHubspotDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorInstagramDiscriminatedConnectionSettings {
    connector_name: 'instagram';

    settings: ConnectorInstagramDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorInstagramDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorIntercomDiscriminatedConnectionSettings {
    connector_name: 'intercom';

    settings: ConnectorIntercomDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorIntercomDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorJiraDiscriminatedConnectionSettings {
    connector_name: 'jira';

    settings: ConnectorJiraDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorJiraDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorLeverDiscriminatedConnectionSettings {
    connector_name: 'lever';

    settings: ConnectorLeverDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorLeverDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorLinearDiscriminatedConnectionSettings {
    connector_name: 'linear';

    settings: ConnectorLinearDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorLinearDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorLinkedinDiscriminatedConnectionSettings {
    connector_name: 'linkedin';

    settings: ConnectorLinkedinDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorLinkedinDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorNotionDiscriminatedConnectionSettings {
    connector_name: 'notion';

    settings: ConnectorNotionDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorNotionDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorOutreachDiscriminatedConnectionSettings {
    connector_name: 'outreach';

    settings: ConnectorOutreachDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorOutreachDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorPipedriveDiscriminatedConnectionSettings {
    connector_name: 'pipedrive';

    settings: ConnectorPipedriveDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorPipedriveDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The API URL of your Pipedrive account (e.g., example)
       */
      api_domain: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorQuickbooksDiscriminatedConnectionSettings {
    connector_name: 'quickbooks';

    settings: ConnectorQuickbooksDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorQuickbooksDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;

      /**
       * The realmId of your quickbooks company (e.g., 9341453474484455)
       */
      realmId: string;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorRedditDiscriminatedConnectionSettings {
    connector_name: 'reddit';

    settings: ConnectorRedditDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorRedditDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSalesloftDiscriminatedConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorSalesloftDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSalesloftDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSharepointDiscriminatedConnectionSettings {
    connector_name: 'sharepoint';

    settings: ConnectorSharepointDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSharepointDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorSlackDiscriminatedConnectionSettings {
    connector_name: 'slack';

    settings: ConnectorSlackDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSlackDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorTwitterDiscriminatedConnectionSettings {
    connector_name: 'twitter';

    settings: ConnectorTwitterDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorTwitterDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorXeroDiscriminatedConnectionSettings {
    connector_name: 'xero';

    settings: ConnectorXeroDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorXeroDiscriminatedConnectionSettings {
    export interface Settings {
      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorZohoDeskDiscriminatedConnectionSettings {
    connector_name: 'zoho-desk';

    settings: ConnectorZohoDeskDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorZohoDeskDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The domain extension of your Zoho account (e.g., https://accounts.zoho.com/)
       */
      extension: string;

      oauth: Settings.OAuth;
    }

    export namespace Settings {
      export interface OAuth {
        created_at?: string;

        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        credentials?: OAuth.Credentials;

        last_fetched_at?: string;

        metadata?: Record<string, unknown> | null;

        updated_at?: string;
      }

      export namespace OAuth {
        /**
         * Output of the postConnect hook for oauth2 connectors
         */
        export interface Credentials {
          access_token: string;

          raw: Record<string, unknown>;

          scope: string;

          /**
           * Client ID used for the connection
           */
          client_id?: string;

          expires_at?: string;

          expires_in?: number;

          refresh_token?: string;

          token_type?: string;
        }
      }
    }
  }

  export interface ConnectorAirtableDiscriminatedConnectionSettings {
    connector_name: 'airtable';

    settings: ConnectorAirtableDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorAirtableDiscriminatedConnectionSettings {
    export interface Settings {
      airtableBase: string;

      apiKey: string;
    }
  }

  export interface ConnectorApolloDiscriminatedConnectionSettings {
    connector_name: 'apollo';

    settings: ConnectorApolloDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorApolloDiscriminatedConnectionSettings {
    export interface Settings {
      api_key: string;
    }
  }

  export interface ConnectorBrexDiscriminatedConnectionSettings {
    connector_name: 'brex';

    settings: ConnectorBrexDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorBrexDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken: string;
    }
  }

  export interface ConnectorCodaDiscriminatedConnectionSettings {
    connector_name: 'coda';

    settings: ConnectorCodaDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorCodaDiscriminatedConnectionSettings {
    export interface Settings {
      apiKey: string;
    }
  }

  export interface ConnectorFinchDiscriminatedConnectionSettings {
    connector_name: 'finch';

    settings: ConnectorFinchDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorFinchDiscriminatedConnectionSettings {
    export interface Settings {
      access_token: string;
    }
  }

  export interface ConnectorFirebaseDiscriminatedConnectionSettings {
    connector_name: 'firebase';

    settings:
      | ConnectorFirebaseDiscriminatedConnectionSettings.UnionMember0
      | ConnectorFirebaseDiscriminatedConnectionSettings.UnionMember1;
  }

  export namespace ConnectorFirebaseDiscriminatedConnectionSettings {
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

  export interface ConnectorForeceiptDiscriminatedConnectionSettings {
    connector_name: 'foreceipt';

    settings: ConnectorForeceiptDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorForeceiptDiscriminatedConnectionSettings {
    export interface Settings {
      envName: 'staging' | 'production';

      _id?: unknown;

      credentials?: unknown;
    }
  }

  export interface ConnectorGreenhouseDiscriminatedConnectionSettings {
    connector_name: 'greenhouse';

    settings: ConnectorGreenhouseDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGreenhouseDiscriminatedConnectionSettings {
    export interface Settings {
      apiKey: string;
    }
  }

  export interface ConnectorHeronDiscriminatedConnectionSettings {
    connector_name: 'heron';

    settings: unknown;
  }

  export interface ConnectorLunchmoneyDiscriminatedConnectionSettings {
    connector_name: 'lunchmoney';

    settings: unknown;
  }

  export interface ConnectorMercuryDiscriminatedConnectionSettings {
    connector_name: 'mercury';

    settings: unknown;
  }

  export interface ConnectorMergeDiscriminatedConnectionSettings {
    connector_name: 'merge';

    settings: ConnectorMergeDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorMergeDiscriminatedConnectionSettings {
    export interface Settings {
      accountToken: string;

      accountDetails?: unknown;
    }
  }

  export interface ConnectorMootaDiscriminatedConnectionSettings {
    connector_name: 'moota';

    settings: unknown;
  }

  export interface ConnectorOnebrickDiscriminatedConnectionSettings {
    connector_name: 'onebrick';

    settings: ConnectorOnebrickDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorOnebrickDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken: string;
    }
  }

  export interface ConnectorPlaidDiscriminatedConnectionSettings {
    connector_name: 'plaid';

    settings: ConnectorPlaidDiscriminatedConnectionSettings.Settings;
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

    settings: ConnectorPostgresDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorPostgresDiscriminatedConnectionSettings {
    export interface Settings {
      databaseURL: string;

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

  export interface ConnectorRampDiscriminatedConnectionSettings {
    connector_name: 'ramp';

    settings: ConnectorRampDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorRampDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken?: string | null;

      startAfterTransactionId?: string | null;
    }
  }

  export interface ConnectorSaltedgeDiscriminatedConnectionSettings {
    connector_name: 'saltedge';

    settings?: unknown;
  }

  export interface ConnectorSplitwiseDiscriminatedConnectionSettings {
    connector_name: 'splitwise';

    settings: ConnectorSplitwiseDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSplitwiseDiscriminatedConnectionSettings {
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

  export interface ConnectorStripeDiscriminatedConnectionSettings {
    connector_name: 'stripe';

    settings: ConnectorStripeDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorStripeDiscriminatedConnectionSettings {
    export interface Settings {
      secretKey: string;
    }
  }

  export interface ConnectorTellerDiscriminatedConnectionSettings {
    connector_name: 'teller';

    settings: ConnectorTellerDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorTellerDiscriminatedConnectionSettings {
    export interface Settings {
      token: string;
    }
  }

  export interface ConnectorTogglDiscriminatedConnectionSettings {
    connector_name: 'toggl';

    settings: ConnectorTogglDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorTogglDiscriminatedConnectionSettings {
    export interface Settings {
      apiToken: string;

      email?: string | null;

      password?: string | null;
    }
  }

  export interface ConnectorTwentyDiscriminatedConnectionSettings {
    connector_name: 'twenty';

    settings: ConnectorTwentyDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorTwentyDiscriminatedConnectionSettings {
    export interface Settings {
      access_token: string;
    }
  }

  export interface ConnectorVenmoDiscriminatedConnectionSettings {
    connector_name: 'venmo';

    settings: ConnectorVenmoDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorVenmoDiscriminatedConnectionSettings {
    export interface Settings {
      credentials?: unknown;

      me?: unknown;
    }
  }

  export interface ConnectorWiseDiscriminatedConnectionSettings {
    connector_name: 'wise';

    settings: ConnectorWiseDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorWiseDiscriminatedConnectionSettings {
    export interface Settings {
      envName: 'sandbox' | 'live';

      apiToken?: string | null;
    }
  }

  export interface ConnectorYodleeDiscriminatedConnectionSettings {
    connector_name: 'yodlee';

    settings: ConnectorYodleeDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorYodleeDiscriminatedConnectionSettings {
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
}

export interface CreateMagicLinkParams {
  connect_options?: CreateMagicLinkParams.ConnectOptions;

  /**
   * How long the magic link will be valid for (in seconds) before it expires
   */
  validity_in_seconds?: number;
}

export namespace CreateMagicLinkParams {
  export interface ConnectOptions {
    /**
     * The names of the connectors to show in the connect page. If not provided, all
     * connectors will be shown
     */
    connector_names?: Array<
      | 'acme-oauth2'
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
      | 'google-calendar'
      | 'google-docs'
      | 'google-drive'
      | 'google-mail'
      | 'google-sheet'
      | 'greenhouse'
      | 'heron'
      | 'hubspot'
      | 'instagram'
      | 'intercom'
      | 'jira'
      | 'lever'
      | 'linear'
      | 'linkedin'
      | 'lunchmoney'
      | 'mercury'
      | 'merge'
      | 'moota'
      | 'notion'
      | 'onebrick'
      | 'outreach'
      | 'pipedrive'
      | 'plaid'
      | 'postgres'
      | 'quickbooks'
      | 'ramp'
      | 'reddit'
      | 'salesloft'
      | 'saltedge'
      | 'sharepoint'
      | 'slack'
      | 'splitwise'
      | 'stripe'
      | 'teller'
      | 'toggl'
      | 'twenty'
      | 'twitter'
      | 'venmo'
      | 'wise'
      | 'xero'
      | 'yodlee'
      | 'zoho-desk'
    >;

    /**
     * Whether to enable debug mode
     */
    debug?: boolean;

    /**
     * Optional URL to return customers after adding a connection or if they press the
     * Return To Organization button
     */
    return_url?: string;

    /**
     * The default view to show when the magic link is opened. If omitted, by default
     * it will smartly load the right view based on whether the user has connections or
     * not
     */
    view?: 'add' | 'manage';
  }
}

export interface CreateTokenParams {
  connect_options?: CreateTokenParams.ConnectOptions;

  validity_in_seconds?: number;
}

export namespace CreateTokenParams {
  export interface ConnectOptions {
    /**
     * The names of the connectors to show in the connect page. If not provided, all
     * connectors will be shown
     */
    connector_names?: Array<
      | 'acme-oauth2'
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
      | 'google-calendar'
      | 'google-docs'
      | 'google-drive'
      | 'google-mail'
      | 'google-sheet'
      | 'greenhouse'
      | 'heron'
      | 'hubspot'
      | 'instagram'
      | 'intercom'
      | 'jira'
      | 'lever'
      | 'linear'
      | 'linkedin'
      | 'lunchmoney'
      | 'mercury'
      | 'merge'
      | 'moota'
      | 'notion'
      | 'onebrick'
      | 'outreach'
      | 'pipedrive'
      | 'plaid'
      | 'postgres'
      | 'quickbooks'
      | 'ramp'
      | 'reddit'
      | 'salesloft'
      | 'saltedge'
      | 'sharepoint'
      | 'slack'
      | 'splitwise'
      | 'stripe'
      | 'teller'
      | 'toggl'
      | 'twenty'
      | 'twitter'
      | 'venmo'
      | 'wise'
      | 'xero'
      | 'yodlee'
      | 'zoho-desk'
    >;

    /**
     * Whether to enable debug mode
     */
    debug?: boolean;

    /**
     * Optional URL to return customers after adding a connection or if they press the
     * Return To Organization button
     */
    return_url?: string;

    /**
     * The default view to show when the magic link is opened. If omitted, by default
     * it will smartly load the right view based on whether the user has connections or
     * not
     */
    view?: 'add' | 'manage';
  }
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
  connector_names?: Array<
    | 'acme-oauth2'
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
    | 'google-calendar'
    | 'google-docs'
    | 'google-drive'
    | 'google-mail'
    | 'google-sheet'
    | 'greenhouse'
    | 'heron'
    | 'hubspot'
    | 'instagram'
    | 'intercom'
    | 'jira'
    | 'lever'
    | 'linear'
    | 'linkedin'
    | 'lunchmoney'
    | 'mercury'
    | 'merge'
    | 'moota'
    | 'notion'
    | 'onebrick'
    | 'outreach'
    | 'pipedrive'
    | 'plaid'
    | 'postgres'
    | 'quickbooks'
    | 'ramp'
    | 'reddit'
    | 'salesloft'
    | 'saltedge'
    | 'sharepoint'
    | 'slack'
    | 'splitwise'
    | 'stripe'
    | 'teller'
    | 'toggl'
    | 'twenty'
    | 'twitter'
    | 'venmo'
    | 'wise'
    | 'xero'
    | 'yodlee'
    | 'zoho-desk'
  >;

  expand?: Array<'connector' | 'connector.schemas' | 'connection_count'>;

  limit?: number;
}

export interface ListConnectionsParams extends OffsetPaginationParams {
  /**
   * The id of the connector config, starts with `ccfg_`
   */
  connector_config_id?: string;

  connector_names?: Array<
    | 'acme-oauth2'
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
    | 'google-calendar'
    | 'google-docs'
    | 'google-drive'
    | 'google-mail'
    | 'google-sheet'
    | 'greenhouse'
    | 'heron'
    | 'hubspot'
    | 'instagram'
    | 'intercom'
    | 'jira'
    | 'lever'
    | 'linear'
    | 'linkedin'
    | 'lunchmoney'
    | 'mercury'
    | 'merge'
    | 'moota'
    | 'notion'
    | 'onebrick'
    | 'outreach'
    | 'pipedrive'
    | 'plaid'
    | 'postgres'
    | 'quickbooks'
    | 'ramp'
    | 'reddit'
    | 'salesloft'
    | 'saltedge'
    | 'sharepoint'
    | 'slack'
    | 'splitwise'
    | 'stripe'
    | 'teller'
    | 'toggl'
    | 'twenty'
    | 'twitter'
    | 'venmo'
    | 'wise'
    | 'xero'
    | 'yodlee'
    | 'zoho-desk'
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

  /**
   * Controls secret inclusion: none (default), basic (auth only), or all secrets
   */
  include_secrets?: 'none' | 'basic' | 'all';

  limit?: number;
}

export interface ListConnectorsParams {
  expand?: Array<'schemas'>;
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
