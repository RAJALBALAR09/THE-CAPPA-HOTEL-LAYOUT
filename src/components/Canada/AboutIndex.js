import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from './FooterIndex';

// .................. LOGO FILES ..............

import a1 from './Img/asset 14.jpeg';
import a2 from './Img/asset 16.jpeg';
import a3 from './Img/asset 15.jpeg';
import s1 from './Img/asset 1.jpeg';



function About() {


    const slider2={

        
        responsive : {
            0 : {
                items:1,
            },
            480 : {
                items:1,

            },
            768 : {
                items:2,

            },
            992 : {
                items:3,
            },
            1200 :
            {
                items:3,
            },
            1400 : {
                items: 3,
            }
        }
    }
    return (
        <>


            
         
            {/* .........TEAM START......... */}

            <section className="speace-y team ">
                <Container>
                    <Row>
                        <div className='p-4'>
                            <h2 className='mb-4 heading_h2'>OUR <span className='span'> TEAM</span></h2>
                        </div>
                        <p className="w-75 mb-5 ps-4">Gallery lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat, mollis sapien vel, conseyer turpeutionyer masin libero sempe. Fusceler mollis augue sit amet hendrerit vestibulum. Duisteyerionyer venenatis lacus.</p>

                    </Row>
                    <Row>

                        <OwlCarousel className='owl-theme' loop margin={10} {...slider2}>
                            <div class='item'>
                                <div className="about1_img p-3">
                                    <img src={a1}></img>
                                    <div className="team_box">
                                        <h6>Jason Brown</h6>
                                        <p>Architect</p>
                                        <div className="about_box">
                                            <h3>dipl. Arch ETH/SIA</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class='item'>
                                <div className="about1_img p-3">
                                    <img src={a2}></img>
                                    <div className="team_box">
                                        <h6>Jason Brown</h6>
                                        <p>Architect</p>
                                        <div className="about_box">
                                            <h3>dipl. Arch ETH/SIA</h3>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class='item'>
                                <div className="about1_img p-3">
                                    <img src={a3}></img>
                                    <div className="team_box">
                                        <h6>Jason Brown</h6>
                                        <p>Architect</p>
                                        <div className="about_box">
                                            <h3>dipl. Arch ETH/SIA</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Row>
                </Container>
            </section>

            {/* .........TEAM END......... */}




            {/* .........JOB OPENING START......... */}
            <section className="speace-y ">
                <Container className='p-4'>
                    <Row>
                        <div >
                            <h2 className='mb-4 heading_h2'>JOB <span className='span'> OPENING</span></h2>
                        </div>
                    </Row>
                    <Row className="job p-4 job1">
                        <Col sm={12} md={4} lg={4} xl={4} xll={4}>
                            <div className="pb-3">
                                <span>Development</span>
                                <div>Staff Design Architect </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4} xl={4} xll={4}>
                            <div className="pb-3">
                                <span>location</span>
                                <div>New York,NY </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4} xl={4} xll={4}>
                            <div className="pb-3">
                                <span>Employment Type</span>
                                <div>Full Time</div>
                            </div>
                        </Col>
                        <hr></hr>
                    </Row>

                    <Row className="job p-4">
                        <Col sm={12} md={4} lg={4} xl={4} xll={4}>
                            <div className="pb-3">
                                <span>Development</span>
                                <div>Staff Design Architect </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4} xl={4} xll={4}>
                            <div className="pb-3">
                                <span>location</span>
                                <div>New York,NY </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4} xl={4} xll={4}>
                            <div className="pb-3">
                                <span>Employment Type</span>
                                <div>Full Time</div>
                            </div>
                        </Col>
                        <hr></hr>

                    </Row>
                    <Row className="job p-4">
                        <Col sm={12} md={4} lg={4} xl={4} xll={4}>
                            <div className="pb-3">
                                <span>Development</span>
                                <div>Staff Design Architect </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4} xl={4} xll={4}>
                            <div className="pb-3">
                                <span>location</span>
                                <div>New York,NY </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4} xl={4} xll={4}>
                            <div className="pb-3">
                                <span>Employment Type</span>
                                <div>Full Time</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* .........JOB OPENING END......... */}

             {/* .........ABOUT START......... */}
             <section className='speace-y about '>
                <Container>
                    <Row className="pd">
                        <Col sm={12} md={12} lg={6} xl={6} xll={6}>
                            <div className='p-4'>
                                <h2 className='mb-4 heading_h2'>About <span className='span'>Bauen</span></h2>
                                <p className='mb-3 '>
                                    Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no curabit tristique.
                                </p>
                                <p className='mb-3'>
                                    Design inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen.
                                </p>
                                <p className='mb-3'>
                                    Planner inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6} xll={6}>
                            <div className='p-4 ab_img br'>
                                <img src={s1} className=''></img>
                                <div className='button'>canada office</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* .........ABOUT END......... */}
            <Footer />


        </>
    )
}
export default About;