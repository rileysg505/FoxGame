export const TICK_RATE = 3000;
export const ICONS = ["fish", "poop", "weather"];
export const RAIN_CHANCE = 0.2;
export const SCENES = ["day", "rain"];
export const DAY_LENGTH = 60;
export const NIGHT_LENGTH = 4;
export const START_TEXT = "Press the middle button to play";
export const DEAD_TEXT = "The fox died, press the middle button to start over";

export const getNextHungerTime = (clock) =>
  Math.floor(Math.random() * 3) + 5 + clock;
export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 2) + 3 + clock;
export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 3) + 4 + clock;
