import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageTwo extends Component {
    constructor(props) {
        super(props);

        this.moveToNewApp = this.moveToNewApp.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
    }

    updateFirstName(event) {
        this.props.dispatch({
            type: 'UPDATE_NAME',
            data: {
                firstName: event.target.value
            }
        });
    };

    moveToNewApp() {
       this.props.history.push({
           pathname: '/applicationTwo'
       });
    };

    render() {
        return (
            <div>
                Enter Your First Name
                <input type="text" onBlur={this.updateFirstName} />
                <button onClick={this.moveToNewApp}>Transition to a new app</button>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        firstName: state.firstName
    };
}

export default connect(mapStateToProps)(PageTwo);