import React, { Component } from 'react';
import "../styles/PostsList.scss"
import axios from 'axios';

class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts: [{}],
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
                posts: res.data
            })
            console.log(this.state.posts)
        })
    }
    // loadMore(){
    //     axios.all([
    //         axios({
    //             method:"GET",
    //             url:"http://178.62.198.162/api/posts?page=46",
    //             headers: {
    //                 'token': "pj11daaQRz7zUIH56B9Z",
    //             }
    //         })
    //     ])
    //     .then(res => {
    //         console.log(res.data)
    //         this.setState({
    //             posts: res.data
    //         })
    //         console.log(this.state.posts)
    //     })
    // }
    render() {
      return (
        <div className="postsList">
        <button onClick={this.getPosts}>Meer laden</button>
            {this.state.posts.map((post, i) => (
                <div key={i}>
                    <img src={post.img_url} alt=""/>
                    <p>{post.created_at}</p>
                    <h1>{post.title}</h1>
                    <h2>{post.category_id}</h2>
                    <p>{post.content}</p>
                    <h1>test</h1>
                </div>
            ))}
            
          
        </div>
      );
    }
  
}

export default PostsList;

