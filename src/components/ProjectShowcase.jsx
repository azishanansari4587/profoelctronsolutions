import React from 'react';




const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-tech-blue text-white rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500">Client: {project.client}</p>
        </div>
      </div>
    </div>
  );
};



const ProjectShowcase = ({ projects, title = "Our Projects", service }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <div className="h-1 w-24 bg-tech-blue mx-auto mb-6"></div>
          {service && (
            <p className="text-lg text-gray-600">
              Explore our successful {service} projects that have delivered exceptional results.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="animate-slide-up" style={{animationDelay: `${(project.id - 1) * 100}ms`}}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
