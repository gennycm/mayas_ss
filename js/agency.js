/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

//Carousel
 $('.carousel').carousel({
        interval: 5000 //changes the speed
    })

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


/*Calculadora*/
// Get the #drop zone
var dropLvl6 = document.getElementById('dropLvl6');
var dropLvl5 = document.getElementById('dropLvl5');
var dropLvl4 = document.getElementById('dropLvl4');
var dropLvl3 = document.getElementById('dropLvl3');
var dropLvl2 = document.getElementById('dropLvl2');
var dropLvl1 = document.getElementById('dropLvl1');

// Get the result zone
var convLvl6 = document.getElementById('convLvl6');
var convLvl5 = document.getElementById('convLvl5');
var convLvl4 = document.getElementById('convLvl4');
var convLvl3 = document.getElementById('convLvl3');
var convLvl2 = document.getElementById('convLvl2');
var convLvl1 = document.getElementById('convLvl1');

//Get the first number zone
var fNdropLvl6 = document.getElementById('fNdropLvl6');
var fNdropLvl5 = document.getElementById('fNdropLvl5');
var fNdropLvl4 = document.getElementById('fNdropLvl4');
var fNdropLvl3 = document.getElementById('fNdropLvl3');
var fNdropLvl2 = document.getElementById('fNdropLvl2');
var fNdropLvl1 = document.getElementById('fNdropLvl1');

//Get the second number zone
var sNdropLvl6 = document.getElementById('sNdropLvl6');
var sNdropLvl5 = document.getElementById('sNdropLvl5');
var sNdropLvl4 = document.getElementById('sNdropLvl4');
var sNdropLvl3 = document.getElementById('sNdropLvl3');
var sNdropLvl2 = document.getElementById('sNdropLvl2');
var sNdropLvl1 = document.getElementById('sNdropLvl1');

//Get the operator
var operator = "";
var plus_op = document.getElementById('plus');
var minus_op = document.getElementById('minus');
var times_op = document.getElementById('times');
var divide_op = document.getElementById('divide');


//Get the second result zone
var resLvl6 = document.getElementById('resLvl6');
var resLvl5 = document.getElementById('resLvl5');
var resLvl4 = document.getElementById('resLvl4');
var resLvl3 = document.getElementById('resLvl3');
var resLvl2 = document.getElementById('resLvl2');
var resLvl1 = document.getElementById('resLvl1');

// Get the total Num
var totalNum = "#total-result";
var tNumTxt6 = "#total-nums6 span";
var tNumTxt5 = "#total-nums5 span";
var tNumTxt4 = "#total-nums4 span";
var tNumTxt3 = "#total-nums3 span";
var tNumTxt2 = "#total-nums2 span";
var tNumTxt1 = "#total-nums1 span";

//Original strings
var orig6 = "3 200 000 x 0 = 0";
var orig5 = "160 000 x 0 = 0";
var orig4 = "8 000 x 0 = 0";
var orig3 = "400 x 0 = 0";
var orig2 = "20 x 0 = 0";
var orig1 = "1 x 0 = 0";

var totalRslt= 0, tNums6 = 0, tNums5 = 0, tNums4 = 0, tNums3 = 0, tNums2 = 0, tNums1 = 0;
var mult6 = 0, mult5 = 0, mult4 = 0, mult3 = 0, mult2 = 0, mult1 = 0;
var empty = "", last = 0;
var totalSum = 0, totalFn = 0, fnl1 = 0, fnl2 = 0, fnl3 = 0, fnl4 = 0, fnl5 = 0, fnl6 = 0; 
var totalSn = 0, snl1 = 0, snl2 = 0, snl3 = 0, snl4 = 0, snl5 = 0, snl6 = 0;

