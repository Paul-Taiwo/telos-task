import React, { Component, useState, useEffect } from 'react';
import { AppHeader } from '@coreui/react';
import { Suspense } from 'react';
import { NavLink as TelosLink } from 'react-router-dom';
import {
  Jumbotron,
  Button,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Container,
  Row,
  Col
} from "reactstrap";
import DefaultFooter from '../../../containers/DefaultLayout/DefaultFooter';
import './LandingPage.css';
import signUpImage from '../../../assets/img/svg/undraw_access_account_99n5.svg';
import completeTaskImage from "../../../assets/img/svg/undraw_complete_task_u2c3.svg";
import getPaidImage from "../../../assets/img/svg/undraw_make_it_rain_iwk4.svg";
import bannerImg from '../../../assets/img/telos-task-phone.png';
import headerImg from "../../../assets/img/TELOS-TASK-LOGO-09.png";

const LandingPage = (props) => {

  let [ isOpen, setIsOpen ] = useState(false);

  // loading = () => (
  //   <div className="animated fadeIn pt-1 text-center">Loading...</div>
  // );

  const toggle = () => {
    isOpen = !isOpen;
  }

    return (
      <div>
        <Navbar className="navbar pl-5 pr-5 font-18" expand="lg">
          <NavbarBrand className="text-white" href="/">
            <img className="font-font-weight-bolder" src={headerImg} alt="Telos Logo"/> Telos Task
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse className="justify-content-center" isOpen={isOpen} navbar>
            <Nav className="" navbar>
              <NavItem>
                <NavLink className="text-white" href="#">
                  Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-white" nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <TelosLink to="/login">Login</TelosLink>
                  </DropdownItem>
                  <DropdownItem>
                    <TelosLink to="/register">Sign Up</TelosLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink className="text-white" href="#">
                  Contact
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-white" nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Terms of Service</DropdownItem>
                  <DropdownItem>Privacy Policy</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
        </Navbar>
        <Jumbotron className="banner h-100vh mb-0">
          <div className="banner-text">
            {/* <h1 className="display-4">Complete Task. Earn. Easy As Pie</h1> */}
            <h1 className="position-relative display-3 underline mb-3 banner-text-md-h1 wow animated fadeInUp">
              Telos Task
            </h1>
            <p className="lead banner-text_p animated fadeInUp delay-1s">
              Earn tokens for doing <br /> micro tasks.
            </p>
            <p className="font-xl text-yellow animated fadeInUp delay-2s">
              "Do less, earn more"
            </p>
            <p className="lead animated fadeInUp delay-3s">
              <Button color="success mr-2">Sign Up</Button>
              <Button className="telos-btn_red">Learn More</Button>
            </p>
          </div>
          <div className="banner-img animated flipInX delay-1s">
            <img src={bannerImg} alt="Banner" />
          </div>
        </Jumbotron>

        <div className="bg-white">
          <Container>
            <Row className="pt-10">
              <Col lg={6}>
                <div className="text-center  mb-3 wow animated fadeInLeft delay-1s" data-wow-delay="1s">
                  <img
                    src={signUpImage}
                    className="ld-img_height"
                    alt="Sign Up"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="pt-3-5 pb-4 wow animated fadeInRight delay-2s" data-wow-delay="1s">
                  <h2 className="mb-4">Sign Up</h2>
                  <p className="l-p-text">
                    Telos Task gives you that option to sign up and check the list of tasks available. 
                    Register for a free account now. 
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="pb-5 mt-10">
              <Col lg={{ size: 6, order: 2 }}>
                <div className="text-center mb-3 wow animated fadeInUp delay-3s" data-wow-delay="1s">
                  <img
                    src={completeTaskImage}
                    className="ld-img_height ld-img_width"
                    alt="Sign Up"
                  />
                </div>
              </Col>
              <Col lg={{ size: 6, order: 1 }}>
                <div className="pt-3-5 pb-4 wow animated fadeInUp delay-4s" data-wow-delay="1.5s">
                  <h2 className="mb-4">Complete a Task</h2>
                  <p className="l-p-text">
                    As a Task/microworker, you have a lot of tasks to choose from. 
                    Select your choices of tasks and start working.
                    The more tasks you complete, the more TASK tokens you earn.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="pb-5">
              <Col lg={6}>
                <div className="text-center mb-3 wow animated fadeInUp" data-wow-delay="1s">
                  <img
                    src={getPaidImage}
                    className="ld-img_height ld-img_width"
                    alt="Sign Up"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="pt-4-1 pb-4 wow animated fadeInUp" data-wow-delay="1s">
                  <h3 className="mb-4">Get Paid</h3>
                  <p className="l-p-text">
                    Sign Up for a Telos Account now and enjoy the benefits the system has to offer.
                    Choose Task, Complete Them and Earn TASK TOKENS .
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <DefaultFooter className="text-center footer pt-3 text-white" />
      </div>
    );
}

export default LandingPage;
