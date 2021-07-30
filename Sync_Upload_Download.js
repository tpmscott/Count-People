
async function Query_Sever_Congregation4_V2_Version() {  // Query Server Congregation4_V2_Version
                                                         // it great than Device Congregation4_V2_Version
                                                         // then Download it


      var send_mesg_tmp = 'Query_Sever_V2Congregation4_Ver';   


      iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
      return false;


} // End of function Query_Sever_Congregation4_V2_Version()


var Downloaded_V2Congregation4_Ver = '0';


function ML_Date_V5() {  // 202107042017

   var d = new Date();
   var Y = d.getFullYear();
   var M = d.getMonth() + 1;
   var D = d.getDate();
   var h = d.getHours();  // 0-23
   var m = d.getMinutes(); // 0-59
   var s = d.getSeconds(); // 0-59

   if(s=='0') s = '00';
   if(s=='1') s = '01';
   if(s=='2') s = '02';
   if(s=='3') s = '03';
   if(s=='4') s = '04';
   if(s=='5') s = '05';
   if(s=='6') s = '06';
   if(s=='7') s = '07';
   if(s=='8') s = '08';
   if(s=='9') s = '09';

   if(m=='0') m = '00';
   if(m=='1') m = '01';
   if(m=='2') m = '02';
   if(m=='3') m = '03';
   if(m=='4') m = '04';
   if(m=='5') m = '05';
   if(m=='6') m = '06';
   if(m=='7') m = '07';
   if(m=='8') m = '08';
   if(m=='9') m = '09';

   if(h=='0') h = '00';
   if(h=='1') h = '01';
   if(h=='2') h = '02';
   if(h=='3') h = '03';
   if(h=='4') h = '04';
   if(h=='5') h = '05';
   if(h=='6') h = '06';
   if(h=='7') h = '07';
   if(h=='8') h = '08';
   if(h=='9') h = '09';

   //if(M_Str=='0') M_Str = '00';
   if(M=='1') M = '01';
   if(M=='2') M = '02';
   if(M=='3') M = '03';
   if(M=='4') M = '04';
   if(M=='5') M = '05';
   if(M=='6') M = '06';
   if(M=='7') M = '07';
   if(M=='8') M = '08';
   if(M=='9') M = '09';


   //var D_Str = D.toString();

   //if(M_Str=='0') M_Str = '00';
   if(D=='1') D = '01';
   if(D=='2') D = '02';
   if(D=='3') D = '03';
   if(D=='4') D = '04';
   if(D=='5') D = '05';
   if(D=='6') D = '06';
   if(D=='7') D = '07';
   if(D=='8') D = '08';
   if(D=='9') D = '09';


   var Date_Str = Y.toString() + M.toString() + D.toString() + h.toString() + m.toString() + s.toString() ;

   return Date_Str; // 202107042017

}  // End of function ML_Date_V5()


async function Imp_to_Congregation4_V2() {  // for Download from Table Congregation4_V2_Upload
                                            //  and then imp to Congregation4

   //var Imp_Word = Download_n_Imp_Service_Records_Del_Add_Str;

   var Imp_Word = Download_n_Imp_Congregation4_V2_Upload_Add_Update_Str;



   if(Imp_Word!='' && Imp_Word.length>5 && Imp_Word.substr(0, 5)=='C4^_^') { // For Congregation4 import
                                                                             // Do pre-check

      //Split String "str" into Array "res"
      //var str = "i!^_^,2,18,18,2,20200302,65,4,9,20200304";  // <-- test Data
      //var str = "i!^_^,3,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304";  // <-- test Data
      //var str = "i!^_^,4,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304,65,4,10,20200305";  // <-- test Data
      //var res = str.split(",");

      var Imp_Word_Real_Str = Imp_Word.substr(6, Imp_Word.length);

      var Imp_Tmp = Imp_Word_Real_Str.split(",");  // Imp_Tmp is an Array 

      var imp_records_no = Imp_Tmp[0];

      //var imp_successed_no = 0;

      var update_no = 0;

      var add_no = 0;

      for (i = 0; i < imp_records_no; i++) {

        var CNo = Number(Imp_Tmp[11*i+1]);
        var F_Name = Imp_Tmp[11*i+2];
        var L_Name = Imp_Tmp[11*i+3];
        var Member = Imp_Tmp[11*i+4];
        var Gender = Imp_Tmp[11*i+5];

        var H_No = Imp_Tmp[11*i+6];      

        var C_F_Name = Imp_Tmp[11*i+7];
        var C_L_Name = Imp_Tmp[11*i+8];
        var F_Order = Imp_Tmp[11*i+9];

        //var Tel = Imp_Tmp[11*i+10];  // 'no value' means ''

        if (Imp_Tmp[11*i+10] == 'no value') 
           var Tel = '';
        else
           var Tel = Imp_Tmp[11*i+10];

        //var Mob = Imp_Tmp[11*i+11];  // 'no value' means ''

        if (Imp_Tmp[11*i+11] == 'no value') 
           var Mob = '';
        else
           var Mob = Imp_Tmp[11*i+11];


        let Verse = await dbT2.Congregation4.get(CNo);  // Check if data exist already

        if (Verse) { // data exist already, so update

           //dbT2.Congregation4.update(CNo, { F_Name: F_Name_tmp, L_Name: L_Name_tmp, Member: Member_tmp, Gender: Gender_tmp, H_No: H_No_tmp, C_F_Name: C_F_Name_tmp, C_L_Name: C_L_Name_tmp, F_Order: F_Order_tmp, Tel: Tel_tmp, Mob: Mob_tmp });

           dbT2.Congregation4.update(CNo, { F_Name: F_Name, L_Name: L_Name, Member: Member, Gender: Gender, H_No: H_No, C_F_Name: C_F_Name, C_L_Name: C_L_Name, F_Order: F_Order, Tel: Tel, Mob: Mob });

           update_no = update_no + 1;

        }
        else {  // add 

           try {

             dbT2.Congregation4.add({CNo, F_Name, L_Name, Member, Gender, H_No, C_F_Name, C_L_Name, F_Order, Tel, Mob });

             add_no = add_no + 1;

             //imp_successed_no = imp_successed_no + 1;

           } catch(err) {

             if (err.name == 'ConstraintError') {
               alert("Such book exists already");
                //document.getElementById("Mesg2").value = F_Name + ' ' + L_Name + ' exists already.';
                //document.getElementById("Mesg2").readOnly = true;
             } else {
               throw err;
             }
           }

        }  // End of if (Verse)


      }  // End of for (i = 0; i < imp_records_no; i++)


      //var imp_mesg = 'Congregation4 ' + imp_successed_no + ' imported';

      var imp_mesg = 'Congregation4 ' + update_no + ' updated, ' + add_no + ' added.';

      //document.getElementById("Mesg4").value = imp_mesg;

      //myExp_Db_Display.innerHTML = imp_mesg;

      //alert(imp_mesg);


   }  // End of if(Imp_Word!=''...// For Congregation4 import



}  // End of function Imp_to_Congregation4_V2()



async function Download_Congregation4_V2() {

      //var service_name_tmp = document.getElementById("service_name_2").value; // 20210531E


      var send_mesg_tmp = 'Download_V2Congregation4';   


      //var send_mesg_tmp = 'Download_V2Congregation4' + service_name_tmp;   

      //var send_mesg_tmp = 'Download_Service_Record_20210424A' ;   // for test


      //var send_mesg_tmp = 'Upload_Service_Record_20210602E!sr^_^|1|202106024|20210602E|02/06/2021 Wednesday Evening|7.22|8.30|U2FsdGVkX19sbqsDcJAoaoyjloaumd4Hn8uT6fdnWcA=|Hymnal and prayer service |185, 441|Carnegie Shi |Ted Tu |Sis Grace Lee |U2FsdGVkX1/82L/GhGPBNe/PP83Q+dmCpr63MlWKxEH+h6AfGagzgEW+im4gU0CN|0|0|0|0';



      iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
      return false;

}; // End of function Download_Service_Record()



