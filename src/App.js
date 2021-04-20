import React, { Component } from "react";
import "./App.css";
import "./Styles.css"
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Order from "./components/Order";
import AboutUs from "./components/AboutUs";
import { OurProjects } from "./components/OurProjects";
import Home from "./components/Home";
import OurService from "./components/OurService";
import Footer from "./components/Footer";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { withRouter } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <> <div id='wrapper'>
        <header>
          <Header />
        </header>
        <main>
          <TransitionGroup>
            <CSSTransition
              timeout={300}
              classNames='pageSliderUp'
              key={this.props.location.key}
            >
              <Switch>
                <Route exact path='/about-us' component={AboutUs} />
                <Route exact path='/projects' component={OurProjects} />
                <Route exact path='/services' component={OurService} />
                <Route exact path='/order' component={Order} />
                <Route path='/' component={Home} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </main>

      </div >
        <footer>
          <Footer />
        </footer></>
    );
  }
}

export default withRouter(App);
