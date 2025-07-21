import React from 'react'
import skills from './data/skills.json'

const Skills = () => {
  return (
    <>
      <div className='container skills' id='skills'>
        <h1>Skills</h1>
        <div className='row items'>
          {skills.map((data) => (
            <div
              className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center item'
              key={data.id}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img
                src={`/assets/${data.imageSrc}`}
                alt={data.title}
                className='img-fluid mb-2'
                style={{ maxHeight: '100px', objectFit: 'contain' }}
              />
              <h3 className='text-center'>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills
