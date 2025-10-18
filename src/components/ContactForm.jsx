import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from 'react';


export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      setStatus("missing-config");
      return;
    }

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        setStatus("sent");
        formRef.current.reset();
      }, (error) => {
        console.error(error);
        setStatus("error");
      });
  };

  return (
    <motion.section id="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4 bg-slate-800 p-6 rounded">
          <input name="from_name" required className="w-full p-3 rounded bg-slate-700" placeholder="Your name" />
          <input name="reply_to" type="email" required className="w-full p-3 rounded bg-slate-700" placeholder="Email" />
          <input name="subject" className="w-full p-3 rounded bg-slate-700" placeholder="Subject" />
          <textarea name="message" required rows="5" className="w-full p-3 rounded bg-slate-700" placeholder="Message"></textarea>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-5 py-2 bg-indigo-600 rounded">Send Message</button>
            {status === "sending" && <span className="text-sm">Sending…</span>}
            {status === "sent" && <span className="text-sm text-green-400">Message sent — we’ll reply soon.</span>}
            {status === "error" && <span className="text-sm text-rose-400">Error sending. Try again.</span>}
            {status === "missing-config" && <span className="text-sm text-amber-400">EmailJS not configured.</span>}
          </div>
        </form>

        <div className="bg-slate-800 p-6 rounded">
          <h3 className="text-lg">Contact Info</h3>
          <p className="mt-2 text-slate-300">WhatsApp / Call: 08168329244, 07068450715</p>
          <div className="mt-4">
            <h4 className="font-medium">What to expect</h4>
            <ul className="list-disc ml-5 mt-2 text-slate-300">
              <li>Project timeline & milestones</li>
              <li>Quote based on package & custom requirements</li>
              <li>Scope, deliverables & post-launch support</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
