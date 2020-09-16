// for mark line
// V2
// Use idb.min.js


var VersML = [] ;   // for verse Mark Lines
var VersML_B = [] ;
var VersML_C = [] ;
var VersML_V = [] ;
var VersML_T = [] ;

var VersML_tmp_B = [] ;
var VersML_tmp_C = [] ;
var VersML_tmp_V = [] ;
var VersML_tmp_T = [] ;


var Book_Verse_Count_Value = 25;  // for Bible4U set 25, Bible2U set 13, Test set 5



let db;
let dbT2;  // New for V4


async function init_Bible4U_DB() {

  //db = await idb.openDb('booksDb', 1, db => {
  //  db.createObjectStore('books', {keyPath: 'name'});   // mean : name is primary key
  //  ObjectStore.createIndex('color_no', 'color_no', { unique: false });
  //  ObjectStore.createIndex('book_no', 'book_no', { unique: false });
  //  ObjectStore.createIndex('chap_no', 'chap_no', { unique: false });
  //  ObjectStore.createIndex('vers_no', 'vers_no', { unique: false });
  //});

   // Declare Database

     db = new Dexie('booksDb');
     db.version(0.1).stores({
         books: 'name'
     });

     dbT2 = new Dexie('books_Test2Db');   // New for V4
     dbT2.version(1).stores({
         books: 'name,date'
     });
     dbT2.version(2).stores({      // New for V7
         books: 'name,date',
         ChapNote: 'name,date'
     });
     dbT2.version(3).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name'
     });
     dbT2.version(4).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name',
         Attendance: 'Record'
     });
     dbT2.version(5).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Attendance: 'Record'
     });
     dbT2.version(6).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order'
     });
     dbT2.version(7).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: null // Will drop the table, 
                             // when using clear or delete, the deleted ++CNo will be skiped
                             // but using null to drop table can start again
     });
     dbT2.version(8).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order'
     });
     dbT2.version(9).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No'     
     });
     dbT2.version(10).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: null     
     });
     dbT2.version(11).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No'     
     });
     dbT2.version(12).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name'     
     });
     dbT2.version(13).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No'     
     });
     dbT2.version(14).stores({      // New for V8
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order'     
     });
     dbT2.version(15).stores({      // New for V9
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order'     
     });

     dbT2.version(16).stores({      // New for V9
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob'     
     });

     dbT2.version(17).stores({      // New for V11
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker'     
     });
     dbT2.version(18).stores({      // New for V12
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker, *MainVerses'     
     });
     dbT2.version(19).stores({      // New for V12
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker, *MainVerses, *KeyWords'     
     });
     dbT2.version(20).stores({      // New for V12
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker, *MainVerses, *KeyWords',
         Pictures: 'ID, *MainVerses'       
     });
     dbT2.version(21).stores({      // New for V12
         books: 'name,date',
         ChapNote: 'name,date',
         Congregation: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Attendance: 'Record',
         Householder: '++H_Seq,H_No',
         Congregation2: '++CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order',
         Congregation3: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No',
         Roll: '++Roll_No,CNo,F_Name,L_Name,C_F_Name,H_No,E_F_LName,C_F_FName',
         Congregation4: 'CNo,F_Name,L_Name,[L_Name+F_Name],H_No,F_Order,Tel,Mob',
         SermonNote: 'Name,Speaker, *MainVerses, *KeyWords',
         Pictures: 'ID, P_Name, *MainVerses'       
     });

   // End of Declare Database

   
   // 
   Prepare_for_Roll_Call(); // // Prepare HTML for filling data for Roll_Call()

}


async function booksDb_to_books_Test2Db() {  // New for V4

   let Verse_db = await db.books.toArray();

   let Verse_dbT2 = await dbT2.books.toArray();

   if (Verse_db) {

      for (i = 0; i < Verse_db.length; i++) {

         arg_db = Verse_db[i].name;

         if (Verse_dbT2) {

            for (j = 0; j < Verse_dbT2.length; j++) {  // Check exist

               var Same_F = 0; // 0 mean not exist, 1 mean exist

               arg_dbT2 = Verse_dbT2[j].name;

               if(arg_db == arg_dbT2) {

                  Same_F = 1;

               }

            }  // End of for (j = 0;

         } // End of if (Verse_dbT2)

         if(Same_F == 0) {

            let name = Verse_db[i].name;
            let color_no = Verse_db[i].color_no;
            let book_no = Verse_db[i].book_no;
            let chap_no = Verse_db[i].chap_no;
            let vers_no = Verse_db[i].vers_no;
            let date = '20200301';
            //let date = Verse_db[i].date;
            //let date = ML_Date();

            dbT2.books.add({name,color_no, book_no, chap_no, vers_no, date });

         }


      } // End of for (i = 0;

   }

}  // End of async function booksDb_to_books_Test2Db()

function ML_Date() {  // New for V4

   var d = new Date();
   var Y = d.getFullYear();
   var M = d.getMonth() + 1;
   var D = d.getDate();
   //var h = d.getHours();
   //var m = d.getMinutes();

   //var M_Str = M.toString();

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

   var Date_Str = Y.toString() + M.toString() + D.toString() ;

   return Date_Str;

}  // End of function ML_Date()




   // Declare Database

   //  var db = new Dexie('booksDb');
   //  db.version(0.1).stores({
   //      books: 'name'
   //  });

   // End of Declare Database



    async function get2(arg1) {  // arg1:key
      return await idbKeyval.get(arg1);
    }

    async function get3(arg1) {  // arg1:key, for Mark_Line_Records (table)

       let tx = db.transaction('books');
       let MLRStore = tx.objectStore('books');

       let MLR_tmp = await MLRStore.get(arg1);  // get() using primary key as parameter

       if (MLR_tmp) {

          var MLR_V_Color = MLR_tmp.color_no;

       }
       else {

          var MLR_V_Color = '0'; // 0 means No Data, 1 means Red

       }

       return MLR_V_Color;  

       //return await idbKeyval.get(arg1);
    }


    async function get4(arg1) {  // arg1:key, for Mark_Line_Records (table)

       let Verse = await db.books.get(arg1);

       //let tx = db.transaction('books');
       //let MLRStore = tx.objectStore('books');

       //let MLR_tmp = await MLRStore.get(arg1);  // get() using primary key as parameter

       if (Verse) {

          var MLR_V_Color = Verse.color_no;       

       }
       else {

          var MLR_V_Color = '0'; // 0 means No Data, 1 means Red

       }

       //if (MLR_tmp) {

       //   var MLR_V_Color = MLR_tmp.color_no;

       //}
       //else {

       //   var MLR_V_Color = '0'; // 0 means No Data, 1 means Red

       //}

       return MLR_V_Color;  

       //return await idbKeyval.get(arg1);
    }  // End of function get4(arg1)

    async function get5(arg1) {  // arg1:key, for Mark_Line_Records (table)  , // New for V4

       let Verse = await dbT2.books.get(arg1);


       if (Verse) {

          var MLR_V_Color = Verse.color_no;       

       }
       else {

          var MLR_V_Color = '0'; // 0 means No Data, 1 means Red

       }


       return MLR_V_Color;  

    }  // End of function get5(arg1)
    
    async function set2(arg1,arg2) {  // arg1:key, arg2:value
      await idbKeyval.set(arg1, arg2);
    }

    async function set3(arg1,arg2,arg3,arg4,arg5) {  // arg1:key, arg2:value, for Mark_Line_Records (table)
    //async function set3(arg1,arg2) {  // arg1:key, arg2:value, for Mark_Line_Records (table)

       let name = arg1;
       let color_no = arg2;
       let book_no = arg3;
       let chap_no = arg4;
       let vers_no = arg5;

       let tx = db.transaction('books', 'readwrite');

       try {
         await tx.objectStore('books').add({name, color_no, book_no, chap_no, vers_no});
         //await tx.objectStore('Mark_Line_Records').add({ML_Verse, V_Color});

       } catch(err) {
         if (err.name == 'ConstraintError') {
           alert("Such Verse exists in DB already");
           //await addBook();
         } else {
           throw err;
         }
       }

       //await idbKeyval.set(arg1, arg2);
    }

    async function set4(arg1,arg2,arg3,arg4,arg5) {  // arg1:key, arg2:value, for Mark_Line_Records (table)
    //async function set3(arg1,arg2) {  // arg1:key, arg2:value, for Mark_Line_Records (table)

       let name = arg1;
       let color_no = arg2;
       let book_no = arg3;
       let chap_no = arg4;
       let vers_no = arg5;

       //let tx = db.transaction('books', 'readwrite');

       try {

         db.books.add({name,color_no, book_no, chap_no, vers_no});

         //await tx.objectStore('books').add({name, color_no, book_no, chap_no, vers_no});
         //await tx.objectStore('Mark_Line_Records').add({ML_Verse, V_Color});

       } catch(err) {
         if (err.name == 'ConstraintError') {
           alert("Such Verse exists in DB already");
           //await addBook();
         } else {
           throw err;
         }
       }

       //await idbKeyval.set(arg1, arg2);
    }  // End of function set4(arg1,arg2,arg3,arg4,arg5)


    async function set5(arg1,arg2,arg3,arg4,arg5) {  // arg1:key, arg2:value, for Mark_Line_Records (table)
                                                     // New for V4

       let name = arg1;
       let color_no = arg2;
       let book_no = arg3;
       let chap_no = arg4;
       let vers_no = arg5;
       let date = ML_Date();

       try {

         dbT2.books.add({name,color_no, book_no, chap_no, vers_no, date});

       } catch(err) {
         if (err.name == 'ConstraintError') {
           alert("Such Verse exists in DB already");
         } else {
           throw err;
         }
       }

    }  // End of function set5(arg1,arg2,arg3,arg4,arg5) 


    async function del2(arg1) {  // arg1:key
      await idbKeyval.delete(arg1);
    }

    async function del3(arg1) {  // arg1:key,  for Mark_Line_Records (table)

       let tx = db.transaction('books', 'readwrite');
       await tx.objectStore('books').delete(arg1);

       //await idbKeyval.delete(arg1);
    }

    async function del4(arg1) {  // arg1:key,  for Mark_Line_Records (table)

       db.books.delete(arg1);

    }

    async function del5(arg1) {  // arg1:key,  for Mark_Line_Records (table)  // New for V4

       dbT2.books.delete(arg1);

    }

    //var Mark_Line_Key="";
    //var Mark_Line_Value="";

    async function Set_Mark_Line() {  // Set Mark Line 

       //var key = 'Gen 1:5';
       //var value = 'G';

       await set2(Mark_Line_Key,Mark_Line_Value);

       //log(`Key ${key} was saved with value ${value}.`);

    }

    async function Get_Mark_Line() {  // Get Mark Line 

       //var key = 'Gen 1:5';

       Mark_Line_Value = await get2(Mark_Line_Key);

       //log(`Key ${key} was read with value ${value}.`);

    }


async function check_n_set_mark_line(arg1,arg2,arg3,arg4) {


   // Reading from Indexeddb

   var Mark_Line_String = arg1 + '_' + arg2 + '_' + arg3;

   var Mark_Line_Value = await get5(Mark_Line_String);  // New for V4

   //var Mark_Line_Value = await get4(Mark_Line_String);

   //var Mark_Line_Value = await get3(Mark_Line_String);

   //var Mark_Line_Value = await get2(Mark_Line_String);

   // End of Reading from Indexeddb



   //if(arg1==1 && arg2==20 && arg3==15){  // Exo 21:15 , test
   if(Mark_Line_Value=='1'){  // Exo 21:15 , test

      document.getElementById(arg4).style.color = "red";

   } 
   else {

      document.getElementById(arg4).style.color = "black";

   }

}

async function Add_or_Remove_mark_line(arg1,arg2,arg3) {


   // Reading from Indexeddb

   var Mark_Line_String = arg1 + '_' + arg2 + '_' + arg3;

   var Mark_Line_Value = await get5(Mark_Line_String);  // New for V4

   //var Mark_Line_Value = await get4(Mark_Line_String);

   //var Mark_Line_Value = await get3(Mark_Line_String);

   //var Mark_Line_Value = await get2(Mark_Line_String);

   // End of Reading from Indexeddb



   if(Mark_Line_Value == '1') {  // Remove mark_line

      await del5(Mark_Line_String);  // New for V4

   }
   else {  // Add mark_line

      var Mark_Line_Value = '1' ; // red color


      // Write to Indexeddb


      //await set3(Mark_Line_String,Mark_Line_Value);   

      //await set3(Mark_Line_String,Mark_Line_Value,arg1,arg2,arg3);   // add arg1,arg2,arg3

      await set5(Mark_Line_String,Mark_Line_Value,arg1,arg2,arg3);   // add arg1,arg2,arg3  // New for V4

      //await set2(Mark_Line_String,Mark_Line_Value);   


      // End of Write to Indexeddb


   }


   keyFunction2('enter');efocus(); 


}


async function Show_All_ML_Only() {   // Show all items in ML *** Only ***
                                   // Do Not Write all items to files ***

   Show_MLs_F = 1; // 1 means Show, 0 means Hide

   var text1;

   text1 = "All MLs<br>";

   var Book_Verse_Count = 0;


   for (i = 0; i < 66; i++) {

      var Book_tmp = i + '_';
      Book_Verse_Count = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp).count(); // New for V4
      //Book_Verse_Count = await db.books.where('name').startsWithIgnoreCase(Book_tmp).count();

      if(Book_Verse_Count>0) {

         var First_Verse = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp).first(); // New for V4
         //var First_Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp).first();

         var argN = First_Verse.name;
         var arg1 = First_Verse.book_no;
         var arg2 = First_Verse.chap_no;
         var arg3 = First_Verse.vers_no;
         var arg4 = First_Verse.vers_no;

         var VH_Bname = BookAbbr4[arg1];

         var Book_Count_Str = VH_Bname + ' (' + Book_Verse_Count + ')';

         //var Book_Count_Str = VH_Bname + ' (' + Book_Verse_Count + ')' + '<br>';

         //text1 += Book_Count_Str;

         text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');Show_Book_ML_Only();return false;">' + Book_Count_Str + '</a><br>';



         //VersML_B.push(arg1); 
         //VersML_C.push(arg2); 
         //VersML_V.push(arg3); 
         //VersML_T.push(arg4); 

      }
      else {  // no data


      }


   }  // End of for (i = 0; i < 66; i++)



   // Reading from Indexeddb

   //let tx = db.transaction('books');
   //let bookStore = tx.objectStore('books');

   //let books_All = await bookStore.getAll();  // read all Mark Lines from objectStore 'books'

   //var VersML_Len, j;
   //VersML_Len = VersML.length;


   //if(VersML.length){  // Clear Arrays

   //   VersML.splice(0, VersML_Len);
   //   VersML_B.splice(0, VersML_Len);
   //   VersML_C.splice(0, VersML_Len);
   //   VersML_V.splice(0, VersML_Len);
   //   VersML_T.splice(0, VersML_Len);

   //}


   //if(books_All) { // have data

   //   for (i = 0; i < books_All.length; i++) {

   //      // get data from Indexeddb
   //      var tmp_book_no = books_All[i].book_no;
   //      var tmp_chap_no = books_All[i].chap_no;
   //      var tmp_vers_no = books_All[i].vers_no;

   //      var arg1 = tmp_book_no;
   //      var arg2 = tmp_chap_no;
   //      var arg3 = tmp_vers_no;
   //      var arg4 = tmp_vers_no;

   //      //VersML_B.push(arg1); 
   //      //VersML_C.push(arg2); 
   //      //VersML_V.push(arg3); 
   //      //VersML_T.push(arg4); 

   //      var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
   //      var VH_Chap = arg2 + 1;
   //      var VH_Vers = arg3;
   //      var VH_To_Vers = arg4;

   //      if(arg4>arg3)
   //         var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
   //      else
   //         var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

   //      //VersML.push(VH);  // Put in new record


   //      //text1 += '<button onclick=";return false;">O</button> <a href="" id="7'+VersBM3_B[i]+VersBM3_C[i]+VersBM3_V[i]+VersBM3_T[i]+i+'0" onClick="Show_His_BM_Vers2(' + VersBM3_B[i] + ',' + VersBM3_C[i] + ',' + VersBM3_V[i] + ',' + VersBM3_T[i] + ');change_color(7'+VersBM3_B[i]+VersBM3_C[i]+VersBM3_V[i]+VersBM3_T[i]+i+'0);return false;">' + VersBM3[i] + '</a><br>';
         
   //      //text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + VersML_B[i] + ',' + VersML_C[i] + ',' + VersML_V[i] + ',' + VersML_T[i] + ');return false;">' + VersML[i] + '</a><br>';

   //      text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';



   //   }  // End of for (i = 0; i < books_All.length; i++) 



   //}
   //else {  // no data


   //}



    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Vers_MLs").innerHTML = text1;


}   // End of function Show_All_ML_Only()


