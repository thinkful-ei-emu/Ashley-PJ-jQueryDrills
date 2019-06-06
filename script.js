'use strict';
/*eslint-env jquery*/

function event(){
  $('.thumbnail').on('click', e => {
  
    let selectedSrc = $(e.currentTarget).find('img').attr('src');
  
    $('.hero img').attr('src',selectedSrc)
  });
};
  
$(event);