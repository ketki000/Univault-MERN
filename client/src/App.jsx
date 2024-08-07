import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Read from "./Components/Read";
import Filter from "./Components/Filter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
          <Route path="/read/:id" element={<Read/>}></Route>
          <Route path="/filter" element={<Filter/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