async function Show_Book_ML_Only() {   // Show items belong to certain book in ML *** Only ***
                                   // Do Not Write all items to files ***


   var Book_Verse_Count = 0;

   var Book_tmp = nowbook + '_';

   Book_Verse_Count = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp).count(); // New for V4
   //Book_Verse_Count = await db.books.where('name').startsWithIgnoreCase(Book_tmp).count();


   let Verse = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp).toArray();  // New for V4
   //let Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp).toArray();

   //let Verse = await db.books.where('name').startsWithIgnoreCase('39_').toArray();

   Show_MLs_F = 1; // 1 means Show, 0 means Hide

   //var text1;

   //text1 = "Book MLs<br>";


   if(Book_Verse_Count<Book_Verse_Count_Value ) { // for Bible4U set 25, Bible2U set 13, Test set 5
                             // Display all MLs

      if (Verse) {

         var text1;

         text1 = "Book MLs<br>";

         for (i = 0; i < Verse.length; i++) {

            var tmp_book_no = Verse[i].book_no;
            var tmp_chap_no = Verse[i].chap_no;
            var tmp_vers_no = Verse[i].vers_no;

            var arg1 = tmp_book_no;
            var arg2 = tmp_chap_no;
            var arg3 = tmp_vers_no;
            var arg4 = tmp_vers_no;

            var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
            var VH_Chap = arg2 + 1;
            var VH_Vers = arg3;
            var VH_To_Vers = arg4;

            if(arg4>arg3)
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
            else
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

            text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';

         } // End of for (i = 0; i < Verse.length; i++)

      }
      else {

      }  // End of if (Verse)

   }  // End of Display all MLs ------------
   else if(Book_Verse_Count>Book_Verse_Count_Value - 1 ){  // Display count number of each chapter

      var text1;

      text1 = "Book MLs<br>";

      var Chap_Verse_Count = 0;

      var Book_Max_Chap_No = Qmaxchap_v2(nowbook);
      //var Book_Max_Chap_No = 28;

      //for (i = 0; i < Book_Max_Chap_No; i++) {
      for (i = 0; i < Book_Max_Chap_No; i++) {

         //var Book_tmp2 = nowbook + '_' + i;
         //var Book_tmp2 = nowbook + '_' + i;
         var Book_tmp2 = nowbook + '_' + i + '_';

         Chap_Verse_Count = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp2).count();  // New for V4
         //Chap_Verse_Count = await db.books.where('name').startsWithIgnoreCase(Book_tmp2).count();

         var First_Verse = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp2).first();  // New for V4
         //var First_Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp2).first();

         if(Chap_Verse_Count>0) {

            //var First_Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp2).first();

            var argN = First_Verse.name;
            var arg1 = First_Verse.book_no;
            var arg2 = First_Verse.chap_no;
            var arg3 = First_Verse.vers_no;
            var arg4 = First_Verse.vers_no;

            var VH_Bname = BookAbbr4[arg1];

            var VH_Chap = arg2 + 1

            var Chap_Count_Str = VH_Bname + ' ' + VH_Chap + ' (' + Chap_Verse_Count + ')';

            text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');Show_Chap_ML_Only();return false;">' + Chap_Count_Str + '</a><br>';

         }  // End of if(Chap_Verse_Count>0)


      }  // End of for (i = 0; i < Book_Max_Chap_No; i++)


   }  // End of Display count number of each chapter ---



    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Vers_MLs").innerHTML = text1;


}   // End of function Show_Book_ML_Only()


function Qmaxchap_v2(index) {  // find out maximum chapter of book , add on 15.04.2015
                            // index, start from 0 to 65, input book_int
                            // output maxchap
        var i;
	var cnum=new Array(50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,
	14,3,9,1,4,7,3,3,3,2,14,4, 28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22);
	i=cnum[index];
        return i;
}


async function Show_Chap_ML_Only() {   // Show items belong to certain chap in book in ML *** Only ***
                                   // Do Not Write all items to files ***

   var Book_tmp = nowbook + '_' + nowchapter;

   // Reading from Indexeddb

   let Verse = await dbT2.books.where('name').startsWithIgnoreCase(Book_tmp).toArray();  // New for V4
   //let Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp).toArray();

   //let Verse = await db.books.where('name').startsWithIgnoreCase('39_1').toArray();

   Show_MLs_F = 1; // 1 means Show, 0 means Hide

   var text1;

   text1 = "Chap MLs<br>";

   if (Verse) {

      for (i = 0; i < Verse.length; i++) {

         var tmp_book_no = Verse[i].book_no;
         var tmp_chap_no = Verse[i].chap_no;
         var tmp_vers_no = Verse[i].vers_no;

         var arg1 = tmp_book_no;
         var arg2 = tmp_chap_no;
         var arg3 = tmp_vers_no;
         var arg4 = tmp_vers_no;

         var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
         var VH_Chap = arg2 + 1;
         var VH_Vers = arg3;
         var VH_To_Vers = arg4;

         if(arg4>arg3)
            var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
         else
            var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

         text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';

      } // End of for (i = 0; i < Verse.length; i++)

   }
   else {

   }  // End of if (Verse)


    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Vers_MLs").innerHTML = text1;


}   // End of function Show_Chap_ML_Only()


async function Show_Recent_ML_Only() {   // New for V4

  Show_MLs_F = 1; // 1 means Show, 0 means Hide

  let Verse = await dbT2.books.orderBy('date').reverse().limit(50).toArray();  // order by chap_no, from big to small
                                                                                // Recent 50
   var text1;

   text1 = "R50 MLs<br>";

   if (Verse) {

      for (i = 0; i < Verse.length; i++) {

         var tmp_book_no = Verse[i].book_no;
         var tmp_chap_no = Verse[i].chap_no;
         var tmp_vers_no = Verse[i].vers_no;

         var arg1 = tmp_book_no;
         var arg2 = tmp_chap_no;
         var arg3 = tmp_vers_no;
         var arg4 = tmp_vers_no;

         var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
         var VH_Chap = arg2 + 1;
         var VH_Vers = arg3;
         var VH_To_Vers = arg4;

         if(arg4>arg3)
            var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
         else
            var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

         text1 += '<a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';

      } // End of for (i = 0; i < Verse.length; i++)

   }
   else {

   }  // End of if (Verse)

    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Vers_MLs").innerHTML = text1;


}  // End of function Show_Recent_ML_Only()


function Hide_ML_Only() {   // Show all items in Bookmark5 *** Only ***
                                   // Do Not Write all items to files ***

    Show_MLs_F=0; // 1 means Show, 0 means Hide


   if(Show_MLs_F==0 && Show_BookmarkNote_F==0 && Show_History_F==0 && Show_Bookmark_F==0 && Show_Bookmark1_F==0 && Show_Bookmark2_F==0 && Show_Bookmark3_F==0 && Show_Bookmark4_F==0 && Show_Bookmark5_F==0) { // 1 means Show, 0 means Hide

      //document.getElementById("His_Container").style.width = "0%";
      //document.getElementById("Bible_Container").style.width = "100%";

   }

    document.getElementById("Vers_MLs").innerHTML = "";


}   // End of function Hide_ML_Only()


async function Imp_to_books_Test2Db() {  // New for V5

   //var Imp_Word=document.Imp_to_books_Test2Db.value;

   var Imp_Word = document.getElementById("Imp_to_books_Test2Db").value;


   if(Imp_Word!='' && Imp_Word.length>5 && Imp_Word.substr(0, 5)=='i!^_^') { // For ML import
                                                                             // Do pre-check

      //Split String "str" into Array "res"
      //var str = "i!^_^,2,18,18,2,20200302,65,4,9,20200304";  // <-- test Data
      //var str = "i!^_^,3,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304";  // <-- test Data
      //var str = "i!^_^,4,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304,65,4,10,20200305";  // <-- test Data
      //var res = str.split(",");

      var Imp_Word_Real_Str = Imp_Word.substr(6, Imp_Word.length);

      var Imp_Tmp = Imp_Word_Real_Str.split(",");  // Imp_Tmp is an Array 

      var imp_records_no = Imp_Tmp[0];

      var imp_successed_no = 0;

      for (i = 0; i < imp_records_no; i++) {

         var B_tmp = Imp_Tmp[4*i+1];
         var C_tmp = Imp_Tmp[4*i+2];
         var V_tmp = Imp_Tmp[4*i+3];
         var D_tmp = Imp_Tmp[4*i+4];

         var Mark_Line_String = B_tmp + '_' + C_tmp + '_' + V_tmp;

         var Mark_Line_Value = await get5(Mark_Line_String);

         if(Mark_Line_Value=='0'){  // 0 means No Data, 1 means Has Data

            let name = Mark_Line_String;
            let color_no = "1";
            let book_no = B_tmp;
            //let chap_no = C_tmp.toString();
            let chap_no = Number(C_tmp);
            let vers_no = V_tmp;
            let date = D_tmp;

            imp_successed_no = imp_successed_no + 1;

            try {

              dbT2.books.add({name,color_no, book_no, chap_no, vers_no, date});

            } catch(err) {
              if (err.name == 'ConstraintError') {
                alert("Such Verse exists in DB already");
              } else {
                throw err;
              }
            }

         }  // End of if(Mark_Line_Value=='0')


      }  // End of for (i = 0; i < imp_records_no; i++)

      var imp_mesg = 'ML ' + imp_successed_no + ' imported';

      myExp_Db_Display.innerHTML = imp_mesg;

   }  // End of if(Imp_Word!=''...// For ML import


   if(Imp_Word!='' && Imp_Word.length>5 && Imp_Word.substr(0, 5)=='cn^_^') { // For Chap Note import,  New for V7
                                                                             // Do pre-check

      //Split String "str" into Array "res"
      //var str = "i!^_^,2,18,18,2,20200302,65,4,9,20200304";  // <-- test Data
      //var str = "i!^_^,3,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304";  // <-- test Data
      //var str = "i!^_^,4,18,18,2,20200302,65,4,9,20200304,18,18,4,20200304,65,4,10,20200305";  // <-- test Data
      //var res = str.split(",");

      var Imp_Word_Real_Str = Imp_Word.substr(6, Imp_Word.length);

      var Imp_Tmp = Imp_Word_Real_Str.split("|");  // Imp_Tmp is an Array 

      var imp_records_no = Imp_Tmp[0];

      var update_no = 0;

      var add_no = 0;

      var del_no = 0;

      for (i = 0; i < imp_records_no; i++) {

         var N_tmp = Imp_Tmp[3*i+1];  // name
         var D_tmp = Imp_Tmp[3*i+2];  // date
         var C_tmp = Imp_Tmp[3*i+3];  // content

         // Decrypt Content

         //var encryptedName = localStorage.MyNote;

         //var Key_input = document.getElementById("Key").value;

         //var decryptedName  = CryptoJS.AES.decrypt(encryptedName.toString(), Key_input); // secret key 123

         //var decryptedName_Str = decryptedName.toString(CryptoJS.enc.Utf8);

         var encryptedContent = C_tmp;

         var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

         var decryptedContent  = CryptoJS.AES.decrypt(encryptedContent.toString(), Key_input); 

         var decryptedContent_Str = decryptedContent.toString(CryptoJS.enc.Utf8);




         let Verse = await dbT2.ChapNote.get(N_tmp);

         if (Verse) {  // Exist so update

            //var content_tmp = C_tmp;

            var content_tmp = decryptedContent_Str;

            if (content_tmp == '' ) {
 
               dbT2.ChapNote.delete(N_tmp);

               del_no = del_no + 1;

            }
            else {
            
               dbT2.ChapNote.update(N_tmp, {content: content_tmp  });

               update_no = update_no + 1;

            }
         }
         else {  // Not Exist so Add new

            // Add new

            let name = N_tmp;
            let date = D_tmp;
            //let content = C_tmp;
            let content = decryptedContent_Str;


            try {

              dbT2.ChapNote.add({name,date, content});

              add_no = add_no + 1;

            } catch(err) {
              if (err.name == 'ConstraintError') {
                alert("Such Verse exists in DB already");
              } else {
                throw err;
              }
            }

            // End of Add new

          }


      }  // End of for (i = 0; i < imp_records_no; i++)


      var imp_mesg = 'ChapNote ' + update_no + ' updated, ' + add_no + ' added, ' + del_no + ' deleted.';

      myExp_Db_Display.innerHTML = imp_mesg;


   }  // End of if(Imp_Word!=''...// For Chap Note import


}

async function Exp_from_books_Test2Db() { // New for V5

  //let Verse = await dbT2.books.orderBy('date').reverse().limit(10).toArray(); // for test
  //let Verse_Count = 10;  // for test

  let Verse = await dbT2.books.toArray();

  var Verse_Count = Verse.length;

  if (Verse) {

     //var text = 'i!^_^,' + Verse_Count.toString() + ',';
     var text = 'i!^_^,' + Verse_Count.toString();

     for (i = 0; i < Verse.length; i++) {

        let name = Verse[i].name;
        let color_no = Verse[i].color_no;
        let book_no = Verse[i].book_no;
        let chap_no = Verse[i].chap_no;
        let vers_no = Verse[i].vers_no;
        let date = Verse[i].date;

        text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

     } // End of for (i = 0; i < Verse.length; i++)

     var mesg1 = 'ML ' + Verse_Count + ' exported'

     //Exp_to_books_Test2Db.value = mesg1;

     //myExp_Db_Display.innerHTML = text;
     //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
     //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

     document.getElementById("Imp_to_books_Test2Db").value = text;

     copyFunction5(mesg1);

     //myExp_Db_Display.innerHTML = "";


  } // End of if (Verse)

} // End of function Exp_from_books_Test2Db()


function copyFunction4(arg1) {

   //if(Note_Opened==1) {  // 1 means opened, 0 means close

      //document.getElementById("myExpVerse").value = arg1;

      // Copy to the clipboard
      //var copyText = document.getElementById("myExpVerse");
      var copyText = arg1;
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");

      //document.getElementById("myCopyVerse").value = VersHis[arg1] + ' copied.';  
      //document.getElementById("myCopyVerse").value = VersHis[arg1] + ' copied.';  //"Vers_history"


      //var vers_id = 'myV' + arg1.toString();

      //var tmp1_message = VersHis[arg1];
      //var tmp2_message = tmp1_message + ' copied.';
      var tmp3_message = 'Verse copied.';

      //var el = document.getElementById(vers_id);
      //var el = document.getElementById("myExp_Db_Display");  //"myExp_Db_Display"
      var el = document.getElementById("myExp_Db_Display");  //"myExp_Db_Display"

      tooltip(el,tmp3_message);


      //var vers_id = 'myV' + arg1.toString();                         // 原為 vers_id, 2020.1.11 改為 vers_id_1
                                                                       // 若改為 myV_1, 則不 work
      //select_all_and_copy(document.getElementById(vers_id),arg1);    // 原為 vers_id, 2020.1.11 改為 vers_id_1
      //select_all_and_copy(document.getElementById(vers_id));

   //}

   //select_all_and_copy(document.getElementById("Copy_Test"));

}  // End of function copyFunction4


