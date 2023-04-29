
import { toastIt } from '../utils/toast_it.js';
class StudentLogin 
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
            this.studentLoginContent = `
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
                            <form action="" id="student_login">
                                <div class="card-panel teal lighten-4">
                                    <p>
                                        <h5 class="teal-text"><small><b>Student Login</b></small></h5>
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
                    
                </div>

                <div class="col s12 m4 l4">
                    &nbsp;
                </div>

            </div>
        </div>
            `;



            //Now get the reference to the main tag on the UI 
            let main = document.querySelector('main');
            main.innerHTML = '';
            main.innerHTML = this.studentLoginContent;




            /****************************************************
             * Register a handler for the on-submit of this form
             * ****************************************************
             */
            if(document.querySelector("#student_login"))
            {
                document.querySelector("#student_login").addEventListener("submit", e => {
                    e.preventDefault();
                    // Dynamically import handler and pass "e.target" as the argument
                    import('../handler/student_login_handler.js')
                    .then(m => {
                        let student_login_handler = new m.StudentLoginHandler(e.target);
                        student_login_handler.validateStudent();
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
                    
                });
            }



        }
        else 
        {
            toastIt('red', "GUI could not be loaded");
        }

    }
}

export { StudentLogin };