import React from 'react'
import '../../styles/Main.css'
export default class MainPanel extends React.Component{
    render(){
        return(
            <div className="tk-mainpanel-container">
                <div className="tk-left-panel center-div">
                    <span>Left panel</span>
                </div>
                <div className="tk-content-container">
                    <div className="tk-header center-div">
                        <span>Header</span>
                    </div>
                    <div className="tk-main-container">
                        <div className="tk-center-panel center-div">
                            <span>Conent Area</span>
                        </div>
                        <div className="tk-right-panel center-div">
                            <span>Right panel</span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}