import * as ng from "angular";


namespace App {
    export class AppComponent {
        public static $inject = ["$routeProvider"];
        private _appModule: ng.IModule;
        constructor() {
            this._appModule = ng.module("app", ["ui.router"]);
            this._appModule.config((
                $locationProvider: ng.ILocationProvider,
                $stateProvider: ng.ui.IStateProvider,
                $routeProvider: ng.ui.IUrlRouterProvider) => {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false,
                });
                $routeProvider.otherwise("/");
                // config ui-router  
               /* $stateProvider.state("home", <ng.ui.IState>{
                    url: "/",
                    views: {
                        "Home": {
                            templateUrl: "source/components/home/home.component.html",
                        },
                    },
                });*/

            });
            ng.bootstrap(document, [this._appModule.name]);
        }
    }
}
