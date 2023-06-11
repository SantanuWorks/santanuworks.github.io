// scroll  property for the header (menu - navigation stuff)
window.onscroll = function()
{
	var vp = window.matchMedia("(max-width:814px)");
	if(vp.matches){
		if(window.pageYOffset  > 600)
	    {
	        document.getElementById('goup').style.display="flex";
	    }else
	    {
	    	document.getElementById('goup').style.display="none";
	    }
	}
	else{
		if(window.pageYOffset  > 600)
	    {
	        document.getElementById('head').style.backgroundColor="red";
	        document.getElementById('goup').style.display="flex";
	    }else
	    {
	        document.getElementById('head').style.backgroundColor="white";
	    	document.getElementById('goup').style.display="none";
	    }
	}
};

// For small screen
// Function to open the nav bar
function navOpenFun(){
	document.getElementById('nav-links-block').style.display="flex";
	document.getElementById('cross').style.display="block";
	document.getElementById('menu').style.display="none";
}
// Function to close the nav bar
function navCloseFun(){
	document.getElementById('nav-links-block').style.display="none";
	document.getElementById('cross').style.display="none";
	document.getElementById('menu').style.display="block";
}
// document.addEventListener('mousemove', function(e) {
//   let body = document.querySelector('body');
//   let circle = document.getElementById('circle');
//   let left = e.offsetX;
//   let top = e.offsetY;
//   circle.style.left = left + 'px';
//   circle.style.top = top + 'px';
// });