import React from 'react';
import './SocialLogin.css'
// import google from '../Home/images/google.png'
import github from '../Home/images/github.png'
import facebook from '../Home/images/facebook.png'
import { useSignInWithGithub,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    if(loading){
        return <Loading/>
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div className="line"></div>
                <p>or</p>
                <div className="line"></div>
            </div>
            <div className="buttons">
                <button className="btn btn-google w-50 rounded-pill mx-auto mb-3" onClick={() => signInWithGoogle()} ><img src={github}  className="icon " alt="" /> Google Sign in</button>
                <button className="btn btn-github w-50 rounded-pill mx-auto mb-3" onClick={() => signInWithGithub()}><img src={github} className="icon git" alt="" /> GIthub Sign in</button>
                <button className="btn btn-facebook w-50 rounded-pill mx-auto mb-3"><img src={facebook} className="icon faceB " alt="" /> Facebook Sign in</button>
            </div>
        </div>
    );
};

export default SocialLogin;