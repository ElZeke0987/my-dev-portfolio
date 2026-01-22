export const userRoleInAnimation = "auto"

export const getValorHLetra = () => window.innerHeight/4;
export const nonExistingChar = "\u200B";
export const timesToRepeatChar = 7;
export const autoAnimationDuration = userRoleInAnimation==="manual"?0:10;
const dots = `${nonExistingChar.repeat(timesToRepeatChar)}.${nonExistingChar.repeat(timesToRepeatChar)}.${nonExistingChar.repeat(timesToRepeatChar)}.`;
const nullCharsAtTheEnd = `${nonExistingChar.repeat(userRoleInAnimation==="manual"?0:20)}`;
export const getFirstAutoText = () => `> initializing ${window.location.hostname}\n> loading web engineer${userRoleInAnimation === "semi-manual" ? "\n> Scroll to continue" : ""}`;
export const getText = () => `${getFirstAutoText()}\n> ${dots}\n> Front-End focused\n> Full-stack capable${nullCharsAtTheEnd}`;
