import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { GalleryContainer } from "../styles";

// Gerando os nomes dos arquivos de imagem
const imageFiles = Array.from({ length: 50 }, (_, i) => `DSC00${440 + i}.JPG`);

const Gallery: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: <div className="slick-prev" />,
    nextArrow: <div className="slick-next" />,
  };

  return (
    <GalleryContainer>
      <Slider {...settings}>
        {imageFiles.map((file) => (
          <div key={file}>
            <img
              src={`/assets/${file}`}
              alt={file}
              style={{
                width: "700x",
                height: "700px",
                borderRadius: "10px",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Slider>
    </GalleryContainer>
  );
};

export default Gallery;
