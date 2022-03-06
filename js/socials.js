fetch("./input/socials.json")
  .then(response => response.json())
  .then(json => {
    var target = document.querySelector('#socials');

    json.forEach(element => {
        var a = document.createElement('a');
        var icon = document.createElement('img');
    
        // Add text to the new element
        a.href = element.link;
        icon.src = element.src;
    
        // Insert the element before our target element
        a.appendChild(icon);
        target.appendChild( a );
    
    });
  });


