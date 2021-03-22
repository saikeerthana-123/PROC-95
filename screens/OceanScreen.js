import React,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    ImageBackground,
    Alert,
    FlatList
} from 'react-native';
import {ListItem} from 'react-native-elements';

export default class AppScreen extends Component{
    constructor(){
        super()
        this.state={images : [
            require('../assets/1atlantic-salmon.png'),
            require('../assets/2manatee.png'),
            require('../assets/3striped-bass.png'),
            require('../assets/4clown-fish.png'),
            require('../assets/5blue-tang.png'),
            require('../assets/6mahi-mahi.png'),
            require('../assets/7beluga-whale.png'),
            require('../assets/8blue-fish.png'),
            require('../assets/9killer-whale.png'),
            require('../assets/10queen-snapper.png'),
            require('../assets/11pelagic-stingray.png'),
            require('../assets/12bull-shark.png'),
            require('../assets/13green-sea-turtle.png'),
            require('../assets/14atlantic-mackerel.png'),
            require('../assets/15dentex.png')
        ],images2: [
            require('../assets/t1chain-catshark.png'),
            require('../assets/t2olive-ridly-sea-turtle.png'),
            require('../assets/t3great-white-shark.png'),
            require('../assets/t4bottlenose-dolphin.png'),
            require('../assets/t5cockatoo-squid.png'),
            require('../assets/t6blue-shark.png'),
            require('../assets/t7firefly-squid.png'),
            require('../assets/t8sea-angel.png'),
            require('../assets/t9mako-shark.png'),
            require('../assets/t10sunfish.png'),
            require('../assets/t11coelacanth.png'),
            require('../assets/t12giant-oarfish.png'),
            require('../assets/t13monkfish.png'),
            require('../assets/t14bairds-beaked-whale.png')
        ],images3 : [
            require('../assets/M1angler-fish.png'),
            require('../assets/m2phronima.png'),
            require('../assets/m3orange-roughy.png'),
            require('../assets/m4venus-flytrap-sea-anemone.png'),
            require('../assets/m5frill-shark.png'),
            require('../assets/m6goblin-shark.png'),
            require('../assets/m7hatchetfish.png'),
            require('../assets/m8dragonfish.png'),
            require('../assets/m9big-red-jellyfish.png'),
            require('../assets/m10yeti-crab.png'),
            require('../assets/m11sixgill-shark.png'),
            require('../assets/m12narwhal.png'),
            require('../assets/m13sea-pen.png'),
            require('../assets/m14telescope-octopus.png'),
            require('../assets/m15colossal-squid.png'),
            require('../assets/m16vampire-squid.png')
        ], images4 : [
            require('../assets/h1grenadier.png'),
            require('../assets/h2chiton.png'),
            require('../assets/h3comb-jelly.png'),
            require('../assets/h4hadal-snailfish.png'),
            require('../assets/h5cusk-eel.png'),
            require('../assets/h6hadal-amphipod.png')
        ]
    }
    }
    componentDidMount(){
        console.log("AppScreen")
    }

    keyExtractor = (item, index) => index.toString() 
        renderItem = ( {item, i} ) =>{ 
            return ( 
                <ListItem key={i} 
                    title='fish'
                    titleStyle={{ color: 'black', fontWeight: 'bold' }}
                    leftElement={ 
                         <TouchableOpacity  
                            style = {styles.button}
                            onPress = {() => { 
                                Alert.alert(`${i}: ${item}`); 
                            }} > 

                            <Text>{item}</Text>
                        </TouchableOpacity> 
                    } bottomDivider /> ) }

