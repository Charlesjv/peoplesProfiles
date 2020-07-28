import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

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
const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces}></PlaceList>;
};

export default UserPlaces;
