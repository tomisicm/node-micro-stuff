import { isEqual, isEmpty } from 'lodash-es'
// import qs from 'qs'

// TODO: 
// export const isUrlEqual = (currentUrlQuery: object, urlStructuredObject: object) => {
//   try {
//     if (typeof currentUrlQuery === 'object' && typeof urlStructuredObject === 'object') {
//       return isEqual(currentUrlQuery, urlStructuredObject)
//     }
//   } catch (e) {
//     console.error(e)
//   }
// }

export const isUrlEmpty = (urlQueryObject: object) => {
  try {
    return isEmpty(urlQueryObject)
  } catch (e) {
    console.error(e)
  }
}

// TODO:
// export const parseUrlToObject = (currentUrl: any) => {
//   try {
//     debugger // eslint-disable-line
//     qs.parse...
//     console.log(currentUrl)
//   } catch (e) {
//     console.error(e)
//   }
// }
