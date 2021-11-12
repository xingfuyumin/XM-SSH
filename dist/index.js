"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ssh2_1 = require("ssh2");
var XMSSH = /** @class */ (function () {
    function XMSSH(config) {
        var _this = this;
        this.client = null;
        this.sftp = null;
        this.config = null;
        this.exists = function (path) {
            return new Promise(function (resolve, reject) {
                var _a;
                if (!_this.sftp) {
                    reject(new Error("连接失败或已过期"));
                }
                (_a = _this.sftp) === null || _a === void 0 ? void 0 : _a.stat(path, function (err, stats) {
                    if (err) {
                        resolve(false);
                    }
                    resolve(true);
                });
            });
        };
        this.isFile = function (path) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        }); };
        this.createFile = function (path) { };
        this.deleteFile = function (path) { };
        this.readFile = function (path) {
            return "";
        };
        this.writeFile = function (path, content) { };
        this.appendFile = function (path, content) { };
        this.createDir = function (path) { };
        this.deleteDir = function (path) { };
        this.readDir = function (path) {
            return "";
        };
        this.readInfo = function (paths) { };
        this.writeInfo = function (path, k, v) { };
        this.chmod = function (path, v) { };
        this.chown = function (path, v1, v2, v3) { };
        this.close = function () { return new Promise(function (resolve) {
            var _a;
            (_a = _this.client) === null || _a === void 0 ? void 0 : _a.destroy();
            resolve(0);
        }); };
        this.connect = function () {
            return new Promise(function (resolve, reject) {
                if (!_this.config) {
                    reject(new Error("缺少必要链接配置"));
                }
                var conn = new ssh2_1.Client();
                conn.on("ready", function () {
                    conn.sftp(function (err, sftp) {
                        if (err) {
                            reject(err);
                        }
                        _this.sftp = sftp;
                        resolve(0);
                    });
                    _this.client = conn;
                });
                conn.on("error", function (err) {
                    _this.client = null;
                    _this.sftp = null;
                    reject(err);
                });
                conn.connect(_this.config || {});
            });
        };
        this.config = config;
    }
    return XMSSH;
}());
exports.default = XMSSH;
