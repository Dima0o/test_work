import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Example from './components/Example';
import Breadcrumbs from './components/Breadcrumbs';

class App extends Component {
  render () {
    return (
      <div>
        <Header>

        </Header>

          <div className="container">
              <Breadcrumbs>

              </Breadcrumbs>
              <div className="row">
                <Example>

                </Example>
              </div>
          </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));