"use strict";
// JIMU (WAB) imports:
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
// DeclareDecorator - to enable us to export this module with Dojo's "declare()" syntax so WAB can load it:
var declareDecorator_1 = require("./support/declareDecorator");
// Esri imports:
var FeatureLayer_1 = require("esri/layers/FeatureLayer");
var Query_1 = require("esri/tasks/support/Query");
var Widget = /** @class */ (function () {
    function Widget() {
        this.baseClass = 'my-widget';
    }
    Widget.prototype.postCreate = function (args) {
        var self = this;
        self.inherited(arguments);
        this.widgetWrapper.innerHTML = this.config.demoSetting;
        this.createLayer();
    };
    /**
     * Example of adding a layer to the map, and querying the features.
     */
    Widget.prototype.createLayer = function () {
        var _this = this;
        var layer = new FeatureLayer_1["default"]({
            url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Recreation/FeatureServer/0'
        });
        layer.when(function () {
            _this.queryLayer(layer);
        });
        this.sceneView.map.layers.add(layer);
    };
    Widget.prototype.queryLayer = function (layer) {
        var query = new Query_1["default"]();
        query.where = 'facility = 7';
        query.outFields = ['*'];
        layer.queryFeatures(query).then(function (results) {
            console.log('query results:', results.features);
        });
    };
    Widget = __decorate([
        declareDecorator_1["default"](BaseWidget)
    ], Widget);
    return Widget;
}());
module.exports = Widget;
