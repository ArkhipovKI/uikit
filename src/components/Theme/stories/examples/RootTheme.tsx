import './RootTheme.css';

import React, { useState } from 'react';

import { cn } from '../../../../utils/bem';
import { Switch, SwitchProps } from '../../../Switch/Switch';
import { presetGpnDark, presetGpnDefault, Theme, ThemePreset } from '../../Theme';

type ThemeName = 'gpnDefault' | 'gpnDark';

function getPreset(themeName: ThemeName): ThemePreset {
  const obj = {
    gpnDefault: presetGpnDefault,
    gpnDark: presetGpnDark,
  };
  return obj[themeName] || presetGpnDefault;
}

const cnRootTheme = cn('RootTheme');

export const RootTheme: React.FC = () => {
  const [theme, setTheme] = useState<ThemeName>('gpnDefault');
  const handleChange: SwitchProps['onChange'] = ({ checked }) =>
    setTheme(checked ? 'gpnDark' : 'gpnDefault');

  return (
    <Theme preset={getPreset(theme)} className={cnRootTheme()}>
      <Switch label="Dark Mode" onChange={handleChange} checked={theme === 'gpnDark'} />
    </Theme>
  );
};
