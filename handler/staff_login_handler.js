
import { preloader } from "../utils/preloader.js";
import { toastIt } from "../utils/toast_it.js";

import { 
    getAuth, 
    connectAuthEmulator,
    signInWithEmailAndPassword,
  } from 'firebase/auth';



class StaffLoginHandler 
{
    #_mErrors;
    #mErrosMsg;
    #email;
    #password;
    #form;
    #auth;
    


    constructor(form)
    {
        this.#_mErrors = 0;
        this.#mErrosMsg = ''; 

        if(!form)
        {
            this.#_mErrors++;
            this.#mErrosMsg = "The form info not found";
            return;
        }
        else 
            this.#form = form;
        
    }







    validateStaff()
    {
        this.#auth = getAuth();
        connectAuthEmulator(this.#auth, "http://localhost:9099");
        
        this.#email = this.#form['email'].value;
        this.#password = this.#form['password'].value;

        signInWithEmailAndPassword(this.#auth, this.#email, this.#password)
        .then(cred => {

            console.log(cred.user);
            // import('../viewClasses/school_class_profile.js')
            // .then(m => {
            //     let school_class_profile = new m.SchoolClassProfile();
            //     school_class_profile.createUi();
            // });

        })
        .catch(err => { 

            toastIt('red', err.message);
            console.log(err.message);
            
        });


    }


    
}


export { StaffLoginHandler };