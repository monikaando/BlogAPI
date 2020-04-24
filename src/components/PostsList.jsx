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
              'Content-Type': "application/x-www-form-urlencoded"
            }
        })
        .then(res => {
            this.setState({
                posts: (res.data).slice(0,4)
            })
            console.log(this.state.posts)
            console.log((res.data).length)
        })
        .catch((err)=> {
          console.log( "Not sent :(")
    })
    }

  
    render() {
      return (
        <div className="blogPosts-box">
            <div className="postsList">
                {this.state.posts.map((post, i) => (
                    <div className="single-blog-post" key={i}>
                        <div className="image-box">
                            <img src={post.img_url} alt=""/>
                            <h6>{(post.created_at).slice(0,10)}</h6> 
                            {/* <p>{post.category.name}</p> */}
                        </div>
                        <div className="text-box">
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    </div>
                    ))}
            </div>
            <button onClick={this.getPosts}>Meer laden</button>
        </div>
      );

    }
  
}

export default PostsList;

