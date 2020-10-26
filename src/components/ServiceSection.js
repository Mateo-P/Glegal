import React,{useState} from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Service from "./Service";
import { Button, Modal, Form,InputGroup, FormControl } from "react-bootstrap";
import "./ServiceSection.scss"
function ServiceSection(props) {
  const [show, setShow] = useState(false);
  const [services, setServices] = useState([
    {
      id: "starter",
      name: "Básico",
      price: "10",
      perks: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer molestie lorem at massa",
      ],
    },
    {
      id: "pro",
      name: "Intermedio",
      price: "20",
      perks: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer molestie lorem at massa",
        "Faucibus porta lacus fringilla vel",
        "Aenean sit amet erat nunc",
      ],
    },
    {
      id: "business",
      name: "Completo",
      price: "50",
      perks: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer molestie lorem at massa",
        "Faucibus porta lacus fringilla vel",
        "Aenean sit amet erat nunc",
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
      ],
    },
  ]);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Service
          buttonText="Contratar"
          items={services}
        />
        <Button variant="primary" onClick={handleShow}>
        Agregar Servicio
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Servicio</Modal.Title>
        </Modal.Header>
        <Form className="form">
            <Form.Group >
              <Form.Label>Nombre</Form.Label>
              <Form.Control placeholder="Nombre" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Prestaciones</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="servicio 1, servicio 2, servicio 3, " />
            </Form.Group>
            <Form.Label>Precio</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Amount (to the nearest dollar)" />
              <InputGroup.Append>
                <InputGroup.Text>.000</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </Section>
  );
}

export default ServiceSection;