async function Upload_Congregation4_V2() { // do not upload Tel & Mob

  //displayIframe();

  //let Verse = await dbT2.books.orderBy('date').reverse().limit(10).toArray(); // for test
  //let Verse_Count = 10;  // for test

  let Verse = await dbT2.Congregation4.toArray();

  var Verse_Count = Verse.length;

  if (Verse) {

     //var text = 'C4^_^,' + Verse_Count.toString() + ',';
     var text = 'C4^_^,' + Verse_Count.toString();

     for (i = 0; i < Verse.length; i++) {

        let CNo = Verse[i].CNo;
        let F_Name = Verse[i].F_Name;
        let L_Name = Verse[i].L_Name;
        let Member = Verse[i].Member;
        let Gender = Verse[i].Gender;

        let H_No = Verse[i].H_No;      // Format : HouseholderNo_BirthOrder Ex: 1_1, 1_2

        let C_F_Name = Verse[i].C_F_Name; // 姓
        let C_L_Name = Verse[i].C_L_Name; // 名字
        let F_Order = Verse[i].F_Order; // 1 for Householder

        //let Tel = Verse[i].Tel;  // 

        //if (!Verse[i].Tel || Verse[i].Tel==' ') 
           var Tel = 'no value';
        //else
        //   var Tel = Verse[i].Tel;

        //let Mob = Verse[i].Mob;

        //if (!Verse[i].Mob || Verse[i].Mob==' ') 
           var Mob = 'no value';
        //else
        //   var Mob = Verse[i].Mob;


        text += ',' + CNo + ',' + F_Name + ',' + L_Name + ',' + Member + ',' + Gender + ',' + H_No + ',' + C_F_Name + ',' + C_L_Name + ',' + F_Order + ',' + Tel + ',' + Mob;

     } // End of for (i = 0; i < Verse.length; i++)

     var mesg1 = 'Congregation4 ' + Verse_Count + ' uploaded';

     //Exp_to_books_Test2Db.value = mesg1;

     //myExp_Db_Display.innerHTML = text;
     //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
     //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

     //document.getElementById("Imp_to_Congregation4").value = text;

     //document.getElementById("Mesg4").value = mesg1;

     //copyFunction5(mesg1);

     //myExp_Db_Display.innerHTML = "";


     alert(mesg1);


     // --- Start Upload

        var Upload_Ver = ML_Date_V5();  // 202107042017   

        var Upload_Meag = Upload_Ver + '!' + text;  // use ! as seperater


        var send_mesg_tmp = 'Upload_V2Congregation4_' + Upload_Meag;

        iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
        return false;


  } 
  else {

     alert('No Data Uploaded');

  } // End of if (Verse)


} // End of function Upload_Congregation4_V2()


// Above add after 20210703----------------------------------


function Init_Server_IP_n_Device_Name(){

   // Start Reading from Local Storage

   if(localStorage.Server_IP) {
      //localStorage.Server_IP = Number(localStorage.Bro_M);
   }else {
      localStorage.Server_IP = '192.168.1.18:8080';
   }   

   document.getElementById("Server_IP").value = localStorage.Server_IP;


   if(localStorage.Device_Name) {
      //localStorage.Device_Name = Number(localStorage.Bro_M);
   }else {
      localStorage.Device_Name = 'Scott_NB2';
   }   

   if(localStorage.Device_Congregation4_Version) {                 // Add on 20210706
      //localStorage.Device_Name = Number(localStorage.Bro_M);
   }else {
      localStorage.Device_Congregation4_Version = '0';
   }   

   document.getElementById("device_name_7").value = localStorage.Device_Name;

   document.getElementById("device_name_6").value = localStorage.Device_Name;
 

} // End of function Init_Server_IP_n_Device_Name()


function Set_Device_Name() {

   // Start Writing to Local Storage

   localStorage.Device_Name = document.getElementById("device_name_7").value;

   document.getElementById("device_name_6").value = localStorage.Device_Name;

} // End of function Set_Device_Name()


function Set_Server_IP() {

   // Start Writing to Local Storage

   localStorage.Server_IP = document.getElementById("Server_IP").value;

} // End of function Set_Server_IP()




function checkConnectionExist() {  // Not work, Not in use

   var xhr = new XMLHttpRequest();
   var method = 'head';
   var url = 'https://tw.yahoo.com/';
   xhr.open(method,url,true);
   xhr.send(null);

   xhr.onreadystatechange = function() {

     if (xhr.readyState === 4) {

        //console.log(xhr.getAllResponseHeaders());

        alert(xhr.getAllResponseHeaders());

     }
   }

}


function doesConnectionExist() {   // show statue with alert

	var xhr = new XMLHttpRequest();

	var file = "http://" + localStorage.Server_IP + "/back5.jpg";  //  work

	//var file = "http://192.168.1.18:8080/back5.jpg";  //  work
	//var file = "https://i.imgur.com/7ofBNix.png";     // work
	var randomNum = Math.round(Math.random() * 10000);
	
	//xhr.open("HEAD", file , true);
	xhr.open("HEAD", file + "?rand=" + randomNum, true);
	xhr.send();
		
	xhr.addEventListener("readystatechange", processRequest, false);
	
	function processRequest(e) {

	   if (xhr.readyState == 4) {

	      if (xhr.status >= 200 && xhr.status < 304) {

	         alert("Connection exists! You can sync Attendance with others.");

	      } else {
		 alert("Connection doesn't exist! You can't sync Attendance with others. Check Network and Server status!");
	      }
	   }
	}
}  // End of function doesConnectionExist()


var Connection_Status = '0'; // 1 means Connection exists, 0 means Connection doesn't exist

function doesConnectionExist_2() {   // return statue with alert

	var xhr2 = new XMLHttpRequest();

	var file = "http://" + localStorage.Server_IP + "/back5.jpg";  //  work

	//var file = "http://192.168.1.18:8080/back5.jpg";  //  work
	//var file = "https://i.imgur.com/7ofBNix.png";     // work
	var randomNum = Math.round(Math.random() * 10000);
	
	//xhr.open("HEAD", file , true);
	xhr2.open("HEAD", file + "?rand=" + randomNum, true);
	xhr2.send();
		
	xhr2.addEventListener("readystatechange", processRequest, false);
	
	function processRequest(e) {

	   if (xhr2.readyState == 4) {

	      if (xhr2.status >= 200 && xhr2.status < 304) {

	         //alert("Connection exists! You can sync Attendance with others.");
                 //Connection_Status = '1'; // Connection exists

                 Open_Sync_Function_Area_2();

	      } else {

		 alert("Connection doesn't exist! You can't sync Attendance with others. Check Network and Server status!");
                 //Connection_Status = '0'; // Connection doesn't exist

	      }
	   }
	}
}   // End of function doesConnectionExist_2()


function doesConnectionExist_3() {   // return statue with alert  // for Download Attendance-Sync-All-V2*

	var xhr3 = new XMLHttpRequest();

	var file = "http://" + localStorage.Server_IP + "/back5.jpg";  //  work

	//var file = "http://192.168.1.18:8080/back5.jpg";  //  work
	//var file = "https://i.imgur.com/7ofBNix.png";     // work
	var randomNum = Math.round(Math.random() * 10000);
	
	//xhr.open("HEAD", file , true);
	xhr3.open("HEAD", file + "?rand=" + randomNum, true);
	xhr3.send();
		
	xhr3.addEventListener("readystatechange", processRequest, false);
	
	function processRequest(e) {

	   if (xhr3.readyState == 4) {

	      if (xhr3.status >= 200 && xhr3.status < 304) {

	         //alert("Connection exists! You can sync Attendance with others.");
                 //Connection_Status = '1'; // Connection exists

                 //Open_Sync_Function_Area_2();

                 Download_Attendance_V2();

	      } else {

		 alert("Connection doesn't exist! You can't sync Attendance with others. Check Network and Server status!");
                 //Connection_Status = '0'; // Connection doesn't exist

	      }
	   }
	}
}   // End of function doesConnectionExist_3()


