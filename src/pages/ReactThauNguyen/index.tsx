import { Dialog } from '@reach/dialog';
import React from 'react';

// import style from './style.module.scss';

const ThauNguyen = (props: any) => {
    const [modalOpen, setModalOpen] = React.useState('none');

    const login = (data: any) => {
        // console.log(data);
    };

    const register = (data: any) => {
        // console.log(data);
    };
    return (
        <div>
            ThauNguyen
            <h1>My Listing</h1>
            <div>
                <button
                    onClick={() => {
                        setModalOpen('login');
                    }}
                >
                    Login
                </button>
            </div>
            <div>
                <button
                    onClick={() => {
                        setModalOpen('register');
                    }}
                >
                    Register
                </button>
            </div>
            <Dialog aria-label="Form" isOpen={modalOpen === 'login'}>
                <div>
                    <button
                        onClick={() => {
                            setModalOpen('none');
                        }}
                    >
                        Close
                    </button>
                </div>
                <h3>Login</h3>
                <Form onSubmit={login} buttonText="Login" />
            </Dialog>
            <Dialog aria-label="Form" isOpen={modalOpen === 'register'}>
                <div>
                    <button
                        onClick={() => {
                            setModalOpen('none');
                        }}
                    >
                        Close
                    </button>
                </div>
                <h3>Register</h3>
                <Form onSubmit={register} buttonText="Register" />
            </Dialog>
        </div>
    );
};

export default ThauNguyen;

function Form({ onSubmit, buttonText }: any) {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // lấy value của các element trong một form
        const { username, password } = e.target.elements;
        onSubmit({ username: username.value, password: password.value });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
            </div>
            <div>
                <button type="submit">{buttonText}</button>
            </div>
        </form>
    );
}
