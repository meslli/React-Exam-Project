import { useEffect, useRef } from 'react'
import './styles/styles.css'

const ConfirmModal = ({ method, confirmAction, cancelAction, gameTitle }) => {
    const btnTitle = `${method[0].toUpperCase()}${method.slice(1, method.length)}`
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
        <div className="modal-container" onClick={closeModal}>
            <div className='modal' ref={ref}>
                <h2>Are you sure you want to {method} {gameTitle} game?</h2>

                <div className='modal-buttons'>
                    <button 
                        type="submit" 
                        className='delete' 
                        onClick={confirmAction}
                        style={{backgroundColor: method !== 'delete' ? 'green' : ''}}
                    >
                        {btnTitle}
                    </button>
                    <button className='cancel' onClick={closeModal}>
                        Cancel
                    </button>   
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal