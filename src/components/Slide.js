import { Carousel} from 'react-bootstrap'

const Slide = () =>{
  return (
  <Carousel >
    <Carousel.Item >
      <img
        className="d-block w-100"
        src="./1.jpeg"
        alt="First slide"
        style={{maxHeight:"500px"}}
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./2.jpeg"
        alt="Second slide"
        style={{maxHeight:"500px"}}
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./3.jpeg"
        alt="Third slide"
        style={{maxHeight:"500px"}}
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>


  )
}
export default Slide
