var avail_h=window.innerHeight;

$(document).ready(function(){
  $('#go_login').click(function(){f_login();});
  $('#go_signup').click(function(){f_signup();});
  $('#go_share').click(function(){$('#frm_share').submit();});
  $('#go_contact').click(function(){f_contact();});
  $('.go_recovery').click(function(){f_recovery();});
  $('#menu_toggle').click(function(){ $('#menu_container_new').toggle(); $('#notificaciones_container').hide(); });
  $('body').append("<a href='' id='fancy_link' class='fancybox' style='display:none;'></a>");

  $("#back-top").hide();
  $(function(){
    $(window).scroll(function(){if ($(this).scrollTop()>100){ $('#back-top').fadeIn();}else{ $('#back-top').fadeOut();}});
    $('#back-top').click(function(){ $('body,html').animate({scrollTop:0},800);return false;});
  });
});

function f_login(){
  var m=$('#umail').val(); var p=$('#upass').val();

  $.ajax({
    url:url_services,cache:false,method:"POST",dataType:"json",timeout:'10000',
    data:{r:'login',m:m,p:p},
    success:function(j){if(j.s=="200"){ $('div#div_session').html(j.pl);location.reload();}else{alert(j.ms);}}
  });

  //$.post(url_services,{r:'login',m:m,p:p},function(j){if(j.s=="200"){$('div#div_session').html(j.pl);location.reload();}else{alert(j.ms);}},'json');
}

function f_signup(){window.location.href='/pages.php?r=.registro';}
function f_contact(){window.location.href='/pages.php?r=.contacto';}
function f_recovery(){window.location.href='/pages.php?r=.recuperar';}
function f_color(id){ $('#'+id).css('color','#005a71');}
function f_white(id){ $('#'+id).css('color','#ffffff');}
function resize_scorm(h){ $('#frame_scorm').attr('height',h);}
function resize_elem(i,h){alert(h); $('#'+i).attr('height',h);}
function remove(sel){ $(sel).remove();}
function remove_row(el){ $(el).parents('tr').remove();}
function remove_atr(el,at){ $(el).attr(at,'');}
function show(sel){ $(sel).show();}
function hide(sel){ $(sel).hide();}
function swap(h,s){hide(h);show(s);}
function tinify_callback(tiny){remove_atr('#'+$(tiny).attr('id')+'_ifr', 'title');}

function fancyme(type,url,w,h,onclose){

  var autoSize=false,autoHeight=false,autoWidth=false;

  if(w==undefined||w==null||w=='auto'){var w='90%';}else{autoWidth=true;}
  if(h===undefined||h===null||h=='auto'){var autoHeight=true;}
  if(onclose==undefined||onclose==null){var onclose=function(){ }}
  if(onclose=='reload'){var onclose=function(){location.reload(true);} }


  //console.log(url);
  //$('#fancy_link').attr('href',url).attr('data-fancybox-type',type).attr('data-fancybox-width',w).click();
  //modal:true,closeBtn:false,closeClick:false,

  $.fancybox.open({
    autoScale:true,
    autoSize:false,
    autoHeight:autoHeight,
    height:h,
    width:w,
    autoWidth:true,
    transitionIn:'elastic',transitionOut:'elastic',
    speedIn:500,speedOut:300,
    autoDimensions:true,
    //centerOnScroll:true,
    padding:0,
    type:type,href:url,
    afterClose:onclose,
  });
}
