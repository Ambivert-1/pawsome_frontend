
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";



import App from "./App";
import "./index.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

// import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
   
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
    
     <Footer/>
   
  </BrowserRouter>
);