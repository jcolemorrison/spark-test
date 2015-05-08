/* global document, moment */
'use strict';

angular.module('ideasApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'mm.foundation', 'angularMoment'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		// since there's only one state
		// this is all we need right now
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/ideas/main.html'
			});

		$urlRouterProvider.otherwise('/');
	}])

	// initialize settings for 3rd party scripts
	.run(['$rootScope', function ($rootScope) {
		// attach fastclick
		FastClick.attach(document.body);

		// change time display
		moment.locale('en', {
			relativeTime : {
				future: 'in %s',
				past:   '%s ago',
				s:  '1sec',
				m:  '1m',
				mm: '%dm',
				h:  '1h',
				hh: '%dh',
				d:  '1d',
				dd: '%dd',
				M:  '1month',
				MM: '%dmonth',
				y:  '1yr',
				yy: '%dyr'
			}
		});

		// This is where we would
		// seed our $rootScope with
		// data via REST to the server

		// seed faux user
		$rootScope.currentUser = {
			'name': 'Cole Morrison',
			'image': 'assets/images/blue-cole-square-bg.png',
			'title': 'The Colester',
			'location': {
				name: 'California',
				val: 'CA'
			}
		};

		// mock locations
		$rootScope.locations = [
			{
				name: 'New York',
				val: 'NY',
				count: 3
			},
			{
				name: 'Kentucky',
				val: 'KY',
				count: 1
			},
			{
				name: 'California',
				val: 'CA',
				count: 4
			}
		];

		// mock statuses

		// mock ideas
		$rootScope.ideas = [
			{
				'author': {
					'name': 'Muhammad Ali',
					'image': 'http://blog.constitutioncenter.org/wp-content/uploads/2012/09/Muhammad-Ali-9181165-2-402.jpg',
					'title': 'The Champion'
				},
				'date': new Date().getTime() - 200000,
				'location': 'KY',
				'status': 'Progress',
				'title': 'Train',
				'description': 'I hated every minute of training, but I said, Don\'t quit. Suffer now and live the rest of your life as a champion.',
				'loved': {
					'total': 518,
					'currentUser': false
				},
				'commentCount': 30
			},
			{
				'author': {
					'name': 'Jeff Lebowski',
					'image': 'http://static.tvtropes.org/pmwiki/pub/images/the_big_lebowski___jeff_bridges_9616.jpg',
					'title': 'The Dude'
				},
				'date': new Date().getTime() - 100000,
				'location': 'CA',
				'status': 'New',
				'title': 'A Big Ideaski',
				'description': 'Let me explain something to you. Um, I am not "Mr. Lebowski". You\'re Mr. Lebowski. I\'m the Dude. So that\'s what you call me. You know, that or, uh, His Dudeness, or uh, Duder, or El Duderino if you\'re not into the whole brevity thing.',
				'loved': {
					'total': 121,
					'currentUser': false
				},
				'commentCount': 10
			},
			{
				'author': {
					'name': 'Robin Williams',
					'image': 'http://www.thebostoncalendar.com/system/events/photos/000/018/123/original/Robin-Williams.jpg',
					'title': 'The Robin'
				},
				'date': new Date().getTime() - 3000000,
				'location': 'CA',
				'status': 'Accepted',
				'title': 'Stay Crazy',
				'description': 'You\'re only given one little spark of madness. You mustn\'t lose it.',
				'loved': {
					'total': 518,
					'currentUser': false
				},
				'commentCount': 30
			},
			{
				'author': {
					'name': 'Nigel Tufnel',
					'image': 'http://www.founditemclothing.com/halloween/spinal-tap-cap-1.jpg',
					'title': 'Spinal Guitarist'
				},
				'date': new Date().getTime() - 2000000,
				'location': 'NY',
				'status': 'Completed',
				'title': 'The New Album Should be Black',
				'description': 'It\'s like, how much more black could this be? and the answer is none. None more black.',
				'loved': {
					'total': 50,
					'currentUser': false
				},
				'commentCount': 19
			},
			{
				'author': {
					'name': 'Jean Luc Picard',
					'image': 'http://fierceandnerdy.com/wp-content/uploads/2012/01/Picard2379.jpg',
					'title': 'Starship Captain'
				},
				'date': new Date().getTime() - 2000000000000,
				'location': 'CA',
				'status': 'Accepted',
				'title': 'Next Generation Time Management',
				'description': 'Time is a companion that goes with us on a journey. It reminds us to cherish each moment, because it will never come again. What we leave behind is not as important as how we have lived.',
				'loved': {
					'total': 276,
					'currentUser': false
				},
				'commentCount': 49
			},
			{
				'author': {
					'name': 'Brian Fantana',
					'image': 'http://www.heyuguys.com/images/2010/07/Paul-Rudd-Brian-Fantana.jpg',
					'title': 'Field Reporter'
				},
				'date': new Date().getTime() - 4000000,
				'location': 'CA',
				'status': 'New',
				'title': 'A New Productivity Scent',
				'description': 'They’ve done studies, you know. 60 percent of the time, it works every time.',
				'loved': {
					'total': 4,
					'currentUser': false
				},
				'commentCount': 0
			},
			{
				'author': {
					'name': 'Anonymous',
				},
				'date': new Date().getTime() - 8000000,
				'location': 'NY',
				'status': 'Progress',
				'title': 'No More Lorem Ipsum Text',
				'description': 'Why?  Because when you glance over it in mock designs, you\'re eyes naturally glance over the typography, color, etc. and thus allow you to miss design.  Not only that, but no paragraphs dynamically generated by users are ever that perfectly aligned.',
				'loved': {
					'total': 275,
					'currentUser': false
				},
				'commentCount': 2
			},
			{
				'author': {
					'name': 'Mitch Hedberg',
					'image': 'http://upload.wikimedia.org/wikipedia/en/2/21/Mitch_Hedberg.PNG',
					'title': 'Comic'
				},
				'date': new Date().getTime() - 10000000,
				'location': 'NY',
				'status': 'Progress',
				'title': 'New Vending Machine',
				'description': 'I want to get a vending machine, with fun sized candy bars, and the glass in front is a magnifying glass. You\'ll be mad, but it will be too late.',
				'loved': {
					'total': 614,
					'currentUser': false
				},
				'commentCount': 57
			},
			{
				'author': {
					'name': 'Jim Rohn',
					'image': 'http://upload.wikimedia.org/wikipedia/commons/1/1c/Jim-rohn-PASSES-AWAY.jpg',
					'title': 'Entrepreneur'
				},
				'date': new Date().getTime() - 50000000,
				'location': 'CA',
				'status': 'Progress',
				'title': 'Self Education',
				'description': 'Formal education will make you a living; self-education will make you a fortune.',
				'loved': {
					'total': 489,
					'currentUser': false
				},
				'commentCount': 101
			},
			{
				'author': {
					'name': 'Steve Jobs',
					'image': 'http://p.fod4.com/p/media/177ae91679/Fhkv4dIeRidvXtUPhL4g_steve-jobs.jpg',
					'title': 'iCEO'
				},
				'date': new Date().getTime() - 35000000,
				'location': 'CA',
				'status': 'Progress',
				'title': 'The Search',
				'description': 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle. As with all matters of the heart, you\'ll know when you find it.',
				'loved': {
					'total': 489,
					'currentUser': false
				},
				'commentCount': 101
			}
		];
	}]);