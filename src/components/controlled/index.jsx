import { useForm } from "@use-form/use-form";
import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Input, Range, ContainerJsonView, Button, Buttons } from "..";
import JSONPretty from "react-json-pretty";

const initialValues = {
  data1: "test",
  complexData: [
    {
      first: "testComplexData",
      score: 45,
    },
  ],
};

export default function Controlled() {
  const { state, resetForm, onSubmit, register } = useForm({
    isControlled: true,
    initialValues,
  });

  return (
    <Row>
      <Col sm={6}>
        <form onSubmit={onSubmit((e) => console.log(e))} onReset={resetForm}>
          <Input placeholder="First Input" {...register("data1")} />
          <Input placeholder="First" {...register("complexData.0.first")} />
          <Input
            type="number"
            placeholder="Score"
            {...register("complexData.0.score")}
          />
          <Buttons>
            <Button type="reset">ResetForm</Button>
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
  );
}
