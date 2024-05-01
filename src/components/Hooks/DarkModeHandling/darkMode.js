import React from "react";
import "./darkMode.css";
import { Preferences } from '@capacitor/preferences';

class DarkMode extends React.Component {

    constructor(props){
        super(props);
        this.DARK_MODE_CHOICE = 'darkModeChoice';
        this.theme = null;
    }
    async componentDidMount() {
        if(document.querySelector("body")?.getAttribute('data-theme') === undefined || document.querySelector("body")?.getAttribute('data-theme') === null){
            const darkMode = await this.getDarkModePreference().then(result => {return result});

            if(darkMode === undefined || darkMode === null) {
                // value was not set. initialize to light mode
                this.setDataTheme('light');
                this.setDarkModePreference("lightMode");

            } else if(darkMode === "darkMode") {
                this.setDataTheme('dark');

            } else if(darkMode === "lightMode"){
                this.setDataTheme('light');
            } else {
                this.setDataTheme('light');
                this.setDarkModePreference("lightMode");
            }
        }

        if(this.theme === 'dark' || document.querySelector("body")?.getAttribute('data-theme') === 'dark'){
            for(var i = 0; i< document.getElementsByClassName("DarkModeToggleSwitch").length; i++){
                document.getElementsByClassName("DarkModeToggleSwitch")[i].checked = true;
            }
        } else {
            for(var j = 0; j< document.getElementsByClassName("DarkModeToggleSwitch").length; j++){
                document.getElementsByClassName("DarkModeToggleSwitch")[j].checked = false;
            }
        }
    }
    componentDidUpdate(prevProps) {
        if(document.querySelector("body")?.getAttribute('data-theme') === undefined || this.props.theme !== prevProps.props?.theme){
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
        if(darkMode !== undefined && darkMode !== null){
            darkMode = darkMode.value;
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
    }
    
    //handling intial setting of dark mode on loading app
    //displaying the toggle switch
    render(){
        return(
            <div className = "DarkModeToggle">
                <label className="toggle-switch">
                    <input 
                        className="DarkModeToggleSwitch" 
                        name="DarkModeToggleSwitch"
                        type="checkbox"
                        defaultChecked={(this.theme === 'dark') ?  true : false}
                        onChange={this.toggleTheme}/>
                    <span className="slider round"></span>
                </label>
                <span className="toggle-label">Dark Mode</span>
            </div>
        );
    }
}


export default DarkMode;