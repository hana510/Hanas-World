// $("body").hide();

let password = prompt("EnTeR pAsSwOrD");

if (password === 'hanaisthecoolest') {
    $("body").show();
}

$(".green-text").hover(
    function(){
		$( this ).css("color","#ffd6ba");
    }        
);