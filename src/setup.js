// show page action only for google
var showPageAction = function () {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostContains: "." },
        }),
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()],
    },
  ]);
};

// remove rules
var removeRules = function () {
  showPageAction();
};

// call here config once the extension is installed
var onInstalled = function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, removeRules);
};

chrome.runtime.onInstalled.addListener(onInstalled);
