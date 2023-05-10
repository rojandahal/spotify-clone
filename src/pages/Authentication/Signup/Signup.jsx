import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import "./signup.css";
import { auth } from "../../../Firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";

export default function Signup() {
  var eReg = /\S+@\S+\.\S+/;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("default username");

  const validatePassword = () => {
    if (!password) {
      return false;
    }
    return password.length < 8 ? false : true;
  };

  const validateEmail = () => {
    return eReg.test(email) ? true : false;
  };

  const formSubmitClickHandler = async (e) => {
    e.preventDefault();

    if (!email && !password && !username) {
      setEmailError("Please enter a valid email address.");
      setPasswordError("Please enter a valid password.");
    }
    if (!eReg.test(email)) {
      setEmailError("Please enter a valid email address.");
    }
    if (password.length < 8) {
      setPasswordError("Please enter a valid password.");
    } else {
      setEmailError("");
      setPasswordError("");
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Update the display name
        await updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
            console.log(error.message);
          });

        // Verify that the display name is set
        console.log("User display name:", user.displayName);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode, error.message);
        if (
          error.message.split("/")[1].split(")")[0] == "email-already-in-use"
        ) {
          setEmailError("Email already in use.");
        }
      });
  };

  return (
    <div className="page">
      <Container
        className="login-wrapper d-flex flex-column align-items-center justify-content-center w-50 mt-5 rounded-3"
        style={{ backgroundColor: "black" }}
      >
        <h3 className="mb-5 mt-5 text-center" style={{ fontFamily: "Roboto" }}>
          Signup for free to start listening.
        </h3>

        <Row className="d-flex flex-column align-items-center justify-content-center">
          <FormGroup>
            <Button
              outline
              className="button-login-social rounded-5 px-5 text-white bg-black w-100"
            >
              <FcGoogle className="me-5" />
              <Label>Signup with Google</Label>
            </Button>
          </FormGroup>
          <FormGroup>
            <Button
              outline
              className="button-login-social rounded-5 px-5 text-white bg-black w-100"
            >
              <BsFacebook className="me-5" />
              <Label>Signup with Facebook</Label>
            </Button>
          </FormGroup>
        </Row>

        <div className="d-flex align-items-center">
          <div className="border lines me-2"></div>
          OR
          <div className="border lines ms-2"></div>
        </div>

        <h3 className="my-2 text-center">Signup with your Email Address</h3>
        <Row className="my-1 py-5 w-75">
          <Form onSubmit={formSubmitClickHandler}>
            {/* Email Starts */}
            <FormGroup>
              <Label for="email">What&apos;s your email address?</Label>
              <Input
                placeholder="Enter your Email."
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black text-white"
                valid={validateEmail(email)}
                invalid={emailError !== ""}
              />
              {emailError && <FormFeedback>{emailError}</FormFeedback>}
            </FormGroup>
            {/* Email Ends */}

            {/* Passowrd Starts */}
            <FormGroup>
              <Label for="password">Create Password</Label>
              <Input
                placeholder="Enter a Password."
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black text-white"
                valid={validatePassword(password)}
                invalid={passwordError !== ""}
              />
              {passwordError && <FormFeedback>{passwordError}</FormFeedback>}
            </FormGroup>
            {/* Password Ends */}

            {/* Username Starts */}
            <FormGroup>
              <Label for="username">What should we call you?</Label>
              <Input
                placeholder="Enter a profile name."
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                className="bg-black text-white"
              />
            </FormGroup>
            {/* Username Ends */}

            {/* Gender Values */}
            <Col sm={10}>
              <Label for="gender">What&apos;s your gender?</Label>
              <FormGroup check>
                <Input name="radio" type="radio" /> <Label check>Male</Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio" type="radio" /> <Label check>Female</Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio" type="radio" /> <Label check>Others</Label>
              </FormGroup>
            </Col>
            {/* Gender Ends */}

            {/* Signup Buttn */}
            <FormGroup className="d-flex justify-content-center">
              <Button
                type="submit"
                color="success login-button-green rounded-5 w-75 my-3 text-black"
              >
                Signup
              </Button>
            </FormGroup>

            {/* Terms and Conditions Checkbox */}
            <FormGroup
              check
              className="d-flex justify-content-center text-center"
            >
              <Input id="exampleCheck" name="check" type="checkbox" />
              <Label check for="exampleCheck" className="ms-2">
                I agree to the Spotify Terms and Conditions of Use and Privacy
                Policy.
              </Label>
            </FormGroup>
          </Form>
          {/* Already have an account ? */}
          <Label className="d-flex justify-content-center my-3 text-center">
            Already Have an account?{" "}
            <a href="/login" className="text-success ms-2">
              Login
            </a>
          </Label>
        </Row>
      </Container>
    </div>
  );
}
