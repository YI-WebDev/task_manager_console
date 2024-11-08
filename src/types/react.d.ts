import { ReactElement } from 'react'

type ComponentFragment = Iterable<Component>
type Component = ReactElement | ComponentFragment | boolean | null | undefined
type EventHandler = (event: React.MouseEvent) => void
