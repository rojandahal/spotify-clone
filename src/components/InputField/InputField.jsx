import { FormGroup, Input, Label } from "reactstrap";

export default function InputField({
  forLabel,
  id,
  name,
  placeholder,
  type,
  className,
}) {
  return (
    <FormGroup>
      <Label for={forLabel}>{forLabel}</Label>
      <Input
        required
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        className={className}
      />
    </FormGroup>
  );
}
