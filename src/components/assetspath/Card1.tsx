// import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Chart} from 'react-google-charts'



const Card1 = () => {

    const ICON = L.icon({
        iconUrl: "/point.png",
        iconSize: [50, 50],
    })

    const chartSize = "w-36 h-36 lg:w-44 lg:h-44 xl:w-60 xl:h-60"

    return ( 
        <div className="grid grid-cols-3"> 
        <div className="col-span-2 h-full">
            <div className="m-5">
                <h2 className="font-bold">Electric Bus A</h2>
                <div className="flex justify-center">
                    <div className="relative">
                        <Chart
                        className={chartSize}
                        chartType="PieChart"
                        options={{
                            pieSliceText: 'none',
                            slices: {
                                0: { color: '#1DABB8' },
                                1: { color: '#F8F8FA' }
                            },
                            legend: 'none',
                            tooltip: { trigger: 'none' },
                            pieHole: 0.9,
                        }}
                        data={[
                            ['filled', 'empty'],
                            ['',     70],
                            ['',     30],
                        ]}
                        />
                        <div className="absolute text-center top-8 lg:top-12 xl:top-20 left-0 w-full" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 block m-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <div className="text-chart-1 font-bold text-xl">70%</div>
                            <div className="text-sm">Battery</div>
                        </div>
                    </div>
                    <div className="relative">
                    <Chart
                        className={chartSize}
                        chartType="PieChart"
                        options={{
                            pieSliceText: 'none',
                            slices: {
                                0: { color: '#EB6361' },
                                1: { color: '#F8F9FB' }
                            },
                            legend: 'none',
                            tooltip: { trigger: 'none' },
                            pieHole: 0.9,
                        }}
                        data={[
                            ['filled', 'empty'],
                            ['',     40],
                            ['',     60],
                        ]}
                        />
                        <div className="absolute text-center top-8 lg:top-12 xl:top-20 left-0 w-full" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 block m-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                            <div className="text-chart-2 font-bold text-xl">40%</div>
                            <div className="text-sm">Range</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img alt="" src="/bus1.png" className="max-h-48"/>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-center">
                        <div className="mx-5 text-right">
                            <div className="text-sm text-gray-400">Left</div>
                            <div className="font-bold">25 psi</div>
                        </div>
                        <div className="mx-5 text-left">
                            <div className="text-sm text-gray-400">Right</div>
                            <div className="font-bold">25 psi</div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mx-5 text-right">
                            <div className="text-sm text-gray-400">Left</div>
                            <div className="font-bold">25 psi</div>
                        </div>
                        <div className="mx-5 text-left">
                            <div className="text-sm text-gray-400">Right</div>    
                            <div className="font-bold text-red-400">13 psi</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-1">
            <div>
                <MapContainer 
                    className="h-72"
                    center={[-7.2788658,112.7900364]} 
                    zoom={15} 
                    scrollWheelZoom={false} 
                    zoomControl={false} 
                    attributionControl={false} 
                    dragging={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[-7.2788658,112.7900364]} icon={ICON}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>   
                </MapContainer>
            </div>
            <div className="h-72 p-5 bg-gray-100 text-sm">
                <ul>
                    <li className="my-1 text-gray-400">ID: <span className="text-black font-bold">62a952381ecd6b38ca56f473</span></li>
                    <li className="my-1 text-gray-400">Dimension: <span className="text-black font-bold">15x3x2 M</span></li>
                    <li className="my-1 text-gray-400">Color: <span className="text-black font-bold">White</span></li>
                    <li className="my-1 text-gray-400">GVM: <span className="text-black font-bold">15 Tons</span></li>
                    <li className="my-1 text-gray-400">Registration: <span className="text-black font-bold">BP 123 XY</span></li>
                    <li className="my-1 text-gray-400">Registration Exp: <span className="text-black font-bold">2019/10/20</span></li>
                    <li className="my-1 text-gray-400">Registration State: <span className="text-black font-bold">BTH</span></li>
                    <li className="my-1 text-gray-400">Registration Status: <span className="text-black font-bold">REGISTERED</span></li>
                    <li className="my-1 text-gray-400">Registration Year: <span className="text-black font-bold">2013</span></li>
                </ul>
            </div>
        </div>
        </div>
    );

}
export default Card1;