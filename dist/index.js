"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Forge_1 = require("./Forge");
var Color_1 = require("./Forge/DataType/Color");
var Distance_1 = require("./Forge/DataType/Distance");
var test = Forge_1.CSSForge.div({
    width: Distance_1.px(200),
    height: Distance_1.px(32),
    backgroundColor: Color_1.hsl(50, 60, 65),
    padding: Distance_1.rem(2),
    zIndex: 10,
});
console.log(test);
