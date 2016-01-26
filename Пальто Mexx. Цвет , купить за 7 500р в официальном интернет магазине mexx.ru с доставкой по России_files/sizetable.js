;(function($){
    
	window.show_sizetable = function(link){
		console.log($(link).data('category'));
		initSizeTable();
		var $size_map = $('#size_div'),
			cat = $(link).data('category'),
			sub = $(link).data('subcategory');

		console.log(cat, sub);
		if (cat) {
			$('.tab', $size_map).addClass('closed');			
			var $tab = $size_map.find('div.tab.'+cat);
			$tab.removeClass('closed');
			if (sub) {
				$('.drop-down',  $tab).addClass('closed');
				$('.drop-down.'+sub, $tab).removeClass('closed');
			} else { 
				$tab.find('.drop-down:eq(0)').removeClass('closed');
			}
		}
		$size_map.showPopup();
		
	}
	
	function initSizeTable() {
    	
		$size_table = $('#size_div');
		if ($size_table.data('inited')) {
			return;
		}
		
        // Размеры
        var 
        	$size_table = $('#size_div'),
        	$tabs = $('ul.Tabs > li > a', $size_table),
            $content = $('div.tab-content', $size_table),
            $uid = $('#sizes-popup').attr('rel'),
            $default = $('div.' + $_param + '_' + $tabs.eq(0).attr('rel')),
            $params = $('.ParamTabs a', $size_table),
            $_param = null;
        
        
        $tabs.click(function(){
        	var rel = $(this).attr("rel"),
        		$divs = $size_table.find('.tab .tab-content'); 
        	$divs.addClass('closed');
        	$divs.filter('.'+rel).removeClass('closed');
        });
        
        $('.drop-down span', $size_table).click(function(){
        	$(this).parent().toggleClass('closed');
        });
        
        
        $params.click(function(){
        	$params.removeClass('current');
        	var tabName = $(this).addClass('current').data('tab');
        	$('.tab', $size_table).addClass('closed');
        	$size_table.find('.tab.'+tabName).removeClass('closed');
        });
        
        $size_table.data('inited', true);
	}
})(jQuery);