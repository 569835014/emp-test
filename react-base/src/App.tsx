/*
 * @Author: wdy
 * @Date: 2021-01-07 14:13:31
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 13:59:59
 */
import 'minireset.css/minireset.css'
import 'src/styles/reset/index.less'
import 'src/styles/themes/index.less'

import {Provider} from 'react-redux'
import zhCN from 'antd/lib/locale/zh_CN'
import React, {FunctionComponent} from 'react'
import ConfigProvider from 'antd/lib/config-provider'
import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import {store, persistor} from './stores'
import Login from 'src/layouts/login'
import Root from 'src/layouts/root'

const App: FunctionComponent = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <Switch>
            <Route path={'/'} exact render={() => <Redirect to={'/login'} />} />
            <Route path={'/login'} exact component={Login} />
            <Route path={'/root'} component={Root} />
          </Switch>
        </BrowserRouter>
      </ConfigProvider>
    </PersistGate>
  </Provider>
)

export default App
