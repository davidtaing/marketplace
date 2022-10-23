import type { NextPage } from "next";
import { Button } from "../components/Button";

const LI = "w-full min-h-[10rem] bg-white text-slate-700 py-3 px-6 rounded-md";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <section className="hero-section min-h-[40rem] flex flex-col justify-center p-4 ">
        <div className="flex flex-col items-center text-center max-w-4xl h-full mx-auto">
          <h1 className="w-full text-5xl font-medium text-slate-900">
            Need Something Done?
          </h1>
          <p className="w-full text-2xl mt-4 text-slate-700">
            Support the community with small jobs.
          </p>
          <div className="flex gap-4 mt-8">
            <Button variant="MEDIUM_PRIMARY">Post a Task</Button>
            <span className="text-l self-center">or</span>
            <Button variant="MEDIUM_SECONDARY">Earn Money</Button>
          </div>
        </div>
      </section>
      <section className="first-section py-24 px-4 bg-white flex flex-col justify-center">
        <div className="max-w-4xl mx-auto  flex flex-col items-center text-center">
          <h2 className="w-full text-3xl font-medium text-slate-900">
            An Intitiative By Teeang
          </h2>
          <p className="w-full text-xl mt-4 text-slate-700">
            It is our mission to Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Culpa magnam reprehenderit corrupti voluptate,
            asperiores expedita blanditiis vero maxime.
          </p>
        </div>
      </section>
      <section className="second-section py-24 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="w-full text-4xl font-medium text-slate-900">
            Categories
          </h2>
          <ul className="w-full grid md:grid-cols-4 auto-cols-fr gap-6 mt-8">
            <li className={LI}>Cleaning</li>
            <li className={LI}>Painting</li>
            <li className={LI}>Gardening</li>
            <li className={LI}>Something Else</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
