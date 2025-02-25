import React from 'react'
import Link from 'next/link'
import { Button } from '../../UI/Button'
import { GithubIcon } from '../../Icons'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import ThemeSelect from '../../UI/ThemeSelect/ThemeSelect'
import { Logo, DownIcon, ThemeIcon } from '../../Icons'
import s from './Navigation.module.css'
import cn from 'clsx'

function Navigation() {
  return (
    <NavigationMenu.Root className={cn(s.root)}>
      <NavigationMenu.List className={cn(s.list)}>
        <NavigationMenu.Item className={cn(s.logo)}>
          <NavigationMenu.Link>
            <Link href="/">
              <a>
                <Logo theme={s.theme_btn ? 'dark' : 'light'}></Logo>
              </a>
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={cn(s.theme_btn)}>
            <ThemeIcon />
            <span className={cn(s.theme_btn_txt)}>Change Theme</span>
            <DownIcon />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ThemeSelect></ThemeSelect>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      {/* NavigationMenu.Content will be rendered here when active */}
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  )
}

export default Navigation
