import { FC, useEffect, useState } from "react";
import { movementDirectionType } from "../types/character/types";

export type CharacterProps = {
  movementDirection: movementDirectionType;
  movementSpeed: number;
  spriteImages: string[]; //0- up static 1- right static 2-left static 3-down static 4- up moving 5-right moving 6-left moving 7- down moving
};

export const Character: FC<CharacterProps> = ({ movementDirection, movementSpeed, spriteImages }) => {
  const [imgSrc, setImgSrc] = useState<string>("");

  useEffect(() => {
    switch (movementDirection) {
      case "up":
        setImgSrc(movementSpeed > 0 ? spriteImages[4] : spriteImages[0]);
        break;
      case "down":
        setImgSrc(movementSpeed > 0 ? spriteImages[7] : spriteImages[3]);
        break;
      case "left":
        setImgSrc(movementSpeed > 0 ? spriteImages[6] : spriteImages[2]);
        break;
      case "right":
        setImgSrc(movementSpeed > 0 ? spriteImages[5] : spriteImages[1]);
        break;
      default:
        setImgSrc(spriteImages[1]);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movementDirection, movementSpeed]);

  return <img src={imgSrc} />;
};

export default Character;
