import { useState } from "react";
import axios from 'axios'
import { Input } from "./input";
import { validateAddress, validateEmail, validatePhoneNo, validateUname } from "./datas";
import { useForm, FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function Form() {
    const methods = useForm()
    const [length, setLength] = useState(true);
    const [success, setSuccess] = useState(false)
    const [form, setForm] =
        useState({
            Timestamp: new Date().toLocaleString(), emailAddress: "", fullName: '',
            contactNo: '', address: ''
        })

    const handleChange = (event) => {
        const { value, name } = event.target
        setForm({ ...form, [name]: value })
        console.log(value);
    }

    const handleSubmit = methods.handleSubmit(() => {
        axios.post('http://localhost:9000/api/create', form);
        setLength(false);
        setSuccess(true)
    })

    return (<div className="container">
        <div className="row d-flex justify-content-center align-items-center">

            <div className="col-lg-8">
                <FormProvider {...methods}>
                    <form method="post" action="/data" onSubmit={(event) => { event.preventDefault() }}>
                        <div className="card rounded p-5" style={{ maxWidth: '600px' }}>
                            <img src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp'} className="card-img" alt="img" />

                            <div className="card-body"><h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                                <Input success={success} validation={validateUname} name={'fullName'} placeholder={'your name'} handleChange={handleChange} type={'text'} label={'userName'} />
                                <Input success={success} validation={validateEmail} name={'emailAddress'} placeholder={'enter your email address'} handleChange={handleChange} type={'email'} label={'emailAddress'} />
                                <Input success={success} validation={validateAddress} name={'address'} placeholder={'enter your current address'} handleChange={handleChange} type={'text'} label={'current Address'} />
                                <Input success={success} validation={validatePhoneNo} name={'contactNo'} placeholder={'enter your contact Number'} handleChange={handleChange} type={'text'} label={'contactNumber'} pattern={'/^\d{10}/'} />

                                <div className="d-flex justify-content-between align-items-center mt-3"><button type="button" onClick={handleSubmit} className="btn btn-primary btn-sm ">Submit</button>
                                    <Link to={'/data'} ><button hidden={length} type="button" className="btn btn-success btn-sm" >view_Data</button></Link>

                                </div>
                            </div>
                        </div>
                    </form></FormProvider>
            </div>
        </div >
    </div >)

}
