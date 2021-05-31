import React from "react";
import { Form, FormControl, Button, Navbar } from "react-bootstrap";
import "./NavBar.css";
import Addmovie from "./Addmovie";
import RateStars from "./RateStars";
const NavBar = ({ setSearch, rate, setrate, moviesinfo, setMovies }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="bar">
        <Navbar.Brand href="#">
          <RateStars rate={rate} setrate={setrate} />
        </Navbar.Brand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search ..."
            className="mr-2"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
        <Navbar.Brand href="#">
          <Addmovie moviesinfo={moviesinfo} setMovies={setMovies} />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavBar;
