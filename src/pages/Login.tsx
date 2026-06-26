import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { Mail, Lock, AlertCircle, ArrowRight, Chrome } from 'lucide-react';

export const Login: React.FC = () => {
  const { login, loginWithGoogle } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const redirectPath = location.state?.from?.pathname || '/dashboard';

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all credentials fields.');
      return;
    }
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate(redirectPath, { replace: true });
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Invalid email address or password combination.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate(redirectPath, { replace: true });
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Google Sign-In failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-neutral-100 p-8 space-y-8 text-left">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-black text-xl mx-auto shadow-md">
            KR
          </div>
          <h2 className="text-2xl font-black text-neutral-900">
            {t('login.title', 'Log in to Kora Rimwe')}
          </h2>
          <p className="text-neutral-500 text-xs">
            Unlock complete dashboard, mock exam simulators, and analytics.
          </p>
        </div>

        {error && (
          <div className="p-4 bg-rose-50 text-rose-700 text-xs font-semibold rounded-xl border border-rose-100 flex items-start gap-3">
            <AlertCircle className="w-4.5 h-4.5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleEmailLogin} className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600">
              {t('login.email', 'Email Address')}
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 w-5 h-5 text-neutral-400" />
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 border border-neutral-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl text-sm bg-neutral-50 outline-none transition"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600">
              {t('login.password', 'Password')}
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 w-5 h-5 text-neutral-400" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 border border-neutral-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl text-sm bg-neutral-50 outline-none transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-extrabold text-sm rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-50"
          >
            {t('login.button', 'Log In')}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 border-t border-neutral-100"></div>
          <span className="relative px-3 bg-white text-neutral-400 text-[10px] font-bold uppercase tracking-wider">
            Or continue with
          </span>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-3.5 border border-neutral-200 hover:bg-neutral-50 rounded-xl text-sm font-bold text-neutral-700 transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <Chrome className="w-4.5 h-4.5 text-emerald-600" />
          {t('login.googleButton', 'Sign In with Google')}
        </button>

        <p className="text-center text-xs text-neutral-500">
          {t('login.registerPrompt', "Don't have an account?")}{' '}
          <Link to="/register" className="text-emerald-600 hover:underline font-bold">
            {t('login.registerLink', 'Register here')}
          </Link>
        </p>

      </div>
    </div>
  );
};
export default Login;
