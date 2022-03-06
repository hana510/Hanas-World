$("body").hide();

let password = prompt("Enter password");

if (password === 'hanabana2010') {
    $("body").show();
}

$(".purple-text").hover(
    function(){
		$( this ).css("color","#77ff33");
    }        
);