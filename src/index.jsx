import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';
import store from './store';
import { Container, Row, Col } from 'reactstrap';
import Header from 'components/Header';
import { Jumbotron, Button } from 'reactstrap';
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Fragment>
           <Header/>

          <BrowserRouter>
            <Switch>

                <Container>
                    <Row>
                        <Col>
                            <Examples/>
                        </Col>
                    </Row>
                    <Row>
              { routes.map((route, idx) => <Route key={idx} {...route} />) }
                    </Row>
                </Container>

            </Switch>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}
const Examples = (props) => {
    return (
        <div>
            <Jumbotron>
                <h5 className="display-3">Hello, world!</h5>
                <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
            </Jumbotron>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));