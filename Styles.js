import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleContainer: {
    verticalAlign: 'top',
    textAlign: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    margin: 12,
  },
  title: { 
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 20,
  },
  infoBox: {
    backgroundColor: 'skyblue',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
    margin: 15,
  },
  infoBoxDesc: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'none',
    padding: 5,
  },
  paragraphBox: {
    textAlign: "justify",
    flex: "none",
    margin: 15,
    padding: 15,
    "white-space": "pre-line",
  },
  itallic: {
    flex: "none",
    fontStyle: "italic",
    display: "inline",
  },
  button: {
    margin: 10,
    padding: 10,
  },
  navList: {
    margin: 10,
    backgroundColor: '#dddddd',
    borderRadius: 15,
  },
  navTitle: {
    margin: 15,
    textAlign: "center",
    backgroundColor: "grey",
    color: "white",
    borderRadius: 20,
    padding: 7,
    fontSize: 20,
    fontStyle: 'italic',
  },
});