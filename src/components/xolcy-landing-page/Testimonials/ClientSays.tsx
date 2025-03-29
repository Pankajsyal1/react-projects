import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './ClientSays.scss';
import ClientCard, { ClientCardProps } from './ClientCard';
import SectionHeading from '../SectionHeading/SectionHeading';

const testimonials: ClientCardProps[] = [
  {
    id: 1,
    name: 'Ruben Reed',
    job: 'Web Designer',
    quote:
      'Those must scelerisque pretium dolor, sit amet vehicula be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of quis consectetur nunc sit amet semper justo. nature and its beauty.',
  },
  {
    id: 2,
    name: 'Eva Pearce',
    job: 'PHP Developer',
    quote:
      'Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of quis consectetur nunc sit amet semper justo. nature and its beauty.',
  },
  {
    id: 3,
    name: 'Ruben Reed',
    job: 'Web Designer',
    quote:
      'Those must scelerisque pretium dolor, sit amet vehicula be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of quis consectetur nunc sit amet semper justo. nature and its beauty.',
  },
  {
    id: 4,
    name: 'Eva Pearce',
    job: 'PHP Developer',
    quote:
      'Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of quis consectetur nunc sit amet semper justo. nature and its beauty.',
  },
];

const ClientSays = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={10} xl={9} xxl={8}>
            <SectionHeading
              title="What Client Says"
              description=" It is a long-established fact that create category leading brand
              experiences a reader will be distracted by the readable content of a
              page when looking at its layout."
              align="center"
            />
          </Col>
        </Row>

        {/* Swiper Component */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          loop={true}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className="pb-5">
              <ClientCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default ClientSays;
