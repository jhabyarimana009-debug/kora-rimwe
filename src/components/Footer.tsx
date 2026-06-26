import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                KORA <span className="text-emerald-500">RIMWE</span>
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              {t('hero.subtitle', "The premium, 100% free Rwanda Driving License Theory learning and practice platform.")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/lessons" className="hover:text-emerald-400 transition-colors">{t('nav.lessons', 'Lessons')}</a>
              </li>
              <li>
                <a href="/road-signs" className="hover:text-emerald-400 transition-colors">{t('nav.roadSigns', 'Road Signs')}</a>
              </li>
              <li>
                <a href="/about" className="hover:text-emerald-400 transition-colors">{t('nav.about', 'About Us')}</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-emerald-400 transition-colors">{t('nav.contact', 'Contact')}</a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>support@korarimwe.rw</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>+250 788 123 456</span>
              </li>
            </ul>
          </div>

          {/* AdSense Placement / Educational Note */}
          <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1.5">Free Learning</h4>
            <p className="text-[11px] leading-relaxed text-slate-400">
              We keep this platform 100% free through optional, non-intrusive sponsorships and educational support.
            </p>
            {/* Google AdSense placeholder */}
            <div className="mt-3 py-1 text-center bg-slate-900 border border-slate-800 rounded text-[9px] text-slate-500 select-none">
              Advertisement Placeholder
            </div>
          </div>

        </div>

        <hr className="border-slate-800 my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Kora Rimwe. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> in Kigali, Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
