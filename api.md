# Openint

Types:

- <code><a href="./src/resources/top-level.ts">Connector</a></code>
- <code><a href="./src/resources/top-level.ts">Integration</a></code>
- <code><a href="./src/resources/top-level.ts">CheckConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">CreateConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">CreateTokenResponse</a></code>
- <code><a href="./src/resources/top-level.ts">DeleteConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetCurrentUserResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetMessageTemplateResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnectionConfigsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnectionsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnectorsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListEventsResponse</a></code>

Methods:

- <code title="post /connection/{id}/check">client.<a href="./src/index.ts">checkConnection</a>(id) -> CheckConnectionResponse</code>
- <code title="post /connection">client.<a href="./src/index.ts">createConnection</a>({ ...params }) -> CreateConnectionResponse</code>
- <code title="post /customer/{customer_id}/token">client.<a href="./src/index.ts">createToken</a>(customerID, { ...params }) -> CreateTokenResponse</code>
- <code title="delete /connection/{id}">client.<a href="./src/index.ts">deleteConnection</a>(id) -> DeleteConnectionResponse</code>
- <code title="get /connection/{id}">client.<a href="./src/index.ts">getConnection</a>(id, { ...params }) -> GetConnectionResponse</code>
- <code title="get /viewer">client.<a href="./src/index.ts">getCurrentUser</a>() -> GetCurrentUserResponse</code>
- <code title="get /ai/message_template">client.<a href="./src/index.ts">getMessageTemplate</a>({ ...params }) -> GetMessageTemplateResponse</code>
- <code title="get /connector-config">client.<a href="./src/index.ts">listConnectionConfigs</a>({ ...params }) -> ListConnectionConfigsResponsesOffsetPagination</code>
- <code title="get /connection">client.<a href="./src/index.ts">listConnections</a>({ ...params }) -> ListConnectionsResponsesOffsetPagination</code>
- <code title="get /connector">client.<a href="./src/index.ts">listConnectors</a>({ ...params }) -> ListConnectorsResponsesOffsetPagination</code>
- <code title="get /event">client.<a href="./src/index.ts">listEvents</a>({ ...params }) -> ListEventsResponsesOffsetPagination</code>