$(document).ready(function() {

		var html = "";
		var draggedItem = null;

		// Add the Event Listener to each draggable item
		$('.dragable-item').each(function(index){
			$(this)[0].addEventListener('dragstart',function(e){

				draggedItem = jQuery(this);

				e.dataTransfer.setData('Text', this.id); // required otherwise doesn't work

			},false);
		});

		/*CONVERTIDOR MAYA-ARAB*/
		/*Nivel 6*/
		dropLvl6.addEventListener('dragover', cancel);
		dropLvl6.addEventListener('dragenter', cancel);
		dropLvl6.addEventListener('drop', function (e) {

		   e.preventDefault();

		   mult6 = 3200000 * parseInt($(draggedItem).data('num'));
		   html = "3 200 000 x " +  $(draggedItem).data('num') + "="+ mult6 ;

		   dropLvl6.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeNumber(dropLvl6, tNumTxt6, orig6)'>" ; //
		   tNums6 = parseInt($(draggedItem).data('num'));

		   refresh_total_Nums(tNumTxt6, html);

		  return false;
		});

		/*Nivel 5*/
		dropLvl5.addEventListener('dragover', cancel);
		dropLvl5.addEventListener('dragenter', cancel);
		dropLvl5.addEventListener('drop', function (e) {

		   e.preventDefault();

		   mult5 = 160000 * parseInt($(draggedItem).data('num'));
		   html = "160 000 x " +  $(draggedItem).data('num') + "="+ mult5 ;

		   dropLvl5.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeNumber(dropLvl5, tNumTxt5, orig5)'>" ; //
		   tNums5 = parseInt($(draggedItem).data('num'));

		   refresh_total_Nums(tNumTxt5, html);

		  return false;
		});


		/*Nivel 4*/
		dropLvl4.addEventListener('dragover', cancel);
		dropLvl4.addEventListener('dragenter', cancel);
		dropLvl4.addEventListener('drop', function (e) {

		   e.preventDefault();

		   mult4 = 8000 * parseInt($(draggedItem).data('num'));
		   html = "8000 x " +  $(draggedItem).data('num') + "="+ mult4 ;

		   dropLvl4.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeNumber(dropLvl4, tNumTxt4, orig4)'>" ; //
		   tNums4 = parseInt($(draggedItem).data('num'));

		   refresh_total_Nums(tNumTxt4, html);

		  return false;
		});


		/*Nivel 3*/
		dropLvl3.addEventListener('dragover', cancel);
		dropLvl3.addEventListener('dragenter', cancel);
		dropLvl3.addEventListener('drop', function (e) {

		   e.preventDefault();

		   mult3 = 400 * parseInt($(draggedItem).data('num'));
		   html = "400 x " +  $(draggedItem).data('num') + "="+ mult3 ;

		   dropLvl3.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeNumber(dropLvl3, tNumTxt3, orig3)'>" ; //
		   tNums3 = parseInt($(draggedItem).data('num'));

		   refresh_total_Nums(tNumTxt3, html);

		  return false;
		});

		/*Nivel 2*/
		dropLvl2.addEventListener('dragover', cancel);
		dropLvl2.addEventListener('dragenter', cancel);
		dropLvl2.addEventListener('drop', function (e) {

		   e.preventDefault();

		   mult2 = 20 * parseInt($(draggedItem).data('num'));
		   html = "20 x " +  $(draggedItem).data('num') + "="+ mult2 ;

		   dropLvl2.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeNumber(dropLvl2, tNumTxt2, orig2)'>" ; //
		   tNums2 = parseInt($(draggedItem).data('num'));

		   refresh_total_Nums(tNumTxt2, html);

		  return false;
		});

		/*Nivel 1*/
		dropLvl1.addEventListener('dragover', cancel);
		dropLvl1.addEventListener('dragenter', cancel);
		dropLvl1.addEventListener('drop', function (e) {

		   e.preventDefault();

		   mult1 = 1 * parseInt($(draggedItem).data('num'));
		   html = "1 x " +  $(draggedItem).data('num') + "="+ mult1;

		   dropLvl1.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeNumber(dropLvl1, tNumTxt1, orig1)'>" ; //
		   tNums1 = parseInt($(draggedItem).data('num'));

		   refresh_total_Nums(tNumTxt1, html);

		  return false;
		});


		/*Calculadora Maya*/

		/*First number*/
		fNdropLvl1.addEventListener('dragover', cancel);
		fNdropLvl1.addEventListener('dragenter', cancel);
		fNdropLvl1.addEventListener('drop', function (e) {

		   e.preventDefault();

		   fnl1 = 1 * parseInt($(draggedItem).data('num'));
		   fNdropLvl1.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeDragged(fNdropLvl1)'>" ; //
		   console.log(fnl1);
		  return false;
		});

		fNdropLvl2.addEventListener('dragover', cancel);
		fNdropLvl2.addEventListener('dragenter', cancel);
		fNdropLvl2.addEventListener('drop', function (e) {

		   e.preventDefault();

		   fnl2 = 20 * parseInt($(draggedItem).data('num'));
		   fNdropLvl2.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeDragged(fNdropLvl2)'>" ; //
		   console.log(fnl2);
		  return false;
		});

		fNdropLvl3.addEventListener('dragover', cancel);
		fNdropLvl3.addEventListener('dragenter', cancel);
		fNdropLvl3.addEventListener('drop', function (e) {

		   e.preventDefault();

		   fnl3 = 400 * parseInt($(draggedItem).data('num'));
		   fNdropLvl3.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeDragged(fNdropLvl3)'>" ; //
		   console.log(fnl3);
		  return false;
		});
		
		fNdropLvl4.addEventListener('dragover', cancel);
		fNdropLvl4.addEventListener('dragenter', cancel);
		fNdropLvl4.addEventListener('drop', function (e) {

		   e.preventDefault();

		   fnl4 = 8000 * parseInt($(draggedItem).data('num'));
		   fNdropLvl4.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeDragged(fNdropLvl4)'>" ; //
		   console.log(fnl4);
		  return false;
		});

		fNdropLvl5.addEventListener('dragover', cancel);
		fNdropLvl5.addEventListener('dragenter', cancel);
		fNdropLvl5.addEventListener('drop', function (e) {

		   e.preventDefault();

		   fnl5 = 160000 * parseInt($(draggedItem).data('num'));
		   fNdropLvl5.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeDragged(fNdropLvl5)'>" ; //
		   console.log(fnl5);
		  return false;
		});

		fNdropLvl6.addEventListener('dragover', cancel);
		fNdropLvl6.addEventListener('dragenter', cancel);
		fNdropLvl6.addEventListener('drop', function (e) {

		   e.preventDefault();

		   fnl6 = 3200000 * parseInt($(draggedItem).data('num'));
		   fNdropLvl6.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeDragged(fNdropLvl6)'>" ; //
		   console.log(fnl6);
		  return false;
		});

		/*Second number*/
		sNdropLvl1.addEventListener('dragover', cancel);
		sNdropLvl1.addEventListener('dragenter', cancel);
		sNdropLvl1.addEventListener('drop', function (e) {

		   e.preventDefault();

		   snl1 = 1 * parseInt($(draggedItem).data('num'));
		   sNdropLvl1.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeDragged(sNdropLvl1)'>" ; //
		   console.log(snl1);
		  return false;
		});

		sNdropLvl2.addEventListener('dragover', cancel);
		sNdropLvl2.addEventListener('dragenter', cancel);
		sNdropLvl2.addEventListener('drop', function (e) {

		   e.preventDefault();

		   snl2 = 20 * parseInt($(draggedItem).data('num'));
		   sNdropLvl2.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeDragged(sNdropLvl2)'>" ; //
		   console.log(snl2);
		  return false;
		});

		sNdropLvl3.addEventListener('dragover', cancel);
		sNdropLvl3.addEventListener('dragenter', cancel);
		sNdropLvl3.addEventListener('drop', function (e) {

		   e.preventDefault();

		   snl3 = 400 * parseInt($(draggedItem).data('num'));
		   sNdropLvl3.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeDragged(sNdropLvl3)'>" ; //
		   console.log(snl3);
		  return false;
		});
		
		sNdropLvl4.addEventListener('dragover', cancel);
		sNdropLvl4.addEventListener('dragenter', cancel);
		sNdropLvl4.addEventListener('drop', function (e) {

		   e.preventDefault();

		   snl4 = 8000 * parseInt($(draggedItem).data('num'));
		   sNdropLvl4.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeDragged(sNdropLvl4)'>" ; //
		   console.log(snl4);
		  return false;
		});

		sNdropLvl5.addEventListener('dragover', cancel);
		sNdropLvl5.addEventListener('dragenter', cancel);
		sNdropLvl5.addEventListener('drop', function (e) {

		   e.preventDefault();

		   snl5 = 160000 * parseInt($(draggedItem).data('num'));
		   sNdropLvl5.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeDragged(sNdropLvl5)'>" ; //
		   console.log(snl5);
		  return false;
		});

		sNdropLvl6.addEventListener('dragover', cancel);
		sNdropLvl6.addEventListener('dragenter', cancel);
		sNdropLvl6.addEventListener('drop', function (e) {

		   e.preventDefault();

		   snl6 = 3200000 * parseInt($(draggedItem).data('num'));
		   sNdropLvl6.innerHTML = "<img class='nums' src='img/nums/"+ $(draggedItem).data('title') +".png' onClick='removeDragged(sNdropLvl6)'>" ; //
		   console.log(snl6);
		  return false;
		});


});



