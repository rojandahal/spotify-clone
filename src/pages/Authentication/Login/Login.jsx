import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import BrandNavBar from "../../../components/SideBar/BrandNavBar";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import "./login.css";

export default function Login() {
  return (
    <div>
      <BrandNavBar />
      <Container
        className="login-wrapper d-flex flex-column align-items-center justify-content-center w-50 mt-5 rounded-3"
        style={{ backgroundColor: "black" }}
      >
        <h1 className="mb-5 mt-5">Login to Spotify</h1>

        <Row className="d-flex flex-column align-items-center justify-content-center">
          <FormGroup>
            <Button
              outline
              className="button-login-social rounded-5 px-5 text-white bg-black w-100"
            >
              <FcGoogle className="me-5" />
              <Label>Continue with Google</Label>
            </Button>
          </FormGroup>
          <FormGroup>
            <Button
              outline
              className="button-login-social rounded-5 px-5 text-white bg-black w-100"
            >
              <BsFacebook fill="blue" className="me-5" />
              <Label>Continue with Facebook</Label>
            </Button>
          </FormGroup>
        </Row>

        <Row className="border-top border-bottom my-5 py-5 w-75">
          <Form>
            <FormGroup>
              <Label for="email">Email or Username</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                className="bg-dark"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                className="bg-dark"
              />
            </FormGroup>
            <FormGroup switch className="d-flex justify-content-center">
              <Input type="switch" className="" role="switch" />
              <Label>Remember me</Label>
            </FormGroup>

            <FormGroup className="d-flex justify-content-center">
              <Button color="success login-button-green rounded-5 w-75 my-3 text-black">
                Login
              </Button>
            </FormGroup>

            <Label className="forgot-pw-text d-flex justify-content-center">
              Forgot your password?
            </Label>
          </Form>
        </Row>
      </Container>
    </div>
  );
}
