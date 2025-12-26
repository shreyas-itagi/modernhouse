const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/Img/Icons/logo_bordered.png" class="brand-logo" alt="">
            <div class="nav-items">
                <ul class="links-container">
                    <li class="link-item"><a href="#" class="link">home</a></li>
                    <li class="link-item"><a href="#women" class="link">women</a></li>
                    <li class="link-item"><a href="#shirts" class="link">men</a></li>
                    <li class="link-item"><a href="#kids" class="link">kids</a></li>
                    <li class="link-item"><a href="#Accessories" class="link">accessories</a></li>
                </ul>
            </div>
        </div>
    `;
}

createNav();

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        // means user is logged in
        popuptext.innerHTML = `log in as, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else{
        // user is logged out
        popuptext.innerHTML = 'Join us';
        actionBtn.innerHTML = 'Sign up';
        actionBtn.addEventListener('click', () => {
            location.href = 'signup.html';
        })
    }
}