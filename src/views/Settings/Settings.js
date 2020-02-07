import React, { useState } from 'react';
import classnames from 'classnames';

import {
  Col,
  Button,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import Avatar from '../../assets/img/avatars/8.jpg';
import './Settings.css';

const Settings = (props) => {

  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs className="tabs-left">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            <span className="fa fa-user"></span> General
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            <span className="fa fa-lock"></span> Change Password
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            <span className="fa fa-rss"></span> Social Links
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
            <div className="d-sm-flex mb-4 mt-3">
              <img src={Avatar}  alt="User Avatar" className="w-6rem h-6rem mr-3" />
              <div className="pt-2">
                <p className="text-lg mb-0">Usmar John Doe</p>

                <div classnames="">
                  <span class="upload-btn-wrapper">
                    <Input type='file' className="inputfile"  accept="image/*" />
                    <Button color="primary" className="mr-2">Upload Avatar</Button>
                  </span>
                  <span>
                    <Button outline color="danger">Remove Avatar</Button>
                  </span>
                </div>

              </div>
            </div>
          <Row>
            <Col sm="12">
              <Form>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="e.g John_01"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    valid
                    type="text"
                    name="name"
                    id="name"
                    placeholder="e.g John Doe"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    disabled
                    type="email"
                    name="email"
                    id="email"
                    placeholder="e.g johndoe@gmail.com"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="bio">Bio</Label>
                  <Input
                    type="textarea"
                    name="bio"
                    id="bio"
                    rows="6"
                    placeholder="Content..."
                  />
                </FormGroup>
                <Button className="telos-btn_orange float-right">
                  Save Changes
                </Button>
              </Form>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Form>
                <FormGroup>
                  <Label for="oldPassword">Old Password</Label>
                  <Input
                    type="password"
                    name="oldPassword"
                    id="oldPassword"
                    placeholder="Old Password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="newPassword">New Password</Label>
                  <Input
                    type="newPassword"
                    name="newPassword"
                    id="newPassword"
                    placeholder="New Password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="confirmPassword">New Password</Label>
                  <Input
                    type="confirmPassword"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </FormGroup>

                <Button className="telos-btn_orange float-right">
                  Save Changes
                </Button>
              </Form>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <Form>
                <FormGroup>
                  <Label for="facebook">Facebook</Label>
                  <Input    
                    type="text"
                    name="facebook"
                    id="facebook"
                  />
                </FormGroup>
              </Form>
              <Form>
                <FormGroup>
                  <Label for="twitter">Twitter</Label>
                  <Input
                    type="text"
                    name="twitter"
                    id="twitter"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="twitter">Instagram</Label>
                  <Input
                    type="text"
                    name="twitter"
                    id="twitter"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="twitter">Reddit</Label>
                  <Input
                    type="text"
                    name="twitter"
                    id="twitter"
                  />
                </FormGroup>

                <Button className="telos-btn_orange float-right">
                  Save Changes
                </Button>
              </Form>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );

}
export default Settings;
