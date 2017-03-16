/**
 * Created by J on 2017/2/12.
 */
(function (angular) {
    var app = angular.module('mainApp.in_theaters', ['httpApp']);
    app.controller('in_theatersCtrl', ['$scope', '$route', '$routeParams', 'jsonpService', function ($scope, $route, $routeParams, jsonpService) {
        //标题
        $scope.title = '正在加载';
        //电影数据列表
        $scope.subject = [];
        //电影总数
        $scope.total = 0;
        //电影页面总量
        $scope.pagecount = 5;
        //总页数
        $scope.maxpage = 0;
        //当前页数
        $scope.page = parseInt($routeParams.page || '1');
        //上一页
        $scope.upPage = function () {
            if ($scope.page > 1) {
                //更新页面,更新url中的锚点参数
                $scope.page = $scope.page - 1;
                //通过$route.updateParams更新url中锚点参数
                $route.updateParams({'page': $scope.page});
            }
        };
        //下一页
        $scope.downPage = function () {
            if ($scope.page < $scope.maxpage) {
                //更新页面,更新url中的锚点参数
                $scope.page = $scope.page + 1;
                //通过$route.updateParams更新url中锚点参数
                $route.updateParams({'page': $scope.page});
            }
        };
        //首页
        $scope.firstPage = function () {
            $scope.page = 1;
            $route.updateParams({'page': $scope.page});
        };
        //尾页
        $scope.lastPage = function () {
            $scope.page = $scope.maxpage;
            $route.updateParams({'page': $scope.page});
        };
        //($scope.page-1)* $scope.pagenow
        // (1-1)*5 0 -4 第一页的数据
        //(2-1)*5 5 - 9 第二页的数据
        //通过jsonpService获取正在热映的数据
        var url = 'https://api.douban.com/v2/movie/'+$routeParams.type;
        var params = {
            'apikey':'00fa6c0654689a0202ef4412fd39ce06',
            start:($scope.page-1)*$scope.pagecount,
            count:$scope.pagecount,
            q:$routeParams.q
        };

        jsonpService.getJsonp(url,params, function (data) {
            $scope.title = data.title;
            $scope.subjects = data.subjects;
            $scope.total = data.total;
            //获取页面总数
            $scope.maxpage = Math.ceil(parseInt(data.total)/$scope.pagecount);
            //通过angular更新数据
            $scope.$apply();

        })
    }])
})(angular);