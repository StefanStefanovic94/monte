import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./search.scss"
import { Col, Container, Row } from "react-bootstrap";

// token = "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"
class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            search: [],
            value: ``
        }
    }

    searched = (event) => {
        let ancx = event.target.value
        this.setState({
            value: ancx
        })
    }
   
    fetchData = () => {
        axios.get("https://api.github.com/search/users?q=" + this.state.value)
            .then(response => {
                this.setState({
                    search: response.data.items

                })
            }
            );
    }

    componentDidMount() {
        // this.fetchData()
    }


    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.fetchData()
        }
    }


    render() {
        return (
            <Container>

                <div className="wrapSearch">
                    <Row>
                        <Col sm="8" md="9" lg="10">
                            <input onKeyPress={this.handleKeyPress} onChange={this.searched} placeholder="search here for user..."></input>
                        </Col>
                        <Col sm="4" md="3" lg="2">
                            <button className="button" onClick={this.fetchData}>search</button>
                        </Col>
                        <Col sm="8" md="9" lg="10">
                            <div className="parentList" >
                                {this.state.value === "" ? "" : this.state.search.map(element => (
                                    <Link to={`/user/${element.login}`}>
                                        <div className="list">
                                            <img className="image" src={element.avatar_url} key={element.id} />
                                            <p className="text">{element.login}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                        </Col>
                    </Row>
                </div>

            </Container>
        )
    }
}
export default Search