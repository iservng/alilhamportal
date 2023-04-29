


/*******************************************************
 * This class is responsible for getting the data neccessary for and display of the school sections details information.
 * ******************************************************
 */


 
// {name: 'Senior Secondary', id: '29zVkPG1FA4CLxpCceiU'}
// {name: 'Pre-Nursery', id: 'FM9fcAF6BVDEFyziLQ4a'} 
// {name: 'Nursery', id: 'InP96Lme2r2DhaGvXcOj'}
// {name: 'Primary', id: 'KQNxbWcLNhUYGBJD4kmo'}
// {name: 'Junior Secondary', id: 'ZXjX2Dci4g3htWX9glj7'}
// length

import { toastIt } from '../utils/toast_it.js';
import { preloader } from '../utils/preloader.js';

class SchoolSections 
{
    #_mErrors;
    #mErrorMsg;
    constructor() {

        this.#_mErrors = 0;
        this.#mErrorMsg = '';

    }

    createUi()
    {
        if(this.#_mErrors == 0)
        {

            

            /**
             * School section here will invoke the firebase function for collecting the list od setion amd its details and asynchronously putting the the data in the UI 
             */


            // to be removed ?
            //Pretend to have the object containing the info fro a local source
            import('../config/school_section_admission_breakdown.js')
            .then(m => {

                let sectionBreakDown = new m.RegDetails();
                let sectionDetails = sectionBreakDown.getSectionDetails();


                let sectionOutput = ``;
                sectionDetails.forEach(section => {
                    sectionOutput += `
                    <div class="col s12 m4 l4">
                    <div class="row">
                        <div class="col s12">
                          <div class="card z-depth-0 teal lighten-5">
                                
                                <div class="card-content">
                                    <p class="teal-text darken-3"><b>${section['name']}</b></p>
                                    <p>

                                        <table>
                                            <thead>

                                                <tr>
                                                    <th><small>School Fees: </small></th>
                                                    <td><small>${section['School Fees']}</small></td>
                                                </tr>

                                                <tr>
                                                    <th><small>Exam Fees:</small></th>
                                                    <td><small>${section['Exam Fees']}</small></td>
                                                </tr>

                                                <tr>
                                                    <th><small>Admission Form:</small></th>
                                                    <td><small>${section['Admission Form']}</small></td>
                                                </tr>

                                                <tr>
                                                    <th><small>School Uniform:</small></th>
                                                    <td><small>${section['School Uniform']}</small></td>
                                                </tr>


                                                <tr>
                                                    <th><small>Cardigan:</small></th>
                                                    <td><small>${section['Cardigan']}</small></td>
                                                </tr>

                                                <tr>
                                                    <th><small>Text Books:</small></th>
                                                    <td><small>${section['Text Books']}</small></td>
                                                </tr>

                                                <tr>
                                                    <th><small>Games/Sport:</small></th>
                                                    <td><small>${section['Games/Sport']}</small></td>
                                                </tr>

                                                <tr>
                                                    <th><small>Sport Wear:</small></th>
                                                    <td><small>${section['Sport Wear']}</small></td>
                                                </tr>

                                                <tr>
                                                    <th><small>Report Booklet:</small></th>
                                                    <td><small>${section['Report Booklet']}</small></td>
                                                </tr>

                                                <tr>
                                                    <th><small>P.T.A:</small></th>
                                                    <td><small>${section['P.T.A']}</small></td>
                                                </tr>

                                                <tr>
                                                    <th><small class="red-text">Total:</small></th>
                                                    <td><b class="red-text">${section['Total']}</b></td>
                                                </tr>

                                                <tr>
                                                    <th><small class="red-text"><a class="btn-small apply_now">Apply Now</a></small></th>
                                                </tr>
                                            </thead>
                                    
                                            <tbody>
                                            </tbody>
                                          </table>
                                                
                                    </p>
                                </div>
                               
                          </div>
                        </div>
                      </div>
                </div>

                    `;




                    let schoolSectionPage = `
                    <div class="container">
            <div class="row">
                <div class="col s12 center-align" style="margin-top: 4rem;">
                    <img src="../public/images/logo.png" alt="">
                    <p><b>Alilham Islamic College Katsina</b></p>
                    <h4 class="teal-text text-darken-3"><small>Our School by <b>Section</b></small></h4>

                    <div class="divider"></div>

                    <p>
                        <small>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in, quibusdam sequi consequatur officia eius delectus minima cumque, laboriosam animi quam voluptatem quaerat numquam corrupti atque, voluptatum laudantium obcaecati earum?
                        </small>
                    </p>
                </div>


<!-- ....... -->
                    ${sectionOutput}
                


                <div class="col s12" style="margin-top: 3rem;">
                    <p>
                        <small>
                            Powered by <b class="teal-text">iservng</b>
                        </small>
                    </p>
                </div>
                
            </div>
                    
        </div>
                    `;



                    //Insert in the DOM 
                    let main = document.querySelector('main');
                    main.innerHTML = '';
                    main.innerHTML = schoolSectionPage;


                    





                });

                //Register handler for apply-now button
                if(document.querySelectorAll('.apply_now'))
                {
                    let applynowBtn = (document.querySelectorAll('.apply_now'));
                    applynowBtn.forEach(btn => {
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




export { SchoolSections };