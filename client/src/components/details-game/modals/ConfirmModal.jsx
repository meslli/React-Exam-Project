import { useEffect, useRef, useState } from 'react'
import './styles/styles.css'

const ConfirmModal = ({ method, action, cancelAction, gameTitle }) => {
    const ref = useRef(null)

    useEffect(() => {
        ref.current.style.animation = 'zoom-in .5s ease-out'
    }, [])

    const closeModal = () => {
        ref.current.style.animation = 'zoom-out .5s ease-out'

        setTimeout(() => {
            cancelAction()
        }, 400)
    }

    return (
        <div className="modal-container">
            <div className='modal' ref={ref}>
                <h2>Are you sure you want to {method} {gameTitle} game?</h2>

                <div className='modal-buttons'>
                    <span className='delete' onClick={action}>
                        {method}
                    </span>
                    <span className='cancel' onClick={closeModal}>
                        Cancel
                    </span>   
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal