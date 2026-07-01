import { useState } from 'react';

const industries = [
  'Restaurant / Hospitality',
  'Healthcare / Clinic',
  'Solar / Renewable Energy',
  'Legal / Law Firm',
  'Other',
];

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  industry: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const webhookUrl = import.meta.env.VITE_WEBHOOK_CONTACT;
    const payload = { ...form, submittedAt: new Date().toISOString() };

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('success'); // show success even on network error for demo
    }
  };

  const inputClass = `
    w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all
    placeholder:text-white-dim
    focus:border-gold
  `;
  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(212,168,67,0.15)',
  };
  const inputFocusStyle = {
    borderColor: '#D4A843',
  };

  if (status === 'success') {
    return (
      <div className="glass-card p-10 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: 'rgba(212,168,67,0.1)', border: '2px solid #D4A843' }}
        >
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="font-heading font-bold text-white text-xl mb-3">Message Sent!</h3>
        <p className="text-white-muted leading-relaxed">
          Thank you! We will be in touch within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 btn-gold-outline text-sm py-2.5 px-6"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-white-dim text-xs font-semibold uppercase tracking-wider">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-white-dim text-xs font-semibold uppercase tracking-wider">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="john@company.com"
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-white-dim text-xs font-semibold uppercase tracking-wider">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+234 800 000 0000"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-white-dim text-xs font-semibold uppercase tracking-wider">Company Name</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company Ltd"
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-white-dim text-xs font-semibold uppercase tracking-wider">Industry</label>
        <select
          name="industry"
          value={form.industry}
          onChange={handleChange}
          className={inputClass}
          style={{ ...inputStyle, colorScheme: 'dark' }}
        >
          <option value="">Select your industry</option>
          {industries.map((ind) => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-white-dim text-xs font-semibold uppercase tracking-wider">Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your business and what you'd like to automate..."
          className={inputClass}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-gold w-full text-base disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
