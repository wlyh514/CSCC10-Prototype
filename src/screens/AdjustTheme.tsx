import React from "react";
import Slider from '@mui/material/Slider';
import Divider from "@mui/material/Divider";
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import RestartAltSharpIcon from '@mui/icons-material/RestartAltSharp';
import BuildSharpIcon from '@mui/icons-material/BuildSharp';

import Typography from "../components/Typography";
import Button from "../components/Button";
import { AppConfigContext } from "../contexts/AppConfig";
import Switch from "../components/Switch";
import ColorPicker from "../components/ColorPicker";

const AdjustTheme: React.FC<{}> = () => {

  const appConfig = React.useContext(AppConfigContext);

  return <div style={{padding: 8}}>
    <div style={{...appConfig.getStyleFor('primary'), padding: 5, margin: -8}}>
      <Typography.H1>
        {appConfig.icon ? <BuildSharpIcon fontSize="large" />: null}
        Appearance Config
      </Typography.H1>
    </div>
    
    <Typography.H2>Make the app comfortable for you!</Typography.H2>
    <Typography.P style={{textAlign: 'left', padding: 5}}>
      On this page you can adjust font size and color theme of the <a target="_blank" href="https://www.figma.com/file/B894ML2gg6FSrNdZ12KUFw/Project-prototype" style={{color: appConfig.colorTheme.primary.bg}}>app</a>. You can always come back to this page in the settings menu, which is on the left-top corner of the home page.
    </Typography.P>

    <Divider />

    <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
      <Typography.P style={{textAlign: 'left'}}>Font Size: {appConfig.fontSize}px</Typography.P>
      <Slider 
        sx={{color: appConfig.colorTheme.primary.bg}} 
        min={14}
        max={20}
        step={1} 
        value={appConfig.fontSize}
        onChange={(_, val) => {
          if (typeof val === 'number') {
            appConfig.setFontSize(val);
          }
        }}
      />

      <table style={{textAlign: 'left', margin: 0, width: '100%'}}>
        <tbody>
          <colgroup>
            <col span={1}></col>
            <col span={1} style={{textAlign: 'right', width: '20%'}}></col>
          </colgroup>
          <tr>
            <td>
              <Typography.P>
                Patterns & Textures:
              </Typography.P>
            </td>
            <td>             
              <Switch
                value={appConfig.pattern}
                onChange={(_, checked) => appConfig.setPattern(checked)}
              />
            </td>
          </tr>

          <tr>
            <td>
              <Typography.P>
                Show Icons:
              </Typography.P>
            </td>
            <td>
              <Switch
                value={appConfig.icon}
                onChange={(_, checked) => appConfig.setIcon(checked)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Typography.P>
      Theme Color 
      <ColorPicker 
        color={appConfig.colorTheme.primary.bg} 
        setColor={
        (color) => appConfig.updateColorTheme('primary', {...appConfig.colorTheme.primary, bg: color})}
        expand={true}
      />
    </Typography.P>
    
    
    <Button> 
      {
        appConfig.icon ? 
          <CheckSharpIcon sx={{color: appConfig.colorTheme.primary.color}}/>
          : null
      } I'm Good!</Button>
    <Button cls="secondary">
      {
        appConfig.icon ? 
        <RestartAltSharpIcon sx={{color: appConfig.colorTheme.secondary.color}} />
        : null
      }
      Reset to Default
    </Button>
  </div>
}

export default AdjustTheme;