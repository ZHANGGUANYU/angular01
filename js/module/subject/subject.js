/**
 * Created by J on 2017/2/12.
 */
//电影的详细页
(function (angular) {
    var app = angular.module('mainApp.subject',['httpApp']);
    app.controller('subjectCtrl',['$scope','$routeParams','jsonpService', function ($scope,$routeParams,jsonpService) {
        $scope.subject = {};
        //通过$routeParams获取到传递过来的id
        $scope.test = $routeParams;
        //根据传过来的id拼接url
        var url = 'https://api.douban.com/v2/movie/subject/'+$routeParams.id;
        var params = {
            'apikey':'00fa6c0654689a0202ef4412fd39ce06'
        };
        jsonpService.getJsonp(url,params, function (data) {
            $scope.subject = data;
            //通过angular更新数据
            $scope.$apply();
        })
    }])
})(angular);