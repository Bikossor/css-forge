import { IColor } from "./Interface/IColor";
declare type CssColorName = 
/**
 * CSS Level 1
 */
'black' | 'silver' | 'gray' | 'white' | 'maroon' | 'red' | 'purple' | 'fuchsia' | 'green' | 'lime' | 'olive' | 'yellow' | 'navy' | 'blue' | 'teal' | 'aqua' | 
/**
 * CSS Level 2 (Revision 1)
 */
'orange' | 
/**
 * CSS Color Module Level 3
 */
'aliceblue' | 'antiquewhite' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'blanchedalmond' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan';
declare type ColorValue = IColor | CssColorName;
export interface CSSStyle {
    background?: any;
    backgroundAttachment?: any;
    backgroundColor?: ColorValue;
    backgroundImage?: any;
    backgroundPosition?: any;
    backgroundRepeat?: any;
    border?: any;
    borderBottom?: any;
    borderBottomColor?: any;
    borderBottomStyle?: any;
    borderBottomWidth?: any;
    borderColor?: ColorValue;
    borderLeft?: any;
    borderLeftColor?: ColorValue;
    borderLeftStyle?: any;
    borderLeftWidth?: any;
    borderRight?: any;
    borderRightColor?: ColorValue;
    borderRightStyle?: any;
    borderRightWidth?: any;
    borderStyle?: any;
    borderTop?: any;
    borderTopColor?: ColorValue;
    borderTopStyle?: any;
    borderTopWidth?: any;
    borderWidth?: any;
    clear?: any;
    clip?: any;
    color?: ColorValue;
    cursor?: any;
    display?: any;
    filter?: any;
    float?: any;
    font?: any;
    fontFamily?: any;
    fontSize?: any;
    fontVariant?: any;
    fontWeight?: any;
    height?: any;
    left?: any;
    letterSpacing?: any;
    lineHeight?: any;
    listStyle?: any;
    listStyleImage?: any;
    listStylePosition?: any;
    listStyleType?: any;
    margin?: any;
    marginBottom?: any;
    marginLeft?: any;
    marginRight?: any;
    marginTop?: any;
    overflow?: any;
    padding?: any;
    paddingBottom?: any;
    paddingLeft?: any;
    paddingRight?: any;
    paddingTop?: any;
    pageBreakAfter?: any;
    pageBreakBefore?: any;
    position?: any;
    strokeDasharray?: any;
    strokeDashoffset?: any;
    strokeWidth?: any;
    textAlign?: any;
    textDecoration?: any;
    textIndent?: any;
    textTransform?: any;
    top?: any;
    verticalAlign?: any;
    visibility?: any;
    width?: any;
    zIndex?: any;
}
export {};
