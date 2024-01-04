import { Link } from "react-router-dom";

const Hero=()=>{
    return <>
        <div className="container col-xxl-8 px-4 py-5" >
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="./bg.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold  lh-1 mb-3" style={{color:"white"}} >Create forensic sketch <br/> in a minute like 🫰</h1>
                    <p className="lead" style={{ color: "white" }}>Effortlessly create intricate face sketches through our intuitive drag-and-drop interface, streamlining the process for artists at any level, simplifying intricate designs with easy manipulation and precision.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to="/main" type="button" className="btn btn-primary btn-lg px-4 me-md-2">Lets get started</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Hero;