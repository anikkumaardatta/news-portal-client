import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaEye, FaStar } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData();
    const { _id, author, image_url, title, details, total_view, rating } = useLoaderData();
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body className='m-3'>
                <div className= "shadow-sm  mb-3 bg-light p-2 rounded d-flex justify-content-between align-items-center">
                    <div className="author-container d-flex align-items-center ">
                        <div className='me-2'>
                            <Card.Img className='border border-2 border-info rounded-circle author-picture' src={author.img} />

                        </div>
                        <div>
                            <p className='m-0 fw-semibold'>{author.name ? author.name : 'Anonymous'}</p>
                            <small className='text-muted'>Publish on  : {author.published_date ? author.published_date : 'No Date Found'}</small>
                        </div>
                    </div>
                    <div className="retings">
                        <Link className='text-warning text-decoration-none d-flex align-items-center'>
                            <h5 className='text-dark d-inline m-0 me-2'>{rating?.number}</h5>
                            <FaStar></FaStar>
                        </Link>
                    </div>
                    <div className="views">
                        <Link className='text-secondary text-decoration-none d-flex align-items-center'>
                            <h6 className='text-dark d-inline m-0 me-2'>Total view: {total_view}</h6>
                            <FaEye className='fs-4'></FaEye>
                        </Link>
                    </div>
                </div>
                <Card.Title className='mb-3'>{title}</Card.Title>
                <Card.Text className='text-muted '>{details}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default News;