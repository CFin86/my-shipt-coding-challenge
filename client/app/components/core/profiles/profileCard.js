app.controller("ProfileController", ["$scope", "$http", "$state", "$q",
    function ($scope, $http, $state, $q) {
        "use strict";
       $scope.User = [
        {
          id: 0,
          mobile: true,
          image: 'https://avatars1.githubusercontent.com/u/22105265?v=4&u=cb1a48635ebd52e2579171a6384d0e426375fccf&s=400',
          name: 'Chris Finney',
          username: 'CFin86',
          description: 'New web developer to the industry and hopeful future Shipt Developer',
          githubTitle: 'Check the cool things I\'m doing on Github',
          link: "https://github.com/cfin86"
        },
        {
          id: 1,
          mobile: true,
          image: 'https://avatars3.githubusercontent.com/u/1024025?v=4&s=460',
          name: 'Linus Torvalds',
          username: 'torvalds',
          description: 'Most followers on all of Github, Also built the linux system',
          githubTitle: 'Check the cool things they\'re doing on Github',
          link: "https://github.com/torvalds",
        },
        {
          id: 2,
          mobile: true,
          image: 'https://avatars0.githubusercontent.com/u/3409645?v=4&s=460',
          name: 'Austin Woods',
          username: 'indiesquidge',
          description: 'Wrote this coding challenge. Has a very elusive followers base.',
          githubTitle: 'Check the cool things they\'re doing on Github',
          link: "https://github.com/indiesquidge"
        },
        {
          id: 3,
          mobile: true,
          image: 'https://avatars3.githubusercontent.com/u/611823?v=4&s=460',
          name: 'Stephen Poletto',
          username: 'spoletto',
          description: 'This lover of python is a super cool Engineering Manager with Drop Box',
          githubTitle: 'Check the cool things they\'re doing on Github',
          link: "https://github.com/spoletto",
        },
        {
          id: 4,
          mobile: false,
          image: 'https://avatars0.githubusercontent.com/u/24797376?v=4&s=460',
          name: 'Melissa Catt',
          username: 'MissyMelissa',
          description: 'Has exactly 30 followers. Cat aficionado from the Netherlands',
          githubTitle: 'Check the cool things they\'re doing on Github',
          link: "https://github.com/MissyMelissa"
        },
        {
          id: 5,
          mobile: false,
          image: 'https://avatars3.githubusercontent.com/u/345555?v=4&s=460',
          name: 'Alberto Ramírez',
          username: 'aramirez-es',
          description: 'This new developer is from Barcelona. He writes some great README\'s!',
          githubTitle: 'Check the cool things they\'re doing on Github',
          link: "https://github.com/aramirez-es",
        }
      ];
    }
])
