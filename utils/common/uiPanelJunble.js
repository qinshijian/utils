(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/common/uiPanelJunble.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '496a4wN6RtL16wANYv4emuy', 'uiPanelJunble', __filename);
// Script/common/uiPanelJunble.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var uiPanel = /** @class */ (function (_super) {
    __extends(uiPanel, _super);
    function uiPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeDict = new Array();
        return _this;
    }
    uiPanel.prototype.onLoad = function () {
        // node load --
        this.linkWidget(this.node, this.nodeDict);
    };
    uiPanel.prototype.linkWidget = function (self, nodeDict) {
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
                this.linkWidget(children[i], nodeDict);
            }
        }
    };
    uiPanel.prototype.WX_ThreeKingFun_qinb44b = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    uiPanel.prototype.showCompleted = function () {
        console.log(this.node.name + "动画播放完毕～");
    };
    uiPanel.prototype.show = function () {
        cc.log("uiPanel show");
        this.node.active = true;
    };
    uiPanel.prototype.WX_ThreeKingFun_qinb424b = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    uiPanel.prototype.hide = function () {
        cc.log("uiPanel hide");
        this.node.active = false;
    };
    uiPanel.prototype.onDestroy = function () {
        if (this.anim) {
            this.anim.off('finished', this.showCompleted, this);
        }
    };
    uiPanel.prototype.WX_ThreeKingFun_qinb42114b = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    uiPanel = __decorate([
        ccclass
    ], uiPanel);
    return uiPanel;
}(cc.Component));
exports.default = uiPanel;

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
        //# sourceMappingURL=uiPanelJunble.js.map
        