function copyFunction5(arg1) {  // New for V5

      //var vers_id = 'myExp_Db_Display';
      //var copyText = document.getElementById(vers_id);
      //copyText.select();
      //document.execCommand("copy");

      select_all_and_copy_V2(document.getElementById("Imp_to_books_Test2Db"),arg1); // Imp_to_books_Test2Db

      //select_all_and_copy(document.getElementById("myExp_Db_Display"));

      //myExp_Db_Display.innerHTML = "";

} // End of function copyFunction5


function select_all_and_copy_V2(el,arg1)  {    // New for V5
                                              
    // Copy textarea, pre, div, etc.
            if (document.body.createTextRange) {
        // IE
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.select();
        textRange.execCommand("Copy");   
                        tooltip(el, "Copied!"); 
    }
            else if (window.getSelection && document.createRange) {
        // non-IE
        var editable = el.contentEditable; // Record contentEditable status of element
        var readOnly = el.readOnly; // Record readOnly status of element
            el.contentEditable = true; // iOS will only select text on non-form elements if contentEditable = true;
            el.readOnly = false; // iOS will not select in a read only form element
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range); // Does not work for Firefox if a textarea or input
        if (el.nodeName == "TEXTAREA" || el.nodeName == "INPUT")
            el.select(); // Firefox will only select a form element with select()
        if (el.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i))
            el.setSelectionRange(0, 999999); // iOS only selects "form" elements with SelectionRange
        el.contentEditable = editable; // Restore previous contentEditable status
        el.readOnly = readOnly; // Restore previous readOnly status
                if (document.queryCommandSupported("copy"))
                {
                                    var successful = document.execCommand('copy'); 
                            if (successful) {

                               //Exp_to_books_Test2Db.value = arg1;  // myExp_Db_Display

                               myExp_Db_Display.innerHTML = arg1;

                               //var tmp1_message = VersHis[arg1];
                               //var tmp2_message = tmp1_message + ' copied.';

                               //var e2 = document.getElementById("myCopyVerse_Display");  //add on 2020.01.12

                               //tooltip(e2, tmp2_message);    //add on 2020.01.12

                               //tooltip(el, tmp2_message);  // Mark on 2020.01.12


                               //var tmp3_message = "";
                               //var e2 = document.getElementById("myCopyVerse_Display");  //add on 2020.01.12
                               //tooltip2(e2, tmp3_message);    //add on 2020.01.12


                               //tooltip(el, "Copied to clipboard.");
                            }
                            else {
                               myExp_Db_Display.innerHTML = arg1;
                               //tooltip(el, "Press CTRL+C to copy");
                            }
                        }
                        else
                        {
                                    if (!navigator.userAgent.match(/ipad|ipod|iphone|android|silk/i))
                                                tooltip(el, "Press CTRL+C to copy");
                        }
    }
} // end function select_all_and_copy_V2(el) 


async function Exp_from_books_Test2Db_late_than() { // New for V6

  var Verse_Count = 0;

  var Late_than_date = document.getElementById("Exp_from_books_Test2Db_late_than_date").value;

  if(Late_than_date!='') {

     let Verse = await dbT2.books.where('date').above(Late_than_date).toArray();


     Verse_Count = Verse.length;

     if (Verse) {

        //var text = 'i!^_^,' + Verse_Count.toString() + ',';
        var text = 'i!^_^,' + Verse_Count.toString();

        for (i = 0; i < Verse.length; i++) {

           let name = Verse[i].name;
           let color_no = Verse[i].color_no;
           let book_no = Verse[i].book_no;
           let chap_no = Verse[i].chap_no;
           let vers_no = Verse[i].vers_no;
           let date = Verse[i].date;

           text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

        } // End of for (i = 0; i < Verse.length; i++)

        var mesg1 = 'ML ' + Verse_Count + ' exported'

        //Exp_to_books_Test2Db.value = mesg1;

        //myExp_Db_Display.innerHTML = text;
        //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
        //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

        document.getElementById("Imp_to_books_Test2Db").value = text;      

        //myExp_Db_Display_area.innerHTML = text;      // new for V6


        copyFunction5(mesg1);

        //myExp_Db_Display_area.innerHTML = "";


     } // End of if (Verse)


  }
  else {

     myExp_Db_Display.innerHTML = 'ML 0 exported';

  } // End of if(Late_than_date!='')

  //let Verse = await dbT2.books.where('date').above('20200301').toArray();  // 

  //let Verse = await dbT2.books.toArray();  // All



} // End of function Exp_from_books_Test2Db_late_than()


async function Exp_from_books_Test2Db_startWith() { // New for V6

  var Verse_Count = 0;

  var startWith_date = document.getElementById("Exp_from_books_Test2Db_startWith_date").value;

  if(startWith_date!='') {

     let Verse = await dbT2.books.where('date').startsWithIgnoreCase(startWith_date).toArray();


     Verse_Count = Verse.length;

     if (Verse) {

        //var text = 'i!^_^,' + Verse_Count.toString() + ',';
        var text = 'i!^_^,' + Verse_Count.toString();

        for (i = 0; i < Verse.length; i++) {

           let name = Verse[i].name;
           let color_no = Verse[i].color_no;
           let book_no = Verse[i].book_no;
           let chap_no = Verse[i].chap_no;
           let vers_no = Verse[i].vers_no;
           let date = Verse[i].date;

           text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

        } // End of for (i = 0; i < Verse.length; i++)

        var mesg1 = 'ML ' + Verse_Count + ' exported'

        //Exp_to_books_Test2Db.value = mesg1;

        //myExp_Db_Display.innerHTML = text;
        //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
        //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

        document.getElementById("Imp_to_books_Test2Db").value = text;      

        //myExp_Db_Display_area.innerHTML = text;      // new for V6


        copyFunction5(mesg1);

        //myExp_Db_Display_area.innerHTML = "";


     } // End of if (Verse)


  }
  else {

     myExp_Db_Display.innerHTML = 'ML 0 exported';

  } // End of if(Late_than_date!='')

  //let Verse = await dbT2.books.where('date').above('20200301').toArray();  // 

  //let Verse = await dbT2.books.toArray();  // All



} // End of function Exp_from_books_Test2Db_startWith()


function Open_Chap_Note() {  // New for V7

   //Note_Opened = 1; // 1 means opened, 0 means close

   //if(More_Mode==1) {  // More Mode

      document.getElementById("container6").style.height = "23%"; // 原為 25%, 21%, 22%

   //}
   //else if(Less_mode==1) { // Less Mode

   //   document.getElementById("container0").style.height = "35%"; // 原為 40%

   //}

}  // End of function Open_Chap_Note()

function Close_Chap_Note() {  // New for V7

   //Note_Opened = 0; // 1 means opened, 0 means close

   document.getElementById("container6").style.height = "0%";
   //efocus(); // add 20190430

   //Delete_Note_Item_No = 0;  // 0 means No Delete action, 1 means delete first item

   //document.getElementById("tool_area_10").style.visibility='hidden';

}  // End of function Close_Chap_Note()

async function Read_Chap_Note() {  // New for V7
              
   // Read-Only Mode

   var Book_tmp = nowbook + '_' + nowchapter;

   let Verse = await dbT2.ChapNote.get(Book_tmp);

   if (Verse) {

      var content = Verse.content;
      document.getElementById("Chap_Note_Textarea").value = content;

      document.getElementById("Chap_Note_Textarea").readOnly = true;

   }
   else {

      document.getElementById("Chap_Note_Textarea").value = '';

      document.getElementById("Chap_Note_Textarea").readOnly = true;

   }

}  // End of function Read_Chap_Note()


async function Edit_Chap_Note() {  // New for V7
              
   // Edit Mode

   var Book_tmp = nowbook + '_' + nowchapter;

   let Verse = await dbT2.ChapNote.get(Book_tmp);

   if (Verse) {

      var content = Verse.content;
      document.getElementById("Chap_Note_Textarea").value = content;

      document.getElementById("Chap_Note_Textarea").readOnly = false;

   }
   else {

      document.getElementById("Chap_Note_Textarea").value = '';

      document.getElementById("Chap_Note_Textarea").readOnly = false;

   }

}  // End of function Edit_Chap_Note()


async function Save_Chap_Note() {  // New for V7


   var Book_tmp = nowbook + '_' + nowchapter;

   let Verse = await dbT2.ChapNote.get(Book_tmp);

   if (Verse) {  // Exist so update

      // table.update(key, changes)
      // db.friends.update(2, {name: "Number 2"})

      var content_tmp = document.getElementById("Chap_Note_Textarea").value;

      if (content_tmp == '' ) {

         dbT2.ChapNote.delete(Book_tmp);

      }
      else {

         dbT2.ChapNote.update(Book_tmp, {content: content_tmp  });

      }

   }
   else {  // Not Exist so Add new

       // Add new

       let name = nowbook + '_' + nowchapter;
       let content = document.getElementById("Chap_Note_Textarea").value;
       let date = ML_Date();

       try {

         dbT2.ChapNote.add({name,date, content});

       } catch(err) {
         if (err.name == 'ConstraintError') {
           alert("Such Verse exists in DB already");
         } else {
           throw err;
         }
       }

       // End of Add new

   }


}  // End of function Save_Chap_Note()


async function Show_All_ChapNote_Only() {   // New for V7
                                  

   //Show_MLs_F = 1; // 1 means Show, 0 means Hide

   var text1;

   text1 = "All Chap Note<br>";

   var Book_ChapNote_Count = 0;


   for (i = 0; i < 66; i++) {

      var Book_tmp = i + '_';
      Book_ChapNote_Count = await dbT2.ChapNote.where('name').startsWithIgnoreCase(Book_tmp).count(); // New for V4
      //Book_Verse_Count = await db.books.where('name').startsWithIgnoreCase(Book_tmp).count();

      if(Book_ChapNote_Count>0) {

         var First_Verse = await dbT2.ChapNote.where('name').startsWithIgnoreCase(Book_tmp).first(); // New for V4
         //var First_Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp).first();

         var argN = First_Verse.name;

         var res = argN.split("_");

         var arg1 = res[0];  // tmp_book_no
         var arg2 = res[1];  // tmp_chap_no
         var arg3 = 1;  // tmp_vers_no
         var arg4 = 1;  // tmp_vers_no

         //var arg1 = First_Verse.book_no;
         //var arg2 = First_Verse.chap_no;
         //var arg3 = First_Verse.vers_no;
         //var arg4 = First_Verse.vers_no;

         var VH_Bname = BookAbbr4[i];

         var Book_Count_Str = VH_Bname + ' (' + Book_ChapNote_Count + ')';

         //var Book_Count_Str = VH_Bname + ' (' + Book_Verse_Count + ')' + '<br>';

         //text1 += Book_Count_Str;

         text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');Show_Book_ChapNote_Only();return false;">' + Book_Count_Str + '</a><br>';



         //VersML_B.push(arg1); 
         //VersML_C.push(arg2); 
         //VersML_V.push(arg3); 
         //VersML_T.push(arg4); 

      }
      else {  // no data


      }


   }  // End of for (i = 0; i < 66; i++)



    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Chap_Notes").innerHTML = text1;

    document.getElementById("Chap_Note_Textarea").value = '';

    document.getElementById("Chap_Note_Textarea").readOnly = true;

    //Read_Chap_Note();


}   // End of function Show_All_ChapNote_Only()


async function Show_Book_ChapNote_Only() {  // New for V7

   //var Book_Verse_Count = 0;

   var Book_tmp = nowbook + '_';

   //Book_Verse_Count = await dbT2.ChapNote.where('name').startsWithIgnoreCase(Book_tmp).count();

   let Verse = await dbT2.ChapNote.where('name').startsWithIgnoreCase(Book_tmp).toArray(); 

      if (Verse) {

         var text1;

         text1 = "Book Chap Note<br>";

         for (i = 0; i < Verse.length; i++) {

            //var tmp_book_no = Verse[i].book_no;
            //var tmp_chap_no = Verse[i].chap_no;
            //var tmp_vers_no = Verse[i].vers_no;

            var argN = Verse[i].name;

            var res = argN.split("_");

            //var str = "22_11";
            //var res = str.split("_");
            //document.getElementById("demo").innerHTML = res[1];            

            var arg1 = res[0];  // tmp_book_no
            var arg2 = res[1];  // tmp_chap_no
            var arg3 = 1;  // tmp_vers_no
            var arg4 = 1;  // tmp_vers_no

            var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
            var VH_Chap = Number(arg2) + 1;
            var VH_Vers = arg3;
            var VH_To_Vers = arg4;

            if(arg4>arg3)
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
            else
               var VH = VH_Bname + ' ' + VH_Chap ; 
               //var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

            text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');Read_Chap_Note();return false;">' + VH + '</a><br>';

         } // End of for (i = 0; i < Verse.length; i++)

      }
      else {

      }  // End of if (Verse)

    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Chap_Notes").innerHTML = text1;



}   // End of function Show_Book_ChapNote_Only()


function Hide_ChapNote_Only() {   // Show all items in Bookmark5 *** Only ***
                                   // Do Not Write all items to files ***

    //Show_MLs_F=0; // 1 means Show, 0 means Hide


   //if(Show_MLs_F==0 && Show_BookmarkNote_F==0 && Show_History_F==0 && Show_Bookmark_F==0 && Show_Bookmark1_F==0 && Show_Bookmark2_F==0 && Show_Bookmark3_F==0 && Show_Bookmark4_F==0 && Show_Bookmark5_F==0) { // 1 means Show, 0 means Hide

      //document.getElementById("His_Container").style.width = "0%";
      //document.getElementById("Bible_Container").style.width = "100%";

   //}

    document.getElementById("Chap_Notes").innerHTML = "";


}   // End of function Hide_ChapNote_Only()


async function Show_Recent_ChapNote_Only() {  // New for V7

  let Verse = await dbT2.ChapNote.orderBy('date').reverse().limit(30).toArray();  // order by chap_no, from big to small
                                                                                // Recent 30
      if (Verse) {

         var text1;

         text1 = "R30 Chap Note<br>";

         for (i = 0; i < Verse.length; i++) {

            var argN = Verse[i].name;

            var res = argN.split("_");

            //var str = "22_11";
            //var res = str.split("_");
            //document.getElementById("demo").innerHTML = res[1];  

            var arg1 = res[0];  // tmp_book_no
            var arg2 = res[1];  // tmp_chap_no
            var arg3 = 1;  // tmp_vers_no
            var arg4 = 1;  // tmp_vers_no

            var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
            var VH_Chap = Number(arg2) + 1;
            var VH_Vers = arg3;
            var VH_To_Vers = arg4;

            if(arg4>arg3)
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
            else
               var VH = VH_Bname + ' ' + VH_Chap ; 
               //var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

            text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');Read_Chap_Note();return false;">' + VH + '</a><br>';

         } // End of for (i = 0; i < Verse.length; i++)

      }
      else {

      }  // End of if (Verse)

    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Chap_Notes").innerHTML = text1;


}   // End of function Show_Recent_ChapNote_Only()


async function Exp_from_ChapNote_Test2Db_Old() { // New for V7 ,  Not in Use


  let Verse = await dbT2.ChapNote.toArray();

  var Verse_Count = Verse.length;

  if (Verse) {

     //var text = 'i!^_^,' + Verse_Count.toString();

     //var text = 'cn^_^,' + Verse_Count.toString();

     var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"


     for (i = 0; i < Verse.length; i++) {

        let name = Verse[i].name;
        let date = Verse[i].date;
        let content = Verse[i].content;

        text += '|' + name + '|' + date + '|' + content;  // change seprator to "|"

        //text += ',' + name + ',' + date + ',' + content;


     } // End of for (i = 0; i < Verse.length; i++)

     var mesg1 = 'ChapNote ' + Verse_Count + ' exported'

     //Exp_to_books_Test2Db.value = mesg1;

     //myExp_Db_Display.innerHTML = text;
     //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
     //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

     document.getElementById("Imp_to_books_Test2Db").value = text;

     copyFunction5(mesg1);

     //myExp_Db_Display.innerHTML = "";


  } // End of if (Verse)

} // End of function Exp_from_ChapNote_Test2Db_Old()


