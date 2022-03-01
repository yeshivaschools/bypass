const information = get("information");
const data = get("data");

window.addEventListener("load", () => prompt("Password") === "aroary" ? show(get("intro")) : document.body.outerHTML = "");

get("ok").addEventListener("click", () => information.style.display = "none");
get("info").addEventListener("click", () => show(get("infoData")));

/**
 * @description get an element by id
 * @param {string} id 
 * @returns {Element} the element with the given id
 */
function get(id) {
    return document.getElementById(id);
};

/**
 * @description Show premade content in the information window
 * @param {Element} template 
 */
function show(template) {
    data.replaceChildren(template.content.cloneNode(true));
    information.style.display = "block";
};

// 'The servers running your browser is run by <a href="https://replit.com" target="_blank" rel="noopener noreferrer">Replit</a>.',
// "Firefox is set as the defualt browser because chrome has more filters and can sometimes fail to show you what you want to see."