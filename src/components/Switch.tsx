import React from "react";
import {default as MUISWitch} from '@mui/material/Switch';
import { AppConfigContext } from "../contexts/AppConfig";

const Switch: React.FC<{
  value?: boolean, 
  onChange ?:(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void}> = ({
    value, onChange
}) => {

  const appConfig = React.useContext(AppConfigContext);

  return <MUISWitch 
    sx={{
      '& .MuiSwitch-thumb': {
        backgroundColor: appConfig.colorTheme.primary.bg
      },
      '& .MuiSwitch-switchBase': {
        '&.Mui-checked': {
          '& + .MuiSwitch-track': {
            backgroundColor: appConfig.colorTheme.primary.bg,
            opacity: 0.6
          }
        },
      },
    }}
    value={value}
    onChange={onChange}
  />;
}

export default Switch;