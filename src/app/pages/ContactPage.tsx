import { ArrowLeft, Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! Our team will contact you within 24 hours.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'sales@dbgaming.com',
      subContent: 'We reply within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      subContent: 'Mon-Fri 9am-6pm EST',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      content: 'Available 24/7',
      subContent: 'Instant support',
    },
    {
      icon: MapPin,
      title: 'Office',
      content: 'Malta Gaming Hub',
      subContent: 'Valletta, Malta',
    },
  ];

  return (
    <div className="pt-20 pb-12">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full mb-4 border border-secondary/20">
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's Talk
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions? Our team is ready to help you get started with DB Gaming platform.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all hover:border-secondary/50"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-secondary" size={24} />
                </div>
                <h3 className="font-semibold mb-1">{info.title}</h3>
                <p className="text-secondary font-semibold mb-1">{info.content}</p>
                <p className="text-xs text-foreground/70">{info.subContent}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-semibold mb-2">
                I'm interested in *
              </label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="">Select an option</option>
                <option value="api">API Integration</option>
                <option value="whitelabel">White Label Solution</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="demo">Product Demo</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                placeholder="Tell us about your project and requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors shadow-md font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Additional CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer a Live Demo?</h2>
          <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
            Schedule a personalized demo with our team to see the platform in action.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/product-demo"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors shadow-md"
            >
              Try Product Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
