import { Row } from "reactstrap";
import "./footer.css";

export default function FooterRows({ footerProps }) {
  return (
    <Row className="mt-3 w-100 d-flex justify-content-center">
      {footerProps.map((item, index) => {
        console.log(item);
        return (
          <Row key={index}>
            <p className="footer-p">{item}</p>
          </Row>
        );
      })}
    </Row>
  );
}
