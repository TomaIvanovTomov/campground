import {toast} from 'react-toastify';

export default function message(type, message) {
    if (type == 'error') {
        if (typeof message == 'string')
            return toast.error(message)
        else if (typeof message == 'object') {
            return message.map(err => {
                return toast.error(err)
            })
        }
    }

    if (type == 'success') {
        if (typeof message == 'string')
            return toast.success(message)
        else if (typeof message == 'object') {
            return message.map(suc => {
                return toast.success(suc)
            })
        }
    }
}