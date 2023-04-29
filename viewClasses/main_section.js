



import { toastIt } from "../utils/toast_it.js";
import { getElem } from '../utils/get_div.js';

class MainSection 
{

    constructor(mainSecSetupData)
    {
        this._mErrors = 0;
        this.mErrorMsg = '';

        //The data that will shown in the main section of the application UI
        
        //Warn if the required data is not available 
        if(!mainSecSetupData)
        {
            this._mErrors++;
            this.mErrorMsg = 'Section data not found!';
        }
        else
        {
            this.mainSecData = mainSecSetupData;
            //Loop through and setup the li-based-slide for the ui//
            this.lislides = ``;
            this.mainSecData.forEach(data => {
                this.lislides += `
                <li class="${data.pgColor}">
                    <img src="${data.imageUrl}">
                    <div class="caption ${data.align}-align">
                        <h3 class="${data.titleColor}"> ${data.title} </h3>
                        <h5 class="${data.subTitleColor}">
                            ${data.subTitle}
                        </h5>
                        <p style="margin-top: 2rem;">
                            <button class="btn-large admission_btn ${data.zdepth} ${data.bt1Color}" style="margin-bottom: 1rem;">
                                ${data.btLabel1}
                            </button>
                            <button data-user="FreshStaffApplication" class="btn-large staffapply_btn ${data.zdepth} ${data.bt2Color}" style="margin-bottom: 1rem;">
                                ${data.btLabel2}
                            </button>
                        </p>
                    </div>
                </li>
                `;
            });

        }
            



    }

    createUi()
    {

        if (this._mErrors == 0)
        {
            

            // Create the ul-slides container and insert the slides 
            this.slidesUl = getElem('ul', 'slides');
            this.slidesUl.innerHTML = this.lislides;

            //Insert the slides container inside the slides-div
            this.sliderDiv = getElem('div', 'slider');
            this.sliderDiv.append(this.slidesUl);

            //Get the main and append the slide-div
            let main = document.querySelector('main');
            main.innerHTML = '';
            main.append(this.sliderDiv);


            var elems = document.querySelectorAll('.slider');
            M.Slider.init(elems, {
            height: 540
            });


            /****************************************
             * This section registers event handler for the clicking of the admission button.
             * *********************************************
             */
            if (document.querySelectorAll('.admission_btn'))
            {
                let admission_btn = document.querySelectorAll('.admission_btn');
                admission_btn.forEach(btn => {
                    btn.addEventListener('click', e => {
                        e.preventDefault();

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
                });
            }






            /*************************************************************
             * This code below registers event handler for the clicking of the staff-application-button
             * ***************************************             */
            if (document.querySelectorAll('.staffapply_btn'))
            {
                let applyAsStaffBtns = document.querySelectorAll('.staffapply_btn');
                applyAsStaffBtns.forEach(btn => {
                    btn.addEventListener('click', e => {
                        e.preventDefault();

                        //Dynamically import and execute form class
                        import('../viewClasses/staff_application_form_ui.js')
                        .then(m => {
                            // console.log(e.target);
                            // console.log(e.target.dataset.user);
                            // FreshStaffApplication
                            let staff_application = new m.StaffApplicationForm(e.target.dataset.user);
                            staff_application.createUi();
                        })
                        .catch(error => {
                            console.log(error.message);
                        });

                    });
                });
            }




        }
        else 
        {
            toastIt('red', this.mErrorMsg);

        }

    }
}



export { MainSection };