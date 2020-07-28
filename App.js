import React from 'react'
import {StyleSheet,View, Text,Image,ScrollView} from 'react-native';
import { AntDesign, Ionicons , FontAwesome5,Feather,MaterialCommunityIcons,FontAwesome,Entypo} from '@expo/vector-icons';
import ProductCard from './components/ProductCard'
import Constants from 'expo-constants'
const Header = ()=>{
  return(
    <View style={{backgroundColor: "white", height: 45}}>
    <View style={{justifyContent: 'space-between', flexDirection: 'row',padding: 10}}>
   <AntDesign name="arrowleft" size={28} color="#264172" style={{marginLeft: 7}}/>
   <Text style={{fontSize: 18, color: '#264172"'}}>Sweaters</Text>
   <AntDesign name="shoppingcart" size={28} color="#264172" style={{marginRight: 7}}/>
   </View>
    </View>
  )
}

export default class App extends React.Component{
  render()
  {
    return(
     
      <View style={{marginTop: Constants.statusBarHeight, backgroundColor: '#FAFAF8', flex: 1}}>
       <Header/>
        <ScrollView>
       <View>
  <Image source={{uri: 'https://i.pinimg.com/originals/d1/00/c0/d100c0e952a86d534935ce4d274cd917.jpg'}} style={{height: 320}}/>
  <View style={{position: 'absolute' ,right: 8, bottom: 7 , width: 46, height: 46,
  borderRadius: 23,backgroundColor: 'white'
  , padding: 10
  }}>
  <Ionicons name="md-heart-empty" size={30} color="black" />
  </View>
  </View>
<View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
<Image source={{uri: 'https://i.pinimg.com/originals/d1/00/c0/d100c0e952a86d534935ce4d274cd917.jpg'}} style={{height: 52, width:52, borderRadius: 26 , margin: 6 , }}/>
<Image source={{uri: 'https://i.pinimg.com/originals/d1/00/c0/d100c0e952a86d534935ce4d274cd917.jpg'}} style={{height: 52, width:52, borderRadius: 26 , margin: 6 }}/>
<Image source={{uri: 'https://i.pinimg.com/originals/d1/00/c0/d100c0e952a86d534935ce4d274cd917.jpg'}} style={{height: 52, width:52, borderRadius: 26 , margin: 6 }}/>
</View>  
<Text style={{fontSize: 20,marginleft: 10, marginTop: 10, color: "#264172"}}>Stand Collar Bishop Sleeve Sweater</Text>
<Text style={{color: 'gray', margin: 10}}>Lorem ipsum
docol stand consuphv ana ert in some gteah colop >Lorem ipsum
docol stand consuphv ana ert in some gteah colop</Text>

<View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
<View style={{flexDirection: 'row',}} >
<View style={{backgroundColor: 'white', height: 50, width: 70, padding: 20,
borderRadius: 10, elevation: 2
}}>
<FontAwesome5 name="truck" size={24} color="#0B5EFF" />
</View>
<View style={{margin: 6}}>
<Text style={{fontSize: 16,fontWeight: 'bold', marginLeft: 3}}>Free </Text>
<Text style={{fontSize: 16, fontWeight: 'bold'}}>shipping</Text>
</View>
</View>

<View style={{flexDirection: 'row',}} >
<View style={{backgroundColor: 'white', height: 50, width: 60, padding: 13,
borderRadius: 10, elevation: 2
}}>
<Feather name="clock" size={28} color="#0B5EFF" />
</View>
<View style={{margin: 6}}>
<Text style={{fontSize: 16, fontWeight: 'bold'}}>24 Hour </Text>
<Text style={{fontSize: 16, fontWeight: 'bold'}}>Delivery</Text>
</View>
</View>


<View style={{flexDirection: 'row',}} >
<View style={{backgroundColor: 'white', height: 50, width: 50, padding: 13,
borderRadius: 10, elevation: 2
}}>
<MaterialCommunityIcons name="cassette" size={24} color="#0B5EFF" />
</View>
</View>
</View>


<Text style={{marginTop: 50, fontSize: 20,margin: 6, fontWeight: 'bold'}}> Product Rating </Text>
<Text style={{marginLeft: 260, margin: 5, fontWeight:'bold'}}> 39 Reviews </Text>
<View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
<View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
<AntDesign name="star" size={22} color="#FF9910"/>
<AntDesign name="star" size={22} color="#FF9910" />
<AntDesign name="star" size={22} color="#FF9910" />
<AntDesign name="star" size={22} color="#FF9910" />
<FontAwesome5 name="star-half-alt" size={20} color="#FF9910" />
<Text style={{marginLeft: 5 , color: '#FF9910', fontSize: 18}}>  4.2 </Text>
</View>
<View style={{flexDirection: 'row', }}>

<View 
style={{height: 40, width: 40, borderRadius: 20,backgroundColor: '#FF9910', padding: 4}}
>
<Text style={{fontWeight: 'bold', color: 'white'}}>  +25</Text>
</View>
<Image source={{uri: 'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg'}} 
style={{height: 40, width: 40, borderRadius: 20, position: 'absolute', right: 30}}
/>
<Image source={{uri: 'https://i.pinimg.com/originals/a4/7e/3d/a47e3d0149116292688529233f560b25.jpg'}} 
style={{height: 40, width: 40, borderRadius: 20, position: 'absolute', right: 59}}
/>
<Image source={{uri: 'https://i.pinimg.com/originals/06/06/93/060693c86c8511d36dac1c64db5ba608.jpg'}} 
style={{height: 40, width: 40, borderRadius: 20, position: 'absolute', right: 85}}
/>
</View>
</View>

<Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}> Sizes</Text>

<View style={{flexDirection: 'row', margin: 20}}>
<View style={{margin: 5}}>
<View style={{backgroundColor: 'white' , padding: 10,
height: 40 , width: 40, elevation: 3
}}><Text style={{fontSize: 17,color:'#0B5EFF'}}>S</Text></View>
</View>

<View style={{margin: 8}}>

<View style={{backgroundColor: 'white' , padding: 10,
height: 40 , width: 40, elevation: 3
}}><Text style={{fontSize: 17,color:'gray'}}>M</Text></View>
</View>


<View style={{margin: 5}}>

<View style={{backgroundColor: 'white' , padding: 10,
height: 40 , width: 40, elevation: 3
}}><Text style={{fontSize: 17,color:'gray'}}>L</Text></View>
</View>

<View style={{margin: 5}}>

<View style={{backgroundColor: 'white' , padding: 10,
height: 40 , width: 40, elevation: 3
}}><Text style={{fontSize: 17,color:'gray'}}>XL</Text></View>
</View>

<View style={{margin: 5}}>

<View style={{backgroundColor: 'white' , padding: 10,
height: 40 , width: 50, elevation: 3
}}><Text style={{fontSize: 17,color:'gray'}}>2XL</Text></View>
</View>

<View style={{margin: 5}}>

<View style={{backgroundColor: 'white' , padding: 10,
height: 40 , width: 50, elevation: 3
}}><Text style={{fontSize: 17,color:'gray'}}>3XL</Text></View>
</View>
</View>

<Text style={{marginTop: 25, fontSize: 20, fontWeight: 'bold'}}>Color</Text>
<View style={{flexDirection: 'row', margin: 15}}>
<View style={{backgroundColor: '#B2B3B2', height: 44, width: 44, borderRadius: 22, margin: 5}}>

<AntDesign name="checkcircleo" size={24} color="black" style={{position: 'absolute', padding: 10}}/>
</View>
<View style={{backgroundColor: '#9FBECD', height: 44, width: 44, borderRadius: 22, margin: 5}}/>
<View style={{backgroundColor: '#9C785B', height: 44, width: 44, borderRadius: 22, margin: 5}}/>
</View>


<Text style={{marginTop: 25, fontWeight: 'bold', fontSize: 21, marginleft: 5 , marginBottom: 20}}>You May Also Like</Text>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>

</ScrollView>
      </View>
     
    )
  }
}

const Styles = StyleSheet.create({

})