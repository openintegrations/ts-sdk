// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openint from '@openint/sdk';

const client = new Openint({
  token: 'My Token',
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
      data: { connector_name: 'accelo' },
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
        connector_name: 'accelo',
        settings: {
          oauth: {
            created_at: 'created_at',
            credentials: {
              access_token: 'access_token',
              client_id: 'client_id',
              expires_at: 'expires_at',
              expires_in: 0,
              raw: { foo: 'bar' },
              refresh_token: 'refresh_token',
              scope: 'scope',
              token_type: 'token_type',
            },
            last_fetched_at: 'last_fetched_at',
            metadata: { foo: 'bar' },
            updated_at: 'updated_at',
          },
          subdomain: 'https://26f1kl_-n-71.api.accelo.com',
          access_token: 'access_token',
        },
      },
      check_connection: true,
      metadata: { foo: 'bar' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createToken', async () => {
    const responsePromise = client.createToken('x', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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
        { expand: ['connector'], include_secrets: true, refresh_policy: 'none' },
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
  test.skip('getMessageTemplate: only required params', async () => {
    const responsePromise = client.getMessageTemplate({ customer_id: 'customer_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getMessageTemplate: required and optional params', async () => {
    const response = await client.getMessageTemplate({
      customer_id: 'customer_id',
      language: 'javascript',
      use_environment_variables: true,
    });
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
        {
          connector_names: ['accelo'],
          expand: ['connector'],
          limit: 0,
          offset: 0,
          search_query: 'search_query',
        },
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
          connector_names: ['accelo'],
          customer_id: 'customer_id',
          expand: ['connector'],
          include_secrets: true,
          limit: 0,
          offset: 0,
          refresh_policy: 'none',
          search_query: 'search_query',
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
      client.listConnectors(
        { expand: ['schemas'], limit: 0, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listEvents', async () => {
    const responsePromise = client.listEvents();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.listEvents(
        { limit: 0, offset: 0, search_query: 'search_query' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
  });
});
