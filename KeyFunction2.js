// 使用 Mousetrap.bindGlobal ***

// For Count.html Use


var Bible_focus = 5; // 暫時用


function keyFunction3(arg1)
{

      // reset
      key_b=1;
      key_b1=1;
      key_b2=1;
      key_c=0;
      key_c1=0;
      key_c2=0;
      key_c3=0;
      key_v=0;
      key_v1=0;
      key_v2=0;
      key_v3=0;
      key_t=0;
      key_t1=0;
      key_t2=0;
      key_t3=0;
      c_int=0;
      v_int=1;
      t_int=1;


   b_int=arg1-1;

   //head1();readbook(b_int,0,1);Send_to_win34(14,b_int,0,1,Send_word1,Send_word4,Send_word9);

   readbook(b_int,0,1);  
   efocus();
}

// For Keyboard Test New

   var Book_2_C1=""; // for book like (mt, mk, lk, jn...)
   var Book_2_C2="";
   var Book_2_Str="";

   var Book_3_C1=""; // for book like (gen, exo, num, deu...)
   var Book_3_C2="";
   var Book_3_C3="";
   var Book_3_Str="";

var key_b=0;  // 1 means pressed b
var key_c=0;  // 1 means pressed c (x)
var key_v=0;  // 1 means pressed v
var key_t=0;  // 1 means pressed t (y)

var key_j=0;  // 1 means pressed j

var key_1=0;  // 1 means pressed 1
var key_2=0;  // 1 means pressed 2
var key_3=0;  // 1 means pressed 3

var key_b1=0; // 1 means pressed, b1 means first digit of Book Number
var key_b2=0; // 1 means pressed, b2 means second digit of Book Number
var key_c1=0; // 1 means pressed, c1 means first digit of Chap Number
var key_c2=0; // 1 means pressed, c2 means second digit of Chap Number
var key_c3=0; // 1 means pressed, c3 means third digit of Chap Number
var key_v1=0; // 1 means pressed, v1 means first digit of Vers Number
var key_v2=0; // 1 means pressed, v2 means second digit of Vers Number
var key_v3=0; // 1 means pressed, v3 means third digit of Vers Number
var key_t1=0; // 1 means pressed, t1 means first digit of To Vers Number
var key_t2=0; // 1 means pressed, t2 means second digit of To Vers Number
var key_t3=0; // 1 means pressed, t3 means third digit of To Vers Number

var b_num;
var b_num1;
var b_num2;
var c_num;
var c_num1;
var c_num2;
var c_num3;
var v_num;
var v_num1;
var v_num2;
var v_num3;

var t_num;
var t_num1;
var t_num2;
var t_num3;

//var b_int=0;
//var c_int=0;
//var v_int=1;

var Book_3_Str_CF=0; // 0 means Check, 1 means No Check
var B_CF=0; // 0 means Check, 1 means No Check
var C_CF=0; // 0 means Check, 1 means No Check
var V_CF=0; // 0 means Check, 1 means No Check
var T_CF=0; // 0 means Check, 1 means No Check

function reset_Book_2_Str()
{
   Book_2_C1="";
   Book_2_C2="";
   Book_2_Str="";
   key_j=0;
   key_1=0;
   key_2=0;
   key_3=0;
}

function reset_Book_3_Str()
{
   Book_3_C1="";
   Book_3_C2="";
   Book_3_C3="";
   Book_3_Str="";
   key_j=0;
   key_1=0;
   key_2=0;
   key_3=0;
}

function reset_Keyin()
{
      key_b=0;
      key_b1=0;
      key_b2=0;
      key_c=0;
      key_c1=0;
      key_c2=0;
      key_c3=0;
      key_v=0;
      key_v1=0;
      key_v2=0;
      key_v3=0;
      key_t=0;
      key_t1=0;
      key_t2=0;
      key_t3=0;
      reset_Book_2_Str();
      reset_Book_3_Str();
}


// -----------


