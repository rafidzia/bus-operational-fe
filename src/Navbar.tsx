import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const {pathname} = useLocation()

    const defaultLink = "m-3 font-bold"
    const selectedLink = "m-3 font-bold text-primary"


    return ( 
        <div className="p-7 h-screen">
            <div className="flex justify-start"><img src="logo.png" alt="" className="max-h-20"/></div>
            <div className="mt-10">
                <div className={(pathname === "/") ? selectedLink : defaultLink}><Link to="/">Map Overview</Link></div>
                <div className={(pathname === "/assets") ? selectedLink : defaultLink}><Link to="/assets">Assets</Link></div>
                <div className={(pathname === "/time") ? selectedLink : defaultLink}><Link to="/time">Time Management</Link></div>
                <div className={(pathname === "/logbook") ? selectedLink : defaultLink}><Link to="/logbook">Logbook</Link></div>
                <div className={(pathname === "/tools") ? selectedLink : defaultLink}><Link to="/tools">Tools</Link></div>
                <div className={(pathname === "/report") ? selectedLink : defaultLink}><Link to="/report">Report</Link></div>
            </div>
        </div>
    );
}

export default Navbar