function doesConnectionExist_4() {   // if ConnectionExist then Show "Sync Attendance" button

	var xhr4 = new XMLHttpRequest();

	var file = "http://" + localStorage.Server_IP + "/back5.jpg";  //  work

	//var file = "http://192.168.1.18:8080/back5.jpg";  //  work
	//var file = "https://i.imgur.com/7ofBNix.png";     // work
	var randomNum = Math.round(Math.random() * 10000);
	
	//xhr.open("HEAD", file , true);
	xhr4.open("HEAD", file + "?rand=" + randomNum, true);
	xhr4.send();
		
	xhr4.addEventListener("readystatechange", processRequest, false);
	
	function processRequest(e) {

	   if (xhr4.readyState == 4) {

	      if (xhr4.status >= 200 && xhr4.status < 304) {

	         //alert("Connection exists! You can sync Attendance with others.");
                 //Connection_Status = '1'; // Connection exists

                 //Open_Sync_Function_Area_2();

                 Show_Sync_Attendance();

                 setTimeout(() => { Query_Sever_Congregation4_V2_Version(); }, 500); // 2000,1000,500 works

                 //setTimeout(() => { console.log("World!"); }, 2000);

                 //Query_Sever_Congregation4_V2_Version();  // for test

	      } else {

		 //alert("Connection doesn't exist! You can't sync Attendance with others. Check Network and Server status!");
                 //Connection_Status = '0'; // Connection doesn't exist

	      }
	   }
	}
}   // End of function doesConnectionExist_4()




function displayIframe() {

   var server_ip = document.getElementById("Server_IP").value;

   //document.getElementById("iframeDisplay").innerHTML = "<iframe src=\"../HtmlPage1.html\" height=\"200\" width=\"300\" ></iframe>";


   document.getElementById("iframeDisplay").innerHTML = '"<iframe src=\"http://' + server_ip + '\" id=\"iframe\" style=\"display:block;height:100px;width:1000px\"></iframe>"';
 

   //document.getElementById("iframeDisplay").innerHTML = "<iframe src=\"http://192.168.1.18:8080\" id=\"iframe\" style=\"display:block;height:100px;width:1000px\"></iframe>";
                                                        
                                                       //<iframe src="http://192.168.1.18:8080" id="iframe" style="display:block;height:100px;width:1000px"></iframe>

   //Query_Sever_Congregation4_V2_Version();  // for test

}

//function displayIframe() {

//   //document.getElementById("iframeDisplay").innerHTML = "<iframe src=\"../HtmlPage1.html\" height=\"200\" width=\"300\" ></iframe>";

//   document.getElementById("iframeDisplay2").innerHTML = "<iframe src=\"http://192.168.1.18:8080\" id=\"iframe\" style=\"display:block;height:100px;width:1000px\"></iframe>";
                                                        
                                                       //<iframe src="http://192.168.1.18:8080" id="iframe" style="display:block;height:100px;width:1000px"></iframe>
//}


function Hide_Sync_Attendance_Button(){  // put in onload

   document.getElementById("Sync_Attendance_Button").style.display="none"; // "none" or "inline"

}


function Show_Sync_Attendance() {

   document.getElementById("Sync_Attendance_Button").style.display='inline';        

} // End of function Show_Sync_Attendance()



function Open_Sync_Function_Area() {

   document.getElementById("tool_area_38").style.display='block';        

} // End of function Open_Sync_Function_Area()

function Close_Sync_Function_Area() {

   document.getElementById("tool_area_38").style.display='none'; 

} // End of function Close_Sync_Function_Area()


function Open_Sync_Function_Area_2() {


      //displayIframe(); // for test

      document.getElementById("tool_area_39").style.display='block';  

      //setTimeout(Query_for_Attendance_from_other, 200);      

      Query_for_Attendance_from_other();



} // End of function Open_Sync_Function_Area_2()

function Close_Sync_Function_Area_2() {

   document.getElementById("tool_area_39").style.display='none'; 

} // End of function Close_Sync_Function_Area_2()


async function Query_for_Attendance_from_other() {

      
      var service_name_tmp = Display_ID_2; //  '20200920E'

      var send_mesg_tmp = 'Query_for_Attendance_' + service_name_tmp;   

      iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
      return false;   


} // End of function Query_for_Attendance_from_other()


async function Upload_Attendance() {  // for Sync to Church's iPad

  var Verse_Count = 0;

  var text = '';


  var startWith_date = Display_ID_2; // Exp_start_date , '20200920E'

  //var startWith_date = '20210530E'; // Exp_start_date , '20200920E'


  if(startWith_date!='') {   // exp attendance for App

     let Verse = await dbT2.Attendance.where('Record').startsWithIgnoreCase(startWith_date).toArray();

     Verse_Count = Verse.length;

     if (Verse) {

        //text += '%0D' + '%0D';   // carriage return	%0D

        text += 'AE^_^|' + Verse_Count.toString(); // Attendance , use '|' as seperator
                                                      // AE^_^ for Attendance exp and Email


        for (i = 0; i < Verse.length; i++) {

           //let CNo = Verse[i].CNo;

           let Record = Verse[i].Record;

           //text += ',' + Record;


           text += '|' + Record; // use '|' as seperator  

           //text += '%0D' + Record; // use '|' as seperator  // for test


        } // End of for (i = 0; i < Verse.length; i++)

        //var mesg1 = 'Attendance ' + Verse_Count + ' exported';

        //document.getElementById("Imp_to_Congregation4").value = text;

        //document.getElementById("Mesg4").value = mesg1;

        //document.getElementById("Send_Attendance_Message").innerHTML = mesg1;


     } // End of if (Verse)

  }
  else {

     //myExp_Db_Display.innerHTML = 'ML 0 exported';

     //document.getElementById("Mesg4").value = 'Attendance 0 exported';

     //document.getElementById("Send_Attendance2").innerHTML = "";

     //document.getElementById("Send email").innerHTML = 'Send email';

     //document.getElementById("Send_Attendance_Message").innerHTML = 'Attendance 0 exported';

  } // End of if(startWith_date!='')


  //var device_name_tmp = document.getElementById("device_name").value;   // Scott_iPad_Air3, Scott_NB

  var Name_tmp = document.getElementById("device_name_2").value;   // Scott_iPad_Air3, Scott_NB

  var Service_tmp = Display_ID_2;

  //var Service_tmp = '20210530E';

  var Upload_Meag = Name_tmp + '!' + Service_tmp + '!' + text;  // use ! as seperater


  var send_mesg_tmp = 'Upload_Attendance_' + Upload_Meag; 

  //send_mesg_tmp would be like:  Upload_Attendance_Scott_NB|20210503E|AE^_^|12|20210503E_M_B_275|20210503E_M_B_279|...

  iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
  return false;


  //var send_mesg_tmp = 'Insert_ROW_' + id_tmp + '_' + name_tmp; // Insert or Update

  //iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
  //return false;


}; // End of function Upload_Attendance()


