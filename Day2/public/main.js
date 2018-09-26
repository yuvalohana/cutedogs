let dogs= []
let render= function(){
    var source = $('#menu-template').html();
var template = Handlebars.compile(source);
var newHTML = template({dogs});

$('.dogs').empty().append(newHTML);
}

$(".dog-button").on("click",function(){
   $.get("dog", function(data){
       dogs=data
       console.log(data);
       render()
   })

})