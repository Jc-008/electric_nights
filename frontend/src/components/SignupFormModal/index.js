import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm'
import './SignupForm.css';

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <NavLink to={'/signup'} className='clickable-links'  onClick={() => setShowModal(true)}>Signup</NavLink>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <SignUpForm />
      </Modal>
    )}
  </>
  )
}


export default SignUpFormModal;
