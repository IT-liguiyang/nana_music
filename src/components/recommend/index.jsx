import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, ScrollView
} from '@tarojs/components';
import './index.scss';

class Recommend extends Component {
  static propTypes = {
    recommend: PropTypes.array.isRequired
  };

  static defaultProps = {
    recommend: []
  };

  render() {
    const { recommend } = this.props || {};

    if (recommend && recommend.length === 0) return <View />;
    
    return (
      <View className='recommend'>
        <Text className='recommend-label'>推荐歌曲</Text>
        <View className='recommend-top'>
          <Text className='recommend-top__title'>为你精心推荐</Text>
          <Text className='recommend-top__more'>查看更多</Text>
        </View>
        <ScrollView
          className='recommend-scroll'
          scrollX
          scrollWithAnimation
          enableFlex
        >
          {
            recommend.map((item) => {
                return (
                  <View key={item.id} className='recommend-scroll__item'>
                    <Image className='recommend-scroll__item--image' src={item.picUrl} />
                    <Text className='recommend-scroll__item--desc'>{item.name}</Text>
                  </View>
                );
            })
          }
        </ScrollView>
      </View>
    );
  }
}

export default Recommend;
