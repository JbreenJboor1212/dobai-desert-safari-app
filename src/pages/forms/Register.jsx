import { useState } from "react";
import { Link } from "react-router-dom";
import "./Forms.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      console.log({
        userName,
        email,
        password,
        confirmPassword,
      });
      return toast.success(" valid!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      return toast.error("not valid!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="form-wrapper">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <form className="form" onSubmit={formSubmitHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="one"
        >
          <path
            fill="#3498db"
            fillOpacity="0.99"
            d="M0,320L8.6,288C17.1,256,34,192,51,165.3C68.6,139,86,149,103,128C120,107,137,53,154,48C171.4,43,189,85,206,106.7C222.9,128,240,128,257,128C274.3,128,291,128,309,160C325.7,192,343,256,360,250.7C377.1,245,394,171,411,133.3C428.6,96,446,96,463,85.3C480,75,497,53,514,64C531.4,75,549,117,566,122.7C582.9,128,600,96,617,101.3C634.3,107,651,149,669,186.7C685.7,224,703,256,720,250.7C737.1,245,754,203,771,165.3C788.6,128,806,96,823,80C840,64,857,64,874,106.7C891.4,149,909,235,926,272C942.9,309,960,299,977,261.3C994.3,224,1011,160,1029,133.3C1045.7,107,1063,117,1080,122.7C1097.1,128,1114,128,1131,138.7C1148.6,149,1166,171,1183,176C1200,181,1217,171,1234,176C1251.4,181,1269,203,1286,192C1302.9,181,1320,139,1337,117.3C1354.3,96,1371,96,1389,90.7C1405.7,85,1423,75,1431,69.3L1440,64L1440,0L1431.4,0C1422.9,0,1406,0,1389,0C1371.4,0,1354,0,1337,0C1320,0,1303,0,1286,0C1268.6,0,1251,0,1234,0C1217.1,0,1200,0,1183,0C1165.7,0,1149,0,1131,0C1114.3,0,1097,0,1080,0C1062.9,0,1046,0,1029,0C1011.4,0,994,0,977,0C960,0,943,0,926,0C908.6,0,891,0,874,0C857.1,0,840,0,823,0C805.7,0,789,0,771,0C754.3,0,737,0,720,0C702.9,0,686,0,669,0C651.4,0,634,0,617,0C600,0,583,0,566,0C548.6,0,531,0,514,0C497.1,0,480,0,463,0C445.7,0,429,0,411,0C394.3,0,377,0,360,0C342.9,0,326,0,309,0C291.4,0,274,0,257,0C240,0,223,0,206,0C188.6,0,171,0,154,0C137.1,0,120,0,103,0C85.7,0,69,0,51,0C34.3,0,17,0,9,0L0,0Z"
          ></path>
        </svg>
        <input
          value={userName}
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Create Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          value={confirmPassword}
          placeholder="Confirm Password!"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="btn">Register</button>
        <p className="paragraph">
          not a member ?{" "}
          <Link className="link" to={"/login"}>
            Login
          </Link>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="two"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#3498db"
            fillOpacity="0.99"
            d="M0,128L10,117.3C20,107,40,85,60,112C80,139,100,213,120,245.3C140,277,160,267,180,261.3C200,256,220,256,240,213.3C260,171,280,85,300,85.3C320,85,340,171,360,208C380,245,400,235,420,224C440,213,460,203,480,181.3C500,160,520,128,540,122.7C560,117,580,139,600,128C620,117,640,75,660,64C680,53,700,75,720,101.3C740,128,760,160,780,154.7C800,149,820,107,840,80C860,53,880,43,900,69.3C920,96,940,160,960,176C980,192,1000,160,1020,170.7C1040,181,1060,235,1080,261.3C1100,288,1120,288,1140,256C1160,224,1180,160,1200,133.3C1220,107,1240,117,1260,144C1280,171,1300,213,1320,234.7C1340,256,1360,256,1380,256C1400,256,1420,256,1430,256L1440,256L1440,320L1430,320C1420,320,1400,320,1380,320C1360,320,1340,320,1320,320C1300,320,1280,320,1260,320C1240,320,1220,320,1200,320C1180,320,1160,320,1140,320C1120,320,1100,320,1080,320C1060,320,1040,320,1020,320C1000,320,980,320,960,320C940,320,920,320,900,320C880,320,860,320,840,320C820,320,800,320,780,320C760,320,740,320,720,320C700,320,680,320,660,320C640,320,620,320,600,320C580,320,560,320,540,320C520,320,500,320,480,320C460,320,440,320,420,320C400,320,380,320,360,320C340,320,320,320,300,320C280,320,260,320,240,320C220,320,200,320,180,320C160,320,140,320,120,320C100,320,80,320,60,320C40,320,20,320,10,320L0,320Z"
          ></path>
        </svg>
      </form>
    </div>
  );
};

export default Register;
