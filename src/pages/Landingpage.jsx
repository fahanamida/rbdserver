import React from 'react'
import { Link } from 'react-router-dom'
import bgImage1 from '../assets/Images/bg1.jpg'
import {Row,Col} from 'react-bootstrap'
import resumePic1 from '../assets/Images/resumeimage.png'
import bgimage2  from '../assets/Images/bg2.jpg'
import resumePic2 from '../assets/Images/bg3.jpg'

function Landingpage() {

  return (
    <>
      <div className='container-fluid d-flex justify-content-center align-items-center'
       style={{
        height: "90vh",
        backgroundImage: `url(${bgImage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment:"fixed"
      }} >
        <div className='border border-3 w-50 shadow rounded p-3 text-center' style={{backgroundColor:'rgba(255, 255, 255, 0.5)'}}>
          <h2>Build  Your Resume </h2>
          <h4>Your Skills, Your Story , Your Next Job All in One</h4>
          <Link to={'./instruction'} className='btn btn-info'>Make Your Resume</Link>
        </div>
      </div>
      <div className='container-fluid p-5'>
        <h2 className='text-center'>Tools</h2>
        <Row>
          <Col sm={12} md={6}>
            <h3>Resume</h3>
            <p style={{textAlign:'justify'}}>
              Motivated and enthusiastic individual with a strong interest in web development. Skilled in JavaScript, React, HTML, and CSS. Eager to learn new technologies and contribute to real-world projects while growing professionally.
            </p>
            <p style={{textAlign:'justify'}}>
              A cover letter is a brief written document sent along with a resume when applying for a job. It introduces the applicant and explains why they are suitable for the position. Unlike a resume, which lists qualifications and experience, a cover letter gives a personal touch by describing skills, interests, and career goals.
            </p>
            <h3>Jobs</h3>
            <p style={{textAlign:'justify'}}>
              A job is an important part of a person’s life because it provides income, experience, and a sense of purpose. Through jobs, people use their skills and knowledge to contribute to society while earning a living. Jobs help individuals become independent and responsible.
            </p>
            <h3>Applications</h3>
            <p style={{textAlign:'justify'}}>
              Applications are formal requests made by individuals to seek permission, jobs, admissions, or services. They are commonly used in schools, colleges, offices, and organizations. An application helps communicate a person’s purpose clearly and politely.
            </p>
          </Col>
          <Col sm={12} md={6} className='d-flex justify-content-center'>
            <img src={resumePic1} alt="resumeimg" width={'80%'}/>
          </Col>
        </Row>
      </div>
      <div style={{
        height: "90vh",
        backgroundImage: `url(${bgimage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment:"fixed"
      }}>
      </div>
      <div className='container-fluid p-5' >
        <h2 className='text-center'>Testimony</h2>
        <h3>Trusted by Proffesionals World Wide</h3>
          <Row>
            <Col sm={12} md={6}>
              <p style={{textAlign:'justify'}}>
              A testimony is a statement in which a person shares their personal experience, opinion, or feedback about something they have used or experienced. It is usually based on real events and honest feelings. Testimonies help others understand the value and quality of a product, service, or experience through the words of real people.
            </p>
            <p style={{textAlign:'justify'}}>
              Testimonies are commonly used in websites, advertisements, and businesses to build trust. When people read positive testimonies, they feel more confident in choosing a product or service. For example, a student may give a testimony about a resume builder explaining how it helped them create a professional resume and apply for jobs easily.
            </p>
            <p style={{textAlign:'justify'}}>
              In education and professional life, testimonies also play an important role. Teachers, employers, and organizations often use testimonies to understand a person’s skills, character, and achievements. A good testimony highlights strengths and real outcomes without exaggeration.
            </p>
            </Col>
            <Col sm={12} md={6} className='d-flex justify-content-center'>
            <img src={resumePic2} alt="resumeimg" width={'80%'}/>
          </Col>
          </Row>
      </div>
    </>
  )
}

export default Landingpage
