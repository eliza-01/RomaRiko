var CommentsVk = (function () {

	var triggerEvent = function(el,eventName){
		var event;
		if(document.createEvent){
			event = document.createEvent('HTMLEvents');
			event.initEvent(eventName,true,true);
		}else if(document.createEventObject){// IE < 9
			event = document.createEventObject();
			event.eventType = eventName;
		}
		event.eventName = eventName;
		if(el.dispatchEvent){
			el.dispatchEvent(event);
		}else if(el.fireEvent && htmlEvents['on'+eventName]){// IE < 9
			el.fireEvent('on'+event.eventType,event);// can trigger only real event (e.g. 'click')
		}else if(el[eventName]){
			el[eventName]();
		}else if(el['on'+eventName]){
			el['on'+eventName]();
		}
	}

	var loadVkApi = function (element, src) {
		
		if ( typeof VK != 'undefined' && typeof VK.Widgets != 'undefined' ) {

			element.dispatchEvent( new Event('vk_api_loaded') );
			return true;
		}

		var scriptApi = document.createElement('script');

	    scriptApi.type = 'text/javascript'; 
        scriptApi.async = true;
		  
    	document.head.appendChild(scriptApi);

    	scriptApi.onload = function () {
    		
    		console.log('VK api loaded');

			/*
			* element.dispatchEvent( new Event('vk_api_loaded') );
			* Заменена функция для корректной работы в IE
			*
			 */
			triggerEvent(element,'vk_api_loaded');

    	}

	    scriptApi.src = '//vk.com/js/api/openapi.js?116';

	    return true;
	};

	var initVkApp = function (initSettings) {

		VK.init(initSettings);		
	};

	var initComments = function (commentsSettings) {

		if ( typeof VK != 'undefined' && typeof VK.Widgets != 'undefined' ) {

			VK.Widgets.Comments("vk_comments", commentsSettings);
		}
	};

	vkComments = function () {};

	vkComments.prototype = (function () {

		return {

			init: function (element, initVkAppSettings, commentsSettings) {

				element.addEventListener('vk_api_loaded', function (e) {

					initVkApp(initVkAppSettings);
					initComments(commentsSettings);

				}, false);
	
				loadVkApi(element);
				
				return this;
			}
		}

	})();

	return vkComments;

})();

try {

	var element = document.getElementById('vk_comments');
	var data = JSON.parse(document.getElementById('vk_comments_data').innerHTML);

	(new CommentsVk()).init(element, data.initVkAppSettings, data.commentsSettings);
}
catch (e) {

	console.log('Ошибка инициализации комментариев вконтакте.');
	console.log(e);
}
