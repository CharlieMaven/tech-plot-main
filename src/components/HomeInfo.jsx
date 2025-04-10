import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Welcome to
        <span className='font-semibold mx-2 text-white'>TECH:PLOT</span>
        👋
        <br />
        We build tech teams and host amazing tech events! 
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Reach out to us <br /> at hello@techplot.se and we will <br /> help you recruit amazing talent
        </p>

        <Link to='https://www.linkedin.com/feed/' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          We make meaningful tech events <br /> Curious to join as a speaker or audience?
        </p>

        <Link to='https://confetti.events/en' className='neo-brutalism-white neo-btn'>
          Tech:Plot Events
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        We provide direct IT recruitment <br/> as well as consultancy and full in-house solutions <br/> Reach out at hello@techplot.se
      </p>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
