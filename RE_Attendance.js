
var RE_Opening_Day = '20210130';

var kindy_member = new Array(119,253,'CIC93',156,145,18,85); 

var kindy_teacher = new Array(93,156,145,18,85); // 86 for test

var kindy_student = new Array(119,253); 

var LPC_member = new Array(95,66,183,176,53,126,147,79,73,252,138,99,266,94,122,175,272,'CIC121',29,102,37,186,181,166); // ,37

var LPC_teacher = new Array(121,102,37,186,181,166);

var LPC_student = new Array(95,183,176,53,147,79,73,252,138,99,94,122,175);


var UPC_member = new Array(182,88,106,251,146,168,24,16,72,265,125,'CIC244',109,27,11,76,139,97); // ,139

var UPC_teacher = new Array(244,109,11,76,139,97);

var UPC_student = new Array(182,88,106,251,146,168,24,72);


var JYC_teacher = new Array(41,49,180,134,30);

var JYC_student = new Array(52,137,98,42,15,279,19,23,167,278);

var JYC_student_B = new Array(52,137,98,42,15,279,19,23,167,278); // for Before RE Opening Day,
                                                                  // because Frank family just moved back
                                                                  //  Don't count Ethan (279) and Enya (278)


var IYC_teacher = new Array(48,38,47,275,1); 

var IYC_teacher_B = new Array(48,38,47,1); // for Before RE Opening Day, because Frank family just moved back
                                           //  Don't count Frank (275)

var IYC_student = new Array(4,34,103,277,110);

var IYC_student_B = new Array(4,34,103,110); // for Before RE Opening Day, because Frank family just moved back
                                                 //  Don't count Sandra (277)


var SYC_teacher = new Array(31,51,82,144);

var SYC_student = new Array(39,3,61,140,102,109);




var kindy_teacher_attendance_rete_V2 = 0;

var LPC_teacher_attendance_rete_V2 = 0;

var UPC_teacher_attendance_rete_V2 = 0;

var JYC_teacher_attendance_rete_V2 = 0;

var IYC_teacher_attendance_rete_V2 = 0;

var SYC_teacher_attendance_rete_V2 = 0;


var kindy_student_attendance_rete_V2 = 0;

var LPC_student_attendance_rete_V2 = 0;

var UPC_student_attendance_rete_V2 = 0;

var JYC_student_attendance_rete_V2 = 0;

var IYC_student_attendance_rete_V2 = 0;

var SYC_student_attendance_rete_V2 = 0;




async function Roll_Call_RE_Attendance() { // for test, for display

   Roll_Call_Kindy_teacher_Attendance();   

   Roll_Call_Kindy_student_Attendance(); 


   Roll_Call_LPC_teacher_Attendance();   

   Roll_Call_LPC_student_Attendance(); 


   Roll_Call_UPC_teacher_Attendance();   

   Roll_Call_UPC_student_Attendance(); 


   Roll_Call_JYC_teacher_Attendance();   

   Roll_Call_JYC_student_Attendance(); 


   Roll_Call_IYC_teacher_Attendance();   

   Roll_Call_IYC_student_Attendance(); 


   Roll_Call_SYC_teacher_Attendance();   

   Roll_Call_SYC_student_Attendance(); 


} // End of function Roll_Call_RE_Attendance()



async function Roll_Call_RE_Attendance_V2() { // for test, for email

   Roll_Call_Kindy_teacher_Attendance_V2();   

   Roll_Call_Kindy_student_Attendance_V2(); 


   Roll_Call_LPC_teacher_Attendance_V2();   

   Roll_Call_LPC_student_Attendance_V2(); 


   Roll_Call_UPC_teacher_Attendance_V2();   

   Roll_Call_UPC_student_Attendance_V2(); 


   Roll_Call_JYC_teacher_Attendance_V2();   

   Roll_Call_JYC_student_Attendance_V2(); 


   Roll_Call_IYC_teacher_Attendance_V2();   

   Roll_Call_IYC_student_Attendance_V2(); 


   Roll_Call_SYC_teacher_Attendance_V2();   

   Roll_Call_SYC_student_Attendance_V2(); 


} // End of function Roll_Call_RE_Attendance_V2()

var RE_Attendance_V3_text = '';

