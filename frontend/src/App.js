import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Detail from "./pages/Detail/Detail";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import dataContext from "./context/dataContext";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:1000/wines")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  const values={
    data, 
    setData
  }
  return (
    <div className="App">
      <dataContext.Provider value={values}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </dataContext.Provider>
    </div>
  );
}

export default App;
