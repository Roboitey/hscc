import { useContext, useRef } from "react";
import './login.css';
import UseAuth from "../Hooks/UseAuth";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const{user, setUser} = useContext(UserContext);
    const navigate = useNavigate(); 
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        if (username && password) {
            const [isAuthorized, user] = await  UseAuth(password, username);
            if(isAuthorized){
                setUser && setUser(user);
                window.localStorage.setItem("user", JSON.stringify(user));
                navigate("/home");
            }
           alert(`Username: ${username} Password: ${password}`);
        } else {
            alert(`Please insert value`);
        }
    };

    return  <> {user && user.username}
        <div className="registration-container">
            <center><h1>Login to inBDPA</h1></center>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="inputUsername3">Username:</label>
                    <input type="text" className="form-control" id="inputUsername3" ref={usernameRef} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword3">Password:</label>
                    <input type="password" className="form-control" id="inputPassword3" ref={passwordRef} />
                </div>
                    <legend className="col-form-label">Click To Verify</legend>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label" htmlFor="gridCheck1">
                            Verification
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
     </>
}
