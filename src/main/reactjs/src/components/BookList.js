import React, {Component} from "react";
import {Button, ButtonGroup, Card, Image, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faList, faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    findAllBooks() {
        axios.get("http://localhost:8081/rest/books")
            .then(response => response.data)
            .then((data) => {
                this.setState({books: data});
            });
    }

    componentDidMount() {
        this.findAllBooks();
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header> <FontAwesomeIcon icon={faList}></FontAwesomeIcon> BookList </Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant={"dark"}>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>ISBN Number</th>
                            <th>Price</th>
                            <th>Language</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.books.length === 0 ?
                                <tr align="center">
                                    <td colSpan="6">No Books Available.</td>
                                </tr> :
                                this.state.books.map((book) => (
                                    <tr key={book.id}>
                                        <td>
                                            <Image src={book.coverPhotoURL} roundedCircle width="25"
                                                   height="25"></Image> &nbsp;
                                            {book.title}
                                        </td>
                                        <td>{book.author}</td>
                                        <td>{book.isbnNumber}</td>
                                        <td>$ {book.price}</td>
                                        <td>{book.language}</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="btn-group btn-group-lg">
                                                        <ButtonGroup>
                                                            <Button size="sm" variant="outline-primary">
                                                                <FontAwesomeIcon
                                                                    icon={faEdit}></FontAwesomeIcon> &nbsp; Edit
                                                            </Button>
                                                            &emsp;
                                                            <Button size="sm" variant="outline-danger">
                                                                <FontAwesomeIcon
                                                                    icon={faTrash}></FontAwesomeIcon> &nbsp;Delete
                                                            </Button>
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}
