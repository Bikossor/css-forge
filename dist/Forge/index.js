"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropertyMapper_1 = require("./PropertyMapper");
exports.CSSForge = {
    div: function (style) {
        var ruleBody = [];
        for (var key in style) {
            var mappedKey = key in PropertyMapper_1.PropertyMapper
                ? PropertyMapper_1.PropertyMapper[key]
                : key;
            ruleBody.push(mappedKey + ":" + style[key] + ";");
        }
        return "div{" + ruleBody.join('') + "}";
    }
};
