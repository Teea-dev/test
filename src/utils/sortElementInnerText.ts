

function sortElementInnerText(element: HTMLElement, className: string) {
    // Gets an element innerText value and wrap each char by a span tag
    const baseInnerText = element.innerText;
    let innerHtmlStoreString = ``

    for (let i = 0; i < element.innerText.length; i++) {
        const char = element.innerText[i];
        if (char === ' ') {
            innerHtmlStoreString = `${innerHtmlStoreString}${char}`
        } else {
            innerHtmlStoreString = `${innerHtmlStoreString}<span style='display:inline-block;' class=${className}>${char}</span>`
        }

    }
    element.innerHTML = innerHtmlStoreString;
    return { baseInnerText, sortedChar: Array.from(element.children) }
}

export default sortElementInnerText;