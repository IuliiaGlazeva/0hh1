import React, { Component } from 'react';
import Board from './containers/Board'
import CreateGameButton from './components/CreateGameButton'
import Progress from './components/Progress'
import Finished from './components/Finished'
import LoginPage from './routes';




import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">0hh1</h1>

        <div className="actions">
          <CreateGameButton />
        </div>
        <Progress />
        <Board />
        <Finished />
        <LoginPage />
      </div>
    )
  }
}

export default App
