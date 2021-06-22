import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: 200,
    borderBottomWidth: 2,
  },
  image: {
    width: "100%",
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 40,
    color: theme.colors.heading,
    textAlign: "center",
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 15,
    color: theme.colors.heading,
    textAlign: "center",
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
  },
});
