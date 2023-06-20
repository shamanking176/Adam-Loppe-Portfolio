import '../../src/style.css'
import petShelter from '../1683507154448.png'
import techBlog from '../tech-blogs-1.jpg'
import weather from '../FocusArea__Weather-02.jpg'
import movie from '../online-cinema-art-movie-watching-260nw-586719869.webp'
import readme from '../open-graph-logo.png'
function Portfolio (){
    return (
        <section>
            <h3>
                Portfolio
            </h3>
            <a href="https://github.com/thossain30/Project-Pet-Shelter">
      <img src={petShelter} alt="Pet Shelter"  width="250px" height="250px"/>
    </a>
    <a href="https://github.com/shamanking176/Tech-Blog">
      <img src={techBlog} alt="Tech Blog"  width="250px" height="250px"/>
    </a>
    <a href="https://github.com/shamanking176/Tech-Blog">
      <img src={weather} alt="Weather"  width="250px" height="250px"/>
    </a>
    <a href="https://github.com/shamanking176/Tech-Blog">
      <img src={movie} alt="Movie"  width="250px" height="250px"/>
    </a>
    <a href="https://github.com/shamanking176/Tech-Blog">
      <img src={readme} alt="README"  width="250px" height="250px"/>
    </a>
    <a href="https://github.com/shamanking176/Tech-Blog">
      <img src={weather} alt="Tech Blog"  width="250px" height="250px"/>
    </a>
        </section>
    )
}
export default Portfolio