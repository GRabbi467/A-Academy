import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Coursecard = ({course}) => {
    return (
    <div className='d-flex justify-content-center'>
    <Card  className='mt-3' style={{  }}>
      <Card.Img variant="top" src={course.image_url} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text className='font-weight-bold'>Instructor: {course.instructor.name}</Card.Text>
        <Card.Text>
         {
            course.details.length > 100 ?
            <p>{course.details.slice(0,150) + '...'} <Link to ={`/courses/course/${course._id}`}>more</Link></p>
            :
            <p>{course.details}</p>
         }
        </Card.Text>
        <Card.Footer className='d-flex justify-content-between'> <span>Rating :{course.rating.number}</span> <span>Students:{course.total_enrollment}</span> </Card.Footer>
        <Button variant="primary">Enroll this course</Button>
      </Card.Body>
    </Card>
            
    </div>
    );
};

export default Coursecard;