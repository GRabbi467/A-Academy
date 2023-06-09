import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories,setCategories] = useState([]);

    useEffect(() => {
    fetch('http://localhost:5000/course-categories')
    .then(res => res.json())
    .then(data => setCategories(data));
    }, [])
    
    return (
        <div>
            <h3>Course Categories</h3>
            <div>
                {
                    categories.map(category => <p key = {category.id}>
                        <Link to = {`category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
            
        </div>
    );
};

export default Sidebar;