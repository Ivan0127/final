
image_array = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
  'kkb.jpg',
    'rising.jpg',
    '7.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '27.jpg',
    '28.jpg',
    '29.jpg',
    '30.jpg',
    '31.jpg',
    '32.jpg',
    '33.jpg',
    '34.jpg',
    '35.jpg',
    '36.jpg',
    '37.jpg',
    '38.jpg',
    '39.jpg',
    'deep.jpg',
    '9.jpeg',
    '10.jpeg',
    '11.jpeg',
    '12.jpeg',
    '13.jpeg',
    '14.jpeg',
    '15.jpeg',
    '16.jpeg',
    '40.jpeg',
    'worldjpg.jpg',
    '4.jpg'
  ]
  
  function get_random_image(){
     random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
  document.getElementById('image_shower').src = `./images/${selected_image}`
  }
  function alert1() {
    alert("Tip: you can hit the shuffle button multiple times.");
  }

  function getVote(int) {
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
        document.getElementById("survey").innerHTML=this.responseText;
      }
    }
    xmlhttp.open("GET","poll_vote.php?vote="+int,true);
    xmlhttp.send();
  }

  