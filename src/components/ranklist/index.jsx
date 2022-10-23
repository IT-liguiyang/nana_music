import { Component } from 'react';
import {
  View, Text, ScrollView, Image
} from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

class RankList extends Component {
  static propTypes = {
    ranklist: PropTypes.array.isRequired
  };

  static defaultProps = {
    ranklist: []
  };

  render() {
    const { ranklist } = this.props || {};

    console.log('11111', ranklist);

    if (ranklist && ranklist.length === 0) return <View />;

    return (
      <View className='ranklist'>
        <Text className='ranklist-label'>推荐歌曲</Text>
        <View className='ranklist-top'>
          <Text className='ranklist-top__title'>热歌风向标</Text>
          <Text className='ranklist-top__more'>查看更多</Text>
        </View>
        <ScrollView
          className='ranklist-scroll'
          scrollX
          scrollWithAnimation
          enableFlex
        >
          {
            ranklist.slice(0, 4).map((item) => {
              console.log(item);
              return (
                <View key={item.id} className='ranklist-scroll__item'>
                  <Image className='ranklist-scroll__item--image' src={item.coverImgUrl} />
                  <View className='ranklist-scroll__item--list'>
                    <Text className='list-title'>{item.name}</Text>
                    {
                      item.tracks && item.tracks.map((song, index) => {
                        return <Text key={index} className='list-song'>{index + 1} {song.first} - {song.second}</Text>;
                      })
                    }
                  </View>
                </View>
              );
            })
          }
        </ScrollView>
      </View>
    );
  }
}

export default RankList;
