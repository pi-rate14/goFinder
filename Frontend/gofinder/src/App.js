import './index.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import InputPage from './pages/InputPage'
import OutputPage from './pages/OutputPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/input" component={InputPage} />
          <Route path="/output">
            <OutputPage></OutputPage>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