async function Exp_from_ChapNote_Test2Db() { // New for V7


  let Verse = await dbT2.ChapNote.toArray();

  var Verse_Count = Verse.length;

  if (Verse) {

     //var text = 'i!^_^,' + Verse_Count.toString();

     //var text = 'cn^_^,' + Verse_Count.toString();

     var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"


     for (i = 0; i < Verse.length; i++) {

        let name = Verse[i].name;
        let date = Verse[i].date;
        let content = Verse[i].content;

        // Encrypt Content then Exp

        //var Nametext_input = document.getElementById("MyNote_A1").value; 

        //var Key_input = document.getElementById("Key").value; 

        //var encryptedName = CryptoJS.AES.encrypt(Nametext_input, Key_input);

        var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

        var encryptedContent = CryptoJS.AES.encrypt(content, Key_input);

        //var encryptedName_Str = encryptedName.toString();

        //var encryptedContent_Str = encryptedContent.toString();


        text += '|' + name + '|' + date + '|' + encryptedContent;  // change seprator to "|"

        //text += '|' + name + '|' + date + '|' + content;  // change seprator to "|"

        //text += ',' + name + ',' + date + ',' + content;


     } // End of for (i = 0; i < Verse.length; i++)

     var mesg1 = 'ChapNote ' + Verse_Count + ' exported'

     //Exp_to_books_Test2Db.value = mesg1;

     //myExp_Db_Display.innerHTML = text;
     //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
     //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

     document.getElementById("Imp_to_books_Test2Db").value = text;

     copyFunction5(mesg1);

     //myExp_Db_Display.innerHTML = "";


  } // End of if (Verse)

} // End of function Exp_from_ChapNote_Test2Db()


async function Exp_from_ChapNote_Test2Db_late_than() { // New for V7

  var Verse_Count = 0;

  var Late_than_date = document.getElementById("Exp_from_ChapNote_Test2Db_late_than_date").value;

  if(Late_than_date!='') {

     let Verse = await dbT2.ChapNote.where('date').above(Late_than_date).toArray();


     Verse_Count = Verse.length;

     if (Verse) {

        //var text = 'i!^_^,' + Verse_Count.toString() + ',';
        //var text = 'i!^_^,' + Verse_Count.toString();

        var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"

        for (i = 0; i < Verse.length; i++) {

           let name = Verse[i].name;
           let date = Verse[i].date;
           let content = Verse[i].content;

           // Encrypt Content then Exp

           var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

           var encryptedContent = CryptoJS.AES.encrypt(content, Key_input);

           text += '|' + name + '|' + date + '|' + encryptedContent;  // change seprator to "|"

           //text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

        } // End of for (i = 0; i < Verse.length; i++)

        var mesg1 = 'ChapNote ' + Verse_Count + ' exported'

        //var mesg1 = 'ML ' + Verse_Count + ' exported'

        //Exp_to_books_Test2Db.value = mesg1;

        //myExp_Db_Display.innerHTML = text;
        //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
        //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

        document.getElementById("Imp_to_books_Test2Db").value = text;      

        //myExp_Db_Display_area.innerHTML = text;      // new for V6


        copyFunction5(mesg1);

        //myExp_Db_Display_area.innerHTML = "";


     } // End of if (Verse)


  }
  else {

     myExp_Db_Display.innerHTML = 'ChapNote 0 exported';

  } // End of if(Late_than_date!='')

  //let Verse = await dbT2.books.where('date').above('20200301').toArray();  // 

  //let Verse = await dbT2.books.toArray();  // All



} // End of function Exp_from_ChapNote_Test2Db_late_than()



async function Exp_from_ChapNote_Test2Db_startWith() { // New for V7

  var Verse_Count = 0;

  var startWith_date = document.getElementById("Exp_from_ChapNote_Test2Db_startWith_date").value;

  if(startWith_date!='') {

     let Verse = await dbT2.ChapNote.where('date').startsWithIgnoreCase(startWith_date).toArray();


     Verse_Count = Verse.length;

     if (Verse) {

        //var text = 'i!^_^,' + Verse_Count.toString() + ',';
        //var text = 'i!^_^,' + Verse_Count.toString();

        var text = 'cn^_^|' + Verse_Count.toString();  // change seprator to "|"

        for (i = 0; i < Verse.length; i++) {

           let name = Verse[i].name;
           let date = Verse[i].date;
           let content = Verse[i].content;

           // Encrypt Content then Exp

           var Key_input = '2020Chapter03Note15'; // for Encrypt and Decrypt Exp & Imp Chap Note

           var encryptedContent = CryptoJS.AES.encrypt(content, Key_input);

           text += '|' + name + '|' + date + '|' + encryptedContent;  // change seprator to "|"

           //text += ',' + book_no + ',' + chap_no + ',' + vers_no + ',' + date;

        } // End of for (i = 0; i < Verse.length; i++)

        var mesg1 = 'ChapNote ' + Verse_Count + ' exported'

        //var mesg1 = 'ML ' + Verse_Count + ' exported'

        //Exp_to_books_Test2Db.value = mesg1;

        //myExp_Db_Display.innerHTML = text;
        //Exp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db
        //Imp_to_books_Test2Db.value = text;  // Imp_to_books_Test2Db

        document.getElementById("Imp_to_books_Test2Db").value = text;      

        //myExp_Db_Display_area.innerHTML = text;      // new for V6


        copyFunction5(mesg1);

        //myExp_Db_Display_area.innerHTML = "";


     } // End of if (Verse)


  }
  else {

     myExp_Db_Display.innerHTML = 'ChapNote 0 exported';

  } // End of if(Late_than_date!='')

  //let Verse = await dbT2.books.where('date').above('20200301').toArray();  // 

  //let Verse = await dbT2.books.toArray();  // All



} // End of function Exp_from_ChapNote_Test2Db_startWith()


function ML_Date_V2() {  // New for V8

   var d = new Date();
   var Y = d.getFullYear();
   var M = d.getMonth() + 1;
   var D = d.getDate();
   var h = d.getHours();  // 0-23
   //var m = d.getMinutes();

   //var M_Str = M.toString();

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

   var Service_Code;

   if(h>18 && h<23) {
      Service_Code = 'E';  // evening
   }

   if(h>6 && h<12) {
      Service_Code = 'M';  // morning
   }

   if(h>11 && h<18) {
      Service_Code = 'A';  // afternoon
   }

   var Date_Str = Y.toString() + M.toString() + D.toString() + Service_Code ;

   return Date_Str; // 20200905M, 'E'-evening, 'M'-morning, 'A'-afternoon

}  // End of function ML_Date_V2()


// var for function Prepare_for_Roll_Call() 

var Read_for_Roll_Call = 'N'; // 'N' means need to run Prepare_for_Roll_Call()
                              // 'Y' means don't need to run Prepare_for_Roll_Call()

async function Prepare_for_Roll_Call() { // Prepare HTML for filling data for Roll_Call()

  let Verse_3 = await dbT2.Roll.toArray();

  if (Verse_3) {  // Prepare HTML for filling data

     var Rnum = 3001;  // Rnum
     var Rvers = 4001;  // EName
     var CName = 5001;  // CName

     var Roll_Call_Content_Str = '<table><tr>';

     var j=1;

     for (var i = 0; i < Verse_3.length ; i++) {

        var H_No_tmp = Verse_3[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1' || j==1) {

           var add_str1 = '</tr><tr>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=2;

        }
        else {

           var add_str1 = '<td></td><td></td><td></td><td></td><td></td>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=1;

        }



        //var '<tr><td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td></tr>';

        //Roll_Call_Content_Str = Roll_Call_Content_Str + 


        Rnum++;
        Rvers++;
        CName++;

         

     } // End of for (var i = 0; i < Verse_3.length ; i++)

     var Roll_Call_Content_Str = Roll_Call_Content_Str + '</tr></table>';

     document.getElementById("Roll_Call_Content").innerHTML = Roll_Call_Content_Str;

  }

  Read_for_Roll_Call = 'Y';


} // End of function Prepare_for_Roll_Call()


async function Prepare_for_Roll_Call_Search(arg1) { // Prepare HTML for filling data for Roll_Call_Search()

  //let Verse_3 = await dbT2.Roll.toArray();

  let Verse_3 = await dbT2.Roll.where('E_F_LName').startsWithIgnoreCase(arg1).toArray();

  if (Verse_3) {  // Prepare HTML for filling data

     var Rnum = 3001;  // Rnum
     var Rvers = 4001;  // EName
     var CName = 5001;  // CName

     var Roll_Call_Content_Str = '<table><tr>';

     var j=1;

     for (var i = 0; i < Verse_3.length ; i++) {

        var H_No_tmp = Verse_3[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1' || j==1) {

           var add_str1 = '</tr><tr>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=2;

        }
        else {

           var add_str1 = '<td></td><td></td><td></td><td></td><td></td>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=1;

        }



        //var '<tr><td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td></tr>';

        //Roll_Call_Content_Str = Roll_Call_Content_Str + 


        Rnum++;
        Rvers++;
        CName++;

         

     } // End of for (var i = 0; i < Verse_3.length ; i++)

     var Roll_Call_Content_Str = Roll_Call_Content_Str + '</tr></table>';

     document.getElementById("Roll_Call_Content").innerHTML = Roll_Call_Content_Str;

  }

  Read_for_Roll_Call = 'Y';


} // End of function Prepare_for_Roll_Call_Search(arg1)()


async function Roll_Call_Search(arg1) { // Search from English Family Last Name

  //var total_count = await dbT2.Roll.count();

  let Verse_3 = await dbT2.Roll.where('E_F_LName').startsWithIgnoreCase(arg1).toArray();

  
  Prepare_for_Roll_Call_Search(arg1);


  //if (Read_for_Roll_Call == 'N') {

    // Prepare_for_Roll_Call();

  //}

  if (Verse_3) {  // Fill data

     var Rnum = 3001;  // Rnum
     var Rvers = 4001;  // EName
     var CName = 5001;  // CName

     for (var i = 0; i < Verse_3.length ; i++) {

        // arg1: CNo, arg2: Member, arg3:Gender

        var arg1 = Verse_3[i].CNo;

        var arg2 = Verse_3[i].Member;

        var arg3 = Verse_3[i].Gender;

        var Result = await Check_Attendance(arg1,arg2,arg3);

        if (Result == 'y') {

           document.getElementById(Rvers).style.color = "blue";

        }
        else {

           document.getElementById(Rvers).style.color = "black";

        }


        //var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

        var Name_Str = Verse_3[i].F_Name + ' ' + Verse_3[i].L_Name + ' ';


       

        if (Verse_3[i].Member == 'T') {

           //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

           Name_Str = '*' + Verse_3[i].F_Name + ' ' + Verse_3[i].L_Name + ' ';

        }


        var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;


        var H_No_tmp = Verse_3[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           Name_Str = '<b><u>' + Name_Str + ' </u></b>';

           Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

        }


        //var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;



        var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        document.getElementById(Rnum++).innerHTML = Check_Str;

        document.getElementById(Rvers++).innerHTML =  Name_Str;

        document.getElementById(CName++).innerHTML =  Name_Str2;


     } // End of for (var i = 0; i < Verse_3.length ; i++)

           //document.getElementById(3012).innerHTML =  '';
           //document.getElementById(4012).innerHTML =  'total_count :' + total_count;
           //document.getElementById(5012).innerHTML =  'Verse_3.length : ' + Verse_3.length;

     //if ( Number(Verse_3.length) < Number(total_count) ) {

     //   var diff_tmp = total_count - Verse_3.length;

     //   var Rnum = 3001;  // Rnum
     //   var Rvers = 4001;  // EName
     //   var CName = 5001;  // CName

     //   for (var i = Verse_3.length; i < total_count ; i++) {

     //      document.getElementById(Rnum+i).innerHTML =  '';
     //      document.getElementById(Rvers+i).innerHTML =  '';
     //      document.getElementById(CName+i).innerHTML =  '';

     //   }

     //}  // End of if (Verse_3.length < total_count)



  }


}  // End of function Roll_Call_Search(arg1)



async function Roll_Call_Search_V1(argC,argC2) { // Search from English Family Last Name
                                                 // argC2: 'R' for Roll Call, 'P' for Phone Dir.

  //var total_count = await dbT2.Roll.count();

  //Prepare_for_Roll_Call_Search(arg1);

  // --------------------------------------------

   document.getElementById("content2").style.visibility='hidden'; // hidden , visible
   document.getElementById("content2").style.height = "0%";

   document.getElementById("content2_C").style.visibility='visible'; 
   document.getElementById("content2_C").style.height = "98%";       // 98% , 0%


  let Verse_31 = await dbT2.Roll.where('E_F_LName').startsWithIgnoreCase(argC).toArray();

  if (Verse_31) {  // Prepare HTML for filling data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     var Roll_Call_Content_Str = '<table><tr>';

     var j=1;

     for (var i = 0; i < Verse_31.length ; i++) {

        var H_No_tmp = Verse_31[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1' || j==1) {

           var add_str1 = '</tr><tr>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=2;

        }
        else {

           var add_str1 = '<td></td><td></td><td></td><td></td><td></td>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=1;

        }



        //var '<tr><td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td></tr>';

        //Roll_Call_Content_Str = Roll_Call_Content_Str + 


        Rnum++;
        Rvers++;
        CName++;

         

     } // End of for (var i = 0; i < Verse_31.length ; i++)

     var Roll_Call_Content_Str = Roll_Call_Content_Str + '</tr></table>';

     document.getElementById("Roll_Call_Content_C").innerHTML = Roll_Call_Content_Str;  // Roll_Call_Content

  }



  // --------------------------------------------

  let Verse_32 = await dbT2.Roll.where('E_F_LName').startsWithIgnoreCase(argC).toArray();

  if (Verse_32) {  // Fill data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     for (var i = 0; i < Verse_32.length ; i++) {

        // arg1: CNo, arg2: Member, arg3:Gender

        var arg1 = Verse_32[i].CNo;

        var arg2 = Verse_32[i].Member;

        var arg3 = Verse_32[i].Gender;

        var Result = await Check_Attendance(arg1,arg2,arg3);

        if (Result == 'y') {

           document.getElementById(Rvers).style.color = "blue";

        }
        else {

           document.getElementById(Rvers).style.color = "black";

        }


        //var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

        var Name_Str = Verse_32[i].F_Name + ' ' + Verse_32[i].L_Name + ' ';


       

        if (Verse_32[i].Member == 'T') {

           //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

           Name_Str = '*' + Verse_32[i].F_Name + ' ' + Verse_32[i].L_Name + ' ';

        }


        var Name_Str2 =  Verse_32[i].C_F_Name + Verse_32[i].C_L_Name;


        var H_No_tmp = Verse_32[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           Name_Str = '<b><u>' + Name_Str + ' </u></b>';

           Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

        }


        //var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;


        if (argC2 == 'R') {

           var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        }

        if (argC2 == 'P') {

           var Check_Str = '<button onClick="Show_People_Phone(\'' + arg1 + '\')"> P </button>';  // Using \' as an escape character

        }


        //var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        document.getElementById(Rnum++).innerHTML = Check_Str;

        document.getElementById(Rvers++).innerHTML =  Name_Str;

        document.getElementById(CName++).innerHTML =  Name_Str2;


     } // End of for (var i = 0; i < Verse_32.length ; i++)

           //document.getElementById(3012).innerHTML =  '';
           //document.getElementById(4012).innerHTML =  'total_count :' + total_count;
           //document.getElementById(5012).innerHTML =  'Verse_3.length : ' + Verse_3.length;

     //if ( Number(Verse_3.length) < Number(total_count) ) {

     //   var diff_tmp = total_count - Verse_3.length;

     //   var Rnum = 3001;  // Rnum
     //   var Rvers = 4001;  // EName
     //   var CName = 5001;  // CName

     //   for (var i = Verse_3.length; i < total_count ; i++) {

     //      document.getElementById(Rnum+i).innerHTML =  '';
     //      document.getElementById(Rvers+i).innerHTML =  '';
     //      document.getElementById(CName+i).innerHTML =  '';

     //   }

     //}  // End of if (Verse_3.length < total_count)



  }


}  // End of function Roll_Call_Search_V1(argC,argC2)



