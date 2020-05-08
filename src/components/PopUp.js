import React, { useState } from "react"

function PopUp({ clicked }) {

    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')

    return (
        <div className="popup-main">
            <div className="popup-card">
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'flex-end', 
                    width: '100%', 
                    cursor: 'pointer' }} 
                    onClick={clicked}>X</div>
                <h1>Ciao!</h1> 
                <p>Non siamo ancora pronti con il servizio che ti abbiamo presentato, ma presto lo saremo! Se hai piacere a ricevere nostre notizie quando saremo pronti, lasciaci la tua mail qua sotto e ti avviseremo.</p>
                <form action="https://getform.io/f/5933b469-8573-476a-b101-acdd317adda8" method="POST" encType="multipart/form-data">
                    <label>Nome</label>
                    <input type="text" name="name" value={nameInput} onChange={e => setNameInput(e.target.value)}></input>
                    <label>Email</label>
                    <input type="email" name="email" value={emailInput} onChange={e => setEmailInput(e.target.value)}></input>
                    <button type="submit">Invia</button>
                </form>
            </div>
        </div>
    )
}

export default PopUp