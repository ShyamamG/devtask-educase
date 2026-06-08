import "../styles/account.css";

function Account() {
  return (
    <div className="mobile-container account-page">
      <div className="account-header">
        <h3>Account Settings</h3>
      </div>

      <div className="profile-card">
        <div className="profile-top">
          <div className="image-wrapper">
            <img
              src="/avatar.png"
              alt="Stef Andrews"
              className="avatar"
            />

            <div className="camera-icon">
              📷
            </div>
          </div>

          <div>
            <h4>Stef Andrews</h4>
            <p>stefandrews135@gmail.com</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet,
          Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Account;