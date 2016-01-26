function share_fb(url, title, img){
	var h = window.clientHeight||window.innerHeight, w = window.clientWidth||window.innerWidth;
	// FB doesn't accept share url parameters anymore (see https://developers.facebook.com/x/bugs/357750474364812/)
	window.open('https://www.facebook.com/sharer/sharer.php?s=100&p[url]='+encodeURIComponent(url)+'&p[images][0]='+encodeURIComponent(img)+'&p[title]='+encodeURIComponent(title)+'&utm_source=fcbook_user&utm_medium=partner_priv_but&utm_campaign=fcbook_mark&utm_content=fcbook_mark',
    		'sharer',
    		'left='+((w-626)/2)+',top='+((h-536)/2)+',toolbar=0,status=0,width=626,height=536');
    return false;
}
function share_vk(url){
	var img = $j(".items").find("img:eq(0)").attr("src"), h = window.clientHeight||window.innerHeight, w = window.clientWidth||window.innerWidth;
    window.open('http://vkontakte.ru/share.php?url='+encodeURIComponent(url)+'&image='+encodeURIComponent(img)+'&utm_source=vkont_user&utm_medium=partner_priv_but&utm_campaign=vkont_mark&utm_content=vkont_mark',
    		'sharer',
    		'left='+((w-626)/2)+',top='+((h-536)/2)+',toolbar=0,status=0,width=626,height=536');
    return false;
}
function share_ok(url) {
	var h = window.clientHeight||window.innerHeight, w = window.clientWidth||window.innerWidth;
	window.open('http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl='+encodeURIComponent(url), 
			'sharer', 
			'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');
	return false;
}
function share_tw(url,text,hash) {
	var h = window.clientHeight||window.innerHeight, w = window.clientWidth||window.innerWidth;
	window.open('https://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text)+'&lang=ru&hashtags='+hash, 
			'sharer', 
			'left='+((w-550)/2)+', top='+((h-440)/2)+', width=550, height=440, personalbar=0,toolbar=0,scrollbars=1,resizable=1');
	return false;
}
function share_us(url) {
	var h = window.clientHeight||window.innerHeight, w = window.clientWidth||window.innerWidth;
	window.open(url, 
			'sharer', 
			'left='+((w-550)/2)+', top='+((h-440)/2)+', width=550, height=440, personalbar=0,toolbar=0,scrollbars=0,resizable=0');
	return false;
}