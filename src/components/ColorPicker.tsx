import React from "react";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";

import { AppConfigContext } from "../contexts/AppConfig";

type SetColorFn = (color: string) => void;
const PRIMARY_COLORS: string[] = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7',
  '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4',
  '#009688', '#4caf50', '#8bc34a', '#cddc39', 
  '#fbcc57', '#ffc107', '#ff9800', '#ff5722',
  'gray', 'black', 
]

const ColorTile: React.FC<{color: string, selected: boolean, setColor: SetColorFn}> = ({
  color, selected, setColor
}) => {

  const appConfig = React.useContext(AppConfigContext);
  const tileSize = appConfig.fontSize * 1.5;

  return <div 
    style={{backgroundColor: color, width: tileSize, height: tileSize}}
    onClick={() => setColor(color)}
  >
    {selected ? <CheckSharpIcon fontSize="medium" sx={{color:'black'}}/>: null}
  </div>;
}

const ColorPicker: React.FC<{color: string, setColor: SetColorFn, expand: boolean}> = ({
  color, setColor, expand
}) => {
  if (!color) {
    color = '#2196f3';
  }

  const appConfig = React.useContext(AppConfigContext);
  const tileSize = appConfig.fontSize * 1.5;

  return <div className="color-picker-colors">
    {
      expand ? PRIMARY_COLORS.map(_color => <ColorTile 
        color={_color}
        setColor={setColor}
        selected={color === _color}
      />) : <ColorTile color={color} selected setColor={setColor}/>
    }
  </div>;
}

export default ColorPicker;
