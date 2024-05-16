import React from 'react'
import './List.css'

const List = ({
    title,
    item1,
    item2,
    item3,
    item4,
    img1,
    img2,
    img3
}) => {
    return (
        <>
            <div className="footer-list">
                <div className="list-title">{title}</div>
                <ul className="footer-ul">
                    <li className="footer-list-item">
                        {item1}
                    </li>
                    <li className="footer-list-item">
                        {item2}
                    </li>
                    <li className="footer-list-item">
                        {item3}
                    </li>
                    <li className="footer-list-item">{item4}</li>
                </ul>
            </div>
        </>
    )
}

export default List