//import React ,{Component, Profile} from 'react';
import React, {Component} from 'react';
import FullName from './FullName';
import ProfilPhoto from './ProfilPhoto';
import Address from './Address';

class Profile extends Component{
    render(){
        return(
            <div>
                <ProfilPhoto/>
                <FullName/>
                <Address/>
            </div>
        )
    }
}
export default Profile;