async function Upload_Attendance_V2() {  // for Sync to Church's iPad --- Version 2
                                         // for can Download from multi device at same time 

  var Verse_Count = 0;

  var text = '';

  var Verse_Count_Str = '';


  var startWith_date = Display_ID_2; // Exp_start_date , '20200920E'

  //var startWith_date = '20210530E'; // Exp_start_date , '20200920E'


  if(startWith_date!='') {   // exp attendance for App

     let Verse = await dbT2.Attendance.where('Record').startsWithIgnoreCase(startWith_date).toArray();

     Verse_Count = Verse.length;

     if (Verse) {

        //text += '%0D' + '%0D';   // carriage return	%0D

        //text += 'AE^_^|' + Verse_Count.toString();    // Attendance , use '|' as seperator
        //                                              // AE^_^ for Attendance exp and Email



        Verse_Count_Str += Verse_Count.toString() ;    
                                                     


        for (i = 0; i < Verse.length; i++) {

           //let CNo = Verse[i].CNo;

           let Record = Verse[i].Record;

           //text += ',' + Record;


           //text += Record + '|'; // use '|' as seperator  

           if(i == 0) {

              text += Record; // use '|' as seperator , *** for frist one only

           }
           else {

              text += '|' + Record; // use '|' as seperator , *** for rest of them

           }


           //text += '%0D' + Record; // use '|' as seperator  // for test


        } // End of for (i = 0; i < Verse.length; i++)

        //var mesg1 = 'Attendance ' + Verse_Count + ' exported';

        //document.getElementById("Imp_to_Congregation4").value = text;

        //document.getElementById("Mesg4").value = mesg1;

        //document.getElementById("Send_Attendance_Message").innerHTML = mesg1;


        //var device_name_tmp = document.getElementById("device_name").value;   // Scott_iPad_Air3, Scott_NB

        var Name_tmp = document.getElementById("device_name_6").value;   // Scott_iPad_Air3, Scott_NB

        var Service_tmp = Display_ID_2;

        //var Service_tmp = '20210530E';

        var Upload_Meag = Name_tmp + '!' + Service_tmp + '!' + Verse_Count_Str + '!' + text;  // use ! as seperater


        var send_mesg_tmp = 'V2_Upload_Attendance_' + Upload_Meag; 


        //send_mesg_tmp would be like:  V2_Upload_Attendance_Scott_NB!20210503E!12!20210503E_M_B_275|20210503E_M_B_279|...

        //send_mesg_tmp would be like:  Upload_Attendance_Scott_NB|20210503E|AE^_^|12|20210503E_M_B_275|20210503E_M_B_279|...


        iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
        return false;


     } // End of if (Verse)
     else {

        alert('No Data');
   
     }

  }
  else {

     alert('No Data');

     //myExp_Db_Display.innerHTML = 'ML 0 exported';

     //document.getElementById("Mesg4").value = 'Attendance 0 exported';

     //document.getElementById("Send_Attendance2").innerHTML = "";

     //document.getElementById("Send email").innerHTML = 'Send email';

     //document.getElementById("Send_Attendance_Message").innerHTML = 'Attendance 0 exported';

  } // End of if(startWith_date!='')



}; // End of function Upload_Attendance_V2()



async function Upload_Attendance_2() {  // for History Records

  var Verse_Count = 0;

  var text = '';


  var startWith_date = Display_ID_2; // Exp_start_date , '20200920E'

  //var startWith_date = '20210530E'; // Exp_start_date , '20200920E'


  if(startWith_date!='') {   // exp attendance for App

     let Verse = await dbT2.Attendance.where('Record').startsWithIgnoreCase(startWith_date).toArray();

     Verse_Count = Verse.length;

     if (Verse) {

        //text += '%0D' + '%0D';   // carriage return	%0D

        text += 'AE^_^|' + Verse_Count.toString(); // Attendance , use '|' as seperator
                                                      // AE^_^ for Attendance exp and Email


        for (i = 0; i < Verse.length; i++) {

           //let CNo = Verse[i].CNo;

           let Record = Verse[i].Record;

           //text += ',' + Record;


           text += '|' + Record; // use '|' as seperator  

           //text += '%0D' + Record; // use '|' as seperator  // for test


        } // End of for (i = 0; i < Verse.length; i++)

        //var mesg1 = 'Attendance ' + Verse_Count + ' exported';

        //document.getElementById("Imp_to_Congregation4").value = text;

        //document.getElementById("Mesg4").value = mesg1;

        //document.getElementById("Send_Attendance_Message").innerHTML = mesg1;


        //var device_name_tmp = document.getElementById("device_name").value;   // Scott_iPad_Air3, Scott_NB

        //var Name_tmp = document.getElementById("device_name_2").value;   // Scott_iPad_Air3, Scott_NB

        var Service_tmp = Display_ID_2;

        //var Service_tmp = '20210530E';

        var Upload_Meag = Service_tmp + '!' + text;  // use ! as seperater

        //var Upload_Meag = Name_tmp + '!' + Service_tmp + '!' + text;  // use ! as seperater


        var send_mesg_tmp = 'Upload_His_Attendance_' + Upload_Meag;  // *** Upload Attendance to Table Attendance_Records

        //var send_mesg_tmp = 'Upload_Attendance_' + Upload_Meag;  

        //send_mesg_tmp would be like:  Upload_Attendance_2_NB|20210503E|AE^_^|12|20210503E_M_B_275|20210503E_M_B_279|...

        iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
        return false;


        //var send_mesg_tmp = 'Insert_ROW_' + id_tmp + '_' + name_tmp; // Insert or Update

        //iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
        //return false;


     } // End of if (Verse)

  }
  else {

     //myExp_Db_Display.innerHTML = 'ML 0 exported';

     //document.getElementById("Mesg4").value = 'Attendance 0 exported';

     //document.getElementById("Send_Attendance2").innerHTML = "";

     //document.getElementById("Send email").innerHTML = 'Send email';

     //document.getElementById("Send_Attendance_Message").innerHTML = 'Attendance 0 exported';

  } // End of if(startWith_date!='')


}; // End of function Upload_Attendance_2()



async function Upload_Attendance_4() {  // for History Records , write a record in email

  var Verse_Count = 0;

  var text = '';


  var startWith_date = Display_ID_2; // Exp_start_date , '20200920E'

  //var startWith_date = '20210530E'; // Exp_start_date , '20200920E'


  if(startWith_date!='') {   // exp attendance for App

     let Verse = await dbT2.Attendance.where('Record').startsWithIgnoreCase(startWith_date).toArray();

     Verse_Count = Verse.length;

     if (Verse) {

        //text += '%0D' + '%0D';   // carriage return	%0D

        text += 'AE^_^|' + Verse_Count.toString(); // Attendance , use '|' as seperator
                                                      // AE^_^ for Attendance exp and Email


        for (i = 0; i < Verse.length; i++) {

           //let CNo = Verse[i].CNo;

           let Record = Verse[i].Record;

           //text += ',' + Record;


           text += '|' + Record; // use '|' as seperator  

           //text += '%0D' + Record; // use '|' as seperator  // for test


        } // End of for (i = 0; i < Verse.length; i++)

        //var mesg1 = 'Attendance ' + Verse_Count + ' exported';

        //document.getElementById("Imp_to_Congregation4").value = text;

        //document.getElementById("Mesg4").value = mesg1;

        //document.getElementById("Send_Attendance_Message").innerHTML = mesg1;


        //var device_name_tmp = document.getElementById("device_name").value;   // Scott_iPad_Air3, Scott_NB

        //var Name_tmp = document.getElementById("device_name_2").value;   // Scott_iPad_Air3, Scott_NB

        var Service_tmp = Display_ID_2;

        //var Service_tmp = '20210530E';

        var Upload_Meag = Service_tmp + '!' + text;  // use ! as seperater

        //var Upload_Meag = Name_tmp + '!' + Service_tmp + '!' + text;  // use ! as seperater


        var send_mesg_tmp = 'wUpload_His_Attendance_' + Upload_Meag;  // *** Upload Attendance to Table Attendance_Records

        //var send_mesg_tmp = 'Upload_Attendance_' + Upload_Meag;  

        //send_mesg_tmp would be like:  Upload_Attendance_2_NB|20210503E|AE^_^|12|20210503E_M_B_275|20210503E_M_B_279|...

        iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
        return false;


        //var send_mesg_tmp = 'Insert_ROW_' + id_tmp + '_' + name_tmp; // Insert or Update

        //iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
        //return false;


     } // End of if (Verse)

  }
  else {

     //myExp_Db_Display.innerHTML = 'ML 0 exported';

     //document.getElementById("Mesg4").value = 'Attendance 0 exported';

     //document.getElementById("Send_Attendance2").innerHTML = "";

     //document.getElementById("Send email").innerHTML = 'Send email';

     //document.getElementById("Send_Attendance_Message").innerHTML = 'Attendance 0 exported';

  } // End of if(startWith_date!='')


}; // End of function Upload_Attendance_4()



