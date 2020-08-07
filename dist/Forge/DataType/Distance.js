"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Font size of the element.
 * @param value
 */
exports.em = function (value) {
    return {
        value: value,
        unit: 'em',
    };
};
/**
 * x-height of the element's font.
 * @param value
 */
exports.ex = function (value) {
    return {
        value: value,
        unit: 'ex',
    };
};
/**
 * Cap height (the nominal height of capital letters) of the element's font.
 * @param value
 */
exports.cap = function (value) {
    return {
        value: value,
        unit: 'cap',
    };
};
/**
 * Average character advance of a narrow glyph in the element’s font, as represented by the “0” (ZERO, U+0030) glyph.
 * @param value
 */
exports.ch = function (value) {
    return {
        value: value,
        unit: 'ch',
    };
};
/**
 * Average character advance of a full width glyph in the element’s font, as represented by the “水” (CJK water ideograph, U+6C34) glyph.
 * @param value
 */
exports.ic = function (value) {
    return {
        value: value,
        unit: 'ic',
    };
};
/**
 * Font size of the root element.
 * @param value
 */
exports.rem = function (value) {
    return {
        value: value,
        unit: 'rem',
    };
};
/**
 * Line height of the element.
 * @param value
 */
exports.lh = function (value) {
    return {
        value: value,
        unit: 'lh',
    };
};
/**
 * Line height of the root element.
 * @param value
 */
exports.rlh = function (value) {
    return {
        value: value,
        unit: 'rlh',
    };
};
/**
 * 1% of viewport's width.
 * @param value
 */
exports.vw = function (value) {
    return {
        value: value,
        unit: 'vw',
    };
};
/**
 * 1% of viewport's height.
 * @param value
 */
exports.vh = function (value) {
    return {
        value: value,
        unit: 'vh',
    };
};
/**
 * 1% of viewport's size in the root element's inline axis.
 * @param value
 */
exports.vi = function (value) {
    return {
        value: value,
        unit: 'vi',
    };
};
/**
 * 1% of viewport's size in the root element's block axis.
 * @param value
 */
exports.vb = function (value) {
    return {
        value: value,
        unit: 'vb',
    };
};
/**
 * 1% of viewport's smaller dimension.
 * @param value
 */
exports.vmin = function (value) {
    return {
        value: value,
        unit: 'vmin',
    };
};
/**
 * 1% of viewport's larger dimension.
 * @param value
 */
exports.vmax = function (value) {
    return {
        value: value,
        unit: 'vmax',
    };
};
/**
 * Centimeters (1cm = 96px/2.54)
 * @param value
 */
exports.cm = function (value) {
    return {
        value: value,
        unit: 'cm',
    };
};
/**
 * Millimeters (1mm = 1/10th of 1cm)
 * @param value
 */
exports.mm = function (value) {
    return {
        value: value,
        unit: 'mm',
    };
};
/**
 * Quarter-millimeters (1Q = 1/40th of 1cm)
 * @param value
 */
exports.Q = function (value) {
    return {
        value: value,
        unit: 'Q',
    };
};
/**
 * Inches (1inch = 2.54cm = 96px)
 * @param value
 */
exports.inch = function (value) {
    return {
        value: value,
        unit: 'inch',
    };
};
/**
 * Picas (1pc = 1/16th of 1inch)
 * @param value
 */
exports.pc = function (value) {
    return {
        value: value,
        unit: 'pc',
    };
};
/**
 * Points (1pt = 1/72th of 1inch)
 * @param value
 */
exports.pt = function (value) {
    return {
        value: value,
        unit: 'pt',
    };
};
/**
 * Pixels (1px = 1/96th of 1inch)
 * @param value
 */
exports.px = function (value) {
    return {
        value: value,
        unit: 'px',
    };
};
