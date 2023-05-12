import { Row } from "reactstrap";
import "./footer.css";

export default function FooterRows({ footerProps }) {
  return (
    <Row className="m-0 mt-3">
      {footerProps.map((item, index) => {
        return (
          <Row key={index}>
            <p className="footer-p">{item}</p>
          </Row>
        );
      })}
    </Row>
  );
}
