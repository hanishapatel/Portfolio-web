import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import IntroImage from "./components/IntroImage";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import React from "react";
import { SKILLS } from "./constants";
import Experience from "./components/Experience";
import { EXPERIENCE } from "./constants";
import Education from "./components/Education";
import { EDUCATION } from "./constants";
import { useState } from "react";
import ProjectButtons from "./components/ProjectButtons";
import ProjectCardView from "./components/ProjectCardView";
import { PROJECTS } from "./constants";
import { DATA } from "./constants";

function App() {
  const [clicked, changedClicked] = useState(0);

  function changeProjectView(val) {
    changedClicked(val);
  }

  const getProjectsToDisplay = () => {
    switch (clicked) {
      case 0: return [...PROJECTS.web, ...PROJECTS.mobile];
      case 1: return [...PROJECTS.mobile];
      case 2: return [...PROJECTS.web];
      case 3: return [...PROJECTS.web, ...PROJECTS.mobile];
      default: return [];
    }
  }

  const projectsToDisplay = getProjectsToDisplay();

  return (
    <div className="App">
      <Navbar />

      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <Intro />
            <IntroImage />
          </div>
        </div>
      </header>

      {/* About Section  */}
      <section className="bg-light py-5" id="about">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="">
              <AboutMe />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-5" id="skills">
        <div className="row justify-content-center mt-5 m-0 ps-3 pe-3">
          <div className="text-center mb-3">
            <h2 className="display-5 fw-bolder">
              <span className="text-gradient d-inline">Skills</span>
            </h2>
          </div>
          {Object.values(SKILLS).map((key, index) => (
            <Skills
              key={index}
              heading={key.title}
              skillsArray={key.content}
              icon={key.icon}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-light py-5" id="experience">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="">
              <div className="text-center mt-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">Experience</span>
                </h2>

                <div className="card shadow border-0 rounded-4 mb-5 mt-3">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                      {Object.values(EXPERIENCE).map((key, index) => (
                        <Experience key={index} value={key} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educaiton Section */}
      <section className="py-5" id="education">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="">
              <div className="text-center mt-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">Education</span>
                </h2>

                <div className="card shadow border-0 rounded-4 mb-5 mt-3">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                      <div className="col-12 col-x-2 col-xl-2 col-xxl-2 text-lg-center mb-4 mb-lg-0"></div>

                      {Object.values(EDUCATION).map((key, index) => (
                        <Education key={index} value={key} />
                      ))}

                      <div className="col-12 col-x-2 col-xl-2 col-xxl-2 text-lg-center mb-4 mb-lg-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-light py-5" id="projects">
        <div className="container px-5">
          <div className="text-center mt-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center mb-5 mt-3">
            <div className="col-12 col-lg-12 col-xl-12 col-xxl-12 p-2 m-2">
              {/* <ProjectButtons
                onSelect={clicked == 0}
                onClickListener={() => changeProjectView(0)}
              >
                ALL
              </ProjectButtons>
              <ProjectButtons
                onSelect={clicked == 1}
                onClickListener={() => changeProjectView(1)}
              >
                MOBILE APPS
              </ProjectButtons>
              <ProjectButtons
                onSelect={clicked == 2}
                onClickListener={() => changeProjectView(2)}
              >
                WEB PROJECT
              </ProjectButtons> */}
              <ProjectButtons
                onSelect={clicked == 3}
                onClickListener={() => {
                  changeProjectView(3);
                  window.open(DATA.GITHUB,"_blank");
                }}
              >
                LOAD MORE {`\u00A0`}<i class="bi-github"></i>
              </ProjectButtons>
            </div>

            {
              projectsToDisplay.map((project,index) => (
                <ProjectCardView key={index} {...project}/>
              ))
            }

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
