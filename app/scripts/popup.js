'use strict';
var tabs = {};
function resizeWindow(size) {


    chrome.tabs.query({'currentWindow': true}, function (tabs) {
        chrome.windows.getCurrent(function (window) {
            chrome.extension.getBackgroundPage().console.log(window.width);
            chrome.extension.getBackgroundPage().console.log(tabs[0].width);
            chrome.extension.getBackgroundPage().console.log(tabs[0]);
            var diff = window.width - tabs[0].width;
            chrome.windows.update(window.id, {width: parseInt(size) });
        });

    });

}


    // onClick's logic below:
    document.getElementById('xs').addEventListener('click', function () {
        resizeWindow(this.dataset.width);
    });
    document.getElementById('sm').addEventListener('click', function () {
        resizeWindow(this.dataset.width);
    });
    document.getElementById('md').addEventListener('click', function () {
        resizeWindow(this.dataset.width);
    });
    document.getElementById('lg').addEventListener('click', function () {
        resizeWindow(this.dataset.width);
    });
