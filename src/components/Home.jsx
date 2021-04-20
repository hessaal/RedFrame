import React, { Component } from 'react';
import Button from "./common/Button";
import Clock from "./common/Clock";
import arrow_left from './../Assets/arrow-left.png'
import arrow_right from './../Assets/arrow-right.png'
import { getService, getServicesCount } from "../Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import redDeco from './../Assets/deco-red.png'
import whiteDeco from './../Assets/deco-white.png'
import { withRouter } from 'react-router-dom';
import Assos from "./common/Assos";

// this will show the first page 
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            service: getService(1),
            id: 1,
            serviceCount: getServicesCount(),
            assos_num: 10,
            assos_start: 0
        }
    }

    // these 4 function redirect the browser to spicific path
    gotoProject = () => { this.props.history.push('/projects') }
    gotoOrder = () => { this.props.history.push('/order') }
    gotoAbout = () => { this.props.history.push('/about-us') }
    gotoServies = () => { this.props.history.push('/services') }

    // goToNext function show the next service on the div that represent services
    goToNext = () => {
        let id = this.state.id
        let serviceCount = this.state.serviceCount
        if (id >= 1 && id < serviceCount + 1) {
            this.setState({ id: id + 1, service: getService(id) })
            console.log("next : " + id);
        }
        else {
            this.setState({ id: 1 })
        }
    }
    componentDidMount() {
        this.intervalId_next = setInterval(() => this.goToNext(), 10000);
    }


    componentWillUnmount() {
        clearInterval(this.intervalId_next);

    }


    // goToback function show the previous service on the div represent services
    goToBack = () => {
        let id = this.state.id
        let serviceCount = this.state.serviceCount;
        if (id > 0 && id <= serviceCount) {
            this.setState({ id: id - 1, service: getService(id) })
            console.log("back : " + id);
        }
        else {
            this.setState({ id: serviceCount })
        }


    }

    // handle the hover in the div 
    handleHover = () => {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    render() {
        const des_hover = this.state.isHovered ? "img__description_hover" : "img__description";
        const title_hover = this.state.isHovered ? "img__description" : "img__description_hover";
        const service = this.state.service;
        return (
            <div >
                <div className='row my-5 ml-5'>
                    <div className='col-md-6 col-xs-12 mb_col'>
                        <div className='container ml-3'>
                            <div className='row align-items-center'>
                                <img className='arrow' src={arrow_right} alt="arrow " onClick={this.goToNext} />

                                <div className=" img_warp" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                                    <img className="img" src={require('./../Assets/' + service.backgroundImg + '.png').default} alt="this slowpoke moves" />
                                    <div className={title_hover}>
                                        <img src={require('./../Assets/' + service.icon + '.png').default} className="FP_icon" alt="service icon" />
                                        <h6>{service.name_ar}</h6>
                                        <h6>{service.name_en}</h6>
                                    </div>
                                    <div className={des_hover}>
                                        <p className="img_des_text">
                                            {service.brif_info}
                                        </p>
                                    </div>
                                </div>

                                <img src={redDeco} id='red_deco' alt="" />
                                <img className='arrow' src={arrow_left} onClick={this.goToBack} alt="arrow " />
                            </div>
                        </div></div>

                    <div className='col-md-6 col-xs-12 '>
                        <img src={whiteDeco} id='white_deco' alt="" />
                        <div className='row right_side'>
                            <Button classname="col col-md-3 FP_Btns_spacial" label={<div> <div className="icon_box"><FontAwesomeIcon className="icon_first" icon={faCheck} /></div> <p>تواصل معنا <br />وتقـدم بطلبك</p></div>} handleClick={this.gotoOrder} />
                            <div className="col col-md-5">
                                <Button classname="row FP_Btns " label="من نحن ؟" handleClick={this.gotoAbout} />
                                <Button classname="row FP_Btns " label="خدماتنا " handleClick={this.gotoServies} />
                                <Button classname="row FP_Btns " label="من أعمالنا" handleClick={this.gotoProject} />
                            </div></div>
                    </div></div>
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

            </div >



        )
    }
}


export default withRouter(Home);