async function Upload_Attendance_3() {  // for History Records, for multi ex: 202106

  var Verse_Count = 0;

  var text = '';


  //var DateStr2 = document.getElementById("service_name_4").value; // 202106

  var startWith_date = document.getElementById("service_name_5").value; // 202106

  //var startWith_date = Display_ID_2; // Exp_start_date , '20200920E'

  //var startWith_date = '20210530E'; // Exp_start_date , '20200920E'


  if(startWith_date!='') {   // exp attendance for App

     let Verse = await dbT2.Attendance.where('Record').startsWithIgnoreCase(startWith_date).toArray();

     Verse_Count = Verse.length;

     if (Verse) {

        //text += '%0D' + '%0D';   // carriage return	%0D

        text += 'AE^_^|' + Verse_Count.toString(); // Attendance , use '|' as seperator
                                                      // AE^_^ for Attendance exp and Email


        for (i = 0; i < Verse.length; i++) {

           //let CNo = Verse[i].CNo;

           let Record = Verse[i].Record;

           //text += ',' + Record;


           text += '|' + Record; // use '|' as seperator  

           //text += '%0D' + Record; // use '|' as seperator  // for test


        } // End of for (i = 0; i < Verse.length; i++)

        //var mesg1 = 'Attendance ' + Verse_Count + ' exported';

        //document.getElementById("Imp_to_Congregation4").value = text;

        //document.getElementById("Mesg4").value = mesg1;

        //document.getElementById("Send_Attendance_Message").innerHTML = mesg1;


     } // End of if (Verse)

  }
  else {

     //myExp_Db_Display.innerHTML = 'ML 0 exported';

     //document.getElementById("Mesg4").value = 'Attendance 0 exported';

     //document.getElementById("Send_Attendance2").innerHTML = "";

     //document.getElementById("Send email").innerHTML = 'Send email';

     //document.getElementById("Send_Attendance_Message").innerHTML = 'Attendance 0 exported';

  } // End of if(startWith_date!='')


  //var device_name_tmp = document.getElementById("device_name").value;   // Scott_iPad_Air3, Scott_NB

  //var Name_tmp = document.getElementById("device_name_2").value;   // Scott_iPad_Air3, Scott_NB

  var Service_tmp = startWith_date;

  //var Service_tmp = '20210530E';

  var Upload_Meag = Service_tmp + '!' + text;  // use ! as seperater

  //var Upload_Meag = Name_tmp + '!' + Service_tmp + '!' + text;  // use ! as seperater


  var send_mesg_tmp = 'Upload_His_Attendance_' + Upload_Meag;  // *** Upload Attendance to Table Attendance_Records

  //var send_mesg_tmp = 'Upload_Attendance_' + Upload_Meag;  

  //send_mesg_tmp would be like:  Upload_Attendance_2_NB|20210503E|AE^_^|12|20210503E_M_B_275|20210503E_M_B_279|...

  iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
  return false;


  //var send_mesg_tmp = 'Insert_ROW_' + id_tmp + '_' + name_tmp; // Insert or Update

  //iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
  //return false;


}; // End of function Upload_Attendance_3()




async function Download_Attendance() {

      var device_name_tmp = document.getElementById("device_name").value;   // Scott_iPad_Air3, Scott_NB
      var service_name_tmp = document.getElementById("service_name").value; // 20210531E

      //var send_mesg_tmp = 'Download_Attendance_Scott_iPad_Air3!20210531E';   // format would be like this

      var send_mesg_tmp = 'Download_Attendance_' + device_name_tmp + '!' + service_name_tmp;   


      iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
      return false;

}; // End of function Download_Attendance()



async function Download_Attendance_V2() {

      var device_name_tmp = localStorage.Device_Name;  // add on 2021.07.01

      var service_name_tmp = Display_ID_2; //  '20200920E'

      //var send_mesg_tmp = 'V2_Download_Attendance_' + service_name_tmp;   

      var send_mesg_tmp = 'V2_Download_Attendance_' + service_name_tmp + '!' + device_name_tmp;   // modify on 2021.07.01 

      iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
      return false;

}; // End of function Download_Attendance_V2()




async function Download_Attendance_2() {

      var service_name_tmp = document.getElementById("service_name_3").value; // 20210531E

      //var send_mesg_tmp = 'Download_Attendance_Scott_iPad_Air3!20210531E';   // format would be like this

      //var send_mesg_tmp = 'Download_Attendance_' + device_name_tmp + '!' + service_name_tmp;   

      // *** Download Attendance from Table Attendance_Records

      var send_mesg_tmp = 'Download_His_Attendance_' + service_name_tmp; 


      iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
      return false;

}; // End of function Download_Attendance_2()



async function Download_Service_Record() {

      var service_name_tmp = document.getElementById("service_name_2").value; // 20210531E


      var send_mesg_tmp = 'Download_Service_Record_' + service_name_tmp;   

      //var send_mesg_tmp = 'Download_Service_Record_20210424A' ;   // for test


      //var send_mesg_tmp = 'Upload_Service_Record_20210602E!sr^_^|1|202106024|20210602E|02/06/2021 Wednesday Evening|7.22|8.30|U2FsdGVkX19sbqsDcJAoaoyjloaumd4Hn8uT6fdnWcA=|Hymnal and prayer service |185, 441|Carnegie Shi |Ted Tu |Sis Grace Lee |U2FsdGVkX1/82L/GhGPBNe/PP83Q+dmCpr63MlWKxEH+h6AfGagzgEW+im4gU0CN|0|0|0|0';



      iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
      return false;

}; // End of function Download_Service_Record()




async function Upload_Service_Record() {

  var text = '';

  var DateStr2 = Display_ID_2; // Exp_start_date , '20200920E'

  if(DateStr2!='') {     // exp service record for App

     //let Verse = await dbT2.SermonNote.where('Name').startsWithIgnoreCase(startWith_date).toArray();

     let Verse = await dbT2.Service_Record.where('ID_2').equals(DateStr2).toArray();

     var Verse_Count = 0;

     Verse_Count = Verse.length;

     if (Verse) {

        //text += 'Note:' + Verse[0].Note + '|' + '%20' + '%0D';

        text += 'sr^_^|' + Verse_Count.toString();  // change seprator to "|" ,  for Service_Record

        for (i = 0; i < Verse.length; i++) {

           let id_1 = Verse[i].ID_1;
           let id_2 = Verse[i].ID_2; 

           let service_date = Verse[i].Service_Date;

           let service_start_time = Verse[i].Service_Start_Time; 
           let service_end_time = Verse[i].Service_End_Time; 
           let usher = Verse[i].Usher; 

           let topic = Verse[i].Topic;
           let hymn = Verse[i].Hymn; 

           let speaker = Verse[i].Speaker; 
           let interp = Verse[i].Interp; 
           let hymnal = Verse[i].Hymnal;

           let note = Verse[i].Note; 

           let bro_m_note = Verse[i].Bro_M_Note; 
           let sis_m_note = Verse[i].Sis_M_Note; 
           let bro_trs_note = Verse[i].Bro_TrS_Note;
           let sis_trs_note = Verse[i].Sis_TrS_Note;

           // Encrypt Content then Exp

           // Encode Content then Exp

           var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

           //var encryptedUsher = CryptoJS.AES.encrypt(usher, Key_input);

           //var encryptedTopic = CryptoJS.AES.encrypt(topic, Key_input);

           //var encryptedHymn = CryptoJS.AES.encrypt(hymn, Key_input);

           //var encryptedSpeaker = CryptoJS.AES.encrypt(speaker, Key_input);

           //var encryptedInterp = CryptoJS.AES.encrypt(interp, Key_input);

           //var encryptedHymnal = CryptoJS.AES.encrypt(hymnal, Key_input);

           //var encryptedNote = CryptoJS.AES.encrypt(note, Key_input);


           //var encodedNote = btoa(note);  // for test , 但 中文不行

           var encodedService_start_time = btoa(encodeURIComponent( escape( service_start_time )));  

           var encodedService_end_time = btoa(encodeURIComponent( escape( service_end_time )));  

           var encodedUsher = btoa(encodeURIComponent( escape( usher )));  

           var encodedTopic = btoa(encodeURIComponent( escape( topic )));  

           var encodedHymn = btoa(encodeURIComponent( escape( hymn )));  

           var encodedSpeaker = btoa(encodeURIComponent( escape( speaker )));  

           var encodedInterp = btoa(encodeURIComponent( escape( interp )));  

           var encodedHymnal = btoa(encodeURIComponent( escape( hymnal )));  

           var encodedNote = btoa(encodeURIComponent( escape( note )));    

           //window.btoa(encodeURIComponent( escape( str )))


           // Define the string
           // var decodedStringBtoA = 'Hello World!';

           // Encode the String
           // var encodedStringBtoA = btoa(decodedStringBtoA);           


           //text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + service_start_time + '|' + service_end_time + '|' + encryptedUsher + '|' + topic + '|' + hymn + '|' + speaker + '|' + interp + '|' + hymnal + '|' + encryptedNote + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"

           //text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + service_start_time + '|' + service_end_time + '|' + usher + '|' + topic + '|' + hymn + '|' + speaker + '|' + interp + '|' + hymnal + '|' + encryptedNote + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"

           //text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + service_start_time + '|' + service_end_time + '|' + usher + '|' + topic + '|' + hymn + '|' + speaker + '|' + interp + '|' + hymnal + '|' + encodedNote + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"



           text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + encodedService_start_time + '|' + encodedService_end_time + '|' + encodedUsher + '|' + encodedTopic + '|' + encodedHymn + '|' + encodedSpeaker + '|' + encodedInterp + '|' + encodedHymnal + '|' + encodedNote + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"



           //text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + service_start_time + '|' + service_end_time + '|' + usher + '|' + topic + '|' + hymn + '|' + speaker + '|' + interp + '|' + hymnal + '|' + note + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"



        } // End of for (i = 0; i < Verse.length; i++)


        //var device_name_tmp = document.getElementById("device_name").value;   // Scott_iPad_Air3, Scott_NB

        //var Name_tmp = document.getElementById("device_name_2").value;   // Scott_iPad_Air3, Scott_NB

        var Service_tmp = Display_ID_2;

        //var Service_tmp = '20210530E';

        var Upload_Meag = Service_tmp + '!' + text;  // use ! as seperater


        var send_mesg_tmp = 'Upload_Service_Record_' + Upload_Meag;

        //var send_mesg_tmp = 'Upload_Attendance_' + Upload_Meag; 

        //send_mesg_tmp would be like:  Upload_Attendance_Scott_NB|20210503E|AE^_^|12|20210503E_M_B_275|20210503E_M_B_279|...

        //var send_mesg_tmp = 'Upload_Service_Record_20210602E!sr^_^|1|202106024|20210602E|02/06/2021 Wednesday Evening|7.22|8.30|U2FsdGVkX19sbqsDcJAoaoyjloaumd4Hn8uT6fdnWcA=|Hymnal and prayer service |185, 441|Carnegie Shi |Ted Tu |Sis Grace Lee |U2FsdGVkX1/82L/GhGPBNe/PP83Q+dmCpr63MlWKxEH+h6AfGagzgEW+im4gU0CN|0|0|0|0';


        iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
        return false;

        

     } // End of if (Verse)

  } // End of if(DateStr2!='')




}; // End of function Upload_Service_Record()



