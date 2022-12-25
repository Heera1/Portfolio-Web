import { NextPage } from 'next';
import AboutMe from '../components/AboutMe';

const About: NextPage = () => {
  return (
    <div className="">
      <h1 className="pb-5 text-3xl">About Me</h1>
      <AboutMe />
    </div>
  );
};
export default About;
