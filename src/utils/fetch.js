import Taro from '@tarojs/taro';
import { baseUrl } from './constants';

export const fetch = (url, data, method = 'GET') => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: baseUrl + url,
      data,
      method,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};