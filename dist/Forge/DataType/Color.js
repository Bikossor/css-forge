"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgb = function (red, green, blue) {
    return {
        red: red,
        green: green,
        blue: blue,
    };
};
exports.rgba = function (red, green, blue, alpha) {
    return {
        red: red,
        green: green,
        blue: blue,
        alpha: alpha,
    };
};
exports.hsl = function (hue, saturation, lightness) {
    return "hsl(" + hue + "," + saturation + "%," + lightness + "%)";
};
exports.hsla = function (hue, saturation, lightness, alpha) {
    return "hsla(" + hue + "," + saturation + "%," + lightness + "%, " + alpha + ")";
};
