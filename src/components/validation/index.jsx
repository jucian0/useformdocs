import {useForm} from 'useforms'
import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { Input,Range, ContainerJsonView, Button,Buttons,Checkbox} from '..'
import * as yup from 'yup'
import JSONPretty from 'react-json-pretty';


const initialValues = {
   name:"jesse",
   email:"jesse@jesse.com",
   pets:["felix"],
   accept:false
}

const validationSchema = yup.object().shape({
   name: yup.string().required("This field is required"),
   email: yup.string().email("This field must be a valid e-mail").required("This field is required"),
   pets: yup.array(yup.string().required("This field is required")),
   accept:yup.bool().oneOf([true], 'Field must be checked')
})

export default function Validation(){
   const {state, register, onSubmit, resetForm}= useForm({isControlled:true,initialValues, validationSchema})

   return (
      <Row>
      <Col sm={4}>
         <span>Form</span>
         <form onSubmit={onSubmit(e=> console.log(e))} onReset={resetForm}>
            <Input placeholder="Name" {...register("name")} error={state.touched?.name && state.errors?.name}/>
            <Input placeholder="E-mail" type="email" {...register("email")} error={state.touched?.email && state.errors?.email}/>
            <Input placeholder="Pets" {...register("pets.0")} error={ (state.touched?.pets && state.touched?.pets[0]) && (state.errors?.pets && state.errors?.pets[0])}/>
            <Checkbox placeholder="Accept" type="checkbox" {...register("accept")} error={state.touched?.accept && state.errors?.accept}/>
            <Buttons>
               <Button type="reset">Reset</Button>
               <Button type="submit">Submit</Button>
            </Buttons>
        </form>
      </Col>
      <Col sm={4}>
         <span>Values</span>
         <JSONPretty id="json-pretty" data={state.values}></JSONPretty>
      </Col>
      <Col sm={4}>
         <span>Errors</span>
         <JSONPretty id="json-pretty" data={state.errors}></JSONPretty>
      </Col>
    </Row>
   )
}