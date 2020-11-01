import {useForm} from 'useforms'
import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { Input,Range, ContainerJsonView, Button, Buttons} from '..'
import JSONPretty from 'react-json-pretty';

export default function Uncontrolled(){
   const {state, register, resetForm, onSubmit} = useForm({})

   return (
      <Row>
      <Col sm={6}>
         <form onSubmit={onSubmit(e=> console.log(e))} onReset={resetForm}>
            <Input placeholder="data1" {...register("data1")}/>
            <Input placeholder="complexData.0.first" {...register("complexData.0.first")}/>
            <Input placeholder="complexData.0.score" {...register("complexData.0.score")}/>
            <Buttons>
               <Button type="reset">Reset</Button>
               <Button type="submit">Submit</Button>
            </Buttons>
        </form>
      </Col>
      <Col sm={6}>
         <ContainerJsonView>
            <JSONPretty id="json-pretty" data={state.values}></JSONPretty>
         </ContainerJsonView>
      </Col>
    </Row>
   )
}