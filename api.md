# Openint

Types:

- <code><a href="./src/resources/top-level.ts">CheckConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnectionConfigsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnectionsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListEventsResponse</a></code>

Methods:

- <code title="post /connection/{id}/check">client.<a href="./src/index.ts">checkConnection</a>(id) -> CheckConnectionResponse</code>
- <code title="get /connection/{id}">client.<a href="./src/index.ts">getConnection</a>(id, { ...params }) -> GetConnectionResponse</code>
- <code title="get /connector-config">client.<a href="./src/index.ts">listConnectionConfigs</a>({ ...params }) -> ListConnectionConfigsResponsesOffsetPagination</code>
- <code title="get /connection">client.<a href="./src/index.ts">listConnections</a>({ ...params }) -> ListConnectionsResponsesOffsetPagination</code>
- <code title="get /event">client.<a href="./src/index.ts">listEvents</a>({ ...params }) -> ListEventsResponsesOffsetPagination</code>
