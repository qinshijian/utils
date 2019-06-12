(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/common/MKSound.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '71adetEdrhHPYRz39K+zsEM', 'MKSound', __filename);
// Script/common/MKSound.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MKSound = /** @class */ (function () {
    function MKSound() {
        // var t = cc.sys.localStorage.getItem("bgmVolume");
        // if(t != null){
        //     this.bgmVolume = parseFloat(t);    
        // }
        // var t = cc.sys.localStorage.getItem("sfxVolume");
        // if(t != null){
        //     this.sfxVolume = parseFloat(t);    
        // }
        cc.game.on(cc.game.EVENT_HIDE, function () {
            console.log("cc.audioEngine.pauseAll");
            cc.audioEngine.pauseAll();
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            console.log("cc.audioEngine.resumeAll");
            cc.audioEngine.resumeAll();
        });
    }
    MKSound.prototype.WX_ThreeKingFun_qingg44f = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    /**
     * 播放背景音乐
     * @param url
     */
    MKSound.play_wx_ThreeKing_BGM = function (audioUrl) {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.stop(this.bgmAudioID);
        }
        this.bgmAudioID = cc.audioEngine.play(audioUrl, true, this.bgmVolume);
    };
    MKSound.prototype.WX_ThreeKingFun_qing22g44f = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    /**
     * 播放音效
     * @param url
     */
    MKSound.play_wx_ThreeKing_SFX = function (audioUrl) {
        // var audioUrl = this.getUrl(url);
        if (this.sfxVolume > 0) {
            this.effAudioID = cc.audioEngine.play(audioUrl, false, this.sfxVolume);
        }
    };
    //停止播放
    MKSound.stopSFX = function () {
        if (this.sfxVolume > 0) {
            cc.audioEngine.stopAll();
        }
    };
    MKSound.prototype.WX_ThreeKingFun_qingg4hh4f = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    //停止播放
    MKSound.pause_wx_ThreeKing_All = function () {
        if (this.sfxVolume > 0) {
            cc.audioEngine.pauseAll();
        }
    };
    MKSound.setSFX_wx_ThreeKing_Volume = function (v) {
        if (this.sfxVolume != v) {
            cc.sys.localStorage.setItem("sfxVolume", v);
            this.sfxVolume = v;
        }
    };
    MKSound.prototype.WX_ThreeKingFun_qingghf = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    MKSound.setBGM_wx_ThreeKing_Volume = function (v, force) {
        if (this.bgmAudioID >= 0) {
            if (v > 0) {
                cc.audioEngine.resume(this.bgmAudioID);
            }
            else {
                cc.audioEngine.pause(this.bgmAudioID);
            }
            cc.audioEngine.setVolume(this.bgmAudioID, this.bgmVolume);
        }
        if (this.bgmVolume != v || force) {
            cc.sys.localStorage.setItem("bgmVolume", v);
            this.bgmVolume = v;
            cc.audioEngine.setVolume(this.bgmAudioID, v);
        }
    };
    MKSound.prototype.WX_ThreeKingFun_qin32w4f = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    MKSound.pause_wx_ThreeKing_BGM = function () {
        cc.audioEngine.pause(this.bgmAudioID);
    };
    MKSound.resume_wx_ThreeKing_BGM = function () {
        cc.audioEngine.resume(this.bgmAudioID);
    };
    MKSound.pause_wx_ThreeKing_Eff = function () {
        cc.audioEngine.pause(this.effAudioID);
    };
    MKSound.resume_wx_ThreeKing_Eff = function () {
        cc.audioEngine.resume(this.effAudioID);
    };
    MKSound.prototype.WX_ThreeKingFun_qinlif = function () {
        var aaa = 1;
        var bbb = 2;
        var ccc = 3;
        cc.log("aaa + bbb = ", aaa + bbb);
        return aaa + bbb + ccc;
    };
    MKSound.bgmVolume = 1.0;
    MKSound.sfxVolume = 1.0;
    MKSound.bgmAudioID = -1;
    MKSound.effAudioID = -1;
    return MKSound;
}());
exports.default = MKSound;

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
        //# sourceMappingURL=MKSound.js.map
        