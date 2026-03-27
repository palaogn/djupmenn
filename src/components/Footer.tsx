import { Mail, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="mb-6 text-xl">Djúpmannafélagið</h4>
            <p className="text-gray-400 leading-relaxed">
              Samfélags- og menningarsamtök Vestfirðinga sem starfa að því að
              varðveita og efla menningu og samkennd meðal þeirra sem eiga rætur
              á Vestfjörðum.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xl">Tengiliðir</h4>
            <div className="space-y-4">
              <a
                href="mailto:djupmenn@djupmenn.is"
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-white/10 flex items-center justify-center mr-3 transition-colors">
                  <Mail size={18} />
                </div>
                djupmenn@djupmenn.is
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xl">Fylgdu okkur</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100064869090971&ref=embed_page#"
                className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} className="fill-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; 2026 Djúpmannafélagið. Öll réttindi áskilin.</p>
        </div>
      </div>
    </footer>
  );
}
