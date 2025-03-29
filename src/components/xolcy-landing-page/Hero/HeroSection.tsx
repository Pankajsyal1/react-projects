import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.scss';
import heroImage from '../../../assets/images/hero-one.png';
import MyNavbar from '../Navbar/MyNavbar';
import Arrow from '../icons/Arrow';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className=''>
      <MyNavbar />
      <section className="hero py-5 position-relative">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={12} lg={10} xl={8} xxl={7} className="text-center">
              <motion.p
                className="hero-subtitle text-uppercase d-inline-block m-0 py-2 px-4 rounded-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Find Your Element
              </motion.p>

              <motion.h1
                className="hero-title display-4 fw-medium my-4"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 }}
              >
                Powering Business
              </motion.h1>

              <motion.p
                className="hero-description lead"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.3, duration: 1 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error maxime
                ullam veritatis beatae impedit sit illo nulla nemo dolor mollitia ea unde.
              </motion.p>

              <motion.div
                className="hero-buttons mt-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <Button variant="primary" className="me-3 py-2">
                  Discover more <Arrow />
                </Button>
                <Button variant="outline-primary" className="py-2">
                  Contact us <Arrow />
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
        <div className="position-absolute bottom-0 start-0">
          <motion.img
            src={heroImage}
            className="w-100"
            alt="hero bottom image"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
