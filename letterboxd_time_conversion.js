var footer = document.getElementsByClassName("text-link text-footer");
var footer_text = footer[0].childNodes[0].data.trim().split(/(\s+)/);
var total_mins = footer_text[0];
var hour_mins = document.createElement("p");
hour_mins.classList.add("text-link");
hour_mins.textContent = Math.floor(total_mins / 60) + 'h ' + total_mins % 60 + 'm';
footer[0].after(hour_mins);