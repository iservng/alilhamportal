
/***************************************************************************
 * This class is responsible for collecting and processing the submited student login form
 * *********************************************************************
 */
import { toastIt } from '../utils/toast_it.js';
class StudentLoginHandler 
{
    #_mErrors;
    #mErrorMsg;
    #form;
    #email;
    #password;
    #studentId;
    constructor(form)
    {
        this.#_mErrors = 0;
        this.#mErrorMsg = '';

        if(!form)
        {
            this.#_mErrors++;
            this.#mErrorMsg = "The form info not found!";
            return;
        }
        else 
        {
            this.#form = form;

            this.#email = this.#form['email'].value;
            this.#password = this.#form['password'].value;

            //The email and password will be validated using google auth
            //so for now 
            if(!this.#email || !this.#password)
            {
                this.#_mErrors++;
                this.#mErrorMsg = "Invalid credentials";
                return;
            }
            else 
            {

                // call auth here ,The auth object provides the student id
                this.#studentId = 6;
            }

        }
        

    }

    validateStudent()
    {
        if(this.#_mErrors == 0)
        {
            /**********************************************************************
             * We then dynamically call for the student profile page to be displayed
             * **********************************************************************
             */
            import('../viewClasses/student_profile_page_ui.js')
            .then(m => {

                /**
                 * Using the google authentication service, we can extract the studentID form auth-user-object
                 */



                let student_profile_page = new m.StudentProfilePage(this.#studentId);
                student_profile_page.createUi();
            })
            .catch(error => {
                console.log(error.message);
            });




        }
        else 
        {
            toastIt('red', this.#mErrorMsg);
        }

    }

}


export { StudentLoginHandler };