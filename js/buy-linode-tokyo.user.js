// ==UserScript==
// @name           Buy Linode Tokyo
// @namespace      Buy Linode Tokyo
// @description    Buy Linode Tokyo
// @match        https://manager.linode.com/linodes/add*
// @version    0.4
// @copyright  2015+, ytzong
// @update 2015-06-14 by frank
// ==/UserScript==

function YTFunc() {
    try {
    	document.getElementById('linode1024.4').checked = true;
        document.getElementById('DatacenterID').options.add(new Option("Tokyo, JP","8"));
        document.getElementById('DatacenterID').value = 8;
        document.getElementById('signup').submit()
    }
    catch (e) { }
}
window.setTimeout(YTFunc, 3000);
