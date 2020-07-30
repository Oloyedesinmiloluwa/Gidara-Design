import React from 'react'
import CustomButton from './CustomButton';
import CardGroup from './CardGroup';

const LandingSectionWithCards = ({ verticalText, viewAllButton, children }) => {
    return (
        <div className="in-great-company">
            <hr />
            <div className="in-great-company-body">
                <h2 id="what-we-do" className="text-vertical">{verticalText}&nbsp;</h2>
                <div>
                    {children}
                </div>
            </div>
            {viewAllButton}
        </div>
    )
}

export default LandingSectionWithCards
