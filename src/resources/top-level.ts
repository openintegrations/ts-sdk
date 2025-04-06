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
  | CreateConnectionResponse.ConnectorDummyOauth2DiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorSharepointonlineDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorSlackDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGitHubDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorQuickbooksDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGooglemailDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorNotionDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorLinkedinDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGoogledocsDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorAircallDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGooglecalendarDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGooglesheetDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorDiscordDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorHubspotDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorSalesforceDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorLinearDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorConfluenceDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGoogledriveDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorAirtableDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorApolloDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorBrexDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorCodaDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorFacebookDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorFinchDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorFirebaseDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorForeceiptDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGongDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorGreenhouseDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorHeronDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorInstagramDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorIntercomDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorJiraDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorKustomerDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorLeverDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorLunchmoneyDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorMercuryDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorMergeDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorMicrosoftDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorMootaDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorOnebrickDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorOutreachDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorPipedriveDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorPlaidDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorPostgresDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorRampDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorRedditDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorSalesloftDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorSaltedgeDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorSplitwiseDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorStripeDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorTellerDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorTogglDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorTwentyDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorTwitterDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorVenmoDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorWiseDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorXeroDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorYodleeDiscriminatedConnectionSettings
  | CreateConnectionResponse.ConnectorZohodeskDiscriminatedConnectionSettings;

export namespace CreateConnectionResponse {
  export interface ConnectorDummyOauth2DiscriminatedConnectionSettings {
    connector_name: 'dummy-oauth2';

