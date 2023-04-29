





/******************************************************************
 * This class is responsible for the collecting of data neccessary for the building and display of the about-us page of this app.
 * ***************************************************************
 */

import { toastIt } from '../utils/toast_it.js';


class AboutUs 
{
    #_mErrors;
    #mErrorMsg;
    #content;

    constructor()
    {
        this.#_mErrors = 0;
        this.#mErrorMsg = "";
    }

    createUi()
    {
        if(this.#_mErrors == 0)
        {
            this.#content = `
            <div class="row">
            <!-- <div class="center-align" style="margin-top: 3rem;">
                <img src="../public/images/logo.png" alt=""> 
            </div>-->
            <div class="col s12 center-align teal-text">
               
                <div class="container">
                    <h4>  <small><b>About Us At Alilham Islamic College Katsina </b></small></h4> 
                </div>

                <div class="divider"></div>
                <small><b>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum officia delectus accusamus minus perspiciatis, recusandae enim facilis repellendus tenetur quia! Id quibusdam temporibus ab repudiandae odio dicta nulla qui molestias.</b></small>
                <div class="divider"></div>
            </div>

            <div class="col s12">
                <div class="row">
                    <div class="col s12">
                        <div class="card z-depth-0">
                            <div class="card-image">
                                <img src="../public/images/aboutpix2.png">
                                <span class="card-title">Mentoring based</span>
                            </div>
                            <div class="card-content">
                                <p class="teal-text text-darken-3 center-align"> 
                                    <b>Our Mission: </b> I am a very simple card. |
                                    <b>Our vision: </b>I am good at containing small bits of information. |
                                
                                    <b>Our Motto: </b>I am convenient because I require little markup to use effectively.
                                </p>
                            </div>
                            <div class="card-action">
                                <b><a href="#" class="white-text btn-small">This is a link-Apply Now</a></b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



       <div class="container">

            <div class="row">

                <div class="col s12 m6 l6">
                    <p class="teal-text"><b>Founded</b></p>
                    
                    <p>
                        <small>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eos omnis eius libero ullam iure illo mollitia sapiente fuga, assumenda veritatis magnam, quo animi officia impedit maxime provident, cupiditate culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis deleniti eveniet, quisquam vel eligendi corrupti non fugiat quidem, consectetur, mollitia minima tempore animi molestiae iure consequatur temporibus obcaecati laudantium facere! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ipsam, ipsum quasi repudiandae tenetur magnam explicabo, alias quam impedit corrupti vel suscipit incidunt est quisquam molestiae eum id reiciendis esse.
                        </small>
                    </p>
                </div>
                <div class="col s12 m6 l6">
                    <div class="row">
                        <div class="col s12">
                            <div class="card">
                                <div class="card-image">
                                    <img src="../public/images/aboutpix1.png">
                                    <span class="card-title">Card Title</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                
                <div class="col s12 m6 l6">
                    <p><b class="teal-text">Why we exist</b></p>
                    <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, aliquid quod saepe enim laborum, voluptatem itaque, distinctio laudantium aperiam debitis culpa! Temporibus fugit possimus exercitationem quam, consequuntur modi velit dolores dolor obcaecati! Totam sed dolorum quaerat et autem, reiciendis tenetur eius atque eveniet blanditiis deleniti possimus adipisci recusandae, pariatur quam neque exercitationem consectetur! Dolores architecto quas porro excepturi, beatae in? Laudantium vel id similique nobis pariatur. In neque perferendis labore, at quaerat magnam reprehenderit porro vitae fuga voluptate fugiat dolore? Optio amet est veniam quo, eaque beatae nemo minus nulla quidem aperiam harum fugiat commodi provident ullam debitis quam autem eligendi non reprehenderit soluta, ut recusandae! Impedit harum quis suscipit perferendis magnam numquam saepe quae veritatis, labore voluptatibus possimus corrupti, ipsa alias sapiente facere ipsam architecto nobis? Ipsam architecto ratione dignissimos beatae porro debitis itaque. Voluptate sequi quae ut nulla iure iste minus incidunt velit vel libero at saepe, dolor quibusdam quaerat qui explicabo praesentium quasi unde est dolorum autem. Itaque aliquam, laborum aliquid, nesciunt ratione dignissimos blanditiis rem amet, quas nobis inventore voluptate laudantium perferendis. Porro possimus pariatur reiciendis obcaecati dolores necessitatibus ut optio totam, cum harum soluta ratione saepe rem et maiores ipsa cupiditate architecto aspernatur molestiae exercitationem.</small>
                </div>






                <div class="col s12 m6 l6">
                    <p class="teal-text"><b>Message from the Director</b></p>
                    <p>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, inventore velit nobis tempora voluptatibus nihil nostrum praesentium maiores earum? A ad repellendus pariatur minus magni nostrum similique. Enim suscipit consequuntur magnam maxime illo et explicabo dolor velit dolore! Non sapiente dignissimos obcaecati aperiam suscipit, quod culpa possimus modi optio consequuntur maiores nostrum repellat magni voluptatum veniam, deleniti accusamus quas cumque debitis quidem inventore molestiae libero. Debitis, veritatis recusandae cumque eos laudantium corrupti sunt, quia deleniti, aliquid animi temporibus laboriosam vitae eveniet impedit reiciendis omnis nihil eligendi molestias modi nam perspiciatis iste? Dignissimos similique sed voluptas molestias eius quasi voluptates necessitatibus rem, minus deserunt veniam est voluptatum iusto illum dolor asperiores. Provident?</small>
                    </p>



                    <p class="teal-text" style="margin-top: 3rem;"><b>Affiliations and Partnerships</b></p>
                    <p>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, inventore velit nobis tempora voluptatibus nihil nostrum praesentium maiores earum? A ad repellendus pariatur minus magni nostrum similique. Enim suscipit consequuntur magnam maxime illo et explicabo dolor velit dolore! Non sapiente riosam vitae eveniet impedit reiciendis omnis nihil eligendi molestias modi nam perspiciatis iste? Dignissimos similique sed voluptas molestias eius quasi voluptates necessitatibus rem, minus deserunt veniam est voluptatum iusto illum dolor asperiores. Provident?</small>
                    </p>
                </div>



            </div>

       </div>

       <footer class="page-footer teal" style="margin-top: 5rem;">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Contact Alilham</h5>
              <p class="grey-text text-lighten-4">You can use click or <a href="#" class="white-text">click here </a> to organize your questions, advice, information content, and mail it to us. We want to hear from you soon.</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="red-text text-lighten-3"> <small> <b class="white-text">Media Links</b> </small> </h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">LinkedIn</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Youtube</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Tweeter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          <!-- © 2014 Copyright Text -->
          &nbsp;
          <a class="grey-text text-lighten-4 right" href="#!">
            <small>Powered by</small> <b>iservng</b>
          </a>
          </div>
        </div>
      </footer>

            `;

            /******************************************
             * Insert the About-Us page in the DOM
             * ****************************************
             */
            let main = document.querySelector('main');
            main.innerHTML = '';
            main.innerHTML = this.#content;

        }
        else 
        {
            toastIt('red', this.#mErrorMsg);
        }
    }
}

export { AboutUs };