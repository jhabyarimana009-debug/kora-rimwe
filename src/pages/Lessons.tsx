import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, GraduationCap, Clock, CheckCircle2, ChevronRight, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export const Lessons: React.FC = () => {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Modules' },
    { id: 'general', name: 'General Driving Rules' },
    { id: 'signs', name: 'Road Signs Mastery' },
    { id: 'intersections', name: 'Intersections & Priority' },
    { id: 'safety', name: 'Vehicle & Road Safety' },
  ];

  const dummyLessons = [
    {
      id: 'l1',
      title: 'Incamake y’Amategeko y’Umuhanda',
      category: 'general',
      duration: '15 mins',
      level: 'Beginner',
      summary: 'Gusobanukirwa n’inshingano n’uburenganzira bw’abakoresha umuhanda bose.',
      content: 'Iri somo riragufasha kumenya amategeko y’ibanze igihe utwaye ikinyabiziga mu Rwanda...',
      premium: false
    },
    {
      id: 'l2',
      title: 'Ibimenyetso By’Umuhanda Bihagaritswe (Vertical)',
      category: 'signs',
      duration: '20 mins',
      level: 'Beginner',
      summary: 'Kwiga no gusobanukirwa buri kimenyetso gitegetsa cyangwa kibuzanya.',
      content: 'Iri somo rirambuye rirakwereka amashusho n’ibisobanuro by’ibimenyetso byose by’umuhanda byanditse ku birango...',
      premium: false
    },
    {
      id: 'l3',
      title: 'Umuvuduko n’Ibyerekezo By’Umuhanda',
      category: 'general',
      duration: '12 mins',
      level: 'Intermediate',
      summary: 'Uko amategeko agena umuvuduko mu nzego n’imihanda itandukanye.',
      content: 'Kumenya ibipimo by’umuvuduko mukuru mu mugi, hanze y’umugi, n’ahandi hantu habi...',
      premium: false
    },
    {
      id: 'l4',
      title: 'Amategeko Y’Amahuriro (Intersections)',
      category: 'intersections',
      duration: '25 mins',
      level: 'Advanced',
      summary: 'Indatwa z’ibanze z’ukugenda n’abagufite uburenganzira mu mahuriro y’imihanda.',
      content: 'Kwiga ku mategeko y’iburyo n’ibimenyetso byerekana abagufite uburenganzira muryo rwa mbere...',
      premium: true
    },
    {
      id: 'l5',
      title: 'Umutekano n’Ibibazo By’Ibinyabiziga',
      category: 'safety',
      duration: '18 mins',
      level: 'Intermediate',
      summary: 'Inshingano z’umushoferi ku bijyanye n’umutekano w’abagenzi n’abandi bakoresha umuhanda.',
      content: 'Kumenya uko witwara igihe uhuye n’ikibazo cy’impanuka cyangwa imishini yahagarara...',
      premium: true
    }
  ];

  const filteredLessons = selectedCategory === 'all' 
    ? dummyLessons 
    : dummyLessons.filter(l => l.category === selectedCategory);

  return (
    <div className="bg-neutral-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-4 mb-12">
          <h1 className="text-4xl font-black text-neutral-900 tracking-tight">Theory Study Material</h1>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl">
            Study our curriculum crafted to fit the actual requirements of the Rwanda National Police theory exam syllabus. All topics are translated and fully responsive.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-neutral-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer transition ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-100'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200/60'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Lessons List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-6">
            {filteredLessons.map((lesson) => (
              <div 
                key={lesson.id} 
                className="bg-white p-6 rounded-2xl border border-neutral-150 shadow-sm hover:shadow-md transition flex flex-col md:flex-row justify-between gap-6 text-left relative overflow-hidden"
              >
                {lesson.premium && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Login Required
                  </div>
                )}

                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-lg uppercase tracking-wider">
                      {lesson.category}
                    </span>
                    <span className="flex items-center gap-1 text-neutral-400 text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5" /> {lesson.duration}
                    </span>
                    <span className="text-neutral-400 text-xs font-semibold">• {lesson.level}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-neutral-900">{lesson.title}</h3>
                    <p className="text-neutral-500 text-xs sm:text-sm mt-2 leading-relaxed">{lesson.summary}</p>
                  </div>

                  {(!lesson.premium || currentUser) ? (
                    <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 mt-4">
                      <h4 className="font-bold text-neutral-800 text-xs uppercase tracking-wider mb-2">Lesson Preview:</h4>
                      <p className="text-neutral-600 text-xs leading-relaxed">{lesson.content}</p>
                    </div>
                  ) : (
                    <div className="p-4 bg-neutral-50 border border-neutral-100 rounded-xl mt-4 flex items-center gap-3">
                      <Lock className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="text-neutral-600 text-xs font-semibold">
                        Please <Link to="/login" className="text-emerald-600 underline">log in</Link> or <Link to="/register" className="text-emerald-600 underline">register</Link> to unlock this advanced module.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Side study guide tips */}
          <div className="space-y-6">
            <div className="p-6 bg-emerald-600 text-white rounded-2xl shadow-xl space-y-4 text-left">
              <GraduationCap className="w-10 h-10 text-emerald-200" />
              <h3 className="text-lg font-black tracking-tight">Theory Preparation Tips</h3>
              <ul className="space-y-3 text-xs text-emerald-100 leading-relaxed">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0 mt-0.5" />
                  <span>Always read the question twice to catch negation cues (e.g. "birabujijwe").</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0 mt-0.5" />
                  <span>Perfect your mastery of priority signs, especially around roundabouts.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0 mt-0.5" />
                  <span>Take mock examinations regularly until you consistently hit a score of 90% or above.</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link to="/login" className="w-full block py-3 bg-white text-emerald-700 hover:bg-neutral-50 text-center text-xs font-extrabold rounded-xl transition shadow">
                  Unlock Practice Simulator
                </Link>
              </div>
            </div>

            {/* Google AdSense placeholder */}
            <div className="p-4 bg-neutral-100 border border-neutral-200 rounded-2xl text-center text-[10px] text-neutral-400">
              Sponsor Advertisement - Join Kora Rimwe to help make Rwandan roads safer for everyone!
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Lessons;
