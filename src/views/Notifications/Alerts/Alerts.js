import React from "react";
import { Alert } from "reactstrap";

const style = {
  zIndex: 5,
  position: "fixed",
  top: "25%",
  left: "49%",
  transform: "translate(-50%, -50%)"
};

// const style = {
//     position: 'absolute', top: 0, right: 0
// }

const Alerts = props => (
    <Alert style={style} color={props.color} isOpen={props.showErrorMessage} toggle={props.toggleAlert}>
      {props.message}
    </Alert>
);


export default Alerts;
