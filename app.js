let lastState = false;

function checkForViewportChange() {
    var state = window.matchMedia("(max-width: 768px)").matches;
    if (state != lastState) {
        if (state) {
            //do your stuff here
        } else {
            //do your other stuff here
        }
        lastState = state
    }
}

window.setInterval(checkForViewportChange, 150);