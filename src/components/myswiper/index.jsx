import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Swiper, SwiperItem, Image
} from '@tarojs/components';
import './index.scss';

class MySwiper extends Component {
  static propTypes = {
    banner: PropTypes.array.isRequired
  };

  static defaultProps = {
    banner: []
  };

  render() {
    const { banner } = this.props || {};
    return (
      <Swiper
        className='swiper'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
      >
        {
          banner && banner.length > 0 && banner.map((item) => {
            return (
              <SwiperItem className='swiper-item' key={item.imageUrl}>
                <Image className='swiper-item__image' src={item.imageUrl} />
              </SwiperItem>
            );
          })
        }
      </Swiper>
    );
  }
}

export default MySwiper;
