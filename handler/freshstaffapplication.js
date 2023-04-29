


/***********************************************************
 * This class is responsible for the handling of application made by a fresh user intending to become a staff.
 * *******************************************************
 */
import { toastIt } from "../utils/toast_it.js";
import { preloader } from '../utils/preloader.js';
import { StaffPersonalInfoFields } from '../config/staff_personal_info_fields.js';
import { SCHOOL_FULL_NAME } from '../config/app_config.js';

class FreshStaffApplication
{
    #_mErrors;
    #mErrorMsg;
    #form
    #staffUserCode;
    #codeExistsOk;
    #staffUserPersonalInfo;
    #perInfoObj
    #staffEmpInfoObj;
    #passportFile
    #credentialFields;

    #applicationletter;
    #cv;
    #coverletter;
    #olevelcertificate1;
    #olevelcertificate2;
    #alevelcertificate;

    #professionalcertificate;
    #userSelectSection;
    #schoolSectionID;

    #userSelectedBranch;
    #schoolBranchID;
    #attestation;

    constructor(form)
    {
        
        this.#_mErrors = 0;
        this.#mErrorMsg = '';
        this.#codeExistsOk = false;
        this.#staffEmpInfoObj = {};

        if(!form)
        {
            this.#_mErrors++;
            this.#mErrorMsg = "Form info not found!";
            return;
        }
        else 
        {


            this.#form = form;


            /*****************************************************************
             * step 2.
             * Start validating the user/staff personal information and setting up the object for storage in firestore.
             * *****************************************************************
             */
            this.#staffUserPersonalInfo = this.#form.querySelectorAll('.personal_info');
            this.#perInfoObj = StaffPersonalInfoFields.getFields();
            
            for(let i = 0; i < this.#perInfoObj.length; i++)
            {
                
                if(!this.#perInfoObj[i].pattern.test(this.#staffUserPersonalInfo[i].value))
                {
                    this.#_mErrors++;
                    this.#mErrorMsg = this.#perInfoObj[i].name + " is invalid!, please check and try again.";
                    break;
                }
                else 
                {
                    this.#staffEmpInfoObj[this.#staffUserPersonalInfo[i].id] = this.#staffUserPersonalInfo[i].value.trim();

                }
                
            }









             /*****************************************
             * step 3.
             * The passwords must match validation
             * **************************************
             */
             if (this.#form['password'].value.trim() !== this.#form['confirmpassword'].value.trim())
             {
                 this.#_mErrors++;
                 this.#mErrorMsg = "The password must match!";
                 return;
             }









             /***********************************************
             * Step 4.
             * START VALIDATING THE USER PASSPORT
             * *****************************************
             */

            if(!this.#form['passport'].files[0])
            {
                this.#_mErrors++;
                this.#mErrorMsg = "Passport info not found!";
                return;

            }
            else if (!/^(image\/jpeg)|(image\/jpg)$/gi.test(this.#form['passport'].files[0].type))
            {
                this.#_mErrors++;
                this.#mErrorMsg = "jpeg/jpg format only for Passport!";
                return;
            }
            else if (this.#form['passport'].files[0].size > 18142)
            {
                this.#_mErrors++;
                this.#mErrorMsg = "The passport too large, Max size: < 18k!";
                return;

            }
            else 
                this.#passportFile = this.#form['passport'].files[0];
 











            /****************************************************
             * STAFF APPLICATION LETTER
             * *************************************************
             */
            if(!this.#form['applicationletter'].files[0])
            {
                this.#_mErrors++;
                this.#mErrorMsg = "The application letter info is required!";
                return;
            }
            else if(!/^(application\/pdf)$/gi.test(this.#form['applicationletter'].files[0].type))
            {

                this.#_mErrors++;
                this.#mErrorMsg = "PDF Application letter format only!";
                return;
            }
            else if (this.#form['applicationletter'].files[0].size > 400000)
            {
                this.#_mErrors++;
                this.#mErrorMsg = "Application letter size too large, please resize and try again!";
                return;
            }
            else 
                this.#applicationletter = this.#form['applicationletter'].files[0];













            // APPLICATION CV
            // ----------------------
            if(!this.#form['cv'].files[0])
            {
                this.#_mErrors++;
                this.#mErrorMsg = "Your CV in PDF-format is required!";
                return;
            }
            else if(!/^(application\/pdf)$/gi.test(this.#form['cv'].files[0].type))
            {
                this.#_mErrors++;
                this.#mErrorMsg = "The CV should be in PDF format only!";
                return;
            }
            else if (this.#form['cv'].files[0].size > 400000)
            {
                this.#_mErrors++;
                this.#mErrorMsg = "This CV is too large, please resize and try again!";
                return;
            }
            else 
                this.#cv = this.#form['cv'].files[0];













            // 2 COVER LETTER
            // ----------------------
            if(!this.#form['coverletter'].files[0])
            {
                this.#_mErrors++;
                this.#mErrorMsg = "Cover letter info is required!";
                return;
            }
            else if(!/^(application\/pdf)$/gi.test(this.#form['coverletter'].files[0].type))
            {
                this.#_mErrors++;
                this.#mErrorMsg = "Cover letter should in PDF format only!";
                return;
            }
            else if (this.#form['coverletter'].files[0].size > 400000)
            {
                this.#_mErrors++;
                this.#mErrorMsg = "Cover letter SIZE too large, please resize and try again!";
                return;
            }
            else 
                this.#coverletter = this.#form['coverletter'].files[0];














            // O - LEVEL CERTIFICATE - 1
            // --------------------------
            if(!this.#form['olevelcertificate1'].files[0])
            {
                this.#_mErrors++;
                this.#mErrorMsg = "O-level certificate info is required!";
                return;
            }
            else if(!/^(application\/pdf)$/gi.test(this.#form['olevelcertificate1'].files[0].type))
            {
                this.#_mErrors++;
                this.#mErrorMsg = "O-Level certificate should be in PDF format only!";
                return;
            }
            else if (this.#form['olevelcertificate1'].files[0].size > 400000)
            {
                this.#_mErrors++;
                this.#mErrorMsg = "O-level certificate size too large, please resize and try again!";
                return;
            }
            else 
                this.#olevelcertificate1 = this.#form['olevelcertificate1'].files[0];









            // O - LEVEL CERTIFICATE 2 (OPTIONAL)
            // -----------------------------------
            if (this.#form['olevelcertificate2'].files[0])
            {
                if(!this.#form['olevelcertificate2'].files[0])
                {
                    this.#_mErrors++;
                    this.#mErrorMsg = "O-level certifIcate is required!";
                    return;
                }
                else if(!/^(application\/pdf)$/gi.test(this.#form['olevelcertificate2'].files[0].type))
                {
                    this.#_mErrors++;
                    this.#mErrorMsg = "O-Level certificate in PDF format only!";
                    return;
                }
                else if (this.#form['olevelcertificate2'].files[0].size > 400000)
                {
                    this.#_mErrors++;
                    this.#mErrorMsg = "O-level certificate SIZE too large, please resize and try again!";
                    return;
                }
                else 
                    this.#olevelcertificate2 = this.#form['olevelcertificate2'].files[0];

            }














            // A LEVEL CERTIFICATE 
            // ----------------------
            if(!this.#form['alevelcertificate'].files[0])
            {
                this.#_mErrors++;
                this.#mErrorMsg = "A level certifcate info is required!";
                return;
            }
            else if(!/^(application\/pdf)$/gi.test(this.#form['alevelcertificate'].files[0].type))
            {
                this.#_mErrors++;
                this.#mErrorMsg = "A Level certificate in PDF format only!";
                return;
            }
            else if (this.#form['alevelcertificate'].files[0].size > 400000)
            {
                this.#_mErrors++;
                this.#mErrorMsg = "A level certificate SIZE too large, please resize and try again!";
                return;
            }
            else 
                this.#alevelcertificate = this.#form['alevelcertificate'].files[0];


















            // ====================================
            // PROFESSIONAL CERTIFICATE (OPTIONAL)
            // ====================================
            if(this.#form['professionalcertificate'].files[0])
            {
                if(!/^(application\/pdf)$/gi.test(this.#form['alevelcertificate'].files[0].type))
                {
                    this.#_mErrors++;
                    this.#mErrorMsg = "PDF professional certificate required only!";
                    return;
                }
                else if (this.#form['professionalcertificate'].files[0].size > 400000)
                {
                    this.#_mErrors++;
                    this.#mErrorMsg = "The max-size exceeded, resize and try again!";
                    return;
                }
                else 
                    this.#professionalcertificate = this.#form['professionalcertificate'].files[0];

            }














            /****************************************************
                 * VALIDATING THE SCHOOL-SELECTED SECTION INFORMATION
                 * *************************************************
                 */
            if(!this.#form['schoolsection'])
            {
                this.#_mErrors++;
                this.#mErrorMsg = "The school section info is required!";
                return;
            }
            else 
            {
                
                this.#userSelectSection = '';
                for (let i = 0; i < this.#form['schoolsection'].length; i++)
                {
                    if(this.#form['schoolsection'][i].checked) {

                        this.#userSelectSection = this.#form['schoolsection'][i].value;
                        break;
                    }
                }

                if(this.#userSelectSection == '')
                {
                    this.#_mErrors++;
                    this.#mErrorMsg = "The school section information is required!";
                    return;
                }
                else ///////
                    this.#schoolSectionID = this.#userSelectSection;
                    // console.log(this.#schoolSectionID);
                    // console.log("29zVkPG1FA4CLxpCceiU");

            }













            /****************************************************
            * VALIDATING THE SCHOOL-SELECTED BRANCH INFORMATION
            * *************************************************
            */
            if(!this.#form['school_branch'])
            {
                this.#_mErrors++;
                this.#mErrorMsg = "The school branch information is required!";
                return;
            }
            else 
            {
                this.#userSelectedBranch = null;
                for(let i = 0; i < this.#form['school_branch'].length; i++)
                {
                    if(this.#form['school_branch'][i].checked)
                    {
                        this.#userSelectedBranch = this.#form['school_branch'][i].value;
                        break;
                    }
                        
                }
                if (this.#userSelectedBranch == null)
                {
                    this.#_mErrors++;
                    this.#mErrorMsg = "The school branch information is required!";
                    return;
                }
                else 
                    this.#schoolBranchID = this.#userSelectedBranch;
                    
            }











            /*************************************
                ATTESTATION
            * ***********************************
            */
            if(!this.#form['attestation'])
            {
                this.#_mErrors++;
                this.#mErrorMsg = "The attestation is not found!";
                return;
            }
            else if(!this.#form['attestation'].checked)
            {
                this.#_mErrors++;
                this.#mErrorMsg = "Please accept the attestation, and continue!";
                return;
            }
            else 
                this.#attestation = this.#form['attestation'].value;
                    
                    











            /*********************************
            * TO KNOW THE TYPE OF STAFF USER
            * *******************************
            */

            if (!this.#form['application_class'].value)
            {
                this.#_mErrors++;
                this.#mErrorMsg = "The application class info is required!";
                return;
            }





            
        }

    }










    processIt()
    {
        if (this.#_mErrors == 0)
        {
            
            /********************************************
             * STEP 1.
             * Process and upload the staff application information to be further processed by the admi of the specific school
             * *********************************************
             */
            console.log("Fresh application ", this.#form);


            /************************************************
             * STEP 2.
             * The applicant staff is then redirected to the 
             * *********************************************
             */
            import('../viewClasses/user_task_completed_ui.js')
                        .then(m => {

                            let name = this.#form['firstname'].value +" "+this.#form['lastname'].value;

                            let completedTask = new m.UserTaskCompletedUi({
                                pagetitle: `Application Submission <b>Successful!</b>`,
                                userwithsalutaion: `Dear, ${name}`,
                                fparagraph: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ea aliquam nostrum, in incidunt quia placeat, cum similique facere provident tenetur iure! Cupiditate illum aliquam quam animi iusto magnam nihil?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam qui at nobis repellat, quas voluptatibus sunt ad magni obcaecati, sed, nesciunt amet enim. Distinctio eius laudantium expedita error sapiente libero!`,
                                btn: `<a href="#" class="btn-small green darken-3">Info Link Here</a>`,
                                subtitle: `Ensure to check back`,
                                sParagraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem illum reiciendis illo quae perferendis veritatis sequi autem, nihil tempore facilis repellat ipsa est totam adipisci explicabo provident libero officia!`,
                                schoolname: SCHOOL_FULL_NAME,
                            });
                            completedTask.createUi();
                        })
                        .catch(error => {
                            console.log(error.message);
                            toastIt('red', 'Unexpected error1!, please try again');
                        });
            // ------------------------------------



            
        }
        else 
        {
            toastIt('red', this.#mErrorMsg);
        }

    }

}

export { FreshStaffApplication };