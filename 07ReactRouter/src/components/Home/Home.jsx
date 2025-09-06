import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Ayush Kumar Singh
                            <span className="hidden sm:block text-4xl">FullStack</span>
                        </h2>

                       
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/505736596_1859345498176902_425301632084539375_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bM3yo7aYV3cQ7kNvwFriUiE&_nc_oc=AdmBKspGW78C7leULj4q1mOP1EjXfXZVZNVdQMJOW_SD64P2OHlMIsLVxdjtVG6ME0vUn5ajHNOM5hylSwQcoi4C&_nc_zt=23&_nc_ht=scontent.fbho1-2.fna&_nc_gid=GLiRj8oUbHijgu_71VG2qg&oh=00_Afb9TOnhp4XCoFxtp3OAU8EV4xB6g5_o8r-whmMqSTNEYw&oe=68C25325" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/486501575_1801471747297611_4113743807933790063_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3EinYnyS7UkQ7kNvwETLqKz&_nc_oc=AdlKPWJfTnjbigET6igomBnGECyzFXdLXyxFV-NUQshOf-hlLsk4WszWaav6tkSEntvMXfECh1B0QowHNsA2Tyly&_nc_zt=23&_nc_ht=scontent.fbho1-2.fna&_nc_gid=s7QIzj5UprIHtnVgtlo5hA&oh=00_AfbQD7fG3APFfzv8C8l76p6Ao0SmUWg-ntRImgEq_0MuYA&oe=68C257F8" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Currently learning a FullStack development</h1>
        </div>
    );
}