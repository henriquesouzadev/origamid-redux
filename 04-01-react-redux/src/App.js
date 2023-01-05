import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useDispatch } from "react-redux";
import { autoLogin } from "./store/login";

import "./App.css";
import Home from "./Components/Home";
import FormExample from "./Components/FormExample";
import FiltersExample from "./Components/FiltersExample";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(autoLogin())
  }, [dispatch]);

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-example" element={<FormExample />} />
          <Route path="/filters-example" element={<FiltersExample />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
