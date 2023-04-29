


/******************************************************************
 * This class is responsible for collecting the infomation neccessary for the creation of the student-profile-page UI. it has only two functions, one for confirming the info and the second for warning if error is found. This class is called when a student logs in successfuly.
 * **************************************************************
 */

import { toastIt } from '../utils/toast_it.js';

import { Students } from '../modal/students.js';
class StudentProfilePage 
{
    #_mErrors;
    #mErrorMsg;
    #personalInfo;


    constructor(student_id)
    {
        this.#_mErrors = 0;
        this.#mErrorMsg = '';
        this.#personalInfo = null;



        /********************************************************************* *
            Use the student_id and call for this students personal informtion
        ********************************************************************
        */
        // this.#personalInfo = Students.getStudentPersonalInfo(student_id);

        if(!student_id)
        {
                this.#_mErrors++;
                this.#mErrorMsg = "Personal info id not found!";
                return;
        }

        /*************************************************************** *
            Use the student_id and call for this students personal informtion
            *******************************************************************
        */
        // this.#parentInfo = Students.getStudentParentInfo(student_id);
        // if(!this.#parentInfo)
        // {
        //     this.#_mErrors++;
        //     this.#mErrorMsg = "Parent info not found!";
        //     return;
        // }



    }


    createUi()
    {




        /***********************
         * The getDoc(), 
         * **********************
         */
        // this.#_mErrors

        








        if (this.#_mErrors == 0)
        {
            this.content = `
            <div class="container">
            <div class="row">
                <div class="col s12" style="margin-top: 4rem;">
                    <!-- <b>Student Profile Page</b> -->
                </div>
                <div class="col s12 m4 l4 teal lighten-4">


                    <div class="row">
                        <div class="col s12">
                          <div class="card-panel white">
                            <div class="passport center-align" style="margin-top: 2rem;">
                                <img src="${this.#personalInfo.passporturl}" class="circle" alt="">
                            </div>
                            <span class="teal-text">
                                <p><b>Name: </b>${this.#personalInfo.firstname+' '+this.#personalInfo.secondname}</p>
                                <div class="divider"></div>
                                <p><b>Email: </b>${this.#personalInfo.email} </p>
                                
                                <div class="divider"></div>
                                <p><b>Class: </b>${this.#personalInfo.myclass} </p>
                                
                                <div class="divider"></div>
                                <p><b>Gender: </b>${this.#personalInfo.gender} </p>

                                <div class="divider"></div>
                                <p><b>Reg No: </b>${this.#personalInfo.regno} </p>
                                
                                <div class="divider"></div>
                                <p><b>Date of Birth: </b>${this.#personalInfo.dateofbirth}</p>
                                
                                <div class="divider"></div>
                                <p><b>Address: </b>${this.#personalInfo.address}</p>
                                
                                <div class="divider"></div>
                                <p><b>Admission Status: </b> <b class="green-text">${this.#personalInfo.admissionstatus}</b> </p>
                                
                                <div class="divider"></div>
                                <p><b>Schol Fees Status: </b> <b class="green-text">${this.#personalInfo.feesstatus}</b></p>

                                <div class="divider"></div>
                                <p> 
                                    <b class="">
                                        <a href="#" class="btn-small red darken-3">Logout</a>
                                    </b>
                                </p>
                            </span>

                          </div>
                        </div>
                      </div>

                </div>



                <div class="col s12 m8 l8">
                        <div style="margin-top: 3rem; margin-bottom: 2rem;">
                            <h5 class="teal-text"><small>My School <b>Details</b> </small></h5>
                        </div>
                    <div class="card z-depth-0">
                        
                        <!-- <div class="divider"></div> -->
                        <div class="card-content">
                          <p>I am a very simple student profile. I am good at containing small bits of information concerning a specific student. I am convenient because I require little effort to use effectively.</p>
                        </div>
                        <div class="card-tabs">
                          <ul class="tabs tabs-fixed-width">
                            <li class="tab"><a class="active" href="#test4"><b class="teal-text">home</b></a></li>
                            <li class="tab"><a href="#test5"><b class="teal-text">Parents</b> </a></li>
                            <li class="tab"><a href="#test6"><b class="teal-text">Fees</b></a></li>
                          </ul>
                        </div>



                        <div class="card-content grey lighten-4">
                            <div id="test4">

                                

                                <div class="ca_checks" style="margin-bottom: 3rem; margin-top: 1rem;">
                                    <p class="teal-text"><b>Continous Asessments</b></p>
                                    <small>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore, vitae quia sit eaque labore. Cum doloribus distinctio, officiis architecto corrupti reprehenderit autem deserunt nemo, ea error, ipsa similique nulla?
                                    </small>
                                    
                                    <p style="margin-top: 1rem;">
                                        <a href="#" class="btn-small teal white-text z-depth-3">Check CA Here</a>
                                    </p>
                                </div>
                                
                                <div class="result_checks">
                                    <p class="teal-text"><b>Result Checks</b></p>
                                    <small>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore, vitae quia sit eaque labore. Cum doloribus distinctio, officiis architecto corrupti reprehenderit autem deserunt nemo, ea error, ipsa similique nulla?
                                    </small>
                                    
                                    <p style="margin-top: 1rem;">
                                        <a href="#" class="btn-small teal white-text">Check Result</a>
                                    </p>
                                </div>

                                <div class="join_class" style="margin-top: 3rem; margin-bottom: 3rem;">
                                    <p class="teal-text"><b>Join Class</b></p>
                                    <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam consectetur libero, quo exercitationem voluptatem optio recusandae nostrum omnis cum sapiente, nihil placeat harum error neque obcaecati sequi aperiam vero esse.</small>
                                    <p style="margin-top: 1rem;">
                                        <a href="#" class="btn-small teal white-text">Join Here</a>
                                    </p>
                                </div>


                                <div class="divider"></div>

                                

                                <div class="class_time_table" style="margin-top: 3rem;">
                                    <p class="teal-text"><b>Class Time Table</b></p>
                                    <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam consectetur libero, quo exercitationem voluptatem optio recusandae nostrum omnis cum sapiente, nihil placeat harum error neque obcaecati sequi aperiam vero esse.</small>
                                    <p style="margin-top: 1rem;">
                                        <a href="#" class="btn-small teal white-text">View Time Table</a>
                                    </p>
                                </div>
                            </div>



                            <!-- parents  -->
                            <div id="test5">
                                <h5 class="teal-text" style="margin-bottom: 3rem;"><small> <b>Parent/Guardian</b> Information</small></h5>

                                <div class="divider"></div>


                                <p style="margin-top: 2rem;" class="teal-text"><b>Father</b></p>

                                <div class="father_info">

                                    <p><b>Name: </b> Gambo Saminu Dandaura</p>
                                    <p><b>Phone: </b> 09034899024</p>
                                    <p><b>Home Address: </b> No. 34 Ahmadu Bellow Way Katsina, Katsina State</p>
                                    <p><b>Occupation: </b> Police Man </p>
                                    <p><b>Office Address: </b> Federal Medical Center Katsina. </p>
                                    
                                </div>


                                <p style="margin-top: 2rem;" class="teal-text"><b>Mother</b></p>

                                <div class="mother_info">

                                    <p><b>Name: </b> Ummi Sadauki YarDaura</p>
                                    <p><b>Phone: </b> 09034899024</p>
                                    <p><b>Home Address: </b> No. 34 Ahmadu Bellow Way Katsina, Katsina State</p>
                                    <p><b>Occupation: </b> House wife </p>
                                    <p><b>Office Address: </b> No 45 Lungu street Katsina. </p>
                                    
                                </div>

                            </div>



                            <!-- fees and payment  -->
                            <div id="test6">

                                <div class="center-align" style="margin-bottom: 2rem;">
                                    <b class="teal-text">Payment Page </b>
                                </div>

                                <div class="divider"></div>
                               

                                <div class="pay_school_fess" style="margin-top: 2rem;">
                                 
                                    <b class="teal-text"> Pay School Fees</b>
                                  
                                   <p>
                                    <small>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda iure aliquam accusantium magni, ducimus quaerat deleniti nostrum porro ipsam vitae natus quasi officiis perferendis exercitationem incidunt corrupti quo ratione voluptas?
                                    </small>
                                   </p>
                                   <p style="margin-top: 2rem;">

                                        <a href="#" class="btn-small white-text">Pay Now</a>
                                   </p>
                                </div>



                                <div class="pay_school_fess" style="margin-top: 2rem;">
                                 
                                    <b class="teal-text"> Payment History</b>
                                  
                                   <p>
                                    <small>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda iure aliquam accusantium magni, ducimus quaerat deleniti nostrum porro ipsam vitae natus quasi officiis perferendis exercitationem incidunt corrupti quo ratione voluptas?
                                    </small>
                                   </p>
                                   <p style="margin-top: 2rem;">

                                        <a href="#" class="btn-small white-text">View History </a>
                                   </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s12" style="margin-top: 3rem; margin-bottom: 3rem;">
                    <!-- <b>Student Profile Page</b> -->
                    <small>Powered by <b class="teal-text">iservng</b></small>
                </div>

            </div>
        </div>
            `;

            //Now get the reference to the main tag on the UI 
            let main = document.querySelector('main');
            main.innerHTML = '';
            main.innerHTML = this.content;

            //Tabs
            var tabs = document.querySelectorAll('.tabs');
            var instances = M.Tabs.init(tabs);

        }
        else 
        {
            toastIt('red', this.#mErrorMsg);
        }
    }

}


export { StudentProfilePage };