import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Col, Container, Row } from "reactstrap";
import "./footer.css";
import FooterRows from "./FooterRows";

export default function Footer() {
  return (
    <Container fluid className="m-0 p-0 bg-dark pt-5 mt-3">
      <Row
        className="ms-5 me-2 d-flex justify-content-center"
        xs={1}
        xl={6}
        lg={2}
        md={4}
      >
        <Col>
          Company
          <FooterRows footerProps={["About", "Jobs", "For the Record"]} />
        </Col>
        <Col>
          Communities
          <FooterRows
            footerProps={[
              "For artist",
              "Developer",
              "Advertising",
              "Investors",
              "Vendors",
            ]}
          />
        </Col>
        <Col>
          Useful Links
          <FooterRows footerProps={["Support", "Free Mobile App"]} />
        </Col>
        <Col></Col>
        <Col></Col>
        <Col>
          <BsInstagram className="social-media-icon mx-2 fs-2" />
          <BsFacebook className="social-media-icon mx-2 fs-2" />
          <BsTwitter className="social-media-icon mx-2 fs-2" />
        </Col>
      </Row>

      <Row className="border border-success ms-5 me-5 my-3" />

      <Row className="ms-5 me-5 w-50 pb-5">
        <Col className="text-center text-white">
          <p className="footer-p">Legal</p>
        </Col>
        <Col className="text-center text-white">
          <p className="footer-p">Privacy Center</p>
        </Col>
        <Col className="text-center text-white">
          <p className="footer-p">Privacy Policy</p>
        </Col>
        <Col className="text-center text-white">
          <p className="footer-p">Cookies</p>
        </Col>
        <Col className="text-center text-white">
          <p className="footer-p">About Ads</p>
        </Col>
      </Row>
    </Container>
  );
}
