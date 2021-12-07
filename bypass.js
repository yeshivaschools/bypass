const information = document.getElementById("information");
const data = document.getElementById("data");

window.addEventListener("load", () => show(document.getElementById("intro")));
document.getElementById("ok").addEventListener("click", () => information.style.display = "none");
document.getElementById("info").addEventListener("click", () => show(document.getElementById("infoData")));

/**
 * @description Show premade content in the information window
 * @param {Element} template 
 */
function show(template) {
    data.replaceChildren(template.content.cloneNode(true));
    information.style.display = "block";
};

// {
//     other: [
//         'The servers running your browser is run by <a href="https://replit.com" target="_blank" rel="noopener noreferrer">Replit</a>.',
//         "Firefox is set as the defualt browser because chrome has more filters and can sometimes fail to show you what you want to see."
//     ],
//     firefox: "firefox -browser -foreground -private",
//     chrome: "chromium-browser --no-sandbox --disable-logging --incognito --start-maximized --start-in-incognito"
// };
