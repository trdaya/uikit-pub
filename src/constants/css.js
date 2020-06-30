export const OneRemInPx = window.innerWidth < 375 ? 18.76 : 16;
const OneRemInPxMedia = 16;

export const getRem = (px) => `${px / OneRemInPx}rem`;
export const getRemMedia = (px) => `${px / OneRemInPxMedia}rem`;
