import React, { Component } from 'react';
import "../styles/PostsList.scss"
import axios from 'axios';

class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state={
            error: null,
            isLoaded: false,
            formControls:[]
        }
    }
    componentDidMount() { 
    var myHeaders = new Headers();
        myHeaders.append("token", "pj11daaQRz7zUIH56B9Z");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("http://178.62.198.162/api/posts", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    }

    // async componentDidMount() { 
    // const response = await axios.get({
    //         URL: 'http://178.62.198.162/api/posts/',
    //         headers: {
    //             'Authorization': 'pj11daaQRz7zUIH56B9Z',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     response.then((response) => {
    //          const items = response.data;
    //         this.setState({ 
    //             isLoaded: false,
    //             items: items 
    //         })
    //         .catch(error => {
    //         console.log(error);
    //   });
    //         console.log(this.items);
    // });
    
  
  
    render() {
    const {error, isLoaded, formControls } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {this.formControls.map(item => (
            <li key={item.title}>
            {item.title}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default PostsList;
