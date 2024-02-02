// import Header from './HeaderIndex';

import Footer from './FooterIndex';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Container, Row, Col } from 'react-bootstrap';


// .................. FONTS  FILES ..............

import { IoArrowForwardOutline } from "react-icons/io5";

// .................. IMG FILES ..............

import s1 from './Img/asset 1.jpeg';
import s2 from './Img/asset 2.jpeg';
import s3 from './Img/asset 3.jpeg';
import s4 from './Img/asset 4.jpeg';


import p1 from './Img/asset 9.jpeg';
import p2 from './Img/asset 10.jpeg';
import p3 from './Img/asset 1.jpeg';
import p4 from './Img/asset 12.jpeg';

import sr1 from './Img/asset 6.png';
import sr2 from './Img/asset 7.png';
import sr3 from './Img/asset 8.png';

function Home() {
    const slider={

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
    const slider1={

       
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
                items:2,
            },
            1200 :
            {
                items:2,
            },
            1400 : {
                items: 2,
            }
        }
    }
    return (
        <>


            {/* .........SLIDER START......... */}

            <section className='slider m-0 p-0'>
                <OwlCarousel className='owl-theme m-0 p-0' loop margin={10} nav items={1} dots={false} auto>
                    <div class='item'>
                        <img src={s4}></img>
                    </div>
                    <div class='item '>
                        <img src={s2}></img>
                    </div>
                    <div class='item'>
                        <img src={s3}></img>
                    </div>
                    

                </OwlCarousel>
            </section>

            {/* .........SLIDER START......... */}



            {/* .........ABOUT START......... */}
            <section className='speace-y about about2'>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={6} xl={6} xll={6}>
                            <div className='p-4'>
                                <h2 className='mb-5 heading_h2'>About <span className='span'> Luxury Experience</span></h2>
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
                                <div className='button'>The Health Pool</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* .........ABOUT END......... */}




            {/* .........PROJECTS START......... */}
            <section className='speace-y'>
                <Container>
                    <Row>
                        <div className='p-4'>
                            <h2 className='mb-4 heading_h2'>OUR  <span className='span'>PROJECTS</span></h2>
                        </div>
                    </Row>
                    <Row>
                        <Col >
                            <div className='p-4'>
                                <OwlCarousel className='owl-theme' loop margin={10} items={2} {...slider} >
                                    <div class='item probox'>
                                        <img src={p1} className='primg'></img>
                                        <div className='pbox  text-center'>
                                            <h6 className='mb-2'>INTERIOR</h6>
                                            <p >COTTON HOUSE</p>
                                            <div className='line1'></div>
                                            <div><IoArrowForwardOutline className='fs-2 my-3'/></div>
                                        </div>
                                    </div>
                                    <div class='item probox'>
                                        <img src={p2}></img>
                                        <div className='pbox  text-center'>
                                            <h6 className='mb-2'>EXTIOTON</h6>
                                            <p >ARMADA CENTER</p>
                                            <div className='line1'></div>
                                            <div><IoArrowForwardOutline className='fs-2 my-3'/></div>
                                        </div>
                                    </div>
                                    <div class='item probox'>
                                        <img src={p3}></img>
                                        <div className='pbox  text-center'>
                                            <h6 className='mb-2'>URBAN</h6>
                                            <p >PRIME HOTEL</p>
                                            <div className='line1'></div>
                                            <div><IoArrowForwardOutline className='fs-2 my-3'/></div>
                                        </div>
                                    </div>
                                    <div class='item probox'>
                                        <img src={p4}></img>
                                        <div className='pbox  text-center'>
                                            <h6 className='mb-2'>INTERIOR</h6>
                                            <p >COTTON HOUSE</p>
                                            <div className='line1'></div>
                                            <div><IoArrowForwardOutline className='fs-2 my-3'/></div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* .........PROJECTS END......... */}
            

            {/* .........SERVICES START......... */}


            <section className='speace-y services'>
                <Container>
                    <Row>
                        <div className='p-4'>
                            <h2 className='mb-4 heading_h2'>OUR  <span className='span'> SERVICES</span></h2>
                        </div>
                    </Row>
                    <Row>
                        <Col sm={12} md={4} lg={4} xl={4} xll={4}>
                            <div className='box'>
                                <img src={sr1} className='mb-3'></img>
                                <h4 className=''>Architecture</h4>
                                <div className='line'></div>

                                <p>Architecture bibendum eros eget lacus the vulputate sit
                                    amet vehicuta nibhen ulicera in the vitae miss.ā
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4} xl={4} xll={4}>
                            <div className='box'>
                                <img src={sr3} className='mb-3'></img>
                                <h4>Architecture</h4>
                                <div className='line'></div>
                                <p>Architecture bibendum eros eget lacus the vulputate sit
                                    amet vehicuta nibhen ulicera in the vitae miss.ā
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={4 } lg={4} xl={4} xll={4}>
                            <div className='box'>
                                <img src={sr3} className='mb-3'></img>
                                <h4>Architecture</h4>
                                <div className='line'></div>

                                <p>Architecture bibendum eros eget lacus the vulputate sit
                                    amet vehicuta nibhen ulicera in the vitae miss.ā
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* .........SERVICES END......... */}


            {/* .........CARRENT NEWS START......... */}
            <section className='speace-y'>
                <Container>
                    <Row>
                        <div className='p-4'>
                            <h2 className='mb-4 heading_h2'>CURRENT <span className='span'> NEWS</span></h2>
                        </div>
                    </Row>
                    <Row>
                        <div className=''>
                            <OwlCarousel className='owl-theme  m-0 p-0' loop margin={10} padding={12} {...slider1}>
                                <div class='item m-0 p-5 cnt_item'>
                                    <img src={p1}></img>
                                    <div className='cnt_box'>
                                        <span className=' '>Urban - 16.12.2023</span>
                                        <h3 className='center'>Postmodern Architecture</h3>
                                    </div>
                                </div>
                                <div class='item m-0 p-5 cnt_item'>
                                    <img src={p2}></img>
                                    <div className='cnt_box'>
                                        <span className=''>Interior - 17.12.2023</span>
                                        <h3 className='center'>Modernism in Architecture</h3>
                                    </div>
                                </div>
                                <div class='item m-0 p-5 cnt_item'>
                                    <img src={p3}></img>
                                    <div className='cnt_box'>
                                        <span className=''>Planing - 18.12.2023</span>
                                        <h3 className='center'>Modern Architecture Buildings</h3>
                                    </div>
                                </div>
                                <div class='item m-0 p-5 cnt_item'>
                                    <img src={p4}></img>
                                    <div className='cnt_box'>
                                        <span className=''>Architecture  - 19.12.2023</span>
                                        <h3 className='center'>Modern Architectural Structures</h3>
                                    </div>
                                </div>

                            </OwlCarousel>
                        </div>
                    </Row>
                </Container>
            </section>
            {/* .........CARRENT NEWS END......... */}

            <Footer />



        </>
    )
}
export default Home;