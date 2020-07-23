import { axiosInstance } from './config';
export const getRecommendListRequest = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                data:[{
                    id:1,
                    title:'sadasdsada'
                }]
            })
        }, 1000);
    })
}

export const getBannerRequest = () => {
    return axiosInstance.get("/banner");
}