    getButtonsUsingForLoop1 = (num) => { 
        const array = [] 
        const msg = [
            "The Atlantic salmon is a species of ray-finned fish in the family Salmonidae which is the largest salmon and can grow up to a meter in length.",
            "Manatees are large, fully aquatic, mostly herbivore marine animals sometimes known as sea cows. ",
            "The striped bass is the state fish of Maryland, Rhode Island, and South Carolina, and the state saltwater (marine) fish of New York, New Jersey, Virginia, and New Hampshire.",
            "In Disney/Pixar's 2003 film Finding Nemo and its 2016 sequel Finding Dory main characters Nemo and his dad Marlin are clownfish. The popularity of these for aquaria increased following the film's release.",
            "Blue tang is a species of Indo-Pacific surgeonfish.",
            "The mahi-mahi or common dolphinfish is a surface-dwelling ray-finned fish found in off-shore temperate, tropical, and subtropical waters worldwide. ",
            "Beluga whale is also known as the white whale, as it is the only cetacean to regularly occur with this colour; the sea canary, due to its high-pitched calls; and the melonhead, though that more commonly refers to the melon-headed whale, which is an oceanic dolphin.",
            "The bluefish is the only extant species of the family Pomatomidae. ",
            "The killer whale, also known as an orca (Orcinus orca), is a toothed whale belonging to the oceanic dolphin family, of which it is the largest member. ",
            "The queen snapper, is a species of snapper native to east of the Windward Islands and the Caribbean Sea.",
            "The pelagic stingray is a species of stingray in the family Dasyatidae, and the sole member of its genus.",
            "The bull shark, also known as the Zambezi shark (informally zambi) in Africa, and Lake Nicaragua shark in Nicaragua.",
            "The green sea turtle also known as the green turtle, black (sea) turtle or Pacific green turtle, is a species of large sea turtle of the family Cheloniidae.",
            "The Atlantic mackerel, also known as Boston mackerel, Norwegian mackerel, Scottish mackerel or just mackerel, is a species of mackerel found in the temperate waters of the Mediterranean Sea, the Black Sea, and the northern Atlantic Ocean.",
            "The common dentex is a species of fish in the family Sparidae."

        ]
        this.state.images.map( (item, index) => {
            array.push (
                <TouchableOpacity 
                    onPress = {event => { 
                        Alert.alert("Description: ",`${msg[index]}`); 
                    }} > 
                     <Image source={item}/>  
                </TouchableOpacity> )} 
            
            )
        return array }

        getButtonsUsingForLoop2 = () => { 
            const array = [] 
            const msg2 = [
                "The chain catshark or chain dogfish is a small, reticulated catshark that is biofluorescent. ",
                "The olive ridley sea turtle, also known commonly as the Pacific ridley sea turtle, is a species of turtle in the family Cheloniidae. The species is the second smallest and most abundant of all sea turtles found in the world.", 
                "The great white shark, also known as the great white, white shark or white pointer, is a species of large mackerel shark which can be found in the coastal surface waters of all the major oceans.",
                "Bottlenose dolphins sometimes porpoise at the surface; they swim fast enough to break free of the water, flying up and out and then back under in one continuous movement, which they generally repeat. ",
                "This transparent cockatoo squid also known as a glass squid.",
                "The blue shark (Prionace glauca) is a species of requiem shark, in the family Carcharhinidae, that inhabits deep waters in the world's temperate and tropical oceans.",
                "The firefly squid, also commonly known as the sparkling enope squid or hotaru-ika in Japan.",
                "Sea angels are a large group of extremely small, swimming sea slugs.",
                "The shortfin mako shark, also known as the blue pointer or bonito shark, is a large mackerel shark.",
                "The ocean sunfish or common mola (Mola mola) is one of the heaviest known bony fishes in the world. Adults typically weigh between 247 and 1,000 kg.",
                "Coelacanths were thought to be extinct until found alive in 1938.",
                "Giant Oarfish can grow up to 11m long.",
                "Members of the genus Lophius, also sometimes called monkfish, fishing-frogs, frog-fish, and sea-devils, are various species of lophiid anglerfishes found in the Atlantic and Indian Oceans. ",
                "Giant beaked whales are beaked whales in the genus Berardius. They include Arnoux's beaked whale in cold Southern Hemisphere waters, and Baird's beaked whale in the cold temperate waters of the North Pacific. ",

            ]

            this.state.images2.map( (item, index) => {
                array.push (
                    <TouchableOpacity 
                        onPress = {event => { 
                            Alert.alert("Description: ",`${msg2[index]}`); 
                        }} > 
                         <Image source={item}/>  
                    </TouchableOpacity> )} 
                
                )
                return array
        }

