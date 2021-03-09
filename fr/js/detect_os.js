var operatingSystem, userAgentString = navigator.userAgent;
var link = $("#store");

if (userAgentString.indexOf("iPhone") > -1 || userAgentString.indexOf("iPod") > -1 || userAgentString.indexOf("iPad") > -1) {
    operatingSystem = "iOS";
    link.attr("href", "http://store.apple.com/us/browse/app");
} else {
    operatingSystem = "Others";
    link.attr("href", "https://play.google.com/store/apps?hl=en");
}

if(/CriOS/i.test(navigator.userAgent) && /iphone|ipod|ipad/i.test(navigator.userAgent)) {
    operatingSystem = "iOS";
    link.attr("href", "http://store.apple.com/us/browse/app");
}