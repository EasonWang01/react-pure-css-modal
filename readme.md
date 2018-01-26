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
