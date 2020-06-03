import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout";
import index from "./containers";
import AOS from "aos";
import "aos/dist/aos.css";

/* Possible Extension for Later Projects added */
export default function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 1800,
      once: true,
    });
  }, []);
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={index} />
      </Switch>
    </Layout>
  );
}
