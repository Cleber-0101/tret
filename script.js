const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

    function redirectToWhatsApp() {
     window.location.href = "https://api.whatsapp.com/send?phone=+5511979701051"
}

    document.getElementById("whatsapp-icon").addEventListener("click", redirectToWhatsApp);

  function redirectToWhatsApp() {
	var numero = "+5511979701051";
	var mensagem = encodeURIComponent("Olá, tudo bem?");
	var url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;
  
	window.location.href = url;
  }
  
  document.getElementById("whatsapp-icon").addEventListener("click", redirectToWhatsApp);
  