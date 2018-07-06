import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Card,Input, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';

import { Col,  Form, FormGroup, Label,  FormText } from 'reactstrap';

//икноки для работы с компонетом
import AddCard from 'react-icons/lib/md/add-shopping-cart';
import Add from 'react-icons/lib/md/add';
import Remove from 'react-icons/lib/md/remove';

import { MorphReplace } from 'react-svg-morph';
export default class User extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1,
            cadr:{
                titel:'',
                id:''
            },
            outline:true
        }
    }
    static propTypes = {
        user: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            body: PropTypes.string,
            counter: 1
        }).isRequired
    };
    showTitelPost = ()=> {
        const {user} = this.props;
        alert(user.title);
    }
    handleMinusClick = () => {
        const { counter } = this.state;

        this.setState({
            counter: counter - 1
        });
    }

    handlePlusClick = () => {
        const { counter } = this.state;

        this.setState({
            counter: counter + 1
        });
    }
    handleAddClick = () => {
        const { counter } = this.state;

        this.setState({
            counter: counter + 1
        });
    }

    render() {
        const {user} = this.props;
        const { counter } = this.state;
        //const description = <Description name={user.name} />;
        const element = <Welcome name="Sara" />;
       const status =()=>{
           if (!this.state.outline){
              let status="outline";
           }
       }
        return (
                <div sm="6" to={`/users/${user.id}`} class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                    <Card>
                        <CardBody>
                            <CardTitle>{user.title}</CardTitle>
                            <CardText>
                                {user.body}
                            </CardText>
                            <CardText>
                                <FormGroup row>
                                    <Button    size="sm" color="link" onClick={this.handleMinusClick}><Remove /></Button>
                                    {' '}
                                        <Button    size="sm" color="link" onClick={this.handleMinusClick}>{ counter } шт.</Button>
                                    {' '}
                                        <Button   size="sm"   color="link" onClick={this.handlePlusClick}><Add /></Button>

                                    <Button onClick={this.handleAddClick} {status}  size="sm" color="primary"><AddCard /></Button>{' '}
                                </FormGroup>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
        );
    }
}


function Welcome(props) {
    return (
        <div class="pnl-description">
            <span class="pnl-label">{props.name}</span>
            <span class="pnl-price">{props.prise}</span>
        </div>
    );
}

function App(price,name) {
    return (
        <div>
            <Welcome name={name} prise={prise}/>
        </div>
    );
}
//https://redux-form.com/6.5.0/examples/simple///
//icon react http://react-icons.github.io/react-icons/md.html

//redux https://github.com/appticles/pwa-theme-woocommerce