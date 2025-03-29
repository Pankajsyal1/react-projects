import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './MyFooter.scss';
import { Link } from 'react-router-dom';

const MyFooter = () => {
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <div className="footer-widget">
              <motion.h3 className="widget-title" variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                XOLCY
              </motion.h3>
              <motion.p variants={paragraphVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                In an ideal world this text wouldn't exist, a client would
                acknowledge the importance of having web copy before the design
                starts.
              </motion.p>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer-widget">
              <h3 className="widget-title">Company</h3>
              <motion.ul variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                {['About us', 'Media press', 'Career', 'Blog'].map((item, index) => (
                  <motion.li key={index} variants={listItemVariants}>
                    <Link to="">{item}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer-widget">
              <h3 className="widget-title">Information</h3>
              <motion.ul variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                {['Pricing', 'Agencies', 'Our Apps', 'Sitemap'].map((item, index) => (
                  <motion.li key={index} variants={listItemVariants}>
                    <Link to="">{item}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Col>
          <Col lg={2} md={6}>
            <div className="footer-widget">
              <h3 className="widget-title">More info</h3>
              <motion.ul variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                {['FAQ', 'Contact', 'Discussion', 'Terms & condition'].map((item, index) => (
                  <motion.li key={index} variants={listItemVariants}>
                    <Link to="">{item}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col xs={12}>
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
              <p>&copy; {new Date().getFullYear()} Your Company Name</p>
              <ul className="list-unstyled d-flex flex-column flex-sm-row footer-links">
                <motion.li variants={listItemVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                  <Link to="">Terms of Service</Link>
                </motion.li>
                <motion.li variants={listItemVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                  <Link to="">Privacy Policy</Link>
                </motion.li>
                <motion.li variants={listItemVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                  <Link to="">Contact Us</Link>
                </motion.li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
