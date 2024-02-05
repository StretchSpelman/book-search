import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import "./App.css";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
