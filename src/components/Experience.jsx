import React from 'react'
import experience from './data/experience.json'

const Experience = () => {
  return (
    <>
    <div className='conatainer ex' id='experience'>
      <h1>Experience</h1>
      {experience.map((data) =>{
          return(
            <>
            <div key={data.id} className='ex-items text-center my-5
            'data-aos="fade-zoom-in"
            data-aos-duration='1000'>
              <div className='left'>
  <img className="custom-image" src={`/assets/${data.imageSrc}`} alt="" />
</div>
   
                <div className='right'>
                  <h2>{data.organisation}</h2>
                  <h3><span style={{color: '#f1ed19ff'}}>{data.role}</span></h3>
                  <h4><span style={{color: 'yellowgreen'}}>{data.startDate}{" "}{data.endDate}{" "}</span>
                   
                   <span style={{color: '#FCB454'}}>{""}{data.location}</span></h4>
                  <h5 style={{color: '#FCB454'}}>{data.experiences[0]}</h5>
                  <h5 style={{color: '#FCB454'}}>{data.experiences[1]}</h5>
                  </div>           
            </div>
            </>
          )
        })
      }
    </div>
    </>
  )
}

export default Experience
