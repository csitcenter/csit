// scrolltotop

window.onscroll = function() {
	var e = document.getElementById("scrolltop");
    if (!e) {
    	e = document.createElement("a");
        e.id = "scrolltop";
        e.href = "#";
        document.body.appendChild(e);
	}
	e.style.display = document.documentElement.scrollTop >300 ? "block" : "none";
    e.onclick = (ev) => {
    	ev.preventDefault();
        document.documentElement.scrollTop = 0;
    };
};


{<script async src="https://www.googletagmanager.com/gtag/js?id=G-TN9TC8YPC6"></script>

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TN9TC8YPC6');}

