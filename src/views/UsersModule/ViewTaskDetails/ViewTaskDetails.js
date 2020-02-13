import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  CardImg
} from "reactstrap";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import AsyncComponent from '../../../components/AsyncComponentWapper';

import "./ViewTaskDetails.css";


const ViewTaskDetails = (props) => {
  console.log(props)
  const loading = loading =>
    loading ? (
      <div className="animated fadeIn pt-1 text-center">
        <p>Loading...</p>
      </div>
    ) : (
      <div className="animated fadeIn pt-1 text-center">
        <p>There is no task</p>
      </div>
    );

    if (props.requested && props.task !== null) {
      return (
        <div className="animated fadeIn">
          <Card>
            <CardHeader className="text-center">{props.task.taskName}</CardHeader>
            <CardBody>
              <h3>Instructions:</h3>
              <p>{props.task.taskDescription}</p>
            </CardBody>
          </Card>
        </div>
      );
    } 

    if (props.requested && props.task === null) {
      return (
        <div className="animated fadeIn">
          <Card>
            <CardBody>Can't find task</CardBody>
          </Card>
        </div>
      );
    } 

    return loading(true)

  
};

const mapStateToProps = (state, ownProps) => {
  const ID = ownProps.match.params.id;
  const task = state.firestore.ordered.tasks ? state.firestore.ordered.tasks.find(
    ({ id }) => id === ID
  ) : (null);

  return {
    requested: state.firestore.status.requested.tasks,
    task: task,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect( [{ collection: "tasks" }] )
)(ViewTaskDetails);
