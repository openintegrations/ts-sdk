# Openint

Types:

- <code><a href="./src/resources/top-level.ts">CheckConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">CreateMagicLinkResponse</a></code>
- <code><a href="./src/resources/top-level.ts">CreateTokenResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnectionConfigsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnectionsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListEventsResponse</a></code>

Methods:

- <code title="post /connection/{id}/check">client.<a href="./src/index.ts">checkConnection</a>(id) -> CheckConnectionResponse</code>
- <code title="post /connect/magic-link">client.<a href="./src/index.ts">createMagicLink</a>({ ...params }) -> CreateMagicLinkResponse</code>
- <code title="post /connect/token">client.<a href="./src/index.ts">createToken</a>({ ...params }) -> CreateTokenResponse</code>
- <code title="get /connection">client.<a href="./src/index.ts">getConnection</a>({ ...params }) -> GetConnectionResponse</code>
- <code title="get /connector-config">client.<a href="./src/index.ts">listConnectionConfigs</a>({ ...params }) -> ListConnectionConfigsResponse</code>
- <code title="get /connection/{id}">client.<a href="./src/index.ts">listConnections</a>(id, { ...params }) -> ListConnectionsResponse</code>
- <code title="get /event">client.<a href="./src/index.ts">listEvents</a>({ ...params }) -> ListEventsResponse</code>
