import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext)

const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
        const email = form.name.value;
        const password = form.password.value;
        console.log( email, password);

        
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error));
}

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center">Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" name='password'>Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-error" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-3 text-center'>New to Car Doctors <Link to='/signup' className='text-orange-500 font-bold'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;