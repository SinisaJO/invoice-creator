import React from "react";
import Items from '../Items';

export default function Card() {
    const [items, setItems] = React.useState([])

    const renderBtns = Items.map((btn) => {
        return (
            <button className="card-btn" onClick={() => addItem(btn)} key={btn.id}>{btn.name}: ${btn.price}</button>
        )
    })

    function addItem(item) {
        if (item) {
            if (items.filter(service => service.id === item.id).length===0){
                setItems([...items, {...item}])
            }
        }
    }

    function removeItem(itemToRemove) {
        setItems(items.filter((item) => item !== itemToRemove))
    }

    function refreshCard() {
        setItems(prevState => prevState = [])
    }

    const renderItems = items.map((service) => {
        return (
            <div className="card__services__task__description flex" key={service.id}>
                <h2 className="item">{service.name} <span className="rmv" onClick={() => removeItem(service)}>Remove</span></h2>
                <h2 className="item"><span>$</span>{service.price}</h2>
            </div>
        )  
    })
   
    const itemsPrice = items.reduce((a, c) => a + c.price, 0)

    

    return (
        <div className="container card">
            <div className="card__heading">
                <h1 className="card__heading__title">Invoice creator</h1>
                <p className="card__heading__text">Thanks for choosing GoodCorp, LLC!</p>
            </div>
            <div className="card__services">
                <div className="card__services__items flex">
                    {renderBtns}
                </div>
                <div className="card__services__task">
                    <div className="card__services__task__description flex">
                        <h3>TASK</h3>
                        <h3>TOTAL</h3>
                    </div>
                    {renderItems}
                    <div className="card__services__task__description flex border-top">
                        <h3>NOTES</h3>
                        <h3>TOTAL AMOUNT</h3>
                    </div>
                    <div className="card__services__task__description flex">
                        <h4>We accept cash, credit card, or PayPal</h4>
                        <h1 className="price">${itemsPrice}</h1>
                    </div>
                </div>
                <button className="submit-button" onClick={refreshCard}><svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 0.5L14.5001 0.5C14.8829 0.49993 15.2513 0.646224 15.5297 0.90892C15.7305 1.0984 15.8737 1.33809 15.9462 1.60038L8.5 5.323L1.05384 1.60038C1.12634 1.33809 1.26945 1.0984 1.47029 0.90892C1.74874 0.646224 2.1171 0.49993 2.49991 0.5H2.5H14.5ZM8.27639 8.56521L8.5 8.67702L8.72361 8.56521L16 4.92702V10C16 10.3978 15.842 10.7794 15.5607 11.0607C15.2794 11.342 14.8978 11.5 14.5 11.5H2.5C2.10218 11.5 1.72064 11.342 1.43934 11.0607L1.08959 11.4104L1.43934 11.0607C1.15804 10.7794 1 10.3978 1 10V4.92702L8.27639 8.56521Z" fill="white" stroke="white"/>
</svg>Send invoice</button>
            </div>
        </div>
    )
}