import React, { Component } from 'react';
import '../styles/Form.scss'

class Form extends Component {
    constructor(props){
    super(props);
    this.state = {
        formControls: {
            berichtnaam:{
                value: "",
                placeholder: "Geen titel"
            },
            categorie: {
                value: "",
                placeholder: "Geen categorie"
            },
            bericht:{
                value: ""
            }
        }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    }
    // handleSubmit
    // e.preventDefault();
    //put API and button form not possible to click before everything is filled in
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
                <label>Berichtnaam
                <input 
                    type="text"
                    name="berichtnaam"
                    value={this.state.formControls.berichtnaam.value}
                    placeholder={this.state.formControls.berichtnaam.placeholder}
                    onChange={this.handleInputChange}
                />
                </label>
                <label>Categorie
                    <select value={this.state.formControls.categorie.value} onChange={this.handleInputChange}>
                        <option defaultValue>{this.state.formControls.categorie.placeholder}</option>
                        <option value="categorie 1">Categorie 1</option>
                        <option value="categorie 2">Categorie 2</option>
                        <option value="categorie 3">Categorie 3</option>
                        <option value="categorie 4">Categorie 4</option>
                        <option value="categorie 5">Categorie 5</option>
                    </select>
                </label>
                <label>Bericht
                <input 
                    type="text"
                    name="bericht"
                    value={this.state.formControls.bericht.value}
                    onChange={this.handleInputChange}
                />
                </label>
                 <button type="submit" value="Bericht aanmaken" onSubmit={this.handleSubmit}>Bericht aanmaken</button>
                </form>
        </div>
        )
    }
}
export default Form;