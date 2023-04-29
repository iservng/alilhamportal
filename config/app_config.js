

import {
    getFirestore,
    getDocs,
    collection,
    
} from "firebase/firestore";

import { toastIt } from "../utils/toast_it.js";



const SCHOOL_SHORT_NAME = "Al-ilham";
const SCHOOL_FULL_NAME = "Al-ilham Islamic College";




function getMainMenuLinks()
{
    return [
        'About',
        'Sections',
        'Admission',
        'Students',
        'Staff',
    ];
}


function getSchoolSections()
{
    return [
        {
            id: 1,
            name: 'Pre-Nursery',
        },
        {
            id: 2,
            name: 'Nursery',
        },
        {
            id: 3,
            name: 'Primary',
        },
        {
            id: 4,
            name: 'Junior Secondary',
        },
        {
            id: 5,
            name: 'Senior Secondary',
        }
    ];
}






//This function returns object that contains information that is deisplayed on the user-interface of the application.
function getMainSectionData()
{
    
    return [
        {
            imageUrl: `../../public/images/frontpix6.png`,
            align: 'left',
            title: 'Islamically Groomed! 1',
            pgColor: 'teal',
            subTitle: 'Creating leader in children',
            btLabel1: 'Admission',
            bt1Color: 'teal darken-4',
            btLabel2: 'Become a staff',
            bt2Color: 'teal darken-4',
            zdepth: 'z-depth-1',
            titleColor: 'white-text',
            subTitleColor: 'white-text',

        },
        {
            imageUrl: `../../public/images/frontpix5.png`,
            align: 'right',
            title: 'Nurtured by Educating! 2',
            pgColor: 'teal',
            subTitle: 'practicallity is our focus',
            btLabel1: 'Admission',
            bt1Color: 'teal darken-4',
            btLabel2: 'Become a staff',
            bt2Color: 'teal darken-4',
            zdepth: 'z-depth-1',
            titleColor: 'white-text',
            subTitleColor: 'white-text',

        },
        {
            imageUrl: `../../public/images/frontpix2.png`,
            align: 'right',
            title: 'Children Play Ground',
            pgColor: 'teal',
            subTitle: 'practicallity is our focus',
            btLabel1: 'Admission',
            bt1Color: 'teal darken-4',
            btLabel2: 'Become a staff',
            bt2Color: 'teal darken-4',
            zdepth: 'z-depth-1',
            titleColor: 'teal-text',
            subTitleColor: 'teal-text',

        },
        {
            imageUrl: `../../public/images/frontpix1.png`,
            align: 'left',
            title: 'Driven by Technology 4',
            pgColor: 'teal',
            subTitle: 'practicallity is our focus',
            btLabel1: 'Admission',
            bt1Color: 'teal darken-4',
            btLabel2: 'Become a staff',
            bt2Color: 'teal darken-4',
            zdepth: 'z-depth-1',
            titleColor: 'white-text',
            subTitleColor: 'white-text',

        },
    ];
}




/**
 * This function will be used by the "renderAppShell()" function its responsible for checking the local storage and amking sure that the schools branch information is is stored locally otherwise it will download and store it.
 * 
 * It ensures that user had at made a successfull connection to the cloud atleast once.
 */
function initSchoolBranches()
{
    if (!localStorage.getItem('school_branches') || JSON.parse(localStorage.getItem('school_branches')).length == 0)
    {
        //Get it from the cloud
        
            const db = getFirestore();
            const schBrRef = collection(db, 'school_branches');
        
        getDocs(schBrRef)
        .then(snapshot => {

            let schoolBrArr = [];
            snapshot.docs.forEach(doc => {
                schoolBrArr.push({...doc.data(), id: doc.id});
                console.log(schoolBrArr); //working
            });

            //Add the information to the local storage
            localStorage.setItem('school_branches', JSON.stringify(schoolBrArr));
            if(JSON.parse(localStorage.getItem('school_branches')).length == 0)
            {
                toastIt('red', 'offline you are!');
            }
            


        })
        .catch(error => {

            toastIt('red', 'Device is offline!');
            console.log(error.message);
        });

    }
    
}









function renderAppShell()
{
    let mainMenuItems = getMainMenuLinks();
    let MainSection = getMainSectionData();
    initSchoolBranches();

    if(localStorage.getItem('public_menu_items') && 
        JSON.parse(localStorage.getItem('public_menu_items')).length != 0)
    {
        
        
        //Call for the menu items array
        let menuSection = localStorage.getItem('public_menu_items');
        menuSection = JSON.parse(menuSection);
        console.log(menuSection);


        //1. Importing the main menu class
        import('../viewClasses/main_manu_ui.js')
        .then(m => {
            let main_manu = new m.MainMenu(menuSection, mainMenuItems);
            main_manu.createUi();
        })
        .catch(error => {
            console.log(error.message);
        });


        //2. Importing the slide out menu class
        import('../viewClasses/slide_out_menu_ui.js')
        .then(m => {
            let slide_out_menu = new m.SlideOutMenu(menuSection, mainMenuItems);
            slide_out_menu.createUi();
        })
        .catch(error => {
            console.log(error.message);
        });


        //Importing the main section 
        import('../viewClasses/main_section.js')
        .then(m => {
            let main_section = new m.MainSection(MainSection);
            main_section.createUi();
        })
        .catch(error => {
            console.log(error.message);
        });




    }
    else 
    {
        // Fetch the school-sections menu values from the cloud.
        const db = getFirestore();
        const schSecColRef = collection(db, 'school_sections_information');
            getDocs(schSecColRef)
            .then(snapshot => {
                let menuSection = [];
                snapshot.docs.forEach(doc => {
                    menuSection.push({...doc.data(), id: doc.id});
                    console.log(menuSection); //working
                });

                
                    /******************************************************
                     * Then here is where we call the two classes that consumes the array of school-section collected from cloud above. These classes are.
                     * 1. MainMenu class
                     * 2. SlideOutMenu
                     * By dynamically importing and invoking them
                     * ********************************************************
                     */


                    //1. Importing the main menu class
                    import('../viewClasses/main_manu_ui.js')
                    .then(m => {
                        let main_manu = new m.MainMenu(menuSection, mainMenuItems);
                        main_manu.createUi();
                    })
                    .catch(error => {
                        console.log(error.message);
                    });


                    //2. Importing the slide out menu class
                    import('../viewClasses/slide_out_menu_ui.js')
                    .then(m => {
                        let slide_out_menu = new m.SlideOutMenu(menuSection, mainMenuItems);
                        slide_out_menu.createUi();
                    })
                    .catch(error => {
                        console.log(error.message);
                    });



                    //3. Importing the main section 
                    import('../viewClasses/main_section.js')
                    .then(m => {
                        let main_section = new m.MainSection(MainSection);
                        main_section.createUi();
                    })
                    .catch(error => {
                        console.log(error.message);
                    });


                    //4. Store "menuSection" in the local-storage, so when next its needed it can be fetched faster from there.
                    
                    localStorage.setItem('public_menu_items', JSON.stringify(menuSection));
                    if (JSON.parse(localStorage.getItem('public_menu_items')).length == 0)
                    {
                        toastIt('red', 'Device is offline');
                    }


                
            }).catch(error => {
                console.log(error.message);
                toastIt('red', 'Look like your offline!');
            });
        

    }
}








export { 

    SCHOOL_SHORT_NAME, 
    renderAppShell, 
    SCHOOL_FULL_NAME,
    getMainMenuLinks,
    getMainSectionData,
    
    
};



