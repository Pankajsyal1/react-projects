import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './PricingSection.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import BulletIcon from './BulletIcon';
import Arrow from '../icons/Arrow';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Free",
      price: "0",
      frequency: "Per Month",
      features: [
        "Online Space: 500MB",
        "Bandwidth: 1.5GB",
        "Support: Yes",
        "Hidden Fees: No",
      ],
    },
    {
      title: "62$",
      price: "62",
      frequency: "Per Month",
      features: [
        "Online Space: 1GB",
        "Bandwidth: 5GB",
        "Support: Yes",
        "Hidden Fees: No",
      ],
    },
    {
      title: "299$",
      price: "299",
      frequency: "Per Month",
      features: [
        "Online Space: 2GB",
        "Bandwidth: 10GB",
        "Support: Yes",
        "Hidden Fees: No",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const priceVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const priceDescVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };

  return (
    <section className="pricing-section py-5">
      <Container>
        <Row className="justify-content-center position-relative">
          <Col md={10} lg={9} xl={8} xxl={7}>
            <SectionHeading
              title="Pricing Plans"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error maxime ullam veritatis beatae impedit sit illo nulla nemo dolor mollitia ea unde."
              align="center"
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          {pricingPlans.map((plan, index) => (
            <Col md={4} key={index}>
              <motion.div
                className="pricing-card h-100 d-flex flex-column"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={cardVariants}
              >
                <div className="mb-3">
                  <motion.h2 className="pricing-price mb-2" variants={priceVariants}>
                    {plan.title}
                  </motion.h2>
                  <motion.h5 className="pricing-plan" variants={priceDescVariants}>
                    {plan.frequency}
                  </motion.h5>
                </div>

                <motion.ul
                  className="pricing-description mt-2 flex-grow-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={listVariants}
                >
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li key={featureIndex} variants={listItemVariants}>
                      <BulletIcon /> {feature}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div variants={buttonVariants}>
                  <Button variant="primary" className="mt-4">
                    Choose Plan <Arrow />
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PricingSection;