async function Roll_Call_Search_V3(argC,argC2) { // Search from Chinese Family First Name 姓
                                                 // argC2: 'R' for Roll Call, 'P' for Phone Dir.

  //var total_count = await dbT2.Roll.count();

  //Prepare_for_Roll_Call_Search(arg1);

  // --------------------------------------------


   document.getElementById("content2").style.visibility='hidden'; // hidden , visible
   document.getElementById("content2").style.height = "0%";

   document.getElementById("content2_C").style.visibility='visible'; 
   document.getElementById("content2_C").style.height = "98%";       // 98% , 0%


  let Verse_41 = await dbT2.Roll.where('C_F_FName').startsWithIgnoreCase(argC).toArray();

  if (Verse_41) {  // Prepare HTML for filling data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     var Roll_Call_Content_Str = '<table><tr>';

     var j=1;

     for (var i = 0; i < Verse_41.length ; i++) {

        var H_No_tmp = Verse_41[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1' || j==1) {

           var add_str1 = '</tr><tr>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=2;

        }
        else {

           var add_str1 = '<td></td><td></td><td></td><td></td><td></td>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=1;

        }



        //var '<tr><td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td></tr>';

        //Roll_Call_Content_Str = Roll_Call_Content_Str + 


        Rnum++;
        Rvers++;
        CName++;

         

     } // End of for (var i = 0; i < Verse_41.length ; i++)

     var Roll_Call_Content_Str = Roll_Call_Content_Str + '</tr></table>';

     document.getElementById("Roll_Call_Content_C").innerHTML = Roll_Call_Content_Str;

  }



  // --------------------------------------------

  let Verse_42 = await dbT2.Roll.where('C_F_FName').startsWithIgnoreCase(argC).toArray();

  if (Verse_42) {  // Fill data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     for (var i = 0; i < Verse_42.length ; i++) {

        // arg1: CNo, arg2: Member, arg3:Gender

        var arg1 = Verse_42[i].CNo;

        var arg2 = Verse_42[i].Member;

        var arg3 = Verse_42[i].Gender;

        var Result = await Check_Attendance(arg1,arg2,arg3);

        if (Result == 'y') {

           document.getElementById(Rvers).style.color = "blue";

        }
        else {

           document.getElementById(Rvers).style.color = "black";

        }


        //var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

        var Name_Str = Verse_42[i].F_Name + ' ' + Verse_42[i].L_Name + ' ';


       

        if (Verse_42[i].Member == 'T') {

           //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

           Name_Str = '*' + Verse_42[i].F_Name + ' ' + Verse_42[i].L_Name + ' ';

        }


        var Name_Str2 =  Verse_42[i].C_F_Name + Verse_42[i].C_L_Name;


        var H_No_tmp = Verse_42[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           Name_Str = '<b><u>' + Name_Str + ' </u></b>';

           Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

        }


        //var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;


        if (argC2 == 'R') {

           var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        }

        if (argC2 == 'P') {

           var Check_Str = '<button onClick="Show_People_Phone(\'' + arg1 + '\')"> P </button>';  // Using \' as an escape character

        }


        //var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        document.getElementById(Rnum++).innerHTML = Check_Str;

        document.getElementById(Rvers++).innerHTML =  Name_Str;

        document.getElementById(CName++).innerHTML =  Name_Str2;


     } // End of for (var i = 0; i < Verse_42.length ; i++)

           //document.getElementById(3012).innerHTML =  '';
           //document.getElementById(4012).innerHTML =  'total_count :' + total_count;
           //document.getElementById(5012).innerHTML =  'Verse_3.length : ' + Verse_3.length;

     //if ( Number(Verse_3.length) < Number(total_count) ) {

     //   var diff_tmp = total_count - Verse_3.length;

     //   var Rnum = 3001;  // Rnum
     //   var Rvers = 4001;  // EName
     //   var CName = 5001;  // CName

     //   for (var i = Verse_3.length; i < total_count ; i++) {

     //      document.getElementById(Rnum+i).innerHTML =  '';
     //      document.getElementById(Rvers+i).innerHTML =  '';
     //      document.getElementById(CName+i).innerHTML =  '';

     //   }

     //}  // End of if (Verse_3.length < total_count)



  }


}  // End of function Roll_Call_Search_V3(argC)



async function Roll_Call_Search_V2(arg1) { // Search from Chinese Family First Name 姓

  var total_count = await dbT2.Roll.count();

  let Verse_3 = await dbT2.Roll.where('C_F_FName').startsWithIgnoreCase(arg1).toArray();


  //let Verse = await dbT2.books.where('date').startsWithIgnoreCase(startWith_date).toArray();


  //if (Read_for_Roll_Call == 'N') {

     Prepare_for_Roll_Call();

  //}

  if (Verse_3) {  // Fill data

     var Rnum = 3001;  // Rnum
     var Rvers = 4001;  // EName
     var CName = 5001;  // CName

     for (var i = 0; i < Verse_3.length ; i++) {

        // arg1: CNo, arg2: Member, arg3:Gender

        var arg1 = Verse_3[i].CNo;

        var arg2 = Verse_3[i].Member;

        var arg3 = Verse_3[i].Gender;

        var Result = await Check_Attendance(arg1,arg2,arg3);

        if (Result == 'y') {

           document.getElementById(Rvers).style.color = "blue";

        }
        else {

           document.getElementById(Rvers).style.color = "black";

        }


        //var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

        var Name_Str = Verse_3[i].F_Name + ' ' + Verse_3[i].L_Name + ' ';


       

        if (Verse_3[i].Member == 'T') {

           //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

           Name_Str = '*' + Verse_3[i].F_Name + ' ' + Verse_3[i].L_Name + ' ';

        }


        var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;


        var H_No_tmp = Verse_3[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           Name_Str = '<b><u>' + Name_Str + ' </u></b>';

           Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

        }


        //var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;



        var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        document.getElementById(Rnum++).innerHTML = Check_Str;

        document.getElementById(Rvers++).innerHTML =  Name_Str;

        document.getElementById(CName++).innerHTML =  Name_Str2;


     } // End of for (var i = 0; i < Verse_3.length ; i++)

           //document.getElementById(3012).innerHTML =  '';
           //document.getElementById(4012).innerHTML =  'total_count :' + total_count;
           //document.getElementById(5012).innerHTML =  'Verse_3.length : ' + Verse_3.length;

     if ( Number(Verse_3.length) < Number(total_count) ) {

        var diff_tmp = total_count - Verse_3.length;

        var Rnum = 3001;  // Rnum
        var Rvers = 4001;  // EName
        var CName = 5001;  // CName

        for (var i = Verse_3.length; i < total_count ; i++) {

           document.getElementById(Rnum+i).innerHTML =  '';
           document.getElementById(Rvers+i).innerHTML =  '';
           document.getElementById(CName+i).innerHTML =  '';

        }

     }  // End of if (Verse_3.length < total_count)



  }


}  // End of function Roll_Call_Search_V2(arg1)



async function Roll_Call_V1(Arg) {  // Arg: 'R' for Roll Call, 'P' for Phone Dir.


  let Verse_3 = await dbT2.Roll.toArray();

  //let Verse = await dbT2.Attendance.reverse().toArray();

  //var DateStr = ML_Date_V2();


  if (Read_for_Roll_Call == 'N') {

     Prepare_for_Roll_Call();

  }

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


  if (Verse_3) {

     var Rnum = 3001;  // Rnum
     var Rvers = 4001;  // EName
     var CName = 5001;  // CName

     for (var i = 0; i < Verse_3.length ; i++) {

        // arg1: CNo, arg2: Member, arg3:Gender

        var arg1 = Verse_3[i].CNo;

        var arg2 = Verse_3[i].Member;

        var arg3 = Verse_3[i].Gender;

        var Result = await Check_Attendance(arg1,arg2,arg3);

        if (Result == 'y') {

           document.getElementById(Rvers).style.color = "blue";

        }
        else {

           document.getElementById(Rvers).style.color = "black";

        }


        var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

        //var Name_Str = Verse_3[i].F_Name + ' ' + Verse_3[i].L_Name + ' ';



        //if (arg1 == 1)
        //   var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

        //if (arg1 == '2')
        //   var Name_Str = Verse_3[i].F_Name + ' ' + Verse_3[i].L_Name + ' ';
        

        if (Verse_3[i].Member == 'T') {

           //Name_Str = '*' + Name_Str;

           Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

        }


        var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;


        var H_No_tmp = Verse_3[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           Name_Str = '<b><u>' + Name_Str + ' </u></b>';

           Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

        }
        //else {

        //   var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

        //}


        if (Arg == 'R') {

           var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        }

        if (Arg == 'P') {

           var Check_Str = '<button onClick="Show_People_Phone(\'' + arg1 + '\')"> P </button>';  // Using \' as an escape character

        }


        //var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        document.getElementById(Rnum++).innerHTML = Check_Str;

        document.getElementById(Rvers++).innerHTML =  Name_Str;

        document.getElementById(CName++).innerHTML =  Name_Str2;


     } // End of for (var i = 0; i < Verse_3.length ; i++)



  }


}  // End of function Roll_Call_V1()



async function Download_Attendance_StartWith() {

  var DateStr = document.getElementById("Download_Attendance_StartWith").value;

  if(DateStr!='') {

     //let Verse = await dbT2.SermonNote.where('Name').startsWithIgnoreCase(startWith_date).toArray();

     let Verse_3 = await dbT2.Roll.toArray();

     if (Verse_3) { 

        //var text = 'Sermon_Notes_Download = new Array("' + Verse_Count.toString() + '"';  

        var text = 'Name,Attendance,\n';  // ',\n"'

        for (var i = 0; i < Verse_3.length ; i++) {

           // arg1: CNo, arg2: Member, arg3:Gender

           var arg1 = Verse_3[i].CNo;

           var arg2 = Verse_3[i].Member;

           var arg3 = Verse_3[i].Gender;

           var Result = 'n';

           Result = await Check_Attendance3(arg1,arg2,arg3);

           var Name_Str = Verse_3[i].F_Name + ' ' + Verse_3[i].L_Name;

           if (Result == 'y') {

              text += Name_Str + ',' + 'V' + ',\n';

           }
           else {

              text += Name_Str + ',' + '' + ',\n';

           }

        } // End of for (var i = 0; i < Verse_3.length ; i++)

        //console.log(csv);
        console.log(text);
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(text);
        hiddenElement.target = '_blank';
        var Download_File_Name = DateStr + '_Attendance.csv';
        hiddenElement.download = Download_File_Name; // 
        hiddenElement.click();

     } // End of if (Verse_3)


  } // End of if(DateStr!='')



} // End of function Download_Attendance_StartWith()



async function Roll_Call_V2(Arg) {  // Arg: 'R' for Roll Call, 'P' for Phone Dir.


  let Verse_3 = await dbT2.Roll.toArray();

  //let Verse = await dbT2.Attendance.reverse().toArray();

  //var DateStr = ML_Date_V2();


  if (Read_for_Roll_Call == 'N') {

     Prepare_for_Roll_Call();

  }

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


  if (Verse_3) {  // Fill data

     var Rnum = 3001;  // Rnum
     var Rvers = 4001;  // EName
     var CName = 5001;  // CName

     for (var i = 0; i < Verse_3.length ; i++) {

        // arg1: CNo, arg2: Member, arg3:Gender

        var arg1 = Verse_3[i].CNo;

        var arg2 = Verse_3[i].Member;

        var arg3 = Verse_3[i].Gender;

        var Result = 'n';

        if (Arg == 'S') {

           Result = await Check_Attendance2(arg1,arg2,arg3);

        }
        else {

           Result = await Check_Attendance(arg1,arg2,arg3);

        }

        //var Result = await Check_Attendance(arg1,arg2,arg3);

        if (Result == 'y') {

           document.getElementById(Rvers).style.color = "blue";

        }
        else {

           document.getElementById(Rvers).style.color = "black";

        }


        //var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

        var Name_Str = Verse_3[i].F_Name + ' ' + Verse_3[i].L_Name + ' ';


       

        if (Verse_3[i].Member == 'T') {

           //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

           Name_Str = '*' + Verse_3[i].F_Name + ' ' + Verse_3[i].L_Name + ' ';

        }


        var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;


        var H_No_tmp = Verse_3[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           Name_Str = '<b><u>' + Name_Str + ' </u></b>';

           Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

        }


        //var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;


        if (Arg == 'R') {  // Arg: 'R' for Roll Call, 'P' for Phone Dir.

           var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        }

        if (Arg == 'P') {  // Arg: 'R' for Roll Call, 'P' for Phone Dir.

           var Check_Str = '<button onClick="Show_People_Phone_V2(\'' + arg1 + '\')"> P </button>';  // Using \' as an escape character

        }

        if (Arg == 'S') {  // Arg: 'S' for show history attendance

           var Check_Str = '';

        }



        //var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        document.getElementById(Rnum++).innerHTML = Check_Str;

        document.getElementById(Rvers++).innerHTML =  Name_Str;

        document.getElementById(CName++).innerHTML =  Name_Str2;


     } // End of for (var i = 0; i < Verse_3.length ; i++)



  }


}  // End of function Roll_Call_V2()



async function Roll_Call_UPC() {  // Arg: 'R' for Roll Call, 'P' for Phone Dir.


  //var kindy_member = new Array(93,102,95); // 93 Hazel Chen

  var UPC_member = new Array(146,106,251,72,168,24,125,16,52,137,98,42,15,109,244,38,76,11,49,51,97,139); 

 
  //      table.where(indexOrPrimKey).anyOf(array)
  //      table.where(indexOrPrimKey).anyOf(key1, key2, keyN, ...)
 

  //let Verse_3 = await dbT2.Roll.where('CNo').anyOf(kindy_member).toArray();


  //let Verse_3 = await dbT2.Roll.toArray();


     Prepare_for_Roll_Call();


   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName


     for (var i = 0; i < UPC_member.length ; i++) {

     //for (var i = 0; i < 3 ; i++) {

        //var CNo_tmp = kindy_member[i]; // new Array(95,102,93)

        var CNo_tmp = UPC_member[i]; // new Array(93,102,95)


        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           Result = await Check_Attendance(arg1,arg2,arg3);

           if (Result == 'y') {

              document.getElementById(Rvers).style.color = "blue";

           }
           else {

              document.getElementById(Rvers).style.color = "black";

           }  

           var Name_Str = Verse_3[0].F_Name + ' ' + Verse_3[0].L_Name + ' ';   
 

           if (Verse_3[0].Member == 'T') {

              //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

              Name_Str = '*' + Verse_3[0].F_Name + ' ' + Verse_3[0].L_Name + ' ';

           }


           var Name_Str2 =  Verse_3[0].C_F_Name + Verse_3[0].C_L_Name;


           var H_No_tmp = Verse_3[0].H_No;        // 1_2
           var H_No_tmp2 = H_No_tmp.split("_");   
           var H_No_tmp3 = H_No_tmp2[1];          // 2


           if (H_No_tmp3 == '1') {

              Name_Str = '<b><u>' + Name_Str + ' </u></b>';

              Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

           }


           var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character


           document.getElementById(Rnum++).innerHTML = Check_Str;

           document.getElementById(Rvers++).innerHTML =  Name_Str;

           document.getElementById(CName++).innerHTML =  Name_Str2;


        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_member.length ; i++)


}  // End of function Roll_Call_UPC()



