
/*******************************************************************
 * This class is responsible for getting the data needed for creating and displaying the main menu of the application
 * 19-03-2023
 * ******************************************************************
 */


import { toastIt } from "../utils/toast_it.js";
import { 
    SCHOOL_SHORT_NAME,
    getMainSectionData
} from "../config/app_config.js";
import { doc } from "firebase/firestore";


class MainMenu 
{
    constructor(sectMenuArr, mainMenuItems)
    {
        //The error variables
        this._mErrors = 0;
        this.mErrorMsg = '';

        //The school logo-name and menu-items
        this.schoolShortName = SCHOOL_SHORT_NAME;
        this.mainMenuLinks = mainMenuItems;

        //The code that set-up the menu-items
        this.menuLinks = ``;
        this.mainMenuLinks.forEach(menu => {
                this.menuLinks += `
                    <li>
                        <a href="#" class="teal-text ${menu}">
                            ${menu}
                        </a>
                    </li>`;
        });


        //The code that formats the dropdown menu(containing the school sections as its content).//
        this.dropMenu = sectMenuArr;
        if(!this.dropMenu)
        {
            this._mErrors++;
            this.mErrorMsg = "You are probably offline!";
        }
        else 
        {
            this.dropMenuLinks = ``;
            this.dropMenu.forEach(sec => {
                this.dropMenuLinks += `
                    <li><a href="#" data-section="${sec.id}"><small>${sec.name}</small></a></li>
                `;
            });
        }


    }










    createUi()
    {
        if (this._mErrors == 0)
        {

            this.mainMenu = `
                <div class="navbar-fixed">
                <nav class="white teal-text z-depth-0">
                <div class="nav-wrapper container">
                    <a href="#!" class="brand-logo">
                        <small>
                            <b class="teal-text home">
                                ${this.schoolShortName}
                            </b>
                        </small>
                    </a>
                    <a href="#" data-target="slide-out" class="sidenav-trigger teal-text">
                        <i class="material-icons">menu</i>
                    </a>
                    <ul class="right hide-on-med-and-down">
                        ${this.menuLinks}
                    </ul>
                </div>
            </nav>
            </div>

            <!-- Dropdown Structure -->
            <ul id="dropdown1" class="dropdown-content">
                ${this.dropMenuLinks}
            </ul>
            `;

            //Get the header element from the ui
            let header = document.querySelector('header');
            header.innerHTML = this.mainMenu;


            var dropdowntrigger = document.querySelectorAll('.dropdown-trigger');
            M.Dropdown.init(dropdowntrigger);

            var sidenav = document.querySelectorAll('.sidenav');
            M.Sidenav.init(sidenav);








        
            /******************************************************
             * ONYEKA
             * Register event handler for the clicking of the the app-logo-name, the handler would have to invoke the main-section-class.
             * *****************************************************
             */
            if (document.querySelector('.home'))
            {
                let home = document.querySelector('.home');
                home.addEventListener('click', e => {
                    e.preventDefault();
                    import('../viewClasses/main_section.js')
                    .then(m => {
                        let setupData = getMainSectionData();
                        let main_section = new m.MainSection(setupData);
                        main_section.createUi();
                    })
                    .catch(error => {
                        toastIt('red', 'Device is offline!');
                        console.log(error.message);
                    });
                });
            }




            /*****************************************************
             * Register handler for admission button on the main menu
             * *************.*****************************************
             */
            if(document.querySelector('.Admission'))
            {
                let admissionLnk = document.querySelector('.Admission');
                admissionLnk.addEventListener('click', e => {

                    import('../viewClasses/admission_pin_ui.js')
                        .then(m => {
                            let admission_pin_ui = new m.AdmissionPin();
                            admission_pin_ui.createUi();
                        })
                        .catch(error => {
                            toastIt("pink", "Device offline");
                            console.log(error.message);
                        });
                        
                });
            }






            /***************************************
             * Activate the staff login button
             * *****************************************
             */

            if (document.querySelector('.Staff'))
            {
                
                let staffBtn = document.querySelector('.Staff');
                staffBtn.addEventListener("click", e => {

                    import('../viewClasses/staff_login.js')
                    .then(m => {
                        let staff_login = new m.StaffLogin();
                        staff_login.createUi();
                    })
                    .catch(error => {
                        console.log(error.message);
                    });

                });




            }









            /***************************************
             * Activate Student login button here 
             * *************************************
             */
            if (document.querySelector('.Students'))
            {
                
                document.querySelector('.Students').addEventListener('click', e => {

                    import('../viewClasses/student_login.js')
                    .then(m => {

                        let student_login = new m.StudentLogin();
                        student_login.createUi();

                    
                    })
                    .catch(error => {
                        console.log(error.message);
                    });


                });
            }












            /***************************************
             * Activate Sections button here 
             * *************************************
             */
            if (document.querySelector('.Sections'))
            {
                // console.log("Sections is array!");
                document.querySelector('.Sections').addEventListener('click', e => {
                    e.preventDefault();
                    import('../viewClasses/school_sections.js')
                    .then(m => {

                        let school_section = new m.SchoolSections();
                        school_section.createUi();

                    })
                    .catch(error => {
                        console.log(error.message);
                    });


                   

                });
            }









            /*****************************************************
             * Register handler for ABOUT-button on the main menu
             * ******************************************************
             */
            if(document.querySelector('.About'))
            {
                document.querySelector('.About').addEventListener('click', e => {
                    e.preventDefault();
                    import('../viewClasses/about_us.js')
                    .then(m => {
                        let about_us = new m.AboutUs();
                        about_us.createUi();
                    })
                    .catch(error => { console.log(error.message); });
                });
            }








        }
        else 
        {
            toastIt("red", this.mErrorMsg);
        }

    }
}
export { MainMenu };