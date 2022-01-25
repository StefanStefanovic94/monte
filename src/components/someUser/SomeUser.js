import React from "react";
import axios from "axios";
import { FetchData, FetchShows } from "../../services/Fetch"
import Search from "../search/Search";
import { Col, Container, Row } from "react-bootstrap";

class SomeUser extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      repo: [],
    }
  }
  fetchData = () => {

    const headers = {
      'Authorization': `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`

    };
    axios.get(`${`https://api.github.com/users/`}${this.props.match.params.id}`, { headers })
      .then(response => {
        this.setState({
          data: response.data
        })
      }
      );
  }

  fetchRepo = () => {
    const headers = {
      'Authorization': `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`

    };

    axios.get(`${`https://api.github.com/users/`}${this.props.match.params.id}/repos`, { headers })
      .then(response => {
        this.setState({
          repo: response.data
        })
      }
      );
  }
  componentDidMount() {
    this.fetchData()
    this.fetchRepo()

  }




  render() {
    return (
      <div>
        <div className="homepage">
          <Container>
            <Row>
              <Col sm="12" md="6" lg="6">
                <div className="userInfo">
                  <img src={this.state.data.avatar_url} />
                  <p className="name">{this.state.data.name}</p>
                  <p className="bio">{this.state.data.bio}</p>
                </div>
              </Col>
              <Col sm="12" md="6" lg="6">
                <div className="userRepo">
                  <h1 className="repo">Repositories:</h1>
                  {this.state.repo.map((element) => {
                    return <a key={element.id} href={element.html_url}><p className="elementRepo">{element.name}</p></a>
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

    )
  }
}
export default SomeUser