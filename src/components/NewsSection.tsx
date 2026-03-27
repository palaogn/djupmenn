import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Áramót á skálanum 2025',
    excerpt: 'Frábært áramót með góðum hóp Vestfirðinga. Veðrið var með okkur og við nutuðum fallega nýárskvöldsins í friði og ró.',
    date: '2026-01-02',
    image: 'https://images.unsplash.com/photo-1565971988144-c8a2adc6eb1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWJpbiUyMGljZWxhbmR8ZW58MXx8fHwxNzY3NjQ2ODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Haustfundur félagsins',
    excerpt: 'Vel sóttur haustfundur þar sem við ræddum framtíðarsýn félagsins og breytingar á reglum skálans. Takk fyrir frábæra þátttöku!',
    date: '2025-11-15',
    image: 'https://images.unsplash.com/photo-1622556956013-58110fa525e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbW91bnRhaW5zJTIwc2VhfGVufDF8fHx8MTc2NzY0NjgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Nýjar bækur í skálann',
    excerpt: 'Við höfum bætt við nýjum bókum í bókasafnið á skálanum. Meðal annars skáldsögur eftir íslenska höfunda og leiðabækur um Vestfirði.',
    date: '2025-10-20',
    image: 'https://images.unsplash.com/photo-1660487242257-05d004518c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbmF0dXJlJTIwbW9zc3xlbnwxfHx8fDE3Njc2NDY4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function NewsSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('is-IS', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section id="news" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="mb-4 text-[var(--fjord-blue)]">Fréttir</h2>
          <p className="text-xl text-[var(--stone-gray)] max-w-2xl">
            Fylgstu með því nýjasta úr félaginu
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <article
              key={news.id}
              className="group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                <ImageWithFallback
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="flex items-center text-sm text-[var(--stone-gray)] mb-4">
                  <Calendar size={16} className="mr-2" />
                  {formatDate(news.date)}
                </div>
                <h3 className="text-2xl mb-4 text-[var(--charcoal)] group-hover:text-[var(--fjord-blue)] transition-colors">{news.title}</h3>
                <p className="text-[var(--stone-gray)] mb-6 leading-relaxed">{news.excerpt}</p>
                <button className="flex items-center text-[var(--fjord-blue)] group-hover:gap-3 gap-2 transition-all">
                  Lesa meira
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}