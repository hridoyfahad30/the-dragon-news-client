import moment from 'moment/moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBookmark, FaShareAlt, FaEye, FaStar, FaRegStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {

    const {_id, author, title, image_url, details, rating, total_view} = news;

    return (
        <div>
            <Card className="mt-4">
                <Card.Header className='d-flex justify-content-between align-items-center p-4'>
                 <div className='d-flex align-items-center'>
                    <Image style={{width: '40px', height: '40px'}} className='img-fluid' src={author?.img} roundedCircle />
                    <div style={{marginLeft: '15px'}}>
                        <p style={{marginBottom: '-0px', fontWeight: '600', fontSize: '16px', color: '#403F3F'}}>{author.name}</p>
                        <p style={{marginBottom: '-0px',fontWeight: '400', fontSize: '14px', color: '#706F6F'}}> {moment(author.published_date).format("YYYY-MM-DD")} </p>
                    </div>
                 </div>
                 <div className='d-flex gap-1'>
                    <Button variant="light"><FaBookmark /></Button>
                    <Button variant="light"><FaShareAlt /></Button>
                 </div>
                </Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Image className='my-3' src={image_url} fluid />
                        <Card.Text>
                        {details.slice(0, 300)}... <span><Link to={`/news/${_id}`}><Button style={{color: '#FF8C47', fontSize: '16px', fontWeight: '600'}} variant="link">Read More</Button></Link></span>
                        </Card.Text>
                    </Card.Body>
                <Card.Footer>
                    <div className='d-flex justify-content-between gap-2'>
                        <p className='d-flex align-items-center gap-2 m-0'>
                            <Rating className='mb-1' 
                            readonly
                            initialRating={rating?.number}
                            emptySymbol={<FaRegStar/>}
                            fullSymbol={<FaStar className='text-warning'/>}
                            
                            ></Rating> <span>{rating?.number}</span>
                        </p>
                        <p className='d-flex align-items-center gap-2 m-0'> <FaEye/> <span>{total_view}</span></p> 
                    </div>
                    
                </Card.Footer>
            </Card> 
        </div>
    );
};

export default NewsCard;