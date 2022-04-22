import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Home from './components/home'
import AllProjects from './components/AllProjects'

import './App.css'
import editProject from './components/EditProject'
import AddProject from './components/AddProject'
// import { } from './components/service/api';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AllProjects} />
        <Route exact path="/addproject" component={AddProject} />
        <Route exact path="/editproject/:_id" component={AddProject} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
