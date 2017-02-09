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
            {
              title: "Teemo",
              body: "Teemo is evil!!!!!",
              author: "Me",
              image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRtraHbHZEf1FhP2usWP9XAgZso1Fr8lbD_FHlacCtHIAAfK3JlQg",
              comments: []
            }
          ]

            vm.showForm = function() {
                vm.addForm = !vm.addForm
            }

            vm.postPost = function() {
              vm.post.comments =[]
              vm.posts.push(vm.post)
              vm.showForm();
              delete vm.post
            }

            vm.writeComment = function() {
              vm.showCom = !vm.showCom
            }

            vm.postComment = function(post) {
              post.comments.push(post.newComment)
              delete post.newComment
            }
        }
    }

}());
