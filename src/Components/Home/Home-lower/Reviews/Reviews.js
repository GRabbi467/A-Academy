import React from 'react';
import './Reviews.css';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import { FaStar ,FaStarHalfAlt} from "react-icons/fa";

const Reviews = () => {
    return (
        <div div className='text-center'>
        <h1 className='text-blue-500 text-center'>REVIEWS OF OUR COURSES</h1>
            <div className="review-card">

                <div className="review1">
                <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                        <Avatar
                        size="lg"
                        variant="circular"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="candice wu"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray">
                           HERO ALAM
                            </Typography>
                            <div className="5 flex items-center gap-0">
                            <FaStar className="h-5 w-5 text-yellow-700" />
                            <FaStar className="h-5 w-5 text-yellow-700" />
                            <FaStar className="h-5 w-5 text-yellow-700" />
                            <FaStar className="h-5 w-5 text-yellow-700" />
                            <FaStar className="h-5 w-5 text-yellow-700" />
                            </div>
                        </div>
                        <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography className ='text-white'>
                        &quot;I found solution to all my design needs from Creative Tim. I use
                        them as a freelancer in my hobby projects for fun! And its really
                        affordable, very humble guys !!!&quot;
                        </Typography>
                    </CardBody>
                    </Card>
                </div>



                <div className="review2">
                <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                        <Avatar
                        size="lg"
                        variant="circular"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="candice wu"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray">
                           Mr James Charles Doe
                            </Typography>
                            <div className="5 flex items-center gap-0">
                            <FaStar className="h-5 w-5 text-yellow-700" />
                            <FaStar className="h-5 w-5 text-yellow-700" />
                            <FaStar className="h-5 w-5 text-yellow-700" />
                            <FaStar className="h-5 w-5 text-yellow-700" />
                            <FaStarHalfAlt className="h-5 w-5 text-yellow-700" />
                            </div>
                        </div>
                        <Typography color="blue-gray">Frontend Lead @ Amazon</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography className ='text-white'>
                        &quot;"I've never completed a course like this before (remote instruction) and I cannot express how great the instructor was and the overall content of the material. I would defintely recommend this to my co-workers as well as friends. I will be looking into taking more of these classes through ONLC in the near future. Thank you!"&quot;
                        </Typography>
                    </CardBody>
                    </Card>
                </div>

            </div>
            </div>
    );
};

export default Reviews;