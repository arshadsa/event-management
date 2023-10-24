import React, { useState } from "react";
import OurTeam from "./OurTeam";
import Testimonial from "./Testimonial";
import about from "../../assets/background/aboutBg.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import bgImage from "../../assets/background/background.jpg";
import InnerBanner from "../../components/Shared/innerBanner/InnerBanner";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  function toggleAccordion(index) {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  }

  const ourEvents = [
    {
      title: "Event planning and coordination",
      description:
        "Expertly organize and oversee events for seamless execution and memorable experiences.",
    },
    {
      title: "Venue selection and booking",
      description:
        "Curate the perfect event space, managing logistics from selection to reservation.",
    },
    {
      title: "Vendor management",
      description: "Skillfully coordinate with vendors, ensuring a harmonious collaboration for event success.",
    },
    {
      title: "Catering and beverage coordination",
      description: "Delight guests with top-notch catering and beverage services, meticulously organized.",
    },
    {
      title: "Décor and setup",
      description: "Transform spaces into stunning settings with creative décor and meticulous setup.",
    },
    ,
    {
      title: "Audio/visual services",
      description: "Elevate events with flawless audio/visual solutions for impactful presentations.",
    },
    {
      title: "Transportation",
      description: "Seamlessly arrange transportation, ensuring smooth journeys for all event attendees.",
    },
  ];

  return (
    <>
      <InnerBanner title='About' name='About' />

      <div
        className="bg-neutral-200 min-h-screen"
        style={{ backgroundImage: { bgImage } }}
      >
        <div className="bg-white/80 p-20">
          <div className="lg:flex gap-6 justify-between items-center">
            <div className="lg:w-2/3 bg-white p-10 border rounded shadow-lg hover:rotate-20">
              <p className="tracking-wide">
                <span className="text-3xl font-bold text-blue-700">W</span>e
                understand that every event is different, and we take the time to
                get to know our clients and their needs in order to create an
                event that is truly unique and special. We offer a wide range of
                services, including:{" "}
                <HiArrowNarrowRight className="inline text-blue-700 ml-32 text-4xl animate-pulse infinite-pulse font-semibold transition-transform transition-duration-300" />
                <HiArrowNarrowRight className="inline text-blue-700 text-4xl animate-bounce infinite-bounce font-semibold transition-transform transition-duration-300" />
              </p>
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="event photo"
                className="py-5 hover:skew-y-3 transition duration-300"
              />
              <p className="tracking-wide">
                We are committed to providing our clients with the highest level
                of service and support. We work closely with our clients
                throughout the entire planning process to ensure that their event
                is everything they dreamed of and more.
              </p>
            </div>
            <div className="bg-white p-10 border rounded shadow-lg hover:scale-105 hover:skew-y-3 transition duration-300">
              {ourEvents.map((event, index) => (
                <div className="border-b last:border-b-0" key={index}>
                  <button
                    className="w-full flex items-center justify-between p-4 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <p className="text-xl font-medium">{event.title}</p>
                    <span className="text-gray-400">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    className={`${activeIndex === index ? "max-h-screen" : "max-h-0"
                      } overflow-hidden transition-all duration-300`}
                  >
                    <div className="p-4">
                      <p>{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OurTeam />
        <Testimonial />
      </div>
    </>
  );
};

export default About;
