import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
  button: {
    backgroundColor: '#00aaff',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aaff',
  },
  splashText: {
    fontSize: 24,
    color: '#fff',
  },
  logoutContainer: {
    alignItems: 'center',
    padding: 20,
  },
  logoutText: {
    marginBottom: 20,
    fontSize: 18,
  },
});

export default styles;
