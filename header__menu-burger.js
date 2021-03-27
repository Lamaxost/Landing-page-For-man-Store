function burgerClick(){
	const burgerMenu=document.getElementById('menu-burger');
	burgerMenu.classList.toggle('active');
	const mainMenu = document.querySelector(".menu");
	mainMenu.classList.toggle('active')
	const body = document.querySelector("body");
	body.classList.toggle('lock');
}

function menuBurger(){
	if(window.innerWidth>800)return;
	const burgerMenu=document.getElementById('menu-burger');
	if(!burgerMenu){
		document.querySelector(".menu").style.display="flex";
		return;
	}
	burgerMenu.onclick=burgerClick;
}

menuBurger();