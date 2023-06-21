import "./App.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>comming soon..</h1>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
