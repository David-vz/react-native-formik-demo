import * as React from 'react';
import {Alert, Button, ScrollView, StyleSheet} from 'react-native';
import {TextInput} from "react-native";
import { Formik} from 'formik';

import { Text, View } from '../components/Themed';


export default function TabOneScreen() {

  return (
    <ScrollView>
    <View style={styles.container}>


      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Formik - Basic</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Formik


          // initialize formik with the different field names.
          // These need to stay consistent throughout this form

          initialValues={{
            name: '',
            surname: '',
            email: '',
            mobile: ''
          }}

          // what happens when the form is filled out, validates, and gets submitted?
          onSubmit={values => Alert.alert('values', JSON.stringify(values))}

        >
          {(
            // Formik has various methods that it exposes for fine control
            { handleChange,
              handleBlur,
              handleSubmit,
              values }) => (

            <View style={{backgroundColor:'silver'}}>

              <TextInput

                // handleChange tells formik what's changed on field with given name
                onChangeText={handleChange('name')}

                // onBlur handles change events when user loses focus of field
                onBlur={handleBlur('name')}

                // value turns Text Input in to a state driven field
                value={values.name}

                style={styles.textinput}
              />
              <TextInput
                onChangeText={handleChange('surname')}
                onBlur={handleBlur('surname')}
                value={values.surname}
                style={styles.textinput}
              />
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.textinput}
              />
              <TextInput
                onChangeText={handleChange('mobile')}
                onBlur={handleBlur('mobile')}
                value={values.mobile}
                style={styles.textinput}
              />
              <Button title={'Submit'} onPress={()=>handleSubmit()} />

            </View>
          )}
        </Formik>






    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:60
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textinput: {
    margin: 10,
    padding: 10,
    backgroundColor:'white',
    height: 40,
    width: 300,
  },
});
