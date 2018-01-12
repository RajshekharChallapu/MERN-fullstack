import React, {Component} from 'react';
import {connect} from 'react-redux';

//class base components
class Header extends Component {
    renderContent(){
        switch(this.props.auth){
            case null:
             return 'Still deciding';

            case false:
            return 'Am logged out';

            default:
            return 'loggedIn';
        }
    }

    render() {
        
        return (
            <nav>
           {/*  whenver working with react component we don't use class as property dat as showed in materialze docs..we use `className` */}
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Omnv
                    </a>
                    <ul className="right">
                       {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function  mapStateToProps({auth})  {
    return {auth};
        
    }


// can be accessed from other files within the project
export default connect(mapStateToProps) (Header);