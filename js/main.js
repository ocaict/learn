let favicon = `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`;

const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
        <style>
        a {
            color: #000;
            font-size: 18px;
        }
        
        .header {
            background-color: #fff;
            box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, .3);
            position: fixed;
            width: 100%;
            z-index: 3;
            top: 0;
            left: 0;
        }
        
        .header ul {
            margin: 0;
            padding: 0 50px;
            list-style: none;
            overflow: hidden;
            background-color: #fff;
        }
        
        .header ul a {
            display: block;
            /* outline: 1px solid red; */
            padding: 20px;
            /* border-right: 1px solid #aaa; */
            text-decoration: none;
        }
        
        .header ul a:hover {
            background-color: #ddd;
        }
        
        .header .logo {
            float: left;
            display: block;
            font-size: 2em;
            padding: 10px 20px;
            text-decoration: none;
            font-weight: bold;
            padding-left: 40px;
        }
        
        .header .menu {
            clear: both;
            max-height: 0;
            transition: max-height .2s ease-out;
        }
        
        
        .header .menu-icon {
            /* border: solid 1px red; */
            padding: 28px 20px;
            position: relative;
            float: right;
            cursor: pointer;
        
        }
        
        .header .menu-icon .nav-icon {
            background-color: #333;
            display: block;
            height: 3px;
            width: 18px;
            position: relative;
            transition: background .2s ease-out;
        }
        
        
        .header .menu-icon .nav-icon:before {
            background-color: #333;
            content: '';
            display: block;
            height: 100%;
            width: 100%;
            position: absolute;
            transition: all .2s ease-out;
            top: 5px;
        
        }
        
        
        .header .menu-icon .nav-icon:after {
            background-color: #333;
            content: '';
            display: block;
            height: 100%;
            width: 100%;
            position: absolute;
            transition: all .2s ease-out;
            top: -5px;
        }
        
        header .menu-btn {
            display: none;
        }
        
        .header .menu-btn:checked~.menu {
            max-height: 400px;
        }
        
        
        .header .menu-btn:checked~.menu-icon .nav-icon {
            background: transparent;
        
        }
        
        
        .header .menu-btn:checked~.menu-icon .nav-icon:before {
            transform: rotate(-45deg);
            top: 0;
        
        
        }
        
        
        .header .menu-btn:checked~.menu-icon .nav-icon:after {
            transform: rotate(45deg);
            top: 0;
        }
        
        @media (min-width: 900px) {
            .header li {
                float: left;
            }
        
            .header li a {
                padding: 20px 30px;
            }
        
            .header .menu {
                clear: none;
                float: right;
                max-height: none;

            }
        
            .header .menu-icon {
                display: none;
            }
        
        
        }
        </style>

        <header class="header">
                <a href="/" class="logo">Oca WebTech</a>
                <input type="checkbox" class="menu-btn" id="menu-btn">
                <label for="menu-btn" class="menu-icon"> <span class="nav-icon"></span></label>

        <ul class="menu">
        <li>
          <a href="index.html" class="active"> Home</a>
        </li>

        <li>
          <a href="about.html"> About</a>
        </li>

        <li>
          <a href="services.html">Services</a>
        </li>

        <li>
          <a href="contact.html"> Contact</a>
        </li>
        <li>
          <a class="logn-link" href="register.html"> Apply</a>
        </li>
        <li>
          <a class="logn-link" href="login.html">Login</a>
        </li>
      </ul>
        </header>

`;
class Header extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(headerTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector(".logo").src = this.getAttribute("logo");
  }
}

window.customElements.define("oca-header", Header);

// Footer
const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
        <style>
        /* Footer Section */
.footer-container {
    padding: 60px 0px;
    background: #1c375b;
    color: #f0f0f0;
}

#footer {
  // background-color: red;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding: 0px 20px;
    flex-wrap: wrap;
}

#footer .logo {
    width: 40px;
}

#footer .logo-container {
    display: flex;
    align-items: center;
    margin-right: 5px;
}

#footer .logo-container p {
    font-size: 26px;
}

#footer .links {
    text-align: center;
}

#footer .links ul li {
    color: #fff;
    margin: 10px 0px;
    list-style: none;
    font-size: 16px;

}

#footer .links ul li a {
    color: white;
    text-decoration: none;
}

#footer .social .fab {
    color: rgb(243, 117, 0);
    font-size: 28px;
    margin: 0px 5px;
    padding: 10px 0px;
    transition: all ease-in-out .4s;
    cursor: pointer;

}

#footer .social .fab:hover {
    color: white;
}

footer {
    background-color: #000000;
    color: white;
    padding: 26px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}

.policy-container .links {
    border-top: 2px solid gray;
    border-top-width: 50%;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    padding: 10px;
}

.policy-container .links li {
    margin: 0 10px;
    list-style: none;
}

.policy-container .links li a {
    color: rgb(212, 212, 212);
}
        .bottom-logo{
          color: #fff;
          font-size: 1.5rem;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
    @media (max-width: 800px){
      #footer{
        flex-direction: column; 
     }
      
    }
        </style>

        <div class="footer-container">
        <div id="footer">
          <div class="logo-container">
          <a href="index.html" class="active bottom-logo">
          <img class="logo" src="./images/logo.png" alt="Logo">
          <span>OcaWebTech</span>
          </a>
          </div>
    
          <div class="links">
            <h3>Important Links</h3>
            <ul>
              <li>
                <a href="index.html" class="active"> Home</a>
              </li>
    
              <li>
                <a href="about.html"> About</a>
              </li>
    
              <li>
                <a href="services.html">Services</a>
              </li>
    
              <li>
                <a href="contact.html"> Contact</a>
              </li>
    
    
            </ul>
    
    
          </div>
    
          <div class="social">
            <h3>Social Contact</h3>
            <a href="https://web.facebook.com/ocawebtech" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://www.youtube.com/channel/UCZ6ZasPc2Pw4oV8-bxS0RuA" target="_blank"> <i
                class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
    
          </div>
    
        </div>
        <div class="policy-container">
          <ul class="links ">
            <li>
              <a href="privacy.html" class="active"> Privacy Policy</a>
            </li>
    
            <li>
              <a href="terms.html">Terms and Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    
    
      <footer class="copy-rigth">
        <small>&COPY; 2021 - Oca Web Technology</small>
      </footer>

`;
class Footer extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(footerTemplate.content.cloneNode(true));
  }
}

window.customElements.define("oca-footer", Footer);
