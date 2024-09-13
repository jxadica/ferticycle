export function importHeader (){
    return ` <h1>FertiCycle</h1>
        <ul>
            <li><a href="index.html">Əsas səhifə</a></li>
            <li><a href="about.html">Haqqımızda</a></li>
            <li><a href="contact.html">Əlaqə</a></li>
        </ul>
        <div>
            <a href="login.html" class="log-in">Daxil ol</a>
            <a href="signup.html" class="sign-up">Qeydiyyatdan keç</a>
        </div>`
}
export function importFooter (){
    return`
     <div class="footer-logo">
            <h2>Ferticycle</h2>
            <div class="social-medias">
                <img src="images/instagram.png" alt="instagram">
                <img src="/images/twitter.png" alt=twitter"">
            </div>
        </div>
        <div class="footer-nav">
            <div class="nav">
                <h4>Dəstək</h4>
                <ul>
                    <li>Tez-tez verilən suallar</li>
                    <li>Qiymətlər</li>
                    <li>Əlaqə</li>
                    <li>Necə işləyirik</li>
                </ul>
            </div>
            <div class="nav">

                <h4>Ferticycle</h4>
                <ul>
                    <li>Haqqımızda</li>
                    <li>Karyera</li>
                    <li>Əlaqə</li>
                    <li>Məqsədimiz</li>
                </ul>
            </div>
            </div>
            <div class="footer-email">
                <p>
                    FertiCycle-dan ən son xəbərlərdən xəbərdar olun
                </p>
                <input type="text" placeholder="Emailinizi daxil edin">
                <button>Qeydiyyatdan keç</button>
            </div>
        </div>`
}
document.querySelector("header").innerHTML = importHeader();
document.querySelector("footer").innerHTML = importFooter();