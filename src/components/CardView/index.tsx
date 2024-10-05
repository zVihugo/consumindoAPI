import React, { useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import Logo from "../../../assets/logo.png";
import { styles } from "./styles";
import { Divider } from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import { BuyButton } from "../BuyButton";
import {useState}   from "react";
import { carModel } from "./props";
import { loadCarData } from "./actions";


export function CardView() {
    const [carData, setCarData] = useState<carModel | null>(null);

    useEffect(() => {
        (async() => {
            const response = await loadCarData(1, setCarData)
            console.log(response)
        })
    }, [])

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
    </View>
  );

  const renderCarDetails = () => (
    <View style={{alignItems: "center"}}>
        <Text style={styles.carBrand}>Lamborghini</Text>
        <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  )

  const renderCarImage = () => (
    <Image style={styles.imagem} 
     source={{uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`}}
     />
  )

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
        <Button title="<" color={"#01a6b3"} onPress={() =>  {}}/>
        <Text style={styles.label}>{carData?.price}</Text>
        <Button title=">" color={"#01a6b3"} onPress={() =>  {}}/>
    </View>
  )

  return <View style={styles.container}>
    {renderLogoBox()}
    <Divider />
    {renderCarDetails()}
    {renderCarImage()}
    <Divider />
    <BuyButton />
    {renderPriceControls()}
  </View>;
}
