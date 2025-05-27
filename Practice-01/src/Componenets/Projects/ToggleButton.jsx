import "./ToggleButton.css";
export const ToggleButton = ({isOn, handleSwitch}) => {
    const checkIson = isOn ? "on" : "off";
    const toggleBg = {backgroundColor: isOn ? "green": "red"}
    return (
        <>
            <div className="parent_div" onClick={handleSwitch} style={toggleBg}>
                <div className={`switch ${checkIson}`}>
                    <span className="Text">{checkIson}</span>
                </div>
            </div>
        </>
    )
}