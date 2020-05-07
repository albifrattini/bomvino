import React from "react"

import winesvg from '../images/wine_tasting.svg'

const landingPage = () => {
    return (
        <>
            <section className="intro-container">
                <div className="intro-wrapper">
                    <div className="intro-text">
                        <h1>Bomvino, la degustazione a casa tua</h1>
                        <h4>BomVino è un’esperienza di degustazione, il corrispettivo digitale di una degustazione in cantina.</h4>
                        <button className="action-btn">Provalo</button>
                    </div>
                    <div className="intro-image">
                        <img src={winesvg} alt="wine tasting" />
                    </div>
                </div>
            </section>
            <section style={{ position: 'relative' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 600"><path fill="var(--secondary-color)" fill-opacity="1" d="M0,64L120,53.3C240,43,480,21,720,48C960,75,1200,149,1600,186.7L1440,224L1440,600L1600,600C1200,600,960,600,720,600C480,600,240,600,120,600L0,600Z"></path></svg>
                <h2 className="liquid-text">Goditi la degustazione in diretta: verrai guidato dai nostri sommelier nella scoperta dei segreti di una cantina, dalla terra al bicchiere, e potrai soddisfare tutte le tue curiosità interagendo dalla chat. </h2>
            </section>
            <section className="cards-container">
                <div className="cards-wrapper">
                    <div className="card">
                        <div></div>
                        <h1 style={{ fontFamily: 'var(--second-font-family)' }}>Scegli l’esperienza</h1>
                        <p>Scegli la cantina che preferisci e seleziona la data che più si addice alle tue esigenze.</p>
                    </div>
                    <div className="card">
                        <div></div>
                        <h1 style={{ fontFamily: 'var(--second-font-family)' }}>Ricevi i prodotti a casa</h1>
                        <p>Le cantine ti spediranno prima dell’esperienza i loro prodotti enogastronomici direttamente a casa.</p>
                    </div>
                    <div className="card">
                        <div></div>
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
                            <h1>Ciao</h1>
                            <p>Prima connettiti alla tua area personale e accedi allo streaming, poi apri i vini e rilassati: al resto pensiamo noi.</p>
                            <button className="option-btn">Acquista</button>
                        </div>
                        <div className="option-card">
                            <h1>Ciao</h1>
                            <p>Prima connettiti alla tua area personale e accedi allo streaming, poi apri i vini e rilassati: al resto pensiamo noi.</p>
                            <button className="option-btn">Acquista</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default landingPage