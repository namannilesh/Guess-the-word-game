player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");
player1_score= 0;
player2_score= 0;

document.getElementById("player1_name").innerHTML= player1_name+" : ";
document.getElementById("player2_name").innerHTML= player2_name+" : ";
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question Turn- "+player1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn- "+player2_name;

function send() {
 get_word= document.getElementById("word").value ;
 word= get_word.toLowerCase();
 console.log(word); 
 
 c1=word.charAt(1);
 console.log(c1);

 len1=Math.floor(word.length/2);
 c2=word.charAt(len1);
 console.log(c2);

 len2=word.length-1;
 c3=word.charAt(len2);
 console.log(c3);

 remove_c1=word.replace(c1,"_");
 remove_c2=remove_c1.replace(c2,"_");
 remove_c3=remove_c2.replace(c3,"_");
 console.log(remove_c3);

 qw="<h4 id='word_display'>Q."+remove_c3+"</h4>";
 ib="<br>Answer:<input type='text' id='input_check_box'>";
 cb="<br><br><button class='btn btn-info ' onclick='check()'>CHECK</button>";
 row=qw+ib+cb;
 document.getElementById("output").innerHTML=row;
 document.getElementById("word").value ="";
}
question_turn="player1";
answer_turn="player2";
function check() {
 get_answer= document.getElementById("input_check_box").value; 
 answer=get_answer.toLowerCase();
 console.log("answer="+answer);
if (answer==word) {
if (answer_turn=="player1") {
 player1_score=player1_score+1; 
 document.getElementById("player1_score").innerHTML= player1_score;
  
} else {
    player2_score=player2_score+1; 
    document.getElementById("player2_score").innerHTML= player2_score;
       
} 
    
   
}
if (question_turn=="player1") {
question_turn="player2";
document.getElementById("player_question").innerHTML= "Question Turn- "+player2_name;
  
} else {
    question_turn="player1";
    document.getElementById("player_question").innerHTML= "Question Turn- "+player1_name;
        
}
if (answer_turn=="player1") {
 answer_turn="player2"; 
 document.getElementById("player_answer").innerHTML= "Answer Turn- "+player2_name;
  
} else {
    answer_turn="player1"; 
    document.getElementById("player_answer").innerHTML= "Answer Turn- "+player1_name;
        
}
document.getElementById("output").innerHTML="";
}