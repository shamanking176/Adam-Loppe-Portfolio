import Navbar from "../Navbar";
import '../../style.css'
function Header({currentPage, handlePageChange}) {
    
    return (
      <header className="header">
        <h1>
      Adam Loppe
     </h1>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
    );
  }
  
  export default Header;
  