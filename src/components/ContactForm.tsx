import { useEffect, useState } from 'react';
import { CheckCircle2, ChevronDown, Mail, MessageCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  defaultInterest?: string;
  customMessage?: string;
  surface?: 'card' | 'plain';
}

export default function ContactForm({
  title = 'Solicita una asesoría',
  subtitle = 'Compártenos tus datos y prepararemos un seguimiento comercial por WhatsApp y correo.',
  defaultInterest = 'Información general',
  customMessage = '',
  surface = 'card',
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: defaultInterest,
    message: customMessage,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      interest: defaultInterest,
      message: customMessage,
    }));
  }, [customMessage, defaultInterest]);

  const openChannels = () => {
    const composedMessage = [
      'Hola, me interesa recibir información sobre Condominios Country Club.',
      '',
      `Nombre: ${formData.name}`,
      `Teléfono: ${formData.phone}`,
      `Correo: ${formData.email}`,
      `Interés: ${formData.interest}`,
      `Mensaje: ${formData.message || 'Sin mensaje adicional.'}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/523311429932?text=${encodeURIComponent(composedMessage)}`;
    const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      `Solicitud de asesoría · ${formData.interest}`,
    )}&body=${encodeURIComponent(composedMessage)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    window.location.href = mailtoUrl;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      return;
    }

    setSubmitted(true);
    openChannels();
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      interest: defaultInterest,
      message: customMessage,
    });
  };

  const wrapperClass =
    surface === 'card'
      ? 'card-shell rounded-[28px] p-6 md:p-8'
      : '';

  return (
    <div className={wrapperClass}>
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start gap-5"
        >
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)]">Solicitud preparada</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-copy)]">
              Abrimos WhatsApp y tu cliente de correo con la información capturada para continuar el contacto sin necesidad de backend.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={CONTACT_INFO.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-navy)]"
            >
              <Mail className="h-4 w-4" />
              Correo
            </a>
            <button
              type="button"
              onClick={resetForm}
              className="rounded-full border border-[var(--color-line)] px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-copy)]"
            >
              Nueva solicitud
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)]">{title}</h3>
            <p className="text-sm leading-relaxed text-[var(--color-copy)]">{subtitle}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1.5 text-sm font-medium text-[var(--color-navy)]">
              <span>Nombre *</span>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                placeholder="Tu nombre completo"
                className="w-full rounded-2xl border border-[var(--color-line)] px-4 py-3 outline-none focus:border-[var(--color-accent)]"
              />
            </label>
            <label className="space-y-1.5 text-sm font-medium text-[var(--color-navy)]">
              <span>Teléfono *</span>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                placeholder="+52 33 0000 0000"
                className="w-full rounded-2xl border border-[var(--color-line)] px-4 py-3 outline-none focus:border-[var(--color-accent)]"
              />
            </label>
          </div>

          <label className="space-y-1.5 text-sm font-medium text-[var(--color-navy)]">
            <span>Correo electrónico *</span>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              placeholder="tu@correo.com"
              className="w-full rounded-2xl border border-[var(--color-line)] px-4 py-3 outline-none focus:border-[var(--color-accent)]"
            />
          </label>

          <label className="space-y-1.5 text-sm font-medium text-[var(--color-navy)]">
            <span>Tipo de interés</span>
            <div className="relative">
              <select
                value={formData.interest}
                onChange={(event) => setFormData({ ...formData, interest: event.target.value })}
                className="w-full appearance-none rounded-2xl border border-[var(--color-line)] px-4 py-3 outline-none focus:border-[var(--color-accent)]"
              >
                <option>Información general</option>
                <option>Disponibilidad de tipologías</option>
                <option>Amenidades y recorrido</option>
                <option>Asesoría comercial Luxent</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-4 h-4 w-4 text-[var(--color-copy)]" />
            </div>
          </label>

          <label className="space-y-1.5 text-sm font-medium text-[var(--color-navy)]">
            <span>Mensaje</span>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              placeholder="Cuéntanos qué deseas revisar o qué etapa de decisión estás evaluando."
              className="w-full rounded-2xl border border-[var(--color-line)] px-4 py-3 outline-none focus:border-[var(--color-accent)]"
            />
          </label>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-navy)] px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white hover:bg-[var(--color-accent-deep)]"
          >
            Enviar solicitud
            <Send className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}
