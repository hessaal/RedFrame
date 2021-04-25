import React, { Component } from 'react';
import { getServices } from '../Services';
import Service from './common/Service';
import Button from './common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ServiceSample from "./common/ServiceSample";
import PageHeader from "./common/PageHeader";

export class OurService extends Component {
    state = {
        services: getServices(),
        showInfo: false,
        service: {}
    }

    // showServiceInfo will handle the clicks on "what is this service" button and show the service info
    showServiceInfo = (service) => {
        if (this.state.service.id === service.id) {
            this.setState({ showInfo: false, service: {} })
        } else
            this.setState({ showInfo: true, service: service });

    }

    render() {
        const { services: allServices, showInfo, service } = this.state;
        const { length: count } = allServices;

        return (
            <main style={{ backgroundColor: 'white', padding: '10px', paddingTop: '0', direction: 'rtl' }}>
                <div className="container">
                    <PageHeader />
                    <div className="container">
                        {count === 0 ? <p id="no_services">لا تتوفر أي خدمات حالياً ..</p> : <>

                            {/* this will apper if user ask for more info about service */}
                            {showInfo && <div className="row">
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
                                    <h3 id="info_title">خدمة {service.name_ar}</h3><p id="info_body">{service.info}</p>
                                </div>
                            </div>
                            }

                            {/* this shows red frame services */}
                            <div className="row justify-content-center table-row">
                                {allServices.map((service, index) => (
                                    <div className="col-md-6 col-lg-3 service_continer" >
                                        <Service
                                            index={index}
                                            lable='ماهي هذه الخدمة ؟ '
                                            name_ar={service.name_ar}
                                            name_en={service.name_en}
                                            icon={service.icon}
                                            handleClick={() => this.showServiceInfo(service)}
                                            backgroundImg={service.backgroundImg}>
                                        </Service>
                                    </div>

                                ))}
                            </div>
                        </>}


                    </div>
                </div>
            </main >
        )

    }
}

export default OurService;