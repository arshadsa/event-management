import React from "react";
import ProjectBanner from "./components/ProjectBanner";
import ImageGallery from "./components/ImageGallery";
import RecentProject from "./components/RecentProject";
import InnerBanner from '../../components/Shared/innerBanner/InnerBanner';

const projects = [
  {
    id: 1,
    title: 'Corporate Gala Dinner',
    location: 'New York, NY',
    date: 'April 12, 2023',
    description:
      'A luxurious gala dinner event held at a prestigious venue, featuring celebrity guests, fine dining, and live entertainment.',
    imageSrc: 'https://via.placeholder.com/800x600',
  },
  {
    id: 2,
    title: 'Community Music Festival',
    location: 'Los Angeles, CA',
    date: 'July 22, 2023',
    description:
      'An annual music festival that brings together local artists and music enthusiasts for a day of live performances and fun.',
    imageSrc: 'https://via.placeholder.com/800x600',
  },
  // Add more project entries here
];
const ProjectsPage = () => {
  // Sample project data

  return (
    <>
      <InnerBanner title='Projects' name='Projects' />
      <div className="bg-gray-100 min-h-screen p-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-8">
            Our Recent Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  className="w-full h-56 object-cover"
                  src={project.imageSrc}
                  alt={project.title}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-gray-600">{project.location}</p>
                  <p className="text-gray-600">{project.date}</p>
                  <p className="mt-4 text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
