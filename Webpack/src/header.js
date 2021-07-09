

function createBackground() {
    var background = document.createElement('div');
    background.setAttribute("class", 'background');

    return background;
}

function heading() {
    var heading = document.createElement('div');
    heading.setAttribute('class', 'heading');
    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode('US NEWS BLOG'));
    heading.appendChild(h1);

    return heading;
}

function createHeadContainer() {
    
    var headerContainer = document.createElement('div');
    headerContainer.setAttribute('class', 'headerContainer');
    headerContainer.appendChild(createBackground());
    headerContainer.appendChild(heading());

    return headerContainer;
}

export { createHeadContainer };

