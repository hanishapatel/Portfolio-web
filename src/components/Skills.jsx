import React from 'react';

export default function Skills({heading, skillsArray, icon}){
    return (
        <div className="col-lg-4 col-xl-4 col-xxl-4">
            <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-3">
                    <div className="mb-5">
                        <div className="d-flex align-items-center mb-4">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className={"bi " + icon}></i></div>
                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-code-slash">{heading}</span></h3>
                        </div>
                        <div className="row row-cols-12 row-cols-md-12 mb-2 p-2">
                            
                                {skillsArray.map((skill, index) => (
                                    <React.Fragment key={index}>
                                        <div className="progress-wrap mb-4">
                                            <div className="d-flex pb-1">
                                                <span>{skill}</span>
                                            </div>
                                            <div className="progress rounded-0" style={{height: '3px'}}>
                                                <div className="progress-bar bg-gradient-primary-to-secondary" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}


                                
                        </div>
                        </div>
                </div>
            </div>
            
        </div>
    );
}