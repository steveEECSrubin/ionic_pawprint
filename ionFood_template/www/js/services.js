angular.module('starter.services', [])

.factory('MeetUps', function () {
	//code to retreive array of meetUps
	var meetUps = [{
		id: 0,
		name: 'Meet at Jake\'s',
		location: 'Jake\'s',
		date: 'April 20, 2016',
		time: '6:00PM'
	}, {
		id: 1,
		name: 'Meet at Jake\'s',
		location: 'Jake\'s',
		date: 'April 20, 2016',
		time: '6:00PM'
	}];
	return {
		all: function() {
			return meetUps;
		},
		get: function(meetUpId) {
      	for (var i = 0; i < meetUps.length; i++) {
        	if (meetUps[i].id === parseInt(meetUpId)) {
          		return meetUps[i];
        	}
      	}
      	return null;
    	}
	};
});
