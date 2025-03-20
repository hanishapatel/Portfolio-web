/* eslint-disable jsx-a11y/anchor-is-valid */
import { headingArray } from '../constants';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg py-3 fixed-top">
          <div className="container px-5">
              <a className="navbar-brand" href=""><span className="fw-bolder text-light" >Hanisha Patel</span></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                    {
                        headingArray.map(k => (
                            LiItemForNavbar(k)
                        ))
                    }
                  </ul>
              </div>
          </div>
      </nav>
    );
}

function LiItemForNavbar(props){
    let val = " ";
    if(props.toLowerCase() !== 'home'){
        val = "#"+props.toLowerCase()
    }
    return (
        <li className="nav-item" key={props}><a className="nav-link text-light" href={val}>{props}</a></li>
    );
}