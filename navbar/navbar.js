import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import { Session } from 'meteor/session';
import { Notifications } from 'meteor/igoandsee:notifications-collection';

import './navbar.html';

Template.navbar.helpers({

	showNotification() {
		return Notifications.find().count() > 0;
	},

	labelName() {
		if(Meteor.user()){
			return Meteor.user().profile.name + ' ' + Meteor.user().profile.lastName;
		}
	},

});

Template.navbar.events({

	'click #btnLogout'() {
		Meteor.logout();
		Router.go('login');
	},

	'click #btnProfile'() {
		Router.go('profile', {id:Meteor.userId()});
	},

	'click #btnGoAndSee'(e) {
		e.preventDefault();
		goIfAllow('dashboard');
	},

});

let goIfAllow = function goIfAllow(route) {

	let inEditMode = Session.get('EDIT_MODE') || false;
	console.log('Go if allow: ', inEditMode);

	if (inEditMode) {
		triggerBeforeUnload(route);
	} else {
		Router.go(route);
	}

};

function triggerBeforeUnload(route) {

	console.log('Trigger before unload');

	if (confirm('Are you sure you want to navigate away from this page?\nPress OK to continue, or Cancel to stay on the current page.')) {
		Session.set('EDIT_MODE', false);
		Router.go(route);
	}

}
