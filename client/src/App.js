// React imports
import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

// Style Imports
import "./App.css";

// Component imports
import Loader from "./components/Loader";

// Pages imports
const Home = lazy(() => import("./pages/Home"));
const Developer = lazy(() => import("./pages/Developer"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home title="Home | Aashroy" />
          </Route>

          <Route exact path="/developer">
            <Developer title="Developer | Aashroy" />
          </Route>

          <Route exact path="/AboutUs">
            <AboutUs title="AboutUs | Aashroy" />
          </Route>
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
