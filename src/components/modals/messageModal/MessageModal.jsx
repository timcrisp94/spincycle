import React from 'react';
import { ModalWrapper, Reoverlay } from 'reoverlay';

import 'reoverlay/lib/ModalWrapper.css';

const MessageModal = ({ text }) => {

  const closeModal = () => {
    Reoverlay.hideModal();
  }

  return (
    <ModalWrapper className="bg-slate-200/20">
      <div className='bg-slate-200 h-fit w-fit p-10 pb-40 rounded backdrop-blur-md font-quicksand'>
        <div className='h-10 text-center text-slate-900'>
          <h1 className='font-gloock'>SpinCycle</h1>
          <p className='p-3'>
            {text}
          </p>
          <button className=" bg-slate-300 rounded-sm" onClick={closeModal}>close</button>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default MessageModal