import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./src/componentes/Header";
import Form from "./src/componentes/Form";
import Edit from "./src/componentes/Edit";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Form />
        <Routes>
          <Route path="/Edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
