import { useNavigate } from "react-router-dom";
import "../styles/register.css";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container register-page">
      <div className="register-container">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <div className="input-group">
          <label>
            Full Name<span>*</span>
          </label>
          <input placeholder="Marry Doe" />
        </div>

        <div className="input-group">
          <label>
            Phone number<span>*</span>
          </label>
          <input placeholder="Marry Doe" />
        </div>

        <div className="input-group">
          <label>
            Email address<span>*</span>
          </label>
          <input placeholder="Marry Doe" />
        </div>

        <div className="input-group">
          <label>
            Password<span>*</span>
          </label>
          <input placeholder="Marry Doe" />
        </div>

        <div className="input-group">
          <label>Company name</label>
          <input placeholder="Marry Doe" />
        </div>

        <div className="agency-section">
          <p>
            Are you an Agency?<span>*</span>
          </p>

          <div className="radio-group">
            <label>
              <input type="radio" name="agency" defaultChecked />
              Yes
            </label>

            <label>
              <input type="radio" name="agency" />
              No
            </label>
          </div>
        </div>

        <button
          className="register-btn"
          onClick={() => navigate("/account")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Register;