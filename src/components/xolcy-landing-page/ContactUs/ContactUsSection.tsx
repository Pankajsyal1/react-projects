import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './ContactUsSection.scss';
import SectionHeading from '../SectionHeading/SectionHeading';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUsSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.2
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.section
      className="contact-us-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <SectionHeading
              title='Contact Us'
              description='To achieve this, it would be necessary to have uniform grammar, pronunciation and more common that of the individual languages.'
              align='center'
            />
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                    <Form.Group className='mb-2' controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </Form.Group>
                  </motion.div>
                </Col>
                <Col md={6}>
                  <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                    <Form.Group className='mb-2' controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </Form.Group>
                  </motion.div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                    <Form.Group className='mb-2' controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Your subject"
                        required
                      />
                    </Form.Group>
                  </motion.div>
                </Col>
                <Col md={6}>
                  <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                    <Form.Group className='mb-2' controlId="formContact">
                      <Form.Label>Contact</Form.Label>
                      <Form.Control
                        type="tel"
                        name="contact"
                        placeholder="+00 1234 5678 90"
                      />
                    </Form.Group>
                  </motion.div>
                </Col>
              </Row>
              <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                <Form.Group className='mb-2' controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message..."
                    required
                  />
                </Form.Group>
              </motion.div>
              <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Send message
                </Button>
              </motion.div>
            </Form>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default ContactUsSection;
