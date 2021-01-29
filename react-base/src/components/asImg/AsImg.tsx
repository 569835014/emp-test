/*
 * @Author: wdy
 * @Date: 2021-01-13 10:55:26
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:11:00
 */

import React, {FunctionComponent, ImgHTMLAttributes} from 'react'
// types
// config
// api
// util
// store
// component
interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  defaultSource?: string
}
const AsImg: FunctionComponent<Props> = props => <img src={require('./assets/images/logo.png')} alt="" />

export default AsImg
