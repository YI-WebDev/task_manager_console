import { Provider } from 'react-redux'
import { ReactElement } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '../../store'

type StoreProps = {
  children: ReactElement
}

export default function Store({ children }: StoreProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
