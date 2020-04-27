import React, { Component } from 'react';
import "../styles/PostsList.scss"
import axios from 'axios';

class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state={
            allPosts: [],
            posts: [],
            err: null,
            counter: 0
        }
        this.getPosts = this.getPosts.bind(this);
        // this.pickTheNextPostFromArray = this.pickTheNextPostFromArray.bind(this);
        this.loadMorePosts= this.loadMorePosts.bind(this);
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
                allPosts: res.data,
                posts: (res.data).slice(0,4)  
            })
            console.log(this.state.posts)
            console.log(this.state.allPosts)
            console.log((res.data).length)
        })
        .catch((err)=> {
          console.log( "Not sent")
    })
    }

    // pickTheNextPostFromArray = (array)=> {
    //     for(let i=4; i<10; i++){
    //         return array[((array.indexOf(i)) + (this.state.counter + 1))];//5
    //     }
    // }
    // pickTheSecondNextPostFromArray = (array)=> {
    //     for(let i=4; i<10; i++){
    //         return array[((array.indexOf(i)) + (this.state.counter + 2))];//6
    //         break;
    //     }
    // }
    
    loadMorePosts = () => {
    this.setState({
        posts: [...this.state.allPosts],
        counter: this.state.counter +1
    }) 
    console.log(this.state.counter)
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
            <button onClick={this.loadMorePosts}>Meer laden</button>
        </div>
      );

    }
  
}

export default PostsList;

