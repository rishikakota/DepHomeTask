import { key } from './api.config';
import { createArticleContainer } from './article';

async function createContentContainer(bodyContainer) {
    var contentContainer = document.createElement('div');
    contentContainer.setAttribute('class', 'contentContainer');
    //contentContainer.appendChild(document.createTextNode('div block'));

    console.log('hello');
   
    console.log("bye");

    let { articles } = await fetch_data();

    contentContainer.appendChild(createArticleContainer(articles.slice(0,5)));
    //createArticleContainer(articles.slice(0, 5));

    bodyContainer.appendChild(contentContainer);
}

async function fetch_data() {
    console.log("bye");
    var url = 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c6a6960f7cff4f1882403bdfd509ca16';
    //var search_category = 'business';
    var fetch_data = await getData(url);
    return fetch_data
}

async function getData(url) {
    return await (await fetch(url)).json();
}

export { createContentContainer };