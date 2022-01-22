import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <a class="navbar-brand" href="/">UNFER</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/product' class="nav-link">สินค้า</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/about' className='nav-link'>เกี่ยวกับ</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/contact' class="nav-link">ติดต่อ</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/refer' class="nav-link">อ้างอิง</Link>
                        </li>
                    </ul>

                    <div className="mr-auto"></div>

                    <div className="navbar-nav">

                        <div className="nav-item text-light mr-3">
                            <Link to='/history' className='nav-link active'>Basket <i className="fas fa-shopping-basket"></i></Link>
                        </div>

                        <div class="nav-item">
                            <button className='btn btn-outline-light active' data-toggle="modal" data-target="#staticBackdrop">Sign-in</button>
                        </div>

                    </div>
                </div>
            </nav>
            {/* Modal */}
            <div class="modal fade" id="staticBackdrop">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h1>Sign-in</h1>
                            <hr />
                            <div className="text-center">
                                <button className='btn btn-danger'>
                                    Sign-in with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
