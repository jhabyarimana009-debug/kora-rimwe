import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  GraduationCap, BookOpen, Compass, Award, CheckCircle2, 
  HelpCircle, ChevronDown, Star, ArrowRight, ShieldCheck 
} from 'lucide-react';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const benefits = [
    {
      title: t('learningBenefits.benefit1Title', 'Absolutely Free'),
      desc: t('learningBenefits.benefit1Desc', 'No subscription fees or paywalls. Get complete access to all lessons and tests.'),
      icon: Award,
    },
    {
      title: t('learningBenefits.benefit2Title', 'Fully Responsive'),
      desc: t('learningBenefits.benefit2Desc', 'Study on any device, whether you are on your smartphone, tablet, or laptop.'),
      icon: CheckCircle2,
    },
    {
      title: t('learningBenefits.benefit3Title', 'Authentic Material'),
      desc: t('learningBenefits.benefit3Desc', 'Our questions and explanations perfectly emulate real Rwanda National Police theory exams.'),
      icon: ShieldCheck,
    },
  ];

  const featuredSigns = [
    { code: 'R1', title: 'STOP', desc: 'Simbura iburyo', image: '🛑', category: 'Regulatory' },
    { code: 'R2', title: 'No Entry', desc: 'Kwinjira birabujijwe', image: '⛔', category: 'Regulatory' },
    { code: 'W1', title: 'Danger', desc: 'Intego rusange y\'akaga', image: '⚠️', category: 'Warning' },
    { code: 'I1', title: 'Hospital', desc: 'Ibitaro hafi', image: '🏥', category: 'Information' },
  ];

  const faqs = [
    { q: t('faq.q1', 'Is Kora Rimwe really free?'), a: t('faq.a1', 'Yes, Kora Rimwe is 100% free with no hidden charges, designed to assist everyone in obtaining their driving license.') },
    { q: t('faq.q2', 'Can I study on my mobile phone?'), a: t('faq.a2', 'Absolutely! The entire application is fully responsive and works beautifully on any mobile device.') },
    { q: t('faq.q3', 'In which languages is the platform available?'), a: t('faq.a3', 'The platform is fully translated into Kinyarwanda, English, and French. You can switch languages instantly.') },
  ];

  const lessonsPlaceholder = [
    { id: '1', title: 'Ibimenyetso by’Umuhanda n’Ibyerekezo', desc: 'Muri iri somo, turiga ku bimenyetso byose by\'umuhanda.' },
    { id: '2', title: 'Amategeko y’Ibyerekezo n’Umuvuduko', desc: 'Uko ukoresha umuvuduko n’aho ufite uburenganzira bwo guhagarara.' },
    { id: '3', title: 'Inshingano z’Umushoferi n’Umutekano', desc: 'Isesengura ry\'inshingano rusange z\'umutwaro mu muhanda.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-emerald-50 rounded-full -z-0 opacity-50"></div>
            
            <div className="z-10 max-w-xl text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {t('hero.tag', 'Itegure uyu munsi')}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Inzira yoroshye yo kubona <br/><span className="text-emerald-600">Icyangombwa cy'Ugutwara.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {t('hero.subtitle', "Mwigire kuri KORA RIMWE, urubuga rwizewe rwigisha amategeko y'umuhanda mu Kinyarwanda, Icyongereza, n'Igifaransa.")}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/lessons"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 flex items-center gap-2 transition"
                >
                  {t('hero.cta', 'Start Learning')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/login"
                  className="px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition"
                >
                  {t('hero.secondaryCta', 'Practice Exam')}
                </Link>
              </div>
            </div>
            
            {/* Visual Panel Hero */}
            <div className="w-full lg:w-96 flex flex-col gap-4 relative z-10">
              <div className="bg-slate-900 rounded-2xl p-5 text-white shadow-xl rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Ikizamini No. 01</span>
                  <span className="text-xs font-mono text-emerald-400">18:45</span>
                </div>
                <p className="text-xs sm:text-sm font-medium mb-3 text-left">Iyo ugeze ku nkingi y'itara rimurika rishushanyijeho umukuburo, ugomba:</p>
                <div className="space-y-2 text-left">
                  <div className="bg-emerald-500/20 border border-emerald-500/50 p-2.5 rounded-xl text-xs">A) Guhagarara</div>
                  <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs">B) Kugabanya umuvuduko</div>
                  <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs text-slate-400 italic">...izindi hitamo</div>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 -rotate-2 translate-x-4 shadow-md text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-emerald-200 shrink-0">
                    <span className="text-emerald-600 text-sm font-bold">92%</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Intego y'Uyu Munsi</p>
                    <p className="text-[10px] text-slate-500">Wasoje amasomo 4/5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google AdSense top placeholder */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <div className="py-4 bg-slate-100 border border-slate-200 rounded-2xl text-xs text-slate-400 select-none">
          Sponsored Space - High quality educational materials supporting free learning
        </div>
      </div>

      {/* Core Features */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
            {t('features.header', 'What We Offer')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            {t('features.subheader', 'Everything you need to easily pass your driving theory test on your first try.')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Feature 1 */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow transition text-left space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{t('features.lessonsTitle', 'Comprehensive Lessons')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t('features.lessonsDesc', 'Detailed and interactive lessons structured exactly like the official curriculum in Rwanda.')}</p>
              <Link to="/lessons" className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700">
                Start Lessons <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow transition text-left space-y-4">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{t('features.roadSignsTitle', 'Road Signs Catalog')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t('features.roadSignsDesc', 'A complete glossary of road and traffic signs with high-contrast graphic guides.')}</p>
              <Link to="/road-signs" className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700">
                Browse Road Signs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow transition text-left space-y-4">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{t('features.practiceTitle', 'Mock Exams')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t('features.practiceDesc', 'Interactive mock tests with dynamic score trackers to replicate the real exam environment.')}</p>
              <Link to="/login" className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700">
                Take Mock Exam <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Benefits Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black tracking-tight">{t('learningBenefits.title', 'Why Learn with KORA RIMWE?')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="p-8 bg-slate-800 rounded-2xl border border-slate-700 space-y-4 text-left">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{b.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Lessons Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="text-left">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Theory Driving Lessons</h2>
              <p className="text-slate-500 mt-2 text-sm sm:text-base">Get a sneak peek at our syllabus</p>
            </div>
            <Link to="/lessons" className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-emerald-600 hover:text-emerald-700">
              View All Lessons <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lessonsPlaceholder.map((l) => (
              <div key={l.id} className="p-6 bg-white rounded-2xl border border-slate-250/60 shadow-sm hover:border-emerald-200 hover:shadow transition flex flex-col justify-between h-56 text-left">
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Module 0{l.id}</span>
                  <h3 className="font-bold text-lg text-slate-900 mt-2 line-clamp-1">{l.title}</h3>
                  <p className="text-slate-500 text-xs mt-3 leading-relaxed">{l.desc}</p>
                </div>
                <Link to="/lessons" className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 mt-4">
                  Open Lesson <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Road Signs Preview Placeholder */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Road Signs Library</h2>
            <p className="text-slate-500 mt-2 text-sm">Quick flashcards for road signs and regulations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredSigns.map((fs) => (
              <div key={fs.code} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow transition text-center flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block tracking-wider mb-2">{fs.category}</span>
                  <div className="text-4xl my-4">{fs.image}</div>
                  <h4 className="font-bold text-slate-900 text-sm">{fs.title}</h4>
                </div>
                <p className="text-slate-500 text-xs mt-2 italic font-mono">{fs.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/road-signs"
              className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-slate-50 transition shadow-sm"
            >
              Browse Full Signs Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Learner Testimonials</h2>
          <p className="text-slate-500 mt-2 text-sm">Join thousands of candidates who passed on their very first trial</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-200/50 text-left space-y-4">
              <div className="flex gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
              </div>
              <p className="text-slate-600 text-xs leading-relaxed italic">
                "Uru rubuga rwanyfashije kwiga amategeko yose y'umuhanda mu cyumweru kimwe gusa, ntsinda ikizamini cy'agateganyo ku manota 19/20! Kora Rimwe ni akataraboneka."
              </p>
              <div className="font-bold text-slate-800 text-xs">- Jean Paul N., Kigali</div>
            </div>

            <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-200/50 text-left space-y-4">
              <div className="flex gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
              </div>
              <p className="text-slate-600 text-xs leading-relaxed italic">
                "Simple, responsive, and completely translated! This is exactly what Rwanda needed. The mock exams felt just like the real police test."
              </p>
              <div className="font-bold text-slate-800 text-xs">- Aline U., Butare</div>
            </div>

            <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-200/50 text-left space-y-4">
              <div className="flex gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
              </div>
              <p className="text-slate-600 text-xs leading-relaxed italic">
                "Le catalogue des panneaux est très clair et pratique. Pouvoir s'entraîner gratuitement sur mobile est un avantage exceptionnel !"
              </p>
              <div className="font-bold text-slate-800 text-xs">- Godefroy M., Gisenyi</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-12">{t('faq.title', 'Frequently Asked Questions')}</h2>
          <div className="space-y-4 text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center px-6 py-5 font-bold text-slate-800 text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google AdSense bottom placeholder */}
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <div className="py-4 bg-slate-100 border border-slate-200 rounded-2xl text-xs text-slate-400 select-none">
          Sponsored Space - High quality educational materials supporting free learning
        </div>
      </div>
    </div>
  );
};
export default Home;
