import React, {Component} from 'react';
//react router DOM..components
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


//class component
class App extends Component{
    componentDidMount(){
        this.props.fetchUser();

    }
    render(){
    return (
        
            <BrowserRouter>
                <div className = "container">
                    <Header/>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/surveys" component={Dashboard}/>
                    <Route path="/surveys/new" component={SurveyNew}/>
                </div>
            </BrowserRouter>
        
    );
}
};

export default connect(null,actions)(App);