import React from 'react'
import project from './data/projects.json'

const Project = () => {
  return (
    <>
    <div className='container projects my-3' id='projects'>
      <h1>Projects</h1>
      <div className='row d-flex justify-content-center align-content-center'>
        {project.map((data) => (
          <>
          <div key={data.id} className='my-3 col-sm-6 col-md-4 col-lg-3 mx-3'>
            <div className="card bg-dark text-light" style={{width:'18rem', border:'2px solid #0ca120d5', boxShadow:' 5px 5px 10px 0.8px #0ca120d5' }}
            data-aos="flip-left"
        data-aos-duration="1000">              


              <div className='img d-flex justify-content-center align-content-center p-3'>
                <img src={data.imageSrc} className="card-img-top" alt="..." style={{width:'250px',height:'200px', border:'2px solid  #0ca120d5', borderRadius:'10px'}}/>
              </div>
  
  <div className="card-body text-center">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
    
    <a href={data.source} className="btn btn-success">Code</a>

  </div>
</div>
          </div>
          </>
        ))}
      </div>
    </div>
    </>
  )
}

export default Project
