class footerApp extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML += `
            <div class="container-fluid p-5 rounded-3">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-md-offset-1 col-md-10">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="row mb-5">
                                    <div class="col-md-6">
                                        <p class="fs-5 fw-bold">Quick Link</p>
                                        <p class="fs-6 mb-1"><a href="/" class="text-black link-underline link-underline-opacity-0">Beranda</a></p>
                                        <p class="fs-6 mb-1"><a href="#about" class="text-black link-underline link-underline-opacity-0">Tentang Kami</a></p>
                                        <p class="fs-6 mb-1"><a href="#blog" class="text-black link-underline link-underline-opacity-0">Blog</a></p>
                                    </div>
                                    <div class="col-md-6">
                    
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                       <p>SANTANI (Santri Tani) © 2021</p> 
                                    </div>
                                    <div class="col-md-6">
                                        <p>Developed By KKN 16 Universitas Kuningan 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row mb-3">
                                    <img src="./src/public/images/Logo(sementara).png" alt="logo" style="width: 20%;" class="ms-auto">
                                </div>
                                <div class="row">
                                    <p class="text-end">SANTANI (SANTRI TANI)<br>Nagarapageuh, Ciamis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('footer-app', footerApp);