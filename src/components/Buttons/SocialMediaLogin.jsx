import { Button, FormGroup, Label } from "reactstrap";

export default function SocialMediaLogin({ label, icon }) {
  return (
    <FormGroup>
      <Button
        outline
        className="button-login-social rounded-5 px-5 text-white bg-black w-100"
      >
        {icon}
        <Label>{label}</Label>
      </Button>
    </FormGroup>
  );
}
