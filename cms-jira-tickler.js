var count = 0;
var delay = 120 * 1000; // 2 minutes
var pageToFetch = {
  "jira": "https://jira.cms.gov/secure/ViewProfile.jspa",
  "confluence": "https://confluence.cms.gov/users/viewmyprofile.action",
  "miro": "https://miro.com/app/settings/"
};
var intervalID = null;

function tickleJIRA() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status !== 200) {
				console.log("CMS tickler got non-200 response, giving up: %o", xhr.statusText);
				clearInterval(intervalID);
				return;
			}
			console.log("tickled CMS: %o", ++count);
		}
	}

  var u;
  if (window.location.host.match("confluence")) {
    u = pageToFetch["confluence"];
  } else if {
    u = pageToFetch["jira"];
  } else {
    u = pageToFetch["miro"];
  }

	xhr.open("GET", u);
	xhr.send();
}

intervalID = setInterval(tickleJIRA, delay);
