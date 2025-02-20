import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        aboutTitle: "Discover Casa del Sol",
        aboutDescription:
          "Casa del Sol is a cozy seaside retreat where every moment is an opportunity to connect with nature and those you love most. We offer an unforgettable experience of leisure, relaxation, and tranquility, perfect for families seeking to enjoy the best of the coast.",
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
          "A Casa del Sol é um refúgio acolhedor à beira-mar, onde cada momento é uma oportunidade para se conectar com a natureza e com aqueles que você mais ama. Oferecemos uma experiência inesquecível de lazer, relaxamento e tranquilidade, ideal para famílias que buscam desfrutar do melhor do litoral.",
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
