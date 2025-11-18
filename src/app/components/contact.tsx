'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  // In Contact.tsx - Updated contact info
  const contactInfo = [
    {
      icon: '📱',
      title: 'WhatsApp',
      value: 'Primary Contact',
      link: 'https://wa.me/your-number'
    },
    {
      icon: '✈️',
      title: 'Telegram',
      value: '@yourusername',
      link: 'https://t.me/yourusername'
    },
    {
      icon: '📸',
      title: 'Instagram',
      value: '@elvirasabirova',
      link: 'https://instagram.com/elvirasabirova'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@elvirasabirova.com',
      link: 'mailto:hello@elvirasabirova.com'
    }
  ];

  return (
    <section id="contacto" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-400 mb-4">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ponte en Contacto
            </h3>
            <p className="text-gray-600 mb-8">
              Estoy siempre interesada en nuevos proyectos y colaboraciones. 
              No dudes en contactarme para discutir tus ideas.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-start space-x-4 group hover:bg-white p-4 rounded-lg transition-all duration-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-[#c084fc] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Redes Sociales */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Sígueme en</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Instagram', icon: '📸', url: '#' },
                  { name: 'YouTube', icon: '🎬', url: '#' },
                  { name: 'Behance', icon: '🎨', url: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-200"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envíame un Mensaje
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  ¡Mensaje Enviado!
                </h4>
                <p className="text-gray-600">
                  Gracias por contactarme. Te responderé lo antes posible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 bg-[#c084fc] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a855f7] transition-colors"
                >
                  Enviar Otro Mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c084fc] focus:border-transparent transition-all duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c084fc] focus:border-transparent transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c084fc] focus:border-transparent transition-all duration-300"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c084fc] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Cuéntame más sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-300 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}