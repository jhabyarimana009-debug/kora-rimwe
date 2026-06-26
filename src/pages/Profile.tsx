import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { User, Mail, ShieldAlert, Calendar, CheckCircle2 } from 'lucide-react';

export const Profile: React.FC = () => {
  const { currentUser, userProfile, checkVerificationStatus } = useAuth();
  const { t } = useTranslation();
  const [displayName, setDisplayName] = useState(userProfile?.displayName || '');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    setLoading(true);
    setMessage(null);
    try {
      const userRef = doc(db, 'users', currentUser.uid);
      await setDoc(userRef, { displayName }, { merge: true });
      setMessage(t('profile.updateSuccess', 'Profile updated successfully!'));
    } catch (err: any) {
      console.error(err);
      setMessage(err.message || 'Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-12 text-left">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <h1 className="text-3xl font-black text-neutral-900 tracking-tight">
          {t('profile.title', 'My Profile')}
        </h1>

        {message && (
          <div className="p-4 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-xl border border-emerald-100 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{message}</span>
          </div>
        )}

        {/* User Card */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-150 space-y-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-2xl font-black">
              {(userProfile?.displayName || currentUser?.displayName || 'L')[0].toUpperCase()}
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900">
                {userProfile?.displayName || currentUser?.displayName || 'Learner'}
              </h3>
              <p className="text-neutral-500 text-xs mt-1">{currentUser?.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-neutral-100">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-neutral-400 shrink-0" />
              <div>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Email Verification</span>
                <span className={`text-xs font-bold ${currentUser?.emailVerified ? 'text-emerald-600' : 'text-rose-500'}`}>
                  {currentUser?.emailVerified ? t('profile.verified', 'Verified') : t('profile.notVerified', 'Not Verified')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-neutral-400 shrink-0" />
              <div>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">{t('profile.createdAt', 'Joined')}</span>
                <span className="text-xs font-semibold text-neutral-700">
                  {userProfile?.createdAt ? new Date(userProfile.createdAt).toLocaleDateString() : 'N/A'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile Form */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-150 shadow-sm">
          <h3 className="text-lg font-bold text-neutral-900 mb-6">Update Credentials</h3>
          
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600">
                {t('profile.name', 'Full Name')}
              </label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 border border-neutral-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl text-sm bg-neutral-50 outline-none transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow transition cursor-pointer"
            >
              {loading ? 'Saving...' : 'Save Settings'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
export default Profile;
