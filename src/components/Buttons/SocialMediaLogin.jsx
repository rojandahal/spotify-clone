import { Button, FormGroup, Label } from "reactstrap";

export default function SocialMediaLogin({ label, className, icon }) {
  return (
    <FormGroup>
      <Button outline className={className}>
        {icon}
        <Label>{label}</Label>
      </Button>
    </FormGroup>
  );
}
