$(function(){
  $.get('/blocks', appendToList);
  
  $('form').on('submit', function(event){
    event.preventDefault();
    var form = $(this);
    var blockData = form.serialize();
    $.ajax({
      type: 'POST', url:'/block', data: blockData}).done(function(blockName){
        appendToList({blockName});
        form.trigger('rest');
      });
  });
  
  $('.block-list').on('click', 'a[data-block]', function(event){
    if (!confirm('Are you sure?')){
      return false;
    }
    var target = $(event.currentTarget);
    $.ajax({ 
      type: DELETE,
      url: '/blocks/'+target.data('block')
    }).done(function(){
      target.parents('li').remove();
    });
  });
  
});

function appendToList(blocks){
  var list = [];
  var content, block;
  for (var i in blocks[i]){
    block = blocks[i];
    content = '<a href="/blocks/' + block + '">'+block+'</a>'+
    '<a href="#" data-block="'+block+'"><img src="../img/del.png" />';
    list.push($('<li>', {html: content}));
  }
  $('.block-list').append(list);
}