import { bodyContainer} from './body';
import { createContentContainer } from './content';
function createInputText() {
    var inputTextContainer = document.createElement('div');
    inputTextContainer.setAttribute('class', 'inputTextContainer');
    var inputText = document.createElement('input');
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('id', 'inputText');
    inputTextContainer.appendChild(inputText);

    return inputTextContainer;
}

function createInputButton() {
    var inputButtonContainer = document.createElement('div');
    inputButtonContainer.setAttribute('class', 'inputButtonContainer');
    var inputButton = document.createElement('input');
    inputButton.setAttribute('type', 'button');
    inputButton.setAttribute('class', 'inputButton');
    inputButton.setAttribute('value', 'Read Headlines');
    inputButton.addEventListener('click', ()=>{
        console.log("button clicked");
        createContentContainer(bodyContainer);
    });
    inputButtonContainer.appendChild(inputButton);


    return inputButtonContainer;
}

function createHeadline() {
    var categoryContainer = document.createElement('div');
    categoryContainer.setAttribute('class', 'categoryContainer');

    //categoryContainer.appendChild(createInputText());
    categoryContainer.appendChild(createInputButton());

    return categoryContainer;
}

function createSubHeading() {
    var subHeading = document.createElement('div');
    subHeading.setAttribute('class', 'subHeading');

    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode('Headlines'));

    subHeading.appendChild(h1);

    return subHeading;
}

function createSearchContainer() {
    var searchContainer = document.createElement('div');
    searchContainer.setAttribute('class', 'searchContainer');

    searchContainer.appendChild(createSubHeading());
    searchContainer.appendChild(createHeadline());


    return searchContainer;
}

export { createSearchContainer };