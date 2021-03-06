angular.module('vendorConsoleApp')
    .factory('CameraService', ['$q','$cordovaFileTransfer','apiConfig', function ($q, $cordovaFileTransfer, apiConfig) {

        // '$cordovaFileTransfer',
        return {
            getPicture: function (options) {
                var q = $q.defer();

                navigator.camera.getPicture(function (result) {
                    q.resolve(result);
                }, function (err) {
                    q.reject(err);
                }, options);

                return q.promise;
            },

            upload: function(filePath) {
                var q = $q.defer();
                document.addEventListener('deviceready', function () {
                    return $cordovaFileTransfer.upload(apiConfig.host + "/admin/vendor-api/media", filePath, {
                        fileKey: "file",
                        chunkedMode: false
                    }).then(function(result) {
                        if(result.responseCode === 200) {
                            //return angular.fromJson(result.response);
                            q.resolve(angular.fromJson(result.response));
                        }else{
                            q.reject(err);
                        }
                    });
                }, false);

                return q.promise;
            }
        }
    }]);