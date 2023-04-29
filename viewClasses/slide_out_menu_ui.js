
/****************************************************************
 * 20 - 03 - 2023
 * -------------------
 * This class is responsible for taking the data needed and creating the UI for the slide out menu. The data it takes is supplied from the config.js file and also it consumes the same data as the the class responsible for creating the main menu Ui
 * *************************************************************
 */

import { toastIt } from '../utils/toast_it';

class SlideOutMenu 
{

    constructor(sectMenuArr, mainMenuItems)
    {
        //Error variable
        this._mErrors = 0;
        this.mErrorMsg = '';

        //Profile variables
        this.profileImageUrl = 'images/yuna.jpg';
        this.profileName = 'John Doe';
        this.profileEmail = 'jdandturk@gmail.com';
        
        
        this.itemsList = mainMenuItems;
        //The menu item variables 
        this.menu = ``;
        this.itemsList.forEach(item => {
                this.menu += `<li><a href="#" class="${item}">${item}</a></li>`;
        });




       
        //The code that formats the dropdown menu(containing the school sections as its content).
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
                    <li><a href="#" class="teal-text ${sec.name}" data-section="${sec.id}"><small>${sec.name}</small></a></li>
                `;
            });
        }



    }









    createUi()
    {

        if (this._mErrors == 0)
        {
            this.slideOutContent = `
            <ul id="slide-out" class="sidenav">
            <li>
                <div class="user-view teal">
                    <a href="#user">
                        <img class="circle" src="${this.profileImageUrl}">
                    </a>
                    <a href="#name">
                        <span class="white-text name">${this.profileName}</span>
                    </a>
                    <a href="#email">
                        <span class="white-text email">${this.profileEmail}</span>
                    </a>
                </div>
            </li>
            ${this.menu}
            </ul>

            
            <ul id='dropdown2' class='dropdown-content z-depth-0'>
                ${this.dropMenuLinks}
            </ul>
            `;

            //Get the header element from the ui
            let aside = document.querySelector('aside');
            aside.innerHTML = this.slideOutContent;

            var dropdowntrigger = document.querySelectorAll('.dropdown-trigger');
            M.Dropdown.init(dropdowntrigger);

            var sidenav = document.querySelectorAll('.sidenav');
            M.Sidenav.init(sidenav);





            // =============================================
            //ACTIVATIONS
            // ========================================






            
            /*****************************************************
             * Register handler for admission button on the slide out menu
             * ******************************************************
             */
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




            // ----------------------------------







        }
        else 
        {
            toastIt('red', this.mErrorMsg);
        }

    }

}


export {
    SlideOutMenu
};