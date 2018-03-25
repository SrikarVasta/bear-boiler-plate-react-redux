import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Layout from './js/components/layout'
import store from './js/store'

render(
        <Provider store={store}>
            <Layout/>
        </Provider>
        , document.getElementById('root')
)