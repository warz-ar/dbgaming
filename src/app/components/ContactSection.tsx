import { useState } from 'react';
import { Send, Mail, MessageCircle, Phone, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Please select business type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        businessType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full mb-6 border border-accent/20">
              <span className="text-sm font-medium">Contact Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Launch Your Platform Today
            </h2>

            <p className="text-lg text-foreground/70 mb-8">
              Fill out the form or contact us directly. Our expert team will respond within 24 hours to provide you with a customized solution.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-foreground/70">business@dbgaming.com</p>
                  <p className="text-sm text-foreground/60">12-hour response on business days</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Instant Messaging</h4>
                  <p className="text-foreground/70">Telegram: @DBGaming_Official</p>
                  <p className="text-sm text-foreground/60">24/7 online support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-foreground/70">+63 917 123 4567 (Philippines)</p>
                  <p className="text-sm text-foreground/60">Hours: 09:00 - 18:00 PHT</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-secondary/10 to-accent/5 border border-secondary/20 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Why Choose Us?</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-secondary flex-shrink-0" size={16} />
                  <span>Strict confidentiality, GDPR compliant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-secondary flex-shrink-0" size={16} />
                  <span>Dedicated account manager & technical support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-secondary flex-shrink-0" size={16} />
                  <span>Free technical consultation & assessment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-secondary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-foreground/70 text-center">
                  We'll contact you within 24 hours
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-input-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-colors ${
                        errors.name ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
                      placeholder="Your Company Ltd."
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-input-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-colors ${
                        errors.email ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-input-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-colors ${
                        errors.phone ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Business Type */}
                  <div>
                    <label htmlFor="businessType" className="block mb-2 text-sm font-medium">
                      Business Type <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-input-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-colors ${
                        errors.businessType ? 'border-destructive' : 'border-border'
                      }`}
                    >
                      <option value="">Select business type</option>
                      <option value="api">Game API Integration</option>
                      <option value="package">White Label Platform</option>
                      <option value="sports">Sports Betting</option>
                      <option value="live">Live Casino</option>
                      <option value="slots">Slots & Games</option>
                      <option value="other">Other Requirements</option>
                    </select>
                    {errors.businessType && (
                      <p className="text-sm text-destructive mt-1">{errors.businessType}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-colors resize-none"
                      placeholder="Briefly describe your requirements, expected GGR, target markets..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-foreground/60 text-center">
                    By submitting, you agree to our Privacy Policy. We will never share your information.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
