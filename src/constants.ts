import { Airline, Time } from "./types";
import logoImage from "./assets/images/logo.png";

export const times: Time[] = [
    {
        id: 1,
        isSelect: true,
        start: "9:20",
        finish: "11:05",
    },
    {
        id: 2,
        isSelect: false,
        start: "10:20",
        finish: "12:05",
    },
    {
        id: 3,
        isSelect: false,
        start: "11:20",
        finish: "13:05",
    },
];

export const airline: Airline = {
    name: "S7 Airlines",
    logoPath: logoImage,
};

export const price = 4150;
