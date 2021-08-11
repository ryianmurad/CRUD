import Slider from "react-slick";
import {React, Component} from 'react'

class Slick extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
          };

        return(
            <div className="mt-5">
                    <h2>Apalahhhh....</h2>
                    <Slider {...settings}>
                    <div>
                        <video height={215} width={460} autoPlay controls muted loop>
                            <source src="videos/video1.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <video height={215} width={460} autoPlay controls muted>
                            <source src="videos/video2.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <video height={215} width={460} autoPlay controls muted>
                            <source src="videos/video3.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    </Slider>
                </div>
        )
    }
}

export default Slick;