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
// class App extends Component {
  
//   render() {
//     return (
//       <div className="App">
//             <Route exact path="/" component={Home}></Route>
//             <Route exact path="/postName" component={SinglePost}></Route>
//       </div>
//     );
//   }
// }

// export default App;