async function Upload_Service_Record_2() {

  var text = '';

  //var DateStr2 = Display_ID_2; // Exp_start_date , '20200920E'

  var DateStr2 = document.getElementById("service_name_4").value; // 202106


  if(DateStr2!='') {     // exp service record for App

     //let Verse = await dbT2.SermonNote.where('Name').startsWithIgnoreCase(startWith_date).toArray();

     let Verse = await dbT2.Service_Record.where('ID_2').startsWithIgnoreCase(DateStr2).toArray();

     //let Verse = await dbT2.Service_Record.where('ID_2').equals(DateStr2).toArray();

     var Verse_Count = 0;

     Verse_Count = Verse.length;

     if (Verse) {

        //text += 'Note:' + Verse[0].Note + '|' + '%20' + '%0D';

        text += 'sr^_^|' + Verse_Count.toString();  // change seprator to "|" ,  for Service_Record

        for (i = 0; i < Verse.length; i++) {

           let id_1 = Verse[i].ID_1;
           let id_2 = Verse[i].ID_2; 

           let service_date = Verse[i].Service_Date;

           let service_start_time = Verse[i].Service_Start_Time; 
           let service_end_time = Verse[i].Service_End_Time; 
           let usher = Verse[i].Usher; 

           let topic = Verse[i].Topic;
           let hymn = Verse[i].Hymn; 

           let speaker = Verse[i].Speaker; 
           let interp = Verse[i].Interp; 
           let hymnal = Verse[i].Hymnal;

           let note = Verse[i].Note; 

           let bro_m_note = Verse[i].Bro_M_Note; 
           let sis_m_note = Verse[i].Sis_M_Note; 
           let bro_trs_note = Verse[i].Bro_TrS_Note;
           let sis_trs_note = Verse[i].Sis_TrS_Note;

           // Encrypt Content then Exp

           // Encode Content then Exp

           var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note


           //var encodedNote = btoa(note);  // for test , 但 中文不行

           var encodedService_start_time = btoa(encodeURIComponent( escape( service_start_time )));  

           var encodedService_end_time = btoa(encodeURIComponent( escape( service_end_time )));  

           var encodedUsher = btoa(encodeURIComponent( escape( usher )));  

           var encodedTopic = btoa(encodeURIComponent( escape( topic )));  

           var encodedHymn = btoa(encodeURIComponent( escape( hymn )));  

           var encodedSpeaker = btoa(encodeURIComponent( escape( speaker )));  

           var encodedInterp = btoa(encodeURIComponent( escape( interp )));  

           var encodedHymnal = btoa(encodeURIComponent( escape( hymnal )));  

           var encodedNote = btoa(encodeURIComponent( escape( note )));    

           //window.btoa(encodeURIComponent( escape( str )))


           // Define the string
           // var decodedStringBtoA = 'Hello World!';

           // Encode the String
           // var encodedStringBtoA = btoa(decodedStringBtoA);           


           //text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + service_start_time + '|' + service_end_time + '|' + encryptedUsher + '|' + topic + '|' + hymn + '|' + speaker + '|' + interp + '|' + hymnal + '|' + encryptedNote + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"

           //text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + service_start_time + '|' + service_end_time + '|' + usher + '|' + topic + '|' + hymn + '|' + speaker + '|' + interp + '|' + hymnal + '|' + encryptedNote + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"

           //text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + service_start_time + '|' + service_end_time + '|' + usher + '|' + topic + '|' + hymn + '|' + speaker + '|' + interp + '|' + hymnal + '|' + encodedNote + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"



           text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + encodedService_start_time + '|' + encodedService_end_time + '|' + encodedUsher + '|' + encodedTopic + '|' + encodedHymn + '|' + encodedSpeaker + '|' + encodedInterp + '|' + encodedHymnal + '|' + encodedNote + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"



           //text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + service_start_time + '|' + service_end_time + '|' + usher + '|' + topic + '|' + hymn + '|' + speaker + '|' + interp + '|' + hymnal + '|' + note + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"



        } // End of for (i = 0; i < Verse.length; i++)

     } // End of if (Verse)

  } // End of if(DateStr2!='')


  //var device_name_tmp = document.getElementById("device_name").value;   // Scott_iPad_Air3, Scott_NB

  //var Name_tmp = document.getElementById("device_name_2").value;   // Scott_iPad_Air3, Scott_NB

  var Service_tmp = DateStr2;

  //var Service_tmp = '20210530E';

  var Upload_Meag = Service_tmp + '!' + text;  // use ! as seperater


  var send_mesg_tmp = 'Upload_Service_Record_' + Upload_Meag;

  //var send_mesg_tmp = 'Upload_Attendance_' + Upload_Meag; 

  //send_mesg_tmp would be like:  Upload_Attendance_Scott_NB|20210503E|AE^_^|12|20210503E_M_B_275|20210503E_M_B_279|...

  //var send_mesg_tmp = 'Upload_Service_Record_20210602E!sr^_^|1|202106024|20210602E|02/06/2021 Wednesday Evening|7.22|8.30|U2FsdGVkX19sbqsDcJAoaoyjloaumd4Hn8uT6fdnWcA=|Hymnal and prayer service |185, 441|Carnegie Shi |Ted Tu |Sis Grace Lee |U2FsdGVkX1/82L/GhGPBNe/PP83Q+dmCpr63MlWKxEH+h6AfGagzgEW+im4gU0CN|0|0|0|0';


  iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
  return false;


}; // End of function Upload_Service_Record_2()




