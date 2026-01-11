
import React, { useState } from 'react';
import { Mail, Phone, Send, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { COMPANY_EMAIL } from '../constants';
import { ContactFormData } from '../types';

const WEBHOOK_URL = "https://aiaa1.datasciencemasterminds.com/webhook/3538efdd-1e29-470d-87e0-dffa952b4ea0";
const COMPANY_MOBILE = "+971-569598477";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    mobile: '',
    inquiry: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: window.location.hostname
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', mobile: '', inquiry: '' });
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please check your connection.');
    }
  };

  return (
    <div className="h-full w-full bg-white flex items-center justify-center p-6 md:p-12 pt-24 md:pt-0 overflow-y-auto md:overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tea-50 text-tea-700 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 md:mb-6">
            <MessageSquare size={12} /> Contact Expert
          </div>
          <h2 className="text-3xl md:text-7xl font-serif font-bold text-stone-900 mb-4 md:mb-8 leading-tight">
            Let's Start <br className="hidden md:block"/><span className="text-tea-600">Conversation.</span>
          </h2>
          <p className="text-sm md:text-lg text-stone-500 mb-6 md:mb-12 leading-relaxed font-light">
            Direct from origin to your doorstep. Connect with our trade specialists for wholesale inquiries and custom blends.
          </p>
          
          <div className="flex flex-col md:flex-row lg:flex-col gap-6 md:gap-10">
            <div className="flex gap-4 group items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-tea-600 group-hover:text-white transition-all duration-300">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-[9px] font-bold text-stone-400 tracking-widest uppercase mb-0.5">Primary Email</p>
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-sm md:text-lg font-medium text-stone-900 hover:text-tea-600 transition-colors truncate max-w-[200px] md:max-w-none">{COMPANY_EMAIL}</a>
              </div>
            </div>
            <div className="flex gap-4 group items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-tea-600 group-hover:text-white transition-all duration-300">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-[9px] font-bold text-stone-400 tracking-widest uppercase mb-0.5">Mobile & WhatsApp</p>
                <a href={`tel:${COMPANY_MOBILE.replace(/[^0-9+]/g, '')}`} className="text-sm md:text-lg font-medium text-stone-900 hover:text-tea-600 transition-colors">{COMPANY_MOBILE}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-50 rounded-3xl md:rounded-[40px] p-6 md:p-12 shadow-xl border border-stone-100 mb-12 lg:mb-0 relative overflow-hidden min-h-[450px] flex flex-col justify-center">
          {status === 'success' ? (
            <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-tea-100 flex items-center justify-center text-tea-600">
                  <CheckCircle2 size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900">Message Received</h3>
              <p className="text-stone-500 max-w-xs mx-auto text-sm md:text-base leading-relaxed">
                Thank you for reaching out. Your inquiry has been sent successfully. Our team will get back to you shortly.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-tea-700 font-bold text-[10px] tracking-widest uppercase hover:underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={`space-y-4 md:space-y-6 transition-all duration-300 ${status === 'submitting' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-stone-500 tracking-widest uppercase ml-1">Your Name</label>
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-tea-500 text-sm shadow-sm"
                    placeholder="Full Name"
                    disabled={status === 'submitting'}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-stone-500 tracking-widest uppercase ml-1">Phone Number</label>
                  <input 
                    type="tel" name="mobile" required value={formData.mobile} onChange={handleChange}
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-tea-500 text-sm shadow-sm"
                    placeholder="+971 -- --- ----"
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-stone-500 tracking-widest uppercase ml-1">Email Address</label>
                <input 
                  type="email" name="email" required value={formData.email} onChange={handleChange}
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-tea-500 text-sm shadow-sm"
                  placeholder="name@company.com"
                  disabled={status === 'submitting'}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-stone-500 tracking-widest uppercase ml-1">Inquiry Details</label>
                <textarea 
                  name="inquiry" required rows={3} value={formData.inquiry} onChange={handleChange}
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-tea-500 text-sm resize-none shadow-sm"
                  placeholder="Tell us about your requirements..."
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl text-xs border border-red-100 animate-in fade-in slide-in-from-top-2">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-tea-700 hover:bg-tea-800 disabled:bg-stone-300 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg active:scale-[0.98] text-xs md:text-sm"
              >
                {status === 'submitting' ? (
                  <>SENDING... <Loader2 size={16} className="animate-spin" /></>
                ) : (
                  <>SEND MESSAGE <Send size={16} /></>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;
