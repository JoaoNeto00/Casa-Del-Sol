import React from "react";
import { Section } from "../styles";
import GalleryImages from "./galleryImages";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <h2>{t("aboutTitle")}</h2>
      <p>{t("aboutDescription")}</p>
    </Section>
  );
};

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="gallery">
      <h2>{t("galleryTitle")}</h2>
      <p>{t("galleryDescription")}</p>
      <GalleryImages />
    </Section>
  );
};

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="contact">
      <h2>{t("contactTitle")}</h2>
      <p>{t("contactDescription")}</p>
      <p>
        {t("contactPhone")} | {t("contactEmail")}
      </p>
    </Section>
  );
};

export { About, Gallery, Contact };
