import React from 'react'

export const ProductPage = () => {

    const products = [
        { href:"/bed" ,src: "https://www.indexlivingmall.com/media/catalog/product/1/5/150004839_c_Mode_BK_1.jpg", title: "เตียงนอน" },
        { href:"/wardrobe" ,src: "https://cf.shopee.co.th/file/719a02ac9ce1cf88e70d6e1406af896d", title: "ตู้เสื้อผ้า" },
        { href:"/sofa" ,src: "https://media.indexlivingmall.com/media/catalog/product/1/2/120023716_1634805275784epvd_1_.jpg", title: "โซฟา" },
        { href:"/storage" ,src: "https://image.makewebeasy.net/makeweb/0/UoFkSNozd/Storage_LOT2/1152881_Shelves_AMAGER_NC_OK.jpg", title: "ตู้เก็บของ" },
        { href:"/desk" ,src: "https://th-live-05.slatic.net/p/7c31251a79fd42df82fc93a95cdee074.jpg_720x720q80.jpg_.webp", title: "โต๊ะทำงาน" },
        { href:"/diningroom" ,src: "https://media.indexlivingmall.com/media/catalog/product/1/2/120022138_c_liora_wt.jpg", title: "ห้องทานอาหาร" }
    ]


    return (
        <div>
            <div className="container" >
                <div class="row text-center">
                    <img src="image\Logo.png" class="img-fluid w-25 container" />
                </div>
                <div class="text-center my-5">
                    <h3> ~~~สินค้า~~~ </h3>
                </div>


                <div class="card-deck my-5 text-center">
                    <div class="card">
                        <div className="row">
                            {
                                products.map(item => {
                                    return (
                                        <div className="col col-lg-4">
                                            <div className="card ">
                                                <a href={item.href}>
                                                    <img src={item.src} class="card-img-top card-img-size" alt="..." />
                                                    <div class="card-body">
                                                        <h4 class="card-title alert alert-light">{item.title}</h4>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


