import Avatar from "@mui/material/Avatar";
import "./HeaderOption.css"

const HeaderOption = ({avatar,Icon,title}) => {
    return(
    <div className="headerOption">
        {Icon && <Icon/>}
        {avatar && <Avatar className="headerOption__icon" src={avatar}/>}
        <h3 className="headerOption__title">{title}</h3>
    </div>);
}

export default HeaderOption;