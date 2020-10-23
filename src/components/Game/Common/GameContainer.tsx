import React from "react";

interface Figure {
  url: string;
  altImage: string;
  sound: string;
}

interface GameContainerProps {
  figures: Array<Figure>;
}

export function GameFigure({ url, altImage, sound }: Figure) {
  let audio = new Audio(sound);

  const handlePlaySound = () => {
    audio.play();
  };

  return (
    <div className="figure">
      <img srcSet={url} alt={altImage} onClick={handlePlaySound} />
    </div>
  );
}

export function GameContainer({ figures }: GameContainerProps) {
  const GameFigures = figures.map((figure: Figure, i: number) => (
    <GameFigure {...figure} key={i} />
  ));

  return <div className="container">{GameFigures}</div>;
}
