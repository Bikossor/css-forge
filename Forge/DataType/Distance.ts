/**
 * Font size of the element.
 * @param value 
 */
export const em = (value: number): string => `${value}em`;

/**
 * x-height of the element's font.
 * @param value 
 */
export const ex = (value: number): string => `${value}ex`;

/**
 * Cap height (the nominal height of capital letters) of the element's font.
 * @param value 
 */
export const cap = (value: number): string => `${value}cap`;

/**
 * Average character advance of a narrow glyph in the element’s font, as represented by the “0” (ZERO, U+0030) glyph.
 * @param value 
 */
export const ch = (value: number): string => `${value}ch`;

/**
 * Average character advance of a full width glyph in the element’s font, as represented by the “水” (CJK water ideograph, U+6C34) glyph.
 * @param value 
 */
export const ic = (value: number): string => `${value}ic`;

/**
 * Font size of the root element.
 * @param value 
 */
export const rem = (value: number): string => `${value}rem`;

/**
 * Line height of the element.
 * @param value 
 */
export const lh = (value: number): string => `${value}lh`;

/**
 * Line height of the root element.
 * @param value 
 */
export const rlh = (value: number): string => `${value}rlh`;

/**
 * 1% of viewport's width.
 * @param value 
 */
export const vw = (value: number): string => `${value}vw`;

/**
 * 1% of viewport's height.
 * @param value 
 */
export const vh = (value: number): string => `${value}vh`;

/**
 * 1% of viewport's size in the root element's inline axis.
 * @param value 
 */
export const vi = (value: number): string => `${value}vi`;

/**
 * 1% of viewport's size in the root element's block axis.
 * @param value 
 */
export const vb = (value: number): string => `${value}vb`;

/**
 * 1% of viewport's smaller dimension.
 * @param value 
 */
export const vmin = (value: number): string => `${value}vmin`;

/**
 * 1% of viewport's larger dimension.
 * @param value 
 */
export const vmax = (value: number): string => `${value}vmax`;




/**
 * Centimeters (1cm = 96px/2.54)
 * @param value 
 */
export const cm = (value: number): string => `${value}cm`;

/**
 * Millimeters (1mm = 1/10th of 1cm)
 * @param value 
 */
export const mm = (value: number): string => `${value}mm`;

/**
 * Quarter-millimeters (1Q = 1/40th of 1cm)
 * @param value 
 */
export const Q = (value: number): string => `${value}Q`;

/**
 * Inches (1inch = 2.54cm = 96px)
 * @param value 
 */
export const inch = (value: number): string => `${value}in`;

/**
 * Picas (1pc = 1/16th of 1inch)
 * @param value 
 */
export const pc = (value: number): string => `${value}pc`;

/**
 * Points (1pt = 1/72th of 1inch)
 * @param value 
 */
export const pt = (value: number): string => `${value}pt`;

/**
 * Pixels (1px = 1/96th of 1inch)
 * @param value 
 */
export const px = (value: number): string => `${value}px`;
