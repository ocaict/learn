const headerTemplate = document.createElement("template")
headerTemplate.innerHTML =  `
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
            max-height: 300px;
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
                <a href="/" class="logo">OCA</a>
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
      </ul>
        </header>

`
class Header extends HTMLElement{
    constructor(){
        super()
        this.showInfo = true;
        this.attachShadow({mode: "open"})
        this.shadowRoot.append(headerTemplate.content.cloneNode(true))
         this.shadowRoot.querySelector(".logo").src = this.getAttribute("logo")
       
       
    }

}


window.customElements.define("oca-header", Header)