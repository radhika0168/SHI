import React from 'react'
import Modal from 'react-modal';




const customStyles = {
    overlay:{
        backgroundColor : 'rgb(36,33,33,75%)',
    },

    content: {
        top: '50%',
        left: '50%',
        position: 'relative',
        width: '50vw',
        height: '60%',
        transform: 'translate(-50%, -50%)',
        // padding: '1rem 1rem 1rem 1rem',
        border: '2px solid black',
        // background:'white',
        // WebkitOverflowScrolling: 'touch',

    },
    part1: {
        textAlign: 'center',
    },
    close: {
        position: 'absolute',
        padding: '0.5rem',
        margin: '1rem',
        bottom: '0',
        right: '0',
        borderRadius: '5px'
    },

    forms: {
        marginTop: '1rem',
        // border: '2px solid black',
        // padding:'1rem',
        width: '98%',
        height: '100%',
        textAlign: 'left'
    },

    formsparts:{
        display:'flex',
        flexDirection:'column',
        gap : '0.3rem',
        color:'grey',
    },
    // ReactModal__Overlay :{
    //     opacity: '2',
    //     transition: 'opacity 2000ms ease-in-out',
    // },
    // ReactModal__Overlay--after-modalIsOpen : {
    //     opacity: '1',
    // }
    
    // ReactModal__Overlay--before-close{
    //     opacity: 0;
    // }

    Input :{
        padding:'5px',
    }

}



const ExperienceModal = ({ Open }) => {

    const [modalIsOpen, setIsOpen] = React.useState(Open);

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    
                >
                    <div style={customStyles.part1}>
                        <h3>Experience</h3>
                        <form style={customStyles.forms}>
                            <div style={customStyles.formsparts}>
                                <label for='title'>Title: </label>
                                <input type="text" name='title' placeholder='Ex. Sale manager/Executive Mangaer' style={customStyles.Input}/>
                            </div>

                            <br />
                            <div style={customStyles.formsparts}>
                                <label for='Emp-type'>Employment Type: </label>
                                <select className='Emp-type' name='Emp-type'>
                                    <options value='fulltime'>Fulltime</options>
                                    <options value='Part-time'>Part-Time</options>
                                    <options value='Self-employed'>Self-Employed</options>
                                    <options value='Freelancer'>Freelancer</options>
                                    <options value='Internship'>Internship</options>
                                    <options value='Trainee'>Trainee</options>
                                </select>
                            </div>
                            <br />
                            <div style={customStyles.formsparts}>
                                <label for='company-name'>Company name</label>
                                    <input type="text" name='company-name' placeholder='ex. Microsoft' style={customStyles.Input}/>
                            </div>
                            <br/>
                            <div style={customStyles.formsparts}>
                                <label for='location'>Location</label>
                                    <input type="txt" name='location' placeholder='ex. Delhi,India' style={customStyles.Input} />
                            </div>
                            <br/>
                            <div style={customStyles.formsparts}>
                                <label for='duration'>Duration</label>
                                    <label>Start date:</label>
                                    <input type="date" name='duration' style={customStyles.Input}/>
                                    <label>End date: </label>
                                    <input type='date' name='duration' style={customStyles.Input}/>
                            </div>
                            <br/>
                            <div style={customStyles.formsparts}>
                                <label for='Descript'>Description</label>
                                    <input type="text" name='Descript' style={customStyles.Input}/>
                            </div>
                        </form>

                    </div>
                    <button onClick={closeModal} style={customStyles.close}>close</button>
                </Modal>
            </div>
        </>
    );
}

export default ExperienceModal;