/// *****
/// Edit the variables below to customize the theme. Uncomment the decor variable to match css themes.
/// See this website for inspiration: https://www.sabinanore.com/design/html-special-symbols/
//var decor = "&#10047;"; // FLOWER THEME
//var decor = "&#9760;"; // SKULL THEME
//var decor = "&#9728;"; // SUN THEME
var decor = "*:･ﾟ✧*:･ﾟ✧";
var numDecor = 3;
var h2Text = "Liz Anderson";
var h4aText = "indie developer";
var h4bText = "open for work";
/// *****

// Get all page breaks and add decor
var breaks = document.querySelectorAll(".break-section");
breaks.forEach(element => {
    for (var i = 0; i < numDecor; i++){
        var p = document.createElement("p");
        p.innerHTML = decor;
        element.appendChild(p);
    }
});

// Get header text section and add headers
var headText = document.querySelector("#head-text");
var h2 = document.createElement("h2");
var h4a = document.createElement("h4");
var h4b = document.createElement("h4");
h2.innerText = h2Text;
h4a.innerText = h4aText;
h4b.innerText = h4bText;

headText.appendChild(h2);
headText.appendChild(h4a);
headText.appendChild(h4b);
