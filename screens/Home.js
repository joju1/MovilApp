import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import { Card, FAB } from 'react-native-paper';

/* function Home()
{
    return (
        <Text>Hola desde Home</Text>
    )
} */

const Home=({navigation})=>{
    const data = [
        {id:'1', nombre:'GTX-750ti',descripcion:'gamer de gama media',precio:'900',marca:'GEFORCE', categoria:'Tarjetas Graficas',foto:'https://www.hd-tecnologia.com/imagenes/articulos/2014/02/MSI-GTX-750-1280x720.png'},
        {id:'2', nombre:'GTX-1050ti',descripcion:'gamer de gama alta',precio:'1500',marca:'MSI', categoria:'Tarjetas Graficas',foto:'https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg'},
        {id:'3', nombre:'H110M-D',descripcion:'socket lga-1151',precio:'1800',marca:'ASUS', categoria:'Tarjetas Madre',foto:'https://www.spdigital.cl/img/products/P_setting_fff_1_90_end_500(4).png'},
        {id:'4', nombre:'Ram-DDR3',descripcion:'gamer con discipador',precio:'800',marca:'FURY', categoria:'Memoria Ram',foto:'https://ae01.alicdn.com/kf/He8fb948e25c7463d84ab9a82bc6d9294p.jpg_q50.jpg'},
        {id:'5', nombre:'Ram-DDR4',descripcion:'de gama baja, economica',precio:'300',marca:'Crucial', categoria:'Memoria Ram',foto:'https://www.cyberpuerta.mx/img/product/L/CP-CRUCIAL-CT8G4DFS8266-1.jpg'},
        {id:'6', nombre:'curvo 49"',descripcion:'monitor curvo gamer',precio:'5000',marca:'Samsung', categoria:'Monitores',foto:'https://www.compraderas.com.bo/wp-content/uploads/2017/11/samsung-qled-monitor-gaming-49-pulgadas.jpg'},
        {id:'7', nombre:'Led 24"',descripcion:'monitor led normal',precio:'1800',marca:'LG', categoria:'Monitores',foto:'https://www.lg.com/es/images/monitores/w2486l-pf/gallery/medium01.jpg'},
        {id:'8', nombre:'AMD a10',descripcion:'procesador amd a10 7870K 3.9ghz',precio:'2000',marca:'AMD', categoria:'Procesadores',foto:'https://static.kemikcdn.com/2017/06/ld0001489268_2_0003059001_0003591819.jpg'},
    ]
    const renderList = ((item)=>{
        return (
            <Card 
            style={ styles.mycard }
            onPress={() => navigation.navigate('Product',{ item })}
            >
                <View style={ styles.cardView }>
                    <Image 
                        style={{ width:60, height:60, borderRadius:30 }}
                        source={{ uri: item.foto  }}

                    />
                    <View style={{ marginLeft:10 }}>
                        <Text style={ styles.text }>{ item.nombre }</Text>
                        <Text style={ styles.text }>marca: { item.marca }</Text>
                        <Text style={ styles.text }>precio: { item.precio } Bs.</Text>
                    </View>
                </View>
            </Card>
        )
    })
    return(
        <View style={{ flex:1 }}>
            <FlatList 
                data = { data }
                renderItem = {({item}) => {
                    return renderList(item)
                }}
                keyExtractor = { item => `${item.id}` }
            />

            <FAB
                onPress={() => navigation.navigate('CreateProduct')}
                style={styles.fab}
                small={ false }
                icon="plus"
                theme={{ colors:{accent:"#006aff"} }}
            />

            {/* { renderList } */}
        </View>
        
        
   
    )
}

const styles = StyleSheet.create({
    mycard:{
       margin:5,
       padding:5 
    },
    cardView:{
        flexDirection:'row',
        padding:6
    },
    text:{
        fontSize:20,
        
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default Home