async function Upload_Service_Record_3() {  // for writing a record in email,
                                            //     work with update_Service_Record();Exp_and_Email_Attendance2();

  var text = '';

  var DateStr2 = Display_ID_2; // Exp_start_date , '20200920E'

  if(DateStr2!='') {     // exp service record for App

     //let Verse = await dbT2.SermonNote.where('Name').startsWithIgnoreCase(startWith_date).toArray();

     let Verse = await dbT2.Service_Record.where('ID_2').equals(DateStr2).toArray();

     var Verse_Count = 0;

     Verse_Count = Verse.length;

     if (Verse) {

        //text += 'Note:' + Verse[0].Note + '|' + '%20' + '%0D';

        text += 'sr^_^|' + Verse_Count.toString();  // change seprator to "|" ,  for Service_Record

        for (i = 0; i < Verse.length; i++) {

           let id_1 = Verse[i].ID_1;
           let id_2 = Verse[i].ID_2; 

           let service_date = Verse[i].Service_Date;

           let service_start_time = Verse[i].Service_Start_Time; 
           let service_end_time = Verse[i].Service_End_Time; 
           let usher = Verse[i].Usher; 

           let topic = Verse[i].Topic;
           let hymn = Verse[i].Hymn; 

           let speaker = Verse[i].Speaker; 
           let interp = Verse[i].Interp; 
           let hymnal = Verse[i].Hymnal;

           let note = Verse[i].Note; 

           let bro_m_note = Verse[i].Bro_M_Note; 
           let sis_m_note = Verse[i].Sis_M_Note; 
           let bro_trs_note = Verse[i].Bro_TrS_Note;
           let sis_trs_note = Verse[i].Sis_TrS_Note;

           // Encrypt Content then Exp

           // Encode Content then Exp

           var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

           //var encryptedUsher = CryptoJS.AES.encrypt(usher, Key_input);

           //var encryptedTopic = CryptoJS.AES.encrypt(topic, Key_input);

           //var encryptedHymn = CryptoJS.AES.encrypt(hymn, Key_input);

           //var encryptedSpeaker = CryptoJS.AES.encrypt(speaker, Key_input);

           //var encryptedInterp = CryptoJS.AES.encrypt(interp, Key_input);

           //var encryptedHymnal = CryptoJS.AES.encrypt(hymnal, Key_input);

           //var encryptedNote = CryptoJS.AES.encrypt(note, Key_input);


           //var encodedNote = btoa(note);  // for test , 但 中文不行

           var encodedService_start_time = btoa(encodeURIComponent( escape( service_start_time )));  

           var encodedService_end_time = btoa(encodeURIComponent( escape( service_end_time )));  

           var encodedUsher = btoa(encodeURIComponent( escape( usher )));  

           var encodedTopic = btoa(encodeURIComponent( escape( topic )));  

           var encodedHymn = btoa(encodeURIComponent( escape( hymn )));  

           var encodedSpeaker = btoa(encodeURIComponent( escape( speaker )));  

           var encodedInterp = btoa(encodeURIComponent( escape( interp )));  

           var encodedHymnal = btoa(encodeURIComponent( escape( hymnal )));  

           var encodedNote = btoa(encodeURIComponent( escape( note )));    

           //window.btoa(encodeURIComponent( escape( str )))


           // Define the string
           // var decodedStringBtoA = 'Hello World!';

           // Encode the String
           // var encodedStringBtoA = btoa(decodedStringBtoA);           


           //text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + service_start_time + '|' + service_end_time + '|' + encryptedUsher + '|' + topic + '|' + hymn + '|' + speaker + '|' + interp + '|' + hymnal + '|' + encryptedNote + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"

           //text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + service_start_time + '|' + service_end_time + '|' + usher + '|' + topic + '|' + hymn + '|' + speaker + '|' + interp + '|' + hymnal + '|' + encryptedNote + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"

           //text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + service_start_time + '|' + service_end_time + '|' + usher + '|' + topic + '|' + hymn + '|' + speaker + '|' + interp + '|' + hymnal + '|' + encodedNote + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"



           text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + encodedService_start_time + '|' + encodedService_end_time + '|' + encodedUsher + '|' + encodedTopic + '|' + encodedHymn + '|' + encodedSpeaker + '|' + encodedInterp + '|' + encodedHymnal + '|' + encodedNote + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"



           //text += '|' + id_1 + '|' + id_2 + '|' + service_date + '|' + service_start_time + '|' + service_end_time + '|' + usher + '|' + topic + '|' + hymn + '|' + speaker + '|' + interp + '|' + hymnal + '|' + note + '|' + bro_m_note + '|' + sis_m_note + '|' + bro_trs_note + '|' + sis_trs_note;  // change seprator to "|"



        } // End of for (i = 0; i < Verse.length; i++)


        //var device_name_tmp = document.getElementById("device_name").value;   // Scott_iPad_Air3, Scott_NB

        //var Name_tmp = document.getElementById("device_name_2").value;   // Scott_iPad_Air3, Scott_NB

        var Service_tmp = Display_ID_2;

        //var Service_tmp = '20210530E';

        var Upload_Meag = Service_tmp + '!' + text;  // use ! as seperater


        var send_mesg_tmp = 'wUpload_Service_Record_' + Upload_Meag;

        //var send_mesg_tmp = 'Upload_Attendance_' + Upload_Meag; 

        //send_mesg_tmp would be like:  Upload_Attendance_Scott_NB|20210503E|AE^_^|12|20210503E_M_B_275|20210503E_M_B_279|...

        //var send_mesg_tmp = 'Upload_Service_Record_20210602E!sr^_^|1|202106024|20210602E|02/06/2021 Wednesday Evening|7.22|8.30|U2FsdGVkX19sbqsDcJAoaoyjloaumd4Hn8uT6fdnWcA=|Hymnal and prayer service |185, 441|Carnegie Shi |Ted Tu |Sis Grace Lee |U2FsdGVkX1/82L/GhGPBNe/PP83Q+dmCpr63MlWKxEH+h6AfGagzgEW+im4gU0CN|0|0|0|0';


        iframe.contentWindow.postMessage(send_mesg_tmp, '*');  // send message to iframe
        return false;

        

     } // End of if (Verse)

  } // End of if(DateStr2!='')




}; // End of function Upload_Service_Record_3()





window.addEventListener('message', function() {     // for receiving data from ifram

  //alert(`Received ${event.data} from ${event.origin}`);

  Receiving_Data(event);

});


var Download_n_Imp_Attendance_Records_Add_Str = '';     // for Sync between other devices and Church's iPad

var V2_Download_n_Imp_Attendance_Records_Add_Str = '';  // for Sync between other devices and Church's iPad V2

var Download_n_Imp_Attendance_Records_Del_Add_Str = ''; // for Imp to History Attendance Record

var Download_n_Imp_Service_Records_Del_Add_Str = '';  // Download_n_Imp_Service_Records_Del_Add

var Download_n_Imp_Congregation4_V2_Upload_Add_Update_Str = '';  // Download_n_Imp_Congregation4_V2_Upload_Add_Update


var Query_For_Attendance_Name_Number_Str = ''; // 

var wUpload_Service_Record_Str = '';

var wUpload_His_Attendance_Str = '';


var Result_Query_Sever_V2Congregation4_Ver_Str = '';



