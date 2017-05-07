$(document).ready(function() {
    
    // initial grid
    grid(10000);
    
    $('.square').mouseenter(function(){
        $(this).css('background', '#598159');
    });
    
    $('#clear').click(function(){
        $('.square').css('background', '#ffffff');
    });
    
    
    $('#resize').click(function() {
        resize();
    });
    
});


function grid(n) {
    var grid = "";
      for (i = 0; i < n; i++) {
          grid += $('.container').append('<div class="square"></div>');
    }
}

// change squaresize
function square(a) {
    var newA = 500 / a;
    $('.square').css({
        'width' :  newA + 'px',
        'height' : newA + 'px'
    });
}

// 
function resize() {
    var input = prompt('Choose size of grid in whole numbers: 1 - 100');
    var squareSize = parseInt(input);
    square(squareSize);
    $('.square').css('background', '#ffffff');
    
}
