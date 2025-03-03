// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class Health extends APIResource {
  check(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/health', options);
  }
}

export type HealthCheckResponse = string;

export declare namespace Health {
  export { type HealthCheckResponse as HealthCheckResponse };
}
