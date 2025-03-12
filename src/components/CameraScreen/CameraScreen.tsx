import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Linking} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

interface CameraScreenProps {
  onNavigateBack: (object?: string, quote?: string) => void;
}

function CameraScreen({onNavigateBack}: CameraScreenProps) {
  const [isBack, setIsBack] = useState(true);
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice(isBack ? 'back' : 'front');

  // Handle permission states
  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Camera permission is required</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            requestPermission();
            if (!hasPermission) {
              Linking.openSettings();
            }
          }}>
          <Text>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (device == null) {
    return (
      <View style={styles.container}>
        <Text>Camera device not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsBack(!isBack)}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onNavigateBack()}>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  button: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default CameraScreen;
