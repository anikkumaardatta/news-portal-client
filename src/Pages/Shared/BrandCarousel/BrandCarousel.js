import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/09/C-Program-to-Delete-or-Insert-An-Element-In-An-Array.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://abweb.ca/wp-content/uploads/2020/02/how-to-create-an-email-signature-in-gmail-featured-img-600x350.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://cdn.shopify.com/s/files/1/0070/8286/8772/articles/best-njoy-alternatives_mainimage_600x350_5db296af-f3bf-4faa-bff4-61ae31890602_grande.jpg?v=1648153642"
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
    );
};

export default BrandCarousel;