import { useNavigate } from 'react-router-dom';
import liv from '../assets/liv.jpg'

const Entry = () => {
    const navigate = useNavigate();

    return (
        <div className="center-container p-5">
            <form className="form-control text-center p-3">
                <img src={liv} alt="LivDairy" />
                <br /><br />
                <button onClick={() => navigate('/login')} className="btn btn-primary mb-4">
                    LOGIN
                </button><br />
                <button onClick={() => navigate('/signup')} className="btn btn-primary">
                    SIGNUP
                </button>
            </form>
        </div>
    );
};

export default Entry;
