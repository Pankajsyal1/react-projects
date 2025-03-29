import React from 'react';
import './StatsSection.scss';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectsIcon from './icons/ProjectsIcon';
import CountUp from 'react-countup';
import { motion } from 'framer-motion'; 

const StatsSection = () => {
  const iconVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="stats-section">
      <Container className="position-relative z-1">
        <Row className="stats-container">
          <Col xs={12} md={3}>
            <div className="text-center">
              <motion.div
                className="text-white mb-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} 
                variants={iconVariants}
              >
                <ProjectsIcon />
              </motion.div>
              <h2 className="stats-number mb-1">
                <CountUp end={2570} duration={2.5} suffix="+" />
              </h2>
              <motion.p
                className="stats-text"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} 
                variants={descriptionVariants}
              >
                Projects Done
              </motion.p>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <div className="text-center">
              <motion.div
                className="text-white mb-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} 
                variants={iconVariants}
              >
                <ProjectsIcon />
              </motion.div>
              <h2 className="stats-number">
                <CountUp end={300} duration={2.5} suffix="+" />
              </h2>
              <motion.p
                className="stats-text"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} 
                variants={descriptionVariants}
              >
                Awards Wins
              </motion.p>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <div className="text-center">
              <motion.div
                className="text-white mb-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} 
                variants={iconVariants}
              >
                <ProjectsIcon />
              </motion.div>
              <h2 className="stats-number">
                <CountUp end={4500} duration={2.5} suffix="+" />
              </h2>
              <motion.p
                className="stats-text"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} 
                variants={descriptionVariants}
              >
                Happy Clients
              </motion.p>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <div className="text-center">
              <motion.div
                className="text-white mb-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} 
                variants={iconVariants}
              >
                <ProjectsIcon />
              </motion.div>
              <h2 className="stats-number">
                <CountUp end={270} duration={2.5} suffix="+" />
              </h2>
              <motion.p
                className="stats-text"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} 
                variants={descriptionVariants}
              >
                Country
              </motion.p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="overlay"></div>
    </section>
  );
};

export default StatsSection;
