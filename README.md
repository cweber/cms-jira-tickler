# cms-jira-tickler

cms-jira-tickler is a Chrome extension that periodically polls jira.cms.gov, confluence.cms.gov and miro.com to prevent your session from terminating.

To install, clone the repository:

  `git clone https://github.com/adhocteam/cms-jira-tickler`

If you don't want to use git, you can download the files here:

  https://github.com/adhocteam/cms-jira-tickler/releases/latest


Now, open Chrome, and go to the Extensions page:

  [chrome://extensions](chrome://extensions)

And make sure that you are in Developer Mode (look for the checkbox in the top right-hand corner of the page).

Now, open Finder (Mac) or File Viewer (Windows) or something that you can use to browse directories on your computer, and drag and drop the `cms-jira-tickler` directory on to the Chrome Extentions page.

That should be it! Chrome will now periodically tickle jira.cms.gov and confluence.cms.gov to ensure you don't get logged out.

You can open the Javascript Console to verify it's working.
