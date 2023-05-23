const features = ['Unlimited projects', 'Lifetime access', 'Customer support', 'Free updates']

export const products = [
  {
    name: 'Application',
    price: '$149',
    description: 'For accessible applications',
    features: ['Application components', ...features],
    isPopular: true,
  },

  {
    name: 'Marketing',
    price: '$149',
    description: 'For impressive landing pages',
    features: ['Marketing components', ...features],
  },
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Product = ElementType<typeof products>
