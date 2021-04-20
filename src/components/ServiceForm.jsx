import React from 'react';
import Button from './common/Button';
import Joi from 'joi-browser';
import Form from './common/Form';
import Card from './common/Card';
import { getService, removeSelectedService, setchoosedServices } from '../Services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Alert from 'react-bootstrap/Alert';

// this component will apper in third phase of order page
export class ServiceForm extends Form {
    state = {
        // data holdes inputs name and value as pair 
        data: { fullName: '', foundationName: '', phone: '', email: '', commercialRegister: '', priority: '', orderDes: '', hasBranding: '' },
        // errors holds error msgs if  input value is invalid
        errors: {},

        // brandig service
        service: getService(4),
        showInfo: false,
        select: false,
        checked: false
    }

    // this is joi schema  
    schema = {
        fullName: Joi.string().regex(/[\u0621-\u064Aa-zA-Z]/).required(),
        foundationName: Joi.string().max(30).required(),
        phone: Joi.string().regex(/^[0-9]{10}$/).required(),
        email: Joi.string().email().required(),
        commercialRegister: Joi.string().regex(/^[0-9]{10}$/),
        priority: Joi.string().required(),
        orderDes: Joi.string().alphanum().max(400).required(),
        hasBranding: Joi.string().required()
    }

    /* 
    this function will call if user finish entering inputs value and 
    they was valid values 
- it will submit the data to the server 
- go back to the order page 
    */
    doSubmit() {
        this.props.parentCallback();
        console.log("submited")
    }

    handleSelect = ({ currentTarget: select }) => {
        const data = this.state.data;
        data[select.name] = select.value;
        this.setState(data);
    }

    /*
     if user click on branding service this function will add the service to 
     the service he already select 
    */
    selectService = (service) => {
        if (this.state.select) {
            this.setState({ select: false });
            removeSelectedService(service.id);
        }
        else {
            this.setState({ select: true });
            setchoosedServices(service.id);
        }
    }

    handleCheck = ({ currentTarget: radioInput }) => {
        const data = this.state.data;
        this.setState({ checked: true })
        data[radioInput.name] = radioInput.value;
        this.setState(data)
    }


    // show branding service info 
    showServiceInfo = () => {
        this.setState({ showInfo: !this.state.showInfo });
    }

    render() {
        const { data, errors, service, showInfo, select } = this.state
        return (
            <main style={{ backgroundColor: 'white', padding: '10px', paddingTop: '0', direction: 'rtl', textAlign: 'center' }}>
                <div className="container service_continer flex-row-reverse">
                    {/* form  */}
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("اسمك الثلاثي", data.fullName, "fullName", errors.fullName, this.handleChange)}
                        {this.renderInput("اسم المؤسسة أو المتجر", data.foundationName, "foundationName", errors.foundationName, this.handleChange)}
                        {this.renderInput("رقم الجوال", data.phone, "phone", errors.phone, this.handleChange)}
                        {this.renderInput("البريد الإلكتروني", data.email, "email", errors.email, this.handleChange)}
                        {this.renderInput("السجل التجاري", data.commercialRegister, "commercialRegister", errors.commercialRegister, this.handleChange)}
                        <select className="input" name="priority" onChange={this.handleSelect}>
                            <option value="" hidden>الأولوية</option>
                            <option value="high">عالية</option>
                            <option value="medium">متوسطة</option>
                            <option value="low">منخفضة</option>
                        </select>
                        {errors.priority && <Alert variant="danger">{errors.priority}</Alert>}
                        <label className="input">هل لديك هوية بصرية ؟</label><div className='row'>

                            {this.renderInput("نعم", 'yes', 'hasBranding', errors.hasBranding, this.handleCheck, 'radio', "نعم", 'yes', data.hasBranding === 'yes')}
                            {this.renderInput("لا", 'no', 'hasBranding', errors.hasBranding, this.handleCheck, 'radio', "لا", 'no', data.hasBranding === 'no')}
                        </div>
                        {data.hasBranding === 'no' &&
                            <div className="row m-3">
                                <div className="col-md-6 align-self-center position-relative">
                                    <svg height='100%' width='100%'>
                                        <circle cx="50%" cy="50%" r="53"
                                            stroke='#C92C37'
                                            stroke-width="1"
                                            fill="none"
                                            strokeOpacity="0.2"
                                        />
                                        <circle cx="50%" cy="50%" r="48"
                                            stroke="none"
                                            fill='#C92C37'
                                            fillOpacity='0.2'
                                        />
                                        <text x="50%" y="10%"
                                            text-anchor="middle"
                                            fill='black'
                                            font-size="1.2rem"
                                            font-weight="bold"
                                        >لا تقلق !</text>
                                        <text x="50%" y="35%"
                                            text-anchor="middle"
                                            fill='black'
                                            font-size="1rem"
                                        >تتوفر هذه الخدمة </text>
                                        <text x="50%" y="55%"
                                            text-anchor="middle"
                                            fill='black'
                                            font-size="1rem"
                                        >  لدينا بأسعار مميزة</text>
                                        <text x="50%" y="75%"
                                            text-anchor="middle"
                                            fill='black'
                                            font-size="1rem"
                                        > ودقة في الاداء</text>
                                    </svg>

                                </div>
                                <div className="col-md-6">
                                    <Card
                                        lableFb={<FontAwesomeIcon className="icon_select whiteColor" icon={faCheck} />}
                                        lableSb='ماهي هذه الخدمة ؟ '
                                        name_ar={service.name_ar}
                                        name_en={service.name_en}
                                        icon={service.icon}
                                        handleClickFb={this.selectService}
                                        handleClickSb={this.showServiceInfo}
                                        backgroundImg={service.backgroundImg}
                                        select={select}
                                    /></div>
                                {showInfo && <div id="info" className="mt-2">
                                    <Button classname="controls float-right"
                                        label={<FontAwesomeIcon icon={faTimes} />}
                                        handleClick={() => { this.setState({ showInfo: false }) }} />
                                    <h3 id="info_title">خدمة {service.name_ar}</h3><p id="info_body">{service.info}</p></div>}
                            </div>}
                        <textarea placeholder=" تفاصيل الطلب ..." name="orderDes" rows='4' onChange={this.handleChange} />
                        {errors.orderDes ? <Alert variant="danger">{errors.orderDes}</Alert> : null}
                        <Button classname="submit_btn whiteColor" type='submit'
                            label="أرسل الطلب" />
                    </form>
                </div>
            </main >
        );
    }

}

export default ServiceForm;