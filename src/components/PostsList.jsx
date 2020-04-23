import React, { Component } from 'react';
import "../styles/PostsList.scss"
import axios from 'axios';

class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts: [],
            err: null
        }
        this.getPosts = this.getPosts.bind(this);
        // this.loadMore = this.loadMore.bind(this);

    }
    componentDidMount() {
        this.getPosts()
    }
    getPosts() {
        axios({
            method: "GET",
            url: "http://178.62.198.162/api/posts",
            headers: {
              'token': "pj11daaQRz7zUIH56B9Z",
            }
        })
        .then(res => {
            this.setState({
                posts: (res.data).slice(0,4)
            })
            console.log(this.state.posts)
        })
    }
    render() {
      return (
        <div className="postsList">
        <button onClick={this.getPosts}>Meer laden</button>
            {this.state.posts.map((post, i) => (
                <div key={i}>
                    <img src={post.img_url} alt=""/>
                    <p>{post.created_at}</p>
                    {/* <p>{post.category.name}</p> */}
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            ))}
            
          
        </div>
      );
    }
  
}

export default PostsList;

