import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {

    const news = useLoaderData();

    const {title, details, image_url, category_id} = news;

    return (
        <div>
            <Card style={{ width: '98%' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='fs-3 my-2'>{title}</Card.Title>
                    <Card.Text className='text-secondary fs-6 my-3'>
                    {details}
                    </Card.Text>
                    <Link className='text-decoration-none' to={`/category/${category_id}`}><Button variant="danger" className='d-flex align-items-center gap-3 fs-5'><FaArrowLeft /> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsights></EditorsInsights>
        </div>
    );
};

export default News;