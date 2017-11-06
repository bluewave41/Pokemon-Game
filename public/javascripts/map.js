$(document).ready(function() {
   $('img').click(function() {
       $('#encounter').empty();
       $.ajax({url: 'http://localhost:3000/encounter/littleroot', type: "POST"}).done(function(data) {
          if(data) {
              console.log(data);
              $('#encounter').append("Wow, you found a " + data.name + '!</br>' + '<img src="/images/pokemon/'+data.id+'.png"/>');
          }
       });
   });
});