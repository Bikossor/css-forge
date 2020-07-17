import { CSSForge } from "./Forge";
import { hsl } from "./Forge/DataType/Color";
import { rem, px } from "./Forge/DataType/Distance";

const test = CSSForge.div({
    width: px(200),
    height: px(32),
    backgroundColor: hsl(50, 60, 65),
    padding: rem(2),
    zIndex: 10,
    
});

console.log(test);
