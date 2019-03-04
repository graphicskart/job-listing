import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Job } from "../components";

const jobs = [
  {
    logo: require("../assets/images/logo.png"),
    title: "Web Designer / Developer",
    company: "Massimo Artemisis",
    location: "Sacramento, California",
    type: "FULL TIME"
  },
  {
    logo: require("../assets/images/logo.png"),
    title: "Web Designer / Developer",
    company: "Massimo Artemisis",
    location: "Sacramento, California",
    type: "PART TIME"
  },
  {
    logo: require("../assets/images/logo.png"),
    title: "Web Designer / Developer",
    company: "Massimo Artemisis",
    location: "Sacramento, California",
    type: "FREELANCE"
  },
  {
    logo: require("../assets/images/logo.png"),
    title: "Web Designer / Developer",
    company: "Massimo Artemisis",
    location: "Sacramento, California",
    type: "TEMPORARY"
  }
];
export default class Jobs extends Component {
  render() {
    return (
      <Col xs={12}>
        <Row>
          <Col xs={12} className="title-block">
            <h5 className="text-center">Featured Jobs</h5>
            <p className="text-center description">
              Leading Employers already using job and talent.
            </p>
          </Col>
          <Col xs={12} sm={{ span: 8, offset: 2 }}>
            {jobs.map((job, key) => (
              <Job key={key} {...job} />
            ))}
          </Col>
          <Col xs={12} className="text-center load-more">
            <Button variant="outline-danger">Load More Listings</Button>
          </Col>
        </Row>
      </Col>
    );
  }
}
