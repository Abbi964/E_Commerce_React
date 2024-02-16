import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import classes from './ContactUsForm.module.css'
import axios from "axios";

function ContactUsForm(){
    // making refs for name, email and phone
    let nameInputRef = useRef()
    let emailInputRef = useRef()
    let phoneInputRef = useRef()

    async function submitHandler(e){
        try{
            let userObj = {
                name : nameInputRef.current.value,
                email : emailInputRef.current.value,
                phoneNo : phoneInputRef.current.value,
            }
    
            // posting info in firebase
            let response = await axios.post('https://e-commerse-react-8304a-default-rtdb.asia-southeast1.firebasedatabase.app/contact-info.json',userObj,{
                headers : {'content-Type' : 'application/json'}
            })

            console.log(response)

            // clearing inputs
            nameInputRef.current.value = ''
            emailInputRef.current.value = ''
            phoneInputRef.current.value = ''
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <Form className={classes.form}>
            <h1>Contact Us</h1>
            <Form.Label >Name</Form.Label>
            <Form.Control ref={nameInputRef} type="text" id="name" />
            <Form.Label >Email</Form.Label>
            <Form.Control ref={emailInputRef} type="email" id="email" />
            <Form.Label >Phone</Form.Label>
            <Form.Control ref={phoneInputRef} type="tel" id="phone" pattern="[0-9]{10}" />
            <Button className={classes.btn} onClick={submitHandler}>Contact Us</Button>
        </Form>
    )
}

export default ContactUsForm;