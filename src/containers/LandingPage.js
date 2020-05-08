import React from "react"

import winesvg from '../images/wine_tasting.svg'
import winecard from '../images/wine.png'
import boxcard from '../images/box.png'
import tasting from '../images/tasting.png'
import shipping from '../images/shipping.png'
import tap from '../images/tap.png'

function LandingPage({ clicked }) {

    return (
        
        <>
            <section className="intro-container">
                <div className="intro-wrapper">
                    <div className="intro-text">
                        <h1>Bomvino, la degustazione a casa tua</h1>
                        <h4>BomVino è un’esperienza di degustazione, il corrispettivo digitale di una degustazione in cantina.</h4>
                        <button className="action-btn" onClick={clicked}>Provalo</button>
                    </div>
                    <div className="intro-image">
                        <img src={winesvg} alt="wine tasting" />
                    </div>
                </div>
            </section>
            <section className="wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800"><path fill="var(--secondary-color)" fillOpacity="1" d="M0,64L120,53.3C240,43,480,21,720,48C960,75,1200,149,1800,186.7L1440,224L1440,800L1800,800C1200,800,960,800,720,800C480,800,240,800,120,800L0,800Z"></path></svg>
                <h2 className="liquid-text">Goditi la degustazione in diretta: verrai guidato dai nostri sommelier nella scoperta dei segreti di una cantina, dalla terra al bicchiere, e potrai soddisfare tutte le tue curiosità interagendo dalla chat. </h2>
            </section>
            <section className="cards-container">
                <div className="cards-wrapper">
                    <div className="card">
                        <div className="circle-card">
                            <img src={tap} alt="tap" className="circle-img"/>
                        </div>
                        <h1 style={{ fontFamily: 'var(--second-font-family)' }}>Scegli l’esperienza</h1>
                        <p>Scegli la cantina che preferisci e seleziona la data che più si addice alle tue esigenze.</p>
                    </div>
                    <div className="card">
                        <div className="circle-card">
                            <img src={shipping} alt="shipping" /> 
                        </div>
                        <h1 style={{ fontFamily: 'var(--second-font-family)' }}>Ricevi i prodotti a casa</h1>
                        <p>Le cantine ti spediranno prima dell’esperienza i loro prodotti enogastronomici direttamente a casa.</p>
                    </div>
                    <div className="card">
                        <div className="circle-card">
                            <img src={tasting} alt="tasting" />
                        </div>
                        <h1 style={{ fontFamily: 'var(--second-font-family)' }}>Goditi l’esperienza</h1>
                        <p>Prima connettiti alla tua area personale e accedi allo streaming, poi apri i vini e rilassati: al resto pensiamo noi.</p>
                    </div>
                </div>
            </section>
            <section className="start-container">
                <div className="start-wrapper">
                    <h1>Inizia Ora</h1>
                    <div className="start-cards">
                        <div className="option-card">
                            <div>
                                <h1>Selezione dalla Toscana</h1>
                                <div className="col-card">
                                    <div className="row-card">
                                        <img src={winecard} alt="wine icon" />
                                        Chianti Classico
                                    </div>
                                    <div className="row-card">
                                        <img src={winecard} alt="wine icon" />
                                        Bolgheri
                                    </div>
                                    <div className="row-card">
                                        <img src={boxcard} alt="wine icon" />
                                        La giusta sfiziosità da accompagnare a questa degustazione
                                    </div>
                                </div>
                            </div>
                            <button className="option-btn" onClick={clicked}>Prenotati</button>
                        </div>
                        <div className="option-card">
                            <div>
                                <h1>Selezione dalle Langhe</h1>
                                <div className="col-card">
                                    <div className="row-card">
                                        <img src={winecard} alt="wine icon" />
                                        Nebbiolo
                                    </div>
                                    <div className="row-card">
                                        <img src={winecard} alt="wine icon" />
                                        Dolcetto
                                    </div>
                                    <div className="row-card">
                                        <img src={winecard} alt="wine icon" />
                                        Barbera
                                    </div>
                                    <div className="row-card">
                                        <img src={boxcard} alt="wine icon" />
                                        La giusta sfiziosità da accompagnare a questa degustazione
                                    </div>
                                </div>
                            </div>
                            <button className="option-btn" onClick={clicked}>Prenotati</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage