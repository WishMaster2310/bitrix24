/* 
* @Author: Alexader
* @Date:   2015-04-29 12:01:33
* @Last Modified by:   Alexader
* @Last Modified time: 2015-04-29 13:23:36
*/

'use strict';

jQuery(function(){
    var ajaxWebFormClass = '.js-ajax-webform';
    $(ajaxWebFormClass).on('submit', 'form', function(e){
        e.preventDefault();

        var $form = $(this),
            $parent = $form.closest(ajaxWebFormClass),
            url = $parent.data('url') || '/ajax/webform.php',
            id = $parent.data('id'),
            template = $parent.data('template'),
            data = $form.serialize();
        $.post(url, data, function(result){
            var $result = $(result),
            $result = $result.is(ajaxWebFormClass) ? $result : $result.find(ajaxWebFormClass);
            if (id) {
                if (template) {
                    $result = $result.filter('[data-id="'+id+'"][data-template="'+template+'"]');
                } else {
                    $result = $result.filter('[data-id="'+id+'"]');
                }
            }
            $parent.html($result.html());
        });
    });
});