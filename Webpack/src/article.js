import { createBreakline } from './body';

function createArticleImage(imageUrl) {
    var articleImage = document.createElement('div');
    articleImage.setAttribute('class', 'articleImage');
    var image = document.createElement('img');
    image.setAttribute('src', imageUrl);
    articleImage.appendChild(image);
    return articleImage;
}

function createArticleContent(element) {
    var articleContent = document.createElement("div");
    articleContent.setAttribute('class', 'articleContent');

    var title = document.createElement('div');
    title.setAttribute('class', 'articelTitle');
    var h3 = document.createElement('h3');
    h3.appendChild(document.createTextNode(element.title));
    title.appendChild(h3);
    articleContent.appendChild(title);

    var articleDetails = document.createElement('div');
    articleDetails.setAttribute('class', 'articleDetaile');

    var span1 = document.createElement('span');
    span1.appendChild(document.createTextNode('Posted on  '));

    var td = new Date(element.publishedAt);
    td = td.toDateString().substring(4).split(" ");
    td = td[0] + " " + td[1] + "," + td[2];
    //var one = span1.append(document.createTextNode(td));
    // var articleposteddate = document.createElement('div');
    // articleposteddate.setAttribute('class','articlePostedDate')
    // articleposteddate.appendChild(document.createTextNode(td));
    // article.appendChild(articleposteddate);
    var span2 = document.createElement('span');
    span2.appendChild(document.createTextNode('   //// author'));
    //var two = span2.append(document.createTextNode(article.author));
    articleDetails.appendChild(span1);
    articleDetails.appendChild(document.createTextNode(td));
    articleDetails.appendChild(span2);
    articleDetails.appendChild(document.createTextNode(element.author));
    articleContent.appendChild(articleDetails);

    var articleDescription = document.createElement('div');
    articleDescription.setAttribute('class', 'articleDescription');
    articleDescription.appendChild(document.createTextNode(element.description));
    articleContent.appendChild(articleDescription);

    var readMore = document.createElement('div');
    readMore.setAttribute('class', 'readMore');
    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'readButton');
    button.setAttribute('value', 'Read More');
    button.addEventListener('click', function () {
        var u = element.url;
        window.location.href = u;
    })
    readMore.appendChild(button);
    articleContent.appendChild(readMore);

    return articleContent;


}

function createArticle(element) {
    var article = document.createElement('div');
    article.setAttribute('class', 'article');
    console.log(element);
    var imageUrl = element.urlToImage;
    article.appendChild(createArticleImage(imageUrl));
    article.appendChild(createArticleContent(element));
    return article;
}

function createArticleContainer(articles) {
    console.log(articles);
    var articleContainer = document.createElement('div');
    articleContainer.setAttribute('class', 'articleContainer');

    articles.forEach(element => {
        articleContainer.appendChild(createArticle(element));
        articleContainer.appendChild(createBreakline());   
    });

    return articleContainer;
}

export { createArticleContainer };