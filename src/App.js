import React from 'react';
import './App.scss';
import Header from './components/Header';
import Form from './components/Form'
import Footer from './components/Footer'
import PostsList from './components/PostsList'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="blog">
        <Form/>
        <PostsList/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
