import React, { Component } from 'react';
import { getServices, setchoosedServices, getSelectedServices, removeSelectedService } from '../Services';
import Card from './common/Card';
import Button from './common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import ServiceSample from "./common/ServiceSample";
import doubleArrow from './../Assets/doubleArrow_l.png'


// this component will apper in first phase of order page
export class SelectService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // services will get the red frame services from the service file or from data base
            services: getServices(),

            showInfo: false,
            service: {},
            selected: false
        }

        // this refrence to the service info div  
        this.infoRef = React.createRef();

    }

    /* 
    this function will call when user click on service 
    to add it to the selected service or to remove it 
    if the service is already selected 
    */
    selectService = (service) => {
        if (getSelectedServices().includes(service)) {
            this.setState({ selected: !this.state.selected });
            removeSelectedService(service.id);
        }
        else {
            this.setState({ selected: !this.state.selected });
            setchoosedServices(service.id);
        }
    }

    /* 
    this function will call if user clicked on ( next step ) button 
    to go back to the order page and get second phase if he select any service
    */
    goToNext = () => {
        if (getSelectedServices().length !== 0) {
            this.props.callbackFromParent();
        }
    }

    componentDidMount() {

        // if service info div show up this will foucs the screen view on it
        if (this.state.showInfo)
            this.infoRef.current.focus();
    }
    componentDidUpdate() {
        if (this.state.showInfo)
            this.infoRef.current.focus();
    }

    /* 
    this function will set show info to true if ( what is this service ) button get clicked 
    for the first time in any service or in service diffrent from the service which its
    info showen 

    and set service to service its button clicked
    */
    showServiceInfo = (service) => {
        if (this.state.service.id === service.id) {
            this.setState({ showInfo: false, service: {} })
        } else {
            this.setState({ showInfo: true, service: service });
        }
    }

    render() {
        const { services: allServices, showInfo, service } = this.state;
        const { length: count } = allServices;
        return (
            <main style={{ backgroundColor: 'white', padding: '10px', paddingTop: '0', direction: 'rtl' }}>
                <div className="container">
                    {count === 0 ? <p id="no_services">لا تتوفر أي خدمات حالياً ..</p> : <>
                        {/* show info div */}
                        {showInfo && <div className="row" tabIndex="0" ref={this.infoRef} style={{ outline: 'none' }}>
                            <div className='col-4 align-self-center'>
                                <ServiceSample
                                    backgroundImg={service.backgroundImg}
                                    name_en={service.name_en}
                                    name_ar={service.name_ar}
                                    icon={service.icon} /></div>
                            <div id="info" className='col-7'>
                                <Button classname="controls float-right"
                                    label={<FontAwesomeIcon icon={faTimes} />}
                                    handleClick={() => { this.setState({ showInfo: false }) }} />
                                <h3 id="info_title" >خدمة {service.name_ar}</h3><p id="info_body">{service.info}</p>
                            </div>
                        </div>
                        }
                        {/* services  */}
                        <div className="row justify-content-center table-row">
                            {allServices.map((service, index) => (
                                <div className="col-md-6 col-lg-3 service_continer " key={index}>
                                    <Card
                                        index={index}
                                        lableFb={<FontAwesomeIcon className="icon_select whiteColor" icon={faCheck} />}
                                        lableSb='ماهي هذه الخدمة ؟'
                                        name_ar={service.name_ar}
                                        name_en={service.name_en}
                                        icon={service.icon}
                                        handleClickFb={() => this.selectService(service)}
                                        handleClickSb={() => this.showServiceInfo(service)}
                                        backgroundImg={service.backgroundImg}
                                        select={getSelectedServices().includes(service)}
                                    /></div>
                            ))}
                        </div>
                    </>}

                    {/* next step button */}
                    <Button label={<>الخطوة التالية<img src={doubleArrow} className="m-2" alt="double Arrow" /></>}
                        classname={getSelectedServices().length !== 0 ? "submit_btn whiteColor mt-5 text-left" : 'submit_btn_nonselect whiteColor mt-5 text-left'} handleClick={(this.goToNext)} />
                </div>
            </main>
        )
    }
}

export default SelectService;