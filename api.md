# Openint

Types:

- <code><a href="./src/resources/top-level.ts">Connector</a></code>
- <code><a href="./src/resources/top-level.ts">Integration</a></code>
- <code><a href="./src/resources/top-level.ts">CheckConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">CreateConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">CreateConnnectorConfigResponse</a></code>
- <code><a href="./src/resources/top-level.ts">CreateTokenResponse</a></code>
- <code><a href="./src/resources/top-level.ts">DeleteConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetConectorConfigResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetCurrentUserResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetMessageTemplateResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnectionConfigsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnectionsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnectorsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnnectorConfigsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListCustomersResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListEventsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">UpsertConnnectorConfigResponse</a></code>
- <code><a href="./src/resources/top-level.ts">UpsertCustomerResponse</a></code>

Methods:

- <code title="post /connection/{id}/check">client.<a href="./src/index.ts">checkConnection</a>(id) -> CheckConnectionResponse</code>
- <code title="post /connection">client.<a href="./src/index.ts">createConnection</a>({ ...params }) -> CreateConnectionResponse</code>
- <code title="post /connector-config">client.<a href="./src/index.ts">createConnnectorConfig</a>({ ...params }) -> CreateConnnectorConfigResponse</code>
- <code title="post /customer/{customer_id}/token">client.<a href="./src/index.ts">createToken</a>(customerID, { ...params }) -> CreateTokenResponse</code>
- <code title="delete /connection/{id}">client.<a href="./src/index.ts">deleteConnection</a>(id) -> DeleteConnectionResponse</code>
- <code title="get /connector-config/{id}">client.<a href="./src/index.ts">getConectorConfig</a>(id, { ...params }) -> GetConectorConfigResponse</code>
- <code title="get /connection/{id}">client.<a href="./src/index.ts">getConnection</a>(id, { ...params }) -> GetConnectionResponse</code>
- <code title="get /viewer">client.<a href="./src/index.ts">getCurrentUser</a>() -> GetCurrentUserResponse</code>
- <code title="get /ai/message_template">client.<a href="./src/index.ts">getMessageTemplate</a>({ ...params }) -> GetMessageTemplateResponse</code>
- <code title="get /connector-config">client.<a href="./src/index.ts">listConnectionConfigs</a>({ ...params }) -> ListConnectionConfigsResponsesOffsetPagination</code>
- <code title="get /connection">client.<a href="./src/index.ts">listConnections</a>({ ...params }) -> ListConnectionsResponsesOffsetPagination</code>
- <code title="get /connector">client.<a href="./src/index.ts">listConnectors</a>({ ...params }) -> ListConnectorsResponsesOffsetPagination</code>
- <code title="get /connector-config">client.<a href="./src/index.ts">listConnnectorConfigs</a>({ ...params }) -> ListConnnectorConfigsResponsesOffsetPagination</code>
- <code title="get /customer">client.<a href="./src/index.ts">listCustomers</a>({ ...params }) -> ListCustomersResponsesOffsetPagination</code>
- <code title="get /event">client.<a href="./src/index.ts">listEvents</a>({ ...params }) -> ListEventsResponsesOffsetPagination</code>
- <code title="put /connector-config/{id}">client.<a href="./src/index.ts">upsertConnnectorConfig</a>(id, { ...params }) -> UpsertConnnectorConfigResponse</code>
- <code title="put /customer">client.<a href="./src/index.ts">upsertCustomer</a>({ ...params }) -> UpsertCustomerResponse</code>
