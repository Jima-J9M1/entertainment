import { GoogleLogin } from "@react-oauth/google";

const Register = ()=> {
    const responseGoogle = (response)=>{
        console.log("jima",response)
    }
    const failGoogle = (fail)=>{
        console.log("Error",fail)
    }

   return(
    <div className="w-1/3 p-10">

      {/* Title */}
      <p className="text-center p-3 font-bold text-lg">Sing into your account</p>

     <div className="border solid rounded black space-y-3 p-6 pb-12">
        {/*Content Container*/}
        <div>
            {/* Email */}
            <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
                </span>
                <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
            </label>

        </div>

        <div>
            {/* Password */}
            <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Password
                </span>
                <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
            </label>
        </div>
        
        <div className="flex justify-between items-center">
            <div>
            {/* Remeber */}
                <label className="flex  items-center space-x-3">
                <input type="checkbox" name="remeber"/>
                <span className="text-sm font-medium text-slate-700">
                    Remember me
                </span>
                </label>

            </div>

            <div>
                {/* Forgot password */}
                <p>Forgort Password?</p>
            </div>
        </div>


        <div className="flex justify-center items-center">
            {/* Signin button */}
            <div className="bg-blue-600 rounded-lg text-center w-1/2 ">
            <p className="text-white">SignIn</p>
            </div>
        </div>
         
         <div>
            {/*  or Continue with*/}
            <span className="before:content-['-------'] before:text-gray-300 after:content-['-------'] after:text-gray-300 font-bold">
            or Continue with
            </span>
         </div>
        
        <div className="flex justify-center items-center">
            {/* Other signin platform */}
            <GoogleLogin
        onSuccess={responseGoogle}
        onError={failGoogle}
        theme="filled_black"
        type="icon"
        // size="medium"
        shape="circle"
        useOneTap
        />
        </div>

        <div>
            {/* Regisiter */}
        </div>
           
     </div>

    </div>
   )

}

export default Register
