import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Image, Platform, TextInput } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import SortCategories from '../components/SortCategories';
import Destinations from '../components/Destinations';

const ios = Platform.OS=='ios';
const topMargin = ios ? 'mt-3' : 'mt-10';


const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
              <StatusBar style='light' />

      <ScrollView showsVerticalScrollIndicator={false} className={'space-y-6'+topMargin}>
        {/* avatar */}
        <View className="mt-2 mx-5 flex-row justify-between items-center mb-10">
          <Text className='font-bold text-neutral-700' style={{fontSize:wp(7)}}>Let's Discover</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/avatar.png')} style={{height:wp(12) , width:wp(12)}} />
          </TouchableOpacity>
        </View>

        {/* searchbar */}
        <View className='mx-5 mb-4'>
          <View className='flex-row items-center bg-neutral-100 rounded-full p-3 space-x-2 pl-6'>
            <MagnifyingGlassIcon size={20} color='gray' strokeWidth={3} />
            <TextInput placeholder='Search destinations'  placeholderTextColor='gray' className="flex-1 text-base mb-1 pl-1 tracking-wider" />
          </View>
        </View>

        {/* categories */}
        <View className='mb-4'>
          <Categories />
        </View>
        {/* sortCategories */}
        <View className='mb-4'>
          <SortCategories />
        </View>

        {/* destinations */}
        <View>
          <Destinations />
        </View>

        
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  )
}

export default HomeScreen