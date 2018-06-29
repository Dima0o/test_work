import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
const Example = (props) => {
    return (
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        <FormGroup>
                            <Label for="exampleEmail">Полный адрес</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Короткий</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                    </CardText>
                    <Button>Go somewhere</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                        <div>
                            <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                                <h2>{'TutsPlus - Welcome to React Animations'}</h2>
                            </ReactCSSTransitionGroup>
                        </div>
                        .</CardText>
                    <Button>Go somewhere</Button>
                </Card>
            </Col>
        </Row>
    );
};

export default Example;


