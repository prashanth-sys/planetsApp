// Write your code here
import './index.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PlanetItem = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="planets-container">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(planet => (
          <div key={planet.id}>
            <img src={planet.imageUrl} alt={planet.name} className="image" />
            <div>
              <h1>{planet.name}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default PlanetItem
