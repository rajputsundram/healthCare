const slides=document.querySelectorAll(".slide");
var count=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index *100}%`;

    }
)



var goPrev=()=>
{
    if(count==0)
    {
        count=4;
    }
    
    count--;
    slideImg();
}


var goNext=()=>
{
    
    count++;
    slideImg();
    if(count==4)
    {
        count=-1;
    }
}

const slideImg=()=>{
    slides.forEach(
    
      (slide)=>{
        slide.style.transform=`translateX(-${count*100}%)`;
        

        }
    )
    

}
setInterval(goNext,3000)