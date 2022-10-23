import { fetch } from '../utils/fetch';

export const getBanner = async (data) => {
  try {
    const res = await fetch('/banner', { data }, 'POST');
    return res || {};
  } catch (e) {
    return {};
  }
};

export const getRecommend = async (data) => {
  try {
    const res = await fetch('/personalized', { data }, 'POST');
    return res || {};
  } catch (e) {
    return {};
  }
};

export const getTopListDetail = async () => {
  try {
    const res = await fetch('/toplist/detail');
    return res || {};
  } catch (e) {
    return {};
  }
};