import './App.css';
import Navbar from './components/Navbar/Navbar';
import PostContainer from './components/PostContainer/PostContainer';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/end'></Route>
          <Route path='/' exact>
          <Navbar/>
      <PostContainer/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
