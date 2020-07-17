import { CSSStyle } from "./CSSStyle"
import { PropertyMapper } from "./PropertyMapper";

export const CSSForge = {
    div: (style: CSSStyle) => {
        let ruleBody = [];

        for (const key in style) {

            const mappedKey = key in PropertyMapper
                ? PropertyMapper[key]
                : key;

            ruleBody.push(`${mappedKey}:${style[key]};`);
        }

        return `div{${ruleBody.join('')}}`;
    }
};
