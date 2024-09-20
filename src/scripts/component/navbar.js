class navBar extends HTMLElement {
    constructor(){
        super();
        
        //this.attachShadow({mode: 'open'});

        //this._style = document.createElement('style');
    }

    connectedCallback(){
        this.render();
    }

    // updateStyle(){
    //     this._style.textContent = `
    //         nav{
    //             display: flex;
    //             padding: 0.25rem 1rem 0.25rem 1rem;
    //             background-color: #198754;
    //             color: white;

    //             ul{
    //                 display: flex;
    //                 gap: 1rem;
    //                 width: 100%;
    //                 justify-content: right;
    //                 align-items: center;
    //                 list-style-type: none;
    //             }

    //             .nav-hamburger{
    //                 display: none;
    //                 align-items: center;

    //                 button{
    //                     padding: 10px 15px 10px 15px;
    //                     font-size: 1.5rem;
    //                     font-weight: 1000;
    //                     border-radius: 25%;
    //                 }
    //             }
    //         }
    //         a{
    //             color: white;
    //             text-decoration: none;
    //         }
    //         a:hover{
    //             text-decoration: underline;
    //         }
    //     `;
    // }

    // render(){
    //     this.updateStyle();

    //     this.shadowRoot.innerHTML += `
    //         <nav>
    //             <div class="nav-logo">
    //                 <h1>SANTANI</h1>
    //             </div>
    //             <ul class="nav-menu">
    //                 <li class="nav-menu-beranda"><a href="/">Beranda</a></li>
    //                 <li class="nav-menu-about"><a href="#about">Tentang Kami</a></li>
    //                 <li class="nav-menu-blog"><a href="#blog">Blog</a></li>
    //             </ul>
    //             <div class="nav-hamburger">
    //                 <button>
    //                     ☰
    //                 </button>
    //             </div>
    //         </nav>
    //     `;

    //     this.shadowRoot.appendChild(this._style);
    // }

    render(){
        //this.updateStyle();

        this.innerHTML += `
             <nav class="navbar bg-success navbar-expand-lg p-2 sticky-top">
        <div class="container-fluid ps-5 pe-5">
          <a class="navbar-brand text-white fw-bold" href="#">SANTANI</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item ps-3">
                <a class="nav-link text-white" aria-current="page" href="/">Beranda</a>
              </li>
              <li class="nav-item ps-3">
                <a class="nav-link text-white" href="#about">Tentang Kami</a>
              </li>
              <li class="nav-item ps-3">
                <a class="nav-link text-white" href="#blog">Blog</a>
              </li>
              </li>
            </ul>
          </div>
        </div>
    </nav>
        `;

        //this.shadowRoot.appendChild(this._style);
    }
}

customElements.define('nav-bar', navBar);