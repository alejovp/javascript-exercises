// Search area
$('#beer-search button').on('click', function (e) {
  var urlSearch = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=<%QUERY%>'
  var valueSearched = $(this).parents().find('input').val()
  var urlFilled = urlSearch.replace('<%QUERY%>', valueSearched)
  $.ajax({
    url: urlFilled
  })
    .done(function (beersArray) {
      console.log(beersArray)
      var beerBrand = beersArray.shift()
      console.log(beerBrand)
      var beerImg = beerBrand.images.large
      var htmlBeerElem = '<div class="thumbnail col-sm-6 col-md-4 col-lg-3">' +

            '<div class="caption">' +
              '<h3><%BEERNAME%></h3>' +
              '<p><button type="button" data-beerid="<%BEERID%>" data-toggle="modal" data-target="#myModal" class="btn btn-primary">More info</button></p>' +
            '</div>' +
          '</div>'
      var beersList = beersArray.map(function (beer) {
        return htmlBeerElem.replace('<%BEERID%>', beer.id).replace('<%BEERNAME%>', beer.name)
      })
      $('#img-box > div').html('<img src="' + beerImg + '" class="img-responsive">')
      $('#result-box div:first-child').html('<h4>' + beerBrand.name + '</h4>')
      $('#result-box div:last-child').html('<h4>Showing ' + beersArray.length + ' results</h4>')
      $('#result-box, #img-box').removeClass('hidden')
      $('#intro-box').addClass('hidden')
      $('#beer-display').html(beersList.join(''))
    })
})

// Display search results area
$('#beer-display').on('click', 'button', function () {
  var urlSearch = 'https://quiet-inlet-67115.herokuapp.com/api/beer/<%ID-BEER%>'
  var valueSearched = $(this).data('beerid')
  console.log(valueSearched)
  var urlFilled = urlSearch.replace('<%ID-BEER%>', valueSearched)
  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    console.log(response)
    var modalTittle = response.name
    var modalText = response.style.description
    $('.modal-title').text(modalTittle)
    $('.modal-body').text(modalText)
  })
})

