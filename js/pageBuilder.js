var currentTimeout = null;
function viewlike(typ)
{
	$.ajax({
			type:'POST',
			url:'php/views.php',
			data:{'id':'2','type':typ},
			cache:false,
			success:function(html){
				var res=html;
				$('#likes').text(res);
			}
		});
}
	$('#like').click(function(){
			viewlike('0');
		});
	function viewcount()
	{
		//alert('camee');
		$.ajax({
			type:'POST',
			url:'php/views.php',
			data:{'id':'1','type':'0'},
			cache:false,
			success:function(html){
				var res=html + " viewers";
				$('#view').text(res);
			}
		});
	}
	//Events scroll
	$("#eve,#eve1").click(function(){
		var d=$('#track1').offset();
		$("html,body").animate({scrollTop : d.top-90},700);
	});
	//Explore scroll
	$("#exp").click(function(){
		var d=$('.activity-container').offset();
		$("html,body").animate({scrollTop : d.top-150},700);
	});
	$("#bbt,#home").click(function(){
		$("html,body").animate({scrollTop : 0},700);
	});
	var eee=0;
	$(window).scroll(function(){
		var d=$('#ch1').offset();
		var dd=Math.abs($(window).scrollTop()+$(window).height()-d.top);
		if(dd>=0 && dd<=50 && eee==0)
		{
			var i=0;
			eee=1;
			var ee=setInterval(function(){
			if(i<=230)
			$("#ch1").text(i++);
			else
			clearInterval(ee);
			},8);
			
			var j=0;
			var ee=setInterval(function(){
			if(j<=100)
			$("#ch2").text(j++);
			else
			clearInterval(ee);
			},20);
			
			var k=0;
			var ee=setInterval(function(){
			if(k<=540)
			$("#ch3").text(k++);
			else
			clearInterval(ee);
			},0.5);
			
			var l=0;
			var ee=setInterval(function(){
			if(l<=30)
			$("#ch4").text(l++);
			else
			clearInterval(ee);
			},15);
		}

		$('.scroll-animations .animated').each(function() {
			if (isScrolledIntoView(this) === true) {
				$(this).addClass('fadeInUp');
			}
		});

	});

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();
	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();
	return ((elemBottom-200 <= docViewBottom) && (elemTop-200 >= docViewTop));
}

function autoplayCarousel() {
	currentTimeout = setTimeout(autoplay, 4500);;
	function autoplay() {
		$('.carousel').carousel('next');
		currentTimeout = setTimeout(autoplay, 4500);
	}
}

function filldata()
{
	var details2=["Answer series of questions","Happy coding","present the project","connect to win connexion","think answer win","find the errors to win"];
	var details3=["Answer series of questions","Happy coding","present the project","connect to win connexion","think answer win","find the errors to win"];
	var con3="<div id='i3' class='carousel' style='margin-top:-10px;'>";
	var title3=["rapid fire2","coding","paper presentation","connexion","dumbc","debugging"];
	var con2="<div id='i2' class='carousel' style='margin-top:-10px;'>";
	var title2=["rapid fire1","coding","paper presentation","connexion","dumbc","debugging"];
	var title1=["rapid","coding","paper presentation","connexion","dumbc","debugging"];
	var details1=["Answer series of questions","Happy coding","present the project","connect to win connexion","think answer win","find the errors to win"];
	var img=["c1.png","c2.jpg","c3.png","c4.jpg","c5.jpg","c6.png"];
	var title=["rapid fire","coding","paper presentation","connexion","dumbc","debugging"];
	var details=["Answer series of questions","Happy coding","present the project","connect to win connexion","think answer win","find the errors to win"];
	var con="<div id='i4' class='carousel' style='margin-top:-10px;'>";
	for(var i=0;i<title.length;i++){
		con+="<div class='carousel-item'>";
		con+="<div style='height:220px' class='card'>";
		con+="<div class='card-image'>";
		con+="<img height='150' src='img/"+img[i]+"' />";
		con+="<span class='card-title'>"+title[i]+"</span></div>";
		con+="<span class='card-content'><center>"+details[i]+"</center></span></div></div>";
	}
	con+="</div>";
	$('.container .row #test1').append(con);
	
	con="<div id='i1' class='carousel' style='margin-top:-10px;'>";
	for(var i=0;i<title.length;i++){
		con+="<div class='carousel-item'>";
		con+="<div style='height:220px' class='card'>";
		con+="<div class='card-image'>";
		con+="<img height='150' src='img/"+img[i]+"' />";
		con+="<span class='card-title'>"+title1[i]+"</span></div>";
		con+="<span class='card-content'><center>"+details1[i]+"</center></span></div></div>";
	}
	con+="</div>";
	$('.container .row #test2').append(con);
	var con="<div id='i2' class='carousel' style='margin-top:-10px;'>";
	for(var i=0;i<title.length;i++){
		con+="<div class='carousel-item'>";
		con+="<div style='height:220px' class='card'>";
		con+="<div class='card-image'>";
		con+="<img height='150' src='img/"+img[i]+"' />";
		con+="<span class='card-title'>"+title2[i]+"</span></div>";
		con+="<span class='card-content'><center>"+details2[i]+"</center></span></div></div>";
	}
	con+="</div>";
	$('.container .row #test3').append(con);
	
	var con="<div id='i3' class='carousel' style='margin-top:-10px;'>";
	for(var i=0;i<title.length;i++){
		con+="<div class='carousel-item'>";
		con+="<div style='height:220px' class='card'>";
		con+="<div class='card-image'>";
		con+="<img height='150' src='img/"+img[i]+"' />";
		con+="<span class='card-title'>"+title3[i]+"</span></div>";
		con+="<span class='card-content'><center>"+details3[i]+"</center></span></div></div>";
	}
	con+="</div>";
	$('.container .row #test4').append(con);
	$('.carousel').carousel({dist:0,
		shift:0,
		duration:0,
		padding:20
	});
	autoplayCarousel();
}
	
