fetch("./input/links.json")
  .then(response => response.json())
  .then(json => {
    // Get the element you want to add your new element before or after
    var target = document.querySelector('#links');

    json.forEach(element => {
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
  });

