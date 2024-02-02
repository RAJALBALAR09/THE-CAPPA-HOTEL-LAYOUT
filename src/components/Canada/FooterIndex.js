import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


// .................. IMG FILES ..............
import f1 from './Img/asset 17.png'
import f2 from './Img/asset 18.png'
import f3 from './Img/asset 19.png'
import f4 from './Img/asset 20.png'
import f5 from './Img/asset 21.png'
import f6 from './Img/asset 22.png'
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
    return (

        <footer>
            <div className="footer_img"></div>
            <div className='footer_bg  '>
                <OwlCarousel className='owl-theme  w-50 m-0 p-0' loop margin={10} dots={false} items={6}>
                    <div class='item m-0 p-0'>
                        <img src={f1}></img>
                    </div>
                    <div class='item m-0 p-0'>
                        <img src={f2}></img>
                    </div>
                    <div class='item'>
                        <img src={f3}></img>
                    </div>
                    <div class='item m-0 p-0'>
                        <img src={f4}></img>
                    </div>
                    <div class='item m-0 p-0'>
                        <img src={f5}></img>
                    </div>
                    <div class='item m-0 p-0'>
                        <img src={f6}></img>
                    </div>
                </OwlCarousel>;
            </div>
            <div className='speace-y footer_bg2'>
                <Container>
                    <Row>
                        <Col sm={12} md={4}>
                            <div>
                                <h6>Phone</h6>
                                <p>+1 203-123-0606</p>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div>
                                <h6>Email</h6>
                                <p>architecture@bauen.com</p>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div>
                                <h6>Our Address</h6>
                                <p>24 King St, Charleston, SC 29401 USA</p>
                            </div>
                        </Col>

                    </Row>
                    {/* <Row>
                        <Col sm={12} md={4}></Col>
                        <Col sm={12} md={4}>
                            <div>

                            </div>
                        </Col>
                        <Col sm={12} md={4}></Col>

                    </Row> */}
                </Container>
            </div>

        </footer>
    )
}
export default Footer;