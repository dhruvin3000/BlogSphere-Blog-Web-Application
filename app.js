// app.js
var app = angular.module('blogApp', []);

// Main controller for shared functionality
app.controller('MainController', function($scope, $location) {
    $scope.currentUser = {
        name: "Alex Johnson",
        isLoggedIn: true
    };

    $scope.logout = function() {
        $scope.currentUser.isLoggedIn = false;
        window.location.href = 'Opening_page.html';
    };
});

// Auth Controller
app.controller('AuthController', function($scope) {
    $scope.loginData = {};
    $scope.registerData = {};

    $scope.login = function() {
        if ($scope.loginData.username && $scope.loginData.password) {
            // Simulate authentication
            alert('Login successful!');
            window.location.href = 'home.html';
        }
    };

    $scope.register = function() {
        if ($scope.registerData.username && $scope.registerData.password) {
            // Simulate registration
            alert('Registration successful!');
            window.location.href = 'home.html';
        }
    };
});

// Blog Controller
app.controller('BlogController', function($scope) {
    $scope.blogPosts = [{
            id: 1,
            title: "Getting Started with Web Development",
            author: "Alex Johnson",
            date: "March 15, 2024",
            content: "Web development is an exciting field that combines creativity with technical skills...",
            tags: ["Web Development", "HTML", "CSS", "JavaScript"],
            likes: 12,
            comments: 5,
            views: 127
        }
        // Add more posts as needed
    ];

    $scope.searchQuery = "";

    $scope.filteredPosts = function() {
        if (!$scope.searchQuery) {
            return $scope.blogPosts;
        }

        var query = $scope.searchQuery.toLowerCase();
        return $scope.blogPosts.filter(function(post) {
            return post.title.toLowerCase().includes(query) ||
                post.author.toLowerCase().includes(query) ||
                post.content.toLowerCase().includes(query) ||
                post.tags.some(function(tag) {
                    return tag.toLowerCase().includes(query);
                });
        });
    };
});

// Post Controller
app.controller('PostController', function($scope) {
    $scope.post = {
        id: 1,
        title: "Getting Started with Web Development: A Comprehensive Guide",
        author: "Alex Johnson",
        created_at: new Date('2024-03-15'),
        content: "Web development is an exciting field that combines creativity with technical skills...",
        tags: ["Web Development", "HTML", "CSS", "JavaScript", "Beginner"],
        likes: 12,
        comments: 5,
        views: 127
    };

    $scope.comments = [{
        id: 1,
        author: "Sarah Williams",
        date: new Date('2024-03-16'),
        content: "This is exactly what I needed as a beginner!"
    }];
});

// Add Post Controller
app.controller('AddPostController', function($scope) {
    $scope.post = {
        title: '',
        content: ''
    };

    $scope.addPost = function() {
        if ($scope.post.title && $scope.post.content) {
            alert('Post added successfully!');
            // Reset form
            $scope.post = {
                title: '',
                content: ''
            };
            window.location.href = 'home.html';
        }
    };

    $scope.getContentLength = function() {
        return $scope.post.content ? $scope.post.content.length : 0;
    };
});