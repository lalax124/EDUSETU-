import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// All CSS from styles.module.css is placed in a template literal
const cssStyles = `
  body {
    background-color: rgb(233, 236, 246);
    font-family: 'Nunito', sans-serif;
  }

  .container {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    min-height: 50vh;
    font-family: Montserrat, sans-serif;
    margin-top: 90px;
  }

  .leftBox {
    background: rgb(210, 216, 240);
    border-radius: 70px;
    box-shadow: 6px 6px 0px rgb(56, 56, 56);
    padding: 48px 44px;
    width: 350px;
    height: 350px;
    margin-left: 100px;
  }

  .logo {
    position: absolute;
    top: 30px;
    left: 60px;
    font-size: 30px;
    font-weight: bold;
    color: rgb(2, 94, 153);
    font-family: 'Baloo 2', cursive;
  }

  .welcome {
    font-weight: 900;
    font-size: 40px;
    color: rgb(2, 94, 153);
    text-align: center;
    font-family: 'Baloo 2', cursive;
  }

  .loginSubtitle {
    color: rgb(2, 94, 153);
    margin-top: 6px;
    text-align: center;
  }

  .form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  .input {
    padding: 12px;
    border-radius: 12px;
    border: 2px solid rgb(0, 86, 210);
    font-size: 15px;
    text-align: center;
    margin: 10px 0;
    font-family: 'Nunito', sans-serif;
  }

  .remember {
    display: flex;
    align-items: center;
    margin: 10px 0;
    color: #4e4d4d;
  }

  .forgot {
    text-decoration: none;
    margin-left: auto;
    font-weight: 600;
  }

  .button {
    background: rgb(47, 47, 112);
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    margin: 25px 0px 0px 115px;
    font-size: 18px;
    width: 120px;
    height: 45px;
    text-align: center;
    font-family: 'Nunito', sans-serif;
  }

  .tablet {
    width: 350px;
    height: 450px;
    background: rgb(56, 56, 56);
    border-radius: 30px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    margin: -40px 100px 0px 0px;
    position: relative;
  }

  .screen {
    background: rgb(231, 225, 225);
    border-radius: 20px;
    flex: 1;
    width: 90%;
    padding: 8px;
    overflow-y: auto;
    margin-top: 10px;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  .homeButton {
    width: 25px;
    height: 25px;
    background: #b9b5b5;
    border-radius: 50px;
    margin-top: 5px;
  }

  .homeButton2 {
    width: 25px;
    height: 7px;
    background: #b9b5b5;
    border-radius: 50px;
  }

  .leaderboardTitle {
    font-family: 'Baloo 2', cursive;
    font-weight: 900;
    text-align: center;
    margin-bottom: 16px;
    background: #2c2c80;
    color: white;
    padding: 10px;
    border-radius: 15px;
    font-size: 22px;
  }

  .leaderItem {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    background: white;
    border-radius: 25px;
    padding: 10px;
  }

  .trophyBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60px;
    margin-left: 15px;
  }

  .trophy {
    font-size: 26px;
  }

  .topperScore {
    font-size: 15px;
    font-weight: bold;
    color: #1e40af;
  }

  .topperName {
    font-weight: 600;
    font-size: 18px;
    color: rgb(76, 70, 71);
    margin-left: 30px;
  }

  .topperClassSchool {
    font-size: 13px;
    color: #666;
    margin-left: 30px;
  }

  .needHelp {
    position: absolute;
    top: 30px;
    right: 60px;
    background: transparent;
    border: 2px solid #1e40af;
    color: #1e40af;
    font-size: 14px;
    font-weight: 400;
    padding: 6px 14px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.2s ease;
  }

  .needHelp:hover {
    background: #1e40af;
    color: white;
  }

  .leaderboardWrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 40px;
  }

  .characterLeft {
    position: absolute;
    left: -100px;
    bottom: 0;
    width: 150px;
    z-index: 2;
  }

  .characterRight {
    position: absolute;
    right: 0px;
    bottom: 0;
    width: 150px;
    z-index: 2;
  }

  @media (max-width: 1024px) {
    .container {
      flex-direction: column;
      align-items: center;
      padding: 20px;
      margin-top: 40px;
    }
    .leftBox, .tablet {
      margin: 20px auto;
      width: 80%;
      height: auto;
    }
    .characterLeft { left: -50px; width: 120px; }
    .characterRight { right: -50px; width: 120px; }
  }

  @media (max-width: 768px) {
    .container { margin-top: 20px; padding: 10px; }
    .logo { font-size: 22px; top: 15px; left: 20px; }
    .welcome { font-size: 28px; }
    .leftBox, .tablet { width: 90%; padding: 30px 20px; }
    .leaderboardTitle { font-size: 18px; padding: 8px; }
    .leaderItem { flex-direction: column; text-align: center; gap: 6px; }
    .trophyBox { margin-left: 0; }
    .characterLeft, .characterRight { display: none; }
    .needHelp { top: 15px; right: 15px; font-size: 12px; padding: 5px 10px; }
  }

  @media (max-width: 480px) {
    .welcome { font-size: 22px; }
    .loginSubtitle { font-size: 14px; }
    .input { font-size: 14px; padding: 10px; }
    .button { width: 100px; height: 40px; font-size: 14px; margin: 20px auto 0 auto; }
  }
`;

