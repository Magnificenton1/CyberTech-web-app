import { useTheme } from "../../../ThemeContext"
import { Logo } from "./Logo";
import { LogoText } from "./LogoText";
import "./WelcomeMessage.css"
export const WelcomeMessage = () => {

    const { theme } = useTheme();
    return(
        <div className="welcome-container">
            <div className="welcome-text">
                <LogoText/>
            </div>
            <div className="welcome-logo">
                <Logo/>
            </div>
        </div>
    )
}