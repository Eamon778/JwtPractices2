const RegisterPage = ()=>{
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <p className="text-white text-4xl font-bold pb-12">Registration</p>
            <label className="form-control">
                <div className="flex gap-20">
                    <div>
                        <div className="label">
                            <span className="label-text text-2xl text-white">Name:</span>
                        </div>
                        <input type="text" placeholder="Name" className="input input-bordered text-white border-white max-w-xs" />
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text text-2xl text-white">Username:</span>
                        </div>
                        <input type="text"  placeholder="username" className="input input-bordered text-white border-white max-w-xs" />
                    </div>
                </div>
                <div>
                    <div className="label">
                        <span className="label-text text-2xl text-white">Password:</span>
                    </div>
                    <input type="password" placeholder="password" className="input input-bordered text-white border-white w-full max-w-xs" />
                </div>
                <div>
                    <div className="label">
                        <span className="label-text text-2xl text-white">Email:</span>
                    </div>
                    <input type="Email" placeholder="someone@example.com" className="input input-bordered text-white border-white min-w-full max-w-xs" />
                </div>
                <div className="flex items-center justify-between pt-5">
                    <p>Already have an Account? <a href="/login" className="text-blue-600">Log in Here</a></p>
                    <button className="btn bg-blue-600 font-bold w-24">Sign Up</button>
                </div>
            </label>
        </div>
    )
}

export default RegisterPage