
(function (angular) {
    //主模块
    var app = angular.module('mainApp', [
        'ngRoute',
        'mainApp.in_theaters',
        'mainApp.subject'
    ]);

    //路由器
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        //去除!
        $locationProvider.hashPrefix('');
        $routeProvider
        //配置正在热映的模块
            .when('/movie/:type/:page?', {
                templateUrl: 'js/module/in_theaters/template.html',
                controller: 'in_theatersCtrl'
            })
            .when('/subject/:id', {
                templateUrl: 'js/module/subject/template.html',
                controller: 'subjectCtrl'
            })
            //默认路径
            .otherwise({
                redirectTo: '/movie/in_theaters'
            })
    }]);
    //搜索控制器
    app.controller('searchCtrl', ['$scope', '$route', function ($scope, $route) {
        //通过敲击回车搜索文本框的内容
        $scope.searchText = '';
        $scope.search = function () {
            if ($scope.searchText.length > 0) {
                //搜索电影
                $route.updateParams({'type': 'search', 'q': $scope.searchText});
                $scope.searchText = '';
            }
        }
    }])
})(angular);