import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

class SinglBook extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="d-flex row justify-content-around">
            {fantasy.map((book) => {
              return (
                <Card className="m-2 cardBook d-flex p-2" style={{ width: "21rem" }} key={`BOOK-${book.asin}`}>
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Img className="cardImg" variant="top" value src={book.img} />
                    <Card.Text>value={book.category}</Card.Text>
                    <Card.Text> € {book.price}</Card.Text>
                    <Button className="btn btnBay">Acquista</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SinglBook;
