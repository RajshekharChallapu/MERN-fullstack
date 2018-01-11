import React, {Component} from 'react';
//react router DOM..components
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';

//dummy componenets
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNewr</h2>;
const Landing = () => <h2>Landing</h2>;

//class component
class App extends Component{
    componentDidMount(){
        
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

export default App;