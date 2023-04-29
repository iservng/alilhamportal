

/****************************************************
 * This class is responsible and used for the creating of the specific class profile of the school class into which the tteacher is logged-in to.
 * *********************************************************
 */
import { toastIt } from '../utils/toast_it.js';
class SchoolClassProfile
{
    #_mErrors;
    #mErrorMsg;
    #uiContent;
    constructor()
    {
        this.#_mErrors = 0;
        this.#mErrorMsg = '';

    }

    createUi()
    {
        if (this.#_mErrors == 0)
        {
            this.#uiContent = `
            <div class="container">
            <div class="row">

                <div class="col s12" style="margin-top: 3rem;">
                    <h4 class="teal-text text-darken-4"><small><b>Primary 4</b></small></h4>
                    <p>
                        <small>
                            Uncle <b>Sabitu Manison</b>
                        </small> 
                        <!-- <div class="divider"></div> -->
                    </p>
                </div>

                <div class="col s12 m6 l6" style="margin-bottom: 2rem;">
                    <a href="#" class="btn-small blue" style="margin-bottom: 2rem;">Take Attendance</a>
                    <a href="#" class="btn-small green darken-3" style="margin-bottom: 2rem;">Enter Class</a>
                </div>
                <div class="col s12 m6 l6" style="margin-bottom: 2rem;">
                    <p><b class="red-text text-darken-4">Notification</b></p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae debitis fuga excepturi distinctio incidunt dicta quia, mollitia expedita ea dolore iusto quasi ut voluptates voluptatum quas repellendus rem recusandae rerum?</small>
                </div>
                

                <div class="col s12">
                    <div class="row">

                        <div class="col s12 m3 l3" style="border: 1px solid gray;">
                            <div class="row">
                                <div class="col s12">
                                    <div class="card-panel teal lighten-4 center-align z-depth-0">
                                        <span class="teal-text">
                                            <b class="teal-text text-darken-4">Male: 17 </b><br>
                                            <b class="teal-text text-darken-4">Female: 13 </b>
                                        </span>
                                        <h3><b>29</b></h3>
                                        <p class="teal-text text-darken-4"><b>Total Students</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col s12 m3 l3">
                            <div class="row">
                                <div class="col s12">
                                    <div class="card-panel teal accent-4 center-align z-depth-0">
                                        <span class="teal-text">
                                            <b class="teal-text text-darken-4">Term: Second Term </b>
                                        </span>
                                        <h3><b>04</b></h3>
                                        <p class="teal-text text-darken-4"><b>Total Weeks</b></p>
                                        <div class="divider"></div>
                                        <p>
                                            <b><small>Term Start: 30-02-2023</small></b> <br>
                                            <b><small>Term End: 30-02-2023</small></b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col s12 m3 l3">
                            <div class="row">
                                <div class="col s12">
                                    <div class="card-panel teal z-depth-0">
                                        <p class=""><b>Assesment Dates</b></p>
                                        <span class="white-text text-darken-3">
                                            <table>
                                                <thead>
                                                  <tr>
                                                      <th>Name</th>
                                                      <th>Date</th>
                                                  </tr>
                                                </thead>
                                        
                                                <tbody>
                                                    <tr>
                                                        <td>1 C.A.</td>
                                                        <td>03-04-2023</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2 C.A.</td>
                                                        <td>01-04-2023</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3 C.A.</td>
                                                        <td>06-21-2013</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Exam</td>
                                                        <td>06-21-2013</td>
                                                    </tr>
                                                </tbody>
                                              </table>
                                          

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col s12 m3 l3">
                            <div class="row">
                                <div class="col s12">
                                    <div class="card-panel teal accent-4 center-align z-depth-0">
                                        <span class="teal-text text-darken-4">
                                            <b>Termly Fees Status</b>
                                        </span>
                                        <h3>47%</h3>
                                        <div class="divider"></div>
                                        <p><a href="#" class="btn-small white teal-text">Send Reminder</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>



                <div class="col s12">
                    <p><small>Powered by <b class="teal-text">iservng</b></small></p>
                </div>


                
        </div>

            `;


            /*************************************************
             * The code that inserts the content into the DOM
             * **********************************************
             */
            //Now get the reference to the main tag on the UI 
            let main = document.querySelector('main');
            main.innerHTML = '';
            main.innerHTML = this.#uiContent;






            /**********************************************
             * Activate the collapsible links on the UI
             * *****************************************
             */
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);




        }
        else 
        {
            toastIt('red', this.#mErrorMsg);
        }

    }
}


export { SchoolClassProfile };