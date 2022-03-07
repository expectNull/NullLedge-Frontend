import React, { useEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import wait from 'waait';
import './Alert.css';

async function Alert(status, content) {
  let alertdiv = document.getElementById('alertDiv');
  // alertdiv.innerHTML = '';
  // let img = document.createElement('img');

  let src =
    status === 'success'
      ? './check.png'
      : status === 'warning'
      ? './warning.png'
      : 'error.png';

  alertdiv.classList.remove('hiddenDiv');
  alertdiv.classList.add('openDiv');
  alertdiv.classList.add(status);

  alertdiv.innerHTML = `
      <img
        className='icon'
        src=${src}
        width='30px'
        height='30px'
      ></img>
      <div>
      &nbsp;&nbsp;&nbsp;
      ${content}
      </div>
      `;

  await wait(3000);

  alertdiv.classList.remove('openDiv');
  alertdiv.classList.add('hiddenDiv');
  alertdiv.classList.remove(status);
}

function AlertDiv({ status, content }) {
  // status : success, warning, error
  const [divVisible, setDivVisible] = React.useState('openDiv');

  useEffect(() => {
    const f = async () => {
      await wait(3000);
      setDivVisible('hiddenDiv');
    };
    f();
  }, []);

  return (
    <div id="alertDiv" className={'alert ' + 'hiddenDiv'}>
      <img
        className={'icon'}
        src={
          status === 'success'
            ? './check.png'
            : status === 'warning'
            ? './warning.png'
            : 'error.png'
        }
        width={'50px'}
        height={'50px'}
      ></img>
      {content}
    </div>
  );
}

export { AlertDiv, Alert };
