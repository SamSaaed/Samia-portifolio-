var i=0;
var slidesImage =["images/Capture3.JPG",
"images/Capture.JPG"];
var slideshow = function(){

    document.slideshow.src = slidesImage[i];
if (i <slidesImage.length - 1){
i++;
}else{i=0;}
setTimeout("slideshow()",3000);

}
slideshow()
var i=0;
var slidesImage =["images/Capture.JPG",
"images/Capture3.JPG"];
var slideshow1 = function(){

    document.slideshow1.src = slidesImage[i];
if (i <slidesImage.length - 1){
i++;
}else{i=0;}
setTimeout("slideshow1()",3000);

}
slideshow1()

