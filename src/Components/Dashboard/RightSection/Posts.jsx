import React, { useState } from 'react'
import './Posts.css'
import panda from '../.../../../../Assets/Image/coder.jpg'
import Modal from 'react-modal'



const Posts = () => {
    const customStyles = {
        overlay:{
            backgroundColor : 'rgb(36,33,33,75%)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },

        modal_input: {
            display: 'flex',
            flexDirection: 'column',
            gap:'1rem'
        },

        modal_info:{
            display: 'flex',
            flexDirection: 'column',
            gap:'5px',
        },
        input:{
            padding:'2px'
        }
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div className='My-Posts'>
                <div className='post-head'>
                    <h3>My Posts:- </h3>
                    <span onClick={() => openModal()} ><i class='far fa-edit'></i></span>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h3>Document Upload: </h3>
                        <br/>
                        <div style={customStyles.modal_input}>
                            <div style={customStyles.modal_info}>
                                <label>Add info:</label>
                                <input type='text' placeholder='xyz' style={customStyles.input} ></input>
                            </div>

                            <div style={customStyles.modal_info}>
                                <label>Add tags:</label>
                                <input type='text' placeholder='#abc' style={customStyles.input}/>
                            </div>

                            <div style={customStyles.modal_info}>
                                <label for="img">Add Doc:</label>
                                <input type="file" id="img" name="img" accept="image/*" style={customStyles.input}/>
                            </div>

                        </div>
                        <br/>
                        <button onClick={closeModal}>close</button>
                    </Modal>

                </div>
                <div className='frames'>

                    <div className='frame'>
                        <img src={panda} className='panda' />
                    </div>

                    <div className='frame'>
                        <img src={panda} className='panda' />
                    </div>

                    <div className='frame'>
                        <img src={panda} className='panda' />
                    </div>

                    <div className='frame'>
                        <img src={panda} className='panda' />
                    </div>

                    <div className='frame'>
                        <img src={panda} className='panda' />
                    </div>

                </div>
            </div>
            {/* {open && <Modal />} */}
        </>
    )
}

export default Posts