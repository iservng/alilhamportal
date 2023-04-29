/**
 * This class is responsible for the taking of the data required and creating of the admission PIN ui, it takes the
 * 1. the school section
 * 2. the branches infor
 * as an array then internally create the ui.
 */
import { toastIt } from "../utils/toast_it.js";
import { SCHOOL_FULL_NAME } from "../config/app_config.js";

class AdmissionPin {
  constructor() {
    //Error variables
    this._mErrors = 0;
    this.mErrorMsg = "";

    //The class variables
    this.logoUrl = "../public/images/logo.png";
    this.schoolFulName = SCHOOL_FULL_NAME;
    this.applicationPinInstruction = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit eligendi provident possimus. Illum consectetur possimus, quasi odio animi vel aperiam sunt molestias consequuntur quo sed accusamus adipisci rem cupiditate nostrum!`;

    //School branches
    if (!localStorage.getItem("school_branches")) {
      this._mErrors++;
      this.mErrorMsg = "School branches not found";
    } else if (JSON.parse(localStorage.getItem("school_branches")) == 0) {
      this._mErrors++;
      this.mErrorMsg = "School branche info empty";
    } else {
      this.schBranches = localStorage.getItem("school_branches");
      this.schBranches = JSON.parse(this.schBranches);

      //Start fixing the school branches side of the form
      this.schBrOptions = ``;
      this.schBranches.forEach((option) => {
        this.schBrOptions += `
                <div class="col s12 m4 l4">
                    <label style="margin-right: 2rem;">
                        <input class="with-gap" name="school_branch" type="radio" value="${option.id}" />
                        <span>${option.name}</span>
                    </label>
                </div>
                `;
      });
    }

    //School sections
    if (!localStorage.getItem("public_menu_items")) {
      this._mErrors++;
      this.mErrorMsg = "School Sections not found";
    } else if (JSON.parse(localStorage.getItem("public_menu_items")) == 0) {
      this._mErrors++;
      this.mErrorMsg = "School section info empty";
    } else {
      this.schSections = localStorage.getItem("public_menu_items");
      this.schSections = JSON.parse(this.schSections);
      this.schSecOptions = ``;

      this.schSections.forEach((option) => {
        this.schSecOptions += `
                <div class="col s12 m4 l4">
                    <label style="margin-right: 2rem;">
                        <input class="with-gap" name="school_section" type="radio" value="${option.id}"/>
                        <span>${option.name}</span>
                    </label>
                </div>
                `;
      });
    }
  }

  createUi() {
    if (this._mErrors == 0) {
      this.uiContent = `
            <div class="container">
                <div class="row">
                    <div class="col s12" style="margin-top: 3rem; margin-bottom: 2rem;">
                        <div class="center-align">
                            <img src="${this.logoUrl}" class="" alt="">
                            <br>
                                <span>Welcome to <b>Admissions</b> unit of</span>
                            <h4 style="margin-top: 0px;" class="teal-text">
                                <small><b> ${this.schoolFulName.toUpperCase()}</b></small>
                            </h4>
                            <b></b>
                        </div>
                    
                        
                        <p>
                            <div class="divider"></div>
                            <p>
                                <b class="red-text">
                                    Apply for Admission
                                </b>
                            </p>
                            <small style="padding-bottom: 1rem;">
                                ${this.applicationPinInstruction}
                            </small>
                            <div class="divider" style="margin-top: 1rem;"></div>
                        </p>
                    </div>


                    <div class="col s12 m6 l6">
                        <form action="" id="pin_form">
                            <div class="row">
                                <div class="col s12">
                                <div class="card white z-depth-3">
                                    <div class="card-content white">

                                        <span class="card-title teal-text" style="margin-bottom: 2rem;">
                                            Get Started
                                        </span>

                                        <p style="margin-bottom: 2rem;">
                                        <b class="teal-text">
                                            Enter your Application PIN
                                        </b>
                                        </p>

                                        <p style="margin-bottom: 3rem;">
                                            <div class="input-field col s12">
                                                <input name="pin" id="pin" type="text" class="validate" data-length="20">
                                                <label for="pin">Enter PIN...</label>
                                            </div>
                                        </p>



                                        <b class="teal-text">School Section</b>
                                        <p>
                                            <small>
                                                I am a very simple card. I am good at containing small bits of information.
                                                I am convenient because I require little markup to use effectively.
                                            </small>
                                            <br>
                                            <div class="row" style="margin-top: .5rem;">
                                                ${this.schSecOptions}
                                            </div>
                                        </p>


                                        
                                        <b class="teal-text">School Branch</b>
                                        <p>
                                            <small>
                                                I am a very simple card. I am good at containing small bits of information.
                                                I am convenient because I require little markup to use effectively.
                                            </small>
                                            <br>
                                            <div class="row" style="margin-top: .5rem;">

                                            ${this.schBrOptions}
                                              
                                            </div>
                                        </p>

                                    </div>
                                    <div class="card-action">

                                        <input type="submit" value="Continue Here" class="btn-small green darken-3 z-depth-2">  
                                        
                                    </div>
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>




                    <div class="col s12 m3 l3" style="border: 1px solid rgb(214, 214, 214);">
                        <div class="row">
                            <div class="col s12">
                            <div class="card-panel teal lighten-5 z-depth-0">
                                <span class="teal-text">
                                    <p>
                                        <b>Check Admission Status?</b>
                                    </p>
                                    <small>
                                        I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                                    </small>
                                    <form action="">
                                        <p style="margin-bottom: 3rem;">
                                            <div class="input-field col s12">
                                                <input name="admision_status_email" id="admision_status_email" type="text" class="validate" data-length="20">
                                                <label for="admision_status_email">Enter email...</label>
                                            </div>
                                        </p>
                                        <p>
                                            <button class="btn-small teal darken-3 white-text">Check Admission</button>
                                        </p>
                                    </form>
                                </span>
                            </div>
                            </div>
                        </div>
                    
                    </div>





                    <div class="col s12 m3 l3">
                        <div class="row">
                            <div class="col s12">
                            <div class="card-panel teal lighten-2 z-depth-0">
                                <span class="white-text">
                                    <p>
                                        <b>Dont have a PIN?</b>
                                    </p>
                                    <small>
                                        I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                                    </small>
                                    <p>
                                        <button class="btn-small white teal-text text-darken-4">Get pin here</button>
                                    </p>
                                </span>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="col s12" style="margin-top: 3rem;">
                        <small>powered by <b class="teal-text">iservng</b></small>
                    </div>
                </div>
            </div>
            `;

      //Now get the reference to the main tag on the UI
      let main = document.querySelector("main");
      main.innerHTML = "";
      main.innerHTML = this.uiContent;

      /*********************************
       * Register submit handler for the PIN form
       * *******************************************
       */
      if (document.getElementById("pin_form")) {
        let pinform = document.querySelector("#pin_form");
        pinform.addEventListener("submit", (e) => {
          e.preventDefault();

          import("../handler/pin_handler.js")
            .then((m) => {
              let pin_handler = new m.PinHandler(e.target);
              pin_handler.callUi();
            })
            .catch((error) => {
              toastIt("pink", "Device offline 1");
              console.log(error.message);
            });
        });
      }
    } else {
      toastIt("red", this.mErrorMsg);
    }
  }
}

export { AdmissionPin };
