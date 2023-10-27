import { Link } from "react-router-dom";

export const BackgroundCovered = '#282c34';
export const BackgroundUncovered = 'white';
export const MessageColorCovered = 'white';
export const MessageColorUncovered = 'black';

export const HighlightColor = 'yellow';
export const LinkColor = '#61dafb';
export const TopbarColor = '#61dafb';

export const GlobalToolBar = () => {
    return (
        <div className = "global-toolbar">
            <Link to = "/nova">Login</Link>
            &nbsp;|&nbsp;
            <Link to = "/nova/profile">Profile</Link>
            &nbsp;|&nbsp;
            <Link to = "/nova/storage">Storage</Link>
            &nbsp;|&nbsp;
            <Link to = "/nova/history">History</Link>
        </div>
    )
}
