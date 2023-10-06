import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should at least one upper case character');
            return;
        } else if (!accepted) {
            setRegisterError('Please accept our terms and conditions');
            return;
        }

        //reset error and success
        setRegisterError('');
        setSuccess('');

        //create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user);
                setSuccess('User Created Successfully');

                //update profile
                updateProfile(res.user, {
                    displayName: name
                })
                .then(() => console.log('Profile Updated'))
                .catch()

                //send verification email
                sendEmailVerification(res.user)
                .then(() => {
                    alert('Please check your email and verify your account');
                })
            })
            .catch(err => {
                console.log(err);
                setRegisterError(err.message);
            })
    }

    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-full border py-2 px-4" type="text" name="name" id="" placeholder="Your Name" required />
                    <br />
                    <input className="mb-4 w-full border py-2 px-4" type="email" name="email" id="" placeholder="Email" required />
                    <br />
                    <div className="relative mb-4">
                        <input className="w-full border py-2 px-4" type={showPassword ? "text" : "password"} name="password" id="" placeholder="Password" required />
                        <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <br />
                    <div className="mb-2 text-left">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept Our Terms and Conditions</label>
                    </div>
                    <br />
                    <input className="btn btn-secondary mb-4 w-full" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
                <p>Already have an account? <Link to="/login">Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;