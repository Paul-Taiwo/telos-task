import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardFooter,
  CardImg
} from "reactstrap";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import AsyncComponent from '../../../components/AsyncComponentWapper';

import "./ViewAllTaskUsers.css";

const TaskImage = props => <img src={props.data} className="card-img" alt="" />;

const ViewAllTask = (props) => {

  const returnDefaultImageLink = (category) => {
    return new Promise((resolve, reject) => {
      let image = '';

      // Select Default Image based on category
      switch (!0) {
        case category === "Twitter":
          image = "twitter.jpg";
          break;
        case category === "Facebook":
          image = "Facebook.jpg";
          break;
        case category === "Instagram":
          image = "instagram.jpg";
          break;
        case category === "Youtube":
          image = "youtube.jpg";
          break;
        case category === "VK":
          image = "VKontakte.png";
          break;
        case category === "Medium":
          image = "Medium.jpeg";
          break;
        case category === "LinkedIn":
          image = "LinkedIn.jpg";
          break;
        case category === "Discord":
          image = "discord.jpg";
          break;
        case category === "Reddit":
          image = "reddit.png";
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

  const loadingRows = loading =>
    loading ? (
      <div className="animated fadeIn pt-1 text-center">
        <p>Loading...</p>
      </div>
    ) : (
      <div className="animated fadeIn pt-1 text-center">
        <p>There is no task</p>
      </div>
    );


  const taskCards =
            (props.requested === !0 && props.tasks.length !== 0)
                ? props.tasks.map(({id, taskName, taskDescription, taskImage, taskAmount, selectCategory}) => {

                  return (
                      <Card key={id} className="task-card_width mr-sm-2">

                      {
                        taskImage && taskImage !== null ? <CardImg height="180" src={ taskImage.link } />
                          : 
                          <AsyncComponent promise={() => returnDefaultImageLink(selectCategory)}>
                              <TaskImage />
                          </AsyncComponent> 
                      }

                        <CardBody>
                          {taskName}
                          <p className="mb-0">
                            {taskDescription.substr(0, 40)}...
                          </p>
                          <small>Amount - {`${taskAmount}`} Telos</small>
                        </CardBody>
                        <CardFooter>
                          <Link to={`/home/task/${id}`}> View Details </Link>
                        </CardFooter>
                      </Card>
                  );
                })
                : (props.requested === true && props.tasks.length === 0) ? 
                    loadingRows(false)
                    : loadingRows(true);

  return (
    <div className="animated fadeIn">
      <div className="d-flex flex-wrap flex-grow-1">
          {taskCards}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {

  // console.log('State fire ==> ', state)
  return {
    requested: state.firestore.status.requested.tasks,
    tasks: state.firestore.ordered.tasks
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect( [{ collection: "tasks" }] )
)(ViewAllTask);
