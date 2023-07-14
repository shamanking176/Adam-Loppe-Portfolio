import '../../src/style.css'
import petShelter from '../1683507154448.png'
import techBlog from '../tech-blogs-1.jpg'
import weather from '../FocusArea__Weather-02.jpg'
import movie from '../online-cinema-art-movie-watching-260nw-586719869.webp'
import readme from '../open-graph-logo.png'
import food from "../photo-1504674900247-0877df9cc836.jpg"
function Portfolio (){
    return (
        <section style={{ backgroundColor: 'lightblue' }}>
            <h3>
                Portfolio
            </h3>
            <div class="container">
            <div class="row">
          <div div class="col-4">
            <a href="https://github.com/thossain30/Project-Pet-Shelter">
              <img
                src={petShelter}
                alt="Pet Shelter"
                width="300px"
                height="250px"
              />
            </a>
          </div>
          <div class="col-4">
            <a href="https://github.com/shamanking176/Tech-Blog">
              <img
                src={techBlog}
                alt="Tech Blog"
                width="300px"
                height="250px"
              />
            </a>
          </div>

       
            <div class="col-4">
              <a href="https://github.com/shamanking176/Weather-Dashboard">
                <img src={weather} alt="Weather" width="300px" height="250px" />
              </a>
            </div>{" "}
    <div class="row">
      <div class="col-4">
    <a href="https://github.com/castarke/movie-rec-repo">
      <img src={movie} alt="Movie"  width="250px" height="250px"/>
    </a>
    </div>
    <div class="col-4">
    <a href="https://github.com/shamanking176/README-Generator">
      <img src={readme} alt="README"  width="250px" height="250px"/>
    </a>
    </div>
    <div class="col-4">
    <a href="https://github.com/goldengayle/ReservationApp">
      <img src={food} alt="Tech Blog"  width="250px" height="250px"/>
    </a>
    </div>
    </div>
    </div>
    </div>
        </section>
    )
}
export default Portfolio