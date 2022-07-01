// import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = () => {
    const ICON = L.icon({
        iconUrl: "/point.png",
        iconSize: [50, 50],
    })

    return ( 
        <div className=""> 
                <MapContainer 
                    className="h-screen"
                    center={[-7.2788658,112.7900364]} 
                    zoom={15} 
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
    );

}
export default Map;