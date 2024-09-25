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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var Registration = /** @class */ (function () {
    function Registration() {
        var _this = this;
        var _a;
        this.registerList = [];
        (_a = document.getElementById('registrasiForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
            event.preventDefault();
            _this.handleSubmit();
        });
    }
    Registration.prototype.handleSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name, age, money, newRegister;
            return __generator(this, function (_a) {
                name = document.getElementById('name').value;
                age = parseInt(document.getElementById('age').value);
                money = parseInt(document.getElementById('money').value);
                newRegister = { name: name, age: age, money: money };
                this.registerList.push(newRegister);
                this.updateTable();
                document.getElementById('registrasiForm').reset();
                return [2 /*return*/];
            });
        });
    };
    Registration.prototype.updateTable = function () {
        var tableBody = document.getElementById('registerTable');
        tableBody.innerHTML = '';
        this.registerList.forEach(function (pendaftar) {
            var row = "<tr>\n                      <td>".concat(pendaftar.name, "</td>\n                      <td>").concat(pendaftar.age, "</td>\n                      <td>").concat(pendaftar.money, "</td>\n                    </tr>");
            tableBody.insertAdjacentHTML('beforeend', row);
        });
        this.updateResume();
    };
    Registration.prototype.updateResume = function () {
        var totalRegister = this.registerList.length;
        if (totalRegister > 0) {
            var totalage = this.registerList.reduce(function (acc, pendaftar) { return acc + pendaftar.age; }, 0);
            var totalmoney = this.registerList.reduce(function (acc, pendaftar) { return acc + pendaftar.money; }, 0);
            var medage = totalage / totalRegister;
            var medmoney = totalmoney / totalRegister;
            var resume = "Rata-rata pendaftar memiliki uang sangu sebesar Rp.".concat(medmoney.toLocaleString(), " dengan rata-rata umur ").concat(medage.toFixed(1), " tahun.");
            document.getElementById('resume').innerText = resume;
        }
    };
    return Registration;
}());
document.addEventListener('DOMContentLoaded', function () {
    var registrationTab = document.getElementById('registration-tab');
    var registerListTab = document.getElementById('register-list-tab');
    var registrationPanel = document.getElementById('registration');
    var registerListPanel = document.getElementById('register-list');
    registrationTab.addEventListener('click', function () {
        registrationPanel.classList.add('active');
        registerListPanel.classList.remove('active');
        registrationTab.classList.add('active');
        registerListTab.classList.remove('active');
    });
    registerListTab.addEventListener('click', function () {
        registerListPanel.classList.add('active');
        registrationPanel.classList.remove('active');
        registerListTab.classList.add('active');
        registrationTab.classList.remove('active');
    });
    new Registration();
});
