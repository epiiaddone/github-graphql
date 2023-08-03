
### 1st method: reactQuery
A feature in React Query is the ability to trigger 
queries when the user interacts with the app using the enabled option.
This meas that the query will not run on mount.

### 2nd method: apollo client
npm i @apollo/client graphql

Unlike React Query, Apollo Client interacts directly with the GraphQL API and, therefore, doesn’t require a separate function that uses fetch