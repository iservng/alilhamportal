import { toastIt } from "../utils/toast_it.js";
import { StuPersonalInfoFields } from "../config/stu_persona_info_fields.js";
import { StuMedicalInfoFields } from "../config/stu_medical_info_fields.js";
import { lowAndRemvSpce } from "../utils/lower_and_remove_space.js";
import { StuFatherInfoFields } from "../config/stu_father_info_fields.js";
import { StuMotherInfoFields } from "../config/stu_mother_info_fields.js";
import { StuTypeInfoFields } from "../config/stu_type_info_fields.js";
// class StuTypeInfoFields

class StudentApplicationForm {
  constructor() {
    this._mErrors = 0;
    this.mErrorMsg = "";

    /*******************************************************************
     * The code below collects the fields for personal information and formats it into an html fields in the DOM.
     * *****************************************************************
     */
    this.personalInfoFieldsSet = StuPersonalInfoFields.getFields();
    this.personalInfoFields = ``;

    this.personalInfoFieldsSet.forEach((field) => {
      this.personalInfoFields += `
            <div class="col s12 m4 l4">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="${lowAndRemvSpce(
                          field.name
                        )}" name="${lowAndRemvSpce(field.name)}" type="${
        field.type
      }" class="validate personalinfo">
                        <label for="${lowAndRemvSpce(field.name)}">
                            ${field.name}
                        </label>
                    </div>
                </div>
            </div>
            `;
    });

    /***********************************************************************
     * The logic below retrieves the choices made by the user in the PIN-form, and uses the section-id to retrieve the name of the selected school section.
     * *******************************************************************
     */
    this.schoolSectionsInfo = JSON.parse(
      localStorage.getItem("public_menu_items")
    );
    this.pinChoices = JSON.parse(sessionStorage.getItem("pin"));
    this.sectionId = this.pinChoices.section;

    /********************************************************* *
        The id of the school-section selected by user is used to grab the name of the specific section.
        ***********************************************************/
    this.userSelectedSectionName = "";
    for (let i = 0; i < this.schoolSectionsInfo.length; i++) {
      if (this.schoolSectionsInfo[i].id === this.sectionId) {
        this.userSelectedSectionName = this.schoolSectionsInfo[i].name;
        break;
      }
    }

    /**********************************************************************
     * The code prepares the file for primary / testimonial certificate field. This field is used only if the user had selected js or ss as his school section in the pin form.
     * ****************************************************************
     */
    if (
      this.userSelectedSectionName == "Junior Secondary" ||
      this.userSelectedSectionName == "Senior Secondary"
    ) {
      this.primaryCertificate = `
            <div class="col s12 m4 l4">
                <div class="row">
                    <div class="input-field col s12">
                        <p><b>Primary Certificate</b></p>
                        <input id="primarycertificate" name="primarycertificate" type="file" class="validate primarycertificate">
                            
                    </div>
                </div>
            </div>
            `;
    } else this.primaryCertificate = ``;

    /*******************************************************************
     * The code below collects the fields for user medical information and formats it into an html fields in the DOM.
     * *****************************************************************
     */

    this.stuMedInfoFieldsSet = StuMedicalInfoFields.getFields();
    this.stuMedInfoFields = ``;
    this.stuMedInfoFieldsSet.forEach((field) => {
      this.stuMedInfoFields += `
            <div class="col s12 m4 l4">
                 <div class="row">
                     <div class="input-field col s12">
                         <input id="${lowAndRemvSpce(
                           field.name
                         )}" name="${lowAndRemvSpce(field.name)}" type="${
        field.type
      }" class="validate medicalinfo">
                         <label for="${lowAndRemvSpce(field.name)}">
                             ${field.name}
                         </label>
                     </div>
                 </div>
            </div>
            `;
    });

    /************************************************************
     * The code that follows retrieve the fields and implement the students-father information fields html in the DOM.
     * ***********************************************************
     */

    this.stuFatherFieldsSet = StuFatherInfoFields.getFields();
    this.stuFatherFields = ``;
    this.stuFatherFieldsSet.forEach((field) => {
      this.stuFatherFields += `
            <div class="col s12 m4 l4">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="${lowAndRemvSpce(
                          field.name
                        )}" name="${lowAndRemvSpce(field.name)}" type="${
        field.type
      }" class="validate fatherinfo">
                        <label for="${lowAndRemvSpce(field.name)}">
                            ${field.name}
                        </label>
                    </div>
                </div>
            </div>
            `;
    });

    /************************************************************
     * The code that follows retrieve the fields and implement the students-Mother information fields html in the DOM.
     * ***********************************************************
     */
    this.stuMotherFieldsSet = StuMotherInfoFields.getFields();
    this.stuMotherFields = ``;
    this.stuMotherFieldsSet.forEach((field) => {
      this.stuMotherFields += `
            <div class="col s12 m4 l4">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="${lowAndRemvSpce(
                          field.name
                        )}" name="${lowAndRemvSpce(field.name)}" type="${
        field.type
      }" class="validate motherinfo">
                        <label for="${lowAndRemvSpce(field.name)}">
                            ${field.name}
                        </label>
                    </div>
                </div>
            </div>
            `;
    });

    /********************************************************************
     * This code below supplies and prepare the html code for the student type fields of the student application for admission form.
     * **********************************************************************
     */
    // StuTypeInfoFields
    this.stuTypeInforFieldsSet = StuTypeInfoFields.getFields();
    this.stuTypeInforFields = ``;
    this.stuTypeInforFieldsSet.forEach((field) => {
      this.stuTypeInforFields += `
            <div class="col s12 m4 l4" >
                <div class="row">
                    <div class="input-field col s12">
                        <label>
                            <input type="${field.type}" name="${field.name}">
                            <span>
                                <b>${field.label}</b>
                            </span>
                        </label>
                    </div>
                </div>
            </div> 
            `;
    });
  }

