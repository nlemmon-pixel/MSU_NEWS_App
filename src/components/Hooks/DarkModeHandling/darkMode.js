import React, {useEffect, useState, setState} from "react";
import "./darkMode.css";
import { Preferences } from '@capacitor/preferences';

class DarkMode extends React.Component {
    DARK_MODE_CHOICE = 'darkModeChoice';
    theme = null;

    constructor(props){
        super(props);
    }
    async componentDidMount() {
        if(document.querySelector("body").getAttribute('data-theme') == null){
            const darkMode = await this.getDarkModePreference().then(result => {return result});
            console.log("inMount: "+darkMode);
            console.log("inMount: "+typeof(darkMode));

            if(darkMode === null || darkMode === undefined) {
                // value was not set. initialize to light mode
                this.setDataTheme('light');
                this.setDarkModePreference("lightMode");

            } else if(darkMode === "darkMode") {
                this.setDataTheme('dark');

            } else if(darkMode === "lightMode"){
                this.setDataTheme('light');
            } else {
                console.log("error state: "+darkMode);
                this.setDataTheme('light');
                this.setDarkModePreference("lightMode");
            }
        }
        let buttonCheckmarked = false;
        if(this.theme === 'dark'){
            console.log("dark mode value found");
            document.getElementById("DarkModeToggleSwitch").checked=true;
        } else {
            document.getElementById("DarkModeToggleSwitch").checked=false;
        }
    }
    componentDidUpdate(prevProps) {
        if(this.props.theme !== prevProps.props.theme){
            this.fetchData(this.props.theme);
        }
    }

    setDataTheme (newTheme) {
        document.querySelector("body").setAttribute('data-theme', newTheme);
        this.theme = newTheme;
    }

    //handling storing preferences in local storage 
    async setDarkModePreference(choice){
        await Preferences.set({
            key: this.DARK_MODE_CHOICE,
            value: choice
        });
    }
    async getDarkModePreference() {
        let darkMode = await Preferences.get({key: this.DARK_MODE_CHOICE});
        console.log("darMode: "+darkMode);
        if(darkMode !== undefined && darkMode !== null){
            darkMode = darkMode.value;
            console.log("darkMode: "+darkMode);
            console.log(typeof(darkMode));
            if(darkMode === "darkMode"){
                return "darkMode";
            } else if(darkMode === "lightMode") {
                return "lightMode";
            } else {
                return null;
            }
        }
    }
    
    //handling swapping of dark to light and light to dark
    setDarkMode = () => {
        this.setDataTheme('dark');
        this.setDarkModePreference("darkMode");
    }
    setLightMode = () => {
        this.setDataTheme('light');
        this.setDarkModePreference("lightMode");
    }
    toggleTheme = (e) => {
        if(e.target.checked){
            this.setDarkMode();
        } else {
            this.setLightMode();
        }
        console.log(this.getDarkModePreference());   
    }
    
    //handling intial setting of dark mode on loading app
    //displaying the toggle switch
    render(){
        return(
            <div className = "DarkModeToggle">
                {/*
                {console.log(this.theme==='dark')}
                {console.log(this.theme)}
                */}
                <input 
                    id="DarkModeToggleSwitch" 
                    type="checkbox"
                    defaultChecked={(this.theme === 'dark') ?  true : false}
                    onChange={this.toggleTheme}/>
                <label>Dark Mode</label>
            </div>
        );
    }
}


export default DarkMode;