"use strict";
var KeywordGenerator = (function () {
    function KeywordGenerator() {
    }
    KeywordGenerator.prototype.generate = function (keys) {
        return ['123', '321'];
    };
    KeywordGenerator.prototype.createBlobUrl = function (text) {
        var blob = new Blob([text], { type: 'text/plain' });
        return window.URL.createObjectURL(blob);
    };
    return KeywordGenerator;
}());
//# sourceMappingURL=keygen.js.map