async function Roll_Call_LPC() {  // Arg: 'R' for Roll Call, 'P' for Phone Dir.


  //var kindy_member = new Array(93,102,95); // 93 Hazel Chen

  var LPC_member = new Array(53,147,79,176,73,94,99,175,122,138,252,88,182,29,60,44,186,121,181,166,37); 

 
  //      table.where(indexOrPrimKey).anyOf(array)
  //      table.where(indexOrPrimKey).anyOf(key1, key2, keyN, ...)
 

  //let Verse_3 = await dbT2.Roll.where('CNo').anyOf(kindy_member).toArray();


  //let Verse_3 = await dbT2.Roll.toArray();


     Prepare_for_Roll_Call();


   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName


     for (var i = 0; i < LPC_member.length ; i++) {

     //for (var i = 0; i < 3 ; i++) {

        //var CNo_tmp = kindy_member[i]; // new Array(95,102,93)

        var CNo_tmp = LPC_member[i]; // new Array(93,102,95)


        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           Result = await Check_Attendance(arg1,arg2,arg3);

           if (Result == 'y') {

              document.getElementById(Rvers).style.color = "blue";

           }
           else {

              document.getElementById(Rvers).style.color = "black";

           }  

           var Name_Str = Verse_3[0].F_Name + ' ' + Verse_3[0].L_Name + ' ';   
 

           if (Verse_3[0].Member == 'T') {

              //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

              Name_Str = '*' + Verse_3[0].F_Name + ' ' + Verse_3[0].L_Name + ' ';

           }


           var Name_Str2 =  Verse_3[0].C_F_Name + Verse_3[0].C_L_Name;


           var H_No_tmp = Verse_3[0].H_No;        // 1_2
           var H_No_tmp2 = H_No_tmp.split("_");   
           var H_No_tmp3 = H_No_tmp2[1];          // 2


           if (H_No_tmp3 == '1') {

              Name_Str = '<b><u>' + Name_Str + ' </u></b>';

              Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

           }


           var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character


           document.getElementById(Rnum++).innerHTML = Check_Str;

           document.getElementById(Rvers++).innerHTML =  Name_Str;

           document.getElementById(CName++).innerHTML =  Name_Str2;


        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_member.length ; i++)


}  // End of function Roll_Call_LPC()



async function Roll_Call_Kindy() {  // Arg: 'R' for Roll Call, 'P' for Phone Dir.


  //var kindy_member = new Array(93,102,95); // 93 Hazel Chen

  var kindy_member = new Array(253,183,95,102,156,145,18,85,93); 
                                           // 93 Hazel Chen
                                           // 95  Chloe Huang
                                           // 102 Anabella Liang
                                           // 183 Madeleine Shaw 邵予晨

 
  //      table.where(indexOrPrimKey).anyOf(array)
  //      table.where(indexOrPrimKey).anyOf(key1, key2, keyN, ...)
 

  //let Verse_3 = await dbT2.Roll.where('CNo').anyOf(kindy_member).toArray();


  //let Verse_3 = await dbT2.Roll.toArray();


     Prepare_for_Roll_Call();


   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


   var Rnum = 3001;  // Rnum
   var Rvers = 4001;  // EName
   var CName = 5001;  // CName


     for (var i = 0; i < kindy_member.length ; i++) {

     //for (var i = 0; i < 3 ; i++) {

        //var CNo_tmp = kindy_member[i]; // new Array(95,102,93)

        var CNo_tmp = kindy_member[i]; // new Array(93,102,95)


        var Verse_3 = await dbT2.Roll.where('CNo').equals(CNo_tmp).toArray();

        if (Verse_3.length) {  // Fill data

           var arg1 = Verse_3[0].CNo;

           var arg2 = Verse_3[0].Member;

           var arg3 = Verse_3[0].Gender;  

           Result = await Check_Attendance(arg1,arg2,arg3);

           if (Result == 'y') {

              document.getElementById(Rvers).style.color = "blue";

           }
           else {

              document.getElementById(Rvers).style.color = "black";

           }  

           var Name_Str = Verse_3[0].F_Name + ' ' + Verse_3[0].L_Name + ' ';   
 

           if (Verse_3[0].Member == 'T') {

              //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

              Name_Str = '*' + Verse_3[0].F_Name + ' ' + Verse_3[0].L_Name + ' ';

           }


           var Name_Str2 =  Verse_3[0].C_F_Name + Verse_3[0].C_L_Name;


           var H_No_tmp = Verse_3[0].H_No;        // 1_2
           var H_No_tmp2 = H_No_tmp.split("_");   
           var H_No_tmp3 = H_No_tmp2[1];          // 2


           if (H_No_tmp3 == '1') {

              Name_Str = '<b><u>' + Name_Str + ' </u></b>';

              Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

           }


           var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character


           document.getElementById(Rnum++).innerHTML = Check_Str;

           document.getElementById(Rvers++).innerHTML =  Name_Str;

           document.getElementById(CName++).innerHTML =  Name_Str2;


        } // End of if (Verse_3)


     } // End of for (var i = 0; i < kindy_member.length ; i++)


}  // End of function Roll_Call_Kindy()




async function Roll_Call_Kindy_Old() {  // Arg: 'R' for Roll Call, 'P' for Phone Dir.


  var kindy_member = new Array(95,102,93); // 93 Hazel Chen
                                           // 95  Chloe Huang
                                           // 102 Anabella Liang
                                           // 183 Madeleine Shaw 邵予晨

 
  //      table.where(indexOrPrimKey).anyOf(array)
  //      table.where(indexOrPrimKey).anyOf(key1, key2, keyN, ...)
 

  let Verse_3 = await dbT2.Roll.where('CNo').anyOf(kindy_member).toArray();


  //let Verse_3 = await dbT2.Roll.toArray();


  //let Verse = await dbT2.Attendance.reverse().toArray();

  //var DateStr = ML_Date_V2();


  //if (Read_for_Roll_Call == 'N') {

     Prepare_for_Roll_Call();

  //}

   document.getElementById("content2").style.visibility='visible'; // hide
   document.getElementById("content2").style.height = "98%";

   document.getElementById("content2_C").style.visibility='hidden'; // hide
   document.getElementById("content2_C").style.height = "0%";


  if (Verse_3) {  // Fill data

     var Rnum = 3001;  // Rnum
     var Rvers = 4001;  // EName
     var CName = 5001;  // CName

     for (var i = 0; i < Verse_3.length ; i++) {

        // arg1: CNo, arg2: Member, arg3:Gender

        var arg1 = Verse_3[i].CNo;

        var arg2 = Verse_3[i].Member;

        var arg3 = Verse_3[i].Gender;

        var Result = 'n';

        //if (Arg == 'S') {

        //   Result = await Check_Attendance2(arg1,arg2,arg3);

        //}
        //else {

           Result = await Check_Attendance(arg1,arg2,arg3);

        //}

        //var Result = await Check_Attendance(arg1,arg2,arg3);

        if (Result == 'y') {

           document.getElementById(Rvers).style.color = "blue";

        }
        else {

           document.getElementById(Rvers).style.color = "black";

        }


        //var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

        var Name_Str = Verse_3[i].F_Name + ' ' + Verse_3[i].L_Name + ' ';


       

        if (Verse_3[i].Member == 'T') {

           //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

           Name_Str = '*' + Verse_3[i].F_Name + ' ' + Verse_3[i].L_Name + ' ';

        }


        var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;


        var H_No_tmp = Verse_3[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           Name_Str = '<b><u>' + Name_Str + ' </u></b>';

           Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

        }


        //var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;


        //if (Arg == 'R') {  // Arg: 'R' for Roll Call, 'P' for Phone Dir.

           var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        //}

        //if (Arg == 'P') {  // Arg: 'R' for Roll Call, 'P' for Phone Dir.

        //   var Check_Str = '<button onClick="Show_People_Phone_V2(\'' + arg1 + '\')"> P </button>';  // Using \' as an escape character

        //}

        //if (Arg == 'S') {  // Arg: 'S' for show history attendance

        //   var Check_Str = '';

        //}



        //var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        document.getElementById(Rnum++).innerHTML = Check_Str;

        document.getElementById(Rvers++).innerHTML =  Name_Str;

        document.getElementById(CName++).innerHTML =  Name_Str2;


     } // End of for (var i = 0; i < Verse_3.length ; i++)



  }


}  // End of function Roll_Call_Kindy_Old()


async function Show_People_Phone(arg1) {

  //let Verse = await dbT2.Congregation2.where('H_No').equals(H_No_tmp).toArray();

  var CNo_tmp99 = Number(arg1);

  let Verse_P = await dbT2.Congregation4.where('CNo').equals(CNo_tmp99).toArray();

  var Name_Str = Verse_P[0].L_Name + ',' + Verse_P[0].F_Name + ' ';  

  var Name_Str2 =  Verse_P[0].C_F_Name + Verse_P[0].C_L_Name + ' ';

  if (Verse_P[0].Tel) {

     var Tel_Str = 'Tel:' + Verse_P[0].Tel + ' ';

  }
  else {

     var Tel_Str = 'Tel: ';

  }

  if (Verse_P[0].Mob) {

     var Mob_Str = 'Mob:' + Verse_P[0].Mob + ' ';

  }
  else {

     var Mob_Str = 'Mob: ';

  }

  var People_Phone_Str = 'CNo:' + arg1 + ' ' + Name_Str + Name_Str2 + Tel_Str + Mob_Str;

  document.getElementById("Phone_Dir_Content").style.color = "blue";

  document.getElementById("Phone_Dir_Content").innerHTML = People_Phone_Str;



} // End of Show_People_Phone(arg1)


async function Show_People_Phone_V2(arg1) {

  //let Verse = await dbT2.Congregation2.where('H_No').equals(H_No_tmp).toArray();

  var CNo_tmp99 = Number(arg1);

  let Verse_P = await dbT2.Congregation4.where('CNo').equals(CNo_tmp99).toArray();

  var Name_Str = Verse_P[0].F_Name + ' ' + Verse_P[0].L_Name + ' ';  

  //var Name_Str = Verse_P[0].L_Name + ',' + Verse_P[0].F_Name + ' ';  

  var Name_Str2 =  Verse_P[0].C_F_Name + Verse_P[0].C_L_Name + ' ';

  if (Verse_P[0].Tel) {

     var Tel_Str = 'Tel:' + Verse_P[0].Tel + ' ';

  }
  else {

     var Tel_Str = 'Tel: ';

  }

  if (Verse_P[0].Mob) {

     var Mob_Str = 'Mob:' + Verse_P[0].Mob + ' ';

  }
  else {

     var Mob_Str = 'Mob: ';

  }

  var People_Phone_Str = 'CNo:' + arg1 + ' ' + Name_Str + Name_Str2 + Tel_Str + Mob_Str;

  document.getElementById("Phone_Dir_Content").style.color = "blue";

  document.getElementById("Phone_Dir_Content").innerHTML = People_Phone_Str;


} // End of Show_People_Phone_V2(arg1)



async function Search_Phone_from_F_Name() { // Search from First Name

  //Roll_Call_Search_V3(argC)

  //Search_Phone_from_F_Name()

  //var total_count = await dbT2.Roll.count();

  //Prepare_for_Roll_Call_Search(arg1);

  // --------------------------------------------


   document.getElementById("content2").style.visibility='hidden'; // hidden , visible
   document.getElementById("content2").style.height = "0%";

   document.getElementById("content2_C").style.visibility='visible'; 
   document.getElementById("content2_C").style.height = "98%";       // 98% , 0%


  var Search_FName_tmp = document.getElementById("Search_fname1").value ; // id="Search_fname1"


  let Verse_51 = await dbT2.Roll.where('F_Name').startsWithIgnoreCase(Search_FName_tmp).toArray();

  if (Verse_51) {  // Prepare HTML for filling data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     var Roll_Call_Content_Str = '<table><tr>';

     var j=1;

     for (var i = 0; i < Verse_51.length ; i++) {

        var H_No_tmp = Verse_51[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1' || j==1) {

           var add_str1 = '</tr><tr>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=2;

        }
        else {

           var add_str1 = '<td></td><td></td><td></td><td></td><td></td>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=1;

        }



        //var '<tr><td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td></tr>';

        //Roll_Call_Content_Str = Roll_Call_Content_Str + 


        Rnum++;
        Rvers++;
        CName++;

         

     } // End of for (var i = 0; i < Verse_41.length ; i++)

     var Roll_Call_Content_Str = Roll_Call_Content_Str + '</tr></table>';

     document.getElementById("Roll_Call_Content_C").innerHTML = Roll_Call_Content_Str;

  }



  // --------------------------------------------

  //let Verse_42 = await dbT2.Roll.where('C_F_FName').startsWithIgnoreCase(argC).toArray();

  if (Verse_51) {  // Fill data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     for (var i = 0; i < Verse_51.length ; i++) {

        // arg1: CNo, arg2: Member, arg3:Gender

        var arg1 = Verse_51[i].CNo;

        var arg2 = Verse_51[i].Member;

        var arg3 = Verse_51[i].Gender;

        var Result = await Check_Attendance(arg1,arg2,arg3);

        if (Result == 'y') {

           document.getElementById(Rvers).style.color = "blue";

        }
        else {

           document.getElementById(Rvers).style.color = "black";

        }


        //var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

        var Name_Str = Verse_51[i].F_Name + ' ' + Verse_51[i].L_Name + ' ';


       

        if (Verse_51[i].Member == 'T') {

           //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

           Name_Str = '*' + Verse_51[i].F_Name + ' ' + Verse_51[i].L_Name + ' ';

        }


        var Name_Str2 =  Verse_51[i].C_F_Name + Verse_51[i].C_L_Name;


        var H_No_tmp = Verse_51[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           Name_Str = '<b><u>' + Name_Str + ' </u></b>';

           Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

        }


        //var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;



        //var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        var Check_Str = '<button onClick="Show_People_Phone_V2(\'' + arg1 + '\')"> P </button>';  // Using \' as an escape character



        document.getElementById(Rnum++).innerHTML = Check_Str;

        document.getElementById(Rvers++).innerHTML =  Name_Str;

        document.getElementById(CName++).innerHTML =  Name_Str2;


     } // End of for (var i = 0; i < Verse_42.length ; i++)



  }


}  // End of function Search_Phone_from_F_Name()

// Search_Person_from_Mob()


async function Search_Person_from_Mob() { // Search from Mobile

  var Search_Mob_tmp = document.getElementById("Search_Mob").value ; // id="Search_Mob"


  let Verse_61 = await dbT2.Congregation4.where('Mob').equals(Search_Mob_tmp).toArray();

  if (Verse_61.length && Verse_61[0].Mob != '') {  // Prepare HTML for filling data

     var Name_Str = Verse_61[0].F_Name + ' ' + Verse_61[0].L_Name + ' ';  

     var Name_Str2 =  Verse_61[0].C_F_Name + Verse_61[0].C_L_Name + ' ';

     if (Verse_61[0].Tel) {

        var Tel_Str = 'Tel:' + Verse_61[0].Tel + ' ';

     }
     else {

        var Tel_Str = 'Tel: ';

     }

     if (Verse_61[0].Mob) {

        var Mob_Str = 'Mob:' + Verse_61[0].Mob + ' ';

     }
     else {

        var Mob_Str = 'Mob: ';

     }

     var CNo_tmp = Verse_61[0].CNo;

     var People_Phone_Str = 'CNo:' + CNo_tmp + ' ' + Name_Str + Name_Str2 + Tel_Str + Mob_Str;

     document.getElementById("Phone_Dir_Content").style.color = "blue";

     document.getElementById("Phone_Dir_Content").innerHTML = People_Phone_Str;

  }
  else {

     var People_Phone_Str = 'No Data';

     document.getElementById("Phone_Dir_Content").style.color = "blue";

     document.getElementById("Phone_Dir_Content").innerHTML = People_Phone_Str;

  } // End of if (Verse_61)

} // End of function Search_Person_from_Mob()  // for test 0491212546  0732657466



