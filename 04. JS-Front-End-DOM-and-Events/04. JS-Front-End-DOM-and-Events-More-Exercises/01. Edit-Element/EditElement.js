function editElement(element, targetString, replacerString) {
    while (element.textContent.includes(targetString)) {
        const newText = element.textContent.replace(targetString, replacerString);
        element.textContent = newText;
    }
}