import * as React from 'react';
import {Alert, Button, ScrollView, StyleSheet} from 'react-native';
import * as yup from "yup";
import { Formik, Field } from 'formik';
import {StyledTextInput} from "../components/StyledTextInput";

import { Text, View } from '../components/Themed';

// regex example: phone validation
const phoneRegEx = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const validationSchema = yup.object().shape({
  name: yup.string().required("This is a required field"),
  surname: yup.string().required("This is a required field"),
  email: yup.string().required("This is a required field"),
  mobile: yup.string()
    .required("This is a required field")
    .matches(phoneRegEx, 'Phone number is not valid'),
});


export default function TabOneScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title}>Formik - Fields, Customization and Yup</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: '',
            surname: '',
            email: '',
            mobile: ''
          }}
          onSubmit={values => Alert.alert('values', JSON.stringify(values))}
        >
          {({ handleSubmit}) => (

            <View style={{backgroundColor:'#ddd', width:'90%', padding:20}}>
              <Field
                name={'name'}
                label={'Name'}
                placeholder={'Please enter your name'}
                component={StyledTextInput}
              />
              <Field
                name={'surname'}
                label={'Surname'}
                placeholder={'Please enter your surname'}
                component={StyledTextInput}
              />
              <Field
                name={'email'}
                label={'Email'}
                placeholder={'Please enter your Email'}
                component={StyledTextInput}
              />
              <Field
                name={'mobile'}
                label={'Mobile'}
                placeholder={'Please enter your Mobile Number'}
                component={StyledTextInput}
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
