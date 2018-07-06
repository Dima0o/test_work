import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, CardText, CardImg, CardImgOverlay, FormFeedback} from 'reactstrap';

import {Link} from 'react-router-dom';

export default class User extends PureComponent {
    static propTypes = {
        user: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            body: PropTypes.string
        }).isRequired
    };
    showTitelPost = ()=> {
        const {user} = this.props;
        alert(user.title);
    }

    render() {
        const {user} = this.props;
        const element = <Welcome name="Sara" />;
        return (

            <li to={`/users/${user.id}`} className="grid-tile">
                <Card className="item">
                     <div className="item-pnl">
                         {element}
                        <div className="pnl-wrapper">
                            <div className="pnl-description">
                                <span className="pnl-label">{user.title}</span>
                                <span className="pnl-price">$100,00</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </li>

        );
    }
}
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
//https://redux-form.com/6.5.0/examples/simple/