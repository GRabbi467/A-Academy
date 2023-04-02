import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Course = () => {
    const courseInfo = useLoaderData();
    const {title,image_url,instructor,rating,total_enrollment,details,price} = courseInfo;
    console.log(courseInfo);
    return (



        <div>
    <Card style={{  }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='text-blue-800'>
         {details}
        </Card.Text>
        <Card.Footer className='d-flex justify-content-between'> <span>Rating :{rating.number}</span> <span>Students:{total_enrollment}</span> </Card.Footer>
       
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Instructor :{instructor.name}</ListGroup.Item>
        <ListGroup.Item>Published Date:{instructor.published_date}</ListGroup.Item>
        <ListGroup.Item>Price : ${price}</ListGroup.Item>
      </ListGroup>

        <Button variant="primary">Enroll this course</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Course;