'use client'

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const coreClient = new ApolloClient({
    uri: process.env.REACT_APP_CORE_EXPRESS_URL,
    cache: new InMemoryCache(),
  });

export const katangaApiClient = new ApolloClient({
    uri: process.env.REACT_APP_KATANGA_EXPRESS_APPLICATION_API,
    cache: new InMemoryCache(),
  });
