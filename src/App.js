import './App.css';
import {Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage.jsx';
import Dogs from './Components/Dogs.jsx'
import Detail from './Components/Detail.jsx';
import CreateDog from './Components/CreateDog';

function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component = {LandingPage} />
      <Route exact path={'/dogs'} component = {Dogs}  />
      <Route exact path={'/createdog'} component = {CreateDog} />
      <Route exact path={'/dogs/:id'} component = {Detail} />
      <h1>Henry Dogs</h1>
    </div>
  );
}

export default App;
