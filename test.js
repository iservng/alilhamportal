



//OBJECT
//=======

// import { StuPersonalInfoFields } from "./config/stu_persona_info_fields.js";
// let foo = StuPersonalInfoFields.getFields();
// console.log(foo);


// function lowAndRemvSpce(str)
// {
//     return str.replace(/\s/g, '').toLowerCase();
// }
// let value = "First Name Contry";
// let re = lowAndRemvSpce(value);
// // console.log(re);



// let pattern = /^[a-zA-Z]{3,50}$/;
// let name = "Onyeka";

// let fs = pattern.test(name);
// console.log(fs);






// import { StuMedicalInfoFields } from "./config/stu_medical_info_fields.js";

// let fe = StuMedicalInfoFields.getField();





// console.log("Yelow!");
// "image/jpeg".test()
// let pattern = /^(male|female)$/gi;
// let test_string = 'male';

// let result = (pattern.test(test_string)) ? 'Valid' : 'Invalid Bad';

// console.log(/image\/jpeg/.test("image/jpeg"));
// console.log(result);

// let pattern = /^(male)|(female)$/gi;
// let test_string = "female";

// let patn = /^(image\/jpeg)|(image\/jpg)$/gi;
// let str_test = 'image/png';

// console.log(patn.test(str_test));


// let result = (pattern.test(test_string)) ? 'Valid' : 'Bad';
// console.log(result);

// let test_str = 'application/pdf';
// let pattern = /^(application\/pdf)$/gi;

// console.log(pattern.test(test_str));

// let infoObj = {
//     pagetile: '',
//     userwithsalutaion: '',
//     fparagraph: '',
//     btn: '',
//     subtitle: '',
//     sParagraph: '',
// };

// if (typeof infoObj == 'object') {
//     console.log("Type na " + typeof infoObj);
// }
// else
// {
//     console.log("I dont know the type");
// }

// for (let property in infoObj){
//     // console.log(infoObj[property]);//
//     if (infoObj[property] == '') {
//         console.log(property + " is empty");
//         break;
//     }
// }


// import { preloader } from "./utils/preloader.js";
// preloader();


// const preloader = (msg = 'Loading...') => {
//     let content = `<div class="container">
//     <div class="row">
//         <div class="col s12" style="margin-top: 4rem;">&nbsp;</div>
//         <div class="col s12 l4 m4">&nbsp;</div>
//         <div class="col s12 l4 m4">
//             <div class="progress">
//                 <div class="indeterminate"></div>
//             </div>
//             <div class="center-align">${msg}</div>
//         </div>
//         <div class="col s12 l4 m4">&nbsp;</div>
//     </div>
// </div>`;
//     document.querySelector('main').innerHTML = content;
// };

// preloader();