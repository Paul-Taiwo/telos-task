import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardImg,
  CardHeader,
  Col,
  Row,
  Table
} from "reactstrap";

import Avatar from '../../assets/img/avatars/8.jpg';
import './UserProfile.css';

const UserProfile = (props) => {

  return (
    <>
      <Row>
        <Col className="p-0" xs="12">
          <Card>
            <CardHeader>Account</CardHeader>

            <CardBody>
              <Row className="p-2">
                <Col md={3} lg={2} className="p-0 mb-3">
                  <CardImg src={Avatar}></CardImg>
                </Col>
                <Col md={9} lg={4}>
                  <Table borderless>
                    <tbody>
                      <tr>
                        <th className scope="row">
                          Username
                        </th>
                        <td>Mark</td>
                      </tr>
                      <tr>
                        <th className scope="row">
                          Name
                        </th>
                        <td>Jacob James</td>
                      </tr>
                      <tr>
                        <th className scope="row">
                          Email
                        </th>
                        <td>jj@gmail.com</td>
                      </tr>
                      <tr>
                        <th className scope="row">
                          Bio
                        </th>
                        <td>
                          <p>
                            A blockchain enthusiast, love lorem ishfs jfsbjdsghgh, gchcgmbjsdhjbsjfbsj
                            hgjbfjsfghsjbfjsfhjisbfjsnbjfshbfj
                            sbfsjbfjsfbjsbsjkfbsjfbsjfbsnbfj mjfjf jfbdjf
                            djdfhidohhiy8ewte ihsdhisd,dn idhidhwkj
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md={12} lg={6}>
                  <Table borderless>
                    <tbody>
                      <tr>
                        <th scope="row">Status</th>
                        <td>Active</td>
                      </tr>
                      <tr>
                        <th scope="row">Role</th>
                        <td>User</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col xs={12}>
                  <Link  to="/home/settings" className="telos-btn_orange btn btn-secondary">Edit Profile</Link>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="p-0 pr-3" lg="6">
          <Card>
            <CardBody>
              <Row className="p-2">
                <h3 className="pl-2">Social Links</h3>
                <Table borderless>
                  <tbody>
                    <tr>
                      <th className scope="row">
                        Twitter
                      </th>
                      <td>
                        <a href="https://twitter.com/adoptionism744">
                          https://twitter.com/adoptionism744{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className scope="row">
                        Facebook
                      </th>
                      <td>
                        <a href="https://www.facebook.com/adoptionism664">
                          https://www.facebook.com/adoptionism664
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className scope="row">
                        Instagram
                      </th>
                      <td>
                        <a href="https://www.instagram.com/adopt-ionism744/">
                          https://www.instagram.com/adopt-ionism744/
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className scope="row">
                        Reddit
                      </th>
                      <td>
                        <a href="https://www.instagram.com/adopt-ionism744/">
                          https://www.reddit.com/adopt-ionism744/
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col className="p-0" lg="6">
          <Card>
            <CardBody>
              <Row className="p-2">
                <h3 className="pl-2">Information</h3>
                <Table borderless>
                  <tbody>
                    <tr>
                      <th className scope="row">
                        Birthday
                      </th>
                      <td>28 January 1998</td>
                    </tr>
                    <tr>
                      <th className scope="row">
                        Mobile
                      </th>
                      <td>+65958951757</td>
                    </tr>
                    <tr>
                      <th className scope="row">
                        Gender
                      </th>
                      <td>Male</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );

}
export default UserProfile;
