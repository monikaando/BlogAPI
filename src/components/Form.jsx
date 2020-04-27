import React, { Component } from 'react';
import '../styles/Form.scss'
import axios from 'axios';
import qs from "qs";
import Popup from './Popup'; 

class Form extends Component {
    constructor(props){
    super(props);
    this.state = {
        formControls: {
            title:"",
            category_id:0,
            content:"",
            showPopup: false
        }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddPost = this.handleAddPost.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    }

    handleAddPost(e) {
    e.preventDefault();
    console.log(this.state.formControls);
    axios({
      method: "POST",
      url: `http://178.62.198.162/api/posts`,
      data: qs.stringify(this.state.formControls),
      "headers": {
        'token': 'pj11daaQRz7zUIH56B9Z',
        "Content-Type": "application/x-www-form-urlencoded"
      }
      
    })
      .then(response => {
        console.log(response);
        this.setState({
          formControls: {
            title:"",
            category_id:0,
            content:""
        }
        })
        this.togglePopup();
      })
      .catch((err)=> {
          console.log( "Not sent")
    })
    }    
   togglePopup() {
        this.setState({
            formControls: {
                showPopup: !this.state.formControls.showPopup
            }
   });
 } 
   handleInputChange(e) {
        e.preventDefault();
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
                        aria-label="title"
                        type="text"
                        name="title"
                        value={this.state.formControls.title}
                        placeholder="Geen titel"
                        onChange={this.handleInputChange}
                    />      
                    <label>Categorie</label>
                        <select type="number" aria-label="category" name="category_id" value={this.state.formControls.category_id} onChange={this.handleInputChange}>
                            <option name="category_id" aria-selected = "true" value={0} disabled defaultValue hidden>Geen categorie</option>
                            <option name="category_id" aria-selected = "false" value={1}>Tech</option>
                            <option name="category_id" aria-selected = "false" value={2}>Nieuws</option>
                            <option name="category_id" aria-selected = "false" value={3}>Sports</option>
                            <option name="category_id" aria-selected = "false" value={4}>Lokaal</option>
                        </select>
                    
                    <label>Bericht</label>
                    <textarea 
                        className="bericht"
                        aria-label="content"
                        type="text"
                        name="content"
                        value={this.state.formControls.content}
                        onChange={this.handleInputChange}
                    />
                <div className="button-box">
                   <button onClick={this.handleAddPost}>Bericht aanmaken</button>
                    {this.state.formControls.showPopup ?  
                        <Popup  
                        text='Bericht toegevoegd'  
                        closePopup={this.togglePopup}  
                        />  
                    : null  
                    }  
                </div>
            </form>
        </div>
        )
    }
}
export default Form;