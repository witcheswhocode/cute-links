const links = [{
    "link": "https://projects.capradio.org/california-fire-history",
    "title": "California Fire History",
    "desc": "This is an interactive map to show wildfire history.",
    "src": "img/fire.png"
},{
    "link": "https://github.com/witcheswhocode/personal-links",
    "title": "Code for This Website",
    "desc": "This was built by me, fork the repo and customize your own!",
    "src": "img/github.png"
},{
    "link": "https://www.tiktok.com/@witcheswhocode/video/7071307087178976558",
    "title": "Fried Potato Balls",
    "desc": "TikTok of me making delicious food from leftovers.",
    "src": "img/tiktok.png"
}];
const socials = [{
    "link": "https://twitter.com/witcheswhocode",
    "title": "Twitter",
    "src": "img/twitter-pink.png"
},{
    "link": "https://github.com/witcheswhocode",
    "title": "Github",
    "src": "img/github-pink.png"
},{
    "link": "https://tiktok.com/@witcheswhocode",
    "title": "TikTok",
    "src": "img/tiktok-pink.png"
}];

// Get the element you want to add your new element before or after
var target = document.querySelector('#links');

links.forEach(element => {
    var a = document.createElement('a');
    var button = document.createElement('button');
    var p = document.createElement('p');
    var icon = document.createElement('img');

    // Add text to the new element
    a.href = element.link;
    a.classList.add("link-a");
    icon.src = element.src;
    icon.classList.add("link-icon");
    button.innerHTML = element.title;
    button.classList.add("link-button");
    p.innerHTML = element.desc;

    // Insert the element before our target element
    button.appendChild(p);
    a.appendChild(icon);
    a.appendChild( button );
    target.appendChild( a );

});

var target = document.querySelector('#socials');

socials.forEach(element => {
    var a = document.createElement('a');
    var icon = document.createElement('img');

    // Add text to the new element
    a.href = element.link;
    icon.src = element.src;

    // Insert the element before our target element
    a.appendChild(icon);
    target.appendChild( a );

});
