webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"p-2\">\n  <ports-input-component [(ngModel)]=\"portValue\"></ports-input-component>\n  <div>Single Value Support: {{ portValue | json }}</div>\n</div>\n\n<div class=\"p-2\">\n  <ports-input-component [inputType]=\"InputType.MULTI\" [(ngModel)]=\"multiPortValue\"></ports-input-component>\n  <div>Multi value Support: {{ multiPortValue | json }}</div>\n</div>\n\n<div class=\"p-2\">\n  <ports-input-component [inputType]=\"InputType.SINGLE\" [formControl]=\"singleFormControl\"></ports-input-component>\n  <div>Single Form Control Example: {{ singleFormControl.value | json }} {{ 'isValid=' + singleFormControl.valid }}</div>\n</div>\n\n<div class=\"p-2\">\n  <ports-input-component [inputType]=\"InputType.MULTI\" [formControl]=\"multiFormControl\"></ports-input-component>\n  <div>Multi Form Control Example: {{ multiFormControl.value | json }} {{ 'isValid=' + multiFormControl.valid }} {{\n    'Errors=' + (multiFormControl.errors | json) }}</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ports_input_component__ = __webpack_require__("../../../../../src/app/components/ports-input.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Ports Input Control using Custom Form Validator';
        this.InputType = __WEBPACK_IMPORTED_MODULE_2__components_ports_input_component__["a" /* InputType */];
        this.portValue = []; // [ 80 ];
        this.multiPortValue = []; // [90,8080,"443-445"];
        this.singleFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]([90]);
        this.multiFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]([80, 4434]);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ports_input_component__ = __webpack_require__("../../../../../src/app/components/ports-input.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_ports_input_component__["b" /* PortsInputComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/ports-input.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"pb-1\" *ngIf=\"inputType === InputType.SINGLE\">\n  <input class=\"form-control pb-1\" type=\"number\" #singlePort [formControl]=\"singlePortFormCtrl\" placeholder=\"Enter Port\">\n</form>\n<form class=\"pb-1\" *ngIf=\"inputType === InputType.MULTI\">\n  <input class=\"form-control\" type=\"text\" #multiPorts [formControl]=\"multiPortsFormCtrl\" placeholder=\"Enter multiple ports\">\n  <span class=\"small text-muted\">Enter comma separated values</span>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/ports-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PortsInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Custom validator function to check if valid port number or port range is specified
 * @param control Form control
 */
function PortOrPortRangeValidator(required) {
    return function (control) {
        var ports = control.value || '';
        if (required && !ports.length) {
            return { values: ports, required: required };
        }
        if (!required && !ports) {
            return null;
        }
        var invalidPorts = ports.split(',').filter(function (port) {
            // Check if range
            if (!port) {
                return {};
            }
            var portValue = (port && parseInt(port, 10));
            return !(portValue >= 1 && portValue <= 65535);
        });
        return invalidPorts.length ? { values: invalidPorts.join(','), required: required } : null;
    };
}
var InputType;
(function (InputType) {
    InputType[InputType["SINGLE"] = 0] = "SINGLE";
    InputType[InputType["MULTI"] = 1] = "MULTI";
})(InputType || (InputType = {}));
var PortsInputComponent = PortsInputComponent_1 = (function () {
    function PortsInputComponent(fb) {
        var _this = this;
        this.fb = fb;
        this.singlePortFormCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].max(65535)]);
        this.multiPortsFormCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', PortOrPortRangeValidator(true));
        this.InputType = InputType;
        this.inputType = InputType.SINGLE;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.singlePortFormCtrl.valueChanges.subscribe(function (value) {
            var newValue = value && parseInt(value, 10) ? [value] : [];
            _this.onChange(newValue);
            _this.onTouched();
        });
        this.multiPortsFormCtrl.valueChanges.subscribe(function (value) {
            var newValue = (value || '').split(',');
            _this.onChange(newValue);
            _this.onTouched();
        });
    }
    PortsInputComponent.prototype.writeValue = function (value) {
        console.log("Value: ", value);
        this._value = value;
        if (this.singlePortFormCtrl && this.inputType === InputType.SINGLE) {
            var inputValue = (value instanceof Array) && value.length > 0 ? value[0] : '';
            this.singlePortFormCtrl.setValue(value);
        }
        if (this.multiPortsInput && this.inputType === InputType.MULTI) {
            var inputValue = (value || []).join(',');
            this.multiPortsFormCtrl.setValue(inputValue);
        }
    };
    PortsInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PortsInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PortsInputComponent.prototype.validate = function (control) {
        if (this.inputType === InputType.SINGLE) {
            return this.singlePortFormCtrl.valid ? null : this.singlePortFormCtrl.errors;
        }
        if (this.inputType === InputType.MULTI) {
            return this.multiPortsFormCtrl.valid ? null : this.multiPortsFormCtrl.errors;
        }
        return null;
    };
    return PortsInputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], PortsInputComponent.prototype, "inputType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('singlePort'),
    __metadata("design:type", Object)
], PortsInputComponent.prototype, "singlePortInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('multiPorts'),
    __metadata("design:type", Object)
], PortsInputComponent.prototype, "multiPortsInput", void 0);
PortsInputComponent = PortsInputComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ports-input-component',
        template: __webpack_require__("../../../../../src/app/components/ports-input.component.html"),
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
                useExisting: PortsInputComponent_1,
                multi: true
            },
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */],
                useExisting: PortsInputComponent_1,
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], PortsInputComponent);

var PortsInputComponent_1, _a;
//# sourceMappingURL=ports-input.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map