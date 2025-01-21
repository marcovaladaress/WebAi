

export default function WalletCard() {
    return (
        <section>
        <div className="container-card-info">
            <div className="card-wallet">
                <div className="symbol-wallet">
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" color="transparent" fill="rgb(124 58 237 / 0.1)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="diamond" ><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
                </div>
                <div className="icon-wallet">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="wallet" class="lucide lucide-wallet h-6 w-6"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                </div>

                <div className="title-wallet">
                    <h1>Configure sua carteira</h1>
                    <p>Use Trust Wallet, Metamask ou qualquer carteira para se conectar ao aplicativo.</p>
                    <p>Você pode carregar quaisquer arquivos do seu computador ou usar links do Youtube. Tenha em mente que nossa reutilização de conteúdo funciona melhor com vídeos mais longos.</p>
                </div>

               
            </div>

            <div className="card-wallet">
                <div className="symbol-wallet">
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" color="transparent" fill="rgb(124 58 237 / 0.1)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="diamond" ><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
                </div>
                <div className="icon-wallet">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="shapes" class="lucide lucide-shapes h-6 w-6"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect x="3" y="14" width="7" height="7" rx="1"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
                </div>

                <div className="title-wallet">
                    <h1>Crie sua coleção</h1>
                    <p>Carregue seus NFTs e defina um título, uma descrição e um preço.</p>
                    <p>Você pode carregar quaisquer arquivos do seu computador ou usar links do Youtube. Tenha em mente que nossa reutilização de conteúdo funciona melhor com vídeos mais longos.</p>
                </div>

               
            </div>
        </div>
    </section>

    )
}