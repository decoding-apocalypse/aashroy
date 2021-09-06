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
const Developer = lazy(() => import("./pages/Developer"));
const Publicaware = lazy(() => import("./pages/Publicaware"));


function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Home title="Home | Aashroy" />
          </Route>

          <Route exact path="/publicaware">
            <Publicaware title="Public Awareness | Aashroy" />
          </Route>
          

          <Route exact path="/developers">
            <Developer title="Developers | Aashroy" />
          </Route>
          
        </Switch>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
