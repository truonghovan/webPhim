import media1 from "./image.jpeg";
import media2 from "./image2.jpeg";
import media3 from "./image3.jpeg";
import media4 from "./image4.jpeg";
import media5 from "./image5.jpeg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = (index) => media[index % media.length];
