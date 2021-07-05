import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import ImageFr from '../../assets/images/email3.jpg'
import { Button } from '../Button'





export const ContactComponent = ({ showModal, setShowModal}) => {
    return (
        <>
        { showModal ? (
            <Background>
                <ModalWrapper showModal={showModal}>
                    <ModalImg src={ImageFr}
                    alt='sklad' />
                    <ModalContent>
                        <h1>Shinsengumi</h1>
                        <input type="phone" name="user_phone" placeholder="Телефон" />
                        <br />
                        <input type="email" name="user_email" placeholder="Email" />
                        <br />
                        <textarea name='message' rows='3' placeholder="Объем бака"/>
                        <br />
                    
                        <Button primary="true" round="true" type='submit'>Заказать звонок</Button>
                    </ModalContent>
                    <CloseModalButton aria-label='Close modal' onClick={() => setShowModal
                    (prev => !prev)} />
                </ModalWrapper>
            </Background>
        ) : null } 
        </>
    );
}


const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba (0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`
const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 100;
    border-radius: 10px;
`

const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {
    margin-bottom: 1rem;
    }

    bottom {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`