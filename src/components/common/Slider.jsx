import React, { Component } from "react";
import arrow_left from './../../Assets/arrow-left.png'
import arrow_right from './../../Assets/arrow-right.png'
import redDeco from './../../Assets/deco-red.png'
import { getServices } from "../../Services";


export class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            services: getServices(),
            index: 0
        }
    }

    // goToNext function show the next service on the div that represent services
    goToNext = () => {
        let index = this.state.index;
        if (index < this.state.services.length - 1) {
            this.setState({ index: index + 1 });
        }
        else {
            this.setState({ index: 0 })
            console.log("index : " + index);
        }
    }
    componentDidMount() {
        this.intervalId_next = setInterval(() => this.goToNext(), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId_next);
        // this.setState({ show: false });
    }
    // goToback function show the previous service on the div represent services
    goToBack = () => {
        let index = this.state.index;
        if (index > 0) {
            this.setState({ index: index - 1 });
            console.log("index : " + index);
        }
        else {
            this.setState({ index: this.state.services.length - 1 })
            console.log("index : " + index);
        }
    }


    // handle the hover in the div 
    handleHover = () => {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    render() {
        const { services, isHovered, index } = this.state;
        const des_hover = isHovered ? "img__description_hover" : "img__description";
        const title_hover = isHovered ? "img__description" : "img__description_hover";
        const service = services[index];
        return (
            <div className='container ml-3'>
                <div className='row align-items-center'>
                    <img className='arrow' src={arrow_right} alt="arrow " onClick={this.goToNext} />
                    <div className=" img_warp" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                        <img className="img" src={require('./../../Assets/' + service.backgroundImg + '.png').default} alt="this slowpoke moves" />
                        <div className={title_hover}>
                            <img src={require('./../../Assets/' + service.icon + '.png').default} className="FP_icon" alt="service icon" />
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
            </div>
        )
    }

}
