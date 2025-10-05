import React from 'react';

const Review = (props) => {
    return (
        <div className='review-card'>
            <div className='review-content'>
                <div style={{ padding: "0 20px 0 30px" }}>
                    <div style={{ display: "flex", placeItems: "center", flexDirection: "column", alignItems: "flex-start" }}>
                        <h2 style={{ width: "90%", marginBottom: '14px' }}>{props.name}</h2>
                        {/* Профессия под именем */}
                        <p style={{ fontStyle: 'italic', color: '#666', marginTop: '-8px', marginBottom: '15px' }}>
                            {props.profession}
                        </p>
                    </div>
                    <p className='review'>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Review;
