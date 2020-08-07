import { IDistance } from "../Interface/IDistance";
/**
 * Font size of the element.
 * @param value
 */
export declare const em: (value: number) => IDistance;
/**
 * x-height of the element's font.
 * @param value
 */
export declare const ex: (value: number) => IDistance;
/**
 * Cap height (the nominal height of capital letters) of the element's font.
 * @param value
 */
export declare const cap: (value: number) => IDistance;
/**
 * Average character advance of a narrow glyph in the element’s font, as represented by the “0” (ZERO, U+0030) glyph.
 * @param value
 */
export declare const ch: (value: number) => IDistance;
/**
 * Average character advance of a full width glyph in the element’s font, as represented by the “水” (CJK water ideograph, U+6C34) glyph.
 * @param value
 */
export declare const ic: (value: number) => IDistance;
/**
 * Font size of the root element.
 * @param value
 */
export declare const rem: (value: number) => IDistance;
/**
 * Line height of the element.
 * @param value
 */
export declare const lh: (value: number) => IDistance;
/**
 * Line height of the root element.
 * @param value
 */
export declare const rlh: (value: number) => IDistance;
/**
 * 1% of viewport's width.
 * @param value
 */
export declare const vw: (value: number) => IDistance;
/**
 * 1% of viewport's height.
 * @param value
 */
export declare const vh: (value: number) => IDistance;
/**
 * 1% of viewport's size in the root element's inline axis.
 * @param value
 */
export declare const vi: (value: number) => IDistance;
/**
 * 1% of viewport's size in the root element's block axis.
 * @param value
 */
export declare const vb: (value: number) => IDistance;
/**
 * 1% of viewport's smaller dimension.
 * @param value
 */
export declare const vmin: (value: number) => IDistance;
/**
 * 1% of viewport's larger dimension.
 * @param value
 */
export declare const vmax: (value: number) => IDistance;
/**
 * Centimeters (1cm = 96px/2.54)
 * @param value
 */
export declare const cm: (value: number) => IDistance;
/**
 * Millimeters (1mm = 1/10th of 1cm)
 * @param value
 */
export declare const mm: (value: number) => IDistance;
/**
 * Quarter-millimeters (1Q = 1/40th of 1cm)
 * @param value
 */
export declare const Q: (value: number) => IDistance;
/**
 * Inches (1inch = 2.54cm = 96px)
 * @param value
 */
export declare const inch: (value: number) => IDistance;
/**
 * Picas (1pc = 1/16th of 1inch)
 * @param value
 */
export declare const pc: (value: number) => IDistance;
/**
 * Points (1pt = 1/72th of 1inch)
 * @param value
 */
export declare const pt: (value: number) => IDistance;
/**
 * Pixels (1px = 1/96th of 1inch)
 * @param value
 */
export declare const px: (value: number) => IDistance;
