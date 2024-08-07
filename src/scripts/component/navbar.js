class navBar extends HTMLElement {
    constructor(){
        super();
        
        this.attachShadow({mode: 'open'});

        this._style = document.createElement('style');
    }

    connectedCallback(){
        this.render();
    }

    updateStyle(){
        this._style.textContent = `
            nav{
                display: flex;
                padding: 0.25rem 1rem 0.25rem 1rem;
                background-color: #198754;
                color: white;

                ul{
                    display: flex;
                    gap: 1rem;
                    width: 100%;
                    justify-content: right;
                    align-items: center;
                    list-style-type: none;
                }

                .nav-hamburger{
                    display: none;
                    align-items: center;

                    button{
                        padding: 10px 15px 10px 15px;
                        font-size: 1.5rem;
                        font-weight: 1000;
                        border-radius: 25%;
                    }
                }
            }
            a{
                color: white;
                text-decoration: none;
            }
            a:hover{
                text-decoration: underline;
            }
        `;
    }

    render(){
        this.updateStyle();

        this.shadowRoot.innerHTML += `
            <nav>
                <div class="nav-logo">
                    <h1>Beranda</h1>
                </div>
                <ul class="nav-menu">
                    <li class="nav-menu-beranda"><a href="/">Beranda</a></li>
                    <li class="nav-menu-about"><a href="#about">Tentang Kami</a></li>
                    <li class="nav-menu-blog"><a href="#blog">Blog</a></li>
                </ul>
                <div class="nav-hamburger">
                    <button>
                        ☰
                    </button>
                </div>
            </nav>
        `;

        this.shadowRoot.appendChild(this._style);
    }
}

customElements.define('nav-bar', navBar);