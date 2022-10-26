import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './NewsSummaryCard.css'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const NewsSummaryCard = ({news}) => {
    const renderBookmarkTooltip = (props) => (
        <Tooltip {...props}>
            Add to Bookmark
        </Tooltip>)
    const renderShareTooltip = (props) => (
        <Tooltip {...props}>
            Share
        </Tooltip>)
    const { _id, author, image_url, title, details, total_view, rating } = news;
    

    return (
        <Card className='mb-5 border-0 shadow-sm'>
            <Card.Header className='d-flex justify-content-between align-items-center bg-white border-0'>
                <div className="author-container d-flex align-items-center">
                    <div className='me-2'>
                        <Card.Img className='border border-2 border-info rounded-circle author-picture' src={author.img} />

                    </div>
                    <div>
                        <p className='m-0 fw-semibold'>{author.name ? author.name : 'Anonymous'}</p>
                        <small className='text-muted'>Publish on  : {author.published_date ? author.published_date : 'No Date Found'}</small>
                    </div>
                </div>
                <div className="icons">
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250}}
                    overlay={renderBookmarkTooltip}
                    >
                    <Link className='p-2 ' ><FaRegBookmark className='text-secondary'></FaRegBookmark></Link>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250}}
                    overlay={renderShareTooltip}
                    >
                    <Link className='p-2 ' ><FaShareAlt className='text-secondary'></FaShareAlt></Link>
                </OverlayTrigger>
                    
                    
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Img className='mb-4' variant="top" src={image_url} />
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 250
                        ?
                        <small className='text-muted'>{details.slice(0, 250)+'...'} <Link to={`/news/${_id}`}>Read more</Link> </small>
                        :
                        <small>Description :{details}</small>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted bg-white d-flex justify-content-between align-items-center">
                <div className="retings">
                    <Link className='text-warning text-decoration-none d-flex align-items-center'>
                        <h4 className='text-dark d-inline m-0 me-2'>{rating?.number}</h4>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalfAlt></FaStarHalfAlt>
                    </Link>
                </div>
                <div className="views">
                    <Link className='text-secondary text-decoration-none d-flex align-items-center'>
                        <h5 className='text-dark d-inline m-0 me-2'>Total view: {total_view}</h5>
                        <FaEye className='fs-4'></FaEye>
                    </Link>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;     