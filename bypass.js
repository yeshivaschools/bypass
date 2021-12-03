const data = {
    licence: `This is free and unencumbered software released into the public domain. <br>
    <br>
    Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means. <br>
    <br>
    In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law. <br>
    <br>
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. <br>
    <br>
    For more information, please refer to <a href="https://unlicense.org" target="_blank" rel="noopener noreferrer">https://unlicense.org</a>`,
    warning: `These servers can be potentially insecure (privacy is in no way gauranteed), it is not recommended to enter personal or private information into a website in a browser on a server within this page. <br>
    <br>
    If you need to log into any sort of account it is recommended to use 2fa (two factor authentication) and the chrome browser in incognito mode`,
    help: [
        "Bypass school internet restrinctions by opening a website in a remote server.",
        "Press the green play button on the bottom right to start your settion, navigate between the four windows to change your browser or to view logs or output.",
        "Audio is supported, to use audio press the icon on the bottom left of the output window (this may slow down your settion).",
        "To change the browser, go to the code window (files icon on the bottom). Then open the <code>main.sh</code> file if it is not already open. (the file selctor icon is on the top right of the files window.) Then follow steps show.",
        ""
    ],
    other: [
        'The servers running your browser is run by <a href="https://replit.com" target="_blank" rel="noopener noreferrer">Replit</a>.',
        "Firefox is set as the defualt browser because chrome has more filters and can sometimes fail to show you what you want to see."
    ]
};

document.getElementById("ok").addEventListener("click", () => {
    document.getElementById("information").style.display = "none";
    document.getElementById("title").innerHTML = "";
    document.getElementById("body").innerHTML = "";
});

document.getElementById("info").addEventListener("click", () => {
    info('Information', `<h3>Warning</h3><p>${data.warning}</p><h3>Help</h3><ul><li>${data.help.join`</li><li>`}</li></ul><br><h3>Licence</h3><p><code>${data.licence}</code></p>`);
});

function info(title, body) {
    document.getElementById("information").style.display = "block";
    document.getElementById("title").outerHTML = `<h1 id="title">${title}</h1>`;
    document.getElementById("body").outerHTML = `<div id="body">${body}</div>`;
};