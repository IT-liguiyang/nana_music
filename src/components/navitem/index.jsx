import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss';

class NavItem extends Component {

  render() {
    return (
      <View className='nav'>
        <View className='nav-item'>
          <View className='nav-item__iconfont'>
            <View className='iconfont icon-tuijian' />
          </View>
          <Text className='nav-item__text'>每日推荐</Text>
        </View>
        <View className='nav-item'>
          <View className='nav-item__iconfont'>
            <View className='iconfont icon-gedan' />
          </View>
          <Text className='nav-item__text'>歌单</Text>
        </View>
        <View className='nav-item'>
          <View className='nav-item__iconfont'>
            <View className='iconfont icon-gongnengpaihangbang' />
          </View>
          <Text className='nav-item__text'>排行榜</Text>
        </View>
        <View className='nav-item'>
          <View className='nav-item__iconfont'>
            <View className='iconfont icon-diantai' />
          </View>
          <Text className='nav-item__text'>电台</Text>
        </View>
        <View className='nav-item'>
          <View className='nav-item__iconfont'>
            <View className='iconfont icon-zhibo' />
          </View>
          <Text className='nav-item__text'>直播</Text>
        </View>
      </View>
    );
  }
}

export default NavItem;
