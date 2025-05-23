import liv from '../assets/liv.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="center-container p-5">
                <form className="form-control text-center p-3">
                    <img src={liv} alt="LivDairy" />
                    <br /><br />
                    <span>Pure Milk is Waiting.</span><br />
                    <span>Create account to Order now</span>
                    <br /><br />
                    <input className="form-control mb-2" type="text" id="name" placeholder="Enter your Name" />
                    <input className="form-control mb-2" type="phone" id="number" placeholder="+91 ***** *****" />
                    <input className="form-control mb-2" type="text" id="address" placeholder="Address" />
                    <input className="form-control" type="OTP" id="address" placeholder="OTP" disabled />
                    <br />
                    <button className="btn btn-primary">SIGNUP</button>
                    <br /><br />
                    EXISTING USER /
                    <a className='text-decoration-none' href="#" onClick={(e) => {
                        e.preventDefault();
                        navigate('/login');
                    }}> LOGIN</a>
                </form>
            </div>
        </>
    )
}

export default Signup;