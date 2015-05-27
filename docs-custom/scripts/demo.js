'use strict';

angular
  .module('reflectCalendar', ['reflect.calendar', 'ui.bootstrap'])
  .controller('MainCtrl', function ($scope, $modal, moment) {

    // IDEAS 
    // function parseEvents = function (eventObject) {var scheduledEvents = [
    // grab object
    // create two arrays (scheduled, unscheduled);
    // loop through and push into the appropriate array;

    // ng-repeat over the arrays
    //   add watch for isScheduled







    var currentYear = moment().year();
    var currentMonth = moment().month();

    //These variables MUST be set as a minimum for the calendar to work
    $scope.calendarView = 'month';
    $scope.calendarDay = new Date();
    

    $scope.logDay = function (day) {
      console.log("Angelo" + getEventsInPeriod($scope.calendarDay));

    }
    


    $scope.events = [
      {
        title: 'Evidence for Announced Observation',

        //ts-only-attributes
        assessmentPartId: 1443810,
        scheduled: false,
        startTime: null,
        state: "NOT_STARTED",
        complete: false,
        description: "Educator uses this to upload artifacts to support the Final SLO Score.",

        actorType: "TEACHER",
        actorId: 733505,
        actorLastNameFirstName: "Teacher01, MMSD",
        actorName: "MMSD Teacher01",

        //angular-bootstrap-calendar, default attributes for 
        type: 'warning',
        startsAt: new Date(currentYear,currentMonth,25,8,30),
        endsAt: new Date(currentYear,currentMonth,25,9,30)
      },
      {
        title: 'Evidence for Announced Observation',
        type: 'info',
        scheduled: true,
        startsAt: new Date(currentYear,currentMonth,19,7,30),
        endsAt: new Date(currentYear,currentMonth,25,9,30),
        observer: {
          firstName: 'Scotty',
          lastName: 'Pipen'
        }
      },
      {
        title: 'Evidence for Announced Observation',
        type: 'important',
        scheduled: true,
        startsAt: new Date(currentYear,currentMonth,25,6,30),
        endsAt: new Date(currentYear,currentMonth,25,6,60),
        observer: {
          firstName: 'Michael',
          lastName: 'Jordan'
        }
      },
      {
        title: 'No startsAt set',
        type: 'important',
        scheduled: false,
        startsAt: '',
        endsAt: new Date(currentYear,currentMonth,25,6,60),
        observer: {
          firstName: 'Michael',
          lastName: 'Jordan'
        }
      },
      {
        title: 'No startsAt set',
        type: 'important',
        scheduled: false,
        startsAt: '',
        endsAt: new Date(currentYear,currentMonth,25,6,60),
        observer: {
          firstName: 'Michael',
          lastName: 'Jordan'
        }
      }
    ];

    /*function random(min, max) {
      return Math.floor((Math.random() * max) + min);
    }

    for (var i = 0; i < 1000; i++) {
      var start = new Date(currentYear,random(0, 11),random(1, 28),random(0, 24),random(0, 59));
      $scope.events.push({
        title: 'Event ' + i,
        type: 'warning',
        startsAt: start,
        endsAt: moment(start).add(2, 'hours').toDate()
      })
    }*/

    function showModal(action, event) {
      $modal.open({
        templateUrl: 'modalContent.html',
        controller: function($scope, $modalInstance) {
          $scope.$modalInstance = $modalInstance;
          $scope.action = action;
          $scope.event = event;
        }
      });
    }

    $scope.eventClicked = function(event) {
      showModal('Clicked', event);
    };

    $scope.eventEdited = function(event) {
      showModal('Edited', event);
    };

    $scope.eventDeleted = function(event) {
      showModal('Deleted', event);
    };

    $scope.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };

  });