  createUi() {
    if (this._mErrors == 0) {
      this.formContent = `
            <div class="container">
            <div class="row">
                <div class="col s12">
                    <div class="center-align teal-text" style="margin-top: 4rem;">
                        <div class="center-align">
                            <img src="../public/images/logo.png" alt="">
                        </div>
                        <h5>Admission <b>Application Form</b></h5>
                    </div>
                    <div class="divider"></div>
                    <div class="div">
                        <p>
                            <p><b class="teal-text">Instructions for Application</b></p>
                            <small>
                                <b class="red-text">
                                Please kindly note that all the information that would be provided in the fields below must be correct and accurate, as you would be liable for any mis-information or forgery. Also a current passport size photograph of student in a JPG format is required, and a copy of student birth certificate scanned in a PDF format is required.
                                </b>
                            </small>
                        </p>
                    </div>
                    <div class="divider"></div>
                </div>


                <!-- form A4 PART  -->
                <div class="col s12" style="border: 1px solid rgb(212, 212, 212); margin-top: 2rem;">
                    <!-- card start  -->
                    <div class="row">
                        <div class="col s12">
                          <div class="card-panel teal lighten-5 z-depth-0">
                            <span class="teal-text">


                                <!-- fields Start  -->

                                
                                <div class="row">
                                    <form action="" id="student_application_form" enctype="multipart/form-data">


                                    <div class="col s12">
                                        <h6 class="teal-text"><b>Personal</b> Information</h6>
                                    </div>












                                    <div class="col s12 center-align" id="passportHolder">
                                    <img id="passportImg" class="circle">
                                    </div>

                                    <div class="col s12">
                                        <b>Upload Passport</b>
                                        <div class="row">
                                            <div class="input-field col s12 m4 l4">
                                                <input name="passport" type="file" class="validate studentpassport">
                                            </div>
                                        </div>
                                    </div>










                                    ${this.personalInfoFields}
                                    















                                    <div class="col s12 m4 l4">
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <p><b>Birth Certificate</b></p>
                                                <input id="birthcertificate" name="birthcertificate" type="file" class="validate">
                                                
                                            </div>
                                        </div>
                                    </div>


                                    ${this.primaryCertificate}


















                                    <div class="col s12">
                                        <h6 class="teal-text"><b>Medical</b> Information</h6>
                                    </div>

                                    ${this.stuMedInfoFields}
                                    























                                    <div class="col s12">
                                        <h6 class="teal-text"><b>Father's</b> Information</h6>
                                    </div>

                                    ${this.stuFatherFields}
                                   























                                    <div class="col s12">
                                        <h6 class="teal-text">
                                            <b>Mother's</b> Information
                                        </h6>
                                    </div>

                                    ${this.stuMotherFields}

                                    





















                                    <div class="col s12">
                                        <h6 class="teal-text">
                                            <b> Student</b> Type
                                        </h6>
                                    </div>

                                    ${this.stuTypeInforFields}

                                    












                                    <div class="col s12" style="margin-top: 3.6rem;">
                                        <h6 class="red-text">Parent's <b>Attestation</b></h6>
                                    </div>


                                    <div class="col s12">
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id eos ea reiciendis, asperiores numquam est porro, nam soluta dicta eligendi autem ratione sit illo veritatis facilis blanditiis, nostrum iusto laboriosam?
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptatum saepe fuga deleniti corrupti, excepturi qui porro nam voluptates nisi facere totam autem maxime vero ab distinctio in laudantium eveniet!
                                        </p>
                                        <p>
                                            <a href="../../public/images/pdfs/OurRulesandRegulations.pdf" target="_blank">Click here to view our rule and regulations</a>
                                        </p>
                                    </div>


                                    <div class="col s12 m4 l4">
                                        <div class="row">
                                            <div class="input-field col s12 switch">
                                                <label>
                                                    <b class="">Decline</b>
                                                    <input name="attestation" type="checkbox">
                                                    <span class="lever"></span>
                                                    <b class="">Accept</b>
                                                </label>
                                            </div>
                                        </div>
                                    </div>




                                    <div class="col s12" style="margin-top: 4rem;">
                                        <div class="divider"></div>
                                        <div class="row">
                                            <div class="input-field col s12">

<input type="submit" class="btn-large green darken-3 z-depth-4" name="SubmitApplicationBtn" value="Submit Application">
                                                
                                            </div>
                                        </div>
                                    </div>


                                    
                                </form>
                                </div>

                                <!-- fields Start  -->
                                

                            </span>
                          </div>
                        </div>
                    </div>
                    <!-- card stop -->
                    <p>
                        <div class="divider"></div>
                        <small>powered by <b class="teal-text">iservng</b></small>
                    </p>
                </div>


            </div>      
        </div>
            `;

      /***************************************
       * Set up to put the form in the DOM
       * ************************************
       */
      let main = document.querySelector("main");
      main.innerHTML = "";
      main.innerHTML = this.formContent;

      /********************************************
       * Register on change of the passport field
       * *****************************************
       */
      if (document.querySelector(".studentpassport")) {
        document
          .querySelector(".studentpassport")
          .addEventListener("change", (e) => {
            let fileobj = e.target.files[0];
            let name = fileobj.name;
            let size = fileobj.size;
            let type = fileobj.type;
            let maxSize = 50000;
            if (size > maxSize) {
              M.Toast.dismissAll();
              var toastHTML = `
                        <span>
                            Passport should be ${maxSize / 1000}kb or less.
                        </span>`;
              M.toast({ html: toastHTML, classes: "red" });

              if (document.querySelector("#passportImg")) {
                let img = document.querySelector("#passportImg");
                img.src = "";
                img.style.width = 0;
                img.style.height = 0;
              }

              document.querySelector("#student_application_form").reset();
              return;
            } else {
              this.reader = new FileReader();
              // console.log(this.reader);
              this.reader.readAsDataURL(fileobj);

              this.reader.addEventListener("load", (e) => {
                let img = document.querySelector("#passportImg");
                img.src = e.target.result;
                img.style.width = "130px";
                img.style.height = "135px";
              });
            }
          });
      } //end of student passport field test.

      /*****************************************************
       * Register event handler for the submit of the form
       * ****************************************************
       */
      let student_application_form = document.querySelector(
        "#student_application_form"
      );

      student_application_form.addEventListener("submit", (e) => {
        e.preventDefault();
        import("../handler/student_application_form_handler.js")
          .then((m) => {
            let studentApplication = new m.StudentApplicationFormHandler(
              e.target
            );
            studentApplication.processForm();
          })
          .catch((error) => {
            console.log(error.message);
            toastIt("red", "Device Offline");
          });
      });
    } else {
      toastIt("red", this.mErrorMsg);
    }
  }
}

export { StudentApplicationForm };