// Data for the Leaderboard
const toppers = [
  { name: "Bob", class: "Class 5", school: "ABC Public School", score: 3328 },
  { name: "Alex", class: "Class 7", school: "ABC Public School", score: 3032 },
  { name: "Zoe", class: "Class 2", school: "ABC Public School", score: 2598 },
];

// --- Sub-components defined in the same file ---

const Leaderboard = () => (
  <div className="leaderboardWrapper">
    <img src="C:\Users\USER\OneDrive\Desktop\EDUSETU\Frontend\edusetu\src\components\images\character1.png" alt="Character Left" className="characterLeft" />
    <div className="tablet">
      <div className="homeButton2"></div>
      <div className="screen">
        <div className="leaderboardTitle">MEET OUR TOPPERS</div>
        {toppers.map((topper, idx) => (
          <div key={idx} className="leaderItem">
            <div className="trophyBox">
              <span className="trophy">🏆</span>
              <span className="topperScore">{topper.score}</span>
            </div>
            <div>
              <div className="topperName">{topper.name} - {topper.class}</div>
              <div className="topperClassSchool">{topper.school}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="homeButton"></div>
    </div>
    <img src="C:\Users\USER\OneDrive\Desktop\EDUSETU\Frontend\edusetu\src\components\images\character2.png" alt="Character Right" className="characterRight" />
  </div>
);

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., authentication)
    // On successful login, navigate to the desired page
    navigate('/MyCoursesDashboard'); // Redirect to MyCoursesDashboard after login
  };
  const handleNeedHelp = (e) => {
    e.preventDefault();
    // Logic to handle "Need Help?" click
    navigate('/ChatDashboard'); // Example navigation
  };

  return (
    <form className="form">
      <input
        className="input"
        type="email"
        placeholder="Email or Username"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={pass}
        onChange={e => setPass(e.target.value)}
      />
      <div className="remember">
        <input
          type="checkbox"
          checked={remember}
          onChange={e => setRemember(e.target.checked)}
        /> Remember me
        <span className="forgot"><a href="#">Forget Password?</a></span>
      </div>
      <button onClick={handleLogin} className="button">LOGIN</button>
    </form>
  );
};

// --- Main component that combines everything ---

const CombinedLoginPage = () => (
  <>
    {/* The <style> tag injects all the CSS into the document head */}
    <style>{cssStyles}</style>
    
    <div className="container">
      <div className="logo">EduSetu</div>
      <button onClick={handleNeedHelp} className="needHelp">Need Help?</button>

      <div className="leftBox">
        <div className="welcome">WELCOME BACK!</div>
        <div className="loginSubtitle">
          Login to continue your learning journey <span role="img" aria-label="rocket">🚀</span>
        </div>
        <LoginForm />
      </div>

      <Leaderboard />
    </div>
  </>
);

export default CombinedLoginPage;