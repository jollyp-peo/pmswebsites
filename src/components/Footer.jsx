export default function Footer() {
  return (
    <footer className="mt-12 text-slate-400">
      <div className="border-t border-slate-700 pt-6">
        <div className="flex justify-between items-center">
          <div>© {new Date().getFullYear()} PM's Dev — Website & Hosting Solutions</div>
          <div>WhatsApp / Call: 08168329244</div>
        </div>
      </div>
    </footer>
  );
}
