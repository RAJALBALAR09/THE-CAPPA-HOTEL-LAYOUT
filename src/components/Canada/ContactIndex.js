import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "./FooterIndex";

function Contact() {
    return (
        <>
            <section className="speace-y contect">
                <Container>
                    <Row>
                        <div className='p-4'>
                            <h2 className='mb-4 heading_h2'>CONTACT <span className='span'> US</span></h2>
                        </div>
                        <p className="w-75 mb-5 ps-4">Gallery lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat, mollis sapien vel, conseyer turpeutionyer masin libero sempe. Fusceler mollis augue sit amet hendrerit vestibulum. Duisteyerionyer venenatis lacus.</p>
                    </Row>
                    <Row>
                        <Col sm={12} md={6} lg={4} xl={4} xll={4}>
                            <div className="p-4">
                                <h6 className="mb-4">Bauen Architecture Firm</h6>
                                <p>Our firm nisl sodales sit amet sapien idea placerat sodales orcite. Vivamus ne miss rhoncus felis bauen architecture.</p>
                                <span className="mt-4"><b>VAT :</b> USA002323065B06</span>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4} xll={4}>
                            <div className="p-4">
                                <h6 className="mb-4">Contact Details</h6>
                                <div className="mb-4">
                                    <span><b>Phone :</b> +1 203-123-0606</span>
                                </div>
                                <div className="mb-4">
                                    <span><b>Email :</b> architecture@bauen.com</span>
                                </div>
                                <div className="mb-4">
                                    <span><b>Address :</b>  24 King St, Charleston, 29401 USA</span>
                                </div>
                            </div>

                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4} xll={4}>
                            <div className="p-4">
                                <Form>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label column sm={2}>NAME</Form.Label>
                                        <Form.Control placeholder=" Your Name " />
                                    </Form.Group>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label column sm={2}>NUMBER</Form.Label>
                                            <Form.Control type="email" placeholder="Your Email" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label column sm={2}>EMAIL</Form.Label>
                                            <Form.Control type="password" placeholder="Your Name" />
                                        </Form.Group>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label column sm={2}>SUBJECT</Form.Label>
                                        <Form.Control placeholder="Subject" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label column sm={2}>ADDRESS</Form.Label>
                                        <Form.Control placeholder="Massage" />
                                    </Form.Group>

                                    <Button type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer/>
        </>
    )
}
export default Contact;