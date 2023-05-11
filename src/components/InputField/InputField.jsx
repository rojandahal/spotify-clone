import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

export default function InputField({
  forLabel,
  id,
  name,
  placeholder,
  type,
  handleOnChange,
  validate,
  invalidate,
  req,
  errorMessage,
}) {
  return (
    <FormGroup>
      <Label for={forLabel}>{forLabel}</Label>
      <Input
        required={req}
        id={id}
        name={name}
        valid={validate}
        onChange={handleOnChange}
        invalid={invalidate}
        placeholder={placeholder}
        type={type}
        className="bg-black text-white"
      />
      {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
    </FormGroup>
  );
}
