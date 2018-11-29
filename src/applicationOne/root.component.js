import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

const ApplicationOne = ({ globalStore }) => (
    <Provider store={globalStore} >
        <Router>
            <div>
                <Route exact path="/" component={PageOne} />
                <Route path="/applicationOne/pageTwo" component={PageTwo} />
            </div>
        </Router>
    </Provider>
);

export default ApplicationOne;
