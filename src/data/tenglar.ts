export type TenglarLink = { label: string; url: string };

export type TenglarEntry = {
  id: number;
  slug: string;
  title: string;
  links: TenglarLink[];
};

export const tenglar: TenglarEntry[] = [
  {
    "id": 11,
    "slug": "fjolmidlar",
    "title": "Fjölmiðlar",
    "links": [
      {
        "label": "Bæjarins besta - bb.is",
        "url": "http://www.bb.is"
      },
      {
        "label": "Morgunblaðið - mbl.is",
        "url": "http://www.mbl.is"
      },
      {
        "label": "Vísir - visir.is",
        "url": "http://www.visir.is"
      },
      {
        "label": "Skutull - skutull.is",
        "url": "http://www.skutull.is"
      },
      {
        "label": "Pressan - pressan.is",
        "url": "http://www.pressan.is"
      }
    ]
  },
  {
    "id": 23,
    "slug": "vestfirsk-atthagafelog",
    "title": "Vestfirsk átthagafélög",
    "links": [
      {
        "label": "Önfirðingafélagið í Reykjavík",
        "url": "http://www.flateyri.is"
      },
      {
        "label": "Súgfirðingafélagið í Reykjavík",
        "url": "http://sugandi.is/forsida/"
      },
      {
        "label": "Dýrfirðingafélagið",
        "url": "http://thingeyri.is/forsida/"
      }
    ]
  },
  {
    "id": 24,
    "slug": "ferdathjonusta-isafjardardjup",
    "title": "Ferðaþjónustuaðilar í Ísafjarðardjúpi",
    "links": [
      {
        "label": "Ferðaþjónustan í Reykjanesi",
        "url": "http://www.rnes.is"
      },
      {
        "label": "Ögur Travel",
        "url": "http://www.ogurtravel.com"
      },
      {
        "label": "Heydalur",
        "url": "http://www.heydalur.is"
      },
      {
        "label": "Litlibær í Skötufirði",
        "url": "http://www.facebook.com/pages/Litlib%C3%A6r/107732225911941"
      },
      {
        "label": "Vigur - Perlan í Ísafjarðardjúpi",
        "url": "http://www.facebook.com/pages/Vigur-Island/148438505228055"
      }
    ]
  }
];
