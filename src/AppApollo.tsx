import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
   } from '@apollo/client';
  
   import { HeaderApollo } from './HeaderApollo';
  
   import { RepoPageApollo } from './repoPage/RepoPageApollo';
  
   const queryClient = new ApolloClient({
    uri: process.env.REACT_APP_GITHUB_URL!,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_PAT}`,
             }
    });   
   
   function AppApollo() {
    return (
    <ApolloProvider client={queryClient}>
        <HeaderApollo />
        <RepoPageApollo />
    </ApolloProvider>
    );
   }
   export default AppApollo;