import React from 'react'

export default function MyComponent({faq,index,toggleFAQ}) {
    return (
        <div
        className={"faq " + (faq.isOpen ? 'open' : '')}
        onClick={() => toggleFAQ(index)}
        >
            <div className="faq-question">
                {faq.discription}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
            
        </div>
    )
}
