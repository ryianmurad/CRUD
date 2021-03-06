import { Carousel} from 'react-bootstrap';

const Banner = () => {
    return(
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                width={800} height={500}
                className="d-block w-100"
                src="https://placeimg.com/900/500/animals"
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                width={800} height={500}
                className="d-block w-100"
                src="https://placeimg.com/900/500/nature"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                width={800} height={500}
                className="d-block w-100"
                src="https://placeimg.com/900/500/arch"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Banner;