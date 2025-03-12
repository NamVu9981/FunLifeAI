/**
 * FunLife AI App - Object Detection and Quote Generator
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import CameraScreen from './src/components/CameraScreen/CameraScreen';

// Screen types
type Screen = 'home' | 'camera';

function App(): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [detectedObject, setDetectedObject] = useState<string | null>(null);
  const [quote, setQuote] = useState<string | null>(null);

  // Navigation handlers
  const handleNavigateToCamera = () => {
    setCurrentScreen('camera');
  };

  const handleNavigateToHome = (object?: string, quoteText?: string) => {
    if (object && quoteText) {
      setDetectedObject(object);
      setQuote(quoteText);
    }
    setCurrentScreen('home');
  };

  // Render the current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen
            onCameraPress={handleNavigateToCamera}
            detectedObject={detectedObject}
            quote={quote}
          />
        );
      case 'camera':
        return <CameraScreen onNavigateBack={handleNavigateToHome} />;
      default:
        return (
          <HomeScreen
            onCameraPress={handleNavigateToCamera}
            detectedObject={null}
            quote={null}
          />
        );
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
