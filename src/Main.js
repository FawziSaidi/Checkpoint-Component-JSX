import React from 'react';
import './Main.css'
import ProfilePhoto from "./Profile/ProfilePhoto"
import FullName from './Profile/FullName'
import Address from './Profile/Address';
function Main() {
return (
<div class="body" >
{ProfilePhoto()}
{FullName()}
{Address()}
    </div>
  );
}

export default Main;