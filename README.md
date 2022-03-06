
How to customize your own list of links:
1. Clone/fork this repo.
2. To serve locally, in terminal: `npm install http-server -g`
3. Set up your list of socials by adding yours to `/input/socials.json`. Add images for social buttons to `/img/` folder. You can file them for free [here](https://www.iconsdb.com/).
4. Set up your list of links by adding yours to `/input/links.json`. Add images for link icons to `/img/` folder. You can file them for free [here](https://www.iconsdb.com/).
5. Set up theme and colors by finding a html icon and colors that resignate with you. Add the icon you choose to the `/theme.js` file, follow the instructions there. Edit the colors by finding the CSS variables to edit at the top of `/styles.css`.
6. Type `http-server` into terminal for localhost:8080 to see it locally.
7. Once you are happy with your links, publish to Github and set up Github Pages by going to Settings>Pages. You will need to make this repo public in order to do so.