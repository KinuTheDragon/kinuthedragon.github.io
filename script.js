function updateCollapsible(collapsibleButton) {
    let opened = collapsibleButton.classList.contains("collapsible-active");
    let content = collapsibleButton.nextElementSibling;
    if (opened) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = null;
    }
    collapsibleButton.innerHTML = collapsibleButton.getAttribute(opened ? "open-text" : "closed-text");
}

for (let btn of document.getElementsByClassName("collapsible")) {
    updateCollapsible(btn);
    btn.addEventListener("click", function () {
        this.classList.toggle("collapsible-active");
        updateCollapsible(this);
    });
}