function skillsMember () {
    return {    
        restrict: 'E',
        templateUrl: 'app/components/members/skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'skillsMemberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    };    
