// React imports
import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

// Style Imports
import "./App.css";

// Component imports
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages imports
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Donation = lazy(() => import("./pages/Donation"));
const Money = lazy(() => import("./pages/Money"));
const Stuffs = lazy(() => import("./pages/Stuffs"));
const Publicaware = lazy(() => import("./pages/Publicaware"));
const Developer = lazy(() => import("./pages/Developer"));
const Error404 = lazy(() => import("./pages/Error404"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home title="Home | Aashroy" />
          </Route>

          <Route exact path="/developers">
            <Developer title="Developers | Aashroy" />
          </Route>

          <Route exact path="/donation">
            <Donation title="Donation | Aashroy" />
          </Route>

          <Route exact path="/donation/money">
            <Money title="Donate Money | Aashroy" />
          </Route>

          <Route exact path="/donation/stuffs">
            <Stuffs title="Donate Stuffs | Aashroy" />
          </Route>

          <Route exact path="/public-awareness">
            <Publicaware title="Public Awareness | Aashroy" />
          </Route>

          <Route exact path="/about">
            <AboutUs title="AboutUs | Aashroy" />
          </Route>

          <Route path="/">
            <Error404 title="Oops Error | Aashroy" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
