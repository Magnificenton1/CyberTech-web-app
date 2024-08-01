import { useTheme } from "../../useTheme";
import "./Footer.css"

export const Footer = () => {
    const { theme } = useTheme();
    return(
        <div className={`footer-container-${theme}`}>
            Footer text
        </div>
    )
}