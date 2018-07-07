import React, { PureComponent } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,    CardTitle, CardSubtitle,CustomInput} from 'reactstrap';
import { Badge } from 'reactstrap';

import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';
export default class Forms extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showHide: props.showHide,
      titel:props.titel
    }
  }
  showReplyForm=()=>{
    const { showHide } = this.state;
    if(!showHide){
      this.setState({
        showHide: true
      });
    }else {
      this.setState({
        showHide: false
      });
    }

  }

  render() {
    const showHide = {
      'display': this.state.showHide ? 'block' : 'none'
    };
    const title =this.state.titel;

    return (
    <Card>
      <CardTitle>
        <Button  onClick={this.showReplyForm} size="sm" block  type="button" color="primary">Фильтр <MdArrowDropDown/></Button>
      </CardTitle>
      <CardBody  style={showHide}>

        <Form>
          <FormGroup>
            <Label for="exampleCheckbox">{title}</Label>
            <div>
              <CustomInput type="checkbox" id="exampleCustomInline" label="ООО 'Сьедобное' " inline />
              <CustomInput type="checkbox" id="exampleCustomInline2" label="ООО 'Текучее'" inline />
            </div>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>

    );
  }
}