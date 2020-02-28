import React, { useState } from "react";
import {
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Collapse,
} from "reactstrap";
import Colors from "../../../constants/Colors";

const Additional = props => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(prev => !prev);
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: Colors.blue, color: "white" }}
        block
        onClick={toggle}
      >
        Additional Service (Optional)
      </Button>
      <Collapse isOpen={open}>
        <Card>
          <CardBody>
            <FormGroup row className="col-sm-10">
              <Col sm={10} className="mb-3 h5">
                Add an additional service
                </Col>
              <Col sm={10} style={{ color: Colors.red }}>
                i.e. Gopro Video/T-shirts
                </Col>
            </FormGroup>
            <FormGroup row className="col-sm-10 h6">
              <Label for="serviceTitle2" sm={2}>
                Service Title
                </Label>
              <Col sm={8}>
                <Input type="text" name="serviceTitle2" id="serviceTitle2" />
              </Col>
            </FormGroup>
            <FormGroup row className="col-sm-10 h6">
              <Label for="priceItem" sm={2}>
                Price/Item
                </Label>
              <Col sm={8}>
                <Input type="text" name="priceItem" id="priceItem" />
              </Col>
            </FormGroup>
            <FormGroup row className="col-sm-10 h6">
              <Label for="description" sm={2}>
                Description
                </Label>
              <Col sm={8}>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  placeholder="Any description appeals customers’ attention"
                />
              </Col>
            </FormGroup>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default Additional;
