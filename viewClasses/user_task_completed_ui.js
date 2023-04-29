



import { toastIt } from '../utils/toast_it.js';
class UserTaskCompletedUi
{
    #_mErrors;
    #mErrorMsg;
    #mContent;

    //Content
    #pageTile;
    #userNameWithSalutaion;
    #firstParagraph;
    #btnLink;
    #secondParagraph;

    

    #infoObj;


    constructor(info_obj) {

        this.#infoObj = {
            pagetitle: '',
            userwithsalutaion: '',
            fparagraph: '',
            btn: '',
            subtitle: '',
            sParagraph: '',
            schoolname: ``,
        };
        this.#_mErrors = 0;
        this.#mErrorMsg = '';

        if(!info_obj)
        {
            this.#_mErrors++;
            this.#mErrorMsg = "Information object not found!";
            return;
        }
        else if (typeof info_obj != 'object')
        {
            this.#_mErrors++;
            this.#mErrorMsg = "Invalid info object!";
            return;
        }
        else 
        {
            for (let property in info_obj)
            {
                // console.log(infoObj[property]);
                if (info_obj[property] == '') {
                    this.#_mErrors++;
                    this.#mErrorMsg = info_obj[property] + " is invalid!";
                    break;
                }
            }

            if(this.#_mErrors == 0)
                this.#infoObj = info_obj;
            
        }
    }


    createUi()
    {


        if(this.#_mErrors == 0)
        {
            console.log(this.#infoObj);
            this.#mContent = `
            <div class="container">
            <div class="row">
                <div class="col s12 center-align" style="margin-top: 3rem;">
                    <h4 class="green-text text-darken-3">
                        <small>
                            ${this.#infoObj.pagetitle}
                        </small>
                    </h4>
                </div>

                <div class="col s12 m4 l4" style="margin-top: 2rem; margin-bottom: 2rem;">
                    <div class="center-align">
                        <img src="../public/images/logo.png" alt="">
                        <p class="teal-text"><b>${this.#infoObj.schoolname}</b></p>
                    </div>
                </div>



                <div class="col s12 m8 l8">
                    
                    <div>
                        <p><b>${this.#infoObj.userwithsalutaion}</b></p>
                        <small>
                            ${this.#infoObj.fparagraph}
                        </small>
                        <p>
                            ${this.#infoObj.btn}
                        </p>
                    </div>

                    <div class="extraInfo" style="margin-top: 3rem;">
                        <p class="green-text"><b>${this.#infoObj.subtitle}</b></p>
                        <p>
                            <small>
                                ${this.#infoObj.sParagraph}
                            </small>
                        </p>
                    </div>

                    <div class="divider"></div>
                    <p>
                        <small>Powered by <b class="green-text">iservng</b></small>
                    </p>
                </div>
              </div>
        </div>
            `;






            /*******************************
             * Now put it in the DOM
             * **************************
             */

            let main = document.querySelector('main');
            main.innerHTML = '';
            main.innerHTML = this.#mContent;



        }
        else 
        {
            toastIt('red', this.#mErrorMsg);
        }
    }
}

export { UserTaskCompletedUi };