import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import App from './App';
import 'react-native-gesture-handler';

export default function Main() {
  // dark theme
  const theme = {
    ...eva.light,
    ...eva.dark,
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <App />
      </ApplicationProvider>
    </>
  );
}

AppRegistry.registerComponent(appName, () => Main);
