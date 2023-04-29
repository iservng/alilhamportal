


//Preloader function 
let preloader = (msg = 'Loading...') => {
    let content = `
        <div class="container">
            <div class="row">
                <div class="col s12" style="margin-top: 4rem;">&nbsp;</div>
                <div class="col s12 l4 m4">&nbsp;</div>
                <div class="col s12 l4 m4">
                    <div class="progress">
                        <div class="indeterminate"></div>
                    </div>
                    <div class="center-align">${msg}</div>
                </div>
                <div class="col s12 l4 m4">&nbsp;</div>
            </div>
        </div>
    `;
    document.querySelector('main').innerHTML = content;
};

export { preloader };