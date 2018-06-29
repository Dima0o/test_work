/*
import React, { Component } from 'react';

import classNames from 'classnames';



export default class Example extends Component {
  static defaultProps = {
    size: 'maxi'
  }

  render () {
    const { size, children } = this.props;
    const headerClasses = classNames({
      header: true,
      'header--mini': size === 'mini',
      'header--maxi': size === 'maxi',
    })

    return (


                  <section>
                      <h1 className="text-center text-primary">Pure CSS Bootstrap 4 Cascading Drop Down Menu</h1>
                      <p clas="text-center"> A simple Bootstrap 4 dropdown navigation menu made with CSS Only. Dropdowns
                          are marked with a plus sign ( + )</p>
                  </section>


    )
  }
}*/

import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default Example;