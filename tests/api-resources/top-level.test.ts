// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openint from '@openint/sdk';

const client = new Openint({
  apiKey: 'My API Key',
  customerToken: 'GENERATED_CUSTOMER_TOKEN',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  // skipped: tests are disabled for the time being
  test.skip('checkConnection', async () => {
    const responsePromise = client.checkConnection('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createMagicLink: only required params', async () => {
    const responsePromise = client.createMagicLink({ customer_id: 'x', email: 'dev@stainless.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createMagicLink: required and optional params', async () => {
    const response = await client.createMagicLink({
      customer_id: 'x',
      email: 'dev@stainless.com',
      connection_id: 'connection_id',
      connector_names: 'aircall',
      redirect_url: 'redirect_url',
      theme: 'light',
      validity_in_seconds: 0,
      view: 'manage',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createToken: only required params', async () => {
    const responsePromise = client.createToken({ customer_id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createToken: required and optional params', async () => {
    const response = await client.createToken({ customer_id: 'x', validity_in_seconds: 1 });
  });

  // skipped: tests are disabled for the time being
  test.skip('getConnection', async () => {
    const responsePromise = client.getConnection();
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
        {
          connector_config_id: 'connector_config_id',
          connector_name: 'aircall',
          customer_id: 'x',
          expand: ['connector'],
          include_secrets: 'none',
          limit: 1,
          offset: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
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
        { connector_name: 'aircall', expand: ['connector'], limit: 1, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listConnections', async () => {
    const responsePromise = client.listConnections('id');
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
        'id',
        { expand: ['connector'], include_secrets: 'none', refresh_policy: 'none' },
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
      client.listEvents({ limit: 1, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Openint.NotFoundError);
  });
});
