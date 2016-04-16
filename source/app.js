"use strict";
var ng = require("angular");
var App;
(function (App) {
    var AppComponent = (function () {
        function AppComponent() {
            this._appModule = ng.module("app", ["ui.router"]);
            this._appModule.config(function ($locationProvider, $stateProvider, $routeProvider) {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false,
                });
                $routeProvider.otherwise("/");
            });
            ng.bootstrap(document, [this._appModule.name]);
        }
        AppComponent.$inject = ["$routeProvider"];
        return AppComponent;
    }());
    App.AppComponent = AppComponent;
})(App || (App = {}));
