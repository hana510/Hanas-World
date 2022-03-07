// $("body").hide();

$(".heart").hide();

let password = prompt("EnTeR pAsSwOrD");

if (password === 'hanaisthecoolest') {
    $("body").show();
}

$(".green-text").hover(
    function(){
        //$( this ).css("color","#ffd6ba");
        //alert("Background color = " + $(this).css("color"));
        if($( this ).css("color") === "rgb(190, 227, 219)")
        {
            $( this ).css("color","#ffd6ba");
        }
        else
        {
            $( this ).css("color","#bee3db");
        }
		
    }        
);

$(".pic").click(
	function(){
    	$( this ).siblings().show();
    }
);