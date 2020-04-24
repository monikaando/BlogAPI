import React from 'react';
import '../styles/Popup.scss';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>OK</button>
        </div>
      </div>
    );
  }
}

export default Popup;