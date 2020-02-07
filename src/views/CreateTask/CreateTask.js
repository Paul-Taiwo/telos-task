import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  FormText
} from 'reactstrap';

import AlertMe from "../../views/Notifications/Alerts/Alerts";
import { createTaskAction } from "../../redux/actions/createTaskAction";

const CreateTask = (props) => {
  
  // States
  const [taskData, setTaskData] = useState({
    taskName: null,
    taskDescription: null,
  });
  const [showAlert, setShowAlert] = useState(false);

  const dismissAlertHandler = () => {
    setTimeout(() => { setShowAlert(false)}, 2500)
  };

  // Handle form input changes
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setTaskData({...taskData, [name]: taskData[name] = value})
  };

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    await props.createTask(taskData)
    setShowAlert(true);
    dismissAlertHandler();
  };

  return (
      <div className="animated fadeIn">
        <AlertMe 
          showErrorMessage={showAlert}
          color={(props.taskState.success) ? 'success' : 'danger'} 
          message={ (props.taskState.success) ? 'Task created successfully' : 'Task not created'  } 
        />

        <Row>
          <Col xs="12">
            <Card>
              <form name="taskCreationForm" onSubmit={onSubmitHandler}>
                { props.taskState.success ? document.forms.taskCreationForm.reset() : (null)}
                <CardHeader>
                  <strong>Create Task</strong>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="taskName">Task Name</Label>
                    <Input type="text" id="taskName" name="taskName" onChange={onChangeHandler} placeholder="Enter task name" />
                  </FormGroup>

                  <FormGroup>
                    <Label for="taskImage">Task Image</Label>
                    <Input type="file" name="taskImage" id="taskImage" />

                    <FormText color="muted">
                      Upload an image for the task
                    </FormText>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="taskAmount">Amount</Label>
                    <Input type="number" id="taskAmount" name="taskAmount" onChange={onChangeHandler} placeholder="2" />
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleSelect">Select Category</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>Facebook</option>
                      <option>Twitter</option>
                      <option>Instagram</option>
                      <option>Reddit</option>
                      <option>Other</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                      <Label htmlFor="taskDescription">Description</Label>
                      <Input type="textarea" name="taskDescription" onChange={onChangeHandler} id="taskDescription" rows="9" placeholder="Content..." />
                  </FormGroup>

                </CardBody>
                <CardFooter>
                  <Button type="submit" className="telos-btn_red" size="md"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                </CardFooter>
              </form>
              
            </Card>
          </Col>
        </Row>
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    taskState: state.task,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: taskData => dispatch(createTaskAction(taskData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
