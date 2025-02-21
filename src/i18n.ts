import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        aboutTitle: "Discover Casa del Sol",
        aboutDescription:
          "Casa Del Sol: Follow the sun, find paradise. We offer a rustic and spacious house, ideal for families and groups, located: - 5 minutes from Lagoa do Paraíso - 15 minutes from the center of Jijoca - 30 minutes from Jericoacoara beach Features: - Shaded and ventilated land - Security wall - Capacity for up to 10 people - Mezzanine with double bed + hammock - 2 double bedrooms - Room with 2 single beds + sofa for 2 people Additional services: - Buggy rides, quad biking, Toyota Hilux and UTV - Transfers between Fortaleza and Jijoca - Pets allowed. The team at 'Casa del Sol' wishes you a great holiday and a wonderful stay! Come relax with us!",
        galleryTitle: "Image Gallery",
        galleryDescription:
          "Explore the beauty of Casa del Sol and its surroundings. See the images that capture the essence of this seaside paradise, where the sun shines year-round and every corner invites you to rest.",
        contactTitle: "Contact Us",
        contactDescription:
          "We are happy to assist you! If you have any questions or would like to know more about Casa del Sol, get in touch with us. We are available to answer all your questions and ensure your experience with us is perfect.",
        contactPhone: "WhatsApp: (88) 98126-3877",
        contactEmail: "Email: casadelsoljeri@hotmail.com",
        about: "About",
        gallery: "Gallery",
        contact: "Contact",
      },
    },
    pt: {
      translation: {
        aboutTitle: "Conheça a Casa del Sol",
        aboutDescription:
          "Casa Del Sol: Siga o sol, encontre o paraíso. Oferecemos uma casa rústica e espaçosa, ideal para famílias e grupos, localizada a: - 5 minutos da Lagoa do Paraíso - 15 minutos do centro de Jijoca - 30 minutos da praia de Jericoacoara Características: - Terreno arborizado e ventilado - Muro de segurança - Capacidade para até 10 pessoas - Mezanino com cama de casal + rede - 2 quartos de casal - Quarto com 2 camas de solteiro + sofá para 2 pessoas Serviços adicionais: - Passeios de buggy, quadriciclo, Toyota Hilux e UTV - Transfer entre Fortaleza e Jijoca - Animais domésticos permitidos. A equipe da 'Casa del Sol' deseja boa férias e uma ótima estadia! Venha relaxar conosco!",
        galleryTitle: "Galeria de Imagens",
        galleryDescription:
          "Explore a beleza da Casa del Sol e seus arredores. Veja as imagens que capturam a essência deste paraíso à beira-mar, onde o sol brilha o ano todo e cada canto é um convite ao descanso.",
        contactTitle: "Entre em Contato Conosco",
        contactDescription:
          "Temos o prazer de atender você! Se tiver alguma dúvida ou quiser saber mais sobre a Casa del Sol, entre em contato conosco. Estamos disponíveis para responder a todas as suas perguntas e garantir que sua experiência conosco seja perfeita.",
        contactPhone: "WhatsApp: (88) 98126-3877",
        contactEmail: "Email: casadelsoljeri@hotmail.com",
        about: "Sobre",
        gallery: "Galeria",
        contact: "Contato",
      },
    },
  },
  lng: "pt", // Idioma padrão
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false, // React já faz o escape
  },
});

export default i18n;
