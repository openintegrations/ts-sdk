// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openint from '@openint/sdk';

const client = new Openint({
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  // Prism tests are disabled
  test.skip('assignConnection: only required params', async () => {
    const responsePromise = client.assignConnection('repl_id', { id: 'conn_' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('assignConnection: required and optional params', async () => {
    const response = await client.assignConnection('repl_id', { id: 'conn_' });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('connectorRpc: only required params', async () => {
    const responsePromise = client.connectorRpc('function_name', {
      connector_config_id: 'ccfg_',
      input: { foo: 'bar' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('connectorRpc: required and optional params', async () => {
    const response = await client.connectorRpc('function_name', {
      connector_config_id: 'ccfg_',
      input: { foo: 'bar' },
    });
  });

  // Prism tests are disabled
  test.skip('createConnection: only required params', async () => {
    const responsePromise = client.createConnection({
      connector_config_id: 'ccfg_',
      data: { connector_name: 'acme-apikey' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createConnection: required and optional params', async () => {
    const response = await client.createConnection({
      connector_config_id: 'ccfg_',
      data: { connector_name: 'acme-apikey', settings: { api_key: 'api_key' } },
      check_connection: true,
      customer_id: 'customer_id',
      metadata: { foo: 'bar' },
    });
  });

  // Prism tests are disabled
  test.skip('createConnnectorConfig: only required params', async () => {
    const responsePromise = client.createConnnectorConfig({ connector_name: 'connector_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createConnnectorConfig: required and optional params', async () => {
    const response = await client.createConnnectorConfig({
      connector_name: 'connector_name',
      config: { foo: 'bar' },
      disabled: true,
      display_name: 'display_name',
      metadata: { foo: 'bar' },
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('deleteAssignment: only required params', async () => {
    const responsePromise = client.deleteAssignment('repl_id', { id: 'conn_' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteAssignment: required and optional params', async () => {
    const response = await client.deleteAssignment('repl_id', { id: 'conn_' });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('deleteConnectorConfig', async () => {
    const responsePromise = client.deleteConnectorConfig('ccfg_');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getConectorConfig', async () => {
    const responsePromise = client.getConectorConfig('ccfg_');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getConectorConfig: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.getConectorConfig('ccfg_', { expand: ['connector'] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
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

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('listAssignments', async () => {
    const responsePromise = client.listAssignments('conn_');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('listConnections: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.listConnections(
        {
          connection_ids: ['conn_'],
          connector_config_id: 'ccfg_',
          connector_names: ['acme-apikey'],
          customer_id: 'customer_id',
          expand: ['connector'],
          include_secrets: true,
          limit: 0,
          offset: 0,
          refresh_policy: 'none',
          repl_id: 'repl_id',
          search_query: 'search_query',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listConnectorConfigs', async () => {
    const responsePromise = client.listConnectorConfigs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listConnectorConfigs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.listConnectorConfigs(
        {
          connector_names: ['acme-apikey'],
          expand: ['connector'],
          include_disabled: true,
          limit: 0,
          offset: 0,
          search_query: 'search_query',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('listConnectors: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.listConnectors(
        { connector_name: 'connector_name', expand: ['schemas'], limit: 0, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listConnnectorConfigs', async () => {
    const responsePromise = client.listConnnectorConfigs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listConnnectorConfigs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.listConnnectorConfigs(
        {
          connector_names: ['acme-apikey'],
          expand: ['connector'],
          include_disabled: true,
          limit: 0,
          offset: 0,
          search_query: 'search_query',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listCustomers', async () => {
    const responsePromise = client.listCustomers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listCustomers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.listCustomers(
        { limit: 0, offset: 0, search_query: 'search_query' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('listEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.listEvents(
        { include_prompt: true, limit: 0, offset: 0, search_query: 'search_query', since: 'since' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openint.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('postConnect: only required params', async () => {
    const responsePromise = client.postConnect({
      connector_config_id: 'connector_config_id',
      discriminated_data: { connect_output: { api_key: 'api_key' }, connector_name: 'acme-apikey' },
      options: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('postConnect: required and optional params', async () => {
    const response = await client.postConnect({
      connector_config_id: 'connector_config_id',
      discriminated_data: { connect_output: { api_key: 'api_key' }, connector_name: 'acme-apikey' },
      options: {
        connectionExternalId: 'string',
        integrationExternalId: 'string',
        integrationId: 'integrationId',
        syncInBand: true,
      },
    });
  });

  // Prism tests are disabled
  test.skip('preConfigureConnector: only required params', async () => {
    const responsePromise = client.preConfigureConnector({ connector_name: 'acme-apikey' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('preConfigureConnector: required and optional params', async () => {
    const response = await client.preConfigureConnector({ connector_name: 'acme-apikey' });
  });

  // Prism tests are disabled
  test.skip('preConnect: only required params', async () => {
    const responsePromise = client.preConnect({ connector_config_id: 'connector_config_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('preConnect: required and optional params', async () => {
    const response = await client.preConnect({
      connector_config_id: 'connector_config_id',
      discriminated_data: { connector_name: 'acme-apikey', pre_connect_input: {} },
      options: { connectionExternalId: 'string', integrationExternalId: 'string' },
    });
  });

  // Prism tests are disabled
  test.skip('upsertConnnectorConfig', async () => {
    const responsePromise = client.upsertConnnectorConfig('ccfg_', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('upsertCustomer', async () => {
    const responsePromise = client.upsertCustomer({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('upsertOrganization', async () => {
    const responsePromise = client.upsertOrganization('x', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
