import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function JoinSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    connection: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in production, this would send data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        connection: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="join" className="py-32 px-6 bg-gradient-to-br from-[var(--fjord-blue)] via-[var(--deep-sea)] to-[var(--charcoal)] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--accent-blue)]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-white">Gerast meðlimur</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Komdu og vertu hluti af samfélagi Vestfirðinga. Árleg félagsgjöld eru 5.000 kr.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-3 text-white/90">
                  Nafn *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 transition-all"
                  placeholder="Fullt nafn"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-3 text-white/90">
                  Netfang *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 transition-all"
                  placeholder="netfang@example.is"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block mb-3 text-white/90">
                  Símanúmer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 transition-all"
                  placeholder="xxx-xxxx"
                />
              </div>
              <div>
                <label htmlFor="connection" className="block mb-3 text-white/90">
                  Tengsl við Vestfirði *
                </label>
                <select
                  id="connection"
                  name="connection"
                  required
                  value={formData.connection}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white transition-all"
                >
                  <option value="" className="text-[var(--charcoal)]">Veldu...</option>
                  <option value="born" className="text-[var(--charcoal)]">Fædd/ur á Vestfjörðum</option>
                  <option value="lived" className="text-[var(--charcoal)]">Bjó á Vestfjörðum</option>
                  <option value="family" className="text-[var(--charcoal)]">Fjölskylda frá Vestfjörðum</option>
                  <option value="interest" className="text-[var(--charcoal)]">Áhugi á svæðinu</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block mb-3 text-white/90">
                Skilaboð (valfrjálst)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 transition-all resize-none"
                placeholder="Segðu okkur meira um þig..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-[var(--fjord-blue)] py-5 rounded-full hover:bg-[var(--ice-blue)] transition-all text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-105 duration-300"
            >
              <Send size={20} />
              Senda umsókn
            </button>

            <p className="text-sm text-white/70 mt-6 text-center">
              Við munum hafa samband við þig innan fárra daga með frekari upplýsingum.
            </p>
          </form>
        ) : (
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-16 text-center border border-white/20">
            <div className="w-24 h-24 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={48} className="text-green-400" />
            </div>
            <h3 className="mb-4 text-white text-3xl">Takk fyrir umsóknina!</h3>
            <p className="text-white/80 text-lg">
              Við höfum móttekið umsókn þína og munum hafa samband við þig fljótlega.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}