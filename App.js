import { View, Text } from 'react-native';
export default function App(){
  return (
    <View style={{flex:1,backgroundColor:'#050505',justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'#D4AF37',fontSize:30}}>LUXE V4 OK</Text>
      <Text style={{color:'#555',marginTop:10}}>Si tu vois ça, le build est bon</Text>
    </View>
  );
}
