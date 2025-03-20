import { DATA } from "../constants";
//import resume from '../resume/Deep_Rajesh_Furiya_Resume.pdf';


export default function Intro() {
  return (
    <div className="col-xxl-5">
      <div className="text-center"></div>
      <div className="text-center text-xxl-start mt-5">
        <div className="fs-3 fw-light text-muted">Hi There !</div>
        <h1 className="display-3 fw-bolder mb-2">
          <span className="text-gradient d-inline">I AM HANISHA</span>
        </h1>

        <div className="table-responsive">
          <div className="badge bg-gradient-primary-to-secondary text-white mb-2">
            <div className="text-uppercase">
              FULL {`\u00A0`} STACK {`\u00A0`} DEVELOPER {`\u00A0`} &middot; {`\u00A0`} MASTERS {`\u00A0`} IN {`\u00A0`} COMPUTER {`\u00A0`} SCIENCE {`\u00A0`}
            </div>
          </div>
        </div>

        <div className="fs-5 fw-light mb-2">
          <i className="bi bi-envelope"></i>{`\u00A0`} {DATA.EMAIL}
        </div>

        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
          {/* <a
            className="btn text-light btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
            style={{ backgroundColor: "#3267c2" }}
            target="_blank"
            href={resume}
          >
            Resume
          </a> */}
          <a
            className="btn btn-outline-dark btn-lg px-3 py-3 fs-6 fw-bolder"
            target="_blank"
            href={"mailto:"+DATA.EMAIL} rel="noreferrer"
          >
            Email {`\u00A0`} <i className="bi bi-envelope-fill"></i>
          </a>
          <a
            className="btn btn-outline-dark btn-lg px-3 py-3 fs-6 fw-bolder"
            target="_blank"
            href={DATA.LINKEDIN} rel="noreferrer"
          >
            Connect {`\u00A0`}<i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
