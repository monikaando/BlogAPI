import React, { Component } from 'react';
import "../styles/PostsList.scss"
import axios from 'axios';

class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state={
            allFirstPagePosts: [],
            posts: [],
            err: null,
            firstPage: false,
            counter: 2
        }
        this.getFirstFourPosts = this.getFirstFourPosts.bind(this);
        this.loadMorePostsOnTheFirstPage= this.loadMorePostsOnTheFirstPage.bind(this);
        this.getNextPage= this.getNextPage.bind(this);
        this.loadMorePosts= this.loadMorePosts.bind(this);
    }
    componentDidMount() {
        this.getFirstFourPosts();
    }
    getFirstFourPosts() {
        axios({
            method: "GET",
            url: "http://178.62.198.162/api/posts?page=1",
            headers: {
              'token': "pj11daaQRz7zUIH56B9Z",
              'Content-Type': "application/x-www-form-urlencoded"
            }
        })
        .then(res => {
            this.setState({
                allFirstPagePosts: res.data,
                posts: (res.data).slice(0,4),
                firstPage:true  
            })
        })
        .catch((err)=> {
          console.log( "Not sent")
        })
    }
    loadMorePostsOnTheFirstPage = () => {
        this.setState({
            posts: this.state.allFirstPagePosts
        }) 
    }
    getNextPage = () => {
        axios({
            method: "GET",
            url: `http://178.62.198.162/api/posts?page=${this.state.counter}`,
            headers: {
              'token': "pj11daaQRz7zUIH56B9Z",
              'Content-Type': "application/x-www-form-urlencoded"
            }
        })
        .then(res => {
            this.setState({
                posts: this.state.posts.concat(res.data)
            })
        })
        .catch((err)=> {
          console.log( "Not sent")
    })
    }
    loadMorePosts = () => {
        this.setState({
            counter: this.state.counter +1 
        }) 
        this.getNextPage()
    }
  
    render() {
      let button;
      if(this.state.firstPage === true && this.state.posts.length === 4){
         button = <button onClick={this.loadMorePostsOnTheFirstPage}>Meer laden</button>
      }
      else {
         button = <button onClick={this.loadMorePosts}>Meer laden</button>
      }
        
      return (
        <div className="blogPosts-box">
            <div className="postsList">
                {this.state.posts.map((post, i) => (
                    <div className="single-blog-post" key={i}>
                        <div className="image-box">
                            <img src={post.img_url} alt=""/>
                            <h6>{(post.created_at).slice(0,10)}</h6> 
                            {(post.category===null || post.category.name===null)? (
                                    <p> </p>
                                ):(
                                    <p>{post.category.name}</p>
                                )   
                                }
                        </div>
                        <div className="text-box">
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    </div>
                    ))}
                {button}
            </div>
        </div>
      );
    }
}

export default PostsList;

