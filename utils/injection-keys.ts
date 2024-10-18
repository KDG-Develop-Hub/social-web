export type Ripple = {
  symbol: symbol
  diameter: string
  dissapeering: boolean
  left: string
  top: string
}

export const ripplesKey = Symbol() as InjectionKey<{
  instances: Ref<Ripple[]>
  color: string
  center: boolean
}>
