import React from "react";
import { GameContainer } from "../Common/GameContainer";
import { Numbers } from "./Numbers";

export function NumbersGame() {
  return <GameContainer figures={Numbers} />;
}
