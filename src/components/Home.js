import React from 'react'

import './CssFiles/Home.css';
import Cards from './Cards';

export default (function Home() {
    return (
        <div className='miancontainer'>
            <section id="introSection">
                <h1> Welcome To BLOG 4U </h1>
                <div className="small">Best articles in the world</div>
            </section>

            <section id="missionSection">
                <h2> Articles </h2>
                <div className="flexcard">
                    <Cards backTitle={"Online Earning"} frontTitle={"Online Earning"} image={"/online earning.jpg"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident omnis natus porro sunt,consectetur voluptate similique laborum voluptates facilis obcaecati numquam aliquam sit accusamus suscipit quod fuga maxime cum sequi dolore pariatur Illo illum necessitatibus vero error omnisquod aliquam iste beatae ab magni neque quidem totam enim, possimus distinctio sit corrupti harum nisiatque"} />
                    <Cards backTitle={"Crypto Trading"} frontTitle={"Crypto Trading"} image={"/crypto.jpg"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident omnis natus porro sunt,consectetur voluptate similique laborum voluptates facilis obcaecati numquam aliquam sit accusamus suscipit quod fuga maxime cum sequi dolore pariatur Illo illum necessitatibus vero error omnisquod aliquam iste beatae ab magni neque quidem totam enim, possimus distinctio sit corrupti harum nisiatque"} />
                    <Cards backTitle={"Web 3.0"} frontTitle={"Web 3.0"} image={"/web3.0.jpg"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident omnis natus porro sunt,consectetur voluptate similique laborum voluptates facilis obcaecati numquam aliquam sit accusamus suscipit quod fuga maxime cum sequi dolore pariatur Illo illum necessitatibus vero error omnisquod aliquam iste beatae ab magni neque quidem totam enim, possimus distinctio sit corrupti harum nisiatque"} />
                    <Cards backTitle={"Atrificial Intelligence"} frontTitle={"Atrificial Intelligence"} image={"/artifi.jpg"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident omnis natus porro sunt,consectetur voluptate similique laborum voluptates facilis obcaecati numquam aliquam sit accusamus suscipit quod fuga maxime cum sequi dolore pariatur Illo illum necessitatibus vero error omnisquod aliquam iste beatae ab magni neque quidem totam enim, possimus distinctio sit corrupti harum nisiatque"} />
                    <Cards backTitle={"Bloack-Chain"} frontTitle={"Bloack-Chain"} image={"/block.jpg"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident omnis natus porro sunt,consectetur voluptate similique laborum voluptates facilis obcaecati numquam aliquam sit accusamus suscipit quod fuga maxime cum sequi dolore pariatur Illo illum necessitatibus vero error omnisquod aliquam iste beatae ab magni neque quidem totam enim, possimus distinctio sit corrupti harum nisiatque"} />
                    <Cards backTitle={"Metaverse"} frontTitle={"Metaverse"} image={"/meta.jpg"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident omnis natus porro sunt,consectetur voluptate similique laborum voluptates facilis obcaecati numquam aliquam sit accusamus suscipit quod fuga maxime cum sequi dolore pariatur Illo illum necessitatibus vero error omnisquod aliquam iste beatae ab magni neque quidem totam enim, possimus distinctio sit corrupti harum nisiatque"} />
                    <Cards backTitle={"New Articles"} frontTitle={"New Articles"} image={"/newarticles.jpg"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident omnis natus porro sunt,consectetur voluptate similique laborum voluptates facilis obcaecati numquam aliquam sit accusamus suscipit quod fuga maxime cum sequi dolore pariatur Illo illum necessitatibus vero error omnisquod aliquam iste beatae ab magni neque quidem totam enim, possimus distinctio sit corrupti harum nisiatque"} />
                    <Cards backTitle={"Future Articals"} frontTitle={"Future Articles"} image={"/futureart.jpg"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident omnis natus porro sunt,consectetur voluptate similique laborum voluptates facilis obcaecati numquam aliquam sit accusamus suscipit quod fuga maxime cum sequi dolore pariatur Illo illum necessitatibus vero error omnisquod aliquam iste beatae ab magni neque quidem totam enim, possimus distinctio sit corrupti harum nisiatque"} />
                    <Cards backTitle={"Coming Soon"} frontTitle={"Coming Soon"} image={"/comingsoon.jpg"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident omnis natus porro sunt,consectetur voluptate similique laborum voluptates facilis obcaecati numquam aliquam sit accusamus suscipit quod fuga maxime cum sequi dolore pariatur Illo illum necessitatibus vero error omnisquod aliquam iste beatae ab magni neque quidem totam enim, possimus distinctio sit corrupti harum nisiatque"} />
                </div >
            </section >

            <section id="sponsorsSection">
                <h2>Our Sponsors</h2>
                <div id="sponsers"> <img className="spImage" src="/img4.jpg" alt="not found" /><img className="spImage"
                    src="/img1.jpg" alt="not found" /><img className="spImage" src="/img2.jpg"
                        alt="not found" /><img className="spImage" src="/img3.jpg" alt="not found" /></div>
            </section>
        </div >
    )
})
