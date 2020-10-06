"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var KeywordGenerator = (function () {
    function KeywordGenerator(wish) {
        if (wish === void 0) { wish = 'I wish you good luck!'; }
        this.wish = wish;
        this.count = function (keys) { return keys.map(function (i) { return i.filter(function (j) { return j !== ''; }).length; }).reduce(function (a, b) { return [a[0] * b, (a[0] * b) + a[1]]; }, [1, 0])[1]; };
        this.createBlobUrl = function (text, type) {
            if (type === void 0) { type = 'text/plain'; }
            return window.URL.createObjectURL(new Blob([text], { type: type }));
        };
        this.wish = true;
    }
    KeywordGenerator.prototype.generate = function (keys) {
        var accumulator = [];
        var result = [];
        var recursion = function (arr1, arr2) {
            var res = [];
            if (arr1.length === 0)
                return arr2;
            for (var i = 0; i < arr1.length; i++) {
                for (var j = 0; j < arr2.length; j++) {
                    res.push(arr1[i] + " " + arr2[j]);
                }
            }
            return res;
        };
        for (var i = 0; i < keys.length; i++) {
            var recres = recursion(accumulator, keys[i].filter(function (j) { return j !== ''; }));
            accumulator = __spreadArrays(recres);
            result = __spreadArrays(result, accumulator);
        }
        return result;
    };
    return KeywordGenerator;
}());
//# sourceMappingURL=keygen.js.map