import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Link, Route, Switch} from 'react-router-dom';
import data from "./data.js";

function App() {
  let [products, setProducts] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Route path="/">
        <div className="jumbotron">
          <h1>20% Season OFF</h1>
          <p>blahblah</p>
          <Button variant="primary">Primary</Button>{" "}
        </div>
        <Container>
          <div className="row">
            {products.map((p,i)=>{
              return(<Product key={i} name={p.title} description={p.content} id={p.id+1} />)
            })}
          </div>
        </Container>
      </Route>
      <Route path='/detail'>
        <div>상세 페이지 어쩌구</div>
      </Route>
    </div>
  );
}

function Product(props) {
  return (
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${props.id}.jpg`} width="100%" />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default App;
