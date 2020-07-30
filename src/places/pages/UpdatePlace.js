import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "1",
    title: "CN Tower",
    description: "One of the iconic building of Canada's skyline",
    imageUrl:
      "https://www.google.ca/maps/uv?hl=en&pb=!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNzl4jOuwwe1n6aph6wvZ7VUz-Ys5y-Gl680iOu%3Dw432-h320-k-no!5scn%20tower%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipOqUIzCbGQK7_wGwIm0dMJ1sl8YeZeyy_QOMss_&sa=X&ved=2ahUKEwik6-fVsuzqAhXFl3IEHW2TBIEQoiowLnoECB4QBg#",
    address: "Downtown Toronto",
    location: {
      lat: 43.6532,
      lng: -79.3832,
    },
    creator: "u1",
  },
  {
    id: "2",
    title: "CN Tower",
    description: "One of the iconic building of Canada's skyline",
    imageUrl:
      "https://preview.redd.it/s6vthxvvuc851.jpg?width=640&crop=smart&auto=webp&s=e9826da6c640a6effffc7a1d9334a7ad8da9b9f7",
    address: "Downtown Toronto",
    location: {
      lat: 43.6532,
      lng: -79.3832,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const [isLoading, setLoading] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: { value: "", isValid: false },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: { value: identifiedPlace.title, isValid: true },
          description: { value: identifiedPlace.description, isValid: true },
        },
        true
      );
      setLoading(false);
    }
  }, [setFormData, identifiedPlace]);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2> Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2> Loading</h2>
      </div>
    );
  }
  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      ></Input>

      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description of minimum 5 characters"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      ></Input>

      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
