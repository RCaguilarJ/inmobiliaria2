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
  title = 'SOLICITA UNA ASESORÍA',
  subtitle = '',
  defaultInterest = 'Informacion general',
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
      'Hola, me interesa recibir asesoria de Luxent Properties.',
      '',
      `Nombre: ${formData.name}`,
      `Telefono: ${formData.phone}`,
      `Correo: ${formData.email}`,
      `Interes: ${formData.interest}`,
      `Mensaje: ${formData.message || 'Sin mensaje adicional.'}`,
    ].join('\n');

    if (CONTACT_INFO.whatsappHref) {
      const whatsappUrl = `https://wa.me/523311429932?text=${encodeURIComponent(composedMessage)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

    const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      `Solicitud de asesoria · ${formData.interest}`,
    )}&body=${encodeURIComponent(composedMessage)}`;

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
      ? 'rounded-[2px] border border-[var(--color-line)] bg-[var(--color-surface-soft)]/38 p-8 shadow-[0_24px_60px_rgba(25,41,63,0.06)] md:p-10'
      : '';

  return (
    <div className={wrapperClass}>
      {submitted ? (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/14 text-[var(--color-accent-strong)]">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div>
            <h3 className="font-heading text-3xl font-extrabold tracking-[-0.02em] text-[var(--color-navy)]">
              Solicitud preparada
            </h3>
            <p className="mt-3 max-w-[460px] text-sm leading-7 text-[var(--color-copy)]">
              Abrimos WhatsApp y tu cliente de correo con la informacion capturada para que el seguimiento sea inmediato.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {CONTACT_INFO.whatsappHref && (
              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[10px] bg-[var(--color-accent-strong)] px-5 py-3 text-sm font-bold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            )}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 rounded-[10px] border border-[var(--color-line)] px-5 py-3 text-sm font-bold text-[var(--color-navy)]"
            >
              <Mail className="h-4 w-4" />
              Correo
            </a>
            <button
              type="button"
              onClick={resetForm}
              className="rounded-[10px] border border-[var(--color-line)] px-5 py-3 text-sm font-bold text-[var(--color-copy)]"
            >
              Nueva solicitud
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <h3 className="font-heading text-[2rem] font-extrabold tracking-[-0.02em] text-[var(--color-navy)]">{title}</h3>
            {subtitle && <p className="max-w-[470px] text-sm leading-7 text-[var(--color-copy)]">{subtitle}</p>}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--color-copy)]">
              <span>Nombre *</span>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                placeholder="Tu nombre completo"
                className="w-full border border-[var(--color-line)] bg-white px-4 py-4 text-[15px] font-medium text-[var(--color-navy)] outline-none focus:border-[var(--color-accent)]"
              />
            </label>
            <label className="space-y-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--color-copy)]">
              <span>Teléfono *</span>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                placeholder="+52 33 0000 0000"
                className="w-full border border-[var(--color-line)] bg-white px-4 py-4 text-[15px] font-medium text-[var(--color-navy)] outline-none focus:border-[var(--color-accent)]"
              />
            </label>
          </div>

          <label className="space-y-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--color-copy)]">
            <span>Correo electrónico *</span>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              placeholder="tu@correo.com"
              className="w-full border border-[var(--color-line)] bg-white px-4 py-4 text-[15px] font-medium text-[var(--color-navy)] outline-none focus:border-[var(--color-accent)]"
            />
          </label>

          <label className="space-y-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--color-copy)]">
            <span>Tipo de interés</span>
            <div className="relative">
              <select
                value={formData.interest}
                onChange={(event) => setFormData({ ...formData, interest: event.target.value })}
                className="w-full appearance-none border border-[var(--color-line)] bg-white px-4 py-4 text-[15px] font-medium text-[var(--color-navy)] outline-none focus:border-[var(--color-accent)]"
              >
                <option>Informacion general</option>
                <option>Compra o inversion</option>
                <option>Comercializacion de desarrollo</option>
                <option>Asesoria personalizada</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-copy)]" />
            </div>
          </label>

          <label className="space-y-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--color-copy)]">
            <span>Mensaje</span>
            <textarea
              rows={5}
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              placeholder="Cuentanos sobre tu proyecto o necesidad..."
              className="w-full resize-none border border-[var(--color-line)] bg-white px-4 py-4 text-[15px] font-medium text-[var(--color-navy)] outline-none focus:border-[var(--color-accent)]"
            />
          </label>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 bg-[var(--color-navy)] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--color-accent-strong)]"
          >
            Enviar solicitud
            <Send className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}
