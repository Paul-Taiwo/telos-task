import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import AlertMe from "../../Notifications/Alerts/Alerts";
import AsyncRedirect from "../../../components/AsyncRedirect";


import { signUp } from '../../../redux/actions/authAction';
import logo from "../../../assets/img/TELOS-TASK-LOGO-09.png";
import "./Register.css";

const INITIAL_STATE = {
  email: "",
  passwordOne: "",
  passwordTwo: "",
  visible: false,
};

const sleep = () => new Promise(resolve => setTimeout(resolve, 3000));

class Register extends Component {
  state = { ...INITIAL_STATE };

  // Redirect to home page if sign up is successfull
  redirect(path) {
    this.props.history.push(path);
  }

  // Dismiss error alert
  onDismiss = () => {
    this.setState({ visible: false });
  };

  // Update Local State as user fills form
  onChange = event => {
    const { name, value } = event.target;
    const newState = { ...this.state, [name]: value };
    this.setState(newState);
  };


  onSubmit = async event => {
    event.preventDefault();
    await this.props.signUp(this.state.email, this.state.passwordOne);

    if (this.props.authError) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }

  };

  render() {
    const doesPasswordNotMatch = this.state.passwordOne !== this.state.passwordTwo;

    const isInvalid =
      this.state.email === "" ||
      this.state.username === "" ||
      this.state.passwordOne === "" ||
      doesPasswordNotMatch;

    if (this.props.authFailed === !1)
      return (
        <AsyncRedirect promise={sleep} from="/login" to="/home/dashboard" />
      );


    return (
      <div className="app flex-row align-items-center bg_register">
        <Container>
          <div className="logo text-center mb-3"  onClick={() => this.redirect("/")}>
            <img src={logo} alt="Telos Logo" />  
            <span className="text-white font-lg font-weight-bold">Telos Task</span>
          </div>

          <Row className="justify-content-center">
            <Col md="8">
              <AlertMe
                showErrorMessage={doesPasswordNotMatch}
                color="danger"
                message="Password is does not match"
              />

              {this.props.authFailed && (
                <AlertMe
                  showErrorMessage={this.state.visible}
                  toggleAlert={this.onDismiss}
                  color="danger"
                  message={this.props.authError}
                />
              )}
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmit}>
                      <h1>Register</h1>
                      <p className="text-muted">Create your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="email"
                          onChange={this.onChange}
                          placeholder="Email"
                          autoComplete="email"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          name="passwordOne"
                          onChange={this.onChange}
                          placeholder="Password"
                          autoComplete="new-password"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          name="passwordTwo"
                          onChange={this.onChange}
                          placeholder="Repeat password"
                          autoComplete="new-password"
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="12">
                          <Button
                            disabled={isInvalid}
                            className="px-4 telos-btn_red"
                          >
                            Create
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none bg-yellow"
                  style={{ width: "44%" }}
                >
                  <div className="my-auto">
                    <CardBody className="text-center my-auto">
                      <div>
                        <h2>Sign in</h2>
                        <p>Already have an account? Sign In</p>
                        <Link to="/login">
                          <Button
                            className="mt-3 telos-btn_red"
                            active
                            tabIndex={-1}
                          >
                            Sign In Now!
                          </Button>
                        </Link>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    authFailed: state.auth.authFailed,
    fire: state.firebase
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: (email, password) => dispatch(signUp(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