$('#exp').hover(function(){
	$("#exp").css("border","none");
	$("#exp").css("background-color","#00008B");
},function(){
	$("#exp").css("border","2px solid white");
	$("#exp").css("background-color","Transparent");
});
	
function removeOverlay() {
  $('div[id^=sidenav-overlay]').remove();
}
	
	$(window).scroll(function(){
		//alert('came');
		if($(window).scrollTop()>50)
		{
			$("#hed").css("background" , "black");
			//$("#hed").animate({backgroundColor:'#5553D3'});
		}
		else{
			$("#hed").css("background" , "");
		}
		if($(window).scrollTop()<100)
		{
			$('#bbt').fadeOut();
		}
		else{
			$('#bbt').fadeIn();
		}
	});
	
	function createmodal(){
	
		$('.button-collapse').sideNav({
			menuWidth: 200, // Default is 300
			edge: 'left', // Choose the horizontal origin
			closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
			draggable: true,
			onOpen:function st(){ //$('#sidenav').animate({'marginLeft' : "+=300px"});
			},
			onClose:function cl(){ //alert('working');
				//$('#sidenav').animate({'marginLeft' : "-=300px"});
			}
		});
		
		$('.button-collapse').click(removeOverlay);
	
	}
		$(document).ready(function(){

			//Activity Fade In
			$('.scroll-animations .animated').each(function() {
				if (isScrolledIntoView(this) === true) {
					$(this).addClass('fadeInUp');
				}
			});
			//Activity Fade In Ends
		
			//checkContainer();
			//$('#bbt').css('');
			viewcount();
			viewlike('1');
			$('.tabs').tabs({duration:100,});
			filldata();
			if($(window).width()<1000){
			
			$("#hed #desk").hide();
			//alert('hii');
			//var txt="<div class='col l6 s6'><p style='color:red;'>hii</p></div>";
			var txt1="<div class='col l4 s6'><br><a style='color:white;float:right;' id='sidenav' href='#' data-activates='slide-out' class='button-collapse'><i class='material-icons'>menu</i></a></div>";
			$("#hed #legend").after(txt1);
			createmodal();
			//$("p").css("background-color","red");
			}

			initTeam();
			//initGallery
			$("#gallery").unitegallery(); 
		});
		$(window).resize(function(){
		
			if($(window).width()<1000){
			$("#hed #desk").hide();
			//var txt="<div class='col l6 s6'><p style='color:red;'>hii</p></div>";
			var txt1="<div id='desk1'class='col l4 s6'><br><a style='color:white;float:right' id='sidenav' href='' data-activates='slide-out' class='button-collapse'><i class='material-icons'>menu</i></a></div>";
			if(!$("#hed #desk1").length ){
			$("#hed #legend").after(txt1);}
			else if($("#hed #desk1").length && $("#hed #desk1").css("display")=='none'){
				$("#hed #desk1").show();
				//$("#hed #legend").after(txt1);
			}
			createmodal();
			//$("p").css("background-color","red");
			}
			else{
				$("#hed #desk").show();
				$("#hed #desk1").hide();
				//$("#hed #desk").show();
			}
		});
$("#event-tabs").click(function() {
	clearTimeout(currentTimeout);
	$('.carousel').carousel('next');
	autoplayCarousel();
});

var iconColor = activityData["color"];

for(var key in activityData) {
	if(key=="color") continue;
	var row = activityData[key];
	$(".activity-container").append(dataRow.replace("%rid%", key));
	console.log("Appending data row");
	row.forEach(function(card) {
		//currentRow = $(".activity-row:last");
		formattedData = dataCard.replace("%data-icon%", card.icon);
		formattedData = formattedData.replace("%icon-color%", iconColor);
		formattedData = formattedData.replace("%data-title%", card.title);
		formattedData = formattedData.replace("%data-desc%", card.desc);
		$("#"+key).append(formattedData);
		console.log("Appending card");
	})
}

var teamSlider = $(".team-slider");

teamData.forEach(function(member) {
	formattedData = memberCard.replace("%data-img%", member.image);
	formattedData = formattedData.replace("%data-name%", member.name);
	formattedData = formattedData.replace("%data-desc%", member.desc);
	teamSlider.append(formattedData);
});

var gallery = $("#gallery");
for(var i=1;i<=14;i++) {
	var imgUrl = "m"+i+".JPG";
	var formattedData = galleryItem.replace("%img-url%", imgUrl).replace("%img-url%", imgUrl);
	gallery.append(formattedData);
}

function initTeam() {
	$('.team-slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
		    	breakpoint: 1024,
		    	settings: {
		    	  slidesToShow: 3,
		    	  slidesToScroll: 1
		    	}
			},
			{
				breakpoint: 600,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			}
		]
	});

}


