// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class ConnectorConfig extends APIResource {
  retrieve(options?: RequestOptions): APIPromise<ConnectorConfigRetrieveResponse> {
    return this._client.get('/connector-config', options);
  }
}

export interface ConnectorConfigRetrieveResponse {
  items: Array<
    | ConnectorConfigRetrieveResponse.ConnectorsAircallConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsAirtableConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsApolloConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsBeancountConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsBrexConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsCodaConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsConfluenceConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsDebugConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsDiscordConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsFinchConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsFirebaseConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsForeceiptConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsFsConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsGitHubConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsGongConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsGoogleConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsGreenhouseConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsHeronConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsHubspotConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsIntercomConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsJiraConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsKustomerConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsLeverConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsLinearConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsLunchmoneyConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsMercuryConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsMergeConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsMicrosoftConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsMongoDBConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsMootaConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsOnebrickConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsOutreachConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsPipedriveConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsPlaidConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsPostgresConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsQboConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsRampConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsRevertConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsSalesforceConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsSalesloftConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsSaltedgeConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsSlackConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsSplitwiseConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsSpreadsheetConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsStripeConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsTellerConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsTogglConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsTwentyConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsVenmoConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsWebhookConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsWiseConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsXeroConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsYodleeConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsZohodeskConnectorConfig
    | ConnectorConfigRetrieveResponse.ConnectorsGoogledriveConnectorConfig
  >;
}

export namespace ConnectorConfigRetrieveResponse {
  export interface ConnectorsAircallConnectorConfig {
    config: null;

