import './App.css';
import axios from "axios"
import React from 'react';
import Homepage from './components/homepage/Homepage';
import Header from './components/header/Header';
import { Switch, Route } from "react-router-dom"
import SomeUser from './components/someUser/SomeUser';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      repo: []
    }
  }

  fetchData = () => {

    const headers = {
      'Authorization': `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`

    };
    axios.get("https://api.github.com/users/stefanstefanovic94", { headers })
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

    axios.get("https://api.github.com/users/StefanStefanovic94/repos")
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
    return (<div>
      <Header />


      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/user/:id" component={SomeUser}></Route>
      </Switch>
    </div>)
  }
}
export default App 
