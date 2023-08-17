import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

//apollo
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

const httpLink = new HttpLink({
  uri: "https://countries.trevorblades.com/",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const pinia = createPinia();
const app = createApp(App);

app.provide(DefaultApolloClient, apolloClient);
app.use(pinia);
app.use(router);
app.mount("#app");