    connector_name: 'aircall';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsAirtableConnectorConfig {
    config: null;

    connector_name: 'airtable';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsApolloConnectorConfig {
    config: null;

    connector_name: 'apollo';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsBeancountConnectorConfig {
    config: null;

    connector_name: 'beancount';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsBrexConnectorConfig {
    config: ConnectorsBrexConnectorConfig.Config;

    connector_name: 'brex';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsBrexConnectorConfig {
    export interface Config {
      apikeyAuth?: boolean;

      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      export interface OAuth {
        clientId: string;

        clientSecret: string;
      }
    }
  }

  export interface ConnectorsCodaConnectorConfig {
    config: null;

    connector_name: 'coda';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsConfluenceConnectorConfig {
    config: ConnectorsConfluenceConnectorConfig.Config;

    connector_name: 'confluence';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsDebugConnectorConfig {
    connector_name: 'debug';

    id?: string;

    config?: unknown;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsDiscordConnectorConfig {
    config: ConnectorsDiscordConnectorConfig.Config;

    connector_name: 'discord';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsFinchConnectorConfig {
    config: ConnectorsFinchConnectorConfig.Config;

    connector_name: 'finch';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsFinchConnectorConfig {
    export interface Config {
      client_id: string;

      client_secret: string;

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

      api_version?: string;
    }
  }

  export interface ConnectorsFirebaseConnectorConfig {
    config: null;

    connector_name: 'firebase';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsForeceiptConnectorConfig {
    config: null;

    connector_name: 'foreceipt';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsFsConnectorConfig {
    config: null;

    connector_name: 'fs';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsGitHubConnectorConfig {
    config: ConnectorsGitHubConnectorConfig.Config;

    connector_name: 'github';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsGongConnectorConfig {
    config: ConnectorsGongConnectorConfig.Config;

    connector_name: 'gong';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsGoogleConnectorConfig {
    config: ConnectorsGoogleConnectorConfig.Config;

    connector_name: 'google';

    id?: string;

    created_at?: string;

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

          scopes?: string;
        }

        export interface Docs {
          enabled?: boolean;

          scopes?: string;
        }

        export interface Drive {
          enabled?: boolean;

          scopes?: string;
        }

        export interface Gmail {
          enabled?: boolean;

          scopes?: string;
        }

        export interface Sheets {
          enabled?: boolean;

          scopes?: string;
        }

        export interface Slides {
          enabled?: boolean;

          scopes?: string;
        }
      }

      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }
  }

  export interface ConnectorsGreenhouseConnectorConfig {
    config: null;

    connector_name: 'greenhouse';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsHeronConnectorConfig {
    config: ConnectorsHeronConnectorConfig.Config;

    connector_name: 'heron';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsHeronConnectorConfig {
    export interface Config {
      apiKey: string;
    }
  }

  export interface ConnectorsHubspotConnectorConfig {
    config: ConnectorsHubspotConnectorConfig.Config;

    connector_name: 'hubspot';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsIntercomConnectorConfig {
    config: ConnectorsIntercomConnectorConfig.Config;

    connector_name: 'intercom';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsJiraConnectorConfig {
    config: ConnectorsJiraConnectorConfig.Config;

    connector_name: 'jira';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsKustomerConnectorConfig {
    config: ConnectorsKustomerConnectorConfig.Config;

    connector_name: 'kustomer';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsLeverConnectorConfig {
    config: ConnectorsLeverConnectorConfig.Config;

    connector_name: 'lever';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsLinearConnectorConfig {
    config: ConnectorsLinearConnectorConfig.Config;

    connector_name: 'linear';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsLunchmoneyConnectorConfig {
    config: ConnectorsLunchmoneyConnectorConfig.Config;

    connector_name: 'lunchmoney';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsLunchmoneyConnectorConfig {
    export interface Config {
      accessToken: string;
    }
  }

  export interface ConnectorsMercuryConnectorConfig {
    config: ConnectorsMercuryConnectorConfig.Config;

    connector_name: 'mercury';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsMercuryConnectorConfig {
    export interface Config {
      apikeyAuth?: boolean;

      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      export interface OAuth {
        clientId: string;

        clientSecret: string;
      }
    }
  }

  export interface ConnectorsMergeConnectorConfig {
    config: ConnectorsMergeConnectorConfig.Config;

    connector_name: 'merge';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsMergeConnectorConfig {
    export interface Config {
      apiKey: string;
    }
  }

  export interface ConnectorsMicrosoftConnectorConfig {
    config: ConnectorsMicrosoftConnectorConfig.Config;

    connector_name: 'microsoft';

    id?: string;

    created_at?: string;

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

          scopes?: string;
        }

        export interface Sharepoint {
          enabled?: boolean;

          scopes?: string;
        }

        export interface Teams {
          enabled?: boolean;

          scopes?: string;
        }
      }

      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }
  }

  export interface ConnectorsMongoDBConnectorConfig {
    config: null;

    connector_name: 'mongodb';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsMootaConnectorConfig {
    config: ConnectorsMootaConnectorConfig.Config;

    connector_name: 'moota';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsMootaConnectorConfig {
    export interface Config {
      token: string;
    }
  }

  export interface ConnectorsOnebrickConnectorConfig {
    config: ConnectorsOnebrickConnectorConfig.Config;

    connector_name: 'onebrick';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsOutreachConnectorConfig {
    config: ConnectorsOutreachConnectorConfig.Config;

    connector_name: 'outreach';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsPipedriveConnectorConfig {
    config: ConnectorsPipedriveConnectorConfig.Config;

    connector_name: 'pipedrive';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsPlaidConnectorConfig {
    config: ConnectorsPlaidConnectorConfig.Config;

    connector_name: 'plaid';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsPlaidConnectorConfig {
    export interface Config {
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

  export interface ConnectorsPostgresConnectorConfig {
    config: null;

    connector_name: 'postgres';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsQboConnectorConfig {
    config: ConnectorsQboConnectorConfig.Config;

    connector_name: 'qbo';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsQboConnectorConfig {
    export interface Config {
      envName: 'sandbox' | 'production';

      oauth: Config.OAuth;

      url?: string | null;

      verifierToken?: string | null;
    }

    export namespace Config {
      export interface OAuth {
        client_id: string;

        client_secret: string;

        scopes?: string;
      }
    }
  }

  export interface ConnectorsRampConnectorConfig {
    config: ConnectorsRampConnectorConfig.Config;

    connector_name: 'ramp';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsRevertConnectorConfig {
    config: ConnectorsRevertConnectorConfig.Config;

    connector_name: 'revert';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsRevertConnectorConfig {
    export interface Config {
      api_token: string;

      api_version?: string;
    }
  }

  export interface ConnectorsSalesforceConnectorConfig {
    config: ConnectorsSalesforceConnectorConfig.Config;

    connector_name: 'salesforce';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsSalesloftConnectorConfig {
    config: ConnectorsSalesloftConnectorConfig.Config;

    connector_name: 'salesloft';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsSaltedgeConnectorConfig {
    config: ConnectorsSaltedgeConnectorConfig.Config;

    connector_name: 'saltedge';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSaltedgeConnectorConfig {
    export interface Config {
      appId: string;

      secret: string;

      url?: string | null;
    }
  }

  export interface ConnectorsSlackConnectorConfig {
    config: ConnectorsSlackConnectorConfig.Config;

    connector_name: 'slack';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsSplitwiseConnectorConfig {
    config: null;

    connector_name: 'splitwise';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsSpreadsheetConnectorConfig {
    connector_name: 'spreadsheet';

    id?: string;

    config?: ConnectorsSpreadsheetConnectorConfig.Config | null;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsSpreadsheetConnectorConfig {
    export interface Config {
      enabledPresets?: Array<
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
        | 'wise'
      > | null;

      sourceProviders?: Array<unknown> | null;
    }
  }

  export interface ConnectorsStripeConnectorConfig {
    config: ConnectorsStripeConnectorConfig.Config;

    connector_name: 'stripe';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsStripeConnectorConfig {
    export interface Config {
      apikeyAuth?: boolean;

      oauth?: Config.OAuth | null;
    }

    export namespace Config {
      export interface OAuth {
        clientId: string;

        clientSecret: string;
      }
    }
  }

  export interface ConnectorsTellerConnectorConfig {
    config: ConnectorsTellerConnectorConfig.Config;

    connector_name: 'teller';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsTellerConnectorConfig {
    export interface Config {
      applicationId: string;

      token?: string | null;
    }
  }

  export interface ConnectorsTogglConnectorConfig {
    config: null;

    connector_name: 'toggl';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsTwentyConnectorConfig {
    config: null;

    connector_name: 'twenty';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsVenmoConnectorConfig {
    config: ConnectorsVenmoConnectorConfig.Config;

    connector_name: 'venmo';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsWebhookConnectorConfig {
    config: null;

    connector_name: 'webhook';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsWiseConnectorConfig {
    config: null;

    connector_name: 'wise';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export interface ConnectorsXeroConnectorConfig {
    config: ConnectorsXeroConnectorConfig.Config;

    connector_name: 'xero';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsYodleeConnectorConfig {
    config: ConnectorsYodleeConnectorConfig.Config;

    connector_name: 'yodlee';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsZohodeskConnectorConfig {
    config: ConnectorsZohodeskConnectorConfig.Config;

    connector_name: 'zohodesk';

    id?: string;

    created_at?: string;

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
  }

  export interface ConnectorsGoogledriveConnectorConfig {
    config: ConnectorsGoogledriveConnectorConfig.Config;

    connector_name: 'googledrive';

    id?: string;

    created_at?: string;

    org_id?: string;

    updated_at?: string;
  }

  export namespace ConnectorsGoogledriveConnectorConfig {
    export interface Config {
      client_id: string;

      client_secret: string;

      scopes?: Array<string> | null;
    }
  }
}

export declare namespace ConnectorConfig {
  export { type ConnectorConfigRetrieveResponse as ConnectorConfigRetrieveResponse };
}
