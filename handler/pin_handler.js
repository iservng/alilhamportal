

import { toastIt } from "../utils/toast_it.js";
class PinHandler 
{
    constructor(form)
    {
        //Error variables
        this._mErrors = 0;
        this.mErrorMsg = '';

        if (!form)
        {
            this._mErrors++;
            this.mErrorMsg = 'Invalid form';
        }
        else
        {



            this.form = (form);

            /*********************************************
             * Start validating the school section option
             * *******************************************
             */
            this.sections = this.form['school_section'];
            this.userSelectedSection = '';
            for(let i = 0; i < this.sections.length; i++)
            {
                if(this.sections[i].checked) {
                    console.log(this.sections[i]);
                    this.userSelectedSection = (this.sections[i].value);
                    break;
                }
            }

            if (this.userSelectedSection == '' || this.userSelectedSection == null)
            {
                this._mErrors++;
                this.mErrorMsg = "Select section!";
            }
            else 
            {
                this.sectionId = this.userSelectedSection;
            }






            /*********************************************
             * Start validating the school section option
             * *******************************************
             */
            this.branches = this.form['school_branch'];
            this.userSelectedBranch = '';
            for(let i = 0; i < this.branches.length; i++)
            {
                if (this.branches[i].checked) {
                    this.userSelectedBranch = this.branches[i].value;
                    break;
                }
            }
            if(this.userSelectedBranch == '')
            {
                this._mErrors++;
                this.mErrorMsg = 'Select Branch';
            }
            else 
            {
                this.brancheId = this.userSelectedBranch;
            }




            /*********************************************
             * Start validating the Pin entered by the user.
             * Features
             * 1. this pin expires after two weeks
             * 2. pin is self-deleted from the pin collection
             * 3. this check will involve going-throught the db-collection to ensure there is a match.
             * **********************************************
             */
            if(!this.form['pin'].value || this.form['pin'].value == null)
            {
                this._mErrors++;
                this.mErrorMsg = "The pin is required!";
            }
            else if (this.form['pin'].value.trim().length != 20)
            {
                this._mErrors++;
                this.mErrorMsg = "Invalid PIN!";
            }
            else 
                this.pin = this.form['pin'].value.trim();
            


        }
        
    }

    callUi()
    {
        if(this._mErrors == 0)
        {

            //Put pin in the session storage
            let pininfo = {
                pin: this.pin,
                section: this.sectionId,
                branch: this.brancheId,
            }

            sessionStorage.setItem('pin', JSON.stringify(pininfo));

            /**************** *********************************************
            Then dynamically call the Student Application Form UI-class needed to continue application for admission.
            ************************************************/

            import('../viewClasses/student_application_form_ui.js')
            .then(m => {
                let student_application_form_ui = new m.StudentApplicationForm();
                student_application_form_ui.createUi();
            })
            .catch(error => {
                console.log(error.messaage);
                toastIt('red', 'Device Ofline');
            });





        }
        else 
        {

            toastIt('red', this.mErrorMsg)
        }
    }
}
export { PinHandler };