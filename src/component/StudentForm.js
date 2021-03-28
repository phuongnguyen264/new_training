import React, { useState } from 'react';
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'
// import Data from '../data.json'
import Data from '../data/data.json'

import isMobilePhone from 'validator/lib/isMobilePhone'

function StudentForm (props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [validationMsg, steValidationMsg] = useState('')


    const onChangeName = (event) => {
        const value = event.target.value
        setName(value)
    }

    const onChangeEmail = (event) => {
        const value = event.target.value
        setEmail(value)
    }

    const onChangePhone = (event) => {
        const value = event.target.value
        setPhone(value)
    }

    const onchangeMessage = (event) => {
        const value = event.target.value
        setMessage(value)
    }

    const validateAll = () => {
        const msg = {}
        if (isEmpty(name)) {
            msg.name = "Please input your name"
        }
        if (isEmpty(email)) {
            msg.email = "Please input your email"
        } else if (!isEmail(email)) {
            msg.email = "Your email is incorrect"
        }

        if (isEmpty(phone)) {
            msg.phone = "Please input your phone"
        } else if (!isMobilePhone(phone)) {
            msg.phone = "Your phone is incorrect"
        }

        if (isEmpty(message)) {
            msg.message = "please input your message"
        }

        steValidationMsg(msg)
        if (Object.keys(msg).length > 0) return false
        return true
    }

    const onSubmitInfor = () => {
        const isValid = validateAll()
        if (!isValid) return

    }
    const dataLabelName = Data.contact.fields.item1.label.lableName;
    const dataInputName = Data.contact.fields.item1.name;
    const dataLabelMail = Data.contact.fields.item2.label.lableEmail;
    const dataInputMail = Data.contact.fields.item2.email;
    const dataLabelPhone = Data.contact.fields.item3.label.lablePhone;
    const dataInputPhone = Data.contact.fields.item3.phone;
    const dataLabelMessage = Data.contact.fields.item4.label.lableMessage;
    const dataInputMessage = Data.contact.fields.item4.message;
    const dataButon = Data.contact.button;
    return (
        <div>
          <div className="form-student">
            <form name="contact" onSubmit="return checkForm();" method="GET" id="form-submit" autoComplete="off">
                <h3>{Data.contact.title}</h3>
    
                <label htmlFor={dataLabelName.htmlFor}>
                {dataLabelName.title}
                <span className="required">{dataLabelName.required}</span>
                </label>
                <input
                    type={dataInputName.type}
                    name={dataInputName.name}
                    id={dataInputName.id}
                    placeholder={dataInputName.placeholder}
                    autoComplete="name"
                    onChange={onChangeName}
                />
                <br />
                <p className="error"> {validationMsg.name} </p>
        
                <label htmlFor={dataLabelMail.htmlFor}>
                    {dataLabelMail.title}
                    <span className="required">{dataLabelMail.required}</span>
                </label>
                <input
                    type={dataInputMail.type}
                    name={dataInputMail.name}
                    id={dataInputMail.id}
                    autoComplete="email"
                    placeholder={dataInputMail.placeholder}
                    onChange={onChangeEmail}
                />
                <br />
                <p className="error"> {validationMsg.email} </p>
        
                <label htmlFor={dataLabelPhone.htmlFor}>
                    {dataLabelPhone.title}
                    <span className="required">{dataLabelPhone.required}</span>
                </label>
                <input
                    type={dataInputPhone.type}
                    name={dataInputPhone.name}
                    id={dataInputPhone.id}
                    autoComplete="phone"
                    placeholder={dataInputPhone.placeholder}
                    onChange={onChangePhone}
                />
                <br />
                <p className="error"> {validationMsg.phone} </p>
        
                <label htmlFor={dataLabelMessage.htmlFor}>
                    {dataLabelMessage.title}
                    <span className="required">{dataLabelMessage.required}</span>
                </label>
                <textarea
                    name={dataInputMessage.name}
                    id={dataInputMessage.id}
                    autoComplete="Message"
                    placeholder={dataInputMessage.placeholder}
                    cols="25"
                    rows="5"
                    onChange={onchangeMessage}
                ></textarea>
                <br />
                <p className="error"> {validationMsg.message} </p>
        
                <label htmlFor={dataButon.htmlFor}>&nbsp;</label>
                <button type={dataButon.type} onClick={onSubmitInfor}>
                    {dataButon.title}
                </button>
            </form>
          </div>
        </div>
      );
    }
    export default StudentForm;