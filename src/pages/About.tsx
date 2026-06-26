import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Heart, Users, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      title: 'Road Safety First',
      desc: 'Our primary objective is to cultivate highly competent, law-abiding drivers to systematically reduce traffic accidents.',
      icon: ShieldCheck,
    },
    {
      title: 'Free & Equal Access',
      desc: 'We strongly believe that access to critical driver education must be accessible to every Rwandan, free of barriers.',
      icon: Heart,
    },
    {
      title: 'Continuous Innovation',
      desc: 'Deploying modern interactive tech, translations, and simulators to match evolving national standards.',
      icon: Compass,
    }
  ];

  const teamMembers = [
    { name: 'Jeanette I.', role: 'Lead Director & Architect', avatar: '👩‍💻' },
    { name: 'Kagorora P.', role: 'Curriculum & Rules Expert', avatar: '👨‍🏫' },
    { name: 'Umutesi F.', role: 'UX/UI & Localization Specialist', avatar: '👩‍🎨' }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen py-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-black text-neutral-900 tracking-tight">
            {t('about.title', 'About KORA RIMWE')}
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed font-medium">
            {t('about.p1', 'KORA RIMWE is an educational initiative to provide accessible, premium driving license training and preparation materials to citizens and residents of Rwanda.')}
          </p>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            {t('about.p2', 'Our mission is to improve road safety across the country through thorough education, accessible software design, and comprehensive test preparation.')}
          </p>
        </div>

        {/* Pillars / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-neutral-150 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{v.title}</h3>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Team */}
        <div className="mt-24">
          <div className="max-w-xl mb-12">
            <h2 className="text-2xl font-black text-neutral-900 tracking-tight flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              {t('about.team', 'Our Team')}
            </h2>
            <p className="text-neutral-500 mt-2 text-xs sm:text-sm">The passionate minds dedicated to delivering free quality driver education platforms.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-150 text-center space-y-4 hover:shadow transition">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-3xl mx-auto shadow-inner">
                  {member.avatar}
                </div>
                <div>
                  <h4 className="font-extrabold text-neutral-900 text-base">{member.name}</h4>
                  <p className="text-emerald-600 text-xs font-semibold mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
export default About;
