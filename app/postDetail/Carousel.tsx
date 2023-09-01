import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper, Paper, styled } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    imgPath: "/galaxy.jpg",
    detail: "galaxy",
  },
  {
    imgPath: "/iphone.jpg",
    detail: "iphone",
  },
];

const Carousel = () => {
  const [carousel, setCarousel] = useState(0);
  const max = images.length;
  const handleNext = () => {
    setCarousel((prev) => prev + 1);
  };
  const handleBack = () => {
    setCarousel((prev) => prev - 1);
  };

  return (
    <Container>
      <ImgBox>
        <Image
          src={images[carousel].imgPath}
          alt={images[carousel].detail}
          width={250}
          height={250}
          priority={true}
        />
      </ImgBox>
      <MobileStepper
        steps={max}
        position="static"
        activeStep={carousel}
        nextButton={
          <Button
            id="next"
            size="small"
            onClick={handleNext}
            disabled={carousel === max - 1}
          >
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            id="back"
            size="small"
            onClick={handleBack}
            disabled={carousel === 0}
          >
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </Container>
  );
};
export default Carousel;

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const ImgBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
