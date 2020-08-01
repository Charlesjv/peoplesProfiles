import React from "react";
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/FormElements/Button";
import "./Auth.css";

const Auth = (props) => {
  const [formState, inputHandler] = useForm(
    {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );

  const onAuthSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="authentication">
      <h2>Auth Page!</h2>
      <hr />
      <form on onSubmit={onAuthSubmitHandler}>
        <Input
          element="input"
          id="email"
          type="email"
          label="email"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
        ></Input>
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(5)]}
        ></Input>
        <Button type="submit" disabled={!formState.isValid}>
          LOGIN
        </Button>
      </form>
    </Card>
  );
};
export default Auth;
