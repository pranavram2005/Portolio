import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Pranav Ram PS',
          from_email: form.email,
          to_email: 'pspranavram2005@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Message sent Successfully',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "Message not sent",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center">
        {/* Deep blackish-gray background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
        
        {/* Minimalist floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-gray-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-gray-300 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/3 left-3/4 w-1.5 h-1.5 bg-gray-500 rounded-full opacity-15 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-gray-400 rounded-full opacity-25"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-10">
              <div>
                <h3 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6 tracking-tight">
                  Get in <span className="text-gray-300">Touch</span>
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-8 font-light">
                  Let's collaborate on something extraordinary. Whether it's a revolutionary 
                  web application or an innovative digital experience, I'm ready to bring 
                  your vision to reality.
                </p>
              </div>

              {/* Contact Info Cards - Minimalist design */}
              <div className="space-y-6">
                <div className="flex items-center p-6 bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/60 hover:border-gray-700/80 transition-all duration-300">
                  <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mr-5 border border-gray-700">
                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200 text-lg">Email</p>
                    <p className="text-gray-400">pspranavram2005@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/60 hover:border-gray-700/80 transition-all duration-300">
                  <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mr-5 border border-gray-700">
                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200 text-lg">Location</p>
                    <p className="text-gray-400">Available Worldwide</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/60 hover:border-gray-700/80 transition-all duration-300">
                  <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mr-5 border border-gray-700">
                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200 text-lg">Response Time</p>
                    <p className="text-gray-400">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="relative my-6">
              {/* Form background - sleek blackish design */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-gray-950/80 backdrop-blur-xl rounded-3xl border border-gray-800/50"></div>
              
              <div className="relative p-10 lg:p-12">
                <h4 className="text-3xl font-bold text-gray-100 mb-10 text-center tracking-tight">
                  Send Message
                </h4>
                
                <div ref={formRef} className="space-y-8">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-3 tracking-wide">
                      FULL NAME
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        required
                        className={`w-full px-5 py-4 bg-gray-950/50 border rounded-2xl text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 font-light ${
                          focusedField === 'name' || form.name 
                            ? 'border-gray-600 bg-gray-900/50' 
                            : 'border-gray-800 hover:border-gray-700'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-3 tracking-wide">
                      EMAIL ADDRESS
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        required
                        className={`w-full px-5 py-4 bg-gray-950/50 border rounded-2xl text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 font-light ${
                          focusedField === 'email' || form.email 
                            ? 'border-gray-600 bg-gray-900/50' 
                            : 'border-gray-800 hover:border-gray-700'
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-3 tracking-wide">
                      MESSAGE
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        required
                        rows={6}
                        className={`w-full px-5 py-4 bg-gray-950/50 border rounded-2xl text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none font-light ${
                          focusedField === 'message' || form.message 
                            ? 'border-gray-600 bg-gray-900/50' 
                            : 'border-gray-800 hover:border-gray-700'
                        }`}
                        placeholder="Share your project details, ideas, or questions..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-gray-100 hover:bg-white text-gray-900 font-semibold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-900/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center group tracking-wide" 
                    type="submit" 
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        SENDING...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;