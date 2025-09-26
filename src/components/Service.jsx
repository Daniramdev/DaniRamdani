import React from 'react';

const servicesData = [
  {
    id: '01',
    title: 'Design',
    description: 'Your ability to create "solid and user-friendly digital designs" is the front-end skill required to build a great user experience. This includes creating the visual layout, user flow, and the overall look and feel.',
  },
  {
    id: '02',
    title: 'Development',
    description: 'Your skills in building "scalable websites from scratch" and your focus on "micro animations, transitions, and interactions" are core front-end development skills. Your experience with Webflow and Kirby CMS also covers both front-end and back-end aspects. Webflow handles visual development and some back-end functionality, while a CMS like Kirby manages content and data, which is a back-end task.',
  },
  {
    id: '03',
    title: 'The Full Package',
    description: 'This is the ultimate goal of a full-stack developer. Your ability to combine your "great sense for design" (front-end) and your "development skills" (back-end logic and server-side operations) enables you to "create kick-ass projects" from "concept to implementation."',
  },
];

const Services = () => {
  return (
    <div className="container p-5 md:p-10 -mt-[160vh] mb-80">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-black/80">
        I can help you with
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div key={service.id} className="flex flex-col p-5 text-black/80">
            <span className="text-md font-normal text-black/50">{service.id}</span>
            <div className="w-16 border-t border-gray-300 mt-2 mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2">{service.title}</h2>
            <p className="text-base leading-relaxed text-black/80 text-justify">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;