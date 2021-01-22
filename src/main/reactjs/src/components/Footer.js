import React, {Component} from "react";
import {Col, Container, Navbar} from "react-bootstrap";

export default class Footer extends Component {

    render() {

        let fullYear = new Date().getFullYear();

        return (
            <Navbar fixed={"bottom"} bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>
                            &#169; {fullYear} - {fullYear + 1}, All Rights Reserved by ItsJustNull Inc.
                        </div>

                    </Col>

                </Container>
            </Navbar>
        );
    }
}