function equalsCalc(){
	totalFn = fnl1 + fnl2 + fnl3 + fnl4 + fnl5 +fnl6;
	totalSn = snl1 + snl2 + snl3 + snl4 + snl5 + snl6;
	if (operator === empty) {
		alert("Oops! Debes seleccionar un operador :)");
	}else{
		switch(operator){
			case "plus":
				totalSum = totalFn + totalSn;
				console.log(totalFn + "+" + totalSn + "=" + totalSum);
				break;

			case "minus":
				totalSum = totalFn - totalSn;
				if (totalSum >= 0) {
					console.log(totalFn + "-" + totalSn + "=" + totalSum);
				}else{
					alert("Oops! El número es negativo, los mayas no utilizaban #s negativos :D ");
					break;
				}
				break;

			case "times":
				totalSum = totalFn * totalSn;
				console.log(totalFn + "*" + totalSn + "=" + totalSum);
				break;

			case "divide":
				totalSum = parseInt(totalFn / totalSn);
				console.log(totalFn + "/" + totalSn + "=" + totalSum);
				break;
		}
		var lastFn = getLastPos(fNdropLvl1, fNdropLvl2, fNdropLvl3, fNdropLvl4, fNdropLvl5, fNdropLvl6);
		var lastSn = getLastPos(sNdropLvl1, sNdropLvl2, sNdropLvl3, sNdropLvl4, sNdropLvl5, sNdropLvl6);
		fillWithZeros(lastFn, fNdropLvl1, fNdropLvl2, fNdropLvl3, fNdropLvl4, fNdropLvl5, fNdropLvl6);
		fillWithZeros(lastSn, sNdropLvl1, sNdropLvl2, sNdropLvl3, sNdropLvl4, sNdropLvl5, sNdropLvl6);

	}
	
	revert(totalSum,resLvl1, resLvl2, resLvl3, resLvl4, resLvl5, resLvl6);
}

