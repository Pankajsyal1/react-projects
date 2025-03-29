import React from 'react'
import { Card } from 'react-bootstrap'
import "./ServicesCard.scss"
import { Link } from 'react-router-dom';
import Arrow from '../icons/Arrow';


export interface ServicesCardProps {
  id: number,
  icon: string,
  title: string,
  description: string,
  url: string,
}

const ServicesCard: React.FC<ServicesCardProps> = (service) => {
  const { icon, title, description, url } = service;
  return (
    <Card className="h-100">
      <Card.Body className='d-flex flex-column h-100'>
        <div className="service-icon">{icon}</div>
        <div className='flex-grow-1'>
          <h5>{title}</h5>
          <Card.Text>{description}</Card.Text>
        </div>
        <div className='mt-2'>
          <Link to={url}>Learn More <Arrow /></Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ServicesCard