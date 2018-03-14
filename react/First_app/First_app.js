'use strict';

var React = require('react');
require('./styles/First_app.scss');

/**
 * @module First_app
 */
class First_app extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            exampleState : 'initial state'
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUpdate() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div></div>
        );
    }
}

First_app.defaultProps = {
    defaultPropGoesHere: 'default prop'
};

First_app.propTypes = {
    example: React.PropTypes.string
};

First_app.displayName = 'First_app';

module.exports = First_app;