import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import AsyncComponent from '../../../components/AsyncComponentWapper';

import "./ViewTaskDetails.css";

const TaskImage = props => <img src={props.data} height="50" alt="" />;

const ViewTaskDetails = (props) => {
  const returnDefaultImageLink = (category) => {
    return new Promise((resolve, reject) => {
      let image = '';

      // Select Default Image based on category
      switch (!0) {
        case category === "Twitter":
          image = "Twitter-icon.png";
          break;
        case category === "Facebook":
          image = "facebook-icon.png";
          break;
        case category === "Instagram":
          image = "instagram-icon.png";
          break;
        case category === "Youtube":
          image = "Youtube-icon.png";
          break;
        case category === "VK":
          image = "Vk-icon.png";
          break;
        case category === "Medium":
          image = "medium-icon.png";
          break;
        case category === "LinkedIn":
          image = "linkedin-icon.jpg";
          break;
        case category === "Discord":
          image = "discord-icon.jpg";
          break;
        case category === "Reddit":
          image = "Reddit-icon.png";
          break;
      
        default:
          image = "TelosOtherTasks.jpg";
          break;
      }
  
      props.firebase
        .storage()
        .refFromURL(`gs://telos-task-2ee4b.appspot.com/default-Images/${image}`)
        .getDownloadURL()
        .then(url => resolve(url))
        .catch(err => reject(err));
    })

  };

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
            <div className="d-flex justify-content-around p-3">
            <AsyncComponent promise={() => returnDefaultImageLink(props.task.selectCategory)}>
              <TaskImage />
            </AsyncComponent>
              <h3 style={{lineHeight: 1.8}}>Reward: {props.task.taskAmount} Telos</h3>
            </div>
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
