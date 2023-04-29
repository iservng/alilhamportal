
import { toastIt } from '../utils/toast_it.js';
class StaffLogin 
{
    #title
    #_mErrors
    #mErrorMsg
    constructor()
    {
        this.#title = "Staff Login";
        this.#_mErrors = 0;
        this.#mErrorMsg = '';
    }

    createUi()
    {
        if (this.#_mErrors == 0)
        {
            this.staffloginContent = `
            <div class="container">
            <div class="row">
                <div class="col s12">
                    &nbsp;
                </div>

                <div class="col s12 m4 l4">
                    &nbsp;
                </div>

                <div class="col s12 m4 l4 z-depth-4" style="margin-top: 4rem;">
                    <!-- form here  -->
                    <div class="row">
                        <div class="col s12">
                            <form action="" id="staff_login">
                                <div class="card-panel teal lighten-4">
                                    <p>
                                        <h5 class="teal-text"><small><b>Staff Login</b></small></h5>
                                    </p>

                                    <div class="row">
                                        <div class="input-field col s12">
                                          <input name="email" id="email" type="email" class="validate">
                                          <label for="email">Email</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                          <input name="password" id="password" type="password" class="validate">
                                          <label for="password">Password</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                          <input class="btn-small teal darken-4" type="submit" value="validate">
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="right-align">
                        <p>I dont have an account?
                            <b><a href="#" class="exist_staff_open_form" data-user="StaffProfileDetailsForm">Sign up</a></b>
                        </p>
                        
                    </div>
                </div>

                <div class="col s12 m4 l4">
                    &nbsp;
                </div>

                
                <div class="col s12 center-aling" style="margin-top: 4rem; margin-bottom: 3rem;">
                    <small>Powered by <b class="teal-text">iservng</b></small>
                </div>

                

            </div>
        </div>
            `;



            //Now get the reference to the main tag on the UI 
            let main = document.querySelector('main');
            main.innerHTML = '';
            main.innerHTML = this.staffloginContent;





            /***********************************************
             * Activate the check for the staff login form
             * *********************************************
             */

            if (document.querySelector('#staff_login'))
            {
              
                document.querySelector('#staff_login').addEventListener('submit', e => {

                    e.preventDefault();
                    import('../handler/staff_login_handler.js')
                    .then(m => {

                        let handler = new m.StaffLoginHandler(e.target);
                        handler.validateStaff();

                    })
                    .catch(error => {
                        console.log(error.message);
                    })


                });

            }






            /****************************************************
             * Register an event handler for the clicking of "Existing-staff-sign-up" link 
             * ***************************************************
             */
            if (document.querySelector('.exist_staff_open_form'))
            {
                document.querySelector('.exist_staff_open_form').addEventListener("click", e=> {
                    e.preventDefault();

                    //Dynamicall call and invoke the "Staff-application-form-ui" class, 
                    import("../viewClasses/staff_application_form_ui.js")
                    .then(m => {
                        let staff_application = new m.StaffApplicationForm(e.target.dataset.user);
                        staff_application.createUi();
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
                });

            }











        }
        else 
        {
            toastIt('red', "GUI could not be loaded");
        }

    }
}

export { StaffLogin };