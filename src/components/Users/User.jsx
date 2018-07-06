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
        //const description = <Description name={user.name} />;
        const element = <Welcome name="Sara" />;
        //const Favorites = <Favorites name="Sara" />;
        // const Tocart = <Tocart name="Sara" />;
        return (
            <li to={`/users/${user.id}`} className="grid-tile">
                <div class="item">
                    <div class="item-pnl">
                        <div class="pnl-wrapper">
                            <App />
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}
//https://redux-form.com/6.5.0/examples/simple/