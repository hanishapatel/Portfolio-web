export default function ProjectCardView(props){
    return (
        <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 web">
        <a href={props.link} className="link-unstyled">
            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5 hover-effect">
                <div className="card-body p-3">
                    <div className="d-flex align-items-center">
                        <div className="p-0">
                            <h2 className="fw-bolder">{props.title}</h2>
                            <p>{props.description}</p>
                        </div>
                        <img className="img-fluid" width="300px" src={props.icon} alt="..." />
                    </div>
                </div>
            </div>
        </a>
    </div>
    );
}