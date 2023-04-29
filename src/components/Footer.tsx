import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// Footer sits at the bottom, containing a disclaimer about ML involvement
// Could use for more links at some point
const Footer = () => {
  return (
    <footer>
      <Card className="rounded-top rounded-0 offWhiteBack">
        <Card.Body>
          <Card className="rounded-top rounded-0 p-0  m-0 whiteBack">
            <Card.Body>
              <Container>
                <Row className="text-center p-1">
                  <h5>
                    <u>
                      A <span className="cursiveName">Ryan Ulch</span> Website
                    </u>
                  </h5>
                </Row>
                <hr className="pb-2 m-0" />
                <Row className="d-flex">
                  {/* Column Commented out, as just the email alone does not warrant a column, can re-introduce if there should be more info added */}
                  {/* <Col>
								<p>Email: <a href='mailto:RyanUlchDev@Gmail.com'>RyanUlchDev@Gmail.com</a></p>
							</Col> */}
                  <Col>
                    <h6>
                      <u>Disclaimer</u>
                    </h6>
                    <p>
                      &nbsp;&nbsp;Images marked with a visible *(asterisks) in
                      the lower right corner are generated with the help of{" "}
                      <a href="https://openai.com/dall-e-2/">Dall•E 2</a>. This
                      is the only use of Machine-Learning on this site; the rest
                      this site is designed and created by me,{" "}
                      <span className="cursiveName">Ryan Ulch</span>.
                    </p>
                  </Col>
                </Row>
                <hr className="pb-2 m-0" />
                <Row className="text-center text-muted">
                  <p className="m-0">&#169; 2022-2023 Ryan Ulch</p>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </footer>
  );
};

export default Footer;
