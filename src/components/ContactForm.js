import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const handleSubmit = (values, {resetForm})=>{
      console.log('form values:', values);
      console.log('in JSON format:', JSON.stringify(values));
      resetForm();
  }
  return (
    //initalValues prop expects a javascript Object
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: '',
        agree: false,
        contactType: "By Phone",
        feedback: ""
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor='firstName' md='2'>
            First Name
          </Label>
          <Col md='10'>
            <Field
              placeholder='First Name' 
              name='firstName'
              className='form-control'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='lastName' md='2'>
            Last Name
          </Label>
          <Col md='10'>
            <Field
              placeholder='Last Name'
              name='lastName' 
              className='form-control'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='phoneNum' md='2'>
            Phone
          </Label>
          <Col md='10'>
            <Field 
              placeholder='Phone'
              name='phoneNum'
              className='form-control'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='email' md='2'>
            Email
          </Label>
          <Col md='10'>
            <Field
              placeholder='Email' 
              name='email'
              type='email'
              className='form-control'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label check md={{size:4, offset:2}}>
            <Field 
              name='agree'
              type='checkbox'
              className='form-check-input'
            />{' '}
            May we contact you?
          </Label>
          <Col md='4'>
            <Field 
              name='contactType'
              as='select'
              className='form-control'
            >
              <option>By Phone</option>
              <option>By Email</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='feedback' md='2'>
            Your Feedback
          </Label>
          <Col md='10'>
            <Field
              placeholder='Your Feedback' 
              name='feedback'
              as='textarea'
              rows='12'
              className='form-control'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{size: 10, offset: 2}}>
            <Button type='submit' color='primary'>
              Send Feedback
            </Button>
          </Col>
        </FormGroup>       
      </Form>
    </Formik>
  );
};
export default ContactForm;
