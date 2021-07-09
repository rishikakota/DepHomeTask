import { createSearchContainer } from './searchContainer';
import { createContentContainer } from './content';

function createBreakline() {
    var breakline = document.createElement('div');
    breakline.setAttribute('class', 'breakline');
    return breakline;
}
var bodyContainer;

function createBodyContainer() {
    bodyContainer = document.createElement("div");
    bodyContainer.setAttribute('class', 'bodyContainer');
    bodyContainer.appendChild(createSearchContainer());
    
    bodyContainer.appendChild(createBreakline());
    //createContentContainer();
    //bodyContainer.appendChild(createContentContainer());

    return bodyContainer;
}

export { createBodyContainer,createBreakline, bodyContainer};