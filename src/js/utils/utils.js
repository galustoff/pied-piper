export function setOffsetBell(checkpoint, callback) {
    let offsetLessCheckpoint = (window.scrollY < checkpoint * 2);

    return function() {
        if ((window.scrollY < checkpoint * 2) !== offsetLessCheckpoint) {
            callback();
            offsetLessCheckpoint = !offsetLessCheckpoint;
        }
    };
}

export function toggleClassName(elem, className) {
    return function() {
        elem.classList.toggle(className);
    };
}