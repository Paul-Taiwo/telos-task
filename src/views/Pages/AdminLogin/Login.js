import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import AlertMe from '../../Notifications/Alerts/Alerts';
import AsyncRedirect from '../../../components/AsyncRedirect';
import { signIn } from "../../../redux/actions/authAction";
import logo from "../../../assets/img/TELOS-TASK-LOGO-09.png";

import './Login.css';

const INITIAL_STATE = {
  email: "",
  password: "",
  visible: false,
  error: null
};


const sleep = () => new Promise(resolve => setTimeout(resolve, 3000));

class Login extends Component {
  state = { ...INITIAL_STATE };

  redirect = path => {
    this.props.history.push(path);
  };

  onDismiss = () => {
    setTimeout(() => this.setState({ visible: false }), 1000);
  };

  // Update Local State as user fills form
  onChange = event => {
    const { name, value } = event.target;
    const newState = { ...this.state, [name]: value };

    this.setState(newState);
  };

  onSubmit = async event => {
    event.preventDefault();

    await this.props.signIn(this.state.email, this.state.password);
  };

  render() {
    const isInvalid = this.state.email === "" || this.state.password === "";

    if (this.props.authFailed === !1 && this.props.user.uid) {
      // localStorage.setItem("user", `${this.props.user.uid}`);

      return (
        <AsyncRedirect
          promise={sleep}
          from="/admin/login"
          to="/admin/dashboard"
        />
      );
    }

    return (
      <div className="app flex-row align-items-center bg_login">
        <Container>
          <div
            className="logo text-center mb-3"
            onClick={() => this.redirect("/")}
          >
            <img src={logo} alt="Telos Logo" />
            <span className="text-white font-lg font-weight-bold">
              Telos Task
            </span>
          </div>

          <Row className="justify-content-center">
            <Col md="8">
              {this.props.authError && (
                <AlertMe
                  showErrorMessage={this.props.authFailed}
                  toggleAlert={this.onDismiss}
                  color={this.props.authError === null ? "success" : "danger"}
                  message={
                    this.props.authError !== null ? this.props.authError : null
                  }
                />
              )}
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmit}>
                      <h1>Admin Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="email"
                          onChange={this.onChange}
                          placeholder="Email"
                          autoComplete="email"
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
                          name="password"
                          onChange={this.onChange}
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            className="px-4 telos-btn_red"
                            disabled={isInvalid}
                          >
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none bg-telos_orange"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        To create an account as an Admin, meet the super Admin
                      </p>
                      <Link to="/register">
                        <Button
                          className="mt-3 telos-btn_red"
                          tabIndex={-1}
                          disabled
                        >
                          Register Now!
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
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
    user: state.auth.user,
    fire: state.firebase
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
