import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        ¡Hola!, Soy
        <span className='font-semibold mx-2 text-white'>Nicolás</span>
        😸
        <br />
        Desarrollador Fullstack ubicado en Colombia.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Durante mis estudios <br /> he desarrollado distintas habilidades en el área.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Ver más
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          He realizado, participado y liderado <br /> distintos proyectos durante mi formación. <br /> <br /> ¿Deseas saber más?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visita mi portafolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        ¿Tienes una idea de proyecto o necesitas un desarollador? <br/> Estoy a unas teclas de contacto😸
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        ¡Hablemos!
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
