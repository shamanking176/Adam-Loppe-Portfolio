import '../../style.css'
import insta from '../../Instagram_logo_2016.svg.webp'
import github from '../../download (1).png'
import linkedin from '../../download (2).png'
function Footer() {
    return (
      <div  class="row text-center wrapper">
        <footer className='footer'>
       
       <a class="col-3" href="https://github.com/thossain30/Project-Pet-Shelter">
      <img src={insta} alt="instagram"  width="50px" height="50px"/>
    </a>
    <a class="col-4" href="https://github.com/thossain30/Project-Pet-Shelter">
      <img src={github} alt="github"  width="50px" height="50px"/>
    </a>
    <a class="col-4" href="https://github.com/thossain30/Project-Pet-Shelter">
      <img src={linkedin} alt="linkedin"  width="50px" height="50px"/>
    </a>
    </footer>
      </div>
    );
  }
  
  export default Footer;
  