// Callback function when cancelling the event
function cancel(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  return false;
}

function refresh_total_Nums(id, total_Nums){

	$(id).text(total_Nums);
}

function resetMayanToArabCalc(){
	console.log("reset");
	totalRslt= 0;
	tNums6 = 0;
	tNums5 = 0;
	tNums4 = 0;
	tNums3 = 0;
	tNums2 = 0;
	tNums1 = 0;
	last = 0;
	mult6 = 0;
	mult5 = 0;
	mult4 = 0;
	mult3 = 0;
	mult2 = 0;
	mult1 = 0;

	refresh_total_Nums(tNumTxt6, orig6);
	refresh_total_Nums(tNumTxt5, orig5);
	refresh_total_Nums(tNumTxt4, orig4);
	refresh_total_Nums(tNumTxt3, orig3);
	refresh_total_Nums(tNumTxt2, orig2);
	refresh_total_Nums(tNumTxt1, orig1);
	refresh_total_Nums(totalNum, "0");

	dropLvl6.innerHTML = "";
	dropLvl5.innerHTML = "";
	dropLvl4.innerHTML = "";
	dropLvl3.innerHTML = "";
	dropLvl2.innerHTML = "";
	dropLvl1.innerHTML = "<img class='nums' src='img/nums/cero.png' onClick='removeNumber(dropLvl1)'>";
}

