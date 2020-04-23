import React, { Component } from 'react';
import '../styles/Form.scss'
import axios from 'axios';
import qs from "qs";

class Form extends Component {
    constructor(props){
    super(props);
    this.state = {
        formControls: {
            title:"",
            category_id: 0,
            content:""
        }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddPost = this.handleAddPost.bind(this);
    }
    handleAddPost(e) {
    e.preventDefault();
    console.log(this.state.formControls);
    axios({
      method: "POST",
      url: `http://178.62.198.162/api/posts/`,
      data: qs.stringify(this.state.formControls),
      "headers": {
        'token': 'pj11daaQRz7zUIH56B9Z',
        "Content-Type": "application/x-www-form-urlencoded"
      }
      
    })
      .then(response => {
        console.log(response);
        console.log("Sent!!!!")
      })
      .catch((err)=> {
          console.log( "Not sent :(")
    })
    }


    
   handleInputChange(e) {
        e.preventDefault();
        console.log(this.state.formControls);
        let updatedControls = {...this.state.formControls};
        updatedControls[e.target.name] = e.target.value;
        console.log(this.state.formControls)
        this.setState({
            formControls:updatedControls
        })
    }
    render() {
        return (
            <div className="form-box">
                <form>
                    <label>Berichtnaam</label>
                    <input 
                        type="text"
                        name="title"
                        value={this.state.formControls.title}
                        placeholder="Geen titel"
                        onChange={this.handleInputChange}
                    />      
                    <label>Categorie</label>
                        <select name="category_id" value={this.state.formControls.category_id} onChange={this.handleInputChange}>
                            <option value={0} disabled defaultValue hidden>Geen categorie</option>
                            <option value={1}>Tech</option>
                            <option value={2}>Nieuws</option>
                            <option value={3}>Sports</option>
                            <option value={4}>Lokaal</option>
                        </select>
                    
                    <label>Bericht</label>
                    <textarea 
                        className="bericht"
                        type="text"
                        name="content"
                        value={this.state.formControls.content}
                        onChange={this.handleInputChange}
                    />
                <div className="button-box">
                    {/* <button type="submit" onSubmit={this.handleAddPost}>Bericht aanmaken</button> */}
                    <button onClick={this.handleAddPost}>Bericht aanmaken</button>
                </div>
            </form>
        </div>
        )
    }
}
export default Form;