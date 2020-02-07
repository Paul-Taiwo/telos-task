import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
  Row,
  Table
} from "reactstrap";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import bg from '../../assets/img/bg-login.jpeg';

import "./ViewAllTaskUsers.css";

const ViewAllTask = (props) => {
  console.log('b4 render ', props);

  const formateDate = (date) => {
    const dateString = new Date(date * 1000);
    const formattedDate = dateString.toLocaleDateString();
    return formattedDate;
  }

  const loadingRows = loading =>
    loading ? (
      <tr className="animated fadeIn pt-1 text-center">
        <td colSpan={6}>Loading...</td>
      </tr>
    ) : (
      <tr className="animated fadeIn pt-1 text-center">
        <td colSpan={6}>There is no document</td>
      </tr>
    );

  const rows =
            (props.requested === !0 && props.tasks.length !== 0)
                ? props.tasks.map(task => {
                    const formattedDate = formateDate(task.dateCreated.seconds);
                    // const formattedTime = formateTime(task.dateCreated.seconds);
                    return (
                        <tr className="d-flex" key={task.id}>
                            <td className="col-3">{task.id}</td>
                            <td className="col-3">{task.taskName}</td>
                            <td className="col-3">{formattedDate}</td>
                            {/* <td className="col-3">formattedTime</td> */}
                            <td className="col-3">{<Badge color="success">Active</Badge>}</td>
                            {/* <td className="col-3">
                                {
                                    <ButtonGroup>
                                        <Link className="btn btn-primary" to={`/admin/docs/edit-doc/${task.id}`}>Edit</Link>
                                        <Link className="btn btn-success" to={`/admin/docs/view-a-doc/${task.id}`}>View</Link>
                                        <Button color="danger" 
                                            onClick={() => updateStateWithIdOfDocToDelete(task.id)}>Delete</Button>
                                    </ButtonGroup>
                                }
                            </td> */}
                        </tr>
                    );
                })
                : (props.requested === true && props.tasks.length === 0) ? 
                    loadingRows(false)
                    : loadingRows(true);

  return (
    <div className="animated fadeIn">
      <div className="d-flex flex-wrap flex-grow-1">
        <Card className="task-card_width mr-2">
          <CardImg src={bg} />
          <CardBody>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam
            nonummy nibh euismod tincidunt ut
          </CardBody>
          <CardFooter>
            <Link to="/"> View Details </Link>
          </CardFooter>
        </Card>
        <Card className="task-card_width mr-2">
          <CardImg src={bg} />
          <CardBody>
            Youtube - make a video-review 20000+ subscribers DE / IT / ZH / JP /
            FR / ID / ES / KO
          </CardBody>
          <CardFooter>
            <Link to="/"> View Details </Link>
          </CardFooter>
        </Card>
        <Card className="task-card_width mr-2">
          <CardImg src={bg} />
          <CardBody>
            Share link with friends
            <p className="mb-0">
              Click{" "}
              <a href="https://ww3.animecruzers.io/download-black-clover-episode-tv-anime-mini-mkv-mp4-720p-480p/">
                https://ww3.animecruzers.io/download-black-clover-episode-tv-anime-mini-mkv-mp4-720p-480p/
              </a>
            </p>
          </CardBody>
          <CardFooter>
            <Link to="/"> View Details </Link>
          </CardFooter>
        </Card>
        <Card className="task-card_width mr-2">
          <CardImg src={bg} />
          <CardBody>
            Invite 2 friends to join
            <p className="mb-0">
              Referral Link{" "}
              <a href="https://ww3.animecruzers.io/download-black-clover-episode-tv-anime-mini-mkv-mp4-720p-480p/">
                https://ww3.animecruzers.io/download-black-clover-episode-tv-anime-mini-mkv-mp4-720p-480p/
              </a>
            </p>
          </CardBody>
          <CardFooter>
            <Link to="/"> View Details </Link>
          </CardFooter>
        </Card>
        <Card className="task-card_width mr-2">
          <CardImg src={bg} />
          <CardBody>
            Invite 5 friends to join
            <p className="mb-0">
              Referral Link{" "}
              <a href="https://ww3.animecruzers.io/download-black-clover-episode-tv-anime-mini-mkv-mp4-720p-480p/">
                https://ww3.animecruzers.io/download-black-clover-episode-tv-anime-mini-mkv-mp4-720p-480p/
              </a>
            </p>
          </CardBody>
          <CardFooter>
            <Link to="/"> View Details </Link>
          </CardFooter>
        </Card>
        <Card className="task-card_width mr-2">
          <CardImg src={bg} />
          <CardBody>
            Invite 10 friends to join
            <p className="mb-0">
              Referral Link{" "}
              <a href="https://ww3.animecruzers.io/download-black-clover-episode-tv-anime-mini-mkv-mp4-720p-480p/">
                https://ww3.animecruzers.io/download-black-clover-episode-tv-anime-mini-mkv-mp4-720p-480p/
              </a>
            </p>
          </CardBody>
          <CardFooter>
            <Link to="/"> View Details </Link>
          </CardFooter>
        </Card>
        <Card className="task-card_width mr-2">
          <CardImg src={bg} />
          <CardBody>
            Invite 20 friends to join
            <p className="mb-0">
              Referral Link{" "}
              <a href="https://ww3.animecruzers.io/download-black-clover-episode-tv-anime-mini-mkv-mp4-720p-480p/">
                https://ww3.animecruzers.io/download-black-clover-episode-tv-anime-mini-mkv-mp4-720p-480p/
              </a>
            </p>
          </CardBody>
          <CardFooter>
            <Link to="/"> View Details </Link>
          </CardFooter>
        </Card>
      </div>

      {/* <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> All Task
            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr className="d-flex">
                    <th className="col-3">Task ID</th>
                    <th className="col-3">Task</th>
                    <th className="col-3">Date Created</th>
                    <th className="col-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </Table>
              <nav>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button">
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button">
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardBody>
          </Card>
        </Col>
      </Row> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    requested: state.firestore.status.requested.tasks,
    tasks: state.firestore.ordered.tasks
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect( [{ collection: "tasks" }] )
)(ViewAllTask);
