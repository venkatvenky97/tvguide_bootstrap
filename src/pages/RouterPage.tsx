import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewOnTv from "./NewOnTv";
import NewFilms from "./NewFilms";
import ChannelPage from "./HomePage";
import TvListing from "./TvListing";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignInWithLink from "./SignInWithLink";
import MuteSign from "./muteSign";

const client = new ApolloClient({
  uri: "http://tvgui-tvgui-1tv3elndl7z1r-533858730.eu-west-2.elb.amazonaws.com/graphql",
  cache: new InMemoryCache(),
});

export default function RouterPage() {
  return (
    <>
      <Router>
        <ApolloProvider client={client}>
          <Header />
          <Routes>
            <Route path="/" element={<ChannelPage />} />
            <Route path="/" element={<NewOnTv />} />
            <Route path="/new-films" element={<NewFilms />} />
            <Route path="/new-on-tv" element={<NewOnTv />} />
            <Route path="/tv-listings" element={<TvListing />} />
            <Route path="/sign-in-with-link" element={<SignInWithLink />} />
            <Route path="/mute" element={<MuteSign />} />
          </Routes>
          <Footer />
        </ApolloProvider>
      </Router>
    </>
  );
}
