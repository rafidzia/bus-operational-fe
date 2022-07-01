// import { useState, useEffect } from 'react';
import Card1 from "../components/assetspath/Card1"
import Card2 from "../components/assetspath/Card2"

const Assets = () => {
    return ( 
        <div className="grid grid-cols-3 gap-5 p-10"> 
            <div className="card col-span-2">
                <Card1/>
            </div>
            <div className="col-span-1">
                <div className="card">
                    <Card2/>
                </div>
                <br/>
                <div className="card">asd</div>
            </div>
            <div className="card col-span-3">asd</div>
        </div>
    );

}
export default Assets;