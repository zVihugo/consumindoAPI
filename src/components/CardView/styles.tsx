import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 8,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    resizeMode: "contain"
  },
  imageLogo: {
    flex: 1,
    resizeMode: "contain",
    width:"65%"
  },
  carName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  },
  carBrand: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 18,
    fontStyle: "italic"
  },
  imagem: {
    flex: 1,
    marginBottom: "70%",

    width: "100%",
    height: "100%"
  },
  priceLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    width: "100%"
  },
  label: {
    color: "#fff",
    fontSize: 18,
  }
});