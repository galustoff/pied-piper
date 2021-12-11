export function setOffsetBell(checkpoint, callback) {
    let offsetLessCheckpoint = (window.scrollY < checkpoint);

    return function() {
        if ((window.scrollY < checkpoint) !== offsetLessCheckpoint) {
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