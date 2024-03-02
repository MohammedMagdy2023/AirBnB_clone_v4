$(document).ready(function(){
    const amenities_lst = {};
    $('.amenities .popover input').change(function(){
        if ($(this).is(':checked')){
            amenities_lst[$(this).attr('data-name')] = $(this).attr('data-id');
        } else if ($(this).is(':not(:checked)')){
            delete amenities_lst[$(this).attr('data-name')];
        };
        const name = Object.keys(amenities_lst);
        $('.amenities h4').text(name.sort().join(', '));
    });
});