import { IColor } from "../Interface/IColor";

export const rgb = (red: number, green: number, blue: number): IColor => {
    return {
        red,
        green,
        blue,
    };
};

export const rgba = (red: number, green: number, blue: number, alpha: number): IColor => {
    return {
        red,
        green,
        blue,
        alpha,
    };
};

export const hsl = (hue: number, saturation: number, lightness: number): IColor => {
    return `hsl(${hue},${saturation}%,${lightness}%)`;
};

export const hsla = (hue: number, saturation: number, lightness: number, alpha: number): IColor => {
    return `hsla(${hue},${saturation}%,${lightness}%, ${alpha})`;
};
