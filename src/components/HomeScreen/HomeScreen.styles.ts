import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
  },
  resultContainer: {
    width: '100%',
    minHeight: 150,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  detectedText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
  },
  objectName: {
    fontWeight: 'bold',
    color: '#4ECBFF',
    textTransform: 'capitalize',
  },
  quoteContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  quoteText: {
    fontSize: 18,
    color: '#333',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  cameraButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  cameraButtonInner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 40,
    color: '#4ECBFF',
  },
});
