![k9as](https://user-images.githubusercontent.com/11001914/35435931-70b04be4-02c7-11e8-8446-50cb719475bc.png)



# Install

```
yarn add react-pure-css-modal
```


# Usage

```
import { Modal } from 'react-pure-css-modal';

<Modal id="anyID" onClose={() => {console.log("Modal close")}} >
   ...content in the modal
</Modal>
```


- open Modal
```
<button onClick={() => document.getElementById('anyID').click()}></button>
```

- close Modal(same as open)

```
<button onClick={() => document.getElementById('anyID').click()}></button>
```

- Modal status

```
document.getElementById('anyID').checked
```

- Modal component

```js
import { Modal } from 'react-pure-css-modal';
import React from 'react';
import PropTypes from 'prop-types';

function ModalDisplay(props) {
  return (
    <Modal style={props.style} id={props.id} onClose={() => props.onClose()}>
      {props.children}
    </Modal>
  );
}

ModalDisplay.propTypes = {
  id: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalDisplay;
```

Center Modal

```js
<Modal
  style={{
    left: '50%',
    transform: 'translate(-50%, -50%)',
    top: '50%',
  }}
/>  
```
