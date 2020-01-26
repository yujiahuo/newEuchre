var BiddingTestAI = /** @class */ (function () {
    function BiddingTestAI(orderUp, trump, goAlone, discard) {
        this.__orderUp = orderUp;
        this.__discard = discard || null;
        this.__trump = trump;
        this.__goAlone = goAlone;
    }
    //tslint:disable-next-line:no-empty
    BiddingTestAI.prototype.init = function () { };
    BiddingTestAI.prototype.chooseOrderUp = function () {
        return this.__orderUp;
    };
    BiddingTestAI.prototype.pickDiscard = function () {
        return this.__discard;
    };
    BiddingTestAI.prototype.pickTrump = function () {
        return this.__trump;
    };
    BiddingTestAI.prototype.chooseGoAlone = function () {
        return this.__goAlone;
    };
    return BiddingTestAI;
}());
//# sourceMappingURL=BiddingTestAI.js.map