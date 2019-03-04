import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Tag } from "../components";

export default class Job extends Component {
  render() {
    const {
      title = "",
      company = "",
      logo = "",
      location = "",
      type = ""
    } = this.props;
    return (
      <Row className="job">
        <Col xs={12}>
          <Row>
            <Col xs={2}>
              <img src={logo} />
            </Col>
            <Col xs={5}>
              <Row>
                <Col xs={12} className="designation">
                  {title}
                </Col>
                <Col xs={12} className="company">
                  {company}
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <Row>
                <Col xs={12} className="address">
                  <i className="fas fa-map-marker-alt float-left" />
                  <span className="float-left country">{location}</span>
                </Col>
              </Row>
            </Col>
            <Col xs={2}>
              <Row>
                <Col xs={12} className="favorite">
                  <i className="far fa-heart float-left" />
                  <Tag title={type} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
