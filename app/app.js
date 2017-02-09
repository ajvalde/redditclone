(function() {

    angular.module('clone', [])
        .component('page', {
            templateUrl: 'views/body.html',
            controller: controller
        })

    function controller() {
        const vm = this

        vm.$onInit = function() {

          vm.posts = [

          ]

            vm.showForm = function() {
                vm.addForm = !vm.addForm
            }

            vm.postPost = function() {
              vm.posts.push(vm.post)
              vm.showForm();
              delete vm.post
            }
        }
    }

}());
