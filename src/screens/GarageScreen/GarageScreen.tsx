import { View, Text } from "react-native";
import {styles} from "./styles"
import { CardView } from "../../components/CardView";

export default function GarageScreen(){
    return (
        <View style={styles.container}>
            <View style={styles.cameraBox}>
            
                <View style={styles.triangleCorner}></View>
                <View style={[styles.triangleCorner, styles.topRigth]}></View>
                <View style={[styles.triangleCorner, styles.bottomLeft]}></View>
                <View style={[styles.triangleCorner, styles.bottomRigth]}></View>
                <CardView />
            </View>
            
        </View>
    )
}