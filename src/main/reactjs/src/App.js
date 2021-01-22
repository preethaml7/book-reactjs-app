import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Col, Container, Row} from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

    const marginTop = {
        marginTop: "20px"
    };

    return (
        <Router>
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>

                        <Switch>
                            <Route path={"/"} exact component={Welcome}/>
                            <Route path={"/add"} exact component={AddBook}/>
                            <Route path={"/list"} exact component={BookList}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </Router>
    );
}

export default App;
