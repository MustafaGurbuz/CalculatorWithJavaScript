$document.ready(function(){
   $("#buton").click(function(){
   var x=$("#deger1").val();
   var y=$("#deger2).val();
   var toplam=$("#topla");
   var cikarma=$("#cikar");
   var carpma=$("#carp");
   var bolme=$("#bolme");
   if(toplam==1 && cikarma==0 && carpma==0 && bolme==0)
   { sonuc=x+y;};
   else if(toplam==0 && cikarma==1 && carpma==0 && bolme==0)
   { sonuc=x-y;};
    else if(toplam==0 && cikarma==0 && carpma==1 && bolme==0)
   { $("#sonuc").val(x*y);}
    else if(toplam==0 && cikarma==0 && carpma==0 && bolme==1)
   { sonuc=x/y;};
   else {};
});
