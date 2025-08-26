# Openint

Types:

- <code><a href="./src/resources/top-level.ts">Connector</a></code>
- <code><a href="./src/resources/top-level.ts">Integration</a></code>
- <code><a href="./src/resources/top-level.ts">AssignConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">CheckConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">CreateConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">CreateConnnectorConfigResponse</a></code>
- <code><a href="./src/resources/top-level.ts">CreateTokenResponse</a></code>
- <code><a href="./src/resources/top-level.ts">DeleteAssignmentResponse</a></code>
- <code><a href="./src/resources/top-level.ts">DeleteConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">DeleteConnectorConfigResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetConectorConfigResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetConnectionResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetCurrentUserResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListAssignmentsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnectionsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnectorConfigsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnectorsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListConnnectorConfigsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListCustomersResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListEventsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">UpsertConnnectorConfigResponse</a></code>
- <code><a href="./src/resources/top-level.ts">UpsertCustomerResponse</a></code>
- <code><a href="./src/resources/top-level.ts">UpsertOrganizationResponse</a></code>

Methods:

- <code title="put /v2/connection/{id}/assignment/{replId}">client.<a href="./src/index.ts">assignConnection</a>(replID, { ...params }) -> AssignConnectionResponse</code>
- <code title="post /v1/connection/{id}/check">client.<a href="./src/index.ts">checkConnection</a>(id) -> CheckConnectionResponse</code>
- <code title="post /v2/connection">client.<a href="./src/index.ts">createConnection</a>({ ...params }) -> CreateConnectionResponse</code>
- <code title="post /v2/connector-config">client.<a href="./src/index.ts">createConnnectorConfig</a>({ ...params }) -> CreateConnnectorConfigResponse</code>
- <code title="post /v1/customer/{customer_id}/token">client.<a href="./src/index.ts">createToken</a>(customerID, { ...params }) -> CreateTokenResponse</code>
- <code title="delete /v2/connection/{id}/assignment/{replId}">client.<a href="./src/index.ts">deleteAssignment</a>(replID, { ...params }) -> DeleteAssignmentResponse</code>
- <code title="delete /v2/connection/{id}">client.<a href="./src/index.ts">deleteConnection</a>(id) -> DeleteConnectionResponse</code>
- <code title="delete /v2/connector-config/{id}">client.<a href="./src/index.ts">deleteConnectorConfig</a>(id) -> DeleteConnectorConfigResponse</code>
- <code title="get /v2/connector-config/{id}">client.<a href="./src/index.ts">getConectorConfig</a>(id, { ...params }) -> GetConectorConfigResponse</code>
- <code title="get /v2/connection/{id}">client.<a href="./src/index.ts">getConnection</a>(id, { ...params }) -> GetConnectionResponse</code>
- <code title="get /v1/viewer">client.<a href="./src/index.ts">getCurrentUser</a>() -> GetCurrentUserResponse</code>
- <code title="get /v2/connection/{id}/assignment">client.<a href="./src/index.ts">listAssignments</a>(id) -> ListAssignmentsResponse</code>
- <code title="get /v2/connection">client.<a href="./src/index.ts">listConnections</a>({ ...params }) -> ListConnectionsResponsesOffsetPagination</code>
- <code title="get /v2/connector-config">client.<a href="./src/index.ts">listConnectorConfigs</a>({ ...params }) -> ListConnectorConfigsResponsesOffsetPagination</code>
- <code title="get /v2/connector">client.<a href="./src/index.ts">listConnectors</a>({ ...params }) -> ListConnectorsResponsesOffsetPagination</code>
- <code title="get /v2/connector-config">client.<a href="./src/index.ts">listConnnectorConfigs</a>({ ...params }) -> ListConnnectorConfigsResponsesOffsetPagination</code>
- <code title="get /v1/customer">client.<a href="./src/index.ts">listCustomers</a>({ ...params }) -> ListCustomersResponsesOffsetPagination</code>
- <code title="get /v1/event">client.<a href="./src/index.ts">listEvents</a>({ ...params }) -> ListEventsResponsesOffsetPagination</code>
- <code title="put /v2/connector-config/{id}">client.<a href="./src/index.ts">upsertConnnectorConfig</a>(id, { ...params }) -> UpsertConnnectorConfigResponse</code>
- <code title="put /v1/customer">client.<a href="./src/index.ts">upsertCustomer</a>({ ...params }) -> UpsertCustomerResponse</code>
- <code title="put /v2/organization/{orgId}">client.<a href="./src/index.ts">upsertOrganization</a>(orgID) -> UpsertOrganizationResponse</code>
