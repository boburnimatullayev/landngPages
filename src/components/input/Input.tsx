import { ChangeEvent, FC } from "react";
import { Label } from "./input.s";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

 export const Input: FC<InputProps> = ({
  type,
  label,
  name,
  placeholder,
  onChange

}) => {
  return (
    <>
      <Label htmlFor={label}>
        {label}
        <input
          type={type}
          id={label}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className="contact-input"
        />
      </Label>
      {/* {error && <p className="error">Input filed can`t be empty!</p>} */}
    </>
  );
};


