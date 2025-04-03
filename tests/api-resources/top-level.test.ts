// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openint from '@openint/sdk';

const client = new Openint({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  // skipped: tests are disabled for the time being
  test.skip('checkConnection', async () => {
    const responsePromise = client.checkConnection('conn_');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createConnection: only required params', async () => {
    const responsePromise = client.createConnection({
      connector_config_id: 'ccfg_',
      customer_id: 'customer_id',
      data: {
        connector_name: 'aircall',
        settings: {
          oauth: {
            created_at: 'created_at',
            last_fetched_at: 'last_fetched_at',
            metadata: { foo: 'bar' },
            updated_at: 'updated_at',
          },
        },
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createConnection: required and optional params', async () => {
    const response = await client.createConnection({
      connector_config_id: 'ccfg_',
      customer_id: 'customer_id',
      data: {
        connector_name: 'aircall',
        settings: {
          oauth: {
            created_at: 'created_at',
            last_fetched_at: 'last_fetched_at',
            metadata: { foo: 'bar' },
            updated_at: 'updated_at',
            credentials: {
              access_token: 'access_token',
              client_id: 'client_id',
              raw: { foo: 'bar' },
              scope: 'scope',
              expires_at: 'expires_at',
              expires_in: 0,
              refresh_token: 'refresh_token',
              token_type: 'token_type',
            },
          },
        },
      },
      metadata: { foo: 'bar' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createMagicLink', async () => {
    const responsePromise = client.createMagicLink('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createMagicLink: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.createMagicLink(
        'x',
        {
          client_options: {
            '--background': '--background',
            '--card': '--card',
            '--card-foreground': '--card-foreground',
            '--foreground': '--foreground',
            '--primary': '--primary',
            connector_name: 'plaid',
            debug: true,
            view: 'add',
          },
          validity_in_seconds: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('createToken', async () => {
    const responsePromise = client.createToken('customer_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createToken: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.createToken('customer_id', { validity_in_seconds: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteConnection', async () => {
    const responsePromise = client.deleteConnection('conn_');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getConnection', async () => {
    const responsePromise = client.getConnection('conn_');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getConnection: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.getConnection(
        'conn_',
        { expand: ['connector'], include_secrets: 'none', refresh_policy: 'none' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getCurrentUser', async () => {
    const responsePromise = client.getCurrentUser();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listConnectionConfigs', async () => {
    const responsePromise = client.listConnectionConfigs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listConnectionConfigs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.listConnectionConfigs(
        { connector_name: 'aircall', expand: 'expand', limit: 0, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listConnections', async () => {
    const responsePromise = client.listConnections();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listConnections: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.listConnections(
        {
          connector_config_id: 'ccfg_',
          connector_name: 'aircall',
          customer_id: 'customer_id',
          expand: ['connector'],
          include_secrets: 'none',
          limit: 0,
          offset: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listConnectors', async () => {
    const responsePromise = client.listConnectors();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listConnectors: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.listConnectors({ expand: 'expand' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Openint.NotFoundError);
  });
});
