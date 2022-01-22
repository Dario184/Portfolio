import React from 'react';
import Navbar from '../componenti/Navbar';

export default function Home() {
    return (
        <div className='scroll-smooth'>
            <Navbar/>
            <div className='bg-zinc-900 h-100 md:flex md:flex-row'>
                <div className='w-full z-10 flex flex-col items-center md:items-start gap-8 md:text-left xl:px-40 lg:pl-20 md:pl-10 pl-5 py-24'>
                    <h1 className='text-7xl font-extrabold text-white'>Costruisci nuove esperienze !</h1>
                    <p className='text-lg text-zinc-100'>Ciao, sono <b>Mangili Dario</b>, designer e developer specializzato nella creazione di siti e applicazioni mobile.
                        <br/>Creerò per te progetti coinvolgenti e d'impatto da mostrare e condividere.<br/>
                        Cosa stai aspettando? 
                    </p>
                    <button type='button' className='transition text-lg  w-fit focus:ring-1 focus:ring-white focus:ring-offset-5  px-16 py-3 shadow text-black/80 bg-white bg-opacity-90 hover:bg-opacity-100 font-bold uppercase rounded-full focus:outline-none '>
                        Iniziamo !
                    </button>
                </div>
                <img alt="ciao" src='ritratto.png' className='hidden md:block right-0 relative w-1/3 opacity-60 z-20 aspect-square w-50 object-cover'/>
            </div>
            <div className='bg-zinc-300'>
                <h1  className='text-5xl text-center font-extrabold text-zinc-700 py-12'>Servizi</h1>
                <img src="divider.svg" className='h-6 relative mr-auto ml-auto' alt="divider"/>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols justify-center gap-8 xl:px-40 lg:px-20 md:px-10 px-5 py-24'>
                    <div class="max-w-sm transition bg-zinc-100 hover:scale-105 rounded-md overflow-hidden shadow-lg ">
                        <img class="w-full" src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Ecommerce</div>
                            <p class="text-zinc-700 text-base">
                                Se cerchi il modo di realizzare il negozio online per la tua impresa, potrai scegliere tu stesso la metodo base per costruirlo scegliendo tra piattaforme come Shopify, Prestashop, WooCommerce e decidere sui design proposti"
                            </p>
                        </div>
                        
                    </div>
                    <div class="max-w-sm bg-zinc-100 transition hover:scale-105 rounded-md overflow-hidden shadow-lg ">
                        <img class="w-full" src="https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Piattaforma personalizzata</div>
                            <p class="text-zinc-700 text-base">
                                Realizza la tua piattaforma personalizzata dal nulla, può diventare qualsiasi cosa, l'immaginazione è l'unico limite
                            </p>
                        </div>
                        
                    </div>
                    <div class="max-w-sm transition bg-zinc-100 hover:scale-105 rounded-md overflow-hidden shadow-lg ">
                        <img class="w-full object-contain" src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Consulenze Professionali</div>
                            <p class="text-gray-700 text-base">
                            La necessità di trasformazione trasformazione tecnologica è diventata essenziale. Il business moderno richiede di muoversi agilmente e di stare al passo. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-zinc-900'>
                <h1 className='text-5xl font-extrabold text-zinc-200 py-12 text-center'>Iniziamo</h1>
                <form class="w-full max-w-lg ml-auto mr-auto px-8 pb-12 shadow">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block first-letter:uppercase tracking-wide text-gray-200 text-sm text-left font-bold mb-2" for="grid-first-name">
                            Nome
                        </label>
                        <input class=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                        <label class="block first-letter:uppercase tracking-wide text-gray-200 text-sm text-left font-bold mb-2" for="grid-last-name">
                            Cognome
                        </label>
                        <input class=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"/>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block first-letter:uppercase tracking-wide text-gray-200  text-left font-bold mb-2" for="grid-password">
                            Email
                        </label>
                        <input class=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block first-letter:uppercase tracking-wide text-gray-200 text-sm text-left font-bold mb-2" for="grid-password">
                            Messaggio
                        </label>
                        <textarea class=" no-resize block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <button class="shadow w-full bg-zinc-400 hover:bg-zinc-300 ml-auto mr-auto focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
                            Invia
                        </button>
                    </div>
                </form>
            </div>
            <footer class="bg-gray-200 text-center lg:text-left">
                <div class="text-gray-700 text-center p-4" >
                    © 2022 Copyright : Mangili Dario
                </div>
            </footer>
        </div>
    )
}
