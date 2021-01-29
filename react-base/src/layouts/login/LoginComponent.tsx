/*
 * @Author: wdy
 * @Date: 2019-03-27 17:32:33
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-29 15:01:56
 * @des 主布局，多屏模式
 */
import styles from './LoginComponent.module.less'
import {Button} from 'antd'
import {isEmpty} from 'lodash'
import classnames from 'classnames'
import Icon from '@ant-design/icons'
import React, {FunctionComponent, useEffect, useState, useRef} from 'react'
// type
import type {Props, TypeMenu, TypeOs, TypeLoginForm} from './index'
// config
import {defaultOses, menuConfigs} from './configs'
// api
// util
// store
// component
import AsIcon from '../../components/asIcon/AsIcon'

interface InnerProps extends Props {
  menuConfigs?: TypeMenu[]
}

const LoginComponent: FunctionComponent<InnerProps> = props => {
  const {baseURL, userInfo, menus} = props
  const setTimeoutRef = useRef<NodeJS.Timer | null>(null)
  const [activeOs, setActiveOs] = useState<TypeOs>({})
  const [loginForm, setLoginForm] = useState<TypeLoginForm>({username: '666666', password: '000000'}) // form表单
  const login = async () => {
    await props.setUserInfo({id: 'admin', name: 'admin', osId: 'adsfasdf'})
    await props.setToken('token')
  }
  /**
   * 获取菜单
   */
  const getMenus = async () => {
    await props.setMenus(props.menuConfigs ?? menuConfigs)
  }
  const onChangeLoginForm = (key: string, value: string) => {
    setLoginForm(prev => ({...prev, [key]: value}))
  }
  const onClickOs = (os: TypeOs) => {
    !os.disabled && setActiveOs(os)
  }
  const onClickLogin = login
  /**
   * 注册监听回车
   * @param e
   */
  const onClickEnterLogin = (e: KeyboardEvent) => {
    e.key === 'Enter' && onClickLogin()
  }
  useEffect(() => {
    props.setMenus([])
    props.setToken('')
    props.setUserInfo({})
  }, [])
  useEffect(() => {
    let activeOs: TypeOs = JSON.parse(localStorage.getItem('activeOs') || JSON.stringify({}))
    if (isEmpty(activeOs)) {
      activeOs = defaultOses.find(el => !el.disabled) || defaultOses[0]
    }
    setActiveOs(activeOs)
  }, [])
  useEffect(() => {
    try {
      document.addEventListener('keydown', onClickEnterLogin)
      return () => document.removeEventListener('keydown', onClickEnterLogin)
    } catch (error) {}
  }, [loginForm])
  useEffect(() => {
    try {
      if (userInfo.osId) {
        getMenus()
      }
    } catch (error) {}
  }, [userInfo])
  useEffect(() => {
    try {
      if (userInfo?.osId && menus?.length) {
        setTimeoutRef.current = setTimeout(() => {
          props.history.push({
            pathname: '/root',
          })
        }, 300)
      }
      return () => {
        setTimeoutRef.current && clearTimeout(setTimeoutRef.current)
      }
    } catch (error) {}
  }, [userInfo, menus])
  /**
   * oses
   * @returns
   */
  const renderOses = () => (
    <ul className={styles['oses']}>
      {defaultOses.map(os => (
        <li className={classnames(styles['os'], os.disabled && styles['disabled-os'], os.code === activeOs.code && styles['active-os'])} key={os.code} onClick={() => onClickOs(os)}>
          <Icon className={styles['icon']}>
            <AsIcon icon={`login-${os.code}`} />
          </Icon>
          {os.name}
        </li>
      ))}
    </ul>
  )
  /**
   * logo
   * @returns
   */
  const renderLogo = () => (
    <section className={styles['logo']}>
      <img className={styles['img']} src={require('./assets/images/logo.png')} alt="" />
      <h1 className={styles['title']}>智能巡检系统</h1>
    </section>
  )
  /**
   * form部分
   */
  const renderForm = () => (
    <form className={styles['form']}>
      <div className={styles['form-item']}>
        <label className={styles['label']}>用户名</label>
        <input className={styles['input']} type={'text'} maxLength={6} value={loginForm.username} onChange={e => onChangeLoginForm('username', e.target.value)} />
      </div>
      <div className={styles['form-item']}>
        <label className={styles['label']}>密码</label>
        <input className={styles['input']} type={'password'} value={loginForm.password} onChange={e => onChangeLoginForm('password', e.target.value)} />
      </div>
      <div className={styles['form-item']}>
        <Button type={'primary'} size={'large'} block onClick={onClickLogin}>
          登录
        </Button>
      </div>
    </form>
  )
  return (
    <section className={styles['container']}>
      <div className={styles['bg-container']}>
        <div className={styles['login-container']}>
          <div className={styles['oses-container']}>{renderOses()}</div>
          <div className={styles['logo-container']}>{renderLogo()}</div>
          <div className={styles['form-container']}>{renderForm()}</div>
        </div>
      </div>
    </section>
  )
}

export default LoginComponent
