const links = [{
    "link": "https://twitter.com/witcheswhocode",
    "title": "Twitter",
    "src": "img/twitter.png"
},{
    "link": "https://github.com/witcheswhocode",
    "title": "Github",
    "src": "img/github.png"
},{
    "link": "https://tiktok.com/witcheswhocode",
    "title": "TikTok",
    "src": "img/tiktok.png"
}];

// Get the element you want to add your new element before or after
var target = document.querySelector('#links');

links.forEach(element => {
    var a = document.createElement('a');
    var button = document.createElement('button');
    var icon = document.createElement('img');

    // Add text to the new element
    a.href = element.link;
    icon.src = element.src;
    icon.classList.add("link-icon");
    button.innerHTML = element.title;
    button.classList.add("link-button");

    // Insert the element before our target element
    a.appendChild(icon);
    a.appendChild( button );
    target.appendChild( a );

});


