
import { toastIt } from "../utils/toast_it.js";
import { StuPersonalInfoFields } from "../config/stu_persona_info_fields.js";
import { StuMedicalInfoFields } from "../config/stu_medical_info_fields.js";
import { StuFatherInfoFields } from "../config/stu_father_info_fields.js";
import { StuMotherInfoFields } from "../config/stu_mother_info_fields.js";
import { StuTypeInfoFields } from "../config/stu_type_info_fields.js";
import { lowAndRemvSpce } from "../utils/lower_and_remove_space.js";
class StudentApplicationFormHandler 
{
    constructor(form)
    {
        //Error variables 
        this._mErrors = 0;
        this.mErrorMsg = '';
        this.studentInfoObj = {};


        
        /***********************************************
         * Ensure the school section info is in here
         * *************************************
         */
        if(!JSON.parse(sessionStorage.getItem('pin')).section)
        {
            this._mErrors++;
            this.mErrorMsg = "User selected section not found";
            return;
        }
        else
        {


            /***********************************************************
            The logic below retrieves the choices made by the user in the PIN-form, and uses the section-id to retrieve the name of the selected school section.
            ****************************************************************
            */
            this.pinChoices = JSON.parse(sessionStorage.getItem('pin'));
            this.schoolSectionsInfo = JSON.parse(localStorage.getItem('public_menu_items'));
            this.sectionId = (this.pinChoices.section);







            /********************************************************* *
            The id of the school-section selected by user is used to grab the name of the specific section.
            ***********************************************************/
            this.userSelectedSectionName = '';
            for (let i = 0; i < this.schoolSectionsInfo.length; i++)
            {
                if (this.schoolSectionsInfo[i].id === this.sectionId)
                {
                    this.userSelectedSectionName = this.schoolSectionsInfo[i].name;
                    break;
                }
            }

        } 
            







        /****************************
         * Ensure the form is in here
         * **************************
         */
        if (!form)
        {
            this._mErrors++;
            this.mErrorMsg = "Invalid form";
        }
        else 
        {
            this.form = form;
            this.stuPerInfoFields = StuPersonalInfoFields.getFields();
            this.stuMedicalInfoFields = StuMedicalInfoFields.getFields();
            this.stuFatherInfoFields = StuFatherInfoFields.getFields();
            this.stuMotherInfoFields = StuMotherInfoFields.getFields();
            this.StuTypeInfoFields = StuTypeInfoFields.getFields();





            
            /**********************************************
             * Ensure that the submit button was clicked
             * *******************************************
             */
            if(!this.form['SubmitApplicationBtn']) 
            {
                this._mErrors++;
                this.mErrorMsg = "Please use the submit button!";
                return;
            }









            /*************************
             * Process the passport
             * ***********************
             */
            // if (!this.form['passport'].files[0]) 
            // {
            //     this._mErrors++;
            //     this.mErrorMsg = "The passport information is required";
            //     return;
            // }
            // else if (this.form['passport'].files[0].type != 'image/jpeg') 
            // {
            //     this._mErrors++;
            //     this.mErrorMsg = "for passport use jpg format!";
            //     return;
            // }
            // else if (this.form['passport'].files[0].size > 50000) 
            // {
            //     this._mErrors++;
            //     this.mErrorMsg = "Passport max-size: 50kb exceeded!";
            //     return;
            // }
            // else
            // {}












            // personalinfo
            /***********************************
             * Process the personal information
             * *********************************
             */
            // if (!this.form.querySelectorAll('.personalinfo'))
            // {
            //     this._mErrors++;
            //     this.mErrorMsg = "Personal info not found!";

            // }
            // else
            // {
            //     this.userPersonalInfoFields = this.form.querySelectorAll('.personalinfo');

            //     for (let i = 0; i < this.stuPerInfoFields.length; i++)
            //     {
            //         if(!this.stuPerInfoFields[i].pattern.test(this.userPersonalInfoFields[i].value.trim().toLowerCase()))
            //         {
            //             this._mErrors++
            //             this.mErrorMsg = `${this.userPersonalInfoFields[i].name} is required!`;
            //             return;
            //         }
            //         else 
            //         {
            //             this.studentInfoObj[this.userPersonalInfoFields[i].name] = this.userPersonalInfoFields[i].value.trim();
            //         }
                    
            //     }


            // }












            
            /***********************************
             * Process the birth certificate 
             * *********************************
             */
            // if (!this.form['birthcertificate'].files[0]) 
            // {
            //     this._mErrors++;
            //     this.mErrorMsg = "Birth certificate is required";
            //     return;
            // }
            // else if (this.form['birthcertificate'].files[0].type != 'application/pdf') 
            // {
            //     this._mErrors++;
            //     this.mErrorMsg = "Birth certificate use PDF format ONLY!";
            //     return;
            // }
            // else if (this.form['birthcertificate'].files[0].size > 500000) 
            // {
            //     this._mErrors++;
            //     this.mErrorMsg = "Birth certificate max-size: 500kb exceeded!";
            //     return;
            // }
            // else
            // {}











            



            /***************************************************************
             * Process the primary certificate only if the user-selected school section name is either jss or sss.
             * *********************************************************
             */
            // if(this.userSelectedSectionName == 'Junior Secondary' || this.userSelectedSectionName == 'Senior Secondary')
            // {
            //     if (!this.form['primarycertificate'].files[0]) 
            //     {
            //         this._mErrors++;
            //         this.mErrorMsg = "Primary certificate is required";
            //         return;
            //     }
            //     else if (this.form['primarycertificate'].files[0].type != 'application/pdf') 
            //     {
            //         this._mErrors++;
            //         this.mErrorMsg = "Primary certificate use PDF format ONLY!";
            //         return;
            //     }
            //     else if (this.form['primarycertificate'].files[0].size > 500000) 
            //     {
            //         this._mErrors++;
            //         this.mErrorMsg = "Primary certificate max-size: 500kb exceeded!";
            //         return;
            //     }
            //     else
            //     {}

            // }

















            
            /***********************************
             * Process the Medical information
             * *********************************
             */
            // if (!this.form.querySelectorAll('.medicalinfo')) 
            // {
            //     this._mErrors++;
            //     this.mErrorMsg = "The medical information not found";
            // }
            // else 
            // {
            //     this.stuMedicalInfo = this.form.querySelectorAll(".medicalinfo");
                
            //     for (let i = 0; i < this.stuMedicalInfoFields.length; i++) 
            //     {
            //         if (!this.stuMedicalInfoFields[i].pattern.test(this.stuMedicalInfo[i].value.trim()))
            //         {
            //             this._mErrors++;
            //             this.mErrorMsg = this.stuMedicalInfoFields[i].name + " is required!";
            //             return;
            //         }
            //         else 
            //         {
            //             this.studentInfoObj[this.stuMedicalInfo[i].name] = this.stuMedicalInfo[i].value.trim();
            //         }
            //     }
            // }
















            /*********************************************
             * Process the students father information 
             * *****************************************
             */

            // if (!this.form.querySelectorAll(".fatherinfo"))
            // {
            //     this._mErrors++;
            //     this.mErrorMsg = "The father information not found!";
            //     return;
            // }
            // else 
            // {
            //     this.userFatherInfoFields = this.form.querySelectorAll('.fatherinfo');

            //     for (let i = 0; i < this.stuFatherInfoFields.length; i++)
            //     {
            //         if(!this.stuFatherInfoFields[i].pattern.test(this.userFatherInfoFields[i].value.trim()))
            //         {
            //             this._mErrors++;
            //             this.mErrorMsg = this.userFatherInfoFields[i].name + " is required!";
            //             return;
            //         }
            //         else 
            //         {
            //             this.studentInfoObj[this.userFatherInfoFields[i].name] = this.userFatherInfoFields[i].value.trim();
            //         }
            //     }
            // }














            /************************************************************
             * The code below validates the user-mother fields values
             * ***************************************************
             */
            // if (!this.form.querySelectorAll(".motherinfo"))
            // {
            //     this._mErrors++;
            //     this.mErrorMsg = "The mother information not found!";
                // return
            // }
            // else 
            // {
            //     this.userMotherInfoFields = this.form.querySelectorAll('.motherinfo');
            //     for (let i = 0; i < this.stuMotherInfoFields.length; i++)
            //     {
            //         if (!this.stuMotherInfoFields[i].pattern.test(this.userMotherInfoFields[i].value.trim()))
            //         {
            //             this._mErrors++;
            //             this.mErrorMsg = this.stuMotherInfoFields[i].name + " is required!";
            //             return;
            //         }
            //         else 
            //         {
            //             this.studentInfoObj[this.userMotherInfoFields[i].name] = this.userMotherInfoFields[i].value.trim();
            //         }
            //     }
            // }















            /************************************************
             * The student type validation code is right below
             * ************************************************
             */
            // if(!this.form['studenttype'])
            // {
            //     this._mErrors++;
            //     this.mErrorMsg = "Student type info not found!";
            //     return;
            // }
            // else 
            // {
            //     this.choices = this.form['studenttype'];
            //     this.choice = null;
            //     this.userStuType = null;
            //     for (let i = 0; i < this.choices.length; i++)
            //     {
            //         if (this.choices[i].checked)
            //         {
            //             this.choice = this.choices[i].value;
            //             break;
            //         }    
            //     }

            //     if (this.choice == null)
            //     {
            //         this._mErrors++;
            //         this.mErrorMsg ="Select student type and continue!";
            //         return;
            //     }
            //     else 
            //     {
            //         this.userStuType = this.choice;
            //         this.studentInfoObj['studenttype'] = this.userStuType;
            //     }
            // }
            


            

            /*****************************************************
             * The code below validates the attestation for parent
             * ***************************************************
             */
            // if(!this.form['attestation'].checked)
            // {
            //     this._mErrors++;
            //     this.mErrorMsg = "Please accept the attestation!";
            //     return;
            // }
            // else 
            //     this.studentInfoObj['attestation'] = this.form['attestation'].checked;



            

        }
    }




















    processForm()
    {
        if (this._mErrors == 0)
        {

            
            console.log(this.studentInfoObj);

        }
        else 
        {
            toastIt('red', this.mErrorMsg);
        }
    }
}

export { StudentApplicationFormHandler };