(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/common/Constant.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8c171ljlZJOaZJ9faMiHtK8', 'Constant', __filename);
// Script/common/Constant.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Constant = /** @class */ (function () {
    function Constant() {
    }
    Constant.prototype.WX_ThreeKingFun_qinwwwfff = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    Constant.prototype.WX_ThreeKingFun_qinww33f = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    Constant.prototype.WX_ThreeKingFun_qin22wfff = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    Constant.prototype.WX_ThreeKingFun_qinggf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    //积分渠道游戏Ids
    Constant.ShowGameIds_WBTASK = [11, 12, 13, 15, 16, 17, 18, 19, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
    Constant.ShowGameIds_OTHER = [11, 12, 13, 15, 16, 17, 18, 19, 33, 34, 36, 37, 38, 41, 42, 43, 44, 45];
    //新游戏标记
    Constant.NewGameIds = [37, 43];
    //火爆游戏
    Constant.HotGameIds = [38];
    Constant.GameType = cc.Enum({
        TEST: 0,
        WB_TASK: 1,
        WB_WYX: 2,
        WB_WALLET: 3,
        WX_XYX: 4,
        BD_XYX: 5,
    });
    Constant.GameEnterType = cc.Enum({
        MATCH: 0,
        DIRECT: 1,
        SINGEL: 2,
    });
    Constant.WXGameItemName = {
        42: "Item_FruitLevel",
        44: "Item_ThreeKingLevel",
        45: "Item_ThrowLevel"
    };
    //单机游戏获取奖励方式类型
    Constant.SingleRewardType = {
        CLOSE: 0,
        AD: 1,
        SHARE: 2
    };
    Constant.SingleActiveType = {
        SIGN: 0,
        OFFLINE: 1
    };
    return Constant;
}());
exports.default = Constant;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Constant.js.map
        