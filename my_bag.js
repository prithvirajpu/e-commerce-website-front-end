// init Isotope
  var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });
  var filterbtns=$('.filter-button-group').find('button');
  function resetFilterBtns(){
    filterbtns.each(function(){
      $(this).removeClass('active-filter-btn');
    })
  }

  // const dark=document.getElementById("dark");
  // const body=document.getElementById("body");

  // dark.addEventListener('click',function(){
  //   this.classList.toggle('bi-moon-stars-fill');
  //   if(this.classList.toggle("bi-brightness-high-fill")){
  //     body.style.background='white';
  //     body.style.color='black';
  //     body.style.transition='2s';
  //   }else{
  //     body.style.background='black';
  //     body.style.color='white';
  //     body.style.transition='2s';
  //   }
  // })
  