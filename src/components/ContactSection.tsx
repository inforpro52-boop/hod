import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SITE_INFO } from '../data/content';
import { ContactFormData } from '../types';
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: initialSubject || 'Projet Juridique & Accompagnement Stratégique',
    message: '',
    securityAnswer: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Synchronize when initialSubject changes
  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, sujet: initialSubject }));
    }
  }, [initialSubject]);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Anti-spam validation
    if (formData.honeypot !== '') {
      // Bot trapped in honeypot
      return;
    }

    if (formData.securityAnswer.trim() !== '7') {
      setErrorMsg('Vérification de sécurité incorrecte. Veuillez calculer 4 + 3 = 7.');
      return;
    }

    if (!formData.nom || !formData.email || !formData.message) {
      setErrorMsg('Veuillez renseigner les champs obligatoires (Nom, Email, Message).');
      return;
    }

    setIsSubmitting(true);

    // Simulate safe delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        sujet: 'Projet Juridique & Accompagnement Stratégique',
        message: '',
        securityAnswer: '',
        honeypot: '',
      });
    }, 1200);
  };

  return (
    <section
      id="contact"
      aria-label="Contact et prise de rendez-vous"
      className="py-24 bg-[#F7F3EA] text-[#20252B] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/5 border border-[#C9A45C]/40 text-[#0B1F33] text-xs font-semibold tracking-widest uppercase">
            <span>Correspondance & Rendez-vous</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0B1F33] leading-tight">
            Parlons de votre projet
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto" />

          <p className="text-base text-[#20252B]/80 font-light max-w-2xl mx-auto">
            Pour toute demande d'intervention, projet d'accompagnement juridique, échange littéraire
            ou sollicitation média, le secrétariat vous répondra dans les meilleurs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Official Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B1F33] text-[#F7F3EA] rounded-2xl p-8 shadow-xl border border-[#C9A45C]/30 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold">
                  Coordonnées Officielles
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#F7F3EA] mt-1">
                  Cabinet & Secrétariat
                </h3>
                <p className="text-xs text-[#F7F3EA]/70 mt-1">
                  Hod Fragonard — {SITE_INFO.location}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-[#071524] border border-[#C9A45C]/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#0B1F33] text-[#C9A45C]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-semibold">
                        Courrier électronique
                      </span>
                      <p className="text-sm font-medium text-[#F7F3EA]">{SITE_INFO.displayEmail}</p>
                      <p className="text-[10px] text-[#F7F3EA]/50 italic">{SITE_INFO.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(SITE_INFO.displayEmail, 'email')}
                    className="p-2 rounded hover:bg-white/10 text-[#C9A45C] transition-colors"
                    title="Copier l'adresse email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-[#071524] border border-[#C9A45C]/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#0B1F33] text-[#C9A45C]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-semibold">
                        Ligne Professionnelle
                      </span>
                      <p className="text-sm font-medium text-[#F7F3EA]">{SITE_INFO.displayPhone}</p>
                      <p className="text-[10px] text-[#F7F3EA]/50 italic">{SITE_INFO.phone}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(SITE_INFO.displayPhone, 'phone')}
                    className="p-2 rounded hover:bg-white/10 text-[#C9A45C] transition-colors"
                    title="Copier le numéro de téléphone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Direct Item */}
                <div className="p-4 rounded-xl bg-[#071524] border border-[#C9A45C]/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-950 text-emerald-400">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                        WhatsApp Professionnel
                      </span>
                      <p className="text-sm font-medium text-[#F7F3EA]">{SITE_INFO.displayWhatsapp}</p>
                      <p className="text-[10px] text-[#F7F3EA]/50 italic">Messagerie instantanée directe</p>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=Bonjour%20Hod%20Fragonard,%20je%20vous%20contacte%20depuis%20votre%20site%20officiel.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    title="Ouvrir WhatsApp"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Ethics Reminder in contact column */}
              <div className="p-3.5 rounded-lg bg-black/20 border border-white/10 text-[11px] text-[#F7F3EA]/70 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                <span>
                  Discrétion et confidentialité professionnelles assurées pour toutes correspondances.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Secure Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-[#C9A45C]/30">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C9A45C]/20 text-[#0B1F33] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-[#C9A45C]" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0B1F33]">
                    Message transmis avec succès
                  </h3>
                  <p className="text-sm text-[#20252B]/80 max-w-md mx-auto leading-relaxed">
                    Nous vous remercions pour votre message. Le secrétariat de Hod Fragonard en prendra
                    connaissance dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#0B1F33] text-[#F7F3EA] rounded hover:bg-[#1a334d]"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot hidden input for spam bots */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_anti_bot_field"
                      tabIndex={-1}
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      autoComplete="off"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name and Surname */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-nom" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F33]">
                        Nom <span className="text-[#C9A45C]">*</span>
                      </label>
                      <input
                        id="contact-nom"
                        type="text"
                        required
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        placeholder="Votre nom"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#20252B] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-prenom" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F33]">
                        Prénom
                      </label>
                      <input
                        id="contact-prenom"
                        type="text"
                        value={formData.prenom}
                        onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                        placeholder="Votre prénom"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#20252B] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F33]">
                        Email <span className="text-[#C9A45C]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="adresse@exemple.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#20252B] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-telephone" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F33]">
                        Téléphone
                      </label>
                      <input
                        id="contact-telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        placeholder="+33 (0)6..."
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#20252B] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-sujet" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F33]">
                      Objet de la sollicitation <span className="text-[#C9A45C]">*</span>
                    </label>
                    <select
                      id="contact-sujet"
                      value={formData.sujet}
                      onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#20252B] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none bg-white"
                    >
                      <option value="Projet Juridique & Accompagnement Stratégique">Projet Juridique & Accompagnement Stratégique</option>
                      <option value="Demande d'Intervention / Conférence / Table Ronde">Demande d'Intervention / Conférence / Table Ronde</option>
                      <option value="Littérature, Dédicaces & Ouvrages">Littérature, Dédicaces & Ouvrages</option>
                      <option value="Partenariat d'Engagement, Jeunesse & Mentorat">Partenariat d'Engagement, Jeunesse & Mentorat</option>
                      <option value="Presse, Médias & Interviews">Presse, Médias & Interviews</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F33]">
                      Votre message <span className="text-[#C9A45C]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez brièvement la nature de votre démarche ou de votre projet..."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#20252B] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none resize-y"
                    />
                  </div>

                  {/* Anti-spam math question */}
                  <div className="p-3.5 rounded-lg bg-[#F7F3EA] border border-[#C9A45C]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="text-xs text-[#0B1F33]">
                      <span className="font-semibold block">Vérification de sécurité anti-robot :</span>
                      <span>Combien font 4 + 3 ? (Entrez le chiffre 7)</span>
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Réponse"
                      value={formData.securityAnswer}
                      onChange={(e) => setFormData({ ...formData, securityAnswer: e.target.value })}
                      className="w-24 px-3 py-1.5 rounded border border-gray-300 text-center text-sm font-bold text-[#0B1F33] bg-white outline-none focus:border-[#C9A45C]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-lg bg-[#0B1F33] hover:bg-[#1a334d] text-[#F7F3EA] text-xs font-semibold tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <span>ENVOYER LE MESSAGE</span>
                        <Send className="w-4 h-4 text-[#C9A45C]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
