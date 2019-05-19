import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Profile from './Profile';
import Contact from './Kontak';
import Home from './Home';
import Portofolio from './Portofolio';
import './MainRoute.css';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
  

class Main extends Component {
    render() {
        return (
            <Route render={({location}) =>(
                    <TransitionGroup>
                        <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="fade"
                        >
                            <Switch location={location}>
                                <Route exact path="/" component={Home}/>
                                <Route path="/home" component={Home}/>
                                <Route path="/contact" component={Contact}/>
                                <Route path="/profile" component={Profile}/>
                                <Route path="/portofolio" component={Portofolio}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
            )} />
            
        );
    }
}

export default Main;
