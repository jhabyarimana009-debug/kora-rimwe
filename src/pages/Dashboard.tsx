import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { BookOpen, Compass, Award, Calendar, ChevronRight, PlayCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const { currentUser, userProfile } = useAuth();
  const { t } = useTranslation();

  const mockExamsHistory = [
    { id: '1', date: '2026-06-25', score: 18, total: 20, percentage: 90, passed: true },
    { id: '2', date: '2026-06-24', score: 14, total: 20, percentage: 70, passed: false },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Welcome banner */}
        <div className="bg-white rounded-3xl p-8 border border-neutral-150 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-black text-neutral-900 tracking-tight">
              {t('dashboard.welcome', 'Welcome back, ')}
              <span className="text-emerald-600">{userProfile?.displayName || currentUser?.displayName || 'Learner'}</span>!
            </h1>
            <p className="text-neutral-500 text-sm">
              Track your driving theory learning progress and perfect your scores for the exam.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              to="/lessons"
              className="px-5 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-sm font-bold rounded-xl transition"
            >
              Resume Lessons
            </Link>
            <button
              onClick={() => alert("Mock Exam Engine will be fully integrated in Step 2!")}
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-extrabold rounded-xl shadow-lg shadow-emerald-50 transition flex items-center gap-1.5 cursor-pointer"
            >
              <PlayCircle className="w-4.5 h-4.5" />
              {t('dashboard.startPractice', 'Start Mock Test')}
            </button>
          </div>
        </div>

        {/* Quick Statistics Stats Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-neutral-150 flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-neutral-400 font-bold uppercase tracking-wider text-[10px] block">
                {t('dashboard.lessonsInProgress', 'Lessons Studied')}
              </span>
              <h3 className="text-2xl font-black text-neutral-900 mt-1">3 / 5</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-150 flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-neutral-400 font-bold uppercase tracking-wider text-[10px] block">
                {t('dashboard.averageScore', 'Average Mock Score')}
              </span>
              <h3 className="text-2xl font-black text-neutral-900 mt-1">80%</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-150 flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-neutral-400 font-bold uppercase tracking-wider text-[10px] block">
                {t('dashboard.examsTaken', 'Mock Exams Completed')}
              </span>
              <h3 className="text-2xl font-black text-neutral-900 mt-1">2</h3>
            </div>
          </div>
        </div>

        {/* Two columns content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main List column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-neutral-150 p-8 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <h3 className="text-lg font-black text-neutral-900">
                  {t('dashboard.recentExams', 'Recent Mock Exams')}
                </h3>
                <span className="text-neutral-400 text-xs font-semibold">Past Results</span>
              </div>

              <div className="space-y-4">
                {mockExamsHistory.map((exam) => (
                  <div key={exam.id} className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100/50 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                        exam.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {exam.score}/{exam.total}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-neutral-900 text-sm">Practice Simulator Trial</h4>
                        <div className="flex items-center gap-1.5 text-neutral-400 text-xs mt-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exam.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-lg uppercase tracking-wider ${
                        exam.passed ? 'bg-emerald-500/10 text-emerald-700' : 'bg-rose-500/10 text-rose-700'
                      }`}>
                        {exam.passed ? 'PASSED' : 'FAILED'}
                      </span>
                      <span className="block text-xs font-bold text-neutral-500 mt-2">{exam.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side study progress / shortcuts column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-neutral-150 text-left space-y-4">
              <h3 className="font-extrabold text-neutral-900 text-base">Quick Shortcuts</h3>
              <div className="space-y-2">
                <Link
                  to="/lessons"
                  className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 border border-neutral-100 transition group"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    <span className="text-neutral-700 text-sm font-semibold">All Study Lessons</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition" />
                </Link>

                <Link
                  to="/road-signs"
                  className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 border border-neutral-100 transition group"
                >
                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-emerald-600" />
                    <span className="text-neutral-700 text-sm font-semibold">Road Signs Glossary</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </div>

            {/* Google AdSense sidebar ad placeholder */}
            <div className="p-4 bg-neutral-100 border border-neutral-200 rounded-2xl text-center text-[10px] text-neutral-400">
              Sponsor Space - Study road signs and mock tests for free and make Rwandan roads safer!
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
export default Dashboard;
