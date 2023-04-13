import React, { useState } from 'react'
import s from './SendMessage.module.scss'
// import Cursor from '../../components/Cursor/Cursor';
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const SendMessage = () => {

    const [message, setMessage] = useState({
        email: '',
        name: '',
        description: '',
    })
    const [state, setState] = useState()

    const onChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
    }

    const sendMessage = async () => {
        try {

            await axios.post('http://localhost:8000' + '/api/messages/add', message)
                .then((res) => {
                    console.log(res.data)
                    setState(res.data)
                    setMessage({
                        email: '',
                        name: '',
                        description: '',
                    })
                })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={s.main}>
            {/* <Cursor /> */}
            <div className={`${s.wrapper} container`}>
                <h2>Send message to me</h2>
                <div className={s.inputs}>
                    <input
                        type="email"
                        placeholder='Your email...'
                        onChange={onChange}
                        value={message.email}
                        name='email'
                    />
                    <input
                        type="text"
                        placeholder='Your name...'
                        onChange={onChange}
                        value={message.name}
                        name='name' />
                    <textarea
                        name="description" id="" cols="30"
                        rows="10" placeholder='Write to me...'
                        onChange={onChange}
                        value={message.description}
                    ></textarea>
                </div>
                <h4>
                    {state}
                </h4>
                <div className={s.btns}>
                    <button onClick={sendMessage} className={s.btn}>Send</button>
                </div>
            </div>

        </div>
    );
};
export default SendMessage