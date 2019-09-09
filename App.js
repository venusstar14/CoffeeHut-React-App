/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, TouchableHighlight
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
  StarRating
} from 'react-native/Libraries/NewAppScreen';
import Slideshow from 'react-native-image-slider-show';


class Appcafe extends Component {


constructor (props: {}) {
    super(props);

    this.state = {
        isLoading: true,
        dataSource: [],
        jsonData: {
                    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/rEFJSvLhqaiZxWinLBeAyQ/o.jpg",
                    "name": "Man Versus Machine",
                    "is_claimed": true,
                    "transactions": [],
                    "rating": 4,
                    "photos": [
                       { url:"https://s3-media2.fl.yelpcdn.com/bphoto/rEFJSvLhqaiZxWinLBeAyQ/o.jpg"},
                       { url:"https://s3-media4.fl.yelpcdn.com/bphoto/SCCmGbeb7gQgCtGHR-x-ug/o.jpg"},
                       { url:"https://s3-media4.fl.yelpcdn.com/bphoto/ebZ8vSp4HkGCrkJlwgnJ0g/o.jpg"}
                    ],
                    "hours": [
                      {
                        "open": [
                          {
                            "is_overnight": false,
                            "start": "8 AM",
                            "day": "Mon",
                            "end": "6 PM"
                          },
                          {
                            "is_overnight": false,
                            "start": "8 AM",
                            "day": "Tue",
                            "end": "6 PM"
                          },
                          {
                            "is_overnight": false,
                            "start": "8 AM",
                            "day": "Wed",
                            "end": "6 PM"
                          },
                          {
                            "is_overnight": false,
                            "start": "8 AM",
                            "day": "Thu",
                            "end": "6 PM"
                          },
                          {
                            "is_overnight": false,
                            "start": "8 AM",
                            "day": "Fri",
                            "end": "6 PM"
                          },
                          {
                            "is_overnight": false,
                            "start": "9 AM",
                            "day": "Sat",
                            "end": "7 PM"
                          }
                        ],
                        "is_open_now": false,
                        "hours_type": "REGULAR"
                      }
                    ],
                    "display_phone": "+49 89 80046681",
                    "categories": [
                      {
                        "title": "Coffee & Tea",
                        "alias": "coffee"
                      },
                      {
                        "title": "Coffee Roasteries",
                        "alias": "coffeeroasteries"
                      }
                    ],
                    "phone": "+498980046681",
                    "id": "man-versus-machine-münchen",
                    "location": {
                      "zip_code": "80469",
                      "state": "BY",
                      "city": "Munich",
                      "address3": "",
                      "display_address": [
                        "Müllerstr. 23",
                        "80469 Munich",
                        "Germany"
                      ],
                      "cross_streets": "",
                      "address1": "Müllerstr. 23",
                      "address2": "",
                      "country": "DE"
                    },
                    "review_count": 44,
                    "coordinates": {
                      "longitude": 11.57123,
                      "latitude": 48.13102
                    },
                    "price": "€€",
                    "url": "https://www.yelp.com/biz/man-versus-machine-m%C3%BCnchen?adjust_creative=g_cO5JMMQ-aAST6Q7p2ovQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=g_cO5JMMQ-aAST6Q7p2ovQ",
                    "is_closed": false
                  }
    };
  }

 /* componentDidMount() {
      this.fetchData();
    }

    fetchData() {
      fetch("./testjson.json")
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            results: responseData
          });
        })
        .done();
    }*/


     render() {

   return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{this.state.jsonData.name}</Text>
              <Text style={styles.sectionDescription}>{this.state.jsonData.price}

                 {this.state.jsonData.categories.map(function(object, i){
                   return <Text style={styles.highlight} key={i} >, {object.title}</Text>
                 })}
              </Text>
              <View style={styles.container}>
              <StarRating ratingObj={this.state.jsonData.rating}/>
              <Text style={styles.sectionDescription}>({this.state.jsonData.review_count})</Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
               <Image source={{uri: this.state.jsonData.image_url}}  />
            </View>

            <Slideshow
                  dataSource={this.state.jsonData.photos}/>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Location</Text>
            <View style={styles.container}>
                                <Image source={require('./images/location.png')} style={styles.image}/>


              <Text style={styles.sectionDescription}>
              {this.state.jsonData.location.display_address.map(function(object, i){
                                 return <Text style={styles.sectionDescription} key={i} >{object} </Text>
                               })}
                </Text>
                  </View>
                <View style={styles.container}>
                    <Image source={require('./images/phone.png')} style={styles.image}/>
                      <Text style={styles.sectionDescription}>
                       {this.state.jsonData.phone}
                      </Text>
               </View>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Open Hours</Text>
               <View style={styles.sectionDescription}>
                  {this.state.jsonData.hours[0].open.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <View style={styles.separator} />
                        <View style={styles.container}>
                          <Text style={styles.highlight}>{item.day}</Text>
                          <Text style={styles.description}>{item.start} - {item.end}</Text>
                        </View>
                      </React.Fragment>
                    );
                  })}
                </View>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Recommended Reviews</Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
    separator: {
      backgroundColor: Colors.light,
      height: 1,
      width:180
    },
  container: {

  		flexDirection: 'row',
  		alignItems: 'center'
  	},
  engine: {
    position: 'absolute',
    right: 0,
  },

  description: {
      flex: 3,
      paddingVertical: 10,
      fontWeight: '400',
      fontSize: 16,
      color: Colors.dark,
      width: 70
    },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    paddingLeft: 10
  },
  highlight: {
    fontWeight: '700',
    width: 70
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  image: {
      		width: 20,
      		height: 20
      	}
});

export default Appcafe;
