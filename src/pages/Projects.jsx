import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Mis{" "}
        <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>
          {" "}
          Proyectos
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      A lo largo del tiempo, me he embarcado en algunos proyectos, pero estos son unos de los que más me importan. 
      Muchos de ellos son de código abierto, así que si encuentras algo que te interese, no dudes en explorar el código base 
      y aportar tus ideas para mejorarlos. ¡Tu colaboración es realmente valiosa!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-semibold'
                >
                  Link Directo
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
