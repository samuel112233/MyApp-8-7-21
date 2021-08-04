import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Modal, KeyboardAvoidingView, Alert, TextInput, ScrollView} from 'react-native';
import db from '../config'
export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            email: ' ',
            modalVisible : false,
            name:'  ',
            gender: ' ',
            age: ' ',
            address: ' ',
            phone: ' ',
            covidPositive:  ' ',
            reason: ' ',
            email1:' ',
            name1:' ',
            gender:' ',
            age1 : ' ',
            address1:  '  ',
            phone1 : ' ',
            covidPositive1 : ' ',
            reason1 : ' '
        }
    }

    showYoungModal=()=>{
        return(
            <Modal 
            
            animationType='fade'
            transparent = {true}
            visible = {this.state.modalVisible}
            >
            <View style = {styles.modalContainer}>
                <Text style = {{fontWeight:'bold'}}> Register</Text>
                <ScrollView style = {{width:'100%'}}>
            <KeyboardAvoidingView style = {styles.keyboardAvoidView}>
            <TextInput style = {styles.inputBox} 
            placeholder = {'email'}
            keyboardType =  {'email-address'}
            onChangeText={(text)=>{
                this.setState({email:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'Name'}
          maxLength = {10}
            onChangeText={(text)=>{
                this.setState({name:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'Gender'}
            onChangeText={(text)=>{
                this.setState({gender:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'Age'}
            keyboardType =  {'numeric'}
            onChangeText={(text)=>{
                this.setState({age:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'adress'}
           multiline = {true}
            onChangeText={(text)=>{
                this.setState({address:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'phone'}
            keyboardType =  {'numeric'}
            onChangeText={(text)=>{
                this.setState({phone:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'CovidResult'}
            onChangeText={(text)=>{
                this.setState({covidPositive:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'Reason'}
            mutltiline = {true}
            onChangeText={(text)=>{
                this.setState({reason:text})
            }}
            />
            <View style = {styles.modalBackButton}>
            <TouchableOpacity style = {styles.button} 
            onPress = {()=>{
                this.submitYoung()
            }}>
            <Text style = {styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </View>
            <View style = {styles.modalBackButton}>
            <TouchableOpacity style = {styles.button} 
            onPress = {()=>{
                this.setState({'modalVisible': false})
            }}>
            <Text style = {styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            </View>
            

            </KeyboardAvoidingView>
                </ScrollView>

            </View>



                </Modal>
        )
    }




    showOldModal=()=>{
        return(
            <Modal 
            
            animationType='fade'
            transparent = {true}
            visible = {this.state.modalVisible}
            >
            <View style = {styles.modalContainer}>
                <Text style = {{fontWeight:'bold'}}> Register</Text>
                <ScrollView style = {{width:'100%'}}>
            <KeyboardAvoidingView style = {styles.keyboardAvoidView}>
            <TextInput style = {styles.inputBox} 
            placeholder = {'email'}
            keyboardType =  {'email-address'}
            onChangeText={(text)=>{
                this.setState({email1:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'Name'}
          maxLength = {10}
            onChangeText={(text)=>{
                this.setState({name1:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'Gender'}
            onChangeText={(text)=>{
                this.setState({gender1:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'Age'}
            keyboardType =  {'numeric'}
            onChangeText={(text)=>{
                this.setState({age1:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'adress'}
           multiline = {true}
            onChangeText={(text)=>{
                this.setState({address1:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'phone'}
            keyboardType =  {'numeric'}
            onChangeText={(text)=>{
                this.setState({phone1:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'CovidResult'}
            onChangeText={(text)=>{
                this.setState({covidPositive1:text})
            }}
            />
            <TextInput style = {styles.inputBox} 
            placeholder = {'Reason'}
            mutltiline = {true}
            onChangeText={(text)=>{
                this.setState({reason1:text})
            }}
            />
            <View style = {styles.modalBackButton}>
            <TouchableOpacity style = {styles.button} 
            onPress = {()=>{
                this.submitOld()
            }}>
            <Text style = {styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </View>
            <View style = {styles.modalBackButton}>
            <TouchableOpacity style = {styles.button} 
            onPress = {()=>{
                this.setState({'modalVisible': false})
            }}>
            <Text style = {styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            </View>
            

            </KeyboardAvoidingView>
                </ScrollView>

            </View>



                </Modal>
        )
    }

    submitYoung=()=>{
       db.collection('youngUser').add({
        email_id: this.state.email,
        young_name:this.state.name,
        young_gender: this.state.gender,
        young_age: this.state.age,
        young_address:this.state.address,
        young_phone: this.state.phone,
        young_covidPositive: this.state.covidPositive,
        young_reason: this.state.reason
       })
    }
    submitOld=()=>{
        db.collection('OldUser').add({
         email_id1: this.state.email1,
         old_name:this.state.name1,
         old_gender: this.state.gender1,
         old_age: this.state.age1,
         old_address:this.state.address1,
         old_phone: this.state.phone1,
         old_covidPositive: this.state.covidPositive1,
         old_reason: this.state.reason1
        })
     }
    render(){
        return(
            <View style = {styles.container}>
                <View>
                    {this.showYoungModal()}

                    
                </View>
                <View>
                    {this.showOldModal()}
                </View>
                   
                
              <TouchableOpacity onPress = {()=>{
                  this.setState({'modalVisible': true})
                  
              }}>
                  <Image source={require('../assets/happy_boy.png')}
                  style={{width:50,height:100}}/>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress = {()=>{
                this.setState({'modalVisible': true})
                
            }}>
                  <Image source={require('../assets/happy_old_man.png')}
                  style={{width:50,height:100}}/>
              </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
        alignItems:'center',
        justifyContent:'center'
    },
    modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        marginRight:30,
        marginLeft:30,
        marginTop:80,
        marginBottom:80
    },
    modalBackButton:{
        width:100,
        height:40,
        borderColor:'black',
        backgroundColor:'grey',
        marginTop:20,
        marginLeft:130,
        alignItems:'center',
        justifyContent:'center'

    },
    keyboardAvoidView:{

    },
    inputBox:{
        width:'75%',
        height:35,
        alignSelf:'center',
        borderColor:'black',
        borderWidth:2,
        marginTop:20,
        padding:10
    },
    modalTitle:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'black',
        margin:50
    }

})