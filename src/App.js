import logo from "./logo.svg";
import "./App.css";
import News from "./components/News";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  var Api = process.env.REACT_APP_NEWS_APIKEY;
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Heading Heading="NEWS HEADLINES..." />
        {/* <News progress = {progress} pageSize={9} country="in"/> */}
        <Routes>
          <Route
            exact
            path="/america"
            element={
              <News
              setProgress={setProgress}
              Api = {Api}
                pageSize={9}
                country="us"
                key="us"
              />
            }
          ></Route>
          <Route
            exact
            path="/india"
            element={
              <News
              setProgress={setProgress}
              Api = {Api}
                pageSize={9}
                country="in"
                key="in"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
