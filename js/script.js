const url = "https://data.covid19india.org/data.json";

let app = angular.module("myApp", []);
app.controller('myCtrl', ($scope, $http) => {
    $scope.title = "Stay Home Stay Safe";

    $http.get(url).then(
        (response) => {
            $scope.covidData = response.data.statewise;
        },
        (error) => {
            console.log(error);
        }
    );

    $scope.getStateData = () => {
        if(!$scope.stateName || $scope.stateName.trim()==="") {
            console.log($scope.covidData);
            $scope.stateData = $scope.covidData.slice(1);
        }
        else
            $scope.stateData = $scope.covidData.filter((state) => state.state.toLowerCase().includes($scope.stateName.toLowerCase()));
    }

})