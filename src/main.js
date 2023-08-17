import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

//apollo
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

const httpLink = new HttpLink({
  uri: "https://countries.trevorblades.com/",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

const app = createApp(App);

app.provide(apolloProvider);
app.use(router);
app.mount("#app");
