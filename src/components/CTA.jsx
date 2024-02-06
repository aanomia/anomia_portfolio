import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        ¿Con un proyecto en mente? <br className='sm:block hidden' />
        ¡Construyamos algo en equipo!
      </p>
      <Link to='/contact' className='btn'>
        Contactáme aquí
      </Link>
    </section>
  );
};

export default CTA;
