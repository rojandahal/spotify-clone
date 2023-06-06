import {
  Button,
  Col,
  Container,
  Form,
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
import { useEffect, useState } from "react";
import SocialMediaLogin from "../../../components/Buttons/SocialMediaLogin";
import InputField from "../../../components/InputField/InputField";
import BrandNavBar from "../../../components/SideBar/BrandNavBar";
import useToken from "../../../hooks/useToken";
import { useNavigate } from "react-router-dom";
import { userDetailAtom } from "../../../recoil/atoms/loginAtom";
import { useSetRecoilState } from "recoil";

export default function Signup() {
  const navigate = useNavigate();
  var eReg = /\S+@\S+\.\S+/;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("default username");
  const { token, setToken } = useToken();
  const setUser = useSetRecoilState(userDetailAtom);

  useEffect(() => {
    if (!(token === null)) {
      navigate("/");
    }
  });

  const validatePassword = () => {
    if (!password) {
      return false;
    }
    return password.length < 6 ? false : true;
  };

  const validateEmail = (email) => {
    return eReg.test(email) ? true : false;
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const signupFormSubmitHandler = async (e) => {
    e.preventDefault();
    if (!eReg.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
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
            console.log(auth.currentUser.displayName);
          })
          .catch((error) => {
            // An error occurred
            // ...
            console.log(error.message);
          });

        // Verify that the toke is set
        setToken(user);
        setUser(user);

        // console.log("User display name:", user.accessToken);
        // console.log(user);
        // // Verify that the display name is set
        // console.log("User display name:", user.displayName);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.message);
        if (errorCode === "auth/email-already-in-use") {
          setEmailError("Email already in use.");
        }
        if (errorCode === "auth/missing-email") {
          setEmailError("Please enter a valid email address.");
        }
        if (errorCode === "auth/weak-password") {
          setPasswordError("Password should be at least 6 characters.");
        }
      });
  };

  return (
    <div className="page">
      <BrandNavBar />

      <Container
        className="login-wrapper d-flex flex-column align-items-center justify-content-center w-50 mt-5 rounded-3"
        style={{ backgroundColor: "black" }}
      >
        <h3 className="mb-5 mt-5 text-center" style={{ fontFamily: "Roboto" }}>
          Signup for free to start listening.
        </h3>

        <Row className="d-flex flex-column align-items-center justify-content-center">
          <SocialMediaLogin
            label="Signup with Google"
            icon={<FcGoogle className="me-5" />}
          />
          <SocialMediaLogin
            label="Signup with Facebook"
            icon={<BsFacebook className="me-5" />}
          />
        </Row>

        <div className="d-flex align-items-center">
          <div className="border lines me-2"></div>
          OR
          <div className="border lines ms-2"></div>
        </div>

        <h3 className="my-2 text-center">Signup with your Email Address</h3>
        <Row className="my-1 py-5 w-75">
          <Form onSubmit={signupFormSubmitHandler}>
            {/* Email Starts */}
            <InputField
              forLabel="What's your email address?"
              placeholder="Enter your Email."
              handleOnChange={handleEmailChange}
              invalidate={emailError !== ""}
              validate={validateEmail(email)}
              type="email"
              errorMessage={emailError}
            />
            {/* Email Ends */}

            {/* Passowrd Starts */}
            <InputField
              forLabel="Enter a password"
              placeholder="Enter a Password."
              handleOnChange={handlePasswordChange}
              invalidate={passwordError !== ""}
              validate={validatePassword(password)}
              type="password"
              errorMessage={passwordError}
            />
            {/* Password Ends */}

            {/* Username Starts */}
            <InputField
              req={true}
              forLabel="What should we call you?"
              placeholder="Enter a profile name."
              handleOnChange={handleUsernameChange}
              type="text"
            />
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
