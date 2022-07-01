// import { useState, useEffect } from 'react';
import rgc, {Chart} from 'react-google-charts'

const Card2 = () => {

    console.log(rgc)
    return ( 
        <div className=""> 
        <div className="m-5 font-bold">Activity</div>
        <div className="relative overflow-y-hidden">
            <Chart
                className="absolute z-0 -top-8 -left-10 pointer-events-none"
                chartType="Calendar"
                options={{
                    width:860,
                    height:160,
                    calendar:{
                        cellSize:15 ,
                        cellColor:{
                            stroke: "transparent"
                        },
                        focusedCellColor:{
                            stroke: 'dodgetblue',
                            strokeWidth: 0.5,
                        },
                    },
                }}
                data={[
                    ['Date', 'Value'],
                    [ new Date(2012, 3, 13), 37032 ],
                    [ new Date(2012, 3, 14), 38024 ],
                    [ new Date(2012, 3, 15), 38024 ],
                    [ new Date(2012, 3, 16), 38108 ],
                    [ new Date(2012, 3, 17), 38229 ],
                ]}
            />
        </div>
        </div>
    );

}
export default Card2;