        getButtonsUsingForLoop3 = () => { 
            const array = [] 
            const msg3 = [
                "Anglerfish have a large bioluminescent lure used to attract prey in the darkness.",
                "Phronima is a genus of small, deep sea hyperiid amphipods of the family Phronimidae. It is found throughout the world's oceans, except in polar regions.",
                "The Orange Roughy can live up to 200 years. Deep sea life often has elongated life spans.",
                "The Venus flytrap sea anemone is a large sea anemone that superficially resembles a Venus flytrap. It closes its tentacles to capture prey or to protect itself. ",
                "The common name, frilled shark, derives from the fringed appearance of the six pairs of gill slits at the shark's throat.",
                "The goblin shark is a rare species of deep-sea shark. Sometimes called a living fossil, it is the only extant representative of the family Mitsukurinidae, a lineage some 125 million years old. ",
                "Marine hatchetfishes or deep-sea hatchetfishes are small deep-sea mesopelagic ray-finned fish of the stomiiform subfamily Sternoptychinae.",
                "Dragonfish is also called sea moth.",
                "Marine biologists from MBARI nicknamed this startlingly large jellyfish which grows over one meter in diameter as big red.",
                "The yeti crab, an unusual, hairy crab with no eyes, was discovered in 2005 on a hydrothermal vent near Easter Island.",
                "The bluntnose sixgill shark often simply called the cow shark, is the largest hexanchoid shark, growing to 20 ft (6.1 m) in length.",
                "The narwhal is the unicorn of the sea, a pale-colored porpoise found in Arctic coastal waters and rivers",
                "Sea pens are colonial marine cnidarians belonging to the order Pennatulacea.",
                "The telescope octopus is a species of pelagic octopus found in tropical and subtropical regions of the Indian and Pacific Oceans. It is transparent, almost colorless, and has 8 arms, all of the same size.",
                "Colossal Squid are the largest known squid species. They can reach a length of 10 meters and weigh up to 700 kg.",
                "Vampire Squids eat marine snow - organic material that falls from shallower waters."


            ]

            this.state.images3.map( (item, index) => {
                array.push (
                    <TouchableOpacity 
                        onPress = {event => { 
                            Alert.alert("Description: ",`${msg3[index]}`); 
                        }} > 
                         <Image source={item}/>  
                    </TouchableOpacity> )} 
                
                )
            return array 
        }

        getButtonsUsingForLoop4 = () => { 
            const array = [] 
            const msg4 = [
                "Grenadiers or rattails are generally large, brown to black gadiform marine fish of the subfamily Macrourinae the largest subfamily of the family Macrouridae.",
                "Chiton is a genus of chitons, a polyplacophoran mollusk in the family Chitonidae",
                "Comb Jellies have been around for 500 million years. Despite looking like jellyfish, they are not closely related.",
                "Snailfish is first animal from extreme ocean depths to get genome sequenced",
                "The cusk-eel family, Ophidiidae, is a group of marine bony fishes in the order Ophidiiformes.",
                "Scientists in Japan reported that a hadal Mariana amphipod has an enzyme that digests wood!"

            ]

            this.state.images4.map( (item, index) => {
                array.push (
                    <TouchableOpacity 
                        onPress = {event => { 
                            Alert.alert("Description: ",`${msg4[index]}`); 
                        }} > 
                         <Image source={item}/>  
                    </TouchableOpacity> )} 
                
                )
            return array 
        }

    render(){
        return(
        <ScrollView>
              <View style={(styles.view1)}>
                  <Text>Sunshine Zone</Text>
                    {this.getButtonsUsingForLoop1(14)}
                    <Text>End of Sunshine Zone</Text>
                </View>

                <View style={(styles.view2)}> 
                {this.getButtonsUsingForLoop2()}
                        <Text style={{color:'white'}}>
                        End of Twilight Zone</Text>

                </View>

                <View style={(styles.view3)}> 
                {this.getButtonsUsingForLoop3()}
                        <Text style={{color:'white'}}>End of Midnight Zone</Text>

                </View>

                <View style={(styles.view4)}> 
                {this.getButtonsUsingForLoop4()}
                        <Text style={{color:'white'}}>End of Hadal Zone</Text>

                </View>
                <View style = {styles.container}>
                    <Image style={{width:200, height:250}} source={require("../assets/pollution1.jpg")}/> 
                    <Image source={require("../assets/pollution3.jpg")}/> 
                </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   button:{
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
       marginTop: 80,
   },
   background: {
    justifyContent: 'center',
    alignItems: 'center', 
    flex: 1, 
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    },
   view1: {
       backgroundColor: '#68CEFE',
       alignItems:'center',
       marginTop: 30,
   },
   view2: {
    backgroundColor: '#4383A1',
    alignItems:'center',
    },
    view3: {
        backgroundColor: '#2E5A97',
        alignItems:'center',
    },
    view4: {
        backgroundColor: '#162737',
        alignItems:'center',
    }
    });