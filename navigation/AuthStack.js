import React from 'react'
import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../components/accounts/Login'
import RegisterScreen from '../components/accounts/Register'



export default createStackNavigator({ 
    Login: LoginScreen,
    Register: RegisterScreen 
})

