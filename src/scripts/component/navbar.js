class navBar extends HTMLElement {
    constructor(){
        super();

        this._style = document.createElement('style');
    }

    connectedCallback(){
        this.render();
    }

    render(){
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
    }
}

customElements.define('nav-bar', navBar);