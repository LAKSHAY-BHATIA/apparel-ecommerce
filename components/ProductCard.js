import React from 'react';
import {StyleSheet, View, Text,Image} from 'react-native';


 const ProductCard = (props)=>{

   return(
 <View style={{margin: 10, height: 140, backgroundColor: 'white', padding: 10,elevation: 3}}>
 <View style={{flexDirection: 'row'}}>
<Image source={{uri: 'https://i.pinimg.com/originals/06/06/93/060693c86c8511d36dac1c64db5ba608.jpg'}} style={{height: 110, width: 100, borderRadius: 10, margin: 2}}/>
<View>
<Text style={{fontSize: 19, marginLeft: 10}}> Leaf Design Dress </Text>

<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
<Text style={{color: '#0B5EFF', fontSize: 17, margin: 10,fontWeight: 'bold'}}>$ 24. 90</Text>
<Text style={{color: '#FF9910', fontSize: 17, fontWeight: 'bold',margin: 10}}>⭐ 4.5</Text>
</View>
<Text style={{color:'gray', margin: 12, marginBottom: 2}}>ferjnrkfnejrfjefejfbehjfbjefueuv</Text>
<Text style={{color:'gray', marginLeft: 12,marginRight: 12, marginBottom: 0}}>ferjnrkfnejrfjefejfbehjfbjefueuv</Text>




</View>
</View>

 </View>
   )

}


export default ProductCard;