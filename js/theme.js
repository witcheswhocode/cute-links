/// *****
/// Edit the variables below to customize the theme. Uncomment the decor variable to match css themes.
/// See this website for inspiration: https://www.sabinanore.com/design/html-special-symbols/
var decor = "&#10047;"; // FLOWER THEME
//var decor = "&#9760;"; // SKULL THEME
//var decor = "&#9728;"; // SUN THEME
var numDecor = 13;
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