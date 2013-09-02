var bw_gallery_current_img = "bw_gallery_imgdisplay_item0";
$(window).load(function() {
	$('.bw_gallery_titem img').click(function() {
		var bwct = $(this).attr('rel');
		clearInterval(bw_gallery_rotate);
		//console.log(bwct);
		if (!!bwct && bwct != bw_gallery_current_img) {
			$('.'+bwct).fadeIn('slow');
			$('.'+bw_gallery_current_img).fadeOut('slow');
			bw_gallery_current_img = bwct;
		}
	});
	
	var bw_tlist_width = $('#bw_gallery_tlist').width();
	//console.log(bw_tlist_width);
	var bw_tlist_dwidth = 640;
	var bw_tlist_mwidth = bw_tlist_width - bw_tlist_dwidth;
	$('#bw_gallery_previous').click(function() {
		var n = parseFloat($('#bw_gallery_tlist').css('left')) + bw_tlist_dwidth;
		//console.log(n);
		if (n > 0) {n = 0;}
		//console.log(n);
		bw_gallery_move_tlist(n);
		bw_gallery_arrow_management(n);
	});
	$('#bw_gallery_next').click(function() {
		var n = parseFloat($('#bw_gallery_tlist').css('left')) - bw_tlist_dwidth;
		//console.log(n + " " + -1*bw_tlist_mwidth);
		if (n < -1*bw_tlist_mwidth) {n = -1*bw_tlist_mwidth;}
		//console.log(n);
		bw_gallery_move_tlist(n);
		bw_gallery_arrow_management(n);
	});
	function bw_gallery_move_tlist(n) {
		var nleft = n+"px";
		$('#bw_gallery_tlist').animate(
			{left:nleft},
			1000
		);
	}
	function bw_gallery_arrow_management(n) {
		var num = n;
		if (num == 0) {
			$('#bw_gallery_next').show();
			$('#bw_gallery_previous').hide();
		}
		else if (num == -1*bw_tlist_mwidth) {
			$('#bw_gallery_next').hide();
			$('#bw_gallery_previous').show();
		}
		else {
			$('#bw_gallery_next').show();
			$('#bw_gallery_previous').show();
		}
	}
	var bw_gallery_rotate = setInterval(function() {
		bw_gallery_images_count += 1;
		if (bw_gallery_images_count >= bw_gallery_images_num) {
			bw_gallery_images_count = 0;
		}
		$('.'+bw_gallery_current_img).fadeOut('slow');
		bw_gallery_current_img = "bw_gallery_imgdisplay_item"+bw_gallery_images_count;
		$('.'+bw_gallery_current_img).fadeIn('slow');
	},5000);
});
