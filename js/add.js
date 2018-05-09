$(function(){
	$('.check').click(function(){
		$('.check ul').toggle();
	})
	for(var i=0; i<$('.check ul li').length; i++){
		$('.check ul li').click(function(){
			$('.check>div').html($(this).html()+'<span></span>');
		})
	}
})
