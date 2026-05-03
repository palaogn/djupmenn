import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

type NavItem = { name: string; href: string };

const navItems: NavItem[] = [
  { name: "Um okkur", href: "#about" },
  { name: "Álfhóll", href: "#cabin" },
  { name: "Fróðleikur", href: "/frodleikur" },
  { name: "Gerast meðlimur", href: "#join" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opaque = scrolled || !isHome;

  const renderItem = (item: NavItem, onClick?: () => void, mobile = false) => {
    const baseClasses = mobile
      ? "block text-[var(--charcoal)] hover:text-[var(--fjord-blue)] transition-colors text-lg"
      : `transition-colors relative group ${
          opaque
            ? "text-[var(--charcoal)] hover:text-[var(--fjord-blue)]"
            : "text-white hover:text-[var(--ice-blue)]"
        }`;

    const underline = !mobile && (
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
    );

    if (item.href.startsWith("#")) {
      const target = isHome ? item.href : `/${item.href}`;
      const Component: any = isHome ? "a" : Link;
      const linkProps = isHome ? { href: target } : { to: target };
      return (
        <Component key={item.name} {...linkProps} className={baseClasses} onClick={onClick}>
          {item.name}
          {underline}
        </Component>
      );
    }

    return (
      <Link key={item.name} to={item.href} className={baseClasses} onClick={onClick}>
        {item.name}
        {underline}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        opaque
          ? isHome
            ? "bg-white/80 backdrop-blur-xl shadow-sm"
            : "bg-white shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className={`text-xl transition-colors ${
              opaque ? "text-[var(--fjord-blue)]" : "text-white"
            }`}
          >
            Djúpmannafélagið
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => renderItem(item))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${
              opaque ? "text-[var(--charcoal)]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => renderItem(item, () => setIsOpen(false), true))}
          </div>
        </div>
      )}
    </nav>
  );
}