async function Receiving_Data(event) {

   //document.getElementById("Download_Data").innerHTML = event.data;

   //alert(`Received ${event.data} from ${event.origin}`);




   var event_wUHA_tmp = event.data;                    // wUpload_His_Attendance_20210628E_Upload_Succeeded

   var event_wUHA_tmp2 = event_wUHA_tmp.substr(0, 22); // wUpload_His_Attendance

   var event_wUHA_tmp3 = event_wUHA_tmp.substr(23); // 20210628E_Upload_Succeeded

   if( event_wUHA_tmp2 == 'wUpload_His_Attendance') { // for writing a record in email

      wUpload_His_Attendance_Str = 'Attendance Record ' + event_wUHA_tmp3; // 20210628E_Upload_Succeeded , write to email

      //await Imp_to_Attendance_1();

      //Exp_and_Email_Attendance2(); // for test

   } // End of if( event_wUSR_tmp2 == 'wUpload_Service_Record') 




   var event_wUSR_tmp = event.data;                    // wUpload_Service_Record_20210628E_Upload_Succeeded

   var event_wUSR_tmp2 = event_wUSR_tmp.substr(0, 22); // wUpload_Service_Record

   var event_wUSR_tmp3 = event_wUSR_tmp.substr(23); // 20210628E_Upload_Succeeded

   if( event_wUSR_tmp2 == 'wUpload_Service_Record') { // for writing a record in email

      wUpload_Service_Record_Str = 'Service Record ' + event_wUSR_tmp3; // 20210628E_Upload_Succeeded , write to email

      //await Imp_to_Attendance_1();

      //Exp_and_Email_Attendance2(); // for test

   } // End of if( event_wUSR_tmp2 == 'wUpload_Service_Record') 





   var event_tmp = event.data;  

   var event_tmp2 = event_tmp.substr(0, 37); // Download_n_Imp_Attendance_Records_Add

   var event_tmp3 = event_tmp.substr(38); // attendance records for imp

   if( event_tmp2 == 'Download_n_Imp_Attendance_Records_Add') { // for Sync between other devices and Church's iPad

      Download_n_Imp_Attendance_Records_Add_Str = event_tmp3; // attendance records for imp

      await Imp_to_Attendance_1();

   } // End of if( event_tmp2 == 'Download_n_Imp_Attendance_Records_Add') 




   var eventV2_tmp = event.data;  

   var eventV2_tmp2 = eventV2_tmp.substr(0, 40); // V2_Download_n_Imp_Attendance_Records_Add

   var eventV2_tmp3 = eventV2_tmp.substr(41); // attendance records for imp

   if( eventV2_tmp2 == 'V2_Download_n_Imp_Attendance_Records_Add') { // for Sync between other devices and Church's iPad V2

      V2_Download_n_Imp_Attendance_Records_Add_Str = eventV2_tmp3; // attendance records for imp

      await Imp_to_Attendance_V2();

   } // End of if( event_tmp2 == 'V2_Download_n_Imp_Attendance_Records_Add') 





   var eventQFA_tmp = event.data;                  //Query_for_Attendance_Result_QFA^_^|2|Scott_NB2|4|Scott_NB|7

   var eventQFA_tmp2 = eventQFA_tmp.substr(0, 27); // Query_for_Attendance_Result

   var eventQFA_tmp3 = eventQFA_tmp.substr(28); // QFA^_^|2|Scott_NB2|4|Scott_NB|7

   if( eventQFA_tmp2 == 'Query_for_Attendance_Result') { // for display Name and Number can be downloaded

      Query_For_Attendance_Name_Number_Str = eventQFA_tmp3; // attendance records for imp

      //alert(eventQFA_tmp3); // for test , QFA^_^|2|Scott_NB2|4|Scott_NB|7

      show_Name_and_Number();

      //await Imp_to_Attendance_V2();

   } // End of if( event_tmp2 == 'Query_for_Attendance_Result') 





   var event_tmp4 = event_tmp.substr(0, 8); // No Data!

   if( event_tmp2 == 'No Data!') { // for No Data

      alert('No Data!');

   } // End of if( event_tmp2 == 'No Data!')



   var eventDA_tmp = event.data;  

   var eventDA_tmp2 = eventDA_tmp.substr(0, 41); // Download_n_Imp_Attendance_Records_Del_Add 

   var eventDA_tmp3 = eventDA_tmp.substr(42); // attendance records for imp

   if( eventDA_tmp2 == 'Download_n_Imp_Attendance_Records_Del_Add') { // for Imp to History Attendance Record

      Download_n_Imp_Attendance_Records_Del_Add_Str = eventDA_tmp3; // attendance records for imp

      await Imp_to_Attendance_2();   // for Imp to History Attendance Record

      //await Imp_to_Attendance_1(); // for Sync between other devices and Church's iPad

   } // End of if( eventDA_tmp2 == 'Download_n_Imp_Attendance_Records_Del_Add') 




   var event_SR_Del_Add_tmp = event.data;  // Service_Records_Del_Add

   var event_SR_Del_Add_tmp2 = event_SR_Del_Add_tmp.substr(0, 38); // Download_n_Imp_Service_Records_Del_Add

   var event_SR_Del_Add_tmp3 = event_SR_Del_Add_tmp.substr(39); // service records for imp

   if( event_SR_Del_Add_tmp2 == 'Download_n_Imp_Service_Records_Del_Add') {

      Download_n_Imp_Service_Records_Del_Add_Str = event_SR_Del_Add_tmp3; // service records for imp

      //await Imp_to_Attendance_1();

      await Imp_to_Service_Record_1();

   } // End of if( event_SR_Del_Add_tmp2 == 'Download_n_Imp_Service_Records_Del_Add') 




   // Add on 20210706

   var event_Result_QS_V2C4_tmp = event.data;  // Result_Query_Sever_V2Congregation4_Ver_20210705213519

   var event_Result_QS_V2C4_tmp2 = event_Result_QS_V2C4_tmp.substr(0, 38); // Result_Query_Sever_V2Congregation4_Ver

   var event_Result_QS_V2C4_tmp3 = event_Result_QS_V2C4_tmp.substr(39); // 20210705213519

   if( event_Result_QS_V2C4_tmp2 == 'Result_Query_Sever_V2Congregation4_Ver') {

      Result_Query_Sever_V2Congregation4_Ver_Str = event_Result_QS_V2C4_tmp3; // 20210705213519

      //alert(Result_Query_Sever_V2Congregation4_Ver_Str); // for test


      // --- add for test


      var Sever_V2Congregation4_Ver = Number(Result_Query_Sever_V2Congregation4_Ver_Str);  // Result_Query_Sever_V2Congregation4_Ver_Str

      var Device_Congregation4_Ver = Number(localStorage.Device_Congregation4_Version);

      //alert('Server Ver: ' + Sever_V2Congregation4_Ver + ' Device Ver: ' + Device_Congregation4_Ver ); // for test

      if ( Sever_V2Congregation4_Ver > Device_Congregation4_Ver) {

         //alert('Server Ver: ' + Sever_V2Congregation4_Ver + ' Device Ver: ' + Device_Congregation4_Ver ); // for test

         Downloaded_V2Congregation4_Ver = Sever_V2Congregation4_Ver;

         Download_Congregation4_V2();

      }


      // --- End of add for test
      

   } // End of if( event_Result_QS_V2C4_tmp2 == 'Result_Query_Sever_V2Congregation4_Ver')

   // End of Add on 20210706




   var event_C4V2_Add_Update_tmp = event.data;  // Congregation4_V2_Upload_Add_Update

   var event_C4V2_Add_Update_tmp2 = event_C4V2_Add_Update_tmp.substr(0, 49); // Download_n_Imp_Congregation4_V2_Upload_Add_Update

   var event_C4V2_Add_Update_tmp3 = event_C4V2_Add_Update_tmp.substr(50); // Congregation4 for imp

   if( event_C4V2_Add_Update_tmp2 == 'Download_n_Imp_Congregation4_V2_Upload_Add_Update') {

      Download_n_Imp_Congregation4_V2_Upload_Add_Update_Str = event_C4V2_Add_Update_tmp3; // Congregation4 for imp

      //await Imp_to_Attendance_1();

      //await Imp_to_Service_Record_1();

      await Imp_to_Congregation4_V2();       // imp to Congregation4 without phone

      await Congregation4_to_Householder();  // Congregation4 -> Householder

      await Householder_to_Roll();           // Householder -> Roll

      localStorage.Device_Congregation4_Version = Downloaded_V2Congregation4_Ver;

      // 
      Prepare_for_Roll_Call(); // // Prepare HTML for filling data for Roll_Call()

      Chinese_Surname();

   } // End of if( event_C4V2_Add_Update_tmp2 == 'Download_n_Imp_Congregation4_V2_Upload_Add_Update') 




} // End of function Receiving_Data(event)
