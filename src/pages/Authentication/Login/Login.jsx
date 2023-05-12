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
import InputField from "../../../components/InputField/InputField";
import SocialMediaLogin from "../../../components/Buttons/SocialMediaLogin";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../Firebase/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../../hooks/useToken";
import { userDetailAtom } from "../../../recoil/atoms/loginAtom";
import { useSetRecoilState } from "recoil";

export default function Login() {
  const navigate = useNavigate();
  var eReg = /\S+@\S+\.\S+/;

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
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
    return password.length < 8 ? false : true;
  };

  const validateEmail = () => {
    return eReg.test(email) ? true : false;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const formSubmitClickHandler = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      setEmailError("Please enter a valid email address.");
      setPasswordError("Please enter a valid password.");
    }
    if (!eReg.test(email)) {
      setEmailError("Please enter a valid email address.");
    }
    if (password.length < 8) {
      setPasswordError("Please enter a valid password.");
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        setEmailError("");
        setPasswordError("");
        // Signed in
        await setPersistence(auth, browserLocalPersistence).then(() => {
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          return signInWithEmailAndPassword(auth, email, password);
        });
        // Verify that the toke is set
        setToken(userCredential.user);
        setUser(userCredential.user);

        console.log("User display name:", userCredential.user.displayName);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.message);
        if (errorCode === "auth/wrong-password") {
          setPasswordError("Wrong Password.");
        }
        if (errorCode === "auth/too-many-requests") {
          setEmailError("Too many requests. Please try again later.");
        }
        if (errorCode === "auth/user-not-found") {
          setEmailError("User not found.");
        }
      });
  };

  return (
    <div>
      <BrandNavBar />
      <Container
        className="login-wrapper d-flex flex-column align-items-center justify-content-center w-50 mt-5 rounded-3"
        style={{ backgroundColor: "black" }}
      >
        <h1 className="mb-5 mt-5">Login to Spotify</h1>

        <Row className="d-flex flex-column align-items-center justify-content-center">
          <SocialMediaLogin
            label="Continue with Google"
            icon={<FcGoogle className="me-5" />}
          />
          <SocialMediaLogin
            label="Continue with Facebook"
            icon={<BsFacebook className="me-5" />}
          />
        </Row>

        <Row className="border-top border-bottom my-5 py-5 w-75">
          <Form onSubmit={formSubmitClickHandler}>
            <InputField
              forLabel="Email or Username"
              placeholder="Enter your Email."
              handleOnChange={handleEmailChange}
              invalidate={emailError !== ""}
              validate={validateEmail(email)}
              type="email"
              errorMessage={emailError}
            />

            <InputField
              forLabel="Password"
              placeholder="Enter you Password."
              handleOnChange={handlePasswordChange}
              invalidate={passwordError !== ""}
              validate={validatePassword(password)}
              type="password"
              errorMessage={passwordError}
            />

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
