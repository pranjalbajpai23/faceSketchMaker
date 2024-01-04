import { Link } from "react-router-dom";

const Navbar=()=>{
    return<>
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src="./logo.svg" className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap" alt="" />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
                        <li><Link to="/main" className="nav-link px-2 text-white">Create Sketch</Link></li>
                        <li><Link to="/main" className="nav-link px-2 text-white">Upload a Sketch</Link></li>
                        <li><Link to="" className="nav-link px-2 text-white">Communuty forum</Link></li>
                        <li><Link to="" className="nav-link px-2 text-white">About</Link></li>
                    </ul>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    </>
}
export default Navbar;