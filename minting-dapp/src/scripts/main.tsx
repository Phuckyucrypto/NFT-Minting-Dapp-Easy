import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import { ContractConfig } from '../../config'; // Updated import path
import { ToastContainer } from 'react-toastify';

if (document.title === '') {
  document.title = ContractConfig.tokenName; // Ensure tokenName is defined in your new config
}

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(
    <>
      <ToastContainer
        position='top-left'
        autoClose={5000}
        closeOnClick={true}
        pauseOnHover={true}
        theme='light'
      />
    </>,
    document.getElementById('notifications')
  );

  ReactDOM.render(
    <>
      <Dapp />
    </>,
    document.getElementById('minting-dapp')
  );
});
