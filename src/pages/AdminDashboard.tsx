import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ShieldAlert, Users, BookOpen, Settings } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { userProfile } = useAuth();

  return (
    <div className="bg-neutral-50 min-h-screen py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner */}
        <div className="bg-neutral-900 rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-black tracking-tight flex items-center gap-2">
              <ShieldAlert className="w-8 h-8 text-purple-400" />
              Kora Rimwe Administrator Command Center
            </h1>
            <p className="text-neutral-400 text-sm">
              Admin Area: Manage users, create and review theory curriculum modules, and view system health.
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-neutral-150 flex items-center gap-4">
            <Users className="w-10 h-10 text-purple-600 shrink-0" />
            <div>
              <span className="text-neutral-400 font-bold uppercase tracking-wider text-[10px] block">Total Registered Users</span>
              <h3 className="text-2xl font-black text-neutral-900 mt-1">1,250</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-150 flex items-center gap-4">
            <BookOpen className="w-10 h-10 text-purple-600 shrink-0" />
            <div>
              <span className="text-neutral-400 font-bold uppercase tracking-wider text-[10px] block">Active Lessons</span>
              <h3 className="text-2xl font-black text-neutral-900 mt-1">5 Modules</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-150 flex items-center gap-4">
            <Settings className="w-10 h-10 text-purple-600 shrink-0" />
            <div>
              <span className="text-neutral-400 font-bold uppercase tracking-wider text-[10px] block">API Connection Status</span>
              <h3 className="text-2xl font-black text-emerald-600 mt-1">Healthy</h3>
            </div>
          </div>
        </div>

        {/* Main section placeholder */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-150 text-center py-20 space-y-4">
          <Settings className="w-16 h-16 text-purple-200 mx-auto animate-spin" />
          <h3 className="text-xl font-bold text-neutral-900">Curriculum & Question Managers coming in Step 2</h3>
          <p className="text-neutral-500 text-sm max-w-md mx-auto">
            The database management control panels, quiz custom-builders, and question creator tools will be integrated seamlessly during the next phase of development.
          </p>
        </div>

      </div>
    </div>
  );
};
export default AdminDashboard;
