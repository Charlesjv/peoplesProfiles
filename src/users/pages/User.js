import React from "react";
import UserList from "../components/UserList";

export const User = () => {
  const USERS = [
    {
      id: "ul",
      name: "Max Shwarz",
      image:
        "https://imagevars.gulfnews.com/2019/09/29/Dubai-skyline_16d7de0fdce_large.jpg",
      place: "dubai",
    },
  ];

  return <UserList items={USERS}></UserList>;
};
