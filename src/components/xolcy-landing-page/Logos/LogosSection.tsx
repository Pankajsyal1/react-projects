import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './LogosSection.scss';

const logos = [
  {
    src: 'https://themesdesign.in/xolcy/layout/images/brand-logo-1.png',
    alt: 'Envato Logo',
  },
  {
    src: 'https://themesdesign.in/xolcy/layout/images/brand-logo-2.png',
    alt: 'WordPress Logo',
  },
  {
    src: 'https://themesdesign.in/xolcy/layout/images/brand-logo-3.png',
    alt: 'Magento Logo',
  },
  {
    src: 'https://themesdesign.in/xolcy/layout/images/brand-logo-4.png',
    alt: 'WooCommerce Logo',
  },
];

const LogosSection = () => {
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="justify-content-center">
          {logos.map((logo, index) => (
            <Col md={3} className="text-center" key={index}>
              <motion.img
                src={logo.src}
                alt={logo.alt}
                className="img-fluid"
                initial="hidden"
                whileInView="visible" 
                viewport={{ once: false, amount: 0.2 }} 
                variants={logoVariants}
                onAnimationStart={() => console.log(`${logo.alt} animation started`)} 
                onAnimationComplete={() => console.log(`${logo.alt} animation completed`)} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LogosSection;
