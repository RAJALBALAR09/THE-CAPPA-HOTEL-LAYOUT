import { Container, Row, Col } from "react-bootstrap";
import Footer from './FooterIndex';

// .................. LOGO FILES ..............

import g1 from './Img1/asset 1.jpeg';
import g2 from './Img1/asset 2.jpeg';
import g3 from './Img1/asset 3.jpeg';
import g4 from './Img1/asset 4.jpeg';
import g5 from './Img1/asset 1.jpeg';
import g6 from './Img1/asset 2.jpeg';
import g7 from './Img1/asset 3.jpeg';


function Gallary() {
    return (
        <>

            {/* <section className="video">
                <video playsinline autoplay muted loop>
                    <source src="https://duruthemes.com/demo/html/bauen/img/video.mp4" type="video/mp4" autoplay loop muted></source>
                    <source src="https://duruthemes.com/demo/html/bauen/img/video.webm" type="video/webm" autoplay loop muted></source>
                </video>
            </section> */}
            <section className="gallary speace-y">
                <Container>
                    <Row className="mb-3 px-3">
                        <div className='py-4'>
                            <h2 className='mb-4 heading_h2'>OUR <span className='span'> GALLARY</span></h2>
                        </div>
                        <p className="w-75 mb-5">Gallery lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat, mollis sapien vel, conseyer turpeutionyer masin libero sempe. Fusceler mollis augue sit amet hendrerit vestibulum. Duisteyerionyer venenatis lacus.</p>
                    </Row>
                    <Row className="mb-3 px-3">
                        <Col sm={12} md={6} className="scale">
                            <div className="mb-2 img">
                                <img src={g1}></img>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className="scale">
                            <div className="mb-2 img">
                                <img src={g2}></img>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-3 px-3">
                        <Col sm={12} md={4} className="scale">
                            <div className="mb-2 img">
                                <img src={g3}></img>
                            </div>
                        </Col><Col sm={12} md={4} className="scale">
                            <div className="mb-2 img">
                                <img src={g4}></img>
                            </div>
                        </Col><Col sm={12} md={4} className="scale">
                            <div className="mb-2 img">
                                <img src={g5}></img>
                            </div>
                        </Col>
                    </Row>
                    <Row className="px-3">
                        <Col sm={12} md={6} className="scale">
                            <div className="mb-2 img">
                                <img src={g6}></img>
                            </div>
                        </Col><Col sm={12} md={6} className="scale">
                            <div className="mb-2 img">
                                <img src={g7}></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}
export default Gallary;