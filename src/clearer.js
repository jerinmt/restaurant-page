const clearContent =function () {
    const content = document.querySelector('#content');
    const container = content.firstChild;
    content.removeChild(container);
}

export {clearContent};