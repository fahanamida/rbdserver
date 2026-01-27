import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { LuFiles } from "react-icons/lu";
import { IoMdDownload } from "react-icons/io";
import { Link } from 'react-router-dom';

function ResumeInstructions() {
  return (
    <>
    <div className='container-fluid p-5' style={{minHeight:'70vh'}}>
      <h2 className='text-center mt-3 mb-5'>Create a job winning Resume in minutes</h2>
          <Row>
            <Col sm={12} md={6} className='d-flex justify-content-center align-items-center text-center mb-4 mt-3'>
            <Card style={{ width: '18rem',height:'290px' }} className='border border-3 shadow rounded p-3'>
              <Card.Body>
                <LuFiles style={{fontSize:'50px',color:'#1E88E5'}} className='mb-1' />
                <Card.Title className='text-center'><h3>Add Your Information</h3></Card.Title>
                <Card.Text  className='text-center'>
                  Add Pre-Written <br /> Examples To Each Section
                </Card.Text>
                <Card.Text href="#" className='text-center'><h3>Step 1</h3></Card.Text>
              </Card.Body>
            </Card>
            </Col>

             <Col sm={12} md={6} className='d-flex justify-content-center align-items-center text-center'>
            <Card style={{ width: '18rem',height:'290px'  }} className='border border-3 rounded shadow rounded p-3'>
              <Card.Body>
                <IoMdDownload style={{fontSize:'50px',color:'#1E88E5'}} className='mb-1' />
                <Card.Title className='text-center'><h3>Download Your Resume</h3></Card.Title>
                <Card.Text  className='text-center'>
                  Download <br /> And Start Applying
                </Card.Text>
                <Card.Text href="#" className='text-center'><h3>Step 2</h3></Card.Text>
              </Card.Body>
            </Card>
            </Col>
          </Row>

          <div className='p-5 text-center container-fluid'>
            <Link to={'/form'} className='btn  btn-info text-light' style={{backgroundColor:'#28abd7ff'}}>Let's Start</Link>
          </div>
        </div>
    </>
  )
}

export default ResumeInstructions