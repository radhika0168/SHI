import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    overlay:{
        backgroundColor : 'rgb(36,33,33,75%)',
    },
    content: {
        top: '50%',
        left: '40%',
        width: '50vw',
        height:'200px',
        transform: 'translate(-50%, -50%)',
        padding: '1rem 1rem 1rem 1rem',
        border:'2px solid black',
        
    },
    part1 : {
        textAlign:'center',

    },
    close : {
        position:'absolute',
        padding:'0.5rem',
        margin:'1rem',
        bottom:'0',
        right:'0',
        borderRadius:'5px'
    }
    
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAboutModelElement('#yourAppElement');

function Aboutmodel({ open }) {
    const [modalIsOpen, setIsOpen] = React.useState(open);

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div style={customStyles.part1}>
                    <h2>About</h2>
                    <textarea style={{width:'80%',height:'130px'}}/>
                </div>
                <button onClick={closeModal} style={customStyles.close}>close</button>
            </Modal>
        </div>
    );
}

export default Aboutmodel