//Search_Person_from_Tel()


async function Search_Person_from_Tel() { // Search from Tel

  var Search_Tel_tmp = document.getElementById("Search_Tel").value ; // id="Search_Tel"


  let Verse_71 = await dbT2.Congregation4.where('Tel').equals(Search_Tel_tmp).toArray();

  if (Verse_71.length && Verse_71[0].Tel != '') {  // 

     var Name_Str = Verse_71[0].F_Name + ' ' + Verse_71[0].L_Name + ' ';  

     var Name_Str2 =  Verse_71[0].C_F_Name + Verse_71[0].C_L_Name + ' ';

     if (Verse_71[0].Tel) {

        var Tel_Str = 'Tel:' + Verse_71[0].Tel + ' ';

     }
     else {

        var Tel_Str = 'Tel: ';

     }

     if (Verse_71[0].Mob) {

        var Mob_Str = 'Mob:' + Verse_71[0].Mob + ' ';

     }
     else {

        var Mob_Str = 'Mob: ';

     }

     var CNo_tmp = Verse_71[0].CNo;

     var People_Phone_Str = 'CNo:' + CNo_tmp + ' ' + Name_Str + Name_Str2 + Tel_Str + Mob_Str;

     document.getElementById("Phone_Dir_Content").style.color = "blue";

     document.getElementById("Phone_Dir_Content").innerHTML = People_Phone_Str;

  }
  else {

     var People_Phone_Str = 'No Data';

     document.getElementById("Phone_Dir_Content").style.color = "blue";

     document.getElementById("Phone_Dir_Content").innerHTML = People_Phone_Str;

  } // End of if (Verse_71)

} // End of function Search_Person_from_Tel()  // for test 0491212546  0732657466



async function Search_Family_from_H_No(argH) { // Search from H_No , ex: ('4_')
                                               // Search Family members by H_No StartWith (ex: 4_ )

   document.getElementById("content2").style.visibility='hidden'; // hidden , visible
   document.getElementById("content2").style.height = "0%";

   document.getElementById("content2_C").style.visibility='visible'; 
   document.getElementById("content2_C").style.height = "98%";       // 98% , 0%

  let Verse_331 = await dbT2.Roll.where('H_No').startsWithIgnoreCase(argH).toArray();

  if (Verse_331) {  // Prepare HTML for filling data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     var Roll_Call_Content_Str = '<table><tr>';

     var j=1;

     for (var i = 0; i < Verse_331.length ; i++) {

        var H_No_tmp = Verse_331[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1' || j==1) {

           var add_str1 = '</tr><tr>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=2;

        }
        else {

           var add_str1 = '<td></td><td></td><td></td><td></td><td></td>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=1;

        }



        //var '<tr><td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td></tr>';

        //Roll_Call_Content_Str = Roll_Call_Content_Str + 


        Rnum++;
        Rvers++;
        CName++;

         

     } // End of for (var i = 0; i < Verse_331.length ; i++)

     var Roll_Call_Content_Str = Roll_Call_Content_Str + '</tr></table>';

     document.getElementById("Roll_Call_Content_C").innerHTML = Roll_Call_Content_Str;  // Roll_Call_Content

  }

  // --------------------------------------------

  let Verse_332 = await dbT2.Roll.where('H_No').startsWithIgnoreCase(argH).toArray();

  if (Verse_332) {  // Fill data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     for (var i = 0; i < Verse_332.length ; i++) {

        // arg1: CNo, arg2: Member, arg3:Gender

        var arg1 = Verse_332[i].CNo;

        var arg2 = Verse_332[i].Member;

        var arg3 = Verse_332[i].Gender;

        var Result = await Check_Attendance(arg1,arg2,arg3);

        if (Result == 'y') {

           document.getElementById(Rvers).style.color = "blue";

        }
        else {

           document.getElementById(Rvers).style.color = "black";

        }


        //var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

        var Name_Str = Verse_332[i].F_Name + ' ' + Verse_332[i].L_Name + ' ';


       

        if (Verse_332[i].Member == 'T') {

           //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

           Name_Str = '*' + Verse_332[i].F_Name + ' ' + Verse_332[i].L_Name + ' ';

        }


        var Name_Str2 =  Verse_332[i].C_F_Name + Verse_332[i].C_L_Name;


        var H_No_tmp = Verse_332[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           Name_Str = '<b><u>' + Name_Str + ' </u></b>';

           Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

        }


        //var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;


        //if (argC2 == 'R') {

           var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        //}

        //if (argC2 == 'P') {

        //   var Check_Str = '<button onClick="Show_People_Phone(\'' + arg1 + '\')"> P </button>';  // Using \' as an escape character

        //}


        //var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        document.getElementById(Rnum++).innerHTML = Check_Str;

        document.getElementById(Rvers++).innerHTML =  Name_Str;

        document.getElementById(CName++).innerHTML =  Name_Str2;


     } // End of for (var i = 0; i < Verse_332.length ; i++)

           //document.getElementById(3012).innerHTML =  '';
           //document.getElementById(4012).innerHTML =  'total_count :' + total_count;
           //document.getElementById(5012).innerHTML =  'Verse_3.length : ' + Verse_3.length;

     //if ( Number(Verse_3.length) < Number(total_count) ) {

     //   var diff_tmp = total_count - Verse_3.length;

     //   var Rnum = 3001;  // Rnum
     //   var Rvers = 4001;  // EName
     //   var CName = 5001;  // CName

     //   for (var i = Verse_3.length; i < total_count ; i++) {

     //      document.getElementById(Rnum+i).innerHTML =  '';
     //      document.getElementById(Rvers+i).innerHTML =  '';
     //      document.getElementById(CName+i).innerHTML =  '';

     //   }

     //}  // End of if (Verse_3.length < total_count)



  }



} // End of function Search_Family_from_H_No()


async function Search_Person_from_F_Name_V3() { // Search from First Name


  // --------------------------------------------


   document.getElementById("content2").style.visibility='hidden'; // hidden , visible
   document.getElementById("content2").style.height = "0%";

   document.getElementById("content2_C").style.visibility='visible'; 
   document.getElementById("content2_C").style.height = "98%";       // 98% , 0%

   //document.getElementById("content2_C").style.fontSize = "10pt";  // 50%
   //document.getElementById("Roll_Call_Content_C").style.fontSize = "10pt"; 


  //var Search_FName_tmp = document.getElementById("Search_fname2").value ; // id="Search_fname2"


  var Search_FName_tmp = '' ; // id="Search_fname2"


  let Verse_81 = await dbT2.Roll.where('F_Name').startsWithIgnoreCase(Search_FName_tmp).toArray();

  if (Verse_81) {  // Prepare HTML for filling data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     var Roll_Call_Content_Str = '<table><tr>';

     //var Roll_Call_Content_Str = '<table style="font-size:60%"><tr>';

     var j=1;

     for (var i = 0; i < Verse_81.length ; i++) {

        var H_No_tmp = Verse_81[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1' || j==1) {

           var add_str1 = '</tr><tr>';

           //if (Search_FName_tmp == 'ALL') {

              var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div style=\"font-size:180%\" id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           //}
           //else {

           //   var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           //}

           //var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           //var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div style=\"font-size:180%\" id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';


           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=2;

        }
        else {

           var add_str1 = '<td></td><td></td><td></td><td></td><td></td>';

           //if (Search_FName_tmp == 'ALL') {

              var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div style=\"font-size:180%\" id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           //}
           //else {

           //   var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           //}

           //var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           //var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div style=\"font-size:180%\" id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';


           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=1;

        }



        //var '<tr><td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td></tr>';

        //Roll_Call_Content_Str = Roll_Call_Content_Str + 


        Rnum++;
        Rvers++;
        CName++;

         

     } // End of for (var i = 0; i < Verse_81.length ; i++)

     var Roll_Call_Content_Str = Roll_Call_Content_Str + '</tr></table>';

     document.getElementById("Roll_Call_Content_C").innerHTML = Roll_Call_Content_Str;

  }



  // --------------------------------------------

  //let Verse_42 = await dbT2.Roll.where('C_F_FName').startsWithIgnoreCase(argC).toArray();

  if (Verse_81) {  // Fill data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     for (var i = 0; i < Verse_81.length ; i++) {

        // arg1: CNo, arg2: Member, arg3:Gender

        var arg1 = Verse_81[i].CNo;

        var arg2 = Verse_81[i].Member;

        var arg3 = Verse_81[i].Gender;

        var Result = await Check_Attendance(arg1,arg2,arg3);

        if (Result == 'y') {

           document.getElementById(Rvers).style.color = "blue";

        }
        else {

           document.getElementById(Rvers).style.color = "black";

        }


        //var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';


        // -----------------------------------------


        var H_No_tmp = Verse_81[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2
        var H_No_tmp4 = H_No_tmp2[0];          // 1
        var H_No_tmp5 = H_No_tmp4 + '_';       // 1_


      //var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        var Family_Q_Str = '<button onClick="Search_Family_from_H_No(\'' + H_No_tmp5 + '\')"> F </button>';  // Using \' as an escape character

        var Name_Str = Verse_81[i].F_Name + ' ' + Verse_81[i].L_Name + Family_Q_Str;

        //var Name_Str = Verse_81[i].F_Name + ' ' + Verse_81[i].L_Name + ' ';  // Old


        if (Verse_81[i].Member == 'T') {

           //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

           //Name_Str = '*' + Verse_81[i].F_Name + ' ' + Verse_81[i].L_Name + ' ';   // Old

           Name_Str = '*' + Verse_81[i].F_Name + ' ' + Verse_81[i].L_Name + Family_Q_Str;

        }


        var Name_Str2 =  Verse_81[i].C_F_Name + Verse_81[i].C_L_Name;


        //var H_No_tmp = Verse_81[i].H_No;        // 1_2
        //var H_No_tmp2 = H_No_tmp.split("_");   
        //var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           Name_Str = '<b><u>' + Name_Str + ' </u></b>';

           Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

        }


        //var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;



        var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        //var Check_Str = '<button onClick="Show_People_Phone_V2(\'' + arg1 + '\')"> P </button>';  // Using \' as an escape character



        document.getElementById(Rnum++).innerHTML = Check_Str;

        document.getElementById(Rvers++).innerHTML =  Name_Str;

        document.getElementById(CName++).innerHTML =  Name_Str2;


        //document.getElementById(Rnum++).style.fontSize = "100%";  // 50%;

        //document.getElementById(Rvers++).style.fontSize = "50%";  // 50%;

        //document.getElementById(CName++).style.fontSize = "98%";  // 50%;


     } // End of for (var i = 0; i < Verse_81.length ; i++)

   //document.getElementById("content2_C").style.fontSize = "10pt";  // 50%
   //document.getElementById("Roll_Call_Content_C").style.fontSize = "10pt"; 

  }


}  // End of function Search_Person_from_F_Name_V3()


