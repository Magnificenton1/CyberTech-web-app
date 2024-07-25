import { useTheme } from "../../ThemeContext";
import "./Home.css"
export const BackgroundAnimation = () => {
    const { theme } = useTheme();
    return <div className={`bubbles-${theme} bubbles`}>
    {/* <div className={`bubble-${theme}`}></div>
    <div className={`bubble-${theme}`}></div>
    <div className={`bubble-${theme}`}></div>
    <div className={`bubble-${theme}`}></div>
    <div className={`bubble-${theme}`}></div>
    <div className={`bubble-${theme}`}></div>
    <div className={`bubble-${theme}`}></div>
    <div className={`bubble-${theme}`}></div>
    <div className={`bubble-${theme}`}></div>
    <div className={`bubble-${theme}`}></div> */}
    </div>
}