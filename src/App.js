import React, { useState } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="main" style={{border:"1px solid black"}}>
    
    <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
    <Main currentPage={currentPage}/>
    <Footer />
    </div>
  );
}

export default App;
