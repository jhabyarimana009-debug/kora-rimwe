import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Card Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h1 className="text-4xl font-black text-neutral-900 tracking-tight">
                {t('contact.title', 'Contact Us')}
              </h1>
              <p className="text-neutral-600 mt-3 text-sm sm:text-base leading-relaxed">
                {t('contact.subtitle', 'Have a question or feedback? Reach out and we will respond as soon as possible.')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-neutral-150 flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-800 text-xs uppercase tracking-wider">Office Address</h4>
                  <p className="text-neutral-600 text-sm mt-1">Kigali Heights, Kigali, Rwanda</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-neutral-150 flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-800 text-xs uppercase tracking-wider">Email Support</h4>
                  <p className="text-neutral-600 text-sm mt-1">support@korarimwe.rw</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-neutral-150 flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-800 text-xs uppercase tracking-wider">Hotline Support</h4>
                  <p className="text-neutral-600 text-sm mt-1">+250 788 123 456</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-3xl border border-neutral-150 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-neutral-900">Message Received!</h3>
                  <p className="text-neutral-500 text-sm max-w-md mx-auto">
                    {t('contact.success', 'Your message was sent successfully! We will get back to you shortly.')}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                      {t('contact.name', 'Full Name')}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jean Paul"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-neutral-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl text-sm bg-neutral-50 outline-none transition"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 font-semibold">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                      {t('contact.email', 'Email Address')}
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. support@domain.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-neutral-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl text-sm bg-neutral-50 outline-none transition"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 font-semibold">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                      {t('contact.message', 'Your Message')}
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Write your suggestions or inquiries here..."
                      {...register('message', { required: 'Message body is required' })}
                      className="w-full px-4 py-3 border border-neutral-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl text-sm bg-neutral-50 outline-none transition resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 font-semibold">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-extrabold text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? t('contact.sending', 'Sending...') : t('contact.send', 'Send Message')}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
export default Contact;
