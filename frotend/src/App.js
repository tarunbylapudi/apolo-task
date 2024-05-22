import React from "react";
// import Header from "./components/common/layout/Header";
// import Footer from "./components/common/layout/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
     
      <main>
        
          <Outlet />
        
      </main>
      
    </>
  );
}

export default App;
