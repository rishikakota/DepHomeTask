import { createHeadContainer } from './header'; 
import { createBodyContainer } from './body';


function createPage() {
    var container = document.createElement('div');
    container.setAttribute('class', 'container');
    container.appendChild(createHeadContainer());
    container.appendChild(createBodyContainer());

    return container;
}

export { createPage };