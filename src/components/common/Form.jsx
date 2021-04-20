import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './Input';


class Form extends Component {

    state = {
        data: {},
        errors: {}
    }

    // function handleSubmit check if input value contians any error before submiting 
    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate()
        this.setState({ errors: errors || {} })
        if (errors) return;
        this.doSubmit()
    }

    // function handleChange check if input value contians any error when the input value change
    handleChange = ({ currentTarget: input }) => {

        const errorMsg = this.validateProperty(input)
        const errors = { ...this.state.errors }
        if (errorMsg)
            errors[input.name] = errorMsg
        else
            delete errors[input.name]

        const data = { ...this.state.data }
        data[input.name] = input.value;
        this.setState({ data, errors })
    }

    // function validateProperty return the error msg 
    validateProperty({ name, value }) {
        const obj = { [name]: value }
        const schema = { [name]: this.schema[name] }
        const result = Joi.validate(obj, schema, { abortEarly: false, stripUnknown: true })
        if (result.error) {
            let arabic_Name = this.arabic_inputName(result.error.details[0].path[0]);
            return this.buildUsefulError(result.error.details[0].type, arabic_Name);
        }
    }

    //function validate return errors object
    validate() {
        let errors = {}
        const { data } = this.state;
        const result = Joi.validate(data, this.schema, { abortEarly: false, stripUnknown: true })
        if (!result.error) return null;
        console.log(errors)
        for (let item of result.error.details) {
            let arabic_Name = this.arabic_inputName(item.path[0]);
            errors[item.path[0]] = this.buildUsefulError(item.type, arabic_Name);
        }
        console.log(result)
        return Object.keys(errors).length !== 0 ? errors : null;

    }

    // function buildUsefulError return error msg in arabic
    buildUsefulError(error, field_name) {
        let msg = '';
        switch (error) {
            case "any.empty":
                msg = `خانة ${field_name} مطلوبة`
                break;
            case "string.max":
                if (field_name === 'اسم المؤسسة')
                    msg = `خانة ${field_name} لا يفترض أن تتجاوز 30 حرف`
                else
                    msg = `خانة ${field_name} لا يفترض أن تتجاوز 400 حرف`
                break;
            case "string.regex.base":
                if (field_name === 'الاسم الكامل')
                    msg = `خانة ${field_name} يجب أن تتكون من حروف فقط`
                else
                    msg = `خانة ${field_name} يجب أن تتكون من 10 أرقام فقط`
                break;
            case "string.alphanum":
                msg = `خانة ${field_name} يجب أن لا تحتوي على رموز `
                break;
            case "string.email":
                msg = `خانة ${field_name} يجب أن تكون بمثل هذه الصيغة : xx@xx.xx `
                break;
            default:
                msg = '';
        }
        return msg;
    };

    // function arabic_inputName return input name in arabic
    arabic_inputName(input_name) {
        let arabic_inputName = '';
        switch (input_name) {
            case 'fullName':
                arabic_inputName = 'الاسم الكامل'
                break;
            case 'foundationName':
                arabic_inputName = 'اسم المؤسسة'
                break;
            case 'phone':
                arabic_inputName = 'رقم الهاتف'
                break;
            case 'email':
                arabic_inputName = 'البريد الإلكتروني'
                break;
            case 'commercialRegister':
                arabic_inputName = 'السجل التجاري'
                break;
            case 'orderDes':
                arabic_inputName = 'تفاصيل الطلب'
                break;
            case 'priority':
                arabic_inputName = 'الأولوية'
                break;
            case 'hasBranding':
                arabic_inputName = 'الهوية'
                break;
            default:
                arabic_inputName = ''
        }

        return arabic_inputName;
    }

    // function renderInput return input component
    renderInput(placeholder, value, name, error, onChange, type = "text", label = '', id = null, checked = false) {
        return <Input
            label={label}
            value={value}
            error={error}
            type={type}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            id={id}
            checked={checked}
        />
    }
    render() {
        return null;
    }
}

export default Form;