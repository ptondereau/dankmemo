import React from 'react';
import ReactDOM from 'react-dom';
import { from } from 'apollo-link';
import { ApolloClient, HttpLink } from 'apollo-boost';
import DebounceLink from 'apollo-link-debounce';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './styles/global';

const client = new ApolloClient({
  link: from([
    // @ts-ignore
    new DebounceLink(0),
    new HttpLink({
      uri:
        process.env.REACT_APP_GRAPHQL_ENDPOINT ||
        'http://localhost:8080/graphql',
    }),
  ]),
  cache: new InMemoryCache(),
});

// Importing both ApolloProvider from react-apollo-hooks and react-apollo
// allows to use either hooks or component in the same app
ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
