import React, { useState } from 'react';
import Modal from './Modal';
import './Main.scss';

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eventHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button onClick={eventHandler}>click me</button>
      <Modal isOpen={isModalOpen} toggleModal={eventHandler} />
    </>
  );
};

export default Main;
