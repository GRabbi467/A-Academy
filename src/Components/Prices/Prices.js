import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { FaCheckCircle } from "react-icons/fa";
   
  const Prices =() =>{
    return (
      <div className="pricing d-flex justify-evenly">
        <div className="pricing1-">
        <Card color="blue" variant="gradient" className="w-full max-w-[20rem] p-8">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            Free
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>00{" "}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">2 team members</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">20 components</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">No built-in pages</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">No free updates</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">1 Month technical support</Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="white"
            className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Enroll Now
          </Button>
        </CardFooter>
      </Card>
        </div>



        <div className="pricing-2">
        <Card color="blue" variant="gradient" className="w-full max-w-[20rem] p-8">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            standard
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>29{" "}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">5 team members</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">200+ components</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">40+ built-in pages</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">1 year free updates</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">Life time technical support</Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="white"
            className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Enroll Now
          </Button>
        </CardFooter>
      </Card>
        </div>


        <div className="pricing-3">
        <Card color="blue" variant="gradient" className="w-full max-w-[20rem] p-8">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            Premium
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>50{" "}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">15 team members</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">500+ components</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">100+ built-in pages</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">3 year free updates</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <FaCheckCircle strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">Life time technical support</Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="white"
            className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Enroll Now
          </Button>
        </CardFooter>
      </Card>
        </div>
      </div>
      
    );
  }

  export default Prices;