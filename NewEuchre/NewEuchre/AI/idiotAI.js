/******************************************************
/* Actually it's just lazy
/*******************************************************/
var IdiotAI = /** @class */ (function () {
    function IdiotAI() {
    }
    //tslint:disable-next-line:no-empty
    IdiotAI.prototype.init = function () {
        //just chillin'
    };
    IdiotAI.prototype.chooseOrderUp = function () {
        return false;
    };
    IdiotAI.prototype.pickDiscard = function () {
        return null;
    };
    IdiotAI.prototype.pickTrump = function () {
        return null;
    };
    IdiotAI.prototype.chooseGoAlone = function () {
        return false;
    };
    IdiotAI.prototype.pickCard = function () {
        return null;
    };
    IdiotAI.prototype.trickEnd = function () {
        return;
    };
    return IdiotAI;
}());
//# sourceMappingURL=idiotAI.js.map