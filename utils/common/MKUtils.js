(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/common/MKUtils.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8b4a51LnVBEtbfmdo9w5aIP', 'MKUtils', __filename);
// Script/common/MKUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("../data/DataManager");
var configsFile_1 = require("../data/configsFile");
var Constant_1 = require("./Constant");
var SingleGameLogic_1 = require("../logic/GamesLogic/SingleGameLogic");
var MKSound_1 = require("../../Script/common/MKSound");
exports.TimeFormat_t = cc.Enum({
    TimeFormatYYYYMMDDHHmm: 0,
    TimeFormatYYYYMMDDHHmmss: 1,
    TimeFormatMMDDHHmm: 2,
    TimeFormatMMDDHHmmss: 3,
    TimeFormatDDHHmm: 4,
    TimeFormatHHmm: 5,
    TimeFormatHHmmss: 6,
    TimeFormatMMDD: 7,
    TimeForMatYYYYMMDD: 8,
});
var MKUtils = /** @class */ (function () {
    function MKUtils() {
    }
    /**
 * 获取平台
 */
    MKUtils.isNative = function () {
        return (cc.sys.isNative) && (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_ANDROID);
    };
    MKUtils.isIOS = function () {
        return (cc.sys.isNative) && (cc.sys.os == cc.sys.OS_IOS);
    };
    MKUtils.isWechatGame = function () {
        return (cc.sys.platform == cc.sys.WECHAT_GAME);
    };
    MKUtils.isAndroid = function () {
        return (cc.sys.isNative) && (cc.sys.os == cc.sys.OS_ANDROID);
    };
    MKUtils.prototype.WX_ThreeKingFun_qinttf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    /**
    动态加载图片
    @param spNode 加载图片的对象 spnode
    @param spLstPath 合图图集的地址 （放到resource下）
    @param spriteName 图片在合图中的名字.
    */
    MKUtils.addSprite_wx_ThreeKing_Pic = function (spNode, spPath) {
        if (spNode == null || spPath.length == 0) {
            cc.log("MKUtils : addSprite_wx_ThreeKing_Pic  Para is ERROR!");
            return;
        }
        cc.loader.loadRes(spPath, cc.SpriteFrame, function (err, spFrame) {
            spNode.getComponent(cc.Sprite).spriteFrame = spFrame;
        });
    };
    MKUtils.prototype.WX_ThreeKingFun_qintt43f = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    //根据节点查找子组件
    MKUtils.findNode_wx_ThreeKing_ByName = function (root, name) {
        if (root) {
            var widget = root.getChildByName(name);
            if (widget) {
                return widget;
            }
            else {
                var children = root.children;
                for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                    var c = children_1[_i];
                    widget = MKUtils.findNode_wx_ThreeKing_ByName(c, name);
                    if (widget) {
                        return widget;
                    }
                }
                return null;
            }
        }
    };
    MKUtils.prototype.WX_ThreeKingFun_qinttkkf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    // 随机数生成
    MKUtils.getRandomInt = function (min, max) {
        var Range = max - min;
        var Rand = Math.random();
        return (min + Math.round(Rand * Range));
    };
    /**
    动态加载图片从合图中
    @param spNode 加载图片的对象 spnode
    @param spLstPath 合图图集的地址 （放到resource下）
    @param spriteName 图片在合图中的名字.
    */
    MKUtils.addSprite_wx_ThreeKing_PicFromImgLst = function (spNode, spLstPath, spriteName) {
        if (spNode == null || spLstPath.length == 0 || spriteName.length == 0) {
            cc.log("MKUtils : addSprite_wx_ThreeKing_PicFromImgLst  Para is ERROR!");
            return;
        }
        cc.loader.loadRes(spLstPath, cc.SpriteAtlas, function (err, spFrameLst) {
            var spFrame = spFrameLst.getSpriteFrame(spriteName);
            spNode.getComponent(cc.Sprite).spriteFrame = spFrame;
        });
    };
    MKUtils.prototype.WX_ThreeKingFun_qinthy = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    // 获取请求url的参数
    MKUtils.getUrlParams = function () {
        if (configsFile_1.Sina_Config.GameType >= Constant_1.default.GameType.WX_XYX) {
            return {};
        }
        var url = location.search || "";
        var params = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                params[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return params;
    };
    MKUtils.getUrlParamByName = function (typeName) {
        var params = this.getUrlParams();
        if (params && params[typeName]) {
            return params[typeName];
        }
        return null;
    };
    MKUtils.prototype.WX_ThreeKingFun_qinyef = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    /**
    获取URL参数
    */
    // public static getUrlPara() {
    //     let searchHref = window.location.search.replace('?', '');
    //     let params = searchHref.split('&');
    //     let returnParam = {};
    //     params.forEach(function(param) {
    //         let paramSplit = param.split('=');
    //             returnParam[paramSplit[0]] = paramSplit[1];
    //     });
    //     return returnParam;
    // }
    //获取屏幕显示区域尺寸
    MKUtils.getShowSize = function () {
        var canvasSize = cc.view.getCanvasSize();
        var winSize = cc.winSize;
        var showSize = cc.size(winSize.width, winSize.height);
        var canvasPro = canvasSize.width / canvasSize.height;
        var winPro = winSize.width / winSize.height;
        if (canvasPro > winPro) {
            showSize.width = winSize.height * canvasPro;
        }
        else {
            showSize.height = winSize.width / canvasPro;
        }
        return showSize;
    };
    //获取显示区域和设计尺寸的宽高比例
    MKUtils.getShowScale = function () {
        var showSize = MKUtils.getShowSize();
        var winSize = cc.winSize;
        return cc.v2(showSize.width / winSize.width, showSize.height / winSize.height);
    };
    MKUtils.playScaleAni = function (parent) {
        //界面layout 尺寸从80%到110%再回到100%
        if (!parent) {
            return;
        }
        var preScale = parent.getScale();
        parent.scale = preScale * 0.3;
        parent.runAction(cc.scaleTo(0.2, preScale * 1).easing(cc.easeBackOut()));
        // let scale1 = cc.scaleTo(0.2,preScale*1.3);
        // let scale2 = cc.scaleTo(0.2,preScale*1);
        // parent.runAction(cc.sequence(scale1,scale2));
    };
    MKUtils.prototype.WX_ThreeKingFun_qinthyh = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    MKUtils.playBlackBgAct = function (blackBg) {
        if (!blackBg) {
            return;
        }
        var preOpacity = blackBg.opacity;
        blackBg.opacity = 0;
        blackBg.runAction(cc.fadeTo(0.2, preOpacity));
    };
    MKUtils.playDialogAct = function (blackBg, baseNode) {
        MKUtils.playBlackBgAct(blackBg);
        MKUtils.playScaleAni(baseNode);
    };
    //
    MKUtils.btnScaleAct = function (btn, scale) {
        if (!btn) {
            return;
        }
        btn.stopAllActions();
        var preScale = scale || btn.getScale();
        btn.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.2, 1.13 * preScale), cc.scaleTo(0.2, 1 * preScale), cc.delayTime(0.6))));
    };
    MKUtils.prototype.WX_ThreeKingFun_qintthytf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    //按钮点击缩放，btn为触摸的node，icon为缩放效果node
    MKUtils.btnEffect1 = function (btn, icon, scaleX, scaleY) {
        if (!icon) {
            icon = btn;
        }
        var preScaleX = btn.scaleX;
        var preScaleY = btn.scaleY;
        if (scaleX) {
            preScaleX = scaleX;
        }
        if (scaleY) {
            preScaleY = scaleY;
        }
        btn.on(cc.Node.EventType.TOUCH_START, function (e) {
            icon.setScale(preScaleX * 1.1, preScaleY * 1.1);
        }.bind(btn), btn);
        btn.on(cc.Node.EventType.TOUCH_END, function (e) {
            icon.setScale(preScaleX, preScaleY);
        }.bind(btn), btn);
        btn.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
            icon.setScale(preScaleX, preScaleY);
        }.bind(btn), btn);
    };
    MKUtils.prototype.WX_ThreeKingFun_qintthhf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    //返回大厅
    MKUtils.backGameHome = function (scale) {
        var prefabUrl = "public/prefabs/SmallGameExit";
        cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
            //检查资源加载
            if (errorMessage) {
                cc.log('载入预制资源失败, 原因:' + errorMessage);
                return;
            }
            if (!(loadedResource instanceof cc.Prefab)) {
                cc.log('你载入的不是预制资源!');
                return;
            }
            //开始实例化预制资源
            var prefab = cc.instantiate(loadedResource);
            if (scale) {
                prefab.scale = scale;
            }
            prefab.setPosition(360, 640);
            cc.director.getScene().addChild(prefab);
        });
    };
    MKUtils.prototype.WX_ThreeKingFun_qinttllf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    // 名字最大长度截取
    MKUtils.nameMaxCut = function (input, maxLen) {
        var output = "";
        var strlen = 0;
        for (var i = 0; i < input.length; i++) {
            var ch = input[i];
            if (ch.charCodeAt(0) > 255) //如果是汉字，则字符串长度加2
             {
                strlen += 2;
            }
            else {
                strlen++;
            }
            if (strlen <= maxLen) {
                output += ch;
            }
        }
        if (strlen > maxLen) {
            return output += "...";
        }
        return output;
    };
    //结算
    MKUtils.showGameResult = function (node, scale) {
        var prefabUrl = "public/prefabs/Result_new";
        cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
            //检查资源加载
            if (errorMessage) {
                cc.log('载入预制资源失败, 原因:' + errorMessage);
                return;
            }
            if (!(loadedResource instanceof cc.Prefab)) {
                cc.log('你载入的不是预制资源!');
                return;
            }
            //开始实例化预制资源
            var prefab = cc.instantiate(loadedResource);
            if (scale) {
                prefab.scale = scale;
            }
            prefab.setPosition(0, 0);
            node.addChild(prefab);
        });
    };
    MKUtils.prototype.WX_ThreeKingFun_qinttlslf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    //tips 1.5s消失 str:自定义话语
    MKUtils.errorTips = function (str, showTime, closeAct) {
        if (!showTime) {
            showTime = 1.5;
        }
        var prefabUrl = "public/prefabs/tipsNode";
        cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
            //检查资源加载
            if (errorMessage) {
                cc.log('载入预制资源失败, 原因:' + errorMessage);
                return;
            }
            if (!(loadedResource instanceof cc.Prefab)) {
                cc.log('你载入的不是预制资源!');
                return;
            }
            //开始实例化预制资源
            var prefab = cc.instantiate(loadedResource);
            prefab.setPosition(0, 20);
            prefab.getComponent("TipsScene").initTipsValue(str);
            cc.director.getScene().addChild(prefab, 9999);
            prefab.setPosition(cc.v2(360, 640));
            if (!closeAct) {
                MKUtils.playScaleAni(prefab);
            }
            prefab.runAction(cc.sequence(cc.delayTime(showTime), cc.callFunc(function () {
                prefab.removeFromParent();
            })));
        });
    };
    //获取当前系统时间戳(秒)
    MKUtils.getCurOsTime = function () {
        var curTime = new Date();
        return Math.floor(curTime.getTime() / 1000);
    };
    MKUtils.getCurOsMillisecond = function () {
        var curTime = new Date();
        return curTime.getTime();
    };
    MKUtils.prototype.WX_ThreeKingFun_qin77ttf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    //生成n-m随机数  包括n和m
    MKUtils.randomNM = function (n, m) {
        return n + Math.floor(Math.random() * (m - n + 1));
    };
    //是否积分渠道
    MKUtils.isCreditChannel = function () {
        return (DataManager_1.default.getInstance().userData.playerFlag == 1);
    };
    MKUtils.isWXGame = function () {
        return configsFile_1.Sina_Config.GameType >= Constant_1.default.GameType.WX_XYX;
    };
    //和isWXGame方法区别：开发阶段功能区别
    MKUtils.isWXGameFun = function () {
        return configsFile_1.Sina_Config.GameType >= Constant_1.default.GameType.WX_XYX;
    };
    MKUtils.isWxReview = function () {
        var wxReview = DataManager_1.default.getInstance().getCommonConfigByItem("wxReview");
        return (wxReview && (wxReview == 1));
    };
    MKUtils.prototype.WX_ThreeKingFun_qint65tf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    //获取离线奖励  游戏type
    MKUtils.getOfflinePro = function (gametype, callFunc, runActionCall) {
        //奖励数量
        var lst = SingleGameLogic_1.default.getInstance().getStartData();
        cc.log("离线收益 getOfflinePro = ", lst.sendStone);
        if (lst.sendStone > 0) {
            var prefabUrl = "offLine/offLineProfit";
            cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
                if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                }
                var prefab = cc.instantiate(loadedResource);
                prefab.setPosition(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2));
                var layer = prefab.getComponent("OffLineProfitLayer");
                layer.updateBgbyGameType(gametype);
                layer.playAniNode();
                cc.director.getScene().addChild(prefab, 9);
                var touchSprite = prefab.getChildByName("touchSprite");
                touchSprite.setContentSize(MKUtils.getShowSize());
                var numLabel = prefab.getChildByName("profitBg").getChildByName("numLabel").getComponent(cc.Label);
                numLabel.string = "+" + lst.sendStone;
                var btn = prefab.getChildByName("profitBg").getChildByName("button").getComponent(cc.Button);
                btn.node.on(cc.Node.EventType.TOUCH_END, function (e) {
                    cc.log("领取离线收益");
                    prefab.removeFromParent();
                    prefab = null;
                    callFunc();
                    if (runActionCall) {
                        runActionCall();
                    }
                }.bind(this), this);
                var moneySound = prefab.getComponent(cc.AudioSource);
                cc.audioEngine.play(moneySound.clip, false, 1);
            }.bind(this));
        }
        else {
            cc.log("收益不够");
            //收益不够 继续执行readygo 动作
            callFunc();
        }
    };
    MKUtils.prototype.WX_ThreeKingFun_qinttgtf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    //显示跑马灯
    MKUtils.showBroad = function (pos, id) {
        DataManager_1.default.getInstance().setHomeShowBroad(true);
        var w = MKUtils.getShowSize().width;
        var h = MKUtils.getShowSize().height;
        var prefabUrl = "public/prefabs/broad_node";
        cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
            //检查资源加载
            if (errorMessage) {
                cc.log('载入预制资源失败, 原因:' + errorMessage);
                return;
            }
            if (!(loadedResource instanceof cc.Prefab)) {
                cc.log('你载入的不是预制资源!');
                return;
            }
            //开始实例化预制资源
            var prefab = cc.instantiate(loadedResource);
            if (pos) {
                prefab.setPosition(pos);
            }
            else {
                prefab.setPosition(cc.v2(w, h - 40));
            }
            var broadCom = prefab.getComponent("GameBroadCast");
            if (broadCom) {
                if (id == 1) {
                    broadCom.showBroad(id);
                }
                else {
                    broadCom.showBroad();
                }
            }
            cc.director.getScene().addChild(prefab, 999);
        });
    };
    MKUtils.prototype.WX_ThreeKingFun_qinthyttf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    MKUtils.twoPointDistance = function (pos1, pos2) {
        var x1 = pos1.x; // 第一个点的横坐标
        var y1 = pos1.y; // 第一个点的纵坐标
        var x2 = pos2.x; // 第二个点的横坐标
        var y2 = pos2.y; // 第二个点的纵坐标
        var xdiff = x2 - x1; // 计算两个点的横坐标之差
        var ydiff = y2 - y1; // 计算两个点的纵坐标之差
        return Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5); // 计算两点之间的距离，并将结果返回表单元素
    };
    MKUtils.prototype.WX_ThreeKingFun_qin54ttf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    MKUtils.loadPrefab = function (prefabUrl, successCallback, failCallback) {
        var prefab = cc.loader.getRes(prefabUrl, cc.Prefab);
        if (prefab && prefab != null) {
            successCallback(prefab);
        }
        else {
            cc.loader.loadRes(prefabUrl, function (errorMessage, downPrefab) {
                if (errorMessage) {
                    cc.log("load " + prefabUrl + " error : " + errorMessage);
                    if (failCallback) {
                        failCallback();
                    }
                    return;
                }
                successCallback(downPrefab);
            }.bind(this));
        }
    };
    MKUtils.loadSpriteFrame = function (frameUrl, successCallback, failCallback) {
        var spriteFrame = cc.loader.getRes(frameUrl, cc.SpriteFrame);
        if (spriteFrame && spriteFrame != null) {
            successCallback(spriteFrame);
        }
        else {
            cc.loader.loadRes(frameUrl, cc.SpriteFrame, function (err, downSpriteFrame) {
                if (err) {
                    cc.log("load " + frameUrl + " error : " + err);
                    if (failCallback) {
                        failCallback();
                    }
                    return;
                }
                successCallback(downSpriteFrame);
            }.bind(this));
        }
    };
    MKUtils.prototype.WX_ThreeKingFun_qint54tf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    MKUtils.appendDateString = function (timestamp, format) {
        var time = new Date(timestamp * 1000);
        switch (format) {
            case exports.TimeFormat_t.TimeFormatYYYYMMDDHHmm:
                return time.getFullYear() + '-' + this.add0(time.getMonth() + 1) + '-' + this.add0(time.getDate()) + ' ' + this.add0(time.getHours()) + ':' + this.add0(time.getMinutes());
                break;
            case exports.TimeFormat_t.TimeFormatYYYYMMDDHHmmss:
                return time.getFullYear() + '-' + this.add0(time.getMonth() + 1) + '-' + this.add0(time.getDate()) + ' ' + this.add0(time.getHours()) + ':' + this.add0(time.getMinutes()) + ':' + this.add0(time.getSeconds());
                break;
            case exports.TimeFormat_t.TimeFormatMMDDHHmm:
                return this.add0(time.getMonth() + 1) + '-' + this.add0(time.getDate()) + ' ' + this.add0(time.getHours()) + ':' + this.add0(time.getMinutes());
                break;
            case exports.TimeFormat_t.TimeFormatMMDDHHmmss:
                return this.add0(time.getMonth() + 1) + '-' + this.add0(time.getDate()) + ' ' + this.add0(time.getHours()) + ':' + this.add0(time.getMinutes()) + ':' + this.add0(time.getSeconds());
                break;
            case exports.TimeFormat_t.TimeFormatDDHHmm:
                return this.add0(time.getDate()) + ' ' + this.add0(time.getHours()) + ':' + this.add0(time.getMinutes());
                break;
            case exports.TimeFormat_t.TimeFormatHHmm:
                return this.add0(time.getHours()) + ':' + this.add0(time.getMinutes());
                break;
            case exports.TimeFormat_t.TimeFormatMMDD:
                return this.add0(time.getMonth() + 1) + '-' + this.add0(time.getDate());
                break;
            case exports.TimeFormat_t.TimeFormatHHmmss:
                return this.add0(time.getHours()) + ':' + this.add0(time.getMinutes()) + ':' + this.add0(time.getSeconds());
                break;
            case exports.TimeFormat_t.TimeForMatYYYYMMDD:
                return time.getFullYear() + '-' + this.add0(time.getMonth() + 1) + '-' + this.add0(time.getDate());
                break;
            default:
                break;
        }
    };
    MKUtils.add0 = function (m) {
        return m < 10 ? '0' + m : m;
    };
    MKUtils.prototype.WX_ThreeKingFun_qintt998f = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    //statusMinute 分钟
    MKUtils.timeStamp = function (statusMinute) {
        //cc.log("MKUtils tempTime = ",statusMinute +"秒");
        var day = parseInt((statusMinute / 60 / 60 / 24).toString());
        var hour = parseInt((statusMinute / 60 / 60 % 24).toString());
        var min = parseInt((statusMinute / 60 % 60).toString());
        var second = parseInt((statusMinute % 60).toString());
        var tempTime = "";
        var h = 0;
        if (day > 0) {
            h = day * 24;
        }
        if (hour > 0) {
            // tempTime += (hour + h) + "小时";
            tempTime += this.add0((hour + h)) + ":";
        }
        if (min > 0) {
            // tempTime += parseFloat(min.toString()) + "分钟";
            if (second == 0) {
                tempTime += this.add0(parseFloat(min.toString())) + ":00";
            }
            else {
                tempTime += this.add0(parseFloat(min.toString())) + ":";
            }
        }
        if (second > 0) {
            if (min == 0) {
                tempTime += "00:" + this.add0(parseFloat(second.toString())) + "";
            }
            else {
                tempTime += this.add0(parseFloat(second.toString()));
            }
            // tempTime += parseFloat(second.toString()) + "秒";
        }
        //cc.log("MKUtils tempTime = ",tempTime);
        return tempTime;
    };
    // 异步加载音效
    MKUtils.loadSoundEffect = function (soundUrl) {
        var havePlay = false;
        var audio = cc.loader.getRes(soundUrl, cc.AudioClip);
        if (audio && audio != null) {
            MKSound_1.default.play_wx_ThreeKing_SFX(audio);
        }
        else {
            cc.loader.loadRes(soundUrl, cc.AudioClip, function (err, downAudio) {
                if (err) {
                    cc.log("load " + soundUrl + " error : " + err);
                    return;
                }
                if (!havePlay) {
                    MKSound_1.default.play_wx_ThreeKing_SFX(downAudio);
                }
                havePlay = true;
            }.bind(this));
        }
    };
    // 异步加载背景音乐
    MKUtils.loadSoundMusic = function (soundUrl) {
        var havePlay = false;
        var audio = cc.loader.getRes(soundUrl, cc.AudioClip);
        if (audio && audio != null) {
            MKSound_1.default.play_wx_ThreeKing_BGM(audio);
        }
        else {
            cc.loader.loadRes(soundUrl, cc.AudioClip, function (err, downAudio) {
                if (err) {
                    cc.log("load " + soundUrl + " error : " + err);
                    return;
                }
                if (!havePlay) {
                    MKSound_1.default.play_wx_ThreeKing_BGM(downAudio);
                }
                havePlay = true;
            }.bind(this));
        }
    };
    MKUtils.prototype.WX_ThreeKingFun_qintmmtf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    // 预加载音效
    MKUtils.preLoadSoundEffect = function (prefabUrl, successCallback, failCallback) {
        cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
            //检查资源加载
            if (errorMessage) {
                cc.log('载入预制资源失败, 原因:' + errorMessage);
                failCallback();
                return;
            }
            if (!(loadedResource instanceof cc.AudioClip)) {
                cc.log('你载入的不是声音资源!');
                return;
            }
            //开始实例化预制资源
            successCallback();
        }.bind(this));
    };
    MKUtils.shuffle = function (aArr) {
        var iLength = aArr.length, i = iLength, mTemp, iRandom;
        while (i--) {
            if (i !== (iRandom = Math.floor(Math.random() * iLength))) {
                mTemp = aArr[i];
                aArr[i] = aArr[iRandom];
                aArr[iRandom] = mTemp;
            }
        }
        return aArr;
    };
    MKUtils.formatHeightNumber = function (height) {
        if (height <= 0) {
            return "0";
        }
        height = height.toFixed(2);
        var pointNum = Math.floor(100 * (height - Math.floor(height)));
        var str = MKUtils.cutHeightNum(height);
        if (pointNum <= 9) {
            str = str + "." + "0" + pointNum;
        }
        else {
            str = str + "." + pointNum;
        }
        return str;
    };
    MKUtils.cutHeightNum = function (num) {
        num = Math.floor(num);
        if (num <= 0) {
            return "";
        }
        else if (num <= 999) {
            return "" + num;
        }
        else {
            var a = Math.floor(num / 1000);
            var b = num - 1000 * a;
            var bStr = "";
            if (b <= 9) {
                bStr = "00" + b;
            }
            else if (b <= 99) {
                bStr = "0" + b;
            }
            else {
                bStr = "" + b;
            }
            return "" + MKUtils.cutHeightNum(a) + "," + bStr;
        }
    };
    MKUtils.tranNumE = function (num) {
        if (num < 1000000) {
            return "" + num;
        }
        else {
            num = Math.floor(num);
            var numLength = 0;
            var numTemp = num;
            for (var i = 0; i < 100; i++) {
                if (numTemp >= 1) {
                    numLength = numLength + 1;
                }
                else {
                    break;
                }
                numTemp = numTemp / 10;
            }
            var ten = 1;
            for (var i = 0; i < numLength - 1; i++) {
                ten = ten * 10;
            }
            var a = num / ten;
            var b = Math.floor(a * 100) / 100;
            var c = "" + ((numLength - 1) <= 9 ? "0" : "") + (numLength - 1);
            return "" + b + "e+" + c;
        }
    };
    MKUtils.setCookie = function (key, value) {
        if (!MKUtils.isWXGame()) {
            // setcookie(key, value)
        }
        // let Days = 30
        // let exp  = new Date()
        // exp.setTime(exp.getTime() + Days*24*60*60*1000)
        // document.cookie = ";path=/;update.qp.games.weibo.com;" + key + "="+ escape (value) + ";expires=" + exp.toTimeString()
    };
    MKUtils.prototype.WX_ThreeKingFun_qint432tf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    //str 需要截断的字符串
    //maxChars 保留的汉字长度
    //suffix 添加的后缀 （注意，如果后缀不为null或者'' ，则要占用一个汉字的位置,具体看下方的示例代码)
    // var str = '测试代码展示;
    // strClamp(str,3,'...') // 得到 测试...
    // strClamp(str,3,'') // 得到 测试代
    MKUtils.strClamp = function (str, maxChars, suffix) {
        var toCodePoint = function (unicodeSurrogates) {
            var r = [], c = 0, p = 0, i = 0;
            while (i < unicodeSurrogates.length) {
                var pos = i;
                c = unicodeSurrogates.charCodeAt(i++); //返回位置的字符的 Unicode 编码 
                if (c == 0xfe0f) {
                    continue;
                }
                if (p) {
                    var value = (0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00));
                    r.push({
                        v: value,
                        pos: pos,
                    }); //计算4字节的unicode
                    p = 0;
                }
                else if (0xD800 <= c && c <= 0xDBFF) {
                    p = c; //如果unicode编码在oxD800-0xDBff之间，则需要与后一个字符放在一起
                }
                else {
                    r.push({
                        v: c,
                        pos: pos
                    }); //如果是2字节，直接将码点转为对应的十六进制形式
                }
            }
            return r;
        };
        suffix = suffix == null ? '...' : suffix;
        maxChars *= 2;
        var codeArr = toCodePoint(str);
        var numChar = 0;
        var index = 0;
        for (var i = 0; i < codeArr.length; ++i) {
            var code = codeArr[i].v;
            var add = 1;
            if (code >= 128) {
                add = 2;
            }
            //如果超过了限制，则按上一个为准
            if (numChar + add > maxChars) {
                break;
            }
            index = i;
            //累加
            numChar += add;
        }
        if (codeArr.length - 1 == index) {
            return str;
        }
        var more = suffix ? 1 : 0;
        return str.substring(0, codeArr[index - more].pos + 1) + suffix;
    };
    return MKUtils;
}());
exports.default = MKUtils;

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
        //# sourceMappingURL=MKUtils.js.map
        