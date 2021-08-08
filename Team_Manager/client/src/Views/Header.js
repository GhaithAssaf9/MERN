import React from 'react';
import {Link} from '@reach/router';

 const Header =(props) => {

    return (
        <>
            <Link to="/players/list"><h3>List</h3></Link>
            <h3> | </h3>
            <Link to="/player/addplayer"><h3>Add Player</h3></Link>
        </>
    )
}
export default Header