async function Search_Person_from_F_Name_V2(arg) { // Search from First Name


  // --------------------------------------------


   document.getElementById("content2").style.visibility='hidden'; // hidden , visible
   document.getElementById("content2").style.height = "0%";

   document.getElementById("content2_C").style.visibility='visible'; 
   document.getElementById("content2_C").style.height = "98%";       // 98% , 0%

   //document.getElementById("content2_C").style.fontSize = "10pt";  // 50%
   //document.getElementById("Roll_Call_Content_C").style.fontSize = "10pt"; 


  //var Search_FName_tmp = document.getElementById("Search_fname2").value ; // id="Search_fname2"


  var Search_FName_tmp = arg ; // id="Search_fname2"


  let Verse_81 = await dbT2.Roll.where('F_Name').startsWithIgnoreCase(Search_FName_tmp).toArray();

  if (Verse_81) {  // Prepare HTML for filling data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     var Roll_Call_Content_Str = '<table><tr>';

     //var Roll_Call_Content_Str = '<table style="font-size:60%"><tr>';

     var j=1;

     for (var i = 0; i < Verse_81.length ; i++) {

        var H_No_tmp = Verse_81[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1' || j==1) {

           var add_str1 = '</tr><tr>';

           if (Search_FName_tmp == 'ALL') {

              var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div style=\"font-size:180%\" id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           }
           else {

              var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           }

           //var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           //var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div style=\"font-size:180%\" id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';


           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=2;

        }
        else {

           var add_str1 = '<td></td><td></td><td></td><td></td><td></td>';

           if (Search_FName_tmp == 'ALL') {

              var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div style=\"font-size:180%\" id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           }
           else {

              var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           }

           //var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           //var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div style=\"font-size:180%\" id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';


           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=1;

        }



        //var '<tr><td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td></tr>';

        //Roll_Call_Content_Str = Roll_Call_Content_Str + 


        Rnum++;
        Rvers++;
        CName++;

         

     } // End of for (var i = 0; i < Verse_81.length ; i++)

     var Roll_Call_Content_Str = Roll_Call_Content_Str + '</tr></table>';

     document.getElementById("Roll_Call_Content_C").innerHTML = Roll_Call_Content_Str;

  }



  // --------------------------------------------

  //let Verse_42 = await dbT2.Roll.where('C_F_FName').startsWithIgnoreCase(argC).toArray();

  if (Verse_81) {  // Fill data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     for (var i = 0; i < Verse_81.length ; i++) {

        // arg1: CNo, arg2: Member, arg3:Gender

        var arg1 = Verse_81[i].CNo;

        var arg2 = Verse_81[i].Member;

        var arg3 = Verse_81[i].Gender;

        var Result = await Check_Attendance(arg1,arg2,arg3);

        if (Result == 'y') {

           document.getElementById(Rvers).style.color = "blue";

        }
        else {

           document.getElementById(Rvers).style.color = "black";

        }


        //var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';


        // -----------------------------------------


        var H_No_tmp = Verse_81[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2
        var H_No_tmp4 = H_No_tmp2[0];          // 1
        var H_No_tmp5 = H_No_tmp4 + '_';       // 1_


      //var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        var Family_Q_Str = '<button onClick="Search_Family_from_H_No(\'' + H_No_tmp5 + '\')"> F </button>';  // Using \' as an escape character

        var Name_Str = Verse_81[i].F_Name + ' ' + Verse_81[i].L_Name + Family_Q_Str;

        //var Name_Str = Verse_81[i].F_Name + ' ' + Verse_81[i].L_Name + ' ';  // Old


        if (Verse_81[i].Member == 'T') {

           //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

           //Name_Str = '*' + Verse_81[i].F_Name + ' ' + Verse_81[i].L_Name + ' ';   // Old

           Name_Str = '*' + Verse_81[i].F_Name + ' ' + Verse_81[i].L_Name + Family_Q_Str;

        }


        var Name_Str2 =  Verse_81[i].C_F_Name + Verse_81[i].C_L_Name;


        //var H_No_tmp = Verse_81[i].H_No;        // 1_2
        //var H_No_tmp2 = H_No_tmp.split("_");   
        //var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           Name_Str = '<b><u>' + Name_Str + ' </u></b>';

           Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

        }


        //var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;



        var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        //var Check_Str = '<button onClick="Show_People_Phone_V2(\'' + arg1 + '\')"> P </button>';  // Using \' as an escape character



        document.getElementById(Rnum++).innerHTML = Check_Str;

        document.getElementById(Rvers++).innerHTML =  Name_Str;

        document.getElementById(CName++).innerHTML =  Name_Str2;


        //document.getElementById(Rnum++).style.fontSize = "100%";  // 50%;

        //document.getElementById(Rvers++).style.fontSize = "50%";  // 50%;

        //document.getElementById(CName++).style.fontSize = "98%";  // 50%;


     } // End of for (var i = 0; i < Verse_81.length ; i++)

   //document.getElementById("content2_C").style.fontSize = "10pt";  // 50%
   //document.getElementById("Roll_Call_Content_C").style.fontSize = "10pt"; 

  }


}  // End of function Search_Person_from_F_Name_V2()


async function Search_Person_from_F_Name() { // Search from First Name


  // --------------------------------------------


   document.getElementById("content2").style.visibility='hidden'; // hidden , visible
   document.getElementById("content2").style.height = "0%";

   document.getElementById("content2_C").style.visibility='visible'; 
   document.getElementById("content2_C").style.height = "98%";       // 98% , 0%


  var Search_FName_tmp = document.getElementById("Search_fname2").value ; // id="Search_fname2"


  let Verse_81 = await dbT2.Roll.where('F_Name').startsWithIgnoreCase(Search_FName_tmp).toArray();

  if (Verse_81) {  // Prepare HTML for filling data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     var Roll_Call_Content_Str = '<table><tr>';

     var j=1;

     for (var i = 0; i < Verse_81.length ; i++) {

        var H_No_tmp = Verse_81[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1' || j==1) {

           var add_str1 = '</tr><tr>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=2;

        }
        else {

           var add_str1 = '<td></td><td></td><td></td><td></td><td></td>';

           var add_str2 = '<td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td>';

           Roll_Call_Content_Str = Roll_Call_Content_Str + add_str1 + add_str2;

           j=1;

        }



        //var '<tr><td valign=\"top\"><div id=\"' + Rnum + '\"></div></td><td><div id=\"' + Rvers + '\"></div></td><td><div id=\"' + CName + '\"></div></td></tr>';

        //Roll_Call_Content_Str = Roll_Call_Content_Str + 


        Rnum++;
        Rvers++;
        CName++;

         

     } // End of for (var i = 0; i < Verse_81.length ; i++)

     var Roll_Call_Content_Str = Roll_Call_Content_Str + '</tr></table>';

     document.getElementById("Roll_Call_Content_C").innerHTML = Roll_Call_Content_Str;

  }



  // --------------------------------------------

  //let Verse_42 = await dbT2.Roll.where('C_F_FName').startsWithIgnoreCase(argC).toArray();

  if (Verse_81) {  // Fill data

     var Rnum = 30001;  // Rnum
     var Rvers = 40001;  // EName
     var CName = 50001;  // CName

     for (var i = 0; i < Verse_81.length ; i++) {

        // arg1: CNo, arg2: Member, arg3:Gender

        var arg1 = Verse_81[i].CNo;

        var arg2 = Verse_81[i].Member;

        var arg3 = Verse_81[i].Gender;

        var Result = await Check_Attendance(arg1,arg2,arg3);

        if (Result == 'y') {

           document.getElementById(Rvers).style.color = "blue";

        }
        else {

           document.getElementById(Rvers).style.color = "black";

        }


        //var Name_Str = Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';


        // -----------------------------------------


        var H_No_tmp = Verse_81[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2
        var H_No_tmp4 = H_No_tmp2[0];          // 1
        var H_No_tmp5 = H_No_tmp4 + '_';       // 1_


      //var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        var Family_Q_Str = '<button onClick="Search_Family_from_H_No(\'' + H_No_tmp5 + '\')"> F </button>';  // Using \' as an escape character

        var Name_Str = Verse_81[i].F_Name + ' ' + Verse_81[i].L_Name + Family_Q_Str;

        //var Name_Str = Verse_81[i].F_Name + ' ' + Verse_81[i].L_Name + ' ';  // Old


        if (Verse_81[i].Member == 'T') {

           //Name_Str = '*' + Verse_3[i].L_Name + ',' + Verse_3[i].F_Name + ' ';

           //Name_Str = '*' + Verse_81[i].F_Name + ' ' + Verse_81[i].L_Name + ' ';   // Old

           Name_Str = '*' + Verse_81[i].F_Name + ' ' + Verse_81[i].L_Name + Family_Q_Str;

        }


        var Name_Str2 =  Verse_81[i].C_F_Name + Verse_81[i].C_L_Name;


        //var H_No_tmp = Verse_81[i].H_No;        // 1_2
        //var H_No_tmp2 = H_No_tmp.split("_");   
        //var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           Name_Str = '<b><u>' + Name_Str + ' </u></b>';

           Name_Str2 =  '<b><u>' + Name_Str2 + ' </u></b>';

        }


        //var Name_Str2 =  Verse_3[i].C_F_Name + Verse_3[i].C_L_Name;



        var Check_Str = '<button onClick="Add_or_Remove_Attendance(\'' + arg1 + '\',\'' + arg2 + '\',\'' + arg3 + '\',\'' + Rvers + '\')"> V </button>';  // Using \' as an escape character

        //var Check_Str = '<button onClick="Show_People_Phone_V2(\'' + arg1 + '\')"> P </button>';  // Using \' as an escape character



        document.getElementById(Rnum++).innerHTML = Check_Str;

        document.getElementById(Rvers++).innerHTML =  Name_Str;

        document.getElementById(CName++).innerHTML =  Name_Str2;


     } // End of for (var i = 0; i < Verse_81.length ; i++)



  }


}  // End of function Search_Person_from_F_Name()


function Open_Admin_Tools_Area() {

   document.getElementById("Admin_Tools_Area").style.visibility='visible'; 
   document.getElementById("Admin_Tools_Area").style.height = "100%";       // 98% , 0%
   document.getElementById("Admin_Tools_Area").style.width = "100%";       // 98% , 0%

} // End of function Open_Admin_Tools_Area()

function Close_Admin_Tools_Area() {

   document.getElementById("Admin_Tools_Area").style.visibility='hidden'; // hidden , visible
   document.getElementById("Admin_Tools_Area").style.height = "0%";

   document.getElementById("tool_area_6").style.display='none';

} // End of Close_Admin_Tools_Area()



function Open_QR_Code_Scan_Area() {

   document.getElementById("tool_area_7").style.display='block';  //inline
   document.getElementById("tool_area_7").style.height = "110%";

} // End of Open_QR_Code_Scan_Area()

function Close_QR_Code_Scan_Area() {

   document.getElementById("tool_area_7").style.display='none';
   document.getElementById("tool_area_7").style.height = "0%";

} // End of Close_QR_Code_Scan_Area()



function Show_Church_Service_Schedule() {

   //document.getElementById("content2").style.visibility='hidden'; // hidden , visible
   //document.getElementById("content2").style.height = "0%";

   document.getElementById("Church_Service_Schedule").style.visibility='visible'; 
   document.getElementById("Church_Service_Schedule").style.height = "100%";       // 98% , 0%
   document.getElementById("Church_Service_Schedule").style.width = "100%";       // 98% , 0%

} // End of Show_Church_Service_Schedule()

function hide_Church_Service_Schedule() {

   document.getElementById("Church_Service_Schedule").style.visibility='hidden'; // hidden , visible
   document.getElementById("Church_Service_Schedule").style.height = "0%";

} // End of hide_Church_Service_Schedule()


function Show_IYC_Schedule() {

   document.getElementById("IYC_Schedule").style.visibility='visible'; 
   document.getElementById("IYC_Schedule").style.height = "100%";       // 98% , 0%
   document.getElementById("IYC_Schedule").style.width = "100%";       // 98% , 0%

} // End of Show_IYC_Schedule()

function hide_IYC_Schedule() {

   document.getElementById("IYC_Schedule").style.visibility='hidden'; // hidden , visible
   document.getElementById("IYC_Schedule").style.height = "0%";

} // End of hide_IYC_Schedule()



function Show_Read_Me() {

   document.getElementById("Read_Me").style.visibility='visible'; 
   document.getElementById("Read_Me").style.height = "40%";       // 98% , 0%
   document.getElementById("Read_Me").style.width = "100%";       // 98% , 0%   // "Read_Me_Content"

   var Read_Me_Content_str1 = '1. *Schedule.docx Save As *Schedule.pdf <br>';

   var Read_Me_Content_str2 = '2. Convert *Schedule.pdf to *Schedule.jpg by <br>';

   var Read_Me_Content_str3 = '3. Go to https://smallpdf.com/pdf-to-jpg and upload *Schedule.pdf<br>';

   var Read_Me_Content_str4 = '4. Download *Schedule.jpg from https://smallpdf.com/pdf-to-jpg <br>';

   var Read_Me_Content_str5 = '5. Name Rule: Church_Service_Schedule_1.jpg Church_Service_Schedule_2.jpg <br>';

   var Read_Me_Content_str6 = '6. Name Rule: IYC_Schedule.jpg <br>';

   var Read_Me_Content_tmp = Read_Me_Content_str1 + Read_Me_Content_str2 + Read_Me_Content_str3 + Read_Me_Content_str4 + Read_Me_Content_str5 + Read_Me_Content_str6; 

   document.getElementById("Read_Me_Content").innerHTML = Read_Me_Content_tmp;

} // End of Show_Read_Me()

function hide_Read_Me() {

   document.getElementById("Read_Me").style.visibility='hidden'; // hidden , visible
   document.getElementById("Read_Me").style.height = "0%";

} // End of hide_Read_Me()


var pass1="";

function Input_passWord_1() { // Show Input password area

   document.getElementById("tool_area_6").style.display='block';  //inline

   //document.getElementById("tool_area_6").style.visibility='visible';
   document.getElementById("tool_area_6").style.height='50%'; // 10px

   //document.getElementById("tool_area_7").style.visibility='visible';

   //document.getElementById("tool_area_8").style.visibility='hidden';
   //document.getElementById("tool_area_9").style.visibility='hidden';
   //document.getElementById("tool_area_9").style.height='0px';

   //document.getElementById("tool_area_10").style.visibility='hidden';

}

function passWord_1() { // Display and Input pass1

   //document.getElementById("tool_area_6").style.visibility='hidden';
   //document.getElementById("tool_area_6").style.height='0px';

   pass1 = document.getElementById("pwd").value;

   passWord_2();

} // End of function passWord_1()

function passWord_2() { // Check pass1

      //if (pass1.toLowerCase() == "TJCBNE1818") {
      if (pass1 == "TJCBNE1818") {

         //document.getElementById("tool_area_8").style.visibility='visible';

         //Show_n_Delete_Notes_List();

         Open_Admin_Tools_Area();

      } 


} // End of function passWord_2()


async function Generate_Schedule() { // Search from English Family Last Name
                                                 // argC2: 'R' for Roll Call, 'P' for Phone Dir.

   //document.getElementById("content2").style.visibility='hidden'; // hidden , visible
   //document.getElementById("content2").style.height = "0%";

   //document.getElementById("content2_C").style.visibility='visible'; 
   //document.getElementById("content2_C").style.height = "98%";       // 98% , 0%


  //let Verse_101 = await dbT2.Roll.where('E_F_LName').startsWithIgnoreCase('L').toArray();  // test for 'L' - OK

  //let Verse_101 = await dbT2.Roll.where('E_F_LName').startsWithIgnoreCase('C').toArray();  // test for 'C' - OK

  let Verse_101 = await dbT2.Roll.toArray();  // test for All



  if (Verse_101) {  // 

     var Churh_Servie_Schedule_Content_Str = '';

     for (var i = 0; i < Verse_101.length ; i++) {

        var H_No_tmp = Verse_101[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           var F_Name_tmp = Verse_101[i].F_Name;
           var L_Name_tmp = Verse_101[i].L_Name;

           var C_F_Name_tmp = Verse_101[i].C_F_Name;
           var C_L_Name_tmp = Verse_101[i].C_L_Name;

           var Str_tmp1 = '<div class="container"><br>';
           var Str_tmp2 = '<img src="Church_Service_Schedule_1.jpg" width="100%" height="260%" ><br>';
           var Str_tmp3 = '<img src="Church_Service_Schedule_2.jpg" width="100%" height="240%" ><br>'; // 240 230 ok
           var Str_tmp4 = '<div class="top-left">' + ' ' + F_Name_tmp + ' ' + L_Name_tmp + ' ' + C_F_Name_tmp + C_L_Name_tmp + '</div><br>';
           var Str_tmp5 = '</div><br>';

           Churh_Servie_Schedule_Content_Str += Str_tmp1 + Str_tmp2 + Str_tmp3 + Str_tmp4 + Str_tmp5;

        }  // End of if (H_No_tmp3 == '1')

     } // End of for (var i = 0; i < Verse_101.length ; i++)

     document.getElementById("Churh_Servie_Schedule_Content").innerHTML = Churh_Servie_Schedule_Content_Str;

   } // End of if (Verse_101)


}  // End of function Generate_Schedule()


async function Generate_Schedule_First_Page_Only() { // Search from English Family Last Name
                                                 // argC2: 'R' for Roll Call, 'P' for Phone Dir.
                                                 // 不印 第二頁

   //document.getElementById("content2").style.visibility='hidden'; // hidden , visible
   //document.getElementById("content2").style.height = "0%";

   //document.getElementById("content2_C").style.visibility='visible'; 
   //document.getElementById("content2_C").style.height = "98%";       // 98% , 0%


  //let Verse_101 = await dbT2.Roll.where('E_F_LName').startsWithIgnoreCase('L').toArray();  // test for 'L' - OK

  //let Verse_101 = await dbT2.Roll.where('E_F_LName').startsWithIgnoreCase('C').toArray();  // test for 'C' - OK

  let Verse_101 = await dbT2.Roll.toArray();  // test for All



  if (Verse_101) {  // 

     var Churh_Servie_Schedule_Content_Str = '';

     for (var i = 0; i < Verse_101.length ; i++) {

        var H_No_tmp = Verse_101[i].H_No;        // 1_2
        var H_No_tmp2 = H_No_tmp.split("_");   
        var H_No_tmp3 = H_No_tmp2[1];          // 2

        if (H_No_tmp3 == '1') {

           var F_Name_tmp = Verse_101[i].F_Name;
           var L_Name_tmp = Verse_101[i].L_Name;

           var C_F_Name_tmp = Verse_101[i].C_F_Name;
           var C_L_Name_tmp = Verse_101[i].C_L_Name;

           var Str_tmp1 = '<div class="container"><br>';
           var Str_tmp2 = '<img src="Church_Service_Schedule_1.jpg" width="100%" height="244%" ><br>'; // 240 242 244 ok,260 不 ok
           //var Str_tmp3 = '<img src="Church_Service_Schedule_2.jpg" width="100%" height="240%" ><br>'; // 240 230 ok
           var Str_tmp4 = '<div class="top-left">' + ' ' + F_Name_tmp + ' ' + L_Name_tmp + ' ' + C_F_Name_tmp + C_L_Name_tmp + '</div><br>';
           var Str_tmp5 = '</div><br>';

           Churh_Servie_Schedule_Content_Str += Str_tmp1 + Str_tmp2 + Str_tmp4 + Str_tmp5;

        }  // End of if (H_No_tmp3 == '1')

     } // End of for (var i = 0; i < Verse_101.length ; i++)

     document.getElementById("Churh_Servie_Schedule_Content").innerHTML = Churh_Servie_Schedule_Content_Str;

   } // End of if (Verse_101)


}  // End of function Generate_Schedule_First_Page_Only()



async function Generate_Schedule_First_Page_Only_V2() { // Search from English Family Last Name
                                                 // argC2: 'R' for Roll Call, 'P' for Phone Dir.
                                                 // 不印 第二頁

   document.getElementById("Churh_Servie_Schedule_Content").innerHTML = 'Hardi Boediardjo 陳忠信';



}  // End of function Generate_Schedule_First_Page_Only_V2()


async function Chinese_Surname() {

   let Verse_107 = await dbT2.Roll.where('CNo').equals(1).toArray();

   var Surname_tmp = Verse_107[0].C_F_Name;

   //   <a href="javascript:Roll_Call_Search_V3('王','R')"> 王 </a>   // \"

   var text = '<a href=\"javascript:Roll_Call_Search_V3(\'' + Surname_tmp + '\',\'R\')\"> ' + Surname_tmp + ' </a>';

   document.getElementById("Chinese_Surname").innerHTML = text;

}  // End of function Chinese_Surname()
