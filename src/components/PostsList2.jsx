import React, { Component } from 'react';
import "../styles/PostsList.scss"
import axios from 'axios';
import qs from 'qs';
class PostsList2 extends Component {
    constructor(props) {
        super(props)
        this.getPageOne = this.getPageOne.bind(this);
        this.state = {
            pageOne: [],
            err: null
        };
    }
        getPageOne(e) {
        e.preventDefault();
        
        axios({
            method: "GET",
            url: "http://178.62.198.162/api/posts?page=1",
            headers: {
              'token': "pj11daaQRz7zUIH56B9Z",
            },
            
          })
            .then(response => {
                console.log(response.data);
                this.setState({
                    pageOne: response.data
                })
                console.log(this.state.pageOne)
            });
        }
    render() {
        return (
            <div className="postsList">
                <h1>test</h1>
                <button onClick={this.getPageOne}>CLICK AND CHECK YOUR CONSOLE</button>
            </div>
        );
    }
}
export default PostsList2;



// axios.all([
//   axios.get('https://api.github.com/users/mapbox'),
//   axios.get('https://api.github.com/users/phantomjs')
// ])


// axios.all([
//   axios.get('http://178.62.198.162/api/posts?page=1'),
//   axios.get('http://178.62.198.162/api/posts?page=2'),
// ])