function keyFunction2(arg1)
{

   if(arg1=='j')
      key_j=1;

   if(arg1=='1')
      key_1=1;

   if(arg1=='2')
      key_2=1;

   if(arg1=='3')
      key_3=1;

   //  for Book Check with 2 letters
   if(arg1=='a'||arg1=='b'||arg1=='d'||arg1=='e'||arg1=='i'||arg1=='j'||arg1=='k'||arg1=='l'||arg1=='m'||arg1=='n'||arg1=='o'||arg1=='p'||arg1=='r'||arg1=='s'||arg1=='t'||arg1=='u'||arg1=='x'||arg1=='1'||arg1=='2'||arg1=='3'||arg1=='4'||arg1=='5'||arg1=='6'||arg1=='7'||arg1=='8'||arg1=='9'){ 
      var arg_tmp = arg1;

      if(Book_2_C1==""){
         Book_2_C1=arg_tmp;
      }
      else if(Book_2_C2==""){
         Book_2_C2=arg_tmp;
      }
      else {
         Book_2_C1=Book_2_C2;
         Book_2_C2=arg_tmp;
      }
      Book_2_Str= Book_2_C1 + Book_2_C2;

      if(Book_2_Str=='ex'){
         keyFunction3(2);
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
      }

      if(Book_2_Str=='du'){
         keyFunction3(5);
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
      }

      if(Book_2_Str=='ru'){
         keyFunction3(8);
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
      }

      if(Book_2_Str=='ne'){  //Neh
         keyFunction3(16);
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
      }

      if(Book_2_Str=='ps'){
         keyFunction3(19);
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
      }

      if(Book_2_Str=='is'){
         keyFunction3(23);
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
      }

      if(Book_2_Str=='ob' && key_j==0){
         keyFunction3(31);
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
         B_CF=1;
      }

      if(Book_2_Str=='na'){
         keyFunction3(34);
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
      }

      if(Book_2_Str=='mt'){
         keyFunction3(40);
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
         T_CF=1;
      }

      if(Book_2_Str=='mk'){
         keyFunction3(41);
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
      }

      if(Book_2_Str=='lk'){
         keyFunction3(42);
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
      }

      if(Book_2_Str=='jn' && key_1==0 && key_2==0 && key_3==0){
         keyFunction3(43);
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
      }

      // p1 to p9 for projection system, not in use for Bible reading system

      if(Book_2_Str=='p1'){
         keyFunction2('q');
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
         enableRolling();
         // test
         if(ANNO1_focus==1)
            document.getElementById('A1').scrollTop=0; 
         if(ANNO2_focus==1)
            document.getElementById('A2').scrollTop=0;
         if(ANNO3_focus==1)
            document.getElementById('A3').scrollTop=0;
         if(ANNO4_focus==1)
            document.getElementById('A4').scrollTop=0;
      }

      if(Book_2_Str=='p2'){
         keyFunction2('w');
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
         enableRolling();
         // test
         if(ANNO1_focus==1)
            document.getElementById('A1').scrollTop=250; 
         if(ANNO2_focus==1)
            document.getElementById('A2').scrollTop=250;
         if(ANNO3_focus==1)
            document.getElementById('A3').scrollTop=250;
         if(ANNO4_focus==1)
            document.getElementById('A4').scrollTop=250;
      }

      if(Book_2_Str=='p3'){
         keyFunction2('u');
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
         enableRolling();
         // test
         if(ANNO1_focus==1)
            document.getElementById('A1').scrollTop=500; 
         if(ANNO2_focus==1)
            document.getElementById('A2').scrollTop=500;
         if(ANNO3_focus==1)
            document.getElementById('A3').scrollTop=500;
         if(ANNO4_focus==1)
            document.getElementById('A4').scrollTop=500;
      }

      if(Book_2_Str=='p4'){
         keyFunction2('y');
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
         enableRolling();
         // test
         if(ANNO1_focus==1)
            document.getElementById('A1').scrollTop=750; 
         if(ANNO2_focus==1)
            document.getElementById('A2').scrollTop=750;
         if(ANNO3_focus==1)
            document.getElementById('A3').scrollTop=750;
         if(ANNO4_focus==1)
            document.getElementById('A4').scrollTop=750;
      }

      if(Book_2_Str=='p5'){
         keyFunction2('f');
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
         enableRolling();
         // test
         if(ANNO1_focus==1)
            document.getElementById('A1').scrollTop=1000; 
         if(ANNO2_focus==1)
            document.getElementById('A2').scrollTop=1000;
         if(ANNO3_focus==1)
            document.getElementById('A3').scrollTop=1000;
         if(ANNO4_focus==1)
            document.getElementById('A4').scrollTop=1000;
      }

      if(Book_2_Str=='p6'){
         keyFunction2('Q');
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
         enableRolling();
         // test
         if(ANNO1_focus==1)
            document.getElementById('A1').scrollTop=1250; 
         if(ANNO2_focus==1)
            document.getElementById('A2').scrollTop=1250;
         if(ANNO3_focus==1)
            document.getElementById('A3').scrollTop=1250;
         if(ANNO4_focus==1)
            document.getElementById('A4').scrollTop=1250;
      }

      if(Book_2_Str=='p7'){
         keyFunction2('W');
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
         enableRolling();
         // test
         if(ANNO1_focus==1)
            document.getElementById('A1').scrollTop=1500; 
         if(ANNO2_focus==1)
            document.getElementById('A2').scrollTop=1500;
         if(ANNO3_focus==1)
            document.getElementById('A3').scrollTop=1500;
         if(ANNO4_focus==1)
            document.getElementById('A4').scrollTop=1500;
      }

      if(Book_2_Str=='p8'){
         keyFunction2('U');
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
         enableRolling();
         // test
         if(ANNO1_focus==1)
            document.getElementById('A1').scrollTop=1750; 
         if(ANNO2_focus==1)
            document.getElementById('A2').scrollTop=1750;
         if(ANNO3_focus==1)
            document.getElementById('A3').scrollTop=1750;
         if(ANNO4_focus==1)
            document.getElementById('A4').scrollTop=1750;
      }

      if(Book_2_Str=='p9'){
         keyFunction2('Y');
         reset_Book_2_Str();
         reset_Book_3_Str();
         Book_3_Str_CF=1;
         enableRolling();
         // test
         document.getElementById('A3').scrollTop=2000;
         if(ANNO1_focus==1)
            document.getElementById('A1').scrollTop=2000; 
         if(ANNO2_focus==1)
            document.getElementById('A2').scrollTop=2000;
         if(ANNO3_focus==1)
            document.getElementById('A3').scrollTop=2000;
         if(ANNO4_focus==1)
            document.getElementById('A4').scrollTop=2000;
      }

      // p1 to p9 for projection system, not in use for Bible reading system


   }  // End of Book Check with 2 letters


   if( Book_3_Str_CF==0){ //  for Book Check with 3 letters

      var arg_tmp = arg1;

      if(Book_3_C1==""){
         Book_3_C1=arg_tmp;
      }
      else if(Book_3_C2==""){
         Book_3_C2=arg_tmp;
      }
      else if(Book_3_C3==""){
         Book_3_C3=arg_tmp;
      }
      else {
         Book_3_C1=Book_3_C2;
         Book_3_C2=Book_3_C3;
         Book_3_C3=arg_tmp;
      }
      Book_3_Str= Book_3_C1 + Book_3_C2 + Book_3_C3;

      if(Book_3_Str=='gen'){
         keyFunction3(1);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='exo'){
         keyFunction3(2);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='lev'){
         keyFunction3(3);
         reset_Book_2_Str();
         reset_Book_3_Str();  
         V_CF=1;
      }

      if(Book_3_Str=='num'){
         keyFunction3(4);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='deu'){
         keyFunction3(5);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='jos'){
         keyFunction3(6);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='jug'){
         keyFunction3(7);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='rth'){
         keyFunction3(8);
         reset_Book_2_Str();
         reset_Book_3_Str();
         T_CF=1;
      }

      if(Book_3_Str=='1sa'){
         keyFunction3(9);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='2sa'){
         keyFunction3(10);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='1ki'){
         keyFunction3(11);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='2ki'){
         keyFunction3(12);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='1ch'){
         keyFunction3(13);
         reset_Book_2_Str();
         reset_Book_3_Str();
         C_CF=1;
      }

      if(Book_3_Str=='2ch'){
         keyFunction3(14);
         reset_Book_2_Str();
         reset_Book_3_Str();
         C_CF=1;
      }

      if(Book_3_Str=='eza'){
         keyFunction3(15);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='ezr'){
         keyFunction3(15);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='est'){
         keyFunction3(17);
         reset_Book_2_Str();
         reset_Book_3_Str();
         T_CF=1;
      }

      if(Book_3_Str=='job'){
         keyFunction3(18);
         reset_Book_2_Str();
         reset_Book_3_Str();
         B_CF=1;
      }

      if(Book_3_Str=='pro'){
         keyFunction3(20);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='prv'){
         keyFunction3(20);
         reset_Book_2_Str();
         reset_Book_3_Str();
         V_CF=1;
      }

      if(Book_3_Str=='ecc'){
         keyFunction3(21);
         reset_Book_2_Str();
         reset_Book_3_Str();
         C_CF=1;
      }

      if(Book_3_Str=='sos'){
         keyFunction3(22);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='son'){
         keyFunction3(22);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='jer'){
         keyFunction3(24);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='lam'){
         keyFunction3(25);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='ezk'){
         keyFunction3(26);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='eze'){
         keyFunction3(26);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='dan'){
         keyFunction3(27);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='hos'){
         keyFunction3(28);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='joe'){
         keyFunction3(29);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='amo'){
         keyFunction3(30);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='jon'){
         keyFunction3(32);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='mic'){
         keyFunction3(33);
         reset_Book_2_Str();
         reset_Book_3_Str();
         C_CF=1;
      }

      if(Book_3_Str=='hab'){
         keyFunction3(35);
         reset_Book_2_Str();
         reset_Book_3_Str();
         B_CF=1;
      }

      if(Book_3_Str=='zep'){
         keyFunction3(36);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='hag'){
         keyFunction3(37);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='zec'){
         keyFunction3(38);
         reset_Book_2_Str();
         reset_Book_3_Str();
         C_CF=1;
      }

      if(Book_3_Str=='mal'){
         keyFunction3(39);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }


      if(Book_3_Str=='mat'){
         keyFunction3(40);
         reset_Book_2_Str();
         reset_Book_3_Str();
         T_CF=1;
      }

      if(Book_3_Str=='mar'){
         keyFunction3(41);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='luk'){
         keyFunction3(42);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='joh'){
         keyFunction3(43);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='act'){
         keyFunction3(44);
         reset_Book_2_Str();
         reset_Book_3_Str();
         C_CF=1;
         T_CF=1;
      }

      if(Book_3_Str=='rom'){
         keyFunction3(45);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='1co'){
         keyFunction3(46);
         reset_Book_2_Str();
         reset_Book_3_Str();
         C_CF=1;
      }

      if(Book_3_Str=='2co'){
         keyFunction3(47);
         reset_Book_2_Str();
         reset_Book_3_Str();
         C_CF=1;
      }

      if(Book_3_Str=='gal'){
         keyFunction3(48);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='eph'){
         keyFunction3(49);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='phi'){
         keyFunction3(50);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='col'){
         keyFunction3(51);
         reset_Book_2_Str();
         reset_Book_3_Str();
         C_CF=1;
      }

      if(Book_3_Str=='1th'){
         keyFunction3(52);
         reset_Book_2_Str();
         reset_Book_3_Str();
         T_CF=1;
      }

      if(Book_3_Str=='2th'){
         keyFunction3(53);
         reset_Book_2_Str();
         reset_Book_3_Str();
         T_CF=1;
      }

      if(Book_3_Str=='1ti'){
         keyFunction3(54);
         reset_Book_2_Str();
         reset_Book_3_Str();
         T_CF=1;
      }

      if(Book_3_Str=='2ti'){
         keyFunction3(55);
         reset_Book_2_Str();
         reset_Book_3_Str();
         T_CF=1;
      }

      if(Book_3_Str=='tit'){
         keyFunction3(56);
         reset_Book_2_Str();
         reset_Book_3_Str();
         T_CF=1;
      }

      if(Book_3_Str=='phm'){
         keyFunction3(57);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='heb'){
         keyFunction3(58);
         reset_Book_2_Str();
         reset_Book_3_Str();
         B_CF=1;
      }

      if(Book_3_Str=='jam'){
         keyFunction3(59);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='1pe'){
         keyFunction3(60);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='2pe'){
         keyFunction3(61);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='1jn'){  // 1jn
         keyFunction3(62);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='1jo'){  // 1jn
         keyFunction3(62);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='2jn'){  // 2jn
         keyFunction3(63);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='2jo'){  // 2jn
         keyFunction3(63);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='3jn'){  // 3jn
         keyFunction3(64);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='3jo'){  // 3jn
         keyFunction3(64);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='jud'){
         keyFunction3(65);
         reset_Book_2_Str();
         reset_Book_3_Str();
      }

      if(Book_3_Str=='rev'){
         keyFunction3(66);
         reset_Book_2_Str();
         reset_Book_3_Str();
         V_CF=1;
      }

   } else if(Book_3_Str_CF==1){

      Book_3_Str_CF=0;

   } // End of Book Check with 3 letters



//   if(arg1=='j'){
//      //alert('You pressed: j' ); // for test
//      keyFunction3(43);
//   }

//   if(arg1=='l'){
//      //alert('You pressed: j' ); // for test
//      keyFunction3(42);
//   }



   if(arg1>-1 && arg1<10 && key_t==1 && key_t1==1 && key_t2==1 && key_t3==0 ){ // pressed third digit of To Vers Number
      //alert('You pressed: b' + arg1 ); // for test
      key_t3=1;
      t_num3=arg1;
      t_num=(t_num1*100) + (t_num2*10) + t_num3;

      //Qmaxchap(b_int);
      //if(c_num>maxchap){          //  prevent from inputting chapter larger than maxchap
      //   c_num = maxchap;
      //}

      Qmaxverse(b_int,c_int);          
      if(t_num>maxverse){                      //  prevent from inputting verse larger than maxverse
         t_num = maxverse;
      }

      t_int= t_num;

      //alert('You pressed: b' + b_num + 'and b_int =' + b_int); // for test
      //alert('You pressed: b' + b_num); // for test
      

      readbookchapvers2(b_int,c_int,v_int,t_int); // Use it, Disable Temp

      document.getElementById("Chap_Verse_Disp").innerHTML = "To Verse " + t_num;


      //head1();readbookchapvers2(b_int,c_int,v_int,t_int);Send_to_win34(17,b_int,c_int,v_int,t_int,Send_word1,Send_word4,Send_word9);

   }

   if(arg1>-1 && arg1<10 && key_t==1 && key_t1==1 && key_t2==0 ){ // pressed second digit of To Vers Number
      //alert('You pressed: b' + arg1 ); // for test
      key_t2=1;
      t_num2=arg1;
      t_num=(t_num1*10) + t_num2;

      //Qmaxchap(b_int);
      //if(c_num>maxchap){          //  prevent from inputting chapter larger than maxchap
      //   c_num = maxchap;
      //}

      Qmaxverse(b_int,c_int);          
      if(t_num>maxverse){                      //  prevent from inputting verse larger than maxverse
         t_num = maxverse;
      }

      t_int= t_num;

      //alert('You pressed: b' + b_num + 'and b_int =' + b_int); // for test
      //alert('You pressed: b' + b_num); // for test
      

      readbookchapvers2(b_int,c_int,v_int,t_int); // Use it, Disable Temp

      document.getElementById("Chap_Verse_Disp").innerHTML = "To Verse " + t_num;


      //head1();readbookchapvers2(b_int,c_int,v_int,t_int);Send_to_win34(17,b_int,c_int,v_int,t_int,Send_word1,Send_word4,Send_word9);


   }

   if(arg1>-1 && arg1<10 && key_t==1 && key_t1==0){ // pressed first digit of To Vers Number
      key_t1=1;
      t_num1=arg1;
      t_num=t_num1;

      //Qmaxchap(b_int);
      //if(c_num>maxchap){          //  prevent from inputting chapter larger than maxchap
      //   c_num = maxchap;
      //}

      Qmaxverse(b_int,c_int);          
      if(t_num>maxverse){                      //  prevent from inputting verse larger than maxverse
         t_num = maxverse;
      }

      t_int= t_num;

      readbookchapvers2(b_int,c_int,v_int,t_int); // Use it, Disable Temp

      document.getElementById("Chap_Verse_Disp").innerHTML = "To Verse " + t_num;



      //head1();readbookchapvers2(b_int,c_int,v_int,t_int);Send_to_win34(17,b_int,c_int,v_int,t_int,Send_word1,Send_word4,Send_word9);


      //alert('You pressed: t' + t_num ); // for test
   }

   if(arg1>-1 && arg1<10 && key_v==1 && key_v1==1 && key_v2==1 && key_v3==0 && key_t==0  ){ // pressed third digit of Vers Number
      //alert('You pressed: b' + arg1 ); // for test
      key_v3=1;
      v_num3=arg1;
      v_num=(v_num1*100) + (v_num2*10) + v_num3;

      //Qmaxchap(b_int);
      //if(c_num>maxchap){          //  prevent from inputting chapter larger than maxchap
      //   c_num = maxchap;
      //}

      Qmaxverse(b_int,c_int);          
      if(v_num>maxverse){                      //  prevent from inputting verse larger than maxverse
         v_num = maxverse;
      }

      v_int= v_num;

      //alert('You pressed: b' + b_num + 'and b_int =' + b_int); // for test
      //alert('You pressed: b' + b_num); // for test
      
 
      readbookchapvers(b_int,c_int,v_int);

      document.getElementById("Chap_Verse_Disp").innerHTML = "Verse " + v_num;


      //head1();readbookchapvers(b_int,c_int,v_int);Send_to_win34(16,b_int,c_int,v_int,word1,word4,word9,Send_word1,Send_word4,Send_word9);

      //head1();readbook(b_int,0,1);Send_to_win34(14,b_int,0,1,word1,word4,word9);

      //readbookchapvers(b_int,3,7);  // for test

      //readchapter2(b_int, nowchapter, 1);
   }

   if(arg1>-1 && arg1<10 && key_v==1 && key_v1==1 && key_v2==0 && key_t==0  ){ // pressed second digit of Vers Number
      //alert('You pressed: b' + arg1 ); // for test
      key_v2=1;
      v_num2=arg1;
      v_num=(v_num1*10) + v_num2;

      //Qmaxchap(b_int);
      //if(c_num>maxchap){          //  prevent from inputting chapter larger than maxchap
      //   c_num = maxchap;
      //}

      Qmaxverse(b_int,c_int);          
      if(v_num>maxverse){                      //  prevent from inputting verse larger than maxverse
         v_num = maxverse;
      }

      v_int= v_num;

      //alert('You pressed: b' + b_num + 'and b_int =' + b_int); // for test
      //alert('You pressed: b' + b_num); // for test
      
      //readbookchapvers(b_int,c_int,v_int);Send_to_win34(16,b_int,c_int,v_int,0,0,0);


      readbookchapvers(b_int,c_int,v_int);

      document.getElementById("Chap_Verse_Disp").innerHTML = "Verse " + v_num;


      //head1();readbookchapvers(b_int,c_int,v_int);Send_to_win34(16,b_int,c_int,v_int,word1,word4,word9,Send_word1,Send_word4,Send_word9);

      //readbookchapvers(b_int,3,7);  // for test

      //readchapter2(b_int, nowchapter, 1);
   }

   if(arg1>-1 && arg1<10 && key_v==1 && key_v1==0 && key_t==0 ){ // pressed first digit of Vers Number
      key_v1=1;
      v_num1=arg1;
      v_num=v_num1;

      //Qmaxchap(b_int);
      //if(c_num>maxchap){          //  prevent from inputting chapter larger than maxchap
      //   c_num = maxchap;
      //}

      Qmaxverse(b_int,c_int);          
      if(v_num>maxverse){                      //  prevent from inputting verse larger than maxverse
         v_num = maxverse;
      }

      v_int= v_num;

      //readbookchapvers(b_int,c_int,v_int);Send_to_win34(16,b_int,c_int,v_int,0,0,0);

      readbookchapvers(b_int,c_int,v_int);

      document.getElementById("Chap_Verse_Disp").innerHTML = "Verse " + v_num;


      //head1();readbookchapvers(b_int,c_int,v_int);Send_to_win34(16,b_int,c_int,v_int,word1,word4,word9,Send_word1,Send_word4,Send_word9);

      //readbookchap(b_int,c_int,1);  // for test
      //b_int= parseInt(b_num,10)-1;
      //alert('You pressed: b' + b_num ); // for test
   }

   if(arg1>-1 && arg1<10 && key_c==1 && key_c1==1 && key_c2==1 && key_c3==0 && key_v==0 ){ // pressed third digit of Chap Number
      //alert('You pressed: b' + arg1 ); // for test
      key_c3=1;
      c_num3=arg1;
      c_num=(c_num1*100) + (c_num2*10) + c_num3;

      Qmaxchap(b_int);
      if(c_num>maxchap){          //  prevent from inputting chapter larger than maxchap
         c_num = maxchap;
      }

      c_int= c_num-1;

      //alert('You pressed: b' + b_num + 'and b_int =' + b_int); // for test
      //alert('You pressed: b' + b_num); // for test
      
      //readbook(b_int,0,1);

      readbookchap(b_int,c_int,1);

      document.getElementById("Chap_Verse_Disp").innerHTML = "Chap " + c_num;


      //head1();readbookchap(b_int,c_int,1);Send_to_win34(15,b_int,c_int,1,Send_word1,Send_word4,Send_word9);  // for test


      //if(Show_His_BM_Vers2_F==1 || Show_His_BM_Vers3_F==1){

      //   Show_His_BM_Vers3(b_int, c_int);

      //}


      //head1();readbook(b_int,0,1);Send_to_win34(14,b_int,0,1,word1,word4,word9);

      //readbookchapvers(b_int,3,7);  // for test

      //readchapter2(b_int, nowchapter, 1);
   }

   if(arg1>-1 && arg1<10 && key_c==1 && key_c1==1 && key_c2==0 && key_v==0 ){ // pressed second digit of Chap Number
      //alert('You pressed: b' + arg1 ); // for test
      key_c2=1;
      c_num2=arg1;
      c_num=(c_num1*10) + c_num2;

      Qmaxchap(b_int);
      if(c_num>maxchap){          //  prevent from inputting chapter larger than maxchap
         c_num = maxchap;
      }

      c_int= c_num-1;

      //alert('You pressed: b' + b_num + 'and b_int =' + b_int); // for test
      //alert('You pressed: b' + b_num); // for test
      
      //readbook(b_int,0,1);
      //readbookchap(b_int,c_int,1);Send_to_win34(15,b_int,c_int,1,0,0,0);  // for test

      readbookchap(b_int,c_int,1);

      document.getElementById("Chap_Verse_Disp").innerHTML = "Chap " + c_num;


      //head1();readbookchap(b_int,c_int,1);Send_to_win34(15,b_int,c_int,1,Send_word1,Send_word4,Send_word9);  // for test


      //if(Show_His_BM_Vers2_F==1 || Show_His_BM_Vers3_F==1){

      //   Show_His_BM_Vers3(b_int, c_int);

      //}


      //readbookchapvers(b_int,3,7);  // for test

      //readchapter2(b_int, nowchapter, 1);
   }

   if(arg1>-1 && arg1<10 && key_c==1 && key_c1==0 && key_v==0){ // pressed first digit of Chap Number
      key_c1=1;
      c_num1=arg1;
      c_num=c_num1;

      Qmaxchap(b_int);
      if(c_num>maxchap){          //  prevent from inputting chapter larger than maxchap
         c_num = maxchap;
      }
      if(c_num==0){
         c_num = 1;
      }

      c_int= c_num-1;

      //readbookchap(b_int,c_int,1);Send_to_win34(15,b_int,c_int,1,0,0,0);  // for test

      readbookchap(b_int,c_int,1);

      document.getElementById("Chap_Verse_Disp").innerHTML = "Chap " + c_num;


      //head1();readbookchap(b_int,c_int,1);Send_to_win34(15,b_int,c_int,1,Send_word1,Send_word4,Send_word9);  // for test


      //if(Show_His_BM_Vers2_F==1 || Show_His_BM_Vers3_F==1){

      //   Show_His_BM_Vers3(b_int, c_int);

      //}


      //b_int= parseInt(b_num,10)-1;
      //alert('You pressed: b' + b_num ); // for test
   }

   if(arg1>-1 && arg1<10 && key_b==1 && key_b1==1 && key_b2==0 && key_c==0 && key_v==0){ // pressed second digit of Book Number
      //alert('You pressed: b' + arg1 ); // for test
      key_b2=1;
      b_num2=arg1;
      b_num=(b_num1*10) + b_num2;
      b_int= b_num-1;
      //alert('You pressed: b' + b_num + 'and b_int =' + b_int); // for test
      //alert('You pressed: b' + b_num); // for test
      
      readbook(b_int,0,1);

      //head1();readbook(b_int,0,1);Send_to_win34(14,b_int,0,1,Send_word1,Send_word4,Send_word9);
      //readbookchap(b_int,3,1);  // for test
      //readbookchapvers(b_int,3,7);  // for test

      //readchapter2(b_int, nowchapter, 1);
   }

   if(arg1>-1 && arg1<10 && key_b==1 && key_b1==0){ // pressed first digit of Book Number
      key_b1=1;
      b_num1=arg1;
      b_num=b_num1;
      b_int= b_num-1;
      //b_int= parseInt(b_num,10)-1;
      //alert('You pressed: b' + b_num ); // for test
   }

   if(arg1=='b' && B_CF==0){ // pressed b , for Book
      //alert('You pressed:' + arg1 ); // for test

      // reset
      key_b=1;
      key_b1=0;
      key_b2=0;
      key_c=0;
      key_c1=0;
      key_c2=0;
      key_c3=0;
      key_v=0;
      key_v1=0;
      key_v2=0;
      key_v3=0;
      key_t=0;
      key_t1=0;
      key_t2=0;
      key_t3=0;
      c_int=0;
      v_int=1;
      t_int=1;
   } else if(B_CF==1){
      B_CF=0;
   }

   if(arg1=='c' && C_CF==0){ // pressed c, for Chap
      //alert('You pressed:' + arg1 ); // for test
      key_c=1;
      key_c1=0;
      key_c2=0;
      key_c3=0;
      key_v=0;
      key_v1=0;
      key_v2=0;
      key_v3=0;
      key_t=0;
      key_t1=0;
      key_t2=0;
      key_t3=0;
      v_int=1;
      t_int=1;
   } else if(C_CF==1){
      C_CF=0;
   }

   if(arg1=='v' && V_CF==0){ // pressed v, for Vers
      //alert('You pressed:' + arg1 ); // for test
      key_v=1;
      key_v1=0;
      key_v2=0;
      key_v3=0;
      key_t=0;
      key_t1=0;
      key_t2=0;
      key_t3=0;
      t_int=1;
   } else if(V_CF==1){
      V_CF=0;
   }

   if(arg1=='t' && T_CF==0){ // pressed t, for To Vers
      //alert('You pressed:' + arg1 ); // for test
      key_t=1;
      key_t1=0;
      key_t2=0;
      key_t3=0;
   } else if(T_CF==1){
      T_CF=0;
   }

   // For Count.html Use ----------------------------------------------

   if(arg1>-1 && arg1<10 && key_S==1 && key_S1==1 && key_S2==1 && key_S3==0 ){ // pressed third digit of Subtract Number
      //alert('You pressed: b' + arg1 ); // for test
      key_S3=1;
      S_num3=arg1;
      S_num=(S_num1*100) + (S_num2*10) + S_num3;


      if(In_BroM_F==1){

         if(S_num>Bro_M){
            document.getElementById("People_Number").innerText= 'Brother Member: ' + Bro_M + ' - ' + 'error';
         }
         else{
            document.getElementById("People_Number").innerText= 'Brother Member: ' + Bro_M + ' - ' + S_num;
         }

      }

      if(In_SisM_F==1){

         if(S_num>Sis_M){
            document.getElementById("People_Number").innerText= 'Sister Member: ' + Sis_M + ' - ' + 'error';
         }
         else{
            document.getElementById("People_Number").innerText= 'Sister Member: ' + Sis_M + ' - ' + S_num;
         }

      }

      if(In_BroTrS_F==1){

         if(S_num>Bro_TrS){
            document.getElementById("People_Number").innerText= 'Brother Truth Seeker: ' + Bro_TrS + ' - ' + 'error';
         }
         else{
            document.getElementById("People_Number").innerText= 'Brother Truth Seeker: ' + Bro_TrS + ' - ' + S_num;
         }

      }

      if(In_SisTrS_F==1){

         if(S_num>Sis_TrS){
            document.getElementById("People_Number").innerText= 'Sister Truth Seeker: ' + Sis_TrS + ' - ' + 'error';
         }
         else{
            document.getElementById("People_Number").innerText= 'Sister Truth Seeker: ' + Sis_TrS + ' - ' + S_num;
         }

      }


   }

   if(arg1>-1 && arg1<10 && key_S==1 && key_S1==1 && key_S2==0 ){ // pressed second digit of Subtract Number
      //alert('You pressed: b' + arg1 ); // for test
      key_S2=1;
      S_num2=arg1;
      S_num=(S_num1*10) + S_num2;

      if(In_BroM_F==1){

         if(S_num>Bro_M){
            document.getElementById("People_Number").innerText= 'Brother Member: ' + Bro_M + ' - ' + 'error';
         }
         else{
            document.getElementById("People_Number").innerText= 'Brother Member: ' + Bro_M + ' - ' + S_num;
         }

      }

      if(In_SisM_F==1){

         if(S_num>Sis_M){
            document.getElementById("People_Number").innerText= 'Sister Member: ' + Sis_M + ' - ' + 'error';
         }
         else{
            document.getElementById("People_Number").innerText= 'Sister Member: ' + Sis_M + ' - ' + S_num;
         }

      }

      if(In_BroTrS_F==1){

         if(S_num>Bro_TrS){
            document.getElementById("People_Number").innerText= 'Brother Truth Seeker: ' + Bro_TrS + ' - ' + 'error';
         }
         else{
            document.getElementById("People_Number").innerText= 'Brother Truth Seeker: ' + Bro_TrS + ' - ' + S_num;
         }

      }

      if(In_SisTrS_F==1){

         if(S_num>Sis_TrS){
            document.getElementById("People_Number").innerText= 'Sister Truth Seeker: ' + Sis_TrS + ' - ' + 'error';
         }
         else{
            document.getElementById("People_Number").innerText= 'Sister Truth Seeker: ' + Sis_TrS + ' - ' + S_num;
         }

      }

   }

   if(arg1>-1 && arg1<10 && key_S==1 && key_S1==0 && key_S2==0 ){ // pressed first digit of Subtract Number
      key_S1=1;
      S_num1=arg1;
      S_num=S_num1;

      if(In_BroM_F==1){

         if(S_num>Bro_M){
            document.getElementById("People_Number").innerText= 'Brother Member: ' + Bro_M + ' - ' + 'error';
         }
         else{
            document.getElementById("People_Number").innerText= 'Brother Member: ' + Bro_M + ' - ' + S_num;
         }

      }

      if(In_SisM_F==1){

         if(S_num>Sis_M){
            document.getElementById("People_Number").innerText= 'Sister Member: ' + Sis_M + ' - ' + 'error';
         }
         else{
            document.getElementById("People_Number").innerText= 'Sister Member: ' + Sis_M + ' - ' + S_num;
         }

      }

      if(In_BroTrS_F==1){

         if(S_num>Bro_TrS){
            document.getElementById("People_Number").innerText= 'Brother Truth Seeker: ' + Bro_TrS + ' - ' + 'error';
         }
         else{
            document.getElementById("People_Number").innerText= 'Brother Truth Seeker: ' + Bro_TrS + ' - ' + S_num;
         }

      }

      if(In_SisTrS_F==1){

         if(S_num>Sis_TrS){
            document.getElementById("People_Number").innerText= 'Sister Truth Seeker: ' + Sis_TrS + ' - ' + 'error';
         }
         else{
            document.getElementById("People_Number").innerText= 'Sister Truth Seeker: ' + Sis_TrS + ' - ' + S_num;
         }

      }

   }

   if(arg1>-1 && arg1<10 && key_A==1 && key_A1==1 && key_A2==1 && key_A3==0 ){ // pressed third digit of Add Number
      //alert('You pressed: b' + arg1 ); // for test
      key_A3=1;
      A_num3=arg1;
      A_num=(A_num1*100) + (A_num2*10) + A_num3;

      if(In_BroM_F==1){

         document.getElementById("People_Number").innerText= 'Brother Member: ' + Bro_M + ' + ' + A_num;

      }

      if(In_SisM_F==1){

         document.getElementById("People_Number").innerText= 'Sister Member: ' + Sis_M + ' + ' + A_num;

      }

      if(In_BroTrS_F==1){

         document.getElementById("People_Number").innerText= 'Brother Truth Seeker: ' + Bro_TrS + ' + ' + A_num;

      }

      if(In_SisTrS_F==1){

         document.getElementById("People_Number").innerText= 'Sister Truth Seeker: ' + Sis_TrS + ' + ' + A_num;

      }

   }

   if(arg1>-1 && arg1<10 && key_A==1 && key_A1==1 && key_A2==0 ){ // pressed second digit of Add Number
      //alert('You pressed: b' + arg1 ); // for test
      key_A2=1;
      A_num2=arg1;
      A_num=(A_num1*10) + A_num2;

      if(In_BroM_F==1){

         document.getElementById("People_Number").innerText= 'Brother Member: ' + Bro_M + ' + ' + A_num;

      }

      if(In_SisM_F==1){

         document.getElementById("People_Number").innerText= 'Sister Member: ' + Sis_M + ' + ' + A_num;

      }

      if(In_BroTrS_F==1){

         document.getElementById("People_Number").innerText= 'Brother Truth Seeker: ' + Bro_TrS + ' + ' + A_num;

      }

      if(In_SisTrS_F==1){

         document.getElementById("People_Number").innerText= 'Sister Truth Seeker: ' + Sis_TrS + ' + ' + A_num;

      }

   }

   if(arg1>-1 && arg1<10 && key_A==1 && key_A1==0 && key_A2==0 ){ // pressed first digit of Add Number
      key_A1=1;
      A_num1=arg1;
      A_num=A_num1;

      if(In_BroM_F==1){

         document.getElementById("People_Number").innerText= 'Brother Member: ' + Bro_M + ' + ' + A_num;

      }

      if(In_SisM_F==1){

         document.getElementById("People_Number").innerText= 'Sister Member: ' + Sis_M + ' + ' + A_num;

      }

      if(In_BroTrS_F==1){

         document.getElementById("People_Number").innerText= 'Brother Truth Seeker: ' + Bro_TrS + ' + ' + A_num;

      }

      if(In_SisTrS_F==1){

         document.getElementById("People_Number").innerText= 'Sister Truth Seeker: ' + Sis_TrS + ' + ' + A_num;

      }

   }

   if(arg1=='A'){ // Click "+"
      //alert('You pressed:' + arg1 ); // for test

      if(In_BroM_F==1){

         document.getElementById("People_Number").innerText= 'Brother Member: ' + Bro_M + ' + ';

      }

      if(In_SisM_F==1){

         document.getElementById("People_Number").innerText= 'Sister Member: ' + Sis_M + ' + ';

      }

      if(In_BroTrS_F==1){

         document.getElementById("People_Number").innerText= 'Brother Truth Seeker: ' + Bro_TrS + ' + ';

      }

      if(In_SisTrS_F==1){

         document.getElementById("People_Number").innerText= 'Sister Truth Seeker: ' + Sis_TrS + ' + ';

      }

      key_A=1;
      key_A1=0;
      key_A2=0;
      key_A3=0;
      A_num=0;
      A_num1=0;
      A_num2=0;
      A_num3=0;

      // Reset Subtract
      key_S=0;
      key_S1=0;
      key_S2=0;
      key_S3=0;
      S_num=0;
      S_num1=0;
      S_num2=0;
      S_num3=0;
   }

   if(arg1=='S'){ // Click "-"
      //alert('You pressed:' + arg1 ); // for test

      if(In_BroM_F==1){

         document.getElementById("People_Number").innerText= 'Brother Member: ' + Bro_M + ' - ';

      }

      if(In_SisM_F==1){

         document.getElementById("People_Number").innerText= 'Sister Member: ' + Sis_M + ' - ';

      }

      if(In_BroTrS_F==1){

         document.getElementById("People_Number").innerText= 'Brother Truth Seeker: ' + Bro_TrS + ' - ';

      }

      if(In_SisTrS_F==1){

         document.getElementById("People_Number").innerText= 'Sister Truth Seeker: ' + Sis_TrS + ' - ';

      }

      key_S=1;
      key_S1=0;
      key_S2=0;
      key_S3=0;
      S_num=0;
      S_num1=0;
      S_num2=0;
      S_num3=0;

      // Reset Add
      key_A=0;
      key_A1=0;
      key_A2=0;
      key_A3=0;
      A_num=0;
      A_num1=0;
      A_num2=0;
      A_num3=0;
   }


   if(arg1=='C'){ // Click "Cancel"

      if(In_BroM_F==1){

         document.getElementById("People_Number").innerText= 'Brother Member: ' + Bro_M;

      }

      if(In_SisM_F==1){

         document.getElementById("People_Number").innerText= 'Sister Member: ' + Sis_M;

      }

      if(In_BroTrS_F==1){

         document.getElementById("People_Number").innerText= 'Brother Truth Seeker: ' + Bro_TrS;

      }

      if(In_SisTrS_F==1){

         document.getElementById("People_Number").innerText= 'Sister Truth Seeker: ' + Sis_TrS;

      }

      // Reset Add
      key_A=0;
      key_A1=0;
      key_A2=0;
      key_A3=0;

      // Reset Subtract
      key_S=0;
      key_S1=0;
      key_S2=0;
      key_S3=0;

      // Reset Rest of them
      A_num=0;
      A_num1=0;
      A_num2=0;
      A_num3=0;
      S_num=0;
      S_num=0;
      S_num1=0;
      S_num2=0;
      S_num3=0;

   }

  
   if(arg1=='E'){ // Click E means Enter  *****

      if(In_BroM_F==1){

         if(key_A1==1 && A_num>0){

            Bro_M = Bro_M + A_num;

         }

         if(key_S1==1 && S_num>0){

            if(Bro_M>S_num || Bro_M==S_num){

               Bro_M = Bro_M - S_num;

            }

         }

         document.getElementById("People_Number").innerText= 'Brother Member: ' + Bro_M;

      } // End of if(In_BroM_F==1)

      if(In_SisM_F==1){

         if(key_A1==1 && A_num>0){

            Sis_M = Sis_M + A_num;

         }

         if(key_S1==1 && S_num>0){

            if(Sis_M>S_num || Sis_M==S_num){

               Sis_M = Sis_M - S_num;

            }

         }

         document.getElementById("People_Number").innerText= 'Sister Member: ' + Sis_M;

      } // End of if(In_SisM_F==1)




      if(In_BroTrS_F==1){

         if(key_A1==1 && A_num>0){

            Bro_TrS = Bro_TrS + A_num;

         }

         if(key_S1==1 && S_num>0){

            if(Bro_TrS>S_num || Bro_TrS==S_num){

               Bro_TrS = Bro_TrS - S_num;

            }

         }

         document.getElementById("People_Number").innerText= 'Brother Truth Seeker: ' + Bro_TrS;

      } // End of if(In_BroTrS_F==1)

      if(In_SisTrS_F==1){

         if(key_A1==1 && A_num>0){

            Sis_TrS = Sis_TrS + A_num;

         }

         if(key_S1==1 && S_num>0){

            if(Sis_TrS>S_num || Sis_TrS==S_num){

               Sis_TrS = Sis_TrS - S_num;

            }

         }

         document.getElementById("People_Number").innerText= 'Sister Truth Seeker: ' + Sis_TrS;

      } // End of if(In_SisTrS_F==1)




      // Reset Add
      key_A=0;
      key_A1=0;
      key_A2=0;
      key_A3=0;

      // Reset Subtract
      key_S=0;
      key_S1=0;
      key_S2=0;
      key_S3=0;

      // Reset Rest of them
      A_num=0;
      A_num1=0;
      A_num2=0;
      A_num3=0;
      S_num=0;
      S_num=0;
      S_num1=0;
      S_num2=0;
      S_num3=0;

   } // End of if(arg1=='E')



   // For Count.html Use ----------------------------------------------

   if(arg1=='enter'){ // pressed enter  *****
      //alert('You pressed:' + arg1 ); // for test

      // reset
      key_b=0;
      key_b1=0;
      key_b2=0;
      key_c=0;
      key_c1=0;
      key_c2=0;
      key_c3=0;
      key_v=0;
      key_v1=0;
      key_v2=0;
      key_v3=0;
      key_t=0;
      key_t1=0;
      key_t2=0;
      key_t3=0;
      reset_Book_2_Str();
      reset_Book_3_Str();

      now_B_verse_int=v_int;
      now_B_to_verse_int=t_int;

      // for test
      //var Send_Verse = 'Gen ' + c_int + ':' + v_int;

      Show_History(b_int, c_int, v_int, t_int);        // for Verse History

      readchapter(b_int, c_int, v_int, t_int);
      //readchapter(b_int, c_int, v_int);


      //if(Mode_Class==1){

      //   Class_Mode();

      //}

      //if(Mode_Study==1){

      //   Study_Mode();

      //}


      // Add on 2018.08.16 pre-set values for readchapter2() to check
      // Onle set below variable when press Enter
      now_Book = b_int;
      now_Chap = c_int;
      now_Verse = v_int;
      now_To_Verse = t_int;


      //Send_to_win34(1,b_int,c_int,v_int,t_int ,Send_word1,Send_word4,Send_word9);  // 8 args
      //Send_to_win34(1,nowbook,nowchapter,nowsection,BibleVersion_Disp,disp_secs_a,0);


      Proj_B = b_int;
      Proj_C = c_int;
      Proj_V = v_int;
      Proj_T = t_int;


      Pres_B = b_int;
      Pres_C = c_int;
      Pres_V = v_int;
      Pres_T = t_int;


      //if(Show_His_BM_Vers_F==1){

      //   Show_His_BM_Vers2(b_int, c_int, v_int, t_int);

      //}

      //if(Show_His_BM_Vers2_F==1){

      //   Show_His_BM_Vers2(b_int, c_int, v_int, t_int);
      //   //Show_His_BM_Vers_Blue(b_int, c_int, v_int);

      //}

   }

   //if(arg1=='right'){ // pressed right

   //   readchapter(nowbook,nowchapter,++nowsection);

   //}

   //if(arg1=='right' && Bible_focus==1){ // pressed right, next verse

   if(arg1=='right'){ // pressed right, next verse


      // Checking nowbook, nowchapter, nowsection

      var bnum = nowbook;
      var cnum = nowchapter;
      Qmaxverse(bnum,cnum);
      var snum = nowsection;

      snum = snum + 1;

      var bnum_tmp = bnum;  //經卷
      var cnum_tmp = cnum;  //章
      var snum_tmp = snum;  //節

      if(snum>maxverse){  // 表 跨 Chapter

         //var bnum_tmp = bnum_His_BM;  //經卷
         //var cnum_tmp = cnum_His_BM;  //章
         //var snum_tmp = snum_His_BM;  //節
         //var snum_Now_tmp = snum_His_BM_Now;  // Now 節

         Qmaxchap(bnum);

         snum_tmp = 1;

         cnum_tmp = cnum_tmp + 1;

         if(cnum_tmp > (maxchap-1))    // because cnum start from 0, 檢查 是否 跨 Book
            cnum_tmp = 0;

         if(cnum_tmp == 0)  // 表 跨 Book
            bnum_tmp = bnum_tmp +1;

         if(bnum_tmp > 65){
            bnum_tmp = 65;
            cnum_tmp = 21;
            snum_tmp = 21;
         }


      } // End of if(snum>maxverse)

      if(bnum_tmp==65 && cnum_tmp==21 && snum_tmp==22){

         snum_tmp = 21;

      }


      //if(bnum_tmp==Pres_B && cnum_tmp==Pres_C && snum_tmp>=Pres_V && snum_tmp<=Pres_T){

      //   bnum_His_BM = Pres_B; // bnum_New_G
      //   cnum_His_BM = Pres_C; // cnum_New_G
      //   snum_His_BM = Pres_V; // snum_New_G
      //   tnum_His_BM = Pres_T;
      //   snum_His_BM_Now = snum_tmp;

      //}
      //else {

      //   bnum_His_BM = bnum_tmp; // bnum_New_G
      //   cnum_His_BM = cnum_tmp; // cnum_New_G
      //   snum_His_BM = snum_tmp; // snum_New_G
      //   tnum_His_BM = 1;
      //   snum_His_BM_Now = snum_tmp;

      //}

      //nowbook    = bnum_tmp;  // Marked on 2018.08.16
      //nowchapter = cnum_tmp;  // Marked on 2018.08.16
      //nowsection = snum_tmp;  // Marked on 2018.08.16


      //bnum_His_BM = bnum_tmp; // bnum_New_G
      //cnum_His_BM = cnum_tmp; // cnum_New_G
      //snum_His_BM = snum_tmp; // snum_New_G
      //tnum_His_BM = 1;
      //snum_His_BM_Now = snum_tmp;


      // End of Checking nowbook, nowchapter, nowsection


      //readchapter2(nowbook,nowchapter,++nowsection,now_B_verse_int,now_B_to_verse_int,now_B_verse_int,now_B_to_verse_int,'N');
      //readchapter2(nowbook,nowchapter,nowsection,now_B_verse_int,now_B_to_verse_int,now_B_verse_int,now_B_to_verse_int,'N');
      //Send_to_win34(101,nowbook,nowchapter,nowsection,now_B_verse_int,now_B_to_verse_int,now_B_verse_int,now_B_to_verse_int,'N',Send_word1,Send_word4,Send_word9); // 12 args


      readchapter2(bnum_tmp,cnum_tmp,snum_tmp);  // Modify on 2018.08.16


      //Proj_B = nowbook;       // Marked on 2018.08.16
      //Proj_C = nowchapter;    // Marked on 2018.08.16
      //Proj_V = nowsection;    // Marked on 2018.08.16


      //if(Show_His_BM_Vers_F==1){    // Marked on 2018.08.16

      //   document.getElementById("His_or_BM_Contnt").scrollTop = 0;
      //   snum_His_BM_Now = nowsection - 1;
      //   Show_His_BM_Vers2_Next();

      //}

      //if(Show_His_BM_Vers2_F==1){    // Marked on 2018.08.16

      //   document.getElementById("His_or_BM_Contnt").scrollTop = 0;
      //   snum_His_BM_Now = nowsection - 1;
      //   Show_His_BM_Vers2_Next();

      //}

   }

   //if(arg1=='left'){ // pressed left

   //   readchapter(nowbook,nowchapter,--nowsection);

   //}

   //if(arg1=='left' && Bible_focus==1){ // pressed left, previous verse

   if(arg1=='left'){ // pressed left, previous verse


      // Checking nowbook, nowchapter, nowsection

      var bnum = nowbook;
      var cnum = nowchapter;
      Qmaxverse(bnum,cnum);

      var snum = nowsection;

      snum = snum - 1;

      var bnum_tmp = bnum;  //經卷
      var cnum_tmp = cnum;  //章
      var snum_tmp = snum;  //節

      if(snum==0) {

         if(cnum_tmp == 0) { // try to find maxchap

            if(bnum_tmp == 0){
               bnum_tmp = 0;
               cnum_tmp = 0;
               snum_tmp = 1;
            }
            else {
               bnum_tmp = bnum_tmp - 1;

               Qmaxchap(bnum_tmp);                // Get maxchap
               Qmaxverse(bnum_tmp,(maxchap - 1)); // Get maxverse

               cnum_tmp = maxchap - 1;
               snum_tmp = maxverse;

            }

         } 
         else {

            cnum_tmp = cnum_tmp - 1;
            Qmaxverse(bnum_tmp,cnum_tmp); // Get maxverse
            snum_tmp = maxverse;

         }

      } // End of if(snum==0)



      //if(bnum_tmp==Pres_B && cnum_tmp==Pres_C && snum_tmp>=Pres_V && snum_tmp<=Pres_T){

      //   bnum_His_BM = Pres_B; // bnum_New_G
      //   cnum_His_BM = Pres_C; // cnum_New_G
      //   snum_His_BM = Pres_V; // snum_New_G
      //   tnum_His_BM = Pres_T;
      //   snum_His_BM_Now = snum_tmp;

      //}
      //else {

      //   bnum_His_BM = bnum_tmp; // bnum_New_G
      //   cnum_His_BM = cnum_tmp; // cnum_New_G
      //   snum_His_BM = snum_tmp; // snum_New_G
      //   tnum_His_BM = 1;
      //   snum_His_BM_Now = snum_tmp;

      //}


      //nowbook    = bnum_tmp;  // Marked on 2018.08.16
      //nowchapter = cnum_tmp;  // Marked on 2018.08.16
      //nowsection = snum_tmp;  // Marked on 2018.08.16

      //bnum_His_BM = bnum_tmp; // bnum_New_G
      //cnum_His_BM = cnum_tmp; // cnum_New_G
      //snum_His_BM = snum_tmp; // snum_New_G
      //tnum_His_BM = 1;
      //snum_His_BM_Now = snum_tmp;


      // End of Checking nowbook, nowchapter, nowsection


      //readchapter2(nowbook,nowchapter,--nowsection,now_B_verse_int,now_B_to_verse_int,now_B_verse_int,now_B_to_verse_int,'N'); // N -> P

      //readchapter2(nowbook,nowchapter,nowsection,now_B_verse_int,now_B_to_verse_int,now_B_verse_int,now_B_to_verse_int,'N'); // N -> P
      //Send_to_win34(101,nowbook,nowchapter,nowsection,now_B_verse_int,now_B_to_verse_int,now_B_verse_int,now_B_to_verse_int,'P',Send_word1,Send_word4,Send_word9); // 12 args


      readchapter2(bnum_tmp,cnum_tmp,snum_tmp);  // Modify on 2018.08.16


      //Proj_B = nowbook;       // Marked on 2018.08.16
      //Proj_C = nowchapter;    // Marked on 2018.08.16
      //Proj_V = nowsection;    // Marked on 2018.08.16


      //if(Show_His_BM_Vers_F==1){

      //   document.getElementById("His_or_BM_Contnt").scrollTop = 0;
      //   snum_His_BM_Now = nowsection + 1;
      //   Show_His_BM_Vers2_Prev();

      //}

      //if(Show_His_BM_Vers2_F==1){

      //   document.getElementById("His_or_BM_Contnt").scrollTop = 0;
      //   snum_His_BM_Now = nowsection + 1;
      //   Show_His_BM_Vers2_Prev();

      //}

   }

   if(arg1=='up'){ // pressed up

      //Send_to_win34(41,1,0,0,0,0,0);
      //alert('You pressed:' + arg1 ); // for test

   }

   if(arg1=='down'){ // pressed down

      //Send_to_win34(41,2,0,0,0,0,0);
      //alert('You pressed:' + arg1 ); // for test

   }

   if(arg1=='space'){ // pressed space

      //Send_to_win34(41,3,0,0,0,0,0);
      //alert('You pressed:' + arg1 ); // for test

   }

   if(arg1=='q'){ // pressed p1 , ANNO_Page_1 , for test

      Send_to_win34(41,4,0,0,0,0,0);
      //alert('You pressed:' + arg1 ); // for test

   }

   if(arg1=='w'){ // pressed p2 , ANNO_Page_2 , for test

      Send_to_win34(41,5,0,0,0,0,0);
      //alert('You pressed:' + arg1 ); // for test

   }

   if(arg1=='u'){ // pressed p3 , ANNO_Page_3 , for test

      Send_to_win34(41,6,0,0,0,0,0);
      //alert('You pressed:' + arg1 ); // for test

   }

   if(arg1=='y'){ // pressed p4 , ANNO_Page_4 , for test

      Send_to_win34(41,7,0,0,0,0,0);
      //alert('You pressed:' + arg1 ); // for test

   }

   if(arg1=='f'){ // pressed p5 , ANNO_Page_5 , for test // f

      Send_to_win34(41,8,0,0,0,0,0);
      //alert('You pressed:' + arg1 ); // for test

   }

   if(arg1=='Q'){ // pressed p6 , ANNO_Page_6 , for test // +

      Send_to_win34(41,9,0,0,0,0,0);
      //alert('You pressed:' + arg1 ); // for test

   }

   if(arg1=='W'){ // pressed p7 , ANNO_Page_7 , for test

      Send_to_win34(41,10,0,0,0,0,0);
      //alert('You pressed:' + arg1 ); // for test

   }

   if(arg1=='U'){ // pressed p8 , ANNO_Page_8 , for test

      Send_to_win34(41,11,0,0,0,0,0);
      //alert('You pressed:' + arg1 ); // for test

   }

   if(arg1=='Y'){ // pressed p9 , ANNO_Page_9 , for test

      Send_to_win34(41,12,0,0,0,0,0);
      //alert('You pressed:' + arg1 ); // for test

   }

    //readchapter(nowbook,nowchapter,--nowsection)

   //if(arg1=='r'){
   //   //alert('You pressed:' + arg1 + ' to reset'); // for test
   //   key_b=0;
   //   key_b1=0;
   //   key_b2=0;
   //}

}