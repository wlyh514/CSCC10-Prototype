import React from "react";
import TouchAppSharpIcon from '@mui/icons-material/TouchAppSharp';
import { NavigatorContext } from "../contexts/Navigator";
import Typography from "../components/Typography";

const Landing: React.FC<{}> = () => {

  const navigator = React.useContext(NavigatorContext);

  return <div style={{height: '100%'}} onClick={() => navigator.navigate("AdjustTheme")}>
    <Typography.H1>
      <span>DoorWay</span>
    </Typography.H1>
    
    <div style={{position: "relative", top: 400}}>
      <TouchAppSharpIcon fontSize="large" />
    </div>
  </div>;
}

export default Landing;