import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { ShieldAlert, MailCheck, RefreshCw, LogOut } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireAdmin = false }) => {
  const { currentUser, userProfile, logout, checkVerificationStatus } = useAuth();
  const location = useLocation();
  const { t } = useTranslation();
  const [checking, setChecking] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check email verification
  if (!currentUser.emailVerified) {
    const handleRefresh = async () => {
      setChecking(true);
      setStatusMessage(null);
      const isVerified = await checkVerificationStatus();
      setChecking(false);
      if (isVerified) {
        setStatusMessage("Email verified successfully! Loading page...");
      } else {
        setStatusMessage("Email not verified yet. Please check your inbox or spam folder.");
      }
    };

    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-neutral-100 p-8 text-center">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <MailCheck className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            Verify Your Email
          </h2>
          <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
            {t('dashboard.verifyEmailPrompt', 'Please verify your email address to unlock all platform features. We sent a verification link to:')}
            <span className="block font-semibold text-neutral-800 mt-1">{currentUser.email}</span>
          </p>

          {statusMessage && (
            <div className={`p-3 rounded-lg text-xs mb-6 ${statusMessage.includes('successfully') ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
              {statusMessage}
            </div>
          )}

          <div className="space-y-3">
            <button
              onClick={handleRefresh}
              disabled={checking}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${checking ? 'animate-spin' : ''}`} />
              {t('dashboard.verifyCheck', 'Check Verification Status')}
            </button>
            
            <button
              onClick={() => logout()}
              className="w-full py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-sm font-medium transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              {t('nav.logout', 'Logout')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Check admin role
  if (requireAdmin && userProfile?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-red-100 p-8 text-center">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <ShieldAlert className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">Access Denied</h2>
          <p className="text-neutral-600 text-sm mb-6">
            This section is reserved for administrator role only. If you believe this is an error, please contact support.
          </p>
          <Navigate to="/dashboard" replace />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
