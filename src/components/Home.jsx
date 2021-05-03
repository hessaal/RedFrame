import React, { Component } from 'react';
import Button from "./common/Button";
import Clock from "./common/Clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import whiteDeco from './../Assets/deco-white.png'
import { withRouter } from 'react-router-dom';
import Assos from "./common/Assos";
import { CSSTransition } from 'react-transition-group';
import { Slider } from './common/Slider';

// this will show the first page 
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    // these 4 function redirect the browser to spicific path
    gotoProject = () => { this.setState({ show: false }); setTimeout(() => this.props.history.push('/projects'), 1500); }
    gotoOrder = () => { this.setState({ show: false }); setTimeout(() => this.props.history.push('/order'), 1500); }
    gotoAbout = () => { this.setState({ show: false }); setTimeout(() => this.props.history.push('/about-us'), 1500); }
    gotoServies = () => { this.setState({ show: false }); setTimeout(() => this.props.history.push('/services'), 1500); }

    componentDidMount() {
        setTimeout(() => this.setState({ show: true }), 100);
    }

    render() {
        return (
            <div >
                <div className='row my-5 ml-s-5'>
                    <CSSTransition
                        timeout={1500}
                        classNames='leftElement'
                        in={this.state.show}
                    >
                        <div className='col-md-6 col-xs-12 mb_col'>
                            <Slider />
                        </div>
                    </CSSTransition>

                    <div className={this.state.show ? ' FP_container_entering col-md-6 col-xs-12 ' : '  FP_container_exiting col-md-6 col-xs-12 '}>
                        <img src={whiteDeco} id='white_deco' alt="" />
                        <div className='row right_side'>
                            <Button classname={this.state.show ? "col col-md-3 FP_Btns_spacial FP_Btns_entering" : "col col-md-3 FP_Btns_spacial FP_Btns_exiting"} label={<div> <FontAwesomeIcon className="icon_first" icon={faCheck} /> <p>تواصل معنا <br />وتقـدم بطلبك</p></div>} handleClick={this.gotoOrder} delay={this.state.show ? 2 : 3.5} />
                            <div className="col col-md-5">

                                <Button id='FB' classname={this.state.show ? "row FP_Btns FP_Btns_entering" : "row FP_Btns FP_Btns_exiting"} label="من نحن ؟" handleClick={this.gotoAbout} delay={this.state.show ? 3 : 0.5} />
                                <Button id='SB' classname={this.state.show ? "row FP_Btns FP_Btns_entering" : "row FP_Btns FP_Btns_exiting"} label="خدماتنا " handleClick={this.gotoServies} delay={this.state.show ? 4 : 1.5} />
                                <Button id='TB' classname={this.state.show ? "row FP_Btns FP_Btns_entering" : "row FP_Btns FP_Btns_exiting"} label="من أعمالنا" handleClick={this.gotoProject} delay={this.state.show ? 5 : 2.5} />
                            </div></div>
                    </div>
                </div>
                <CSSTransition
                    timeout={1500}
                    classNames='bottomElement'
                    in={this.state.show}
                >
                    <div className='row bottom_side' >
                        <div className='col-8 position-relative'>
                            <div id='assos'></div>
                            <h5 id='assosicte_title'>شركاء النجاح</h5>
                            <Assos />
                        </div>
                        <div className="col-4 " id="time_container">
                            <Clock />
                        </div>
                    </div>
                </CSSTransition>
            </div >



        )
    }
}


export default withRouter(Home);