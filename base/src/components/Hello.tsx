/*
 * @Author: wdy
 * @Date: 2021-01-22 15:07:26
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-25 15:04:26
 */
import React, {Fragment} from 'react'
import {Modal} from 'antd'
// import Modal from 'antd/lib/modal'
const config = await import('src/configs/index')
const Hello = () => (
  <Fragment>
    <h1>Hello from Typescript and React Base Project!</h1>
    <p>config:{JSON.stringify(config.default)}</p>
    <Modal title={'test'} visible>
      666
    </Modal>
  </Fragment>
)

export default Hello