function equals () {
	totalRslt = mult1 + mult2 + mult3 + mult4 + mult5 + mult6;
	refresh_total_Nums(totalNum, totalRslt);
	var last = getLastPos(dropLvl1,dropLvl2,dropLvl3,dropLvl4, dropLvl5, dropLvl6);
	fillWithZeros(last,dropLvl1,dropLvl2,dropLvl3,dropLvl4, dropLvl5, dropLvl6);
}

function getLastPos(l1,l2,l3,l4,l5,l6){
	if (l6.innerHTML === empty) {
		if (l5.innerHTML === empty) {
			if (l4.innerHTML === empty) {
				if (l3.innerHTML === empty) {
					if (l2.innerHTML === empty) {
						if (l1.innerHTML === empty) {
						}else{
							last = 1;
						}
					}else{
						last = 2;
					}
				}else{
					last = 3;
				}			
			}else{
				last = 4;
			}
		}else{
			last = 5;
		}
	}
	else{
		last = 6;
	}

	console.log("Ultimo: " + last);
	return last;
}

function fillWithZeros(lastPos,l1,l2,l3,l4,l5,l6,l7){
	switch(lastPos){
		case 0:
		//	addZero(dropLvl1);
			break;
		case 2:
			addZero(l1);
			break;
		case 3:
			addZero(l2);
			addZero(l1);
			break;
		case 4:
			addZero(l3);
			addZero(l2);
			addZero(l1);
			break;
		case 5:
			addZero(l4);
			addZero(l3);
			addZero(l2);
			addZero(l1);
			break;
		case 6:
			addZero(l5);
			addZero(l4);
			addZero(l3);
			addZero(l2);
			addZero(l1);
			break;
	}

}


function addZero(element){
	if (element.innerHTML === empty) {
	   element.innerHTML = "<img class='nums' src='img/nums/cero.png'>" ;
	}
}

function removeNumber(element, tNumTxt, orig){
	element.innerHTML = "";
	refresh_total_Nums(tNumTxt,orig);
}

function removeDragged(element){
	element.innerHTML = "";
}

var numArab;

function equals_nA(){
	numArab = document.getElementById('numArab').value;
	if(!numArab){
		alert("Oops! El campo está vacío. Escriba un número :)");
	}else{
		console.log("Num:" + numArab);
		revert(numArab,convLvl1, convLvl2, convLvl3, convLvl4, convLvl5, convLvl6);
	}
	
}

var result = ['','','','','',''];
var r = ['','','','','',''];

function resetNAtoMA(){
	document.getElementById('numArab').value = "";
	numArab = 0;
	result = ['','','','','',''];
	r = ['','','','','',''];
    fillSquares(convLvl1, r, 0);
    fillSquares(convLvl2, r, 1);
    fillSquares(convLvl3, r, 2);
    fillSquares(convLvl4, r, 3);
    fillSquares(convLvl5, r, 4);
    fillSquares(convLvl6, r, 5);
}


