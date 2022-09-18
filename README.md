# react-fullscreen-loader
A functional component based react component for full page loading

# Installation
```sh
npm i react-fullscreen-loader # npm
```
```sh
yarn add react-fullscreen-loader # yarn
```
```sh
pnpm i react-fullscreen-loader # pnpm
```

# Guide

```ts
import React from 'react'
import { LoaderComponent } from 'react-fullscreen-loader'
import 'react-fullscreen-loader/src/loader.css'


const App()=>{
  return <LoaderComponent loading/>
}
```
That's it 

## Props
`backgroundColor` - String of color you want the background to be
`loadingColor` - Color of the loader

```ts
import React from 'react'
import { LoaderComponent } from 'react-fullscreen-loader'
import 'react-fullscreen-loader/src/loader.css'


const App()=>{
  return <LoaderComponent loading backgroundColor="red" loadingColor="yellow"/>
}
```