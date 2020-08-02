import React, { useState, useContext } from "react";
import "./PlaceItem.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";

import { AuthContext } from "../../shared/components/context/auth-context";
const PlaceItem = (props) => {
  const auth = useContext(AuthContext);
  const [showConfirmModel, setShowConfirmModel] = useState(false);
  const showDeleteWarningHandler = () => {
    setShowConfirmModel(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModel(false);
  };

  const deletePressed = () => {
    console.log("deletePressed");
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModel(false);
    console.log("DELETING..");
  };

  return (
    <React.Fragment>
      <Modal
        show={showConfirmModel}
        cancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>Are you sure you want to delete?</p>
      </Modal>
      <li className="place-item">
        <Card>
          <div className="place-item__image">
            <img src={props.image} alt={props.title}></img>
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse>VIEW ON MAP</Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger show={deletePressed}>
                DELETE
              </Button>
            )}
            {auth.isLoggedIn && (
              <li>
                <button onClick={auth.logout}> LOGOUT</button>
              </li>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
