/*******************************************************************************
 * The system is responsible for collecting the data neccessary for the creation of the staff-application form interface. Its called or invoked when the buttion that says "Apply as STAFF" is clicked.
 * ************************************************************************
 */
import { toastIt } from "../utils/toast_it.js";
import { StaffPersonalInfoFields } from "../config/staff_personal_info_fields.js";
import { lowAndRemvSpce } from "../utils/lower_and_remove_space.js";
import { StaffCredentialsField } from "../config/staff_credentials_fields.js";
import { preloader } from '../utils/preloader.js';

class StaffApplicationForm {
  #_mErrors;
  #mErrorMsg;
  #uiContent;
  #personalInfoFields;
  #credentialsInforFields;
  #schoolSections;
  #schoolBranches;
  #applicationType;
  #pageTitle;

  constructor(application_ype) {
    this.#_mErrors = 0;
    this.#mErrorMsg = "";


    if(!application_ype)
    {
        this.#_mErrors++;
        this.#mErrorMsg = "Application type info not found!";
        return;
    }
    else 
    {
        /*************************************************
         * Determine the application type use of this form
         * **********************************************
         */
        this.#applicationType = application_ype;
        // console.log(this.#applicationType);


        /**********************************************************
         * Asign the appropriate page-title base on the value of the "applicationType" variable above
         * *********************************************************
         */
        

        if (this.#applicationType == "FreshStaffApplication")
        {
            this.#pageTitle = "Staff Application for Employment";
            this.applicationTypeValue = "Fresh Staff Application"
            
            this.formUserType = `<input type="text" name="application_type" value="Apply Type: ${this.applicationTypeValue}" disabled>`;

        }
        else if (this.#applicationType == "StaffProfileDetailsForm")
        {
            this.#pageTitle = "Staff Profile Details Form";
            this.applicationTypeValue = "Existing Staff User-Code";

           
            this.formUserType = `<input type="text" name="application_type" placeholder="Enter ${this.applicationTypeValue}...">`;

        }
        else 
        {
            this.#_mErrors++;
            this.#mErrorMsg = "Apply type info not fount!";
            return;

        }

    }

    







    /*******************************
     * Staff personal info fields
     * ****************************
     */
    if (!StaffPersonalInfoFields.getFields()) {
      this.#_mErrors++;
      this.#mErrorMsg = "The field info not found!";
      return;
    } else {
      this.#personalInfoFields = StaffPersonalInfoFields.getFields();
      this.personalInfos = ``;
      this.#personalInfoFields.forEach((field) => {
        this.personalInfos += `
                    <div class="col s12 m4 l4">
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="${lowAndRemvSpce(
                                  field.name
                                )}" type="${field.type}" class="validate personal_info">
                                <label for="${lowAndRemvSpce(field.name)}">
                                    ${field.name}
                                </label>
                            </div>
                        </div>
                    </div>
                `;
      });
    }





    /********************************
     * Staff credentials info fields
     * *******************************
     */
    if(!StaffCredentialsField.getFields())
    {
        this.#_mErrors++;
        this.#mErrorMsg = "The credentials field not found!";
        return;
    }
    else 
    {
        this.#credentialsInforFields = StaffCredentialsField.getFields();
        this.credentialsFields = ``;
        this.#credentialsInforFields.forEach(field => {

            let optional = (field.name == 'O Level Certificate 2')? '(optional)' : '';
            this.credentialsFields += `

                <div class="col s12 m4 l4">
                    <p><b class="teal-text">Upload ${field.name}</b> <small class="pink-text">${optional}</small></p>
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>Click</span>
                            <input type="file" class="${field.classes}" name="${lowAndRemvSpce(field.name)}">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder=" PDF format only">
                        </div>
                    </div>
                </div>

            `;
        });
    }





    if(!localStorage.getItem('public_menu_items'))
    {
        this.#_mErrors++;
        this.#mErrorMsg = "School section info not found!";
        return;
    }
    else 
    {
        this.#schoolSections = JSON.parse(localStorage.getItem('public_menu_items'));
        this.sectionOptions = ``;
        this.#schoolSections.forEach(section => {
            this.sectionOptions += `

                <div class="col s12 m4 l4">
                    <p>
                        <label>
                            <input name="schoolsection" type="radio" value="${section.id}" />
                            <span>${section.name}</span>
                        </label>
                    </p>
                </div>

            `;
        });
    }





    /*************************************
     * Configure for the school branches
     * ***********************************
     */
    if(!localStorage.getItem('school_branches'))
    {
        this.#_mErrors++;
        this.#mErrorMsg = "School branches info not found!";
        return;
    }
    else 

    {
        this.#schoolBranches = JSON.parse(localStorage.getItem('school_branches'));
        // console.log(this.#schoolBranches);
        this.schoolBranchOutput = ``;
        this.#schoolBranches.forEach(branch => {
            this.schoolBranchOutput += `
                <div class="col s12 m4 l4">
                    <p>
                        <label>
                        <input name="school_branch" type="radio" value="${branch.id}" />
                        <span>${branch.name} Branch</span>
                        </label>
                    </p>
                </div>
            `;
        });
    }
    // localStorage.getItem('school_branches')





  }












  createUi() {
    if (this.#_mErrors == 0) {
      this.#uiContent = `
            <div class="container">
            <div class="row">

                <div class="col s12" style="margin-top: 3rem;">
                    <div class="center-align">
                        <img src="../public/images/logo.png" alt="">
                        <p><b class="teal-text">Alilham Islamic College Katsina</b></p>
                    </div>
                </div>

                <div class="col s12" style="margin-top: 3rem;">
                    
                    <div class="center-align">
                        <h4 class="teal-text"><small><b>${this.#pageTitle}</b></small></h4>
                    </div>

                    <p>
                        <p>
                            <b class="red-text">Instructions [<span class="blue-text">${this.applicationTypeValue}</span>]</b>
                        </p>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis aut veritatis incidunt ducimus omnis expedita totam praesentium quaerat! Quisquam magni autem sunt nihil voluptates excepturi incidunt, alias praesentium nobis!</small>
                    </p>
                    
                </div>

                <div class="col s12" style="margin-top: 2rem;">

                    <h5><small class="red-text"><b>Personal Information</b></small></h5>
                    
                </div>

                <form class="col s12" id="staff_apply_form" enctype="multipart/form-data">

                    ${this.formUserType}

                <div class="col s12 m4 l4" style="margin-top: 3rem;">
                    <p><b class="teal-text">Upload Passport</b></p>
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>File</span>
                            <input type="file" name="passport">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder="Upload recent passport">
                        </div>
                    </div>
                </div>

                
                    <!-- Personal Information  -->
                    ${this.personalInfos}
                    
                    


                    <!-- Credentials FILES  -->
                    <div class="col s12" style="margin-top: 2rem;">

                        <h5><small class="red-text"><b>Credentials</b></small></h5>
                        
                    </div>
                    ${this.credentialsFields}


                    



                    <div class="col s12" style="margin-top: 2rem;">

                        <h5><small class="red-text"><b>Professional Certificates</b></small></h5>
                        
                    </div>

                    <div class="col s12 m4 l4">
                        <p><b class="teal-text">Upload Professional Certificate </b><small class="pink-text">(optional)</small></p>
                        <div class="file-field input-field">
                            <div class="btn">
                                <span>File</span>
                                <input type="file" name="professionalcertificate">
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" placeholder="upload PDF format only">
                            </div>
                        </div>
                    </div>


                    <div class="col s12" style="margin-top: 2rem;">

                        <h5><small class="red-text"><b>School Section</b></small></h5>

                        <p>
                            <p class="teal-text"><b>Select School Section</b></p>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam optio magni, quisquam, nemo praesentium culpa qui ex harum molestias quasi pariatur voluptatum aspernatur nam architecto laborum tempore iure. Rem, eligendi.</small>
                        </p>
                        
                    </div>

                    ${this.sectionOptions}








                    <div class="col s12" style="margin-top: 2rem;">

                        <h5><small class="red-text"><b>School Branch</b></small></h5>

                        <p>
                            <p class="teal-text"><b>Select School Branch</b></p>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam optio magni, quisquam, nemo praesentium culpa qui ex harum molestias quasi pariatur voluptatum aspernatur nam architecto laborum tempore iure. Rem, eligendi.</small>
                        </p>
                    </div>

                    ${this.schoolBranchOutput}

                    








                    <div class="col s12" style="margin-top: 2rem;">
                        <h5><small class="red-text"><b>Attestation</b></small></h5>
                    </div>

                    <div class="col s12">
                        <p><b class="teal-text">Accept or Decline Attestation </b><small class="pink-text"></small></p>
                        <div class="file-field input-field">
                           <small>

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veritatis mollitia blanditiis eum deserunt eaque, accusantium obcaecati laborum explicabo qui quibusdam vitae aliquid quo aliquam dolore repellat, modi velit distinctio!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veritatis mollitia blanditiis eum deserunt eaque, accusantium obcaecati laborum explicabo qui quibusdam vitae aliquid quo aliquam dolore repellat, modi velit distinctio!
                            
                            </small>
                        </div>
                    </div>


                    <div class="col s12 m4 l4">
                        <div class="row">
                            <div class="input-field col s12">
                                <div class="switch">
                                    <label>
                                      Decline
                                      <input name="attestation" type="checkbox">
                                      <span class="lever"></span>
                                      Accept
                                    </label>
                                  </div>
                            </div>
                        </div>
                        <div class="divider"></div>
                    </div>

                    <input type="hidden" name="application_class" value="${this.#applicationType}">

                    <div class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                              <input type="submit" name="${this.#applicationType}" value="Submit Application" class="btn-large green darken-3 validate">
                              <label>&nbsp;</label>
                            </div>
                        </div>
                    </div>
                    



                    <div class="col s12" style="margin-top: 3rem;">
                        <p><small>Powered by </small><b class="teal-text">iservng</b></p>
                    </div>
                </form>
            </div>
        </div>
            `;

      /*********************************
       * Insert the form UI into the DOM
       * *******************************
       */
      let main = document.querySelector("main");
      main.innerHTML = "";
      main.innerHTML = this.#uiContent;






      /*************************************************************************
       * Register an event handler for the on-submit of the staff application form above, using the "application_type" info call the appropriate class and pass this form as it parameter.
       * *******************************************************************
       */
      if (document.querySelector('#staff_apply_form'))
      {
            document.querySelector('#staff_apply_form').addEventListener('submit', e => {

                e.preventDefault();
                // console.log(e.target['appliation_class'].value);
                switch (e.target['application_class'].value) 
                {
                    case "FreshStaffApplication":
                    
                        import('../handler/freshstaffapplication.js')
                        .then(m => {
                            let freshApply = new m.FreshStaffApplication(e.target);
                            freshApply.processIt();
                        })
                        .catch(error => { console.log(error.message); });
                        break;

                    case "StaffProfileDetailsForm":
                        
                        import('../handler/staffprofiledetailsform.js')
                        .then(m => {
                            let staffprofile = new m.StaffProfileDetailsForm(e.target);
                            staffprofile.processIt();
                        })
                        .catch(error => { console.log(error.message); });

                        break;
                
                    default:
                        toastIt('red', 'Unxepected Error!');
                        break;
                }

                
            });
      }





    } else {
      toastIt("red", this.#mErrorMsg);
    }
  }
}

export { StaffApplicationForm };
