import { DATA } from '../constants';

export default function AboutMe(){
    return (
        <div className="text-center my-5">
            <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
            <p className="lead fw-light mb-2">I'm Hanisha Dipen Patel, a passionate full stack developer.</p>
            <p className="text-muted mb-3" style={{fontSize: '1.2rem'}}>Graduated with Masters in Computer Science at University of Houston - Clear Lake.</p>       
            <p className="text-muted mb-3" style={{fontSize: '1.2rem'}}>Proficient in Java, SQL, Python, PHP, and Web Development. Experienced as a Full Stack Web Developer.</p>
            {/* <p className="text-muted mb-3" style={{fontSize: '1.2rem'}}>As a Research Assistant, I developed backend scripts for PHP server and created RESTful APIs in Propel using Object-Relational Mapping to enable communication between the app and the MySQL database. Additionally, I collaborated closely with the research team to gather requirements, provide technical solutions, and design user-friendly web pages for an app and the associated research website.</p> */}
            {/* <p className="text-muted mb-3" style={{fontSize: '1.2rem'}}>Additionally, I have worked as a Full Stack Web Developer, successfully delivering web-based ERP software with various modules like billing module, inventory module, vendor management.</p> */}
            <p className="text-muted mb-3" style={{fontSize: '1.2rem'}}>Passionate about sharing and gaining knowledge on software development, mobile applications, and web technologies.
            </p>
            <div className="d-flex justify-content-center fs-2 gap-4">
                <a className="text-gradient" target="_blank" href={DATA.LINKEDIN} rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                <a className="text-gradient" target="_blank" href={DATA.GITHUB} rel="noreferrer"><i className="bi bi-github"></i></a>
                <a className="text-gradient" href={"mailto:"+DATA.EMAIL}><i className="bi bi-envelope-fill"></i></a>
            </div>
        </div>
    );
}