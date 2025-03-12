import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {styles} from './HomeScreen.styles';

interface HomeScreenProps {
  onCameraPress: () => void;
  detectedObject: string | null;
  quote: string | null;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  onCameraPress,
  detectedObject,
  quote,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/* Title */}
      <Text style={styles.title}>FunLife AI</Text>

      {/* Result Area */}
      {detectedObject && (
        <View style={styles.resultContainer}>
          <Text style={styles.detectedText}>
            Detected: <Text style={styles.objectName}>{detectedObject}</Text>
          </Text>
          {quote && (
            <View style={styles.quoteContainer}>
              <Text style={styles.quoteText}>"{quote}"</Text>
            </View>
          )}
        </View>
      )}

      {/* Camera Button */}
      <TouchableOpacity
        style={styles.cameraButton}
        activeOpacity={0.8}
        onPress={onCameraPress}>
        <View style={styles.cameraButtonInner}>
          <Text style={styles.buttonText}>📷</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
