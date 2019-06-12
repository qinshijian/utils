(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/common/MKuiPanel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e85bfvsdq9H1phZW+3yy2M9', 'MKuiPanel', __filename);
// Script/common/MKuiPanel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MKuiPanel = /** @class */ (function (_super) {
    __extends(MKuiPanel, _super);
    function MKuiPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeDict = new Array();
        return _this;
    }
    MKuiPanel.prototype.onLoad = function () {
        // node load --
        var linkWidget = function (self, nodeDict) {
            var children = self.children;
            for (var i = 0; i < children.length; i++) {
                var widgetName = children[i].name;
                if (widgetName && widgetName.indexOf("m_") >= 0) {
                    var nodeName = widgetName.substring(2);
                    if (nodeDict[nodeName]) {
                        cc.error("控件名字重复!" + children[i].name);
                    }
                    nodeDict[nodeName] = children[i];
                }
                if (children[i].childrenCount > 0) {
                    linkWidget(children[i], nodeDict);
                }
            }
        }.bind(this);
        linkWidget(this.node, this.nodeDict);
    };
    MKuiPanel.prototype.WX_ThreeKingFun_qinbb = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    MKuiPanel.prototype.showCompleted = function () {
        console.log(this.node.name + "动画播放完毕～");
    };
    MKuiPanel.prototype.show = function () {
        cc.log("uiPanel show");
        this.node.active = true;
    };
    MKuiPanel.prototype.hide = function () {
        cc.log("uiPanel hide");
        this.node.active = false;
    };
    MKuiPanel.prototype.WX_ThreeKingFun_qinbb1 = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    MKuiPanel.prototype.onDestroy = function () {
        if (this.anim) {
            this.anim.off('finished', this.showCompleted, this);
        }
    };
    MKuiPanel.prototype.WX_ThreeKingFun_qinb4b = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    MKuiPanel = __decorate([
        ccclass
    ], MKuiPanel);
    return MKuiPanel;
}(cc.Component));
exports.default = MKuiPanel;

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
        //# sourceMappingURL=MKuiPanel.js.map
        