import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay:{
        backgroundColor : 'rgb(36,33,33,75%)',
        // overflowY:'hidden'
        position:'static',
    },
    content: {
        top: '50%',
        left: '40%',
        width: '20vw',
        height:'20%',
        transform: 'translate(-50%, -50%)',
        padding: '1rem 1rem 1rem 1rem',
        border:'2px solid black',
        
    },
    part1 : {
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        gap:'2vw',
        // justify_content:'center',
    },
    close : {
        position:'absolute',
        padding:'0.5rem',
        margin:'1rem',
        bottom:'0',
        right:'0',
        borderRadius:'5px'
    },
    input:{
        padding:'2px'
    }
    
};


const NavModel = (props) => {
    const [backimage, setbackimage] = useState(props.change);
    // const [profimage, setprofimage] = useState(propse)
    function closeModal() {
        setbackimage(false);
    }

    return (
        <>
            {props.area=="background"}
            {
                <div>
                    <Modal
                        isOpen={backimage}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div style={customStyles.part1}>
                            <h2>Add Image</h2>
                            <input type="file" id="img" name="img" accept="image/*" style={customStyles.input}/>
                        </div>
                        <button onClick={closeModal} style={customStyles.close}>close</button>
                    </Modal>
                </div>
            }

            {props.area=="profile"}{
                <div>
                    <Modal
                        isOpen={backimage}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div style={customStyles.part1}>
                            <h2>Add Image</h2>
                            <input type="file" id="img" name="img" accept="image/*" style={customStyles.input}/>
                        </div>
                        <button onClick={closeModal} style={customStyles.close}>close</button>
                    </Modal>
                </div>
            }
        </>
    )
}

export default NavModel