async function Roll_Call_RE_Attendance_V3() { // for test, for display , for single Day

   Open_RE_Attendance_Area_V3();


     var DateStr_tmp = Display_ID_2; // Exp_start_date , '20200920E'

     //var DateStr_tmp = arg4; // Exp_start_date , '20200920E'

     var Year_Str = DateStr_tmp.substring(0,4);

     var Month_Str = DateStr_tmp.substring(4,6);

     var Date_Str = DateStr_tmp.substring(6,8);

     var New_DateStr = Date_Str + Month_Str + Year_Str;



   //var RE_Attendance_V3_text = '<center><a href="" onclick="Close_RE_Attendance_Area_V3();return false;">' + 'All Attendance</a>';

   //RE_Attendance_V3_text += ' ' + '<a href="" onclick="Close_RE_Attendance_Area_V3();return false;">' + 'Friday Attendance</a>';

   //RE_Attendance_V3_text += ' ' + '<a href="" onclick="Close_RE_Attendance_Area_V3();return false;">' + 'Close Window</a></center>'  + '<br>';



   var RE_Attendance_V3_text = '<center><a href="" onclick="Roll_Call_RE_Attendance_V4B();return false;">' + 'All-Before</a>' + '&nbsp';

   RE_Attendance_V3_text += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V4();return false;">' + 'All-After</a>' + '&nbsp';

   RE_Attendance_V3_text += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V5B();return false;">' + 'Fridays-Before</a>' + '&nbsp';

   RE_Attendance_V3_text += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V5();return false;">' + 'Fridays-After</a>' + '&nbsp';

   RE_Attendance_V3_text += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V3();return false;">' + 'Current-Record</a>' + '&nbsp';

   RE_Attendance_V3_text += ' ' + '<a href="" onclick="Close_RE_Attendance_Area_V3();return false;">' + 'Close</a></center>'  + '<br>';




     RE_Attendance_V3_text += '<center><table border=1>';

     RE_Attendance_V3_text += '<tr><th style="font-size:16pt;">Day</th>';

     RE_Attendance_V3_text += '<th style="font-size:16pt;">Date</th>';

     RE_Attendance_V3_text += '<th style="font-size:16pt;" colspan="2">Kindy</th><th style="font-size:16pt;" colspan="2">LPC</th>';

     RE_Attendance_V3_text += '<th style="font-size:16pt;" colspan="2">UPC</th><th style="font-size:16pt;" colspan="2">JYC</th>';

     RE_Attendance_V3_text += '<th style="font-size:16pt;" colspan="2">IYC</th><th style="font-size:16pt;" colspan="2">SYC</th></tr>';


     RE_Attendance_V3_text += '<tr>';

     RE_Attendance_V3_text += '<td></td><td></td>';

     RE_Attendance_V3_text += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text += '</tr>';



   //RE_Attendance_V3_text += 'Kindy ';


   //document.getElementById("RE_Attendance_Content").innerHTML = RE_Attendance_V3_text;  

   // --------------------------------------------- 

   var kindy_teacher_attendance_no = 0;

     for (var i = 0; i < kindy_teacher.length ; i++) {

        var CNo_tmp = kindy_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              kindy_teacher_attendance_no = kindy_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_teacher.length ; i++)   

     var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;

     //RE_Attendance_V3_text += 'Kindy Teacher=' + kindy_teacher_attendance_rete + '%';


     //document.getElementById(40001).innerHTML =  'Kindy Teacher=';

     //document.getElementById(50001).innerHTML =  kindy_teacher_attendance_rete + '%';   

   // --------------------------------------------- 

   var LPC_teacher_attendance_no = 0;

     for (var i = 0; i < LPC_teacher.length ; i++) {

        var CNo_tmp = LPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_teacher_attendance_no = LPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_teacher.length ; i++)

     var LPC_teacher_attendance_rete = ( (LPC_teacher_attendance_no / LPC_teacher.length) * 100 );

     LPC_teacher_attendance_rete = Math.round( LPC_teacher_attendance_rete * 100 ) / 100;


     //RE_Attendance_V3_text += 'LPC Teacher=' + LPC_teacher_attendance_rete + '%';


     //document.getElementById(40003).innerHTML =  'LPC Teacher=';

     //document.getElementById(50003).innerHTML =  LPC_teacher_attendance_rete + '%';    

   // --------------------------------------------- 

   var UPC_teacher_attendance_no = 0;

     for (var i = 0; i < UPC_teacher.length ; i++) {

        var CNo_tmp = UPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_teacher_attendance_no = UPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_teacher.length ; i++)

     var UPC_teacher_attendance_rete = ( (UPC_teacher_attendance_no / UPC_teacher.length) * 100 );

     UPC_teacher_attendance_rete = Math.round( UPC_teacher_attendance_rete * 100 ) / 100;

     UPC_teacher_attendance_rete_V2 = UPC_teacher_attendance_rete;


   // --------------------------------------------- 

   var JYC_teacher_attendance_no = 0;

     for (var i = 0; i < JYC_teacher.length ; i++) {

        var CNo_tmp = JYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_teacher_attendance_no = JYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_teacher.length ; i++)

     var JYC_teacher_attendance_rete = ( (JYC_teacher_attendance_no / JYC_teacher.length) * 100 );

     JYC_teacher_attendance_rete = Math.round( JYC_teacher_attendance_rete * 100 ) / 100;

   // --------------------------------------------- 

   var IYC_teacher_attendance_no = 0;

   //if(New_DateStr<RE_Opening_Day) {

   if( Number(New_DateStr) < Number(RE_Opening_Day) ) {   

     for (var i = 0; i < IYC_teacher_B.length ; i++) {

        var CNo_tmp = IYC_teacher_B[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_teacher_attendance_no = IYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_teacher_B.length ; i++)

     var IYC_teacher_attendance_rete = ( (IYC_teacher_attendance_no / IYC_teacher_B.length) * 100 );

     IYC_teacher_attendance_rete = Math.round( IYC_teacher_attendance_rete * 100 ) / 100;

   }
   else {

     for (var i = 0; i < IYC_teacher.length ; i++) {

        var CNo_tmp = IYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_teacher_attendance_no = IYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_teacher.length ; i++)

     var IYC_teacher_attendance_rete = ( (IYC_teacher_attendance_no / IYC_teacher.length) * 100 );

     IYC_teacher_attendance_rete = Math.round( IYC_teacher_attendance_rete * 100 ) / 100;

   } // End of if(New_DateStr<RE_Opening_Day) {

   // --------------------------------------------- 

   var SYC_teacher_attendance_no = 0;

     for (var i = 0; i < SYC_teacher.length ; i++) {

        var CNo_tmp = SYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_teacher_attendance_no = SYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_teacher.length ; i++)

     var SYC_teacher_attendance_rete = ( (SYC_teacher_attendance_no / SYC_teacher.length) * 100 );

     SYC_teacher_attendance_rete = Math.round( SYC_teacher_attendance_rete * 100 ) / 100;

   // --------------------------------------------- 

   var kindy_student_attendance_no = 0;

     for (var i = 0; i < kindy_student.length ; i++) {

        var CNo_tmp = kindy_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              kindy_student_attendance_no = kindy_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_student.length ; i++)

     var kindy_student_attendance_rete = ( (kindy_student_attendance_no / kindy_student.length) * 100 );

     kindy_student_attendance_rete = Math.round( kindy_student_attendance_rete * 100 ) / 100;

     //document.getElementById(40002).innerHTML =  'kindy Student=';

     //document.getElementById(50002).innerHTML =  kindy_student_attendance_rete + '%';  


   // --------------------------------------------- 

   var LPC_student_attendance_no = 0;

     for (var i = 0; i < LPC_student.length ; i++) {

        var CNo_tmp = LPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_student_attendance_no = LPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_student.length ; i++)

     var LPC_student_attendance_rete = ( (LPC_student_attendance_no / LPC_student.length) * 100 );

     LPC_student_attendance_rete = Math.round( LPC_student_attendance_rete * 100 ) / 100;

     //document.getElementById(40004).innerHTML =  'LPC Student=';

     //document.getElementById(50004).innerHTML =  LPC_student_attendance_rete + '%';    

   // --------------------------------------------- 

   var UPC_student_attendance_no = 0;

     for (var i = 0; i < UPC_student.length ; i++) {

        var CNo_tmp = UPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_student_attendance_no = UPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_student.length ; i++)

     var UPC_student_attendance_rete = ( (UPC_student_attendance_no / UPC_student.length) * 100 );

     UPC_student_attendance_rete = Math.round( UPC_student_attendance_rete * 100 ) / 100;


   // --------------------------------------------- 

   var JYC_student_attendance_no = 0;

   //if(New_DateStr<RE_Opening_Day) {

   if( Number(New_DateStr) < Number(RE_Opening_Day) ) {

     for (var i = 0; i < JYC_student_B.length ; i++) {

        var CNo_tmp = JYC_student_B[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_student_attendance_no = JYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_student_B.length ; i++)

     var JYC_student_attendance_rete = ( (JYC_student_attendance_no / JYC_student_B.length) * 100 );

     JYC_student_attendance_rete = Math.round( JYC_student_attendance_rete * 100 ) / 100;

   }
   else {

     for (var i = 0; i < JYC_student.length ; i++) {

        var CNo_tmp = JYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_student_attendance_no = JYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_student.length ; i++)

     var JYC_student_attendance_rete = ( (JYC_student_attendance_no / JYC_student.length) * 100 );

     JYC_student_attendance_rete = Math.round( JYC_student_attendance_rete * 100 ) / 100;

   } // End of if(New_DateStr<RE_Opening_Day) {


   // --------------------------------------------- 

   var IYC_student_attendance_no = 0;

   //if(New_DateStr<RE_Opening_Day) {

   if( Number(New_DateStr) < Number(RE_Opening_Day) ) {

     for (var i = 0; i < IYC_student_B.length ; i++) {

        var CNo_tmp = IYC_student_B[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_student_attendance_no = IYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_student_B.length ; i++)

     var IYC_student_attendance_rete = ( (IYC_student_attendance_no / IYC_student_B.length) * 100 );

     IYC_student_attendance_rete = Math.round( IYC_student_attendance_rete * 100 ) / 100;

   }
   else {

     for (var i = 0; i < IYC_student.length ; i++) {

        var CNo_tmp = IYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_student_attendance_no = IYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_student.length ; i++)

     var IYC_student_attendance_rete = ( (IYC_student_attendance_no / IYC_student.length) * 100 );

     IYC_student_attendance_rete = Math.round( IYC_student_attendance_rete * 100 ) / 100;

   } // End of if(New_DateStr<RE_Opening_Day) {


   // --------------------------------------------- 

   var SYC_student_attendance_no = 0;

     for (var i = 0; i < SYC_student.length ; i++) {

        var CNo_tmp = SYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_student_attendance_no = SYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_student.length ; i++)

     var SYC_student_attendance_rete = ( (SYC_student_attendance_no / SYC_student.length) * 100 );

     SYC_student_attendance_rete = Math.round( SYC_student_attendance_rete * 100 ) / 100;


   // --------------------------------------------- 

     //RE_Attendance_V3_text += 'Kindy Teacher=' + kindy_teacher_attendance_rete + '%';

     //RE_Attendance_V3_text += 'LPC Teacher=' + LPC_teacher_attendance_rete + '%';


     var DateStr = Display_ID_2; // Exp_start_date , '20200920E'

     var Year_Str = DateStr.substring(0,4);

     var Month_Str = DateStr.substring(4,6);

     var Date_Str = DateStr.substring(6,8);

     var New_DateStr = Date_Str + '.' + Month_Str + '.' + Year_Str;

     
     var Month_Str_tmp = '';

     if(Month_Str == 01) Month_Str_tmp = 0;
     if(Month_Str == 02) Month_Str_tmp = 1;
     if(Month_Str == 03) Month_Str_tmp = 2;
     if(Month_Str == 04) Month_Str_tmp = 3;
     if(Month_Str == 05) Month_Str_tmp = 4;
     if(Month_Str == 06) Month_Str_tmp = 5;
     if(Month_Str == 07) Month_Str_tmp = 6;
     if(Month_Str == 08) Month_Str_tmp = 7;
     if(Month_Str == 09) Month_Str_tmp = 8;
     if(Month_Str == 10) Month_Str_tmp = 9;
     if(Month_Str == 11) Month_Str_tmp = 10;
     if(Month_Str == 12) Month_Str_tmp = 11;


     var myDate = new Date();
     myDate.setFullYear(Year_Str);
     myDate.setMonth(Month_Str_tmp); // 0-11
     myDate.setDate(Date_Str);

     var myDay = '';

     if(myDate.getDay() == 6)
        myDay = 'Sat';
     if(myDate.getDay() == 5)
        myDay = 'Fri';
     if(myDate.getDay() == 4)
        myDay = 'Thu';
     if(myDate.getDay() == 3)
        myDay = 'Wed';
     if(myDate.getDay() == 2)
        myDay = 'Tue';
     if(myDate.getDay() == 1)
        myDay = 'Mon';
     if(myDate.getDay() == 0)
        myDay = 'Sun';




     RE_Attendance_V3_text += '<tr>';

     RE_Attendance_V3_text += '<td>' + myDay + '</td>';

     RE_Attendance_V3_text += '<td>' + New_DateStr + '</td>';

     RE_Attendance_V3_text += '<td style="font-size:18pt;" align=right>' + kindy_teacher_attendance_rete + '%' + '</td>';

     RE_Attendance_V3_text += '<td style="font-size:18pt;" align=right>' + kindy_student_attendance_rete + '%' + '</td>';

     RE_Attendance_V3_text += '<td style="font-size:18pt;" align=right>' + LPC_teacher_attendance_rete + '%' + '</td>';

     RE_Attendance_V3_text += '<td style="font-size:18pt;" align=right>' + LPC_student_attendance_rete + '%' + '</td>';

     RE_Attendance_V3_text += '<td style="font-size:18pt;" align=right>' + UPC_teacher_attendance_rete + '%' + '</td>';

     RE_Attendance_V3_text += '<td style="font-size:18pt;" align=right>' + UPC_student_attendance_rete + '%' + '</td>';

     RE_Attendance_V3_text += '<td style="font-size:18pt;" align=right>' + JYC_teacher_attendance_rete + '%' + '</td>';

     RE_Attendance_V3_text += '<td style="font-size:18pt;" align=right>' + JYC_student_attendance_rete + '%' + '</td>';

     RE_Attendance_V3_text += '<td style="font-size:18pt;" align=right>' + IYC_teacher_attendance_rete + '%' + '</td>';

     RE_Attendance_V3_text += '<td style="font-size:18pt;" align=right>' + IYC_student_attendance_rete + '%' + '</td>';

     RE_Attendance_V3_text += '<td style="font-size:18pt;" align=right>' + SYC_teacher_attendance_rete + '%' + '</td>';

     RE_Attendance_V3_text += '<td style="font-size:18pt;" align=right>' + SYC_student_attendance_rete + '%' + '</td>';

     RE_Attendance_V3_text += '</tr></table></center>';




     document.getElementById("RE_Attendance_Content").innerHTML = RE_Attendance_V3_text;       


} // End of function Roll_Call_RE_Attendance_V3()



async function Roll_Call_RE_Attendance_V4() { // for test, for display , for all Day, since certain Day
                                              // for All-After RE Opening Day

   Open_RE_Attendance_Area();

   var RE_Attendance_V3_text_Up = '<center><a href="" onclick="Roll_Call_RE_Attendance_V4B();return false;">' + 'All-Before</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V4();return false;">' + 'All-After</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V5B();return false;">' + 'Fridays-Before</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V5();return false;">' + 'Fridays-After</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V3();return false;">' + 'Current-Record</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Close_RE_Attendance_Area();return false;">' + 'Close</a></center>'  + '<br>';



     RE_Attendance_V3_text_Up += '<center><table border=1 width=100%>';

     RE_Attendance_V3_text_Up += '<tr><th width=3% style="font-size:16pt;">Day</th>';

     RE_Attendance_V3_text_Up += '<th width=9% style="font-size:16pt;">Date</th>';

     RE_Attendance_V3_text_Up += '<th width=14% style="font-size:16pt;" colspan="2">Kindy (%)</th><th width=14% style="font-size:16pt;" colspan="2">LPC (%)</th>';

     RE_Attendance_V3_text_Up += '<th width=14% style="font-size:16pt;" colspan="2">UPC (%)</th><th width=14% style="font-size:16pt;" colspan="2">JYC (%)</th>';

     RE_Attendance_V3_text_Up += '<th width=14% style="font-size:16pt;" colspan="2">IYC (%)</th><th width=14% style="font-size:16pt;" colspan="2">SYC (%)</th></tr>';


     RE_Attendance_V3_text_Up += '<tr>';

     RE_Attendance_V3_text_Up += '<td width=3%></td><td width=9%></td>';

     RE_Attendance_V3_text_Up += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text_Up += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text_Up += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text_Up += '</tr>';

     RE_Attendance_V3_text_Up += '</table></center>';

     document.getElementById("RE_Attendance_Content_Up").innerHTML = RE_Attendance_V3_text_Up;    




     var RE_Attendance_V3_text = '<center><table border=1 width=100%>';




 // Start Loop

     // table.where(indexOrPrimKey).above(lowerBound)

     //let Verse_4 = await dbT2.Service_Record.where('ID_1').startsWithIgnoreCase(DateStr).toArray(); // 202010

     var RE_Attendance_Start_DateStr = RE_Opening_Day;  // 20210130, mean start from 20210130

     let Verse_4 = await dbT2.Service_Record.where('ID_1').above(RE_Attendance_Start_DateStr).toArray(); // 202010


     var Total_Days = 0;

     if (Verse_4) {  //  // 找出日期

        Total_Days = Verse_4.length;

        document.getElementById("RE_Attendance_Content_Down").innerHTML = 'Calculating...';   


        var kindy_teacher_attendance_rete_sum = 0;

        var LPC_teacher_attendance_rete_sum = 0;

        var UPC_teacher_attendance_rete_sum = 0;

        var JYC_teacher_attendance_rete_sum = 0;

        var IYC_teacher_attendance_rete_sum = 0;

        var SYC_teacher_attendance_rete_sum = 0;


        var kindy_student_attendance_rete_sum = 0;

        var LPC_student_attendance_rete_sum = 0;

        var UPC_student_attendance_rete_sum = 0;

        var JYC_student_attendance_rete_sum = 0;

        var IYC_student_attendance_rete_sum = 0;

        var SYC_student_attendance_rete_sum = 0;


        var kindy_teacher_attendance_rete_Average = 0;

        var LPC_teacher_attendance_rete_Average = 0;

        var UPC_teacher_attendance_rete_Average = 0;

        var JYC_teacher_attendance_rete_Average = 0;

        var IYC_teacher_attendance_rete_Average = 0;

        var SYC_teacher_attendance_rete_Average = 0;


        var kindy_student_attendance_rete_Average = 0;

        var LPC_student_attendance_rete_Average = 0;

        var UPC_student_attendance_rete_Average = 0;

        var JYC_student_attendance_rete_Average = 0;

        var IYC_student_attendance_rete_Average = 0;

        var SYC_student_attendance_rete_Average = 0;



        for (var m = 0; m < Verse_4.length ; m++) {

           //var tmp1 = Verse_4[i].ID_2; // 20201010M   ***

           //var tmp2 = tmp1.substr(6); // 10M

           //var DateStr = Display_ID_2; // Exp_start_date , '20200920E'

           //var Year_Str = DateStr.substring(0,4);

           var RE_Attendance_Q_Day = Verse_4[m].ID_2; // 20201010M   ***

           var arg4 = Verse_4[m].ID_2; // 20201010M

           //var Result = 'n';

           //var Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

 // ------------------Between Loop Content--------------------------------------------------------

   // --------------------------------------------- 

   var kindy_teacher_attendance_no = 0;

     for (var i = 0; i < kindy_teacher.length ; i++) {

        var CNo_tmp = kindy_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              kindy_teacher_attendance_no = kindy_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_teacher.length ; i++)   

     var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;

     kindy_teacher_attendance_rete_sum += kindy_teacher_attendance_rete;


   // --------------------------------------------- 

   var LPC_teacher_attendance_no = 0;

     for (var i = 0; i < LPC_teacher.length ; i++) {

        var CNo_tmp = LPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_teacher_attendance_no = LPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_teacher.length ; i++)

     var LPC_teacher_attendance_rete = ( (LPC_teacher_attendance_no / LPC_teacher.length) * 100 );

     LPC_teacher_attendance_rete = Math.round( LPC_teacher_attendance_rete * 100 ) / 100;

     LPC_teacher_attendance_rete_sum += LPC_teacher_attendance_rete;


   // --------------------------------------------- 

   var UPC_teacher_attendance_no = 0;

     for (var i = 0; i < UPC_teacher.length ; i++) {

        var CNo_tmp = UPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_teacher_attendance_no = UPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_teacher.length ; i++)

     var UPC_teacher_attendance_rete = ( (UPC_teacher_attendance_no / UPC_teacher.length) * 100 );

     UPC_teacher_attendance_rete = Math.round( UPC_teacher_attendance_rete * 100 ) / 100;

     UPC_teacher_attendance_rete_V2 = UPC_teacher_attendance_rete;

     UPC_teacher_attendance_rete_sum += UPC_teacher_attendance_rete;


   // --------------------------------------------- 

   var JYC_teacher_attendance_no = 0;

     for (var i = 0; i < JYC_teacher.length ; i++) {

        var CNo_tmp = JYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_teacher_attendance_no = JYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_teacher.length ; i++)

     var JYC_teacher_attendance_rete = ( (JYC_teacher_attendance_no / JYC_teacher.length) * 100 );

     JYC_teacher_attendance_rete = Math.round( JYC_teacher_attendance_rete * 100 ) / 100;

     JYC_teacher_attendance_rete_sum += JYC_teacher_attendance_rete;


   // --------------------------------------------- 

   var IYC_teacher_attendance_no = 0;

     for (var i = 0; i < IYC_teacher.length ; i++) {

        var CNo_tmp = IYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_teacher_attendance_no = IYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_teacher.length ; i++)

     var IYC_teacher_attendance_rete = ( (IYC_teacher_attendance_no / IYC_teacher.length) * 100 );

     IYC_teacher_attendance_rete = Math.round( IYC_teacher_attendance_rete * 100 ) / 100;

     IYC_teacher_attendance_rete_sum += IYC_teacher_attendance_rete;


   // --------------------------------------------- 

   var SYC_teacher_attendance_no = 0;

     for (var i = 0; i < SYC_teacher.length ; i++) {

        var CNo_tmp = SYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_teacher_attendance_no = SYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_teacher.length ; i++)

     var SYC_teacher_attendance_rete = ( (SYC_teacher_attendance_no / SYC_teacher.length) * 100 );

     SYC_teacher_attendance_rete = Math.round( SYC_teacher_attendance_rete * 100 ) / 100;

     SYC_teacher_attendance_rete_sum += SYC_teacher_attendance_rete;


   // --------------------------------------------- 

   var kindy_student_attendance_no = 0;

     for (var i = 0; i < kindy_student.length ; i++) {

        var CNo_tmp = kindy_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              kindy_student_attendance_no = kindy_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_student.length ; i++)

     var kindy_student_attendance_rete = ( (kindy_student_attendance_no / kindy_student.length) * 100 );

     kindy_student_attendance_rete = Math.round( kindy_student_attendance_rete * 100 ) / 100;

     kindy_student_attendance_rete_sum += kindy_student_attendance_rete;



   // --------------------------------------------- 

   var LPC_student_attendance_no = 0;

     for (var i = 0; i < LPC_student.length ; i++) {

        var CNo_tmp = LPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_student_attendance_no = LPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_student.length ; i++)

     var LPC_student_attendance_rete = ( (LPC_student_attendance_no / LPC_student.length) * 100 );

     LPC_student_attendance_rete = Math.round( LPC_student_attendance_rete * 100 ) / 100;

     LPC_student_attendance_rete_sum += LPC_student_attendance_rete;


   // --------------------------------------------- 

   var UPC_student_attendance_no = 0;

     for (var i = 0; i < UPC_student.length ; i++) {

        var CNo_tmp = UPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_student_attendance_no = UPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_student.length ; i++)

     var UPC_student_attendance_rete = ( (UPC_student_attendance_no / UPC_student.length) * 100 );

     UPC_student_attendance_rete = Math.round( UPC_student_attendance_rete * 100 ) / 100;

     UPC_student_attendance_rete_sum += UPC_student_attendance_rete;


   // --------------------------------------------- 

   var JYC_student_attendance_no = 0;

     for (var i = 0; i < JYC_student.length ; i++) {

        var CNo_tmp = JYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_student_attendance_no = JYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_student.length ; i++)

     var JYC_student_attendance_rete = ( (JYC_student_attendance_no / JYC_student.length) * 100 );

     JYC_student_attendance_rete = Math.round( JYC_student_attendance_rete * 100 ) / 100;

     JYC_student_attendance_rete_sum += JYC_student_attendance_rete;


   // --------------------------------------------- 

   var IYC_student_attendance_no = 0;

     for (var i = 0; i < IYC_student.length ; i++) {

        var CNo_tmp = IYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_student_attendance_no = IYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_student.length ; i++)

     var IYC_student_attendance_rete = ( (IYC_student_attendance_no / IYC_student.length) * 100 );

     IYC_student_attendance_rete = Math.round( IYC_student_attendance_rete * 100 ) / 100;

     IYC_student_attendance_rete_sum += IYC_student_attendance_rete;


   // --------------------------------------------- 

   var SYC_student_attendance_no = 0;

     for (var i = 0; i < SYC_student.length ; i++) {

        var CNo_tmp = SYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_student_attendance_no = SYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_student.length ; i++)

     var SYC_student_attendance_rete = ( (SYC_student_attendance_no / SYC_student.length) * 100 );

     SYC_student_attendance_rete = Math.round( SYC_student_attendance_rete * 100 ) / 100;

     SYC_student_attendance_rete_sum += SYC_student_attendance_rete;


   // --------------------------------------------- 

     //var arg4 = Verse_4[m].ID_2; // 20201010M

     //var DateStr_tmp = Display_ID_2; // Exp_start_date , '20200920E'

     var DateStr_tmp = arg4; // Exp_start_date , '20200920E'

     var Year_Str = DateStr_tmp.substring(0,4);

     var Month_Str = DateStr_tmp.substring(4,6);

     var Date_Str = DateStr_tmp.substring(6,8);

     var New_DateStr = Date_Str + '.' + Month_Str + '.' + Year_Str;

     
     var Month_Str_tmp = '';

     if(Month_Str == 01) Month_Str_tmp = 0;
     if(Month_Str == 02) Month_Str_tmp = 1;
     if(Month_Str == 03) Month_Str_tmp = 2;
     if(Month_Str == 04) Month_Str_tmp = 3;
     if(Month_Str == 05) Month_Str_tmp = 4;
     if(Month_Str == 06) Month_Str_tmp = 5;
     if(Month_Str == 07) Month_Str_tmp = 6;
     if(Month_Str == 08) Month_Str_tmp = 7;
     if(Month_Str == 09) Month_Str_tmp = 8;
     if(Month_Str == 10) Month_Str_tmp = 9;
     if(Month_Str == 11) Month_Str_tmp = 10;
     if(Month_Str == 12) Month_Str_tmp = 11;


     var myDate = new Date();
     myDate.setFullYear(Year_Str);
     myDate.setMonth(Month_Str_tmp); // 0-11
     myDate.setDate(Date_Str);

     var myDay = '';

     if(myDate.getDay() == 6)
        myDay = 'Sat';
     if(myDate.getDay() == 5)
        myDay = 'Fri';
     if(myDate.getDay() == 4)
        myDay = 'Thu';
     if(myDate.getDay() == 3)
        myDay = 'Wed';
     if(myDate.getDay() == 2)
        myDay = 'Tue';
     if(myDate.getDay() == 1)
        myDay = 'Mon';
     if(myDate.getDay() == 0)
        myDay = 'Sun';


     RE_Attendance_V3_text += '<tr>';

     RE_Attendance_V3_text += '<td width=4%>' + myDay + '</td>';

     RE_Attendance_V3_text += '<td width=9%>' + New_DateStr + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + kindy_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + kindy_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + LPC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + LPC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + UPC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + UPC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + JYC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + JYC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + IYC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + IYC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + SYC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + SYC_student_attendance_rete  + '</td>';

     //RE_Attendance_V3_text += '</tr></table></center>';

     RE_Attendance_V3_text += '</tr>';



 // ------------------Between Loop Content--------------------------------------------------------


        } // End of for (var m = 0; m < Verse_4.length ; m++)

     } // End of if (Verse_4) {  //  // 找出日期

 // End Loop


   // --------------------------------------------- 



     kindy_teacher_attendance_rete_Average = ( (kindy_teacher_attendance_rete_sum / Total_Days)  );

     kindy_teacher_attendance_rete_Average = Math.round( kindy_teacher_attendance_rete_Average * 100 ) / 100;    


     LPC_teacher_attendance_rete_Average = ( (LPC_teacher_attendance_rete_sum / Total_Days)  );

     LPC_teacher_attendance_rete_Average = Math.round( LPC_teacher_attendance_rete_Average * 100 ) / 100;  


     UPC_teacher_attendance_rete_Average = ( (UPC_teacher_attendance_rete_sum / Total_Days)  );

     UPC_teacher_attendance_rete_Average = Math.round( UPC_teacher_attendance_rete_Average * 100 ) / 100;     


     JYC_teacher_attendance_rete_Average = ( (JYC_teacher_attendance_rete_sum / Total_Days)  );

     JYC_teacher_attendance_rete_Average = Math.round( JYC_teacher_attendance_rete_Average * 100 ) / 100;     


     IYC_teacher_attendance_rete_Average = ( (IYC_teacher_attendance_rete_sum / Total_Days)  );

     IYC_teacher_attendance_rete_Average = Math.round( IYC_teacher_attendance_rete_Average * 100 ) / 100;   


     SYC_teacher_attendance_rete_Average = ( (SYC_teacher_attendance_rete_sum / Total_Days)  );

     SYC_teacher_attendance_rete_Average = Math.round( SYC_teacher_attendance_rete_Average * 100 ) / 100;   




     kindy_student_attendance_rete_Average = ( (kindy_student_attendance_rete_sum / Total_Days)  );

     kindy_student_attendance_rete_Average = Math.round( kindy_student_attendance_rete_Average * 100 ) / 100;    


     LPC_student_attendance_rete_Average = ( (LPC_student_attendance_rete_sum / Total_Days)  );

     LPC_student_attendance_rete_Average = Math.round( LPC_student_attendance_rete_Average * 100 ) / 100;  


     UPC_student_attendance_rete_Average = ( (UPC_student_attendance_rete_sum / Total_Days)  );

     UPC_student_attendance_rete_Average = Math.round( UPC_student_attendance_rete_Average * 100 ) / 100;     


     JYC_student_attendance_rete_Average = ( (JYC_student_attendance_rete_sum / Total_Days)  );

     JYC_student_attendance_rete_Average = Math.round( JYC_student_attendance_rete_Average * 100 ) / 100;     


     IYC_student_attendance_rete_Average = ( (IYC_student_attendance_rete_sum / Total_Days)  );

     IYC_student_attendance_rete_Average = Math.round( IYC_student_attendance_rete_Average * 100 ) / 100;   


     SYC_student_attendance_rete_Average = ( (SYC_student_attendance_rete_sum / Total_Days)  );

     SYC_student_attendance_rete_Average = Math.round( SYC_student_attendance_rete_Average * 100 ) / 100;   




     RE_Attendance_V3_text += '<tr>';

     RE_Attendance_V3_text += '<th width=12% style="font-size:17pt;" colspan="2">Average</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + kindy_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + kindy_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + LPC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + LPC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + UPC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + UPC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + JYC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + JYC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + IYC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + IYC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + SYC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + SYC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '</tr>';


     RE_Attendance_V3_text += '</table></center>';


     document.getElementById("RE_Attendance_Content_Down").innerHTML = RE_Attendance_V3_text;       


} // End of function Roll_Call_RE_Attendance_V4()


async function Roll_Call_RE_Attendance_V5() { // for test, for display , for all Fridays, since certain Day
                                              // for Fridays-After RE Opening Day

   Open_RE_Attendance_Area();

   var RE_Attendance_V3_text_Up = '<center><a href="" onclick="Roll_Call_RE_Attendance_V4B();return false;">' + 'All-Before</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V4();return false;">' + 'All-After</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V5B();return false;">' + 'Fridays-Before</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V5();return false;">' + 'Fridays-After</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V3();return false;">' + 'Current-Record</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Close_RE_Attendance_Area();return false;">' + 'Close</a></center>'  + '<br>';



     RE_Attendance_V3_text_Up += '<center><table border=1 width=100%>';

     RE_Attendance_V3_text_Up += '<tr><th width=3% style="font-size:16pt;">Day</th>';

     RE_Attendance_V3_text_Up += '<th width=9% style="font-size:16pt;">Date</th>';

     RE_Attendance_V3_text_Up += '<th width=14% style="font-size:16pt;" colspan="2">Kindy (%)</th><th width=14% style="font-size:16pt;" colspan="2">LPC (%)</th>';

     RE_Attendance_V3_text_Up += '<th width=14% style="font-size:16pt;" colspan="2">UPC (%)</th><th width=14% style="font-size:16pt;" colspan="2">JYC (%)</th>';

     RE_Attendance_V3_text_Up += '<th width=14% style="font-size:16pt;" colspan="2">IYC (%)</th><th width=14% style="font-size:16pt;" colspan="2">SYC (%)</th></tr>';


     RE_Attendance_V3_text_Up += '<tr>';

     RE_Attendance_V3_text_Up += '<td width=3%></td><td width=9%></td>';

     RE_Attendance_V3_text_Up += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text_Up += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text_Up += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text_Up += '</tr>';

     RE_Attendance_V3_text_Up += '</table></center>';

     document.getElementById("RE_Attendance_Content_Up").innerHTML = RE_Attendance_V3_text_Up;    




     var RE_Attendance_V3_text = '<center><table border=1 width=100%>';




 // Start Loop

     // table.where(indexOrPrimKey).above(lowerBound)

     //let Verse_4 = await dbT2.Service_Record.where('ID_1').startsWithIgnoreCase(DateStr).toArray(); // 202010

     var RE_Attendance_Start_DateStr = RE_Opening_Day;  // 20210130, mean start from 20210130 , test using 20201026 

     let Verse_4 = await dbT2.Service_Record.where('ID_1').above(RE_Attendance_Start_DateStr).toArray(); // 202010


     var Total_Days = 0;

     if (Verse_4) {  //  // 找出日期

        //Total_Days = Verse_4.length;

        document.getElementById("RE_Attendance_Content_Down").innerHTML = 'Calculating...'; 


        var kindy_teacher_attendance_rete_sum = 0;

        var LPC_teacher_attendance_rete_sum = 0;

        var UPC_teacher_attendance_rete_sum = 0;

        var JYC_teacher_attendance_rete_sum = 0;

        var IYC_teacher_attendance_rete_sum = 0;

        var SYC_teacher_attendance_rete_sum = 0;


        var kindy_student_attendance_rete_sum = 0;

        var LPC_student_attendance_rete_sum = 0;

        var UPC_student_attendance_rete_sum = 0;

        var JYC_student_attendance_rete_sum = 0;

        var IYC_student_attendance_rete_sum = 0;

        var SYC_student_attendance_rete_sum = 0;


        var kindy_teacher_attendance_rete_Average = 0;

        var LPC_teacher_attendance_rete_Average = 0;

        var UPC_teacher_attendance_rete_Average = 0;

        var JYC_teacher_attendance_rete_Average = 0;

        var IYC_teacher_attendance_rete_Average = 0;

        var SYC_teacher_attendance_rete_Average = 0;


        var kindy_student_attendance_rete_Average = 0;

        var LPC_student_attendance_rete_Average = 0;

        var UPC_student_attendance_rete_Average = 0;

        var JYC_student_attendance_rete_Average = 0;

        var IYC_student_attendance_rete_Average = 0;

        var SYC_student_attendance_rete_Average = 0;



        for (var m = 0; m < Verse_4.length ; m++) {

           //var tmp1 = Verse_4[i].ID_2; // 20201010M   ***

           //var tmp2 = tmp1.substr(6); // 10M

           //var DateStr = Display_ID_2; // Exp_start_date , '20200920E'

           //var Year_Str = DateStr.substring(0,4);

           var RE_Attendance_Q_Day = Verse_4[m].ID_2; // 20201010M   ***

           var arg4 = Verse_4[m].ID_2; // 20201010M


           // 考慮加於此 --------------------------------------------------------------------------


     //var arg4 = Verse_4[m].ID_2; // 20201010M

     //var DateStr_tmp = Display_ID_2; // Exp_start_date , '20200920E'

     var DateStr_tmp = arg4; // Exp_start_date , '20200920E'

     var Year_Str = DateStr_tmp.substring(0,4);

     var Month_Str = DateStr_tmp.substring(4,6);

     var Date_Str = DateStr_tmp.substring(6,8);

     var New_DateStr = Date_Str + '.' + Month_Str + '.' + Year_Str;

     
     var Month_Str_tmp = '';

     if(Month_Str == 01) Month_Str_tmp = 0;
     if(Month_Str == 02) Month_Str_tmp = 1;
     if(Month_Str == 03) Month_Str_tmp = 2;
     if(Month_Str == 04) Month_Str_tmp = 3;
     if(Month_Str == 05) Month_Str_tmp = 4;
     if(Month_Str == 06) Month_Str_tmp = 5;
     if(Month_Str == 07) Month_Str_tmp = 6;
     if(Month_Str == 08) Month_Str_tmp = 7;
     if(Month_Str == 09) Month_Str_tmp = 8;
     if(Month_Str == 10) Month_Str_tmp = 9;
     if(Month_Str == 11) Month_Str_tmp = 10;
     if(Month_Str == 12) Month_Str_tmp = 11;


     var myDate = new Date();
     myDate.setFullYear(Year_Str);
     myDate.setMonth(Month_Str_tmp); // 0-11
     myDate.setDate(Date_Str);

     var myDay = '';

     if(myDate.getDay() == 6)
        myDay = 'Sat';
     if(myDate.getDay() == 5)
        myDay = 'Fri';
     if(myDate.getDay() == 4)
        myDay = 'Thu';
     if(myDate.getDay() == 3)
        myDay = 'Wed';
     if(myDate.getDay() == 2)
        myDay = 'Tue';
     if(myDate.getDay() == 1)
        myDay = 'Mon';
     if(myDate.getDay() == 0)
        myDay = 'Sun';


     if(myDay == 'Fri') {  // Add for Fridays condition

        Total_Days = Total_Days + 1;


           // 考慮加於此 --------------------------------------------------------------------------



           //var Result = 'n';

           //var Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

 // ------------------Between Loop Content--------------------------------------------------------

   // --------------------------------------------- 

   var kindy_teacher_attendance_no = 0;

     for (var i = 0; i < kindy_teacher.length ; i++) {

        var CNo_tmp = kindy_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              kindy_teacher_attendance_no = kindy_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_teacher.length ; i++)   

     var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;

     kindy_teacher_attendance_rete_sum += kindy_teacher_attendance_rete;


   // --------------------------------------------- 

   var LPC_teacher_attendance_no = 0;

     for (var i = 0; i < LPC_teacher.length ; i++) {

        var CNo_tmp = LPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_teacher_attendance_no = LPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_teacher.length ; i++)

     var LPC_teacher_attendance_rete = ( (LPC_teacher_attendance_no / LPC_teacher.length) * 100 );

     LPC_teacher_attendance_rete = Math.round( LPC_teacher_attendance_rete * 100 ) / 100;

     LPC_teacher_attendance_rete_sum += LPC_teacher_attendance_rete;


   // --------------------------------------------- 

   var UPC_teacher_attendance_no = 0;

     for (var i = 0; i < UPC_teacher.length ; i++) {

        var CNo_tmp = UPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_teacher_attendance_no = UPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_teacher.length ; i++)

     var UPC_teacher_attendance_rete = ( (UPC_teacher_attendance_no / UPC_teacher.length) * 100 );

     UPC_teacher_attendance_rete = Math.round( UPC_teacher_attendance_rete * 100 ) / 100;

     UPC_teacher_attendance_rete_V2 = UPC_teacher_attendance_rete;

     UPC_teacher_attendance_rete_sum += UPC_teacher_attendance_rete;


   // --------------------------------------------- 

   var JYC_teacher_attendance_no = 0;

     for (var i = 0; i < JYC_teacher.length ; i++) {

        var CNo_tmp = JYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_teacher_attendance_no = JYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_teacher.length ; i++)

     var JYC_teacher_attendance_rete = ( (JYC_teacher_attendance_no / JYC_teacher.length) * 100 );

     JYC_teacher_attendance_rete = Math.round( JYC_teacher_attendance_rete * 100 ) / 100;

     JYC_teacher_attendance_rete_sum += JYC_teacher_attendance_rete;


   // --------------------------------------------- 

   var IYC_teacher_attendance_no = 0;

     for (var i = 0; i < IYC_teacher.length ; i++) {

        var CNo_tmp = IYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_teacher_attendance_no = IYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_teacher.length ; i++)

     var IYC_teacher_attendance_rete = ( (IYC_teacher_attendance_no / IYC_teacher.length) * 100 );

     IYC_teacher_attendance_rete = Math.round( IYC_teacher_attendance_rete * 100 ) / 100;

     IYC_teacher_attendance_rete_sum += IYC_teacher_attendance_rete;


   // --------------------------------------------- 

   var SYC_teacher_attendance_no = 0;

     for (var i = 0; i < SYC_teacher.length ; i++) {

        var CNo_tmp = SYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_teacher_attendance_no = SYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_teacher.length ; i++)

     var SYC_teacher_attendance_rete = ( (SYC_teacher_attendance_no / SYC_teacher.length) * 100 );

     SYC_teacher_attendance_rete = Math.round( SYC_teacher_attendance_rete * 100 ) / 100;

     SYC_teacher_attendance_rete_sum += SYC_teacher_attendance_rete;


   // --------------------------------------------- 

   var kindy_student_attendance_no = 0;

     for (var i = 0; i < kindy_student.length ; i++) {

        var CNo_tmp = kindy_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              kindy_student_attendance_no = kindy_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_student.length ; i++)

     var kindy_student_attendance_rete = ( (kindy_student_attendance_no / kindy_student.length) * 100 );

     kindy_student_attendance_rete = Math.round( kindy_student_attendance_rete * 100 ) / 100;

     kindy_student_attendance_rete_sum += kindy_student_attendance_rete;



   // --------------------------------------------- 

   var LPC_student_attendance_no = 0;

     for (var i = 0; i < LPC_student.length ; i++) {

        var CNo_tmp = LPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_student_attendance_no = LPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_student.length ; i++)

     var LPC_student_attendance_rete = ( (LPC_student_attendance_no / LPC_student.length) * 100 );

     LPC_student_attendance_rete = Math.round( LPC_student_attendance_rete * 100 ) / 100;

     LPC_student_attendance_rete_sum += LPC_student_attendance_rete;


   // --------------------------------------------- 

   var UPC_student_attendance_no = 0;

     for (var i = 0; i < UPC_student.length ; i++) {

        var CNo_tmp = UPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_student_attendance_no = UPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_student.length ; i++)

     var UPC_student_attendance_rete = ( (UPC_student_attendance_no / UPC_student.length) * 100 );

     UPC_student_attendance_rete = Math.round( UPC_student_attendance_rete * 100 ) / 100;

     UPC_student_attendance_rete_sum += UPC_student_attendance_rete;


   // --------------------------------------------- 

   var JYC_student_attendance_no = 0;

     for (var i = 0; i < JYC_student.length ; i++) {

        var CNo_tmp = JYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_student_attendance_no = JYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_student.length ; i++)

     var JYC_student_attendance_rete = ( (JYC_student_attendance_no / JYC_student.length) * 100 );

     JYC_student_attendance_rete = Math.round( JYC_student_attendance_rete * 100 ) / 100;

     JYC_student_attendance_rete_sum += JYC_student_attendance_rete;


   // --------------------------------------------- 

   var IYC_student_attendance_no = 0;

     for (var i = 0; i < IYC_student.length ; i++) {

        var CNo_tmp = IYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_student_attendance_no = IYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_student.length ; i++)

     var IYC_student_attendance_rete = ( (IYC_student_attendance_no / IYC_student.length) * 100 );

     IYC_student_attendance_rete = Math.round( IYC_student_attendance_rete * 100 ) / 100;

     IYC_student_attendance_rete_sum += IYC_student_attendance_rete;


   // --------------------------------------------- 

   var SYC_student_attendance_no = 0;

     for (var i = 0; i < SYC_student.length ; i++) {

        var CNo_tmp = SYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_student_attendance_no = SYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_student.length ; i++)

     var SYC_student_attendance_rete = ( (SYC_student_attendance_no / SYC_student.length) * 100 );

     SYC_student_attendance_rete = Math.round( SYC_student_attendance_rete * 100 ) / 100;

     SYC_student_attendance_rete_sum += SYC_student_attendance_rete;


   // --------------------------------------------- 




     RE_Attendance_V3_text += '<tr>';

     RE_Attendance_V3_text += '<td width=4%>' + myDay + '</td>';

     RE_Attendance_V3_text += '<td width=9%>' + New_DateStr + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + kindy_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + kindy_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + LPC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + LPC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + UPC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + UPC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + JYC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + JYC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + IYC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + IYC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + SYC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + SYC_student_attendance_rete  + '</td>';

     //RE_Attendance_V3_text += '</tr></table></center>';

     RE_Attendance_V3_text += '</tr>';



 // ------------------Between Loop Content--------------------------------------------------------


     } // End of if(myDay == 'Fri') {  // Add for Fridays condition


        } // End of for (var m = 0; m < Verse_4.length ; m++)

     } // End of if (Verse_4) {  //  // 找出日期

 // End Loop


   // --------------------------------------------- 



     kindy_teacher_attendance_rete_Average = ( (kindy_teacher_attendance_rete_sum / Total_Days)  );

     kindy_teacher_attendance_rete_Average = Math.round( kindy_teacher_attendance_rete_Average * 100 ) / 100;    


     LPC_teacher_attendance_rete_Average = ( (LPC_teacher_attendance_rete_sum / Total_Days)  );

     LPC_teacher_attendance_rete_Average = Math.round( LPC_teacher_attendance_rete_Average * 100 ) / 100;  


     UPC_teacher_attendance_rete_Average = ( (UPC_teacher_attendance_rete_sum / Total_Days)  );

     UPC_teacher_attendance_rete_Average = Math.round( UPC_teacher_attendance_rete_Average * 100 ) / 100;     


     JYC_teacher_attendance_rete_Average = ( (JYC_teacher_attendance_rete_sum / Total_Days)  );

     JYC_teacher_attendance_rete_Average = Math.round( JYC_teacher_attendance_rete_Average * 100 ) / 100;     


     IYC_teacher_attendance_rete_Average = ( (IYC_teacher_attendance_rete_sum / Total_Days)  );

     IYC_teacher_attendance_rete_Average = Math.round( IYC_teacher_attendance_rete_Average * 100 ) / 100;   


     SYC_teacher_attendance_rete_Average = ( (SYC_teacher_attendance_rete_sum / Total_Days)  );

     SYC_teacher_attendance_rete_Average = Math.round( SYC_teacher_attendance_rete_Average * 100 ) / 100;   




     kindy_student_attendance_rete_Average = ( (kindy_student_attendance_rete_sum / Total_Days)  );

     kindy_student_attendance_rete_Average = Math.round( kindy_student_attendance_rete_Average * 100 ) / 100;    


     LPC_student_attendance_rete_Average = ( (LPC_student_attendance_rete_sum / Total_Days)  );

     LPC_student_attendance_rete_Average = Math.round( LPC_student_attendance_rete_Average * 100 ) / 100;  


     UPC_student_attendance_rete_Average = ( (UPC_student_attendance_rete_sum / Total_Days)  );

     UPC_student_attendance_rete_Average = Math.round( UPC_student_attendance_rete_Average * 100 ) / 100;     


     JYC_student_attendance_rete_Average = ( (JYC_student_attendance_rete_sum / Total_Days)  );

     JYC_student_attendance_rete_Average = Math.round( JYC_student_attendance_rete_Average * 100 ) / 100;     


     IYC_student_attendance_rete_Average = ( (IYC_student_attendance_rete_sum / Total_Days)  );

     IYC_student_attendance_rete_Average = Math.round( IYC_student_attendance_rete_Average * 100 ) / 100;   


     SYC_student_attendance_rete_Average = ( (SYC_student_attendance_rete_sum / Total_Days)  );

     SYC_student_attendance_rete_Average = Math.round( SYC_student_attendance_rete_Average * 100 ) / 100;   




     RE_Attendance_V3_text += '<tr>';

     RE_Attendance_V3_text += '<th width=12% style="font-size:17pt;" colspan="2">Average</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + kindy_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + kindy_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + LPC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + LPC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + UPC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + UPC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + JYC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + JYC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + IYC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + IYC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + SYC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + SYC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '</tr>';


     RE_Attendance_V3_text += '</table></center>';


     document.getElementById("RE_Attendance_Content_Down").innerHTML = RE_Attendance_V3_text;       


} // End of function Roll_Call_RE_Attendance_V5()



async function Roll_Call_RE_Attendance_V5B() { // for test, for display , for all Fridays, before certain Day
                                               // for Fridays-Before RE Opening Day

   Open_RE_Attendance_Area();

   var RE_Attendance_V3_text_Up = '<center><a href="" onclick="Roll_Call_RE_Attendance_V4B();return false;">' + 'All-Before</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V4();return false;">' + 'All-After</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V5B();return false;">' + 'Fridays-Before</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V5();return false;">' + 'Fridays-After</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V3();return false;">' + 'Current-Record</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Close_RE_Attendance_Area();return false;">' + 'Close</a></center>'  + '<br>';



     RE_Attendance_V3_text_Up += '<center><table border=1 width=100%>';

     RE_Attendance_V3_text_Up += '<tr><th width=3% style="font-size:16pt;">Day</th>';

     RE_Attendance_V3_text_Up += '<th width=9% style="font-size:16pt;">Date</th>';

     RE_Attendance_V3_text_Up += '<th width=14% style="font-size:16pt;" colspan="2">Kindy (%)</th><th width=14% style="font-size:16pt;" colspan="2">LPC (%)</th>';

     RE_Attendance_V3_text_Up += '<th width=14% style="font-size:16pt;" colspan="2">UPC (%)</th><th width=14% style="font-size:16pt;" colspan="2">JYC (%)</th>';

     RE_Attendance_V3_text_Up += '<th width=14% style="font-size:16pt;" colspan="2">IYC (%)</th><th width=14% style="font-size:16pt;" colspan="2">SYC (%)</th></tr>';


     RE_Attendance_V3_text_Up += '<tr>';

     RE_Attendance_V3_text_Up += '<td width=3%></td><td width=9%></td>';

     RE_Attendance_V3_text_Up += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text_Up += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text_Up += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text_Up += '</tr>';

     RE_Attendance_V3_text_Up += '</table></center>';

     document.getElementById("RE_Attendance_Content_Up").innerHTML = RE_Attendance_V3_text_Up;    




     var RE_Attendance_V3_text = '<center><table border=1 width=100%>';




 // Start Loop

     // table.where(indexOrPrimKey).above(lowerBound)

     //let Verse_4 = await dbT2.Service_Record.where('ID_1').startsWithIgnoreCase(DateStr).toArray(); // 202010

     var RE_Attendance_Start_DateStr = RE_Opening_Day;  // 20210130, mean start from 20210130 , test using 20201026 
                                                    // RE Opening Day

     let Verse_4 = await dbT2.Service_Record.where('ID_1').below(RE_Attendance_Start_DateStr).toArray(); // 202010


     var Total_Days = 0;

     if (Verse_4) {  //  // 找出日期

        //Total_Days = Verse_4.length;

        document.getElementById("RE_Attendance_Content_Down").innerHTML = 'Calculating...'; 


        var kindy_teacher_attendance_rete_sum = 0;

        var LPC_teacher_attendance_rete_sum = 0;

        var UPC_teacher_attendance_rete_sum = 0;

        var JYC_teacher_attendance_rete_sum = 0;

        var IYC_teacher_attendance_rete_sum = 0;

        var SYC_teacher_attendance_rete_sum = 0;


        var kindy_student_attendance_rete_sum = 0;

        var LPC_student_attendance_rete_sum = 0;

        var UPC_student_attendance_rete_sum = 0;

        var JYC_student_attendance_rete_sum = 0;

        var IYC_student_attendance_rete_sum = 0;

        var SYC_student_attendance_rete_sum = 0;


        var kindy_teacher_attendance_rete_Average = 0;

        var LPC_teacher_attendance_rete_Average = 0;

        var UPC_teacher_attendance_rete_Average = 0;

        var JYC_teacher_attendance_rete_Average = 0;

        var IYC_teacher_attendance_rete_Average = 0;

        var SYC_teacher_attendance_rete_Average = 0;


        var kindy_student_attendance_rete_Average = 0;

        var LPC_student_attendance_rete_Average = 0;

        var UPC_student_attendance_rete_Average = 0;

        var JYC_student_attendance_rete_Average = 0;

        var IYC_student_attendance_rete_Average = 0;

        var SYC_student_attendance_rete_Average = 0;



        for (var m = 0; m < Verse_4.length ; m++) {

           //var tmp1 = Verse_4[i].ID_2; // 20201010M   ***

           //var tmp2 = tmp1.substr(6); // 10M

           //var DateStr = Display_ID_2; // Exp_start_date , '20200920E'

           //var Year_Str = DateStr.substring(0,4);

           var RE_Attendance_Q_Day = Verse_4[m].ID_2; // 20201010M   ***

           var arg4 = Verse_4[m].ID_2; // 20201010M


           // 考慮加於此 --------------------------------------------------------------------------


     //var arg4 = Verse_4[m].ID_2; // 20201010M

     //var DateStr_tmp = Display_ID_2; // Exp_start_date , '20200920E'

     var DateStr_tmp = arg4; // Exp_start_date , '20200920E'

     var Year_Str = DateStr_tmp.substring(0,4);

     var Month_Str = DateStr_tmp.substring(4,6);

     var Date_Str = DateStr_tmp.substring(6,8);

     var New_DateStr = Date_Str + '.' + Month_Str + '.' + Year_Str;

     
     var Month_Str_tmp = '';

     if(Month_Str == 01) Month_Str_tmp = 0;
     if(Month_Str == 02) Month_Str_tmp = 1;
     if(Month_Str == 03) Month_Str_tmp = 2;
     if(Month_Str == 04) Month_Str_tmp = 3;
     if(Month_Str == 05) Month_Str_tmp = 4;
     if(Month_Str == 06) Month_Str_tmp = 5;
     if(Month_Str == 07) Month_Str_tmp = 6;
     if(Month_Str == 08) Month_Str_tmp = 7;
     if(Month_Str == 09) Month_Str_tmp = 8;
     if(Month_Str == 10) Month_Str_tmp = 9;
     if(Month_Str == 11) Month_Str_tmp = 10;
     if(Month_Str == 12) Month_Str_tmp = 11;


     var myDate = new Date();
     myDate.setFullYear(Year_Str);
     myDate.setMonth(Month_Str_tmp); // 0-11
     myDate.setDate(Date_Str);

     var myDay = '';

     if(myDate.getDay() == 6)
        myDay = 'Sat';
     if(myDate.getDay() == 5)
        myDay = 'Fri';
     if(myDate.getDay() == 4)
        myDay = 'Thu';
     if(myDate.getDay() == 3)
        myDay = 'Wed';
     if(myDate.getDay() == 2)
        myDay = 'Tue';
     if(myDate.getDay() == 1)
        myDay = 'Mon';
     if(myDate.getDay() == 0)
        myDay = 'Sun';


     if(myDay == 'Fri') {  // Add for Fridays condition

        Total_Days = Total_Days + 1;


           // 考慮加於此 --------------------------------------------------------------------------



           //var Result = 'n';

           //var Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

 // ------------------Between Loop Content--------------------------------------------------------

   // --------------------------------------------- 

   var kindy_teacher_attendance_no = 0;

     for (var i = 0; i < kindy_teacher.length ; i++) {

        var CNo_tmp = kindy_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              kindy_teacher_attendance_no = kindy_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_teacher.length ; i++)   

     var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;

     kindy_teacher_attendance_rete_sum += kindy_teacher_attendance_rete;


   // --------------------------------------------- 

   var LPC_teacher_attendance_no = 0;

     for (var i = 0; i < LPC_teacher.length ; i++) {

        var CNo_tmp = LPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_teacher_attendance_no = LPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_teacher.length ; i++)

     var LPC_teacher_attendance_rete = ( (LPC_teacher_attendance_no / LPC_teacher.length) * 100 );

     LPC_teacher_attendance_rete = Math.round( LPC_teacher_attendance_rete * 100 ) / 100;

     LPC_teacher_attendance_rete_sum += LPC_teacher_attendance_rete;


   // --------------------------------------------- 

   var UPC_teacher_attendance_no = 0;

     for (var i = 0; i < UPC_teacher.length ; i++) {

        var CNo_tmp = UPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_teacher_attendance_no = UPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_teacher.length ; i++)

     var UPC_teacher_attendance_rete = ( (UPC_teacher_attendance_no / UPC_teacher.length) * 100 );

     UPC_teacher_attendance_rete = Math.round( UPC_teacher_attendance_rete * 100 ) / 100;

     UPC_teacher_attendance_rete_V2 = UPC_teacher_attendance_rete;

     UPC_teacher_attendance_rete_sum += UPC_teacher_attendance_rete;


   // --------------------------------------------- 

   var JYC_teacher_attendance_no = 0;

     for (var i = 0; i < JYC_teacher.length ; i++) {

        var CNo_tmp = JYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_teacher_attendance_no = JYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_teacher.length ; i++)

     var JYC_teacher_attendance_rete = ( (JYC_teacher_attendance_no / JYC_teacher.length) * 100 );

     JYC_teacher_attendance_rete = Math.round( JYC_teacher_attendance_rete * 100 ) / 100;

     JYC_teacher_attendance_rete_sum += JYC_teacher_attendance_rete;


   // --------------------------------------------- 

   var IYC_teacher_attendance_no = 0;

     //for (var i = 0; i < IYC_teacher.length ; i++) {

        //var CNo_tmp = IYC_teacher[i]; // new Array(93,102,95)


     for (var i = 0; i < IYC_teacher_B.length ; i++) {

        var CNo_tmp = IYC_teacher_B[i]; // new Array(93,102,95)


        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_teacher_attendance_no = IYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_teacher_B.length ; i++)

     var IYC_teacher_attendance_rete = ( (IYC_teacher_attendance_no / IYC_teacher_B.length) * 100 );

     IYC_teacher_attendance_rete = Math.round( IYC_teacher_attendance_rete * 100 ) / 100;

     IYC_teacher_attendance_rete_sum += IYC_teacher_attendance_rete;


   // --------------------------------------------- 

   var SYC_teacher_attendance_no = 0;

     for (var i = 0; i < SYC_teacher.length ; i++) {

        var CNo_tmp = SYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_teacher_attendance_no = SYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_teacher.length ; i++)

     var SYC_teacher_attendance_rete = ( (SYC_teacher_attendance_no / SYC_teacher.length) * 100 );

     SYC_teacher_attendance_rete = Math.round( SYC_teacher_attendance_rete * 100 ) / 100;

     SYC_teacher_attendance_rete_sum += SYC_teacher_attendance_rete;


   // --------------------------------------------- 

   var kindy_student_attendance_no = 0;

     for (var i = 0; i < kindy_student.length ; i++) {

        var CNo_tmp = kindy_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              kindy_student_attendance_no = kindy_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_student.length ; i++)

     var kindy_student_attendance_rete = ( (kindy_student_attendance_no / kindy_student.length) * 100 );

     kindy_student_attendance_rete = Math.round( kindy_student_attendance_rete * 100 ) / 100;

     kindy_student_attendance_rete_sum += kindy_student_attendance_rete;



   // --------------------------------------------- 

   var LPC_student_attendance_no = 0;

     for (var i = 0; i < LPC_student.length ; i++) {

        var CNo_tmp = LPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_student_attendance_no = LPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_student.length ; i++)

     var LPC_student_attendance_rete = ( (LPC_student_attendance_no / LPC_student.length) * 100 );

     LPC_student_attendance_rete = Math.round( LPC_student_attendance_rete * 100 ) / 100;

     LPC_student_attendance_rete_sum += LPC_student_attendance_rete;


   // --------------------------------------------- 

   var UPC_student_attendance_no = 0;

     for (var i = 0; i < UPC_student.length ; i++) {

        var CNo_tmp = UPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_student_attendance_no = UPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_student.length ; i++)

     var UPC_student_attendance_rete = ( (UPC_student_attendance_no / UPC_student.length) * 100 );

     UPC_student_attendance_rete = Math.round( UPC_student_attendance_rete * 100 ) / 100;

     UPC_student_attendance_rete_sum += UPC_student_attendance_rete;


   // --------------------------------------------- 

   var JYC_student_attendance_no = 0;

     for (var i = 0; i < JYC_student_B.length ; i++) {

        var CNo_tmp = JYC_student_B[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_student_attendance_no = JYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_student_B.length ; i++)

     var JYC_student_attendance_rete = ( (JYC_student_attendance_no / JYC_student_B.length) * 100 );

     JYC_student_attendance_rete = Math.round( JYC_student_attendance_rete * 100 ) / 100;

     JYC_student_attendance_rete_sum += JYC_student_attendance_rete;


   // --------------------------------------------- 

   var IYC_student_attendance_no = 0;

     for (var i = 0; i < IYC_student_B.length ; i++) {

        var CNo_tmp = IYC_student_B[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_student_attendance_no = IYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_student_B.length ; i++)

     var IYC_student_attendance_rete = ( (IYC_student_attendance_no / IYC_student_B.length) * 100 );

     IYC_student_attendance_rete = Math.round( IYC_student_attendance_rete * 100 ) / 100;

     IYC_student_attendance_rete_sum += IYC_student_attendance_rete;


   // --------------------------------------------- 

   var SYC_student_attendance_no = 0;

     for (var i = 0; i < SYC_student.length ; i++) {

        var CNo_tmp = SYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_student_attendance_no = SYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_student.length ; i++)

     var SYC_student_attendance_rete = ( (SYC_student_attendance_no / SYC_student.length) * 100 );

     SYC_student_attendance_rete = Math.round( SYC_student_attendance_rete * 100 ) / 100;

     SYC_student_attendance_rete_sum += SYC_student_attendance_rete;


   // --------------------------------------------- 




     RE_Attendance_V3_text += '<tr>';

     RE_Attendance_V3_text += '<td width=4%>' + myDay + '</td>';

     RE_Attendance_V3_text += '<td width=9%>' + New_DateStr + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + kindy_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + kindy_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + LPC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + LPC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + UPC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + UPC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + JYC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + JYC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + IYC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + IYC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + SYC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + SYC_student_attendance_rete  + '</td>';

     //RE_Attendance_V3_text += '</tr></table></center>';

     RE_Attendance_V3_text += '</tr>';



 // ------------------Between Loop Content--------------------------------------------------------


     } // End of if(myDay == 'Fri') {  // Add for Fridays condition


        } // End of for (var m = 0; m < Verse_4.length ; m++)

     } // End of if (Verse_4) {  //  // 找出日期

 // End Loop


   // --------------------------------------------- 



     kindy_teacher_attendance_rete_Average = ( (kindy_teacher_attendance_rete_sum / Total_Days)  );

     kindy_teacher_attendance_rete_Average = Math.round( kindy_teacher_attendance_rete_Average * 100 ) / 100;    


     LPC_teacher_attendance_rete_Average = ( (LPC_teacher_attendance_rete_sum / Total_Days)  );

     LPC_teacher_attendance_rete_Average = Math.round( LPC_teacher_attendance_rete_Average * 100 ) / 100;  


     UPC_teacher_attendance_rete_Average = ( (UPC_teacher_attendance_rete_sum / Total_Days)  );

     UPC_teacher_attendance_rete_Average = Math.round( UPC_teacher_attendance_rete_Average * 100 ) / 100;     


     JYC_teacher_attendance_rete_Average = ( (JYC_teacher_attendance_rete_sum / Total_Days)  );

     JYC_teacher_attendance_rete_Average = Math.round( JYC_teacher_attendance_rete_Average * 100 ) / 100;     


     IYC_teacher_attendance_rete_Average = ( (IYC_teacher_attendance_rete_sum / Total_Days)  );

     IYC_teacher_attendance_rete_Average = Math.round( IYC_teacher_attendance_rete_Average * 100 ) / 100;   


     SYC_teacher_attendance_rete_Average = ( (SYC_teacher_attendance_rete_sum / Total_Days)  );

     SYC_teacher_attendance_rete_Average = Math.round( SYC_teacher_attendance_rete_Average * 100 ) / 100;   




     kindy_student_attendance_rete_Average = ( (kindy_student_attendance_rete_sum / Total_Days)  );

     kindy_student_attendance_rete_Average = Math.round( kindy_student_attendance_rete_Average * 100 ) / 100;    


     LPC_student_attendance_rete_Average = ( (LPC_student_attendance_rete_sum / Total_Days)  );

     LPC_student_attendance_rete_Average = Math.round( LPC_student_attendance_rete_Average * 100 ) / 100;  


     UPC_student_attendance_rete_Average = ( (UPC_student_attendance_rete_sum / Total_Days)  );

     UPC_student_attendance_rete_Average = Math.round( UPC_student_attendance_rete_Average * 100 ) / 100;     


     JYC_student_attendance_rete_Average = ( (JYC_student_attendance_rete_sum / Total_Days)  );

     JYC_student_attendance_rete_Average = Math.round( JYC_student_attendance_rete_Average * 100 ) / 100;     


     IYC_student_attendance_rete_Average = ( (IYC_student_attendance_rete_sum / Total_Days)  );

     IYC_student_attendance_rete_Average = Math.round( IYC_student_attendance_rete_Average * 100 ) / 100;   


     SYC_student_attendance_rete_Average = ( (SYC_student_attendance_rete_sum / Total_Days)  );

     SYC_student_attendance_rete_Average = Math.round( SYC_student_attendance_rete_Average * 100 ) / 100;   




     RE_Attendance_V3_text += '<tr>';

     RE_Attendance_V3_text += '<th width=12% style="font-size:17pt;" colspan="2">Average</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + kindy_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + kindy_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + LPC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + LPC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + UPC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + UPC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + JYC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + JYC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + IYC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + IYC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + SYC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + SYC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '</tr>';


     RE_Attendance_V3_text += '</table></center>';


     document.getElementById("RE_Attendance_Content_Down").innerHTML = RE_Attendance_V3_text;       


} // End of function Roll_Call_RE_Attendance_V5B()





async function Roll_Call_RE_Attendance_V4B() { // for test, for display , for all Day, before certain Day
                                               // for All-Before RE Opening Day

   Open_RE_Attendance_Area();

   var RE_Attendance_V3_text_Up = '<center><a href="" onclick="Roll_Call_RE_Attendance_V4B();return false;">' + 'All-Before</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V4();return false;">' + 'All-After</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V5B();return false;">' + 'Fridays-Before</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V5();return false;">' + 'Fridays-After</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Roll_Call_RE_Attendance_V3();return false;">' + 'Current-Record</a>' + '&nbsp';

   RE_Attendance_V3_text_Up += ' ' + '<a href="" onclick="Close_RE_Attendance_Area();return false;">' + 'Close</a></center>'  + '<br>';



     RE_Attendance_V3_text_Up += '<center><table border=1 width=100%>';

     RE_Attendance_V3_text_Up += '<tr><th width=3% style="font-size:16pt;">Day</th>';

     RE_Attendance_V3_text_Up += '<th width=9% style="font-size:16pt;">Date</th>';

     RE_Attendance_V3_text_Up += '<th width=14% style="font-size:16pt;" colspan="2">Kindy (%)</th><th width=14% style="font-size:16pt;" colspan="2">LPC (%)</th>';

     RE_Attendance_V3_text_Up += '<th width=14% style="font-size:16pt;" colspan="2">UPC (%)</th><th width=14% style="font-size:16pt;" colspan="2">JYC (%)</th>';

     RE_Attendance_V3_text_Up += '<th width=14% style="font-size:16pt;" colspan="2">IYC (%)</th><th width=14% style="font-size:16pt;" colspan="2">SYC (%)</th></tr>';


     RE_Attendance_V3_text_Up += '<tr>';

     RE_Attendance_V3_text_Up += '<td width=3%></td><td width=9%></td>';

     RE_Attendance_V3_text_Up += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text_Up += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text_Up += '<td>Teacher</td><td>Student</td><td>Teacher</td><td>Student</td>';

     RE_Attendance_V3_text_Up += '</tr>';

     RE_Attendance_V3_text_Up += '</table></center>';

     document.getElementById("RE_Attendance_Content_Up").innerHTML = RE_Attendance_V3_text_Up;    




     var RE_Attendance_V3_text = '<center><table border=1 width=100%>';




 // Start Loop

     // table.where(indexOrPrimKey).above(lowerBound)

     //let Verse_4 = await dbT2.Service_Record.where('ID_1').startsWithIgnoreCase(DateStr).toArray(); // 202010


     var RE_Attendance_Start_DateStr = RE_Opening_Day;  // 20210130, mean below 20210130

     let Verse_4 = await dbT2.Service_Record.where('ID_1').below(RE_Attendance_Start_DateStr).toArray(); // 202010


     //var RE_Attendance_Start_DateStr = '20210130';  // 20210130, mean start from 20210130

     //let Verse_4 = await dbT2.Service_Record.where('ID_1').above(RE_Attendance_Start_DateStr).toArray(); // 202010


     var Total_Days = 0;

     if (Verse_4) {  //  // 找出日期

        Total_Days = Verse_4.length;

        document.getElementById("RE_Attendance_Content_Down").innerHTML = 'Calculating...';  


        var kindy_teacher_attendance_rete_sum = 0;

        var LPC_teacher_attendance_rete_sum = 0;

        var UPC_teacher_attendance_rete_sum = 0;

        var JYC_teacher_attendance_rete_sum = 0;

        var IYC_teacher_attendance_rete_sum = 0;

        var SYC_teacher_attendance_rete_sum = 0;


        var kindy_student_attendance_rete_sum = 0;

        var LPC_student_attendance_rete_sum = 0;

        var UPC_student_attendance_rete_sum = 0;

        var JYC_student_attendance_rete_sum = 0;

        var IYC_student_attendance_rete_sum = 0;

        var SYC_student_attendance_rete_sum = 0;


        var kindy_teacher_attendance_rete_Average = 0;

        var LPC_teacher_attendance_rete_Average = 0;

        var UPC_teacher_attendance_rete_Average = 0;

        var JYC_teacher_attendance_rete_Average = 0;

        var IYC_teacher_attendance_rete_Average = 0;

        var SYC_teacher_attendance_rete_Average = 0;


        var kindy_student_attendance_rete_Average = 0;

        var LPC_student_attendance_rete_Average = 0;

        var UPC_student_attendance_rete_Average = 0;

        var JYC_student_attendance_rete_Average = 0;

        var IYC_student_attendance_rete_Average = 0;

        var SYC_student_attendance_rete_Average = 0;



        for (var m = 0; m < Verse_4.length ; m++) {

           //var tmp1 = Verse_4[i].ID_2; // 20201010M   ***

           //var tmp2 = tmp1.substr(6); // 10M

           //var DateStr = Display_ID_2; // Exp_start_date , '20200920E'

           //var Year_Str = DateStr.substring(0,4);

           var RE_Attendance_Q_Day = Verse_4[m].ID_2; // 20201010M   ***

           var arg4 = Verse_4[m].ID_2; // 20201010M

           //var Result = 'n';

           //var Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

 // ------------------Between Loop Content--------------------------------------------------------

   // --------------------------------------------- 

   var kindy_teacher_attendance_no = 0;

     for (var i = 0; i < kindy_teacher.length ; i++) {

        var CNo_tmp = kindy_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              kindy_teacher_attendance_no = kindy_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_teacher.length ; i++)   

     var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;

     kindy_teacher_attendance_rete_sum += kindy_teacher_attendance_rete;


   // --------------------------------------------- 

   var LPC_teacher_attendance_no = 0;

     for (var i = 0; i < LPC_teacher.length ; i++) {

        var CNo_tmp = LPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_teacher_attendance_no = LPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_teacher.length ; i++)

     var LPC_teacher_attendance_rete = ( (LPC_teacher_attendance_no / LPC_teacher.length) * 100 );

     LPC_teacher_attendance_rete = Math.round( LPC_teacher_attendance_rete * 100 ) / 100;

     LPC_teacher_attendance_rete_sum += LPC_teacher_attendance_rete;


   // --------------------------------------------- 

   var UPC_teacher_attendance_no = 0;

     for (var i = 0; i < UPC_teacher.length ; i++) {

        var CNo_tmp = UPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_teacher_attendance_no = UPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_teacher.length ; i++)

     var UPC_teacher_attendance_rete = ( (UPC_teacher_attendance_no / UPC_teacher.length) * 100 );

     UPC_teacher_attendance_rete = Math.round( UPC_teacher_attendance_rete * 100 ) / 100;

     UPC_teacher_attendance_rete_V2 = UPC_teacher_attendance_rete;

     UPC_teacher_attendance_rete_sum += UPC_teacher_attendance_rete;


   // --------------------------------------------- 

   var JYC_teacher_attendance_no = 0;

     for (var i = 0; i < JYC_teacher.length ; i++) {

        var CNo_tmp = JYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_teacher_attendance_no = JYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_teacher.length ; i++)

     var JYC_teacher_attendance_rete = ( (JYC_teacher_attendance_no / JYC_teacher.length) * 100 );

     JYC_teacher_attendance_rete = Math.round( JYC_teacher_attendance_rete * 100 ) / 100;

     JYC_teacher_attendance_rete_sum += JYC_teacher_attendance_rete;


   // --------------------------------------------- 

   var IYC_teacher_attendance_no = 0;

     for (var i = 0; i < IYC_teacher_B.length ; i++) {

        var CNo_tmp = IYC_teacher_B[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_teacher_attendance_no = IYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_teacher.length ; i++)

     var IYC_teacher_attendance_rete = ( (IYC_teacher_attendance_no / IYC_teacher_B.length) * 100 );

     IYC_teacher_attendance_rete = Math.round( IYC_teacher_attendance_rete * 100 ) / 100;

     IYC_teacher_attendance_rete_sum += IYC_teacher_attendance_rete;


   // --------------------------------------------- 

   var SYC_teacher_attendance_no = 0;

     for (var i = 0; i < SYC_teacher.length ; i++) {

        var CNo_tmp = SYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_teacher_attendance_no = SYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_teacher.length ; i++)

     var SYC_teacher_attendance_rete = ( (SYC_teacher_attendance_no / SYC_teacher.length) * 100 );

     SYC_teacher_attendance_rete = Math.round( SYC_teacher_attendance_rete * 100 ) / 100;

     SYC_teacher_attendance_rete_sum += SYC_teacher_attendance_rete;


   // --------------------------------------------- 

   var kindy_student_attendance_no = 0;

     for (var i = 0; i < kindy_student.length ; i++) {

        var CNo_tmp = kindy_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              kindy_student_attendance_no = kindy_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_student.length ; i++)

     var kindy_student_attendance_rete = ( (kindy_student_attendance_no / kindy_student.length) * 100 );

     kindy_student_attendance_rete = Math.round( kindy_student_attendance_rete * 100 ) / 100;

     kindy_student_attendance_rete_sum += kindy_student_attendance_rete;



   // --------------------------------------------- 

   var LPC_student_attendance_no = 0;

     for (var i = 0; i < LPC_student.length ; i++) {

        var CNo_tmp = LPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_student_attendance_no = LPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_student.length ; i++)

     var LPC_student_attendance_rete = ( (LPC_student_attendance_no / LPC_student.length) * 100 );

     LPC_student_attendance_rete = Math.round( LPC_student_attendance_rete * 100 ) / 100;

     LPC_student_attendance_rete_sum += LPC_student_attendance_rete;


   // --------------------------------------------- 

   var UPC_student_attendance_no = 0;

     for (var i = 0; i < UPC_student.length ; i++) {

        var CNo_tmp = UPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_student_attendance_no = UPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_student.length ; i++)

     var UPC_student_attendance_rete = ( (UPC_student_attendance_no / UPC_student.length) * 100 );

     UPC_student_attendance_rete = Math.round( UPC_student_attendance_rete * 100 ) / 100;

     UPC_student_attendance_rete_sum += UPC_student_attendance_rete;


   // --------------------------------------------- 

   var JYC_student_attendance_no = 0;

     for (var i = 0; i < JYC_student_B.length ; i++) {

        var CNo_tmp = JYC_student_B[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_student_attendance_no = JYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_student.length ; i++)

     var JYC_student_attendance_rete = ( (JYC_student_attendance_no / JYC_student_B.length) * 100 );

     JYC_student_attendance_rete = Math.round( JYC_student_attendance_rete * 100 ) / 100;

     JYC_student_attendance_rete_sum += JYC_student_attendance_rete;


   // --------------------------------------------- 

   var IYC_student_attendance_no = 0;

     for (var i = 0; i < IYC_student_B.length ; i++) {

        var CNo_tmp = IYC_student_B[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_student_attendance_no = IYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_student.length ; i++)

     var IYC_student_attendance_rete = ( (IYC_student_attendance_no / IYC_student_B.length) * 100 );

     IYC_student_attendance_rete = Math.round( IYC_student_attendance_rete * 100 ) / 100;

     IYC_student_attendance_rete_sum += IYC_student_attendance_rete;


   // --------------------------------------------- 

   var SYC_student_attendance_no = 0;

     for (var i = 0; i < SYC_student.length ; i++) {

        var CNo_tmp = SYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance5(arg1,arg2,arg3);

           var Result = 'n';                                       // 可 考慮用此

           Result = await Check_Attendance6(arg1,arg2,arg3,arg4);  // 可 考慮用此


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_student_attendance_no = SYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_student.length ; i++)

     var SYC_student_attendance_rete = ( (SYC_student_attendance_no / SYC_student.length) * 100 );

     SYC_student_attendance_rete = Math.round( SYC_student_attendance_rete * 100 ) / 100;

     SYC_student_attendance_rete_sum += SYC_student_attendance_rete;


   // --------------------------------------------- 

     //var arg4 = Verse_4[m].ID_2; // 20201010M

     //var DateStr_tmp = Display_ID_2; // Exp_start_date , '20200920E'

     var DateStr_tmp = arg4; // Exp_start_date , '20200920E'

     var Year_Str = DateStr_tmp.substring(0,4);

     var Month_Str = DateStr_tmp.substring(4,6);

     var Date_Str = DateStr_tmp.substring(6,8);

     var New_DateStr = Date_Str + '.' + Month_Str + '.' + Year_Str;

     
     var Month_Str_tmp = '';

     if(Month_Str == 01) Month_Str_tmp = 0;
     if(Month_Str == 02) Month_Str_tmp = 1;
     if(Month_Str == 03) Month_Str_tmp = 2;
     if(Month_Str == 04) Month_Str_tmp = 3;
     if(Month_Str == 05) Month_Str_tmp = 4;
     if(Month_Str == 06) Month_Str_tmp = 5;
     if(Month_Str == 07) Month_Str_tmp = 6;
     if(Month_Str == 08) Month_Str_tmp = 7;
     if(Month_Str == 09) Month_Str_tmp = 8;
     if(Month_Str == 10) Month_Str_tmp = 9;
     if(Month_Str == 11) Month_Str_tmp = 10;
     if(Month_Str == 12) Month_Str_tmp = 11;


     var myDate = new Date();
     myDate.setFullYear(Year_Str);
     myDate.setMonth(Month_Str_tmp); // 0-11
     myDate.setDate(Date_Str);

     var myDay = '';

     if(myDate.getDay() == 6)
        myDay = 'Sat';
     if(myDate.getDay() == 5)
        myDay = 'Fri';
     if(myDate.getDay() == 4)
        myDay = 'Thu';
     if(myDate.getDay() == 3)
        myDay = 'Wed';
     if(myDate.getDay() == 2)
        myDay = 'Tue';
     if(myDate.getDay() == 1)
        myDay = 'Mon';
     if(myDate.getDay() == 0)
        myDay = 'Sun';


     RE_Attendance_V3_text += '<tr>';

     RE_Attendance_V3_text += '<td width=4%>' + myDay + '</td>';

     RE_Attendance_V3_text += '<td width=9%>' + New_DateStr + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + kindy_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + kindy_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + LPC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + LPC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + UPC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + UPC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + JYC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + JYC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + IYC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + IYC_student_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + SYC_teacher_attendance_rete  + '</td>';

     RE_Attendance_V3_text += '<td width=7% style="font-size:17pt;" align=right>' + SYC_student_attendance_rete  + '</td>';

     //RE_Attendance_V3_text += '</tr></table></center>';

     RE_Attendance_V3_text += '</tr>';



 // ------------------Between Loop Content--------------------------------------------------------


        } // End of for (var m = 0; m < Verse_4.length ; m++)

     } // End of if (Verse_4) {  //  // 找出日期

 // End Loop


   // --------------------------------------------- 



     kindy_teacher_attendance_rete_Average = ( (kindy_teacher_attendance_rete_sum / Total_Days)  );

     kindy_teacher_attendance_rete_Average = Math.round( kindy_teacher_attendance_rete_Average * 100 ) / 100;    


     LPC_teacher_attendance_rete_Average = ( (LPC_teacher_attendance_rete_sum / Total_Days)  );

     LPC_teacher_attendance_rete_Average = Math.round( LPC_teacher_attendance_rete_Average * 100 ) / 100;  


     UPC_teacher_attendance_rete_Average = ( (UPC_teacher_attendance_rete_sum / Total_Days)  );

     UPC_teacher_attendance_rete_Average = Math.round( UPC_teacher_attendance_rete_Average * 100 ) / 100;     


     JYC_teacher_attendance_rete_Average = ( (JYC_teacher_attendance_rete_sum / Total_Days)  );

     JYC_teacher_attendance_rete_Average = Math.round( JYC_teacher_attendance_rete_Average * 100 ) / 100;     


     IYC_teacher_attendance_rete_Average = ( (IYC_teacher_attendance_rete_sum / Total_Days)  );

     IYC_teacher_attendance_rete_Average = Math.round( IYC_teacher_attendance_rete_Average * 100 ) / 100;   


     SYC_teacher_attendance_rete_Average = ( (SYC_teacher_attendance_rete_sum / Total_Days)  );

     SYC_teacher_attendance_rete_Average = Math.round( SYC_teacher_attendance_rete_Average * 100 ) / 100;   




     kindy_student_attendance_rete_Average = ( (kindy_student_attendance_rete_sum / Total_Days)  );

     kindy_student_attendance_rete_Average = Math.round( kindy_student_attendance_rete_Average * 100 ) / 100;    


     LPC_student_attendance_rete_Average = ( (LPC_student_attendance_rete_sum / Total_Days)  );

     LPC_student_attendance_rete_Average = Math.round( LPC_student_attendance_rete_Average * 100 ) / 100;  


     UPC_student_attendance_rete_Average = ( (UPC_student_attendance_rete_sum / Total_Days)  );

     UPC_student_attendance_rete_Average = Math.round( UPC_student_attendance_rete_Average * 100 ) / 100;     


     JYC_student_attendance_rete_Average = ( (JYC_student_attendance_rete_sum / Total_Days)  );

     JYC_student_attendance_rete_Average = Math.round( JYC_student_attendance_rete_Average * 100 ) / 100;     


     IYC_student_attendance_rete_Average = ( (IYC_student_attendance_rete_sum / Total_Days)  );

     IYC_student_attendance_rete_Average = Math.round( IYC_student_attendance_rete_Average * 100 ) / 100;   


     SYC_student_attendance_rete_Average = ( (SYC_student_attendance_rete_sum / Total_Days)  );

     SYC_student_attendance_rete_Average = Math.round( SYC_student_attendance_rete_Average * 100 ) / 100;   




     RE_Attendance_V3_text += '<tr>';

     RE_Attendance_V3_text += '<th width=12% style="font-size:17pt;" colspan="2">Average</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + kindy_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + kindy_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + LPC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + LPC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + UPC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + UPC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + JYC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + JYC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + IYC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + IYC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + SYC_teacher_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '<th width=7% style="font-size:17pt;" >' + SYC_student_attendance_rete_Average + '</th>';

     RE_Attendance_V3_text += '</tr>';


     RE_Attendance_V3_text += '</table></center>';


     document.getElementById("RE_Attendance_Content_Down").innerHTML = RE_Attendance_V3_text;       


} // End of function Roll_Call_RE_Attendance_V4B()




async function Roll_Call_Kindy_teacher_Attendance() { // for test


   Read_for_Roll_Call = 'N';  


   // Prepare HTML for filling data

     var Rnum = 3001;  // Rnum
     var Rvers = 4001;  // EName
     var CName = 5001;  // CName

     var Roll_Call_Content_Str = '<table><tr>';

     var j=1;

     var CNo_tmp_Str = '';

     for (var i = 0; i < LPC_student.length ; i++) {

     //for (var i = 0; i < 12 ; i++) {

        var CNo_tmp = LPC_student[i]; // new Array(93,102,95)

        if (CNo_tmp.length >3) {

           CNo_tmp_Str = CNo_tmp.substr(0, 3);

           if (CNo_tmp_Str == 'CIC') {

              CNo_tmp = CNo_tmp.substr(3);

           }

        }
        else {

           CNo_tmp_Str = '';

        }

        //if (H_No_tmp3 == '1' || j==1) {

        if (CNo_tmp_Str == 'CIC' || j==1) { 
        //if (j==1) { 

           var add_str1 = '</tr><tr>';

           //var add_str1 = '';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           if (j==1) {

              j=2;

           }
           else if (CNo_tmp_Str == 'CIC') {

              j=1;

           }

           //j=2;

        }
        else {

           var add_str1 = '<td></td><td></td><td></td><td></td><td></td>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=1;

        }

        Rnum++;
        Rvers++;
        CName++;

     } // End of for (var i = 0; i < 12 ; i++)


     var Roll_Call_Content_Str = Roll_Call_Content_Str + '</tr></table>';

     document.getElementById("Roll_Call_Content").innerHTML = Roll_Call_Content_Str;


        //if (

        //var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        //if (Verse_3.length) { // Prepare HTML for filling data


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var kindy_teacher_attendance_no = 0;

   var kindy_student_attendance_no = 0;



     for (var i = 0; i < kindy_teacher.length ; i++) {

        var CNo_tmp = kindy_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              kindy_teacher_attendance_no = kindy_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_teacher.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;

     //var kindy_student_attendance_rete = ( (kindy_student_attendance_no / kindy_student.length) * 100 );


     document.getElementById(4001).innerHTML =  'Kindy Teacher=';

     document.getElementById(5001).innerHTML =  kindy_teacher_attendance_rete + '%';    

     //document.getElementById(4001).innerHTML =  'Kindy Student=';

     //document.getElementById(5001).innerHTML =  kindy_student_attendance_rete + '%';    



} // End of function Roll_Call_Kindy_teacher_Attendance()



async function Roll_Call_Kindy_teacher_Attendance_V2() { // for test, for email


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------


   var kindy_teacher_attendance_no = 0;

   var kindy_student_attendance_no = 0;



     for (var i = 0; i < kindy_teacher.length ; i++) {

        var CNo_tmp = kindy_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              kindy_teacher_attendance_no = kindy_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_teacher.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;

     kindy_teacher_attendance_rete_V2 = kindy_teacher_attendance_rete;


     //document.getElementById(4001).innerHTML =  'Kindy Teacher=';

     //document.getElementById(5001).innerHTML =  kindy_teacher_attendance_rete + '%';    



} // End of function Roll_Call_Kindy_teacher_Attendance_V2()



async function Roll_Call_LPC_teacher_Attendance() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var LPC_teacher_attendance_no = 0;



     for (var i = 0; i < LPC_teacher.length ; i++) {

        var CNo_tmp = LPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_teacher_attendance_no = LPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_teacher.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     var LPC_teacher_attendance_rete = ( (LPC_teacher_attendance_no / LPC_teacher.length) * 100 );

     LPC_teacher_attendance_rete = Math.round( LPC_teacher_attendance_rete * 100 ) / 100;


     document.getElementById(4003).innerHTML =  'LPC Teacher=';

     document.getElementById(5003).innerHTML =  LPC_teacher_attendance_rete + '%';    



} // End of function Roll_Call_LPC_teacher_Attendance()



async function Roll_Call_LPC_teacher_Attendance_V2() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------


   var LPC_teacher_attendance_no = 0;



     for (var i = 0; i < LPC_teacher.length ; i++) {

        var CNo_tmp = LPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_teacher_attendance_no = LPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_teacher.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     var LPC_teacher_attendance_rete = ( (LPC_teacher_attendance_no / LPC_teacher.length) * 100 );

     LPC_teacher_attendance_rete = Math.round( LPC_teacher_attendance_rete * 100 ) / 100;

     LPC_teacher_attendance_rete_V2 = LPC_teacher_attendance_rete;


     //document.getElementById(4003).innerHTML =  'LPC Teacher=';

     //document.getElementById(5003).innerHTML =  LPC_teacher_attendance_rete + '%';    



} // End of function Roll_Call_LPC_teacher_Attendance_V2()




async function Roll_Call_UPC_teacher_Attendance() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var UPC_teacher_attendance_no = 0;



     for (var i = 0; i < UPC_teacher.length ; i++) {

        var CNo_tmp = UPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_teacher_attendance_no = UPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_teacher.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     var UPC_teacher_attendance_rete = ( (UPC_teacher_attendance_no / UPC_teacher.length) * 100 );

     UPC_teacher_attendance_rete = Math.round( UPC_teacher_attendance_rete * 100 ) / 100;


     document.getElementById(4005).innerHTML =  'UPC Teacher=';

     document.getElementById(5005).innerHTML =  UPC_teacher_attendance_rete + '%';    



} // End of function Roll_Call_UPC_teacher_Attendance()


async function Roll_Call_UPC_teacher_Attendance_V2() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------


   var UPC_teacher_attendance_no = 0;



     for (var i = 0; i < UPC_teacher.length ; i++) {

        var CNo_tmp = UPC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_teacher_attendance_no = UPC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_teacher.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     var UPC_teacher_attendance_rete = ( (UPC_teacher_attendance_no / UPC_teacher.length) * 100 );

     UPC_teacher_attendance_rete = Math.round( UPC_teacher_attendance_rete * 100 ) / 100;

     UPC_teacher_attendance_rete_V2 = UPC_teacher_attendance_rete;


     //document.getElementById(4005).innerHTML =  'UPC Teacher=';

     //document.getElementById(5005).innerHTML =  UPC_teacher_attendance_rete + '%';    



} // End of function Roll_Call_UPC_teacher_Attendance_V2()




async function Roll_Call_JYC_teacher_Attendance() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var JYC_teacher_attendance_no = 0;



     for (var i = 0; i < JYC_teacher.length ; i++) {

        var CNo_tmp = JYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_teacher_attendance_no = JYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_teacher.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     var JYC_teacher_attendance_rete = ( (JYC_teacher_attendance_no / JYC_teacher.length) * 100 );

     JYC_teacher_attendance_rete = Math.round( JYC_teacher_attendance_rete * 100 ) / 100;


     document.getElementById(4007).innerHTML =  'JYC Teacher=';

     document.getElementById(5007).innerHTML =  JYC_teacher_attendance_rete + '%';    



} // End of function Roll_Call_JYC_teacher_Attendance()


async function Roll_Call_JYC_teacher_Attendance_V2() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------


   var JYC_teacher_attendance_no = 0;



     for (var i = 0; i < JYC_teacher.length ; i++) {

        var CNo_tmp = JYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_teacher_attendance_no = JYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_teacher.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     var JYC_teacher_attendance_rete = ( (JYC_teacher_attendance_no / JYC_teacher.length) * 100 );

     JYC_teacher_attendance_rete = Math.round( JYC_teacher_attendance_rete * 100 ) / 100;

     JYC_teacher_attendance_rete_V2 = JYC_teacher_attendance_rete;


     //document.getElementById(4007).innerHTML =  'JYC Teacher=';

     //document.getElementById(5007).innerHTML =  JYC_teacher_attendance_rete + '%';    



} // End of function Roll_Call_JYC_teacher_Attendance_V2()



async function Roll_Call_IYC_teacher_Attendance() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var IYC_teacher_attendance_no = 0;



     for (var i = 0; i < IYC_teacher.length ; i++) {

        var CNo_tmp = IYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_teacher_attendance_no = IYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_teacher.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     var IYC_teacher_attendance_rete = ( (IYC_teacher_attendance_no / IYC_teacher.length) * 100 );

     IYC_teacher_attendance_rete = Math.round( IYC_teacher_attendance_rete * 100 ) / 100;


     document.getElementById(4009).innerHTML =  'IYC Teacher=';

     document.getElementById(5009).innerHTML =  IYC_teacher_attendance_rete + '%';    



} // End of function Roll_Call_IYC_teacher_Attendance()


async function Roll_Call_IYC_teacher_Attendance_V2() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------


   var IYC_teacher_attendance_no = 0;



     for (var i = 0; i < IYC_teacher.length ; i++) {

        var CNo_tmp = IYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_teacher_attendance_no = IYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_teacher.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     var IYC_teacher_attendance_rete = ( (IYC_teacher_attendance_no / IYC_teacher.length) * 100 );

     IYC_teacher_attendance_rete = Math.round( IYC_teacher_attendance_rete * 100 ) / 100;

     IYC_teacher_attendance_rete_V2 = IYC_teacher_attendance_rete;


     //document.getElementById(4009).innerHTML =  'IYC Teacher=';

     //document.getElementById(5009).innerHTML =  IYC_teacher_attendance_rete + '%';    



} // End of function Roll_Call_IYC_teacher_Attendance_V2()



async function Roll_Call_SYC_teacher_Attendance() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var SYC_teacher_attendance_no = 0;



     for (var i = 0; i < SYC_teacher.length ; i++) {

        var CNo_tmp = SYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_teacher_attendance_no = SYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_teacher.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     var SYC_teacher_attendance_rete = ( (SYC_teacher_attendance_no / SYC_teacher.length) * 100 );

     SYC_teacher_attendance_rete = Math.round( SYC_teacher_attendance_rete * 100 ) / 100;


     document.getElementById(4011).innerHTML =  'SYC Teacher=';

     document.getElementById(5011).innerHTML =  SYC_teacher_attendance_rete + '%';    



} // End of function Roll_Call_SYC_teacher_Attendance()


async function Roll_Call_SYC_teacher_Attendance_V2() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------


   var SYC_teacher_attendance_no = 0;



     for (var i = 0; i < SYC_teacher.length ; i++) {

        var CNo_tmp = SYC_teacher[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);

           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_teacher_attendance_no = SYC_teacher_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_teacher.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     var SYC_teacher_attendance_rete = ( (SYC_teacher_attendance_no / SYC_teacher.length) * 100 );

     SYC_teacher_attendance_rete = Math.round( SYC_teacher_attendance_rete * 100 ) / 100;

     SYC_teacher_attendance_rete_V2 = SYC_teacher_attendance_rete;


     //document.getElementById(4011).innerHTML =  'SYC Teacher=';

     //document.getElementById(5011).innerHTML =  SYC_teacher_attendance_rete + '%';    



} // End of function Roll_Call_SYC_teacher_Attendance_V2()



async function Roll_Call_Kindy_student_Attendance_OLD() { // for test, 
                                                          // only for Kindy student = 1, CNo = 253


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var kindy_teacher_attendance_no = 0;

   var kindy_student_attendance_no = 0;


   // 253, M, B


   //var Result_Kindy_Student = await Check_Attendance(253,'M','B');

   var Result_Kindy_Student = await Check_Attendance5(253,'M','B');

   if (Result_Kindy_Student == 'y') {

      //kindy_student_attendance_no = kindy_student_attendance_no + 1;

      var kindy_student_attendance_rete = 100;

   }
   else {

      var kindy_student_attendance_rete = 0;

   }


     //var kindy_student_attendance_rete = ( (kindy_student_attendance_no / kindy_student.length) * 100 );


     document.getElementById(4002).innerHTML =  'Kindy Student=';

     document.getElementById(5002).innerHTML =  kindy_student_attendance_rete + '%';    



} // End of function Roll_Call_Kindy_student_Attendance_OLD()


async function Roll_Call_Kindy_student_Attendance() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var kindy_student_attendance_no = 0;


     for (var i = 0; i < kindy_student.length ; i++) {

        var CNo_tmp = kindy_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              kindy_student_attendance_no = kindy_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_student.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     //var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     //kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;


     var kindy_student_attendance_rete = ( (kindy_student_attendance_no / kindy_student.length) * 100 );

     kindy_student_attendance_rete = Math.round( kindy_student_attendance_rete * 100 ) / 100;


     document.getElementById(4002).innerHTML =  'kindy Student=';

     document.getElementById(5002).innerHTML =  kindy_student_attendance_rete + '%';    



} // End of function Roll_Call_Kindy_student_Attendance()


async function Roll_Call_Kindy_student_Attendance_V2_OLD() { // for test, only for Kindy student = 1, CNo = 253


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------


   var kindy_teacher_attendance_no = 0;

   var kindy_student_attendance_no = 0;


   // 253, M, B


   //var Result_Kindy_Student = await Check_Attendance(253,'M','B');

   var Result_Kindy_Student = await Check_Attendance5(253,'M','B');

   if (Result_Kindy_Student == 'y') {

      //kindy_student_attendance_no = kindy_student_attendance_no + 1;

      var kindy_student_attendance_rete = 100;

   }
   else {

      var kindy_student_attendance_rete = 0;

   }


   kindy_student_attendance_rete_V2 = kindy_student_attendance_rete;


     //document.getElementById(4002).innerHTML =  'Kindy Student=';

     //document.getElementById(5002).innerHTML =  kindy_student_attendance_rete + '%';    



} // End of function Roll_Call_Kindy_student_Attendance_V2_OLD()


async function Roll_Call_Kindy_student_Attendance_V2() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------


   var kindy_student_attendance_no = 0;


     for (var i = 0; i < kindy_student.length ; i++) {

        var CNo_tmp = kindy_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              kindy_student_attendance_no = kindy_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_student.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     //var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     //kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;


     var kindy_student_attendance_rete = ( (kindy_student_attendance_no / kindy_student.length) * 100 );

     kindy_student_attendance_rete = Math.round( kindy_student_attendance_rete * 100 ) / 100;

     kindy_student_attendance_rete_V2 = kindy_student_attendance_rete;


     //document.getElementById(4004).innerHTML =  'LPC Student=';

     //document.getElementById(5004).innerHTML =  LPC_student_attendance_rete + '%';    



} // End of function Roll_Call_Kindy_student_Attendance_V2()





async function Roll_Call_LPC_student_Attendance() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var LPC_student_attendance_no = 0;


     for (var i = 0; i < LPC_student.length ; i++) {

        var CNo_tmp = LPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_student_attendance_no = LPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_student.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     //var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     //kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;


     var LPC_student_attendance_rete = ( (LPC_student_attendance_no / LPC_student.length) * 100 );

     LPC_student_attendance_rete = Math.round( LPC_student_attendance_rete * 100 ) / 100;


     document.getElementById(4004).innerHTML =  'LPC Student=';

     document.getElementById(5004).innerHTML =  LPC_student_attendance_rete + '%';    



} // End of function Roll_Call_LPC_student_Attendance()



async function Roll_Call_LPC_student_Attendance_V2() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------


   var LPC_student_attendance_no = 0;


     for (var i = 0; i < LPC_student.length ; i++) {

        var CNo_tmp = LPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              LPC_student_attendance_no = LPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < LPC_student.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     //var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     //kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;


     var LPC_student_attendance_rete = ( (LPC_student_attendance_no / LPC_student.length) * 100 );

     LPC_student_attendance_rete = Math.round( LPC_student_attendance_rete * 100 ) / 100;

     LPC_student_attendance_rete_V2 = LPC_student_attendance_rete;


     //document.getElementById(4004).innerHTML =  'LPC Student=';

     //document.getElementById(5004).innerHTML =  LPC_student_attendance_rete + '%';    



} // End of function Roll_Call_LPC_student_Attendance_V2()




async function Roll_Call_UPC_student_Attendance() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var UPC_student_attendance_no = 0;


     for (var i = 0; i < UPC_student.length ; i++) {

        var CNo_tmp = UPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_student_attendance_no = UPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_student.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     //var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     //kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;


     var UPC_student_attendance_rete = ( (UPC_student_attendance_no / UPC_student.length) * 100 );

     UPC_student_attendance_rete = Math.round( UPC_student_attendance_rete * 100 ) / 100;


     document.getElementById(4006).innerHTML =  'UPC Student=';

     document.getElementById(5006).innerHTML =  UPC_student_attendance_rete + '%';    



} // End of function Roll_Call_UPC_student_Attendance()



async function Roll_Call_UPC_student_Attendance_V2() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------


   var UPC_student_attendance_no = 0;


     for (var i = 0; i < UPC_student.length ; i++) {

        var CNo_tmp = UPC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              UPC_student_attendance_no = UPC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < UPC_student.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     //var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     //kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;


     var UPC_student_attendance_rete = ( (UPC_student_attendance_no / UPC_student.length) * 100 );

     UPC_student_attendance_rete = Math.round( UPC_student_attendance_rete * 100 ) / 100;

     UPC_student_attendance_rete_V2 = UPC_student_attendance_rete;


     //document.getElementById(4006).innerHTML =  'UPC Student=';

     //document.getElementById(5006).innerHTML =  UPC_student_attendance_rete + '%';    



} // End of function Roll_Call_UPC_student_Attendance_V2()



async function Roll_Call_JYC_student_Attendance() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var JYC_student_attendance_no = 0;


     for (var i = 0; i < JYC_student.length ; i++) {

        var CNo_tmp = JYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_student_attendance_no = JYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_student.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     //var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     //kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;


     var JYC_student_attendance_rete = ( (JYC_student_attendance_no / JYC_student.length) * 100 );

     JYC_student_attendance_rete = Math.round( JYC_student_attendance_rete * 100 ) / 100;


     document.getElementById(4008).innerHTML =  'JYC Student=';

     document.getElementById(5008).innerHTML =  JYC_student_attendance_rete + '%';    



} // End of function Roll_Call_JYC_student_Attendance()


async function Roll_Call_JYC_student_Attendance_V2() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------


   var JYC_student_attendance_no = 0;


     for (var i = 0; i < JYC_student.length ; i++) {

        var CNo_tmp = JYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              JYC_student_attendance_no = JYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < JYC_student.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     //var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     //kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;


     var JYC_student_attendance_rete = ( (JYC_student_attendance_no / JYC_student.length) * 100 );

     JYC_student_attendance_rete = Math.round( JYC_student_attendance_rete * 100 ) / 100;

     JYC_student_attendance_rete_V2 = JYC_student_attendance_rete;


     //document.getElementById(4008).innerHTML =  'JYC Student=';

     //document.getElementById(5008).innerHTML =  JYC_student_attendance_rete + '%';    



} // End of function Roll_Call_JYC_student_Attendance_V2()



async function Roll_Call_IYC_student_Attendance() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var IYC_student_attendance_no = 0;


     for (var i = 0; i < IYC_student.length ; i++) {

        var CNo_tmp = IYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_student_attendance_no = IYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_student.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     //var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     //kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;


     var IYC_student_attendance_rete = ( (IYC_student_attendance_no / IYC_student.length) * 100 );

     IYC_student_attendance_rete = Math.round( IYC_student_attendance_rete * 100 ) / 100;


     document.getElementById(4010).innerHTML =  'IYC Student=';

     document.getElementById(5010).innerHTML =  IYC_student_attendance_rete + '%';    



} // End of function Roll_Call_IYC_student_Attendance()


async function Roll_Call_IYC_student_Attendance_V2() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------


   var IYC_student_attendance_no = 0;


     for (var i = 0; i < IYC_student.length ; i++) {

        var CNo_tmp = IYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              IYC_student_attendance_no = IYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < IYC_student.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     //var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     //kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;


     var IYC_student_attendance_rete = ( (IYC_student_attendance_no / IYC_student.length) * 100 );

     IYC_student_attendance_rete = Math.round( IYC_student_attendance_rete * 100 ) / 100;

     IYC_student_attendance_rete_V2 = IYC_student_attendance_rete;


     //document.getElementById(4010).innerHTML =  'IYC Student=';

     //document.getElementById(5010).innerHTML =  IYC_student_attendance_rete + '%';    



} // End of function Roll_Call_IYC_student_Attendance_V2()



async function Roll_Call_SYC_student_Attendance() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var SYC_student_attendance_no = 0;


     for (var i = 0; i < SYC_student.length ; i++) {

        var CNo_tmp = SYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_student_attendance_no = SYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_student.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     //var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     //kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;


     var SYC_student_attendance_rete = ( (SYC_student_attendance_no / SYC_student.length) * 100 );

     SYC_student_attendance_rete = Math.round( SYC_student_attendance_rete * 100 ) / 100;


     document.getElementById(4012).innerHTML =  'SYC Student=';

     document.getElementById(5012).innerHTML =  SYC_student_attendance_rete + '%';    



} // End of function Roll_Call_SYC_student_Attendance()


async function Roll_Call_SYC_student_Attendance_V2() { // for test


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------


   var SYC_student_attendance_no = 0;


     for (var i = 0; i < SYC_student.length ; i++) {

        var CNo_tmp = SYC_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              SYC_student_attendance_no = SYC_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < SYC_student.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     //var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     //kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;


     var SYC_student_attendance_rete = ( (SYC_student_attendance_no / SYC_student.length) * 100 );

     SYC_student_attendance_rete = Math.round( SYC_student_attendance_rete * 100 ) / 100;

     SYC_student_attendance_rete_V2 = SYC_student_attendance_rete;


     //document.getElementById(4012).innerHTML =  'SYC Student=';

     //document.getElementById(5012).innerHTML =  SYC_student_attendance_rete + '%';    



} // End of function Roll_Call_SYC_student_Attendance_V2()



async function Roll_Call_Kindy_student_Attendance_old() { // for test, ** template for student more than one **


   Read_for_Roll_Call = 'N';  


   // -----------------------------------------------------------------------------

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName

   var kindy_teacher_attendance_no = 0;

   var kindy_student_attendance_no = 0;



     for (var i = 0; i < kindy_student.length ; i++) {

        var CNo_tmp = kindy_student[i]; // new Array(93,102,95)

        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();


        if (Verse_3.length) {  // Fill data


           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  


           //var Result = await Check_Attendance(arg1,arg2,arg3);

           var Result = await Check_Attendance5(arg1,arg2,arg3);


           if (Result == 'y') {

              //document.getElementById(Rvers).style.color = "blue";

              kindy_student_attendance_no = kindy_student_attendance_no + 1;

           }

        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_student.length ; i++)



     // 小數點兩位
     // Math.round(x * 100) / 100


     //var kindy_teacher_attendance_rete = ( (kindy_teacher_attendance_no / kindy_teacher.length) * 100 );

     //kindy_teacher_attendance_rete = Math.round( kindy_teacher_attendance_rete * 100 ) / 100;


     var kindy_student_attendance_rete = ( (kindy_student_attendance_no / kindy_student.length) * 100 );

     kindy_student_attendance_rete = Math.round( kindy_student_attendance_rete * 100 ) / 100;


     document.getElementById(4002).innerHTML =  'Kindy Student=';

     document.getElementById(5002).innerHTML =  kindy_student_attendance_rete + '%';    



} // End of function Roll_Call_Kindy_student_Attendance_old()


function Open_RE_Attendance_Area() {

   document.getElementById("tool_area_18").style.display='block';

   document.getElementById("tool_area_19").style.display='block';

   document.getElementById("tool_area_20").style.display='none'; 

} // End of function Open_RE_Attendance_Area()

function Open_RE_Attendance_Area_V3() {

   document.getElementById("tool_area_20").style.display='block';

   document.getElementById("tool_area_18").style.display='none'; 

   document.getElementById("tool_area_19").style.display='none'; 

} // End of function Open_RE_Attendance_Area_V3()


function Close_RE_Attendance_Area() {

   document.getElementById("tool_area_18").style.display='none'; 

   document.getElementById("tool_area_19").style.display='none'; 

} // End of function Close_RE_Attendance_Area()

function Close_RE_Attendance_Area_V3() {

   document.getElementById("tool_area_20").style.display='none'; 

} // End of function Close_RE_Attendance_Area_V3()