    settings: ConnectorDummyOauth2DiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorDummyOauth2DiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorSharepointonlineDiscriminatedConnectionSettings {
    connector_name: 'sharepointonline';

    settings: ConnectorSharepointonlineDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorSharepointonlineDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorSlackDiscriminatedConnectionSettings {
    connector_name: 'slack';

    settings: ConnectorSlackDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorGitHubDiscriminatedConnectionSettings {
    connector_name: 'github';

    settings: ConnectorGitHubDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorQuickbooksDiscriminatedConnectionSettings {
    connector_name: 'quickbooks';

    settings: ConnectorQuickbooksDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorGooglemailDiscriminatedConnectionSettings {
    connector_name: 'googlemail';

    settings: ConnectorGooglemailDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGooglemailDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorNotionDiscriminatedConnectionSettings {
    connector_name: 'notion';

    settings: ConnectorNotionDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorLinkedinDiscriminatedConnectionSettings {
    connector_name: 'linkedin';

    settings: ConnectorLinkedinDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorGoogledocsDiscriminatedConnectionSettings {
    connector_name: 'googledocs';

    settings: ConnectorGoogledocsDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGoogledocsDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorAircallDiscriminatedConnectionSettings {
    connector_name: 'aircall';

    settings: ConnectorAircallDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorGooglecalendarDiscriminatedConnectionSettings {
    connector_name: 'googlecalendar';

    settings: ConnectorGooglecalendarDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGooglecalendarDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorGooglesheetDiscriminatedConnectionSettings {
    connector_name: 'googlesheet';

    settings: ConnectorGooglesheetDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGooglesheetDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorDiscordDiscriminatedConnectionSettings {
    connector_name: 'discord';

    settings: ConnectorDiscordDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorHubspotDiscriminatedConnectionSettings {
    connector_name: 'hubspot';

    settings: ConnectorHubspotDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorSalesforceDiscriminatedConnectionSettings {
    connector_name: 'salesforce';

    settings: ConnectorSalesforceDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorSalesforceDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The instance URL of your Salesforce account (e.g., example)
       */
      instance_url: string;

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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorLinearDiscriminatedConnectionSettings {
    connector_name: 'linear';

    settings: ConnectorLinearDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorConfluenceDiscriminatedConnectionSettings {
    connector_name: 'confluence';

    settings: ConnectorConfluenceDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorGoogledriveDiscriminatedConnectionSettings {
    connector_name: 'googledrive';

    settings: ConnectorGoogledriveDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGoogledriveDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorAirtableDiscriminatedConnectionSettings {
    connector_name: 'airtable';

    settings: ConnectorAirtableDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorApolloDiscriminatedConnectionSettings {
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

  export interface ConnectorBrexDiscriminatedConnectionSettings {
    connector_name: 'brex';

    settings: ConnectorBrexDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorCodaDiscriminatedConnectionSettings {
    export interface Settings {
      apiKey: string;
    }
  }

  export interface ConnectorFacebookDiscriminatedConnectionSettings {
    connector_name: 'facebook';

    settings: ConnectorFacebookDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorFacebookDiscriminatedConnectionSettings {
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

  export interface ConnectorFinchDiscriminatedConnectionSettings {
    connector_name: 'finch';

    settings: ConnectorFinchDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    connector_config_id?: string;

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

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorForeceiptDiscriminatedConnectionSettings {
    export interface Settings {
      envName: 'staging' | 'production';

      _id?: unknown;

      credentials?: unknown;
    }
  }

  export interface ConnectorGongDiscriminatedConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorGongDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGongDiscriminatedConnectionSettings {
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

  export interface ConnectorGreenhouseDiscriminatedConnectionSettings {
    connector_name: 'greenhouse';

    settings: ConnectorGreenhouseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export interface ConnectorInstagramDiscriminatedConnectionSettings {
    connector_name: 'instagram';

    settings: ConnectorInstagramDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorInstagramDiscriminatedConnectionSettings {
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

  export interface ConnectorIntercomDiscriminatedConnectionSettings {
    connector_name: 'intercom';

    settings: ConnectorIntercomDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorIntercomDiscriminatedConnectionSettings {
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

  export interface ConnectorJiraDiscriminatedConnectionSettings {
    connector_name: 'jira';

    settings: ConnectorJiraDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorJiraDiscriminatedConnectionSettings {
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

  export interface ConnectorKustomerDiscriminatedConnectionSettings {
    connector_name: 'kustomer';

    settings: ConnectorKustomerDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorKustomerDiscriminatedConnectionSettings {
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

  export interface ConnectorLeverDiscriminatedConnectionSettings {
    connector_name: 'lever';

    settings: ConnectorLeverDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorLeverDiscriminatedConnectionSettings {
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

  export interface ConnectorLunchmoneyDiscriminatedConnectionSettings {
    connector_name: 'lunchmoney';

    settings: unknown;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export interface ConnectorMercuryDiscriminatedConnectionSettings {
    connector_name: 'mercury';

    settings: unknown;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export interface ConnectorMergeDiscriminatedConnectionSettings {
    connector_name: 'merge';

    settings: ConnectorMergeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorMergeDiscriminatedConnectionSettings {
    export interface Settings {
      accountToken: string;

      accountDetails?: unknown;
    }
  }

  export interface ConnectorMicrosoftDiscriminatedConnectionSettings {
    connector_name: 'microsoft';

    settings: ConnectorMicrosoftDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorMicrosoftDiscriminatedConnectionSettings {
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

  export interface ConnectorMootaDiscriminatedConnectionSettings {
    connector_name: 'moota';

    settings: unknown;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export interface ConnectorOnebrickDiscriminatedConnectionSettings {
    connector_name: 'onebrick';

    settings: ConnectorOnebrickDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorOnebrickDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken: string;
    }
  }

  export interface ConnectorOutreachDiscriminatedConnectionSettings {
    connector_name: 'outreach';

    settings: ConnectorOutreachDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorOutreachDiscriminatedConnectionSettings {
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

  export interface ConnectorPipedriveDiscriminatedConnectionSettings {
    connector_name: 'pipedrive';

    settings: ConnectorPipedriveDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorPipedriveDiscriminatedConnectionSettings {
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

  export interface ConnectorPlaidDiscriminatedConnectionSettings {
    connector_name: 'plaid';

    settings: ConnectorPlaidDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorPostgresDiscriminatedConnectionSettings {
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

  export interface ConnectorRampDiscriminatedConnectionSettings {
    connector_name: 'ramp';

    settings: ConnectorRampDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorRampDiscriminatedConnectionSettings {
    export interface Settings {
      accessToken?: string | null;

      startAfterTransactionId?: string | null;
    }
  }

  export interface ConnectorRedditDiscriminatedConnectionSettings {
    connector_name: 'reddit';

    settings: ConnectorRedditDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorRedditDiscriminatedConnectionSettings {
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

  export interface ConnectorSalesloftDiscriminatedConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorSalesloftDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorSalesloftDiscriminatedConnectionSettings {
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

  export interface ConnectorSaltedgeDiscriminatedConnectionSettings {
    connector_name: 'saltedge';

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export interface ConnectorSplitwiseDiscriminatedConnectionSettings {
    connector_name: 'splitwise';

    settings: ConnectorSplitwiseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    connector_config_id?: string;

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

    connector_config_id?: string;

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

    connector_config_id?: string;

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

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorTwentyDiscriminatedConnectionSettings {
    export interface Settings {
      access_token: string;
    }
  }

  export interface ConnectorTwitterDiscriminatedConnectionSettings {
    connector_name: 'twitter';

    settings: ConnectorTwitterDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorTwitterDiscriminatedConnectionSettings {
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

  export interface ConnectorVenmoDiscriminatedConnectionSettings {
    connector_name: 'venmo';

    settings: ConnectorVenmoDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorWiseDiscriminatedConnectionSettings {
    export interface Settings {
      envName: 'sandbox' | 'live';

      apiToken?: string | null;
    }
  }

  export interface ConnectorXeroDiscriminatedConnectionSettings {
    connector_name: 'xero';

    settings: ConnectorXeroDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorXeroDiscriminatedConnectionSettings {
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

  export interface ConnectorYodleeDiscriminatedConnectionSettings {
    connector_name: 'yodlee';

    settings: ConnectorYodleeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

  export interface ConnectorZohodeskDiscriminatedConnectionSettings {
    connector_name: 'zohodesk';

    settings: ConnectorZohodeskDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorZohodeskDiscriminatedConnectionSettings {
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
  | GetConnectionResponse.ConnectorDummyOauth2DiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorSharepointonlineDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorSlackDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGitHubDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorQuickbooksDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGooglemailDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorNotionDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorLinkedinDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGoogledocsDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorAircallDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGooglecalendarDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGooglesheetDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorDiscordDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorHubspotDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorSalesforceDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorLinearDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorConfluenceDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGoogledriveDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorAirtableDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorApolloDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorBrexDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorCodaDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorFacebookDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorFinchDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorFirebaseDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorForeceiptDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGongDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorGreenhouseDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorHeronDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorInstagramDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorIntercomDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorJiraDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorKustomerDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorLeverDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorLunchmoneyDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorMercuryDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorMergeDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorMicrosoftDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorMootaDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorOnebrickDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorOutreachDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorPipedriveDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorPlaidDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorPostgresDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorRampDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorRedditDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorSalesloftDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorSaltedgeDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorSplitwiseDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorStripeDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorTellerDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorTogglDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorTwentyDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorTwitterDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorVenmoDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorWiseDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorXeroDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorYodleeDiscriminatedConnectionSettings
  | GetConnectionResponse.ConnectorZohodeskDiscriminatedConnectionSettings;

export namespace GetConnectionResponse {
  export interface ConnectorDummyOauth2DiscriminatedConnectionSettings {
    connector_name: 'dummy-oauth2';

    settings: ConnectorDummyOauth2DiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorDummyOauth2DiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorDummyOauth2DiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorSharepointonlineDiscriminatedConnectionSettings {
    connector_name: 'sharepointonline';

    settings: ConnectorSharepointonlineDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSharepointonlineDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorSharepointonlineDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorSlackDiscriminatedConnectionSettings {
    connector_name: 'slack';

    settings: ConnectorSlackDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSlackDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorGitHubDiscriminatedConnectionSettings {
    connector_name: 'github';

    settings: ConnectorGitHubDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGitHubDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorQuickbooksDiscriminatedConnectionSettings {
    connector_name: 'quickbooks';

    settings: ConnectorQuickbooksDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorQuickbooksDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorGooglemailDiscriminatedConnectionSettings {
    connector_name: 'googlemail';

    settings: ConnectorGooglemailDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGooglemailDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGooglemailDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorNotionDiscriminatedConnectionSettings {
    connector_name: 'notion';

    settings: ConnectorNotionDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorNotionDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorLinkedinDiscriminatedConnectionSettings {
    connector_name: 'linkedin';

    settings: ConnectorLinkedinDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorLinkedinDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorGoogledocsDiscriminatedConnectionSettings {
    connector_name: 'googledocs';

    settings: ConnectorGoogledocsDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogledocsDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGoogledocsDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorAircallDiscriminatedConnectionSettings {
    connector_name: 'aircall';

    settings: ConnectorAircallDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorAircallDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorGooglecalendarDiscriminatedConnectionSettings {
    connector_name: 'googlecalendar';

    settings: ConnectorGooglecalendarDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGooglecalendarDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGooglecalendarDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorGooglesheetDiscriminatedConnectionSettings {
    connector_name: 'googlesheet';

    settings: ConnectorGooglesheetDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGooglesheetDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGooglesheetDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorDiscordDiscriminatedConnectionSettings {
    connector_name: 'discord';

    settings: ConnectorDiscordDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorDiscordDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorHubspotDiscriminatedConnectionSettings {
    connector_name: 'hubspot';

    settings: ConnectorHubspotDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorHubspotDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorSalesforceDiscriminatedConnectionSettings {
    connector_name: 'salesforce';

    settings: ConnectorSalesforceDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSalesforceDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorSalesforceDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The instance URL of your Salesforce account (e.g., example)
       */
      instance_url: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorLinearDiscriminatedConnectionSettings {
    connector_name: 'linear';

    settings: ConnectorLinearDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorLinearDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorConfluenceDiscriminatedConnectionSettings {
    connector_name: 'confluence';

    settings: ConnectorConfluenceDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorConfluenceDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorGoogledriveDiscriminatedConnectionSettings {
    connector_name: 'googledrive';

    settings: ConnectorGoogledriveDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogledriveDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGoogledriveDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorAirtableDiscriminatedConnectionSettings {
    connector_name: 'airtable';

    settings: ConnectorAirtableDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorAirtableDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorApolloDiscriminatedConnectionSettings {
    connector_name: 'apollo';

    settings: ConnectorApolloDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorApolloDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorApolloDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorBrexDiscriminatedConnectionSettings {
    connector_name: 'brex';

    settings: ConnectorBrexDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorBrexDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorCodaDiscriminatedConnectionSettings {
    connector_name: 'coda';

    settings: ConnectorCodaDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorCodaDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorFacebookDiscriminatedConnectionSettings {
    connector_name: 'facebook';

    settings: ConnectorFacebookDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorFacebookDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorFacebookDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorFinchDiscriminatedConnectionSettings {
    connector_name: 'finch';

    settings: ConnectorFinchDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorFinchDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorFirebaseDiscriminatedConnectionSettings {
    connector_name: 'firebase';

    settings:
      | ConnectorFirebaseDiscriminatedConnectionSettings.UnionMember0
      | ConnectorFirebaseDiscriminatedConnectionSettings.UnionMember1;

    id?: string;

    connector?: ConnectorFirebaseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorForeceiptDiscriminatedConnectionSettings {
    connector_name: 'foreceipt';

    settings: ConnectorForeceiptDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorForeceiptDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorGongDiscriminatedConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorGongDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGongDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGongDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorGreenhouseDiscriminatedConnectionSettings {
    connector_name: 'greenhouse';

    settings: ConnectorGreenhouseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGreenhouseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorHeronDiscriminatedConnectionSettings {
    connector_name: 'heron';

    settings: unknown;

    id?: string;

    connector?: ConnectorHeronDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorInstagramDiscriminatedConnectionSettings {
    connector_name: 'instagram';

    settings: ConnectorInstagramDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorInstagramDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorInstagramDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorIntercomDiscriminatedConnectionSettings {
    connector_name: 'intercom';

    settings: ConnectorIntercomDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorIntercomDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorIntercomDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorJiraDiscriminatedConnectionSettings {
    connector_name: 'jira';

    settings: ConnectorJiraDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorJiraDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorJiraDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorKustomerDiscriminatedConnectionSettings {
    connector_name: 'kustomer';

    settings: ConnectorKustomerDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorKustomerDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorKustomerDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorLeverDiscriminatedConnectionSettings {
    connector_name: 'lever';

    settings: ConnectorLeverDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorLeverDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorLeverDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorLunchmoneyDiscriminatedConnectionSettings {
    connector_name: 'lunchmoney';

    settings: unknown;

    id?: string;

    connector?: ConnectorLunchmoneyDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorMercuryDiscriminatedConnectionSettings {
    connector_name: 'mercury';

    settings: unknown;

    id?: string;

    connector?: ConnectorMercuryDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorMergeDiscriminatedConnectionSettings {
    connector_name: 'merge';

    settings: ConnectorMergeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorMergeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorMicrosoftDiscriminatedConnectionSettings {
    connector_name: 'microsoft';

    settings: ConnectorMicrosoftDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorMicrosoftDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorMicrosoftDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorMootaDiscriminatedConnectionSettings {
    connector_name: 'moota';

    settings: unknown;

    id?: string;

    connector?: ConnectorMootaDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorOnebrickDiscriminatedConnectionSettings {
    connector_name: 'onebrick';

    settings: ConnectorOnebrickDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorOnebrickDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorOutreachDiscriminatedConnectionSettings {
    connector_name: 'outreach';

    settings: ConnectorOutreachDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorOutreachDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorOutreachDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorPipedriveDiscriminatedConnectionSettings {
    connector_name: 'pipedrive';

    settings: ConnectorPipedriveDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorPipedriveDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorPipedriveDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorPlaidDiscriminatedConnectionSettings {
    connector_name: 'plaid';

    settings: ConnectorPlaidDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorPlaidDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorPostgresDiscriminatedConnectionSettings {
    connector_name: 'postgres';

    settings: ConnectorPostgresDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorPostgresDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorPostgresDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorRampDiscriminatedConnectionSettings {
    connector_name: 'ramp';

    settings: ConnectorRampDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorRampDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorRedditDiscriminatedConnectionSettings {
    connector_name: 'reddit';

    settings: ConnectorRedditDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorRedditDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorRedditDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorSalesloftDiscriminatedConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorSalesloftDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSalesloftDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorSalesloftDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorSaltedgeDiscriminatedConnectionSettings {
    connector_name: 'saltedge';

    id?: string;

    connector?: ConnectorSaltedgeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorSplitwiseDiscriminatedConnectionSettings {
    connector_name: 'splitwise';

    settings: ConnectorSplitwiseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSplitwiseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorStripeDiscriminatedConnectionSettings {
    connector_name: 'stripe';

    settings: ConnectorStripeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorStripeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorTellerDiscriminatedConnectionSettings {
    connector_name: 'teller';

    settings: ConnectorTellerDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTellerDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorTogglDiscriminatedConnectionSettings {
    connector_name: 'toggl';

    settings: ConnectorTogglDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTogglDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorTwentyDiscriminatedConnectionSettings {
    connector_name: 'twenty';

    settings: ConnectorTwentyDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTwentyDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorTwitterDiscriminatedConnectionSettings {
    connector_name: 'twitter';

    settings: ConnectorTwitterDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTwitterDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorTwitterDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorVenmoDiscriminatedConnectionSettings {
    connector_name: 'venmo';

    settings: ConnectorVenmoDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorVenmoDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorWiseDiscriminatedConnectionSettings {
    connector_name: 'wise';

    settings: ConnectorWiseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorWiseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorXeroDiscriminatedConnectionSettings {
    connector_name: 'xero';

    settings: ConnectorXeroDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorXeroDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorXeroDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorYodleeDiscriminatedConnectionSettings {
    connector_name: 'yodlee';

    settings: ConnectorYodleeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorYodleeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorZohodeskDiscriminatedConnectionSettings {
    connector_name: 'zohodesk';

    settings: ConnectorZohodeskDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorZohodeskDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorZohodeskDiscriminatedConnectionSettings {
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
  }
}

export interface GetCurrentUserResponse {
  role: 'anon' | 'customer' | 'user' | 'org' | 'system';

  [k: string]: unknown;
}

export type ListConnectionConfigsResponse =
  | ListConnectionConfigsResponse.ConnectorDummyOauth2DiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorSharepointonlineDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorSlackDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGitHubDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorQuickbooksDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGooglemailDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorNotionDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorLinkedinDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGoogledocsDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorAircallDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGooglecalendarDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGooglesheetDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorDiscordDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorHubspotDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorSalesforceDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorLinearDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorConfluenceDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGoogledriveDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorAirtableDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorApolloDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorBrexDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorCodaDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorFacebookDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorFinchDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorFirebaseDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorForeceiptDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGongDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorGreenhouseDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorHeronDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorInstagramDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorIntercomDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorJiraDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorKustomerDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorLeverDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorLunchmoneyDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorMercuryDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorMergeDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorMicrosoftDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorMootaDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorOnebrickDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorOutreachDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorPipedriveDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorPlaidDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorPostgresDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorRampDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorRedditDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorSalesloftDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorSaltedgeDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorSplitwiseDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorStripeDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorTellerDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorTogglDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorTwentyDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorTwitterDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorVenmoDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorWiseDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorXeroDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorYodleeDiscriminatedConnectorConfig
  | ListConnectionConfigsResponse.ConnectorZohodeskDiscriminatedConnectorConfig;

export namespace ListConnectionConfigsResponse {
  export interface ConnectorDummyOauth2DiscriminatedConnectorConfig {
    config: ConnectorDummyOauth2DiscriminatedConnectorConfig.Config;

    connector_name: 'dummy-oauth2';

    id?: string;

    connection_count?: number;

    connector?: ConnectorDummyOauth2DiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorDummyOauth2DiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorDummyOauth2DiscriminatedConnectorConfig {
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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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

  export interface ConnectorSharepointonlineDiscriminatedConnectorConfig {
    config: ConnectorSharepointonlineDiscriminatedConnectorConfig.Config;

    connector_name: 'sharepointonline';

    id?: string;

    connection_count?: number;

    connector?: ConnectorSharepointonlineDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorSharepointonlineDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSharepointonlineDiscriminatedConnectorConfig {
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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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

  export interface ConnectorGooglemailDiscriminatedConnectorConfig {
    config: ConnectorGooglemailDiscriminatedConnectorConfig.Config;

    connector_name: 'googlemail';

    id?: string;

    connection_count?: number;

    connector?: ConnectorGooglemailDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorGooglemailDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGooglemailDiscriminatedConnectorConfig {
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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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

  export interface ConnectorGoogledocsDiscriminatedConnectorConfig {
    config: ConnectorGoogledocsDiscriminatedConnectorConfig.Config;

    connector_name: 'googledocs';

    id?: string;

    connection_count?: number;

    connector?: ConnectorGoogledocsDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorGoogledocsDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogledocsDiscriminatedConnectorConfig {
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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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

  export interface ConnectorGooglecalendarDiscriminatedConnectorConfig {
    config: ConnectorGooglecalendarDiscriminatedConnectorConfig.Config;

    connector_name: 'googlecalendar';

    id?: string;

    connection_count?: number;

    connector?: ConnectorGooglecalendarDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorGooglecalendarDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGooglecalendarDiscriminatedConnectorConfig {
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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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

  export interface ConnectorGooglesheetDiscriminatedConnectorConfig {
    config: ConnectorGooglesheetDiscriminatedConnectorConfig.Config;

    connector_name: 'googlesheet';

    id?: string;

    connection_count?: number;

    connector?: ConnectorGooglesheetDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorGooglesheetDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGooglesheetDiscriminatedConnectorConfig {
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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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

  export interface ConnectorSalesforceDiscriminatedConnectorConfig {
    config: ConnectorSalesforceDiscriminatedConnectorConfig.Config;

    connector_name: 'salesforce';

    id?: string;

    connection_count?: number;

    connector?: ConnectorSalesforceDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorSalesforceDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorSalesforceDiscriminatedConnectorConfig {
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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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

  export interface ConnectorGoogledriveDiscriminatedConnectorConfig {
    config: ConnectorGoogledriveDiscriminatedConnectorConfig.Config;

    connector_name: 'googledrive';

    id?: string;

    connection_count?: number;

    connector?: ConnectorGoogledriveDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorGoogledriveDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorGoogledriveDiscriminatedConnectorConfig {
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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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

  export interface ConnectorKustomerDiscriminatedConnectorConfig {
    config: ConnectorKustomerDiscriminatedConnectorConfig.Config;

    connector_name: 'kustomer';

    id?: string;

    connection_count?: number;

    connector?: ConnectorKustomerDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorKustomerDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorKustomerDiscriminatedConnectorConfig {
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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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

  export interface ConnectorMicrosoftDiscriminatedConnectorConfig {
    config: ConnectorMicrosoftDiscriminatedConnectorConfig.Config;

    connector_name: 'microsoft';

    id?: string;

    connection_count?: number;

    connector?: ConnectorMicrosoftDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorMicrosoftDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorMicrosoftDiscriminatedConnectorConfig {
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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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

  export interface ConnectorZohodeskDiscriminatedConnectorConfig {
    config: ConnectorZohodeskDiscriminatedConnectorConfig.Config;

    connector_name: 'zohodesk';

    id?: string;

    connection_count?: number;

    connector?: ConnectorZohodeskDiscriminatedConnectorConfig.Connector;

    created_at?: string;

    disabled?: boolean | null;

    display_name?: string | null;

    integrations?: Record<string, ConnectorZohodeskDiscriminatedConnectorConfig.Integrations>;

    /**
     * JSON object can can be used to associate arbitrary metadata to avoid needing a
     * separate 1-1 table just for simple key values in your application. During
     * updates this object will be shallowly merged
     */
    metadata?: Record<string, unknown> | null;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorZohodeskDiscriminatedConnectorConfig {
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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
  | ListConnectionsResponse.ConnectorDummyOauth2DiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorSharepointonlineDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorSlackDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGitHubDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorQuickbooksDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGooglemailDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorNotionDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorLinkedinDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGoogledocsDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorAircallDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGooglecalendarDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGooglesheetDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorDiscordDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorHubspotDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorSalesforceDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorLinearDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorConfluenceDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGoogledriveDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorAirtableDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorApolloDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorBrexDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorCodaDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorFacebookDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorFinchDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorFirebaseDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorForeceiptDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGongDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorGreenhouseDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorHeronDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorInstagramDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorIntercomDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorJiraDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorKustomerDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorLeverDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorLunchmoneyDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorMercuryDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorMergeDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorMicrosoftDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorMootaDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorOnebrickDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorOutreachDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorPipedriveDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorPlaidDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorPostgresDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorRampDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorRedditDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorSalesloftDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorSaltedgeDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorSplitwiseDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorStripeDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorTellerDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorTogglDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorTwentyDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorTwitterDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorVenmoDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorWiseDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorXeroDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorYodleeDiscriminatedConnectionSettings
  | ListConnectionsResponse.ConnectorZohodeskDiscriminatedConnectionSettings;

export namespace ListConnectionsResponse {
  export interface ConnectorDummyOauth2DiscriminatedConnectionSettings {
    connector_name: 'dummy-oauth2';

    settings: ConnectorDummyOauth2DiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorDummyOauth2DiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorDummyOauth2DiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorSharepointonlineDiscriminatedConnectionSettings {
    connector_name: 'sharepointonline';

    settings: ConnectorSharepointonlineDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSharepointonlineDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorSharepointonlineDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorSlackDiscriminatedConnectionSettings {
    connector_name: 'slack';

    settings: ConnectorSlackDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSlackDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorGitHubDiscriminatedConnectionSettings {
    connector_name: 'github';

    settings: ConnectorGitHubDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGitHubDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorQuickbooksDiscriminatedConnectionSettings {
    connector_name: 'quickbooks';

    settings: ConnectorQuickbooksDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorQuickbooksDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorGooglemailDiscriminatedConnectionSettings {
    connector_name: 'googlemail';

    settings: ConnectorGooglemailDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGooglemailDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGooglemailDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorNotionDiscriminatedConnectionSettings {
    connector_name: 'notion';

    settings: ConnectorNotionDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorNotionDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorLinkedinDiscriminatedConnectionSettings {
    connector_name: 'linkedin';

    settings: ConnectorLinkedinDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorLinkedinDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorGoogledocsDiscriminatedConnectionSettings {
    connector_name: 'googledocs';

    settings: ConnectorGoogledocsDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogledocsDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGoogledocsDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorAircallDiscriminatedConnectionSettings {
    connector_name: 'aircall';

    settings: ConnectorAircallDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorAircallDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorGooglecalendarDiscriminatedConnectionSettings {
    connector_name: 'googlecalendar';

    settings: ConnectorGooglecalendarDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGooglecalendarDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGooglecalendarDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorGooglesheetDiscriminatedConnectionSettings {
    connector_name: 'googlesheet';

    settings: ConnectorGooglesheetDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGooglesheetDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGooglesheetDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorDiscordDiscriminatedConnectionSettings {
    connector_name: 'discord';

    settings: ConnectorDiscordDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorDiscordDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorHubspotDiscriminatedConnectionSettings {
    connector_name: 'hubspot';

    settings: ConnectorHubspotDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorHubspotDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorSalesforceDiscriminatedConnectionSettings {
    connector_name: 'salesforce';

    settings: ConnectorSalesforceDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSalesforceDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorSalesforceDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The instance URL of your Salesforce account (e.g., example)
       */
      instance_url: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorLinearDiscriminatedConnectionSettings {
    connector_name: 'linear';

    settings: ConnectorLinearDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorLinearDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorConfluenceDiscriminatedConnectionSettings {
    connector_name: 'confluence';

    settings: ConnectorConfluenceDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorConfluenceDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorGoogledriveDiscriminatedConnectionSettings {
    connector_name: 'googledrive';

    settings: ConnectorGoogledriveDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGoogledriveDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGoogledriveDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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
  }

  export interface ConnectorAirtableDiscriminatedConnectionSettings {
    connector_name: 'airtable';

    settings: ConnectorAirtableDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorAirtableDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorApolloDiscriminatedConnectionSettings {
    connector_name: 'apollo';

    settings: ConnectorApolloDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorApolloDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorApolloDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorBrexDiscriminatedConnectionSettings {
    connector_name: 'brex';

    settings: ConnectorBrexDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorBrexDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorCodaDiscriminatedConnectionSettings {
    connector_name: 'coda';

    settings: ConnectorCodaDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorCodaDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorFacebookDiscriminatedConnectionSettings {
    connector_name: 'facebook';

    settings: ConnectorFacebookDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorFacebookDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorFacebookDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorFinchDiscriminatedConnectionSettings {
    connector_name: 'finch';

    settings: ConnectorFinchDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorFinchDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorFirebaseDiscriminatedConnectionSettings {
    connector_name: 'firebase';

    settings:
      | ConnectorFirebaseDiscriminatedConnectionSettings.UnionMember0
      | ConnectorFirebaseDiscriminatedConnectionSettings.UnionMember1;

    id?: string;

    connector?: ConnectorFirebaseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorForeceiptDiscriminatedConnectionSettings {
    connector_name: 'foreceipt';

    settings: ConnectorForeceiptDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorForeceiptDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorGongDiscriminatedConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorGongDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGongDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorGongDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorGreenhouseDiscriminatedConnectionSettings {
    connector_name: 'greenhouse';

    settings: ConnectorGreenhouseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorGreenhouseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorHeronDiscriminatedConnectionSettings {
    connector_name: 'heron';

    settings: unknown;

    id?: string;

    connector?: ConnectorHeronDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorInstagramDiscriminatedConnectionSettings {
    connector_name: 'instagram';

    settings: ConnectorInstagramDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorInstagramDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorInstagramDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorIntercomDiscriminatedConnectionSettings {
    connector_name: 'intercom';

    settings: ConnectorIntercomDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorIntercomDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorIntercomDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorJiraDiscriminatedConnectionSettings {
    connector_name: 'jira';

    settings: ConnectorJiraDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorJiraDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorJiraDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorKustomerDiscriminatedConnectionSettings {
    connector_name: 'kustomer';

    settings: ConnectorKustomerDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorKustomerDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorKustomerDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorLeverDiscriminatedConnectionSettings {
    connector_name: 'lever';

    settings: ConnectorLeverDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorLeverDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorLeverDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorLunchmoneyDiscriminatedConnectionSettings {
    connector_name: 'lunchmoney';

    settings: unknown;

    id?: string;

    connector?: ConnectorLunchmoneyDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorMercuryDiscriminatedConnectionSettings {
    connector_name: 'mercury';

    settings: unknown;

    id?: string;

    connector?: ConnectorMercuryDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorMergeDiscriminatedConnectionSettings {
    connector_name: 'merge';

    settings: ConnectorMergeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorMergeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorMicrosoftDiscriminatedConnectionSettings {
    connector_name: 'microsoft';

    settings: ConnectorMicrosoftDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorMicrosoftDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorMicrosoftDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorMootaDiscriminatedConnectionSettings {
    connector_name: 'moota';

    settings: unknown;

    id?: string;

    connector?: ConnectorMootaDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorOnebrickDiscriminatedConnectionSettings {
    connector_name: 'onebrick';

    settings: ConnectorOnebrickDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorOnebrickDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorOutreachDiscriminatedConnectionSettings {
    connector_name: 'outreach';

    settings: ConnectorOutreachDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorOutreachDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorOutreachDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorPipedriveDiscriminatedConnectionSettings {
    connector_name: 'pipedrive';

    settings: ConnectorPipedriveDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorPipedriveDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorPipedriveDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorPlaidDiscriminatedConnectionSettings {
    connector_name: 'plaid';

    settings: ConnectorPlaidDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorPlaidDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorPostgresDiscriminatedConnectionSettings {
    connector_name: 'postgres';

    settings: ConnectorPostgresDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorPostgresDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorPostgresDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorRampDiscriminatedConnectionSettings {
    connector_name: 'ramp';

    settings: ConnectorRampDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorRampDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorRedditDiscriminatedConnectionSettings {
    connector_name: 'reddit';

    settings: ConnectorRedditDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorRedditDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorRedditDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorSalesloftDiscriminatedConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorSalesloftDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSalesloftDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorSalesloftDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorSaltedgeDiscriminatedConnectionSettings {
    connector_name: 'saltedge';

    id?: string;

    connector?: ConnectorSaltedgeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorSplitwiseDiscriminatedConnectionSettings {
    connector_name: 'splitwise';

    settings: ConnectorSplitwiseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorSplitwiseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorStripeDiscriminatedConnectionSettings {
    connector_name: 'stripe';

    settings: ConnectorStripeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorStripeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorTellerDiscriminatedConnectionSettings {
    connector_name: 'teller';

    settings: ConnectorTellerDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTellerDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorTogglDiscriminatedConnectionSettings {
    connector_name: 'toggl';

    settings: ConnectorTogglDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTogglDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorTwentyDiscriminatedConnectionSettings {
    connector_name: 'twenty';

    settings: ConnectorTwentyDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTwentyDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorTwitterDiscriminatedConnectionSettings {
    connector_name: 'twitter';

    settings: ConnectorTwitterDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorTwitterDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorTwitterDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorVenmoDiscriminatedConnectionSettings {
    connector_name: 'venmo';

    settings: ConnectorVenmoDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorVenmoDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorWiseDiscriminatedConnectionSettings {
    connector_name: 'wise';

    settings: ConnectorWiseDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorWiseDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorXeroDiscriminatedConnectionSettings {
    connector_name: 'xero';

    settings: ConnectorXeroDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorXeroDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorXeroDiscriminatedConnectionSettings {
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
  }

  export interface ConnectorYodleeDiscriminatedConnectionSettings {
    connector_name: 'yodlee';

    settings: ConnectorYodleeDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorYodleeDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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
  }

  export interface ConnectorZohodeskDiscriminatedConnectionSettings {
    connector_name: 'zohodesk';

    settings: ConnectorZohodeskDiscriminatedConnectionSettings.Settings;

    id?: string;

    connector?: ConnectorZohodeskDiscriminatedConnectionSettings.Connector;

    connector_config_id?: string;

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

    updated_at?: string;
  }

  export namespace ConnectorZohodeskDiscriminatedConnectionSettings {
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
        | 'aircall'
        | 'airtable'
        | 'apollo'
        | 'brex'
        | 'coda'
        | 'confluence'
        | 'discord'
        | 'dummy-oauth2'
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
        | 'mercury'
        | 'merge'
        | 'microsoft'
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
        | 'venmo'
        | 'wise'
        | 'xero'
        | 'yodlee'
        | 'zohodesk';

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
    | CreateConnectionParams.ConnectorDummyOauth2DiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSharepointonlineDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSlackDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGitHubDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorQuickbooksDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGooglemailDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorNotionDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorLinkedinDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGoogledocsDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorAircallDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGooglecalendarDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGooglesheetDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorDiscordDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorHubspotDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSalesforceDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorLinearDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorConfluenceDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGoogledriveDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorAirtableDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorApolloDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorBrexDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorCodaDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorFacebookDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorFinchDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorFirebaseDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorForeceiptDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGongDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorGreenhouseDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorHeronDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorInstagramDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorIntercomDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorJiraDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorKustomerDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorLeverDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorLunchmoneyDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorMercuryDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorMergeDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorMicrosoftDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorMootaDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorOnebrickDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorOutreachDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorPipedriveDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorPlaidDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorPostgresDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorRampDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorRedditDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSalesloftDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSaltedgeDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorSplitwiseDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorStripeDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorTellerDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorTogglDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorTwentyDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorTwitterDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorVenmoDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorWiseDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorXeroDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorYodleeDiscriminatedConnectionSettings
    | CreateConnectionParams.ConnectorZohodeskDiscriminatedConnectionSettings;

  metadata?: Record<string, unknown>;
}

export namespace CreateConnectionParams {
  export interface ConnectorDummyOauth2DiscriminatedConnectionSettings {
    connector_name: 'dummy-oauth2';

    settings: ConnectorDummyOauth2DiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorDummyOauth2DiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorSharepointonlineDiscriminatedConnectionSettings {
    connector_name: 'sharepointonline';

    settings: ConnectorSharepointonlineDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSharepointonlineDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

          /**
           * Client ID used for the connection
           */
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

          /**
           * Client ID used for the connection
           */
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorGooglemailDiscriminatedConnectionSettings {
    connector_name: 'googlemail';

    settings: ConnectorGooglemailDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGooglemailDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

          /**
           * Client ID used for the connection
           */
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorGoogledocsDiscriminatedConnectionSettings {
    connector_name: 'googledocs';

    settings: ConnectorGoogledocsDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGoogledocsDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorGooglecalendarDiscriminatedConnectionSettings {
    connector_name: 'googlecalendar';

    settings: ConnectorGooglecalendarDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGooglecalendarDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorGooglesheetDiscriminatedConnectionSettings {
    connector_name: 'googlesheet';

    settings: ConnectorGooglesheetDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGooglesheetDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

          /**
           * Client ID used for the connection
           */
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorSalesforceDiscriminatedConnectionSettings {
    connector_name: 'salesforce';

    settings: ConnectorSalesforceDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSalesforceDiscriminatedConnectionSettings {
    export interface Settings {
      /**
       * The instance URL of your Salesforce account (e.g., example)
       */
      instance_url: string;

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

          /**
           * Client ID used for the connection
           */
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

          /**
           * Client ID used for the connection
           */
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorGoogledriveDiscriminatedConnectionSettings {
    connector_name: 'googledrive';

    settings: ConnectorGoogledriveDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGoogledriveDiscriminatedConnectionSettings {
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

          /**
           * Client ID used for the connection
           */
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

  export interface ConnectorFacebookDiscriminatedConnectionSettings {
    connector_name: 'facebook';

    settings: ConnectorFacebookDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorFacebookDiscriminatedConnectionSettings {
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

  export interface ConnectorGongDiscriminatedConnectionSettings {
    connector_name: 'gong';

    settings: ConnectorGongDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorGongDiscriminatedConnectionSettings {
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

  export interface ConnectorInstagramDiscriminatedConnectionSettings {
    connector_name: 'instagram';

    settings: ConnectorInstagramDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorInstagramDiscriminatedConnectionSettings {
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

  export interface ConnectorIntercomDiscriminatedConnectionSettings {
    connector_name: 'intercom';

    settings: ConnectorIntercomDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorIntercomDiscriminatedConnectionSettings {
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

  export interface ConnectorJiraDiscriminatedConnectionSettings {
    connector_name: 'jira';

    settings: ConnectorJiraDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorJiraDiscriminatedConnectionSettings {
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

  export interface ConnectorKustomerDiscriminatedConnectionSettings {
    connector_name: 'kustomer';

    settings: ConnectorKustomerDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorKustomerDiscriminatedConnectionSettings {
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

  export interface ConnectorLeverDiscriminatedConnectionSettings {
    connector_name: 'lever';

    settings: ConnectorLeverDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorLeverDiscriminatedConnectionSettings {
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

  export interface ConnectorMicrosoftDiscriminatedConnectionSettings {
    connector_name: 'microsoft';

    settings: ConnectorMicrosoftDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorMicrosoftDiscriminatedConnectionSettings {
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

  export interface ConnectorOutreachDiscriminatedConnectionSettings {
    connector_name: 'outreach';

    settings: ConnectorOutreachDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorOutreachDiscriminatedConnectionSettings {
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

  export interface ConnectorPipedriveDiscriminatedConnectionSettings {
    connector_name: 'pipedrive';

    settings: ConnectorPipedriveDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorPipedriveDiscriminatedConnectionSettings {
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

  export interface ConnectorRedditDiscriminatedConnectionSettings {
    connector_name: 'reddit';

    settings: ConnectorRedditDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorRedditDiscriminatedConnectionSettings {
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

  export interface ConnectorSalesloftDiscriminatedConnectionSettings {
    connector_name: 'salesloft';

    settings: ConnectorSalesloftDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorSalesloftDiscriminatedConnectionSettings {
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

  export interface ConnectorTwitterDiscriminatedConnectionSettings {
    connector_name: 'twitter';

    settings: ConnectorTwitterDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorTwitterDiscriminatedConnectionSettings {
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

  export interface ConnectorXeroDiscriminatedConnectionSettings {
    connector_name: 'xero';

    settings: ConnectorXeroDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorXeroDiscriminatedConnectionSettings {
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

  export interface ConnectorZohodeskDiscriminatedConnectionSettings {
    connector_name: 'zohodesk';

    settings: ConnectorZohodeskDiscriminatedConnectionSettings.Settings;
  }

  export namespace ConnectorZohodeskDiscriminatedConnectionSettings {
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
    connector_name?:
      | 'aircall'
      | 'airtable'
      | 'apollo'
      | 'brex'
      | 'coda'
      | 'confluence'
      | 'discord'
      | 'dummy-oauth2'
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
      | 'mercury'
      | 'merge'
      | 'microsoft'
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
      | 'venmo'
      | 'wise'
      | 'xero'
      | 'yodlee'
      | 'zohodesk';

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
  connector_name?:
    | 'aircall'
    | 'airtable'
    | 'apollo'
    | 'brex'
    | 'coda'
    | 'confluence'
    | 'discord'
    | 'dummy-oauth2'
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
    | 'mercury'
    | 'merge'
    | 'microsoft'
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
    | 'venmo'
    | 'wise'
    | 'xero'
    | 'yodlee'
    | 'zohodesk';

  expand?: Array<'connector' | 'connector.schemas' | 'connection_count'>;

  limit?: number;
}

export interface ListConnectionsParams extends OffsetPaginationParams {
  /**
   * The id of the connector config, starts with `ccfg_`
   */
  connector_config_id?: string;

  connector_name?:
    | 'aircall'
    | 'airtable'
    | 'apollo'
    | 'brex'
    | 'coda'
    | 'confluence'
    | 'discord'
    | 'dummy-oauth2'
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
    | 'mercury'
    | 'merge'
    | 'microsoft'
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
    | 'venmo'
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
