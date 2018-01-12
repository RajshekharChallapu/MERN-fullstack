import React, {Component} from 'react';
//react router DOM..components
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';


import Header from './Header';
import Landing from './Landing';
//dummy components
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNewr</h2>;


//class component
class App extends Component{
    componentDidMount(){
        this.props.fetchUser();

    }
    render(){
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/surveys" component={Dashboard}/>
                    <Route path="/surveys/new" component={SurveyNew}/>
                </div>
            </BrowserRouter>
        </div>
    );
}
};

export default connect(null,actions)(App);