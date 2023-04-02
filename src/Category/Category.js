import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coursecard from '../CourseCard/Coursecard';

const Category = () => {
    const category = useLoaderData();

    return (
        <div>
            <h4 className='mt-5'>This is category has : {category.length}</h4>
            {
                category.map( course => <Coursecard
                    key = {course._id}
                    course = {course}
                    ></Coursecard>)
            }

        </div>
    );
};

export default Category;