import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './MyNavbar.scss';
import Arrow from '../icons/Arrow';

const MyNavbar: React.FC = () => {
  const linkVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      y: index % 2 === 0 ? -20 : 20,
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const HeaderLinkVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Navbar className="my-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="my-navbar-brand">
          <motion.div variants={HeaderLinkVariants} className="text-primary">
            <span className="brand-logo fw-bold">XOLCY</span>
          </motion.div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="my-navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav" className="my-navbar-collapse">
          <Nav className="my-navbar-nav">
            {['Home', 'Services', 'Features', 'Clients', 'Portfolio', 'Pricing'].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <Nav.Link href={`#${item.toLowerCase()}`} className="my-navbar-link">
                  {item}
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>

          <motion.div
            custom={7}
            variants={HeaderLinkVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <Button variant='primary' className='d-none d-lg-block ms-md-3'>
              Build Yours <Arrow />
            </Button>
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
