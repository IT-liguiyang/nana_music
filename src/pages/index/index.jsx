/* eslint-disable no-unused-vars */
import { Component } from 'react';
import { View, } from '@tarojs/components';
import { observer, inject } from 'mobx-react';
import {
  getBanner, getRecommend, getTopListDetail
} from '../../api/index';
import MySwiper from '../../components/myswiper/index';
import NavItem from '../../components/navitem/index';
import Recommend from '../../components/recommend/index';
import RankList from '../../components/ranklist/index';
import './index.scss';

@inject('store')
@observer
class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerList: [],
      recommendList: [],
      rankList: []
    };
  }

  componentDidMount() {
    this.initData();
  }

  initData = async () => {
    const res1 = await getBanner({type: '1'}); // 获取 banner
    const res2 = await getRecommend({limit: 10}); // 获取推荐歌曲
    const res3 = await getTopListDetail(); // 获取排行榜
    this.setState({
      bannerList: res1.banners,
      recommendList: res2.result,
      rankList: res3.list,
    });
  };

  render () {
    const { bannerList, recommendList, rankList } = this.state;
    return (
      <View className='index'>
        {/* 顶部轮播图 */}
        <MySwiper banner={bannerList} />

        {/* 中间 icon */}
        <NavItem />

        {/* 为你推荐 */}
        <Recommend recommend={recommendList} />

        {/* 排行榜 */}
        <RankList ranklist={rankList} />
      </View>
    );
  }
}

export default Index;
