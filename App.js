import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Vibration } from 'react-native';
export default function App(){
  const [now,setNow]=useState(new Date());
  const [h,setH]=useState(7); const [m,setM]=useState(0);
  const [active,setActive]=useState(true); const [ring,setRing]=useState(false);
  useEffect(()=>{
    const i=setInterval(()=>{
      const d=new Date(); setNow(d);
      if(active&&!ring&&d.getHours()===h&&d.getMinutes()===m&&d.getSeconds()===0){setRing(true); Vibration.vibrate([1000,500,1000],true);}
    },1000); return()=>clearInterval(i);
  },[active,ring,h,m]);
  if(ring){return(<View style={s.ring}><Text style={s.big}>REVEIL</Text><Text style={{color:'#888',marginTop:10}}>{String(h).padStart(2,'0')}:{String(m).padStart(2,'0')}</Text><View style={{flexDirection:'row',marginTop:40,gap:20}}><TouchableOpacity style={s.circ} onPress={()=>{const t=new Date(); t.setMinutes(t.getMinutes()+5); setH(t.getHours()); setM(t.getMinutes()); setRing(false); Vibration.cancel();}}><Text style={{color:'#D4AF37'}}>SNOOZE</Text></TouchableOpacity><TouchableOpacity style={[s.circ,{backgroundColor:'#D4AF37'}]} onPress={()=>{setRing(false); Vibration.cancel();}}><Text style={{color:'#000',fontWeight:'900'}}>STOP</Text></TouchableOpacity></View></View>);}
  return(<View style={s.c}><Text style={s.logo}>LUXE V4</Text><Text style={s.time}>{now.toLocaleTimeString()}</Text><View style={s.card}><TouchableOpacity onPress={()=>setH((h+1)%24)}><Text style={s.ht}>{String(h).padStart(2,'0')}:{String(m).padStart(2,'0')}</Text></TouchableOpacity><Text style={{color:'#555',fontSize:10,marginTop:10}}>TOUCHE L'HEURE POUR +1H / +1MIN</Text><View style={{flexDirection:'row',gap:10,marginTop:15}}><TouchableOpacity onPress={()=>setM((m+1)%60)} style={s.mini}><Text style={s.miniT}>+1M</Text></TouchableOpacity><TouchableOpacity onPress={()=>setM((m+59)%60)} style={s.mini}><Text style={s.miniT}>-1M</Text></TouchableOpacity></View></View><TouchableOpacity style={[s.btn,active&&{backgroundColor:'#D4AF37'}]} onPress={()=>setActive(!active)}><Text style={{fontWeight:'900',color:active?'#000':'#D4AF37'}}>{active?'ACTIVE':'INACTIVE'}</Text></TouchableOpacity></View>);
}
const s=StyleSheet.create({c:{flex:1,backgroundColor:'#050505',alignItems:'center',paddingTop:80,padding:24},logo:{color:'#D4AF37',letterSpacing:5,fontSize:12},time:{color:'#333',marginTop:10},card:{marginTop:30,width:'100%',backgroundColor:'#111',borderRadius:28,padding:24,alignItems:'center',borderWidth:1,borderColor:'#222'},ht:{fontSize:70,color:'#D4AF37',fontWeight:'200'},btn:{marginTop:30,width:'100%',padding:20,borderRadius:30,alignItems:'center',borderWidth:1,borderColor:'#D4AF37'},ring:{flex:1,backgroundColor:'#050505',justifyContent:'center',alignItems:'center'},big:{fontSize:50,color:'#D4AF37',fontWeight:'900',letterSpacing:10},circ:{width:120,height:120,borderRadius:60,borderWidth:1,borderColor:'#D4AF37',justifyContent:'center',alignItems:'center'},mini:{padding:12,borderRadius:15,backgroundColor:'#1A1A1A',borderWidth:1,borderColor:'#333'},miniT:{color:'#D4AF37'}});
