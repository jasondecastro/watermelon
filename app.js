var baseURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='

$('button#searchButton').on('click', function(){
  var searchQuery = $('#searchInput').val()

  $.ajax({
    url: 'https://wordsapiv1.p.mashape.com/words/'+ searchQuery +'/antonyms', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function(data) {
      antonym = data["antonyms"][0];
      if (searchQuery === "sad") {
        var audio = new Audio('marley.mp3');
        audio.play();
        $('h1').html('<span class="rainbow">watermelon.</span>');
      };

      var call = function() {
        $.ajax({
         url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + antonym,
         method: 'GET',
         success: function(response, status){
           $(".result").html("<hr style='width: 300px;'><br><center><img style='width:50%;height:33%;' src="+ response["data"]["image_url"] +"></center>")
         }
        })
      }

      call()

      setInterval(call, 3000)

    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "GFfpHTISarmshcNMsm0DKrHqWHIZp1tALGMjsnkKs3YeYaWnlu"); // Enter here your Mashape key
    }
  });

  // $.ajax({
  //  url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + searchQuery,
  //  method: 'GET',
  //  success: function(response, status){
  //    $(".result").html("<hr style='width: 300px;'><br><center><img style='width:480px;height:340px;' src="+ response["data"]["image_url"] +"></center>")
  //  }
  // })
});

$('#searchInput').on('keydown', function(e){
  if (e.which === 13) {
    event.preventDefault();

    var searchQuery = $('#searchInput').val()
    $('#searchInput').val("")


    $.ajax({
     url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + searchQuery,
     method: 'GET',
     success: function(response, status){
       $(".result").html("<hr style='width: 300px;'><br><center><img style='width:480px;height:360px;' src="+ response["data"]["image_url"] +"></center>")
     }
    })
  }
});