function revert(numArab, l1, l2, l3, l4, l5, l6) {
    var temp = numArab;
    var i = 0, j = 0, k = 0;
    result = ['','','','','',''];
	r = ['','','','','',''];
    
    for (temp = numArab; temp >= 20;) { //sacamos los modulos y divisores de el valor decimal para empezar a sacar el maya
        r[i] = getNumString(parseInt(temp % 20));
        temp = (temp / 20);
        i++;
    }
    r[i] =  getNumString(parseInt(temp));
    fillSquares(l1, r, 0);
    fillSquares(l2, r, 1);
    fillSquares(l3, r, 2);
    fillSquares(l4, r, 3);
    fillSquares(l5, r, 4);
    fillSquares(l6, r, 5);
    
    console.log(" R: | " + r);
    numArab = 0;
}

function getNumString(number){
	switch(number){
		case 0:
			return "cero";
			break;
		case 1:
			return "uno";
			break;
		case 2:
			return "dos";
			break;
		case 3:
			return "tres";
			break;
		case 4:
			return "cuatro";
			break;
		case 5:
			return "cinco";
			break;
		case 6:
			return "seis";
			break;
		case 7:
			return "siete";
			break;
		case 8:
			return "ocho";
			break;
		case 9:
			return "nueve";
			break;
		case 10:
			return "diez";
			break;
		case 11:
			return "once";
			break;
		case 12:
			return "doce";
			break;
		case 13:
			return "trece";
			break;
		case 14:
			return "catorce";
			break;
		case 15:
			return "quince";
			break;
		case 16:
			return "dieciseis";
			break;
		case 17:
			return "diecisiete";
			break;
		case 18:
			return "dieciocho";
			break;
		case 19:
			return "diecinueve";
			break;		
	}
}

function fillSquares(element, array, pos){
	if (array[pos]!='') {
		element.innerHTML = "<img class='nums' src='img/nums/"+ array[pos] +".png'>";
	}else{
		element.innerHTML = " ";
	}
}


function plus(){
	operator = "plus";
    $("#plus").addClass("selected_op");
    $('#minus').removeClass("selected_op");
    $('#times').removeClass("selected_op");
    $('#divide').removeClass("selected_op");
}

function minus(){
	operator = "minus";
    $("#minus").addClass("selected_op");
    $('#plus').removeClass("selected_op");
    $('#times').removeClass("selected_op");
    $('#divide').removeClass("selected_op");
}

function times(){
	operator = "times";
	$("#times").addClass("selected_op");
    $('#plus').removeClass("selected_op");
    $('#minus').removeClass("selected_op");
    $('#divide').removeClass("selected_op");
}

function divide(){
	operator = "divide";
	$("#divide").addClass("selected_op");
    $('#plus').removeClass("selected_op");
    $('#times').removeClass("selected_op");
    $('#minus').removeClass("selected_op");
}

function resetCalc(){
	operator = "";
	$("#divide").removeClass("selected_op");
    $('#plus').removeClass("selected_op");
    $('#times').removeClass("selected_op");
    $('#minus').removeClass("selected_op");
  /*  r = ['cero','','','','',''];
    fillSquares(fNdropLvl1, r, 0);
    fillSquares(fNdropLvl2, r, 1);
    fillSquares(fNdropLvl3, r, 2);
    fillSquares(fNdropLvl4, r, 3);
    fillSquares(fNdropLvl5, r, 4);
    fillSquares(fNdropLvl6, r, 5);
    fillSquares(sNdropLvl1, r, 0);
    fillSquares(sNdropLvl2, r, 1);
    fillSquares(sNdropLvl3, r, 2);
    fillSquares(sNdropLvl4, r, 3);
    fillSquares(sNdropLvl5, r, 4);
    fillSquares(sNdropLvl6, r, 5); */
}