import React from 'react'

export const HomePage = () => {
    return (
        <div>
            <div className="container">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <a href="/product">
                            <img src="image\หน้าHome.png" class="img-fluid w-100"  />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
