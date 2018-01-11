import React, {Component} from 'react';

//class base components
class Header extends Component {

    render() {
        return (
            <nav>
           {/*  whenver working with react component we don't use class as property dat as showed in materialze docs..we use `className` */}
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Omnv
                    </a>
                    <ul className="right">
                        <li>
                            <a>Login with Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

// can be accessed from other files within the project
export default Header;