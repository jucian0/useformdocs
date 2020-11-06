import { useForm } from "@use-form/use-form";
import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Input, Range, ContainerJsonView } from "./../";
import JSONPretty from "react-json-pretty";

export default function Debounce() {
  const { state, resetForm, register } = useForm({ debounce: 300 });

  return (
    <Row>
      <Col sm={6}>
        <Input placeholder="data1" {...register("data1")} />
        <Input
          placeholder="complexData.0.first"
          {...register("complexData.0.first")}
        />
        <Input
          placeholder="complexData.0.score"
          {...register("complexData.0.score")}
        />
      </Col>
      <Col sm={6}>
        <ContainerJsonView>
          <JSONPretty id="json-pretty" data={state.values}></JSONPretty>
        </ContainerJsonView>
      </Col>
    </Row>
  );
}
