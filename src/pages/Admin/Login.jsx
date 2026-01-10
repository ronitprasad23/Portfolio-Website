import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin/dashboard');
        } catch (error) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen bg-light-base dark:bg-dark-base flex items-center justify-center p-4">
            <div className="bg-light-card dark:bg-dark-card p-8 rounded-2xl shadow-xl border border-light-border dark:border-dark-border w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-light-primary dark:bg-dark-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        <FiLock size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-light-heading dark:text-dark-heading">Admin Login</h2>
                    <p className="text-light-text dark:text-dark-text text-sm mt-2">Enter your credentials to access the dashboard</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg mb-6 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-light-heading dark:text-dark-heading mb-1">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-light-base dark:bg-dark-base text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-light-heading dark:text-dark-heading mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-light-base dark:bg-dark-base text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-light-primary hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover text-white font-bold rounded-lg transition-colors"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
