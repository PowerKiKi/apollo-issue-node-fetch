import {ApolloClient, InMemoryCache} from "@apollo/client/core";

const apollo = new ApolloClient({
    uri: 'https://example.com',
    cache: new InMemoryCache(),
});
