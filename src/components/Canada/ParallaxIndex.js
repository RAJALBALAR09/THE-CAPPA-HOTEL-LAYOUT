
import Footer from "./FooterIndex";
import { Row, Col, Container } from "react-bootstrap";


function Parallax() {
    return (
        <>

            <section>
                <div className="parallax1">
                    <Container>
                        <Row>
                            <Col md={7} xl={7} lg={7} sm={7} xxl={7}>
                                <div className="prlx_box1 prlx_box ">
                                    <h1 className="mb-3 fs-1">Innovate Design <br></br>in Toronto</h1>
                                    <p className="d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">Architecture viverra tellus nec massa dictum the euismoe.<br></br>
                                        Curabitur viverra the posuere aukue velit.
                                    </p>
                                    <div className="btn1 ">DISCOVER</div>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section>
                <div className="parallax2">
                    <Container>
                        <Row>
                        <Col></Col>

                            <Col md={7} xl={7} lg={7} sm={7} xxl={7}>
                                <div className="prlx_box2 prlx_box">
                                    <h1 className="mb-3 fs-1">Innovate Desing  <br></br>in Canada</h1>
                                    <p className="d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">Architecture viverra tellus nec massa dictum the euismoe.<br></br>
                                        Curabitur viverra the posuere aukue velit.
                                    </p>
                                    <div className="btn1">DISCOVER</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section>
                <div className="parallax3">
                    <Container>
                        <Row>
                            <Col md={7} xl={7} lg={7} sm={7} xxl={7}>
                                <div className="prlx_box3 prlx_box">
                                    <h1 className="mb-3 fs-1">Innovate Design <br></br>in Toronto</h1>
                                    <p className="d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">Architecture viverra tellus nec massa dictum the euismoe.<br></br>
                                        Curabitur viverra the posuere aukue velit.
                                    </p>
                                    <div className="btn1">DISCOVER</div>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section>
                <div className="parallax4">
                    <Container>
                        <Row>
                            <Col md={7} xl={7} lg={7} sm={7} xxl={7}>
                                <div className="prlx_box4 prlx_box">
                                    <h1 className="mb-3 fs-1">Innovate Design <br></br>in Toronto</h1>
                                    <p className="d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">Architecture viverra tellus nec massa dictum the euismoe.<br></br>
                                        Curabitur viverra the posuere aukue velit.
                                    </p>
                                    <div className="btn1">DISCOVER</div>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Parallax;