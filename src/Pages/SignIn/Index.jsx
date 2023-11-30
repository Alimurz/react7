import React from "react";
import Styles from '../../App.module.scss'
import styled from "styled-components";
import Input from "../../Components/Input/index.jsx";
const Button = styled.button`
    padding: 10px;
    background-color:${(props) => props.backgroundColor};
    font-size: 20px;
    font-weight:bold;
    color:#fff;
    border-radius: 25px;
    margin-top:10px;
    `
    
function SignIn(){
    
    
    return(
    <div className={Styles['center']}>
        <form className={Styles['sign']}>
            <img src="https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png" alt="avatar" className={Styles['avatar-icon']} />
            <div className={Styles['forms-item']}>
                <label className={Styles['inputs-label']}>Username</label>
                <Input 
                type='text' 
                placeholder="Write your Username..."
                className={Styles['forms-input']}
                />
            </div>
            <div className={Styles['forms-item1']}>
                <label className={Styles['inputs-label']}>Password</label>
                <input type="password" placeholder="Write your password..." className={Styles['forms-input']}/>
            </div>
            <div>
            <input type="checkbox" className={Styles['forms-input1']}/>
            <label className={Styles["sign-label"]}>Remember me</label>
            </div>
            <Button className={Styles['sign_in_button']}
            backgroundColor='red'
            >Sign In</Button>
        </form>
     </div>
        
    )
}
export default SignIn;import React from "react";
import Styles from '../../App.module.scss'
import styled from "styled-components";
import Input from "../../Components/Input/index.jsx";
const Button = styled.button`
    padding: 10px;
    background-color:${(props) => props.backgroundColor};
    font-size: 20px;
    font-weight:bold;
    color:#fff;
    border-radius: 25px;
    margin-top:10px;
    `
    
function SignIn(){
    
    
    return(
    <div className={Styles['center']}>
        <form className={Styles['sign']}>
            <img src="https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png" alt="avatar" className={Styles['avatar-icon']} />
            <div className={Styles['forms-item']}>
                <label className={Styles['inputs-label']}>Username</label>
                <Input 
                type='text' 
                placeholder="Write your Username..."
                className={Styles['forms-input']}
                />
            </div>
            <div className={Styles['forms-item1']}>
                <label className={Styles['inputs-label']}>Password</label>
                <input type="password" placeholder="Write your password..." className={Styles['forms-input']}/>
            </div>
            <div>
            <input type="checkbox" className={Styles['forms-input1']}/>
            <label className={Styles["sign-label"]}>Remember me</label>
            </div>
            <Button className={Styles['sign_in_button']}
            backgroundColor='red'
            >Sign In</Button>
        </form>
     </div>
        
    )
}
export default SignIn;
