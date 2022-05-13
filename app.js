
function generateAlbums()   
{  
   //array of images with image location, height, and width  
   var imageArray = [  
   {   
    src: "./images/time.png", 
     width: "500",  
     height: "500"  
   },   
   {  
     src: "./images/rising.jpg",  
     width: "500",  
     height: "500"  
   },   
   {  
     src: "./images/worldjpg.jpg",  
     width: "500",  
     height: "500"  
   },  
   {  
    src: "./images/kkb.jpg",  
    width: "500",  
    height: "500"  
  },  
  {  
    src: "./images/1.jpg",  
    width: "500",  
    height: "500"  
  },  
  {  
    src: "./images/2.jpg",  
    width: "500",  
    height: "500"  
  },  
  {  
    src: "./images/3.jpg",  
    width: "500",  
    height: "500"  
  },  
  {  
    src: "./images/4.jpg",  
    width: "500",  
    height: "500"  
  },  
  {  
    src: "./images/5.jpg",  
    width: "500",  
    height: "500"  
  },  
  {  
    src: "./images/6.jpg",  
    width: "500",  
    height: "500"  
  },  
  {  
    src: "./images/7.jpg",  
    width: "500",  
    height: "500"  
  },  
  {  
    src: "./images/8.jpg",  
    width: "500",  
    height: "500"  
  },  
   {  
     src: "./images/deep.jpg", 
     
     width: "500",  
     height: "500",
    }
    
];  
      
    //find the length of the array of images  
    var arrayLength = imageArray.length;  
    var newArray = [];  
    for (var i = 0; i < arrayLength; i++) {  
        newArray[i] = new Image();  
        newArray[i].src = imageArray[i].src;  
        newArray[i].width = imageArray[i].width;  
        newArray[i].height = imageArray[i].height;  
    }  
     
  // create random image number  
  function getRandomNum(min, max)   
  {  
      // generate and return a random number for the image to be displayed   
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;  
      return newArray[imgNo];  
  }    
  
  // 0 is first image and (preBuffer.length - 1) is last image of the array  
  var newImage = getRandomNum(0, newArray.length - 1);  
   
  // remove the previous images  
  var images = document.getElementsByTagName('img');  
  var l = images.length;  
  for (var p = 0; p < l; p++) {  
     images[0].parentNode.removeChild(images[0]);  
  }  
  // display the new random image    
  document.body.appendChild(newImage);  
}  
