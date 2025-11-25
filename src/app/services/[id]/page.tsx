import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/app/data/Services';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ServiceDetail({ params }: Props) {
  // En Next.js 15+, params es una Promise, necesitamos await
  const { id } = await params;
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/#services"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Services
          </Link>
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* What's Included */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What's Included
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-700 text-lg">{detail}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Service Specific Content */}
          {renderServiceSpecificContent(service)}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary-500 text-white rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let's create something amazing together
          </p>
          <Link
            href="/#contacto"
            className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

// Función helper para renderizar contenido específico de cada servicio
function renderServiceSpecificContent(service: any) {
  switch (service.type) {
    case 'content-production':
      return (
        <div className="space-y-8">
          {/* Pricing */}
          <section>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Pricing
            </h3>
            <div className="bg-primary-50 rounded-lg p-6">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-2xl font-bold text-primary-600">{service.price}</span>
                <span className="text-gray-600">Minimum booking: {service.minHours} hours</span>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-primary-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Video Editing Options */}
          <section>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Video Editing Options
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-primary-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-600 mb-2">Basic Edit</h4>
                <p className="text-2xl font-bold mb-2">{service.editingOptions.basic.price}</p>
                <p className="text-gray-600">{service.editingOptions.basic.description}</p>
              </div>
              <div className="border border-primary-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-600 mb-2">Advanced Edit</h4>
                <p className="text-gray-600">{service.editingOptions.advanced}</p>
              </div>
            </div>
          </section>

          {/* What We Can Record */}
          <section>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              What We Can Record
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.whatWeCanRecord.map((item: string, index: number) => (
                <div key={index} className="flex items-center">
                  <span className="text-primary-500 mr-3">•</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="text-center pt-6">
            <p className="text-lg text-gray-700 italic">
              {service.cta}
            </p>
          </div>
        </div>
      );

    case 'content-editing':
      return (
        <div className="space-y-8">
          {/* Pricing */}
          <section>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Editing Packages
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-600 mb-2">Basic Edit</h4>
                <p className="text-2xl font-bold mb-2">{service.pricing.basic.price}</p>
                <p className="text-gray-600">{service.pricing.basic.description}</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-600 mb-2">Advanced Edit</h4>
                <p className="text-gray-600">{service.pricing.advanced}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Contact for custom pricing based on your needs
                </p>
              </div>
            </div>
          </section>

          {/* Process */}
          <section>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              My Editing Process
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Structure & Flow</h4>
                <p className="text-gray-600">Creating compelling narratives with hooks and key messages</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Audio Enhancement</h4>
                <p className="text-gray-600">Music integration and professional audio cleaning</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Visual Polish</h4>
                <p className="text-gray-600">Color correction and smooth transitions</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Final Touches</h4>
                <p className="text-gray-600">Subtitles and AI-enhanced optimization</p>
              </div>
            </div>
          </section>
        </div>
      );

    case 'personal-consultations':
      return (
        <div className="space-y-8">
          {/* Session Details */}
          <section>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Session Details
            </h3>
            <div className="bg-primary-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">⏱️</span>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Duration</h4>
                  <p className="text-gray-700">{service.sessionDetails}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-3xl mr-4">📞</span>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Ongoing Support</h4>
                  <p className="text-gray-700">{service.support}</p>
                </div>
              </div>
            </div>
          </section>

          {/* What You'll Get */}
          <section>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              What You'll Achieve
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold text-gray-900 mb-2">Clear Strategy</h4>
                <p className="text-gray-600">Defined content direction and goals</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">💎</div>
                <h4 className="font-bold text-gray-900 mb-2">Visual Identity</h4>
                <p className="text-gray-600">Cohesive brand style and aesthetics</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🎬</div>
                <h4 className="font-bold text-gray-900 mb-2">Confident Presence</h4>
                <p className="text-gray-600">Improved on-camera performance</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-bold text-gray-900 mb-2">Action Plan</h4>
                <p className="text-gray-600">Practical steps for immediate implementation</p>
              </div>
            </div>
          </section>
        </div>
      );

    default:
      return null;
  }
}

// Generar metadata para SEO
export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const service = servicesData.find(s => s.id === id);
  
  return {
    title: service ? `${service.title} | Your Name` : 'Service Not Found',
    description: service?.description,
  };
}

// Generar paths estáticos
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}