import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import {
  StyledH1,
  StyledDiv,
  StyledButtonDiv,
  StyledImg,
  StyledSpan,
  StyledP,
  StyledBackP,
} from "../components/Styled";


const CardFlip = (props) => {
  const { inputAdd } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < inputAdd.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isFirstCard = currentIndex === 0;
  const isLastCard = currentIndex === inputAdd.length - 1;

  return (
    <section>
      <StyledH1>Power Cards</StyledH1>
      <Link to="/cartinput">
        <Button fullWidth={true} color="warning" variant="contained">
          Kart Ekle
        </Button>
      </Link>
      <div>
        {inputAdd.map((item, index) => {
          const isCurrentCard = index === currentIndex;
          return (
            <ReactCardFlip key={index} isFlipped={isFlipped} flipDirection="vertical">
              {/* Kartın ön yüzü */}
              {isCurrentCard && (
                <StyledDiv onClick={handleClick}>
                  <StyledImg src={item.image} alt="" />
                  <StyledSpan>{item.english}</StyledSpan>
                  <StyledP>{item.example}</StyledP>
                </StyledDiv>
              )}

              {/* Kartın arka yüzü */}
              {isCurrentCard && (
                <StyledDiv onClick={handleClick}>
                  <StyledBackP>{item.turkish}</StyledBackP>
                </StyledDiv>
              )}
            </ReactCardFlip>
          );
        })}
      </div>
      <StyledButtonDiv>
        <Button color="info" variant="contained" onClick={handlePrevious} disabled={isFirstCard}>
          Önceki
        </Button>
        <Button color="secondary" variant="contained" onClick={handleNext} disabled={isLastCard}>
          Sonraki
        </Button>
      </StyledButtonDiv>
    </section>
  );
};

export default CardFlip;
