import React, { Component } from 'react';
import '../../css/Auth.css'

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            error: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        
        const payload = {
            nome: this.state.name,
            sobrenome: this.state.surname,
            mail: this.state.email,
            senha: this.state.password
        }

        fetch("http://localhost:8080/register", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const {name, surname, email, password} = this.state
        return(
        <>
            <section className="navbar"></section>

            <div className="form-data-container">
                <form className="form-data" method="POST" onSubmit={this.submitHandler}>
                    <h1 className="login-title">Crie sua conta</h1>

                    <div className="label-username">
                        <label>Nome</label>
                        <input type="text" name="name" value={name} onChange={this.changeHandler} required/>
                    </div>

                    <div className="label-username">
                        <label>Sobrenome</label>
                        <input type="text" name="surname" value={surname} onChange={this.changeHandler} required/>
                    </div>

                    <div className="label-username">
                        <label>Email</label>
                        <input type="text" name="email" value={email} onChange={this.changeHandler} required/>
                    </div>
                    
                    <div className="label-password">
                        <label>Senha</label>
                        <input type="password" name="password" value={password} onChange={this.changeHandler} required/>
                    </div>

                    <button className="button" type="submit">Criar</button>

                    <div className="create-and-forgot">
                        <p><a href="/user/login">Já possui uma conta?</a></p>
                    </div>
                </form>
            </div>

            <div className="custom-shape-divider-bottom-1649861467">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </>
    )}
}

export default Register; 