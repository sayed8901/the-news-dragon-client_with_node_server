import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import firstPic from '../../../assets/1.png'
import secondPic from '../../../assets/2.png'
import thirdPic from '../../../assets/3.png'

const EditorsInsight = () => {
  return (
    <div className="my-4">
      <h2 className="mb-3">Editors Insight</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
          <Col >
            <Card>
              <Card.Img variant="top" src={firstPic} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card>
              <Card.Img variant="top" src={secondPic} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card>
              <Card.Img variant="top" src={thirdPic} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>
  );
};

export default EditorsInsight;
