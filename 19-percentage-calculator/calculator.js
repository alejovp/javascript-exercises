// Form 1:

$('#f1-calculate').on('click', function () {
  var a = $('#f1-a').val()
  var b = $('#f1-b').val()
  var resultF1 = a / 100 * b
  if (isNaN(resultF1)) {
    $('#f1').addClass('has-error')
  } else {
    $('#f1').removeClass('has-error')
    $('#f1-result').val(resultF1)
  }
})

// Form 2:

$('#f2-calculate').on('click', function () {
  var a = $('#f2-a').val()
  var b = $('#f2-b').val()
  var resultF2 = a / b * 100
  if (isNaN(resultF2)) {
    $('#f2').addClass('has-error')
  } else {
    $('#f2').removeClass('has-error')
    $('#f2-result').val(resultF2)
  }
})

// Form 3:

$('#f3-calculate').on('click', function () {
  var a = $('#f3-a').val()
  var b = $('#f3-b').val()
  var resultF3 = (b - a) / a * 100
  if (isNaN(resultF3)) {
    $('#f3').addClass('has-error')
  } else {
    $('#f3').removeClass('has-error')
    $('#f3-result').val(resultF3)
  }
})
