"routeLoaded routeChangeEvent".split(" ").forEach(function(e){
  window.addEventListener(e, hideOpportunityTabs, false);
});

function hideOpportunityTabs() {
  [...document.querySelectorAll(".innerWrapper .wrapperHeader div:not(.toolkit-tab) > div.pr-4 > button")].filter(e => e.childNodes && [...e.childNodes].find(n => n.nodeValue?.match("HIDDEN"))).forEach(function(t) {
    t.hidden = true
  })
}
