import React from 'react'
import { positions } from './Data'
import { Accordion, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logoImage from '../assets/goCometlogo2.png'
import './OutputPage.css'
import NavBar from '../components/Navbar'

const OutputPage = () => {
  //console.log(positions[category][company][0].Name)

  return (
    <>
      <NavBar />
      <Accordion className="accordion" defaultActiveKey="0">
        <Card className="card">
          <Accordion.Toggle className="Accheader" as={Card.Header} eventKey="0">
            <div className="cardContent">
              <div className="imgContainer">
                <img src={logoImage}></img>
              </div>
              <div className="contentContainer">
                <div className="Name">Ripunjay Narula</div>
                <div className="position">Head of logistics, Google</div>
              </div>
              <div className="svgContainer">
                <svg
                  width="27"
                  height="16"
                  viewBox="0 0 27 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L13.5 14L25 2"
                    stroke="#3284E2"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse className="Acccollapse" eventKey="0">
            <Card.Body>
              <div className="collapseContent">
                <div className="specialities">
                  Trained in HTML CSS ETC BULLSHIT
                </div>
                <div className="contact">
                  <div className="linkedinsvg">
                    <svg
                      width="1.3rem"
                      height="1.3rem"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.4087 0H2.91706C1.36023 0 0 1.12019 0 2.65874V31.2137C0 32.7607 1.36023 34.1392 2.91706 34.1392H31.4004C32.9656 34.1392 34.1391 32.7515 34.1391 31.2137V2.65874C34.1483 1.12019 32.9656 0 31.4087 0ZM10.5824 28.4567H5.69163V13.2503H10.5824V28.4567ZM8.30617 10.9383H8.27111C6.7059 10.9383 5.69239 9.7731 5.69239 8.31457C5.69239 6.82936 6.73257 5.69164 8.33284 5.69164C9.93311 5.69164 10.9123 6.82098 10.9474 8.31457C10.9466 9.7731 9.93311 10.9383 8.30617 10.9383ZM28.4566 28.4567H23.5659V20.1421C23.5659 18.1502 22.8542 16.7892 21.0847 16.7892C19.7329 16.7892 18.9327 17.7036 18.5769 18.5944C18.4435 18.9145 18.4077 19.3504 18.4077 19.7954V28.4567H13.517V13.2503H18.4077V15.3664C19.1194 14.3529 20.2312 12.8944 22.8183 12.8944C26.0288 12.8944 28.4574 15.0106 28.4574 19.5729L28.4566 28.4567Z"
                        fill="#0054FF"
                      />
                    </svg>
                  </div>
                  <div className="linkedinURL">
                    <a
                      href="https://www.linkedin.com/in/christa-langner-9a6a3965/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}

export default OutputPage
