import React from 'react';
import { GoPerson } from "react-icons/go";
import { BiLockAlt } from "react-icons/bi";

const LoginPage = () => {
  return (
    <section class="vh-100">
    <div class="container-fluid">
        <div class="row">
        <div class="col-sm-6 text-black">

            <div class="px-5 ms-xl-4">
            <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"></i>
            <span class="h1 fw-bold mb-0">Logo</span>
            </div>

            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

            <form>

                <h3 class="fw-normal mb-3 pb-3">Log in</h3>

                <div className="row g-3 align-items-center mb-3">
                    <div className="col-auto">
                        <GoPerson />
                    </div>
                    <div className="col-auto">
                        <input type="text" class="form-control" id="name" name="name" placeholder="Email or Username"/>
                    </div>
                </div>
                <div className="row g-3 align-items-center mb-3">
                    <div className="col-auto">
                        <BiLockAlt />
                    </div>
                    <div className="col-auto">
                        <input type="password" class="form-control" id="name" name="name" placeholder="Password"/>
                    </div>
                </div>

                <div class="pt-1 mb-4">
                <button class="btn btn-info btn-lg btn-block" type="button">Login</button>
                </div>

                <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                <p>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

            </form>

            </div>

        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image" class="w-100 vh-100"/>
        </div>
        </div>
    </div>
    </section>
    // <div className="row my-12">
    //     <div className="col-12 my-2">
    //         <form action="/customers/add" method="post">
    //             <div className="row g-3 align-items-center mb-3">
    //                 <div className="col-auto">
    //                     <label for="name">Username</label>
    //                 </div>
    //                 <div className="col-auto">
    //                     <input type="text" class="form-control" id="name" name="name" />
    //                 </div>
    //             </div>
    //             <div className="row g-3 align-items-center mb-3">
    //                 <div className="col-auto">
    //                     <label for="name">Password</label>
    //                 </div>
    //                 <div className="col-auto">
    //                     <input type="password" class="form-control" id="password" name="password" />
    //                 </div>
    //                 <div className="col-auto">
    //                     <span id="passwordHelpInline" class="form-text">
    //                     Must be 8-20 characters long.
    //                     </span>
    //                 </div>
    //             </div>
    //             <div className="text-end">
    //                 <button type="submit" class="btn btn-primary">Submit</button>
    //             </div>
    //         </form>
    //     </div>
    //   </div>
  )
}

export default LoginPage