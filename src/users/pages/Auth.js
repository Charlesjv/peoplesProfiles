import React, { useState, useContext } from "react";
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/FormElements/Button";
import "./Auth.css";
import { AuthContext } from "../../shared/components/context/auth-context";

const Auth = (props) => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );

  const onAuthSubmitHandler = (e) => {
    e.preventDefault();
    auth.login();
  };

  const switchModeHandler = (e) => {
    if (!isLoginMode) {
      setFormData(
        { ...formState, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData({ ...formState.inputs, name: { value: "", isValid: false } });
    }
    setIsLoginMode((prevState) => !prevState);
  };

  return (
    <Card className="authentication">
      <h2>Auth Page!</h2>
      <hr />
      <form on onSubmit={onAuthSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="YourName"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            errorText="Please enter a name"
          ></Input>
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="Email"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
        ></Input>
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password of min 5 characters"
        ></Input>
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGN UP"}
        </Button>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? "LOGIN " : "SIGN UP"}{" "}
        </Button>
      </form>
    </Card>
  );
};
export default Auth;
