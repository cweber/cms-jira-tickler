var count = 0;
var delay = 120 * 1000; // 2 minutes
var pageToFetch = "https://jira.cms.gov/secure/ViewProfile.jspa";
var intervalID = null;

function tickleJIRA() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status !== 200) {
				console.log("CMS JIRA tickler got non-200 response, giving up: %o", xhr.statusText);
				clearInterval(intervalID);
				return;
			}
			console.log("tickled CMS JIRA: %o", ++count);
		}
	}
	xhr.open("GET", pageToFetch);
	xhr.send();
}

intervalID = setInterval(tickleJIRA, delay);
