import { Metadata } from "next"

// export const metadata = {
//   title: 'Producto',
//   description: 'Estas en la seccion de productos'
// }

interface Props {
  params: {
    productId: string
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Producto ${params.productId}`
  }
}

const ProductoDetail: React.FC<Props> = ({ params }) => {
  return (
    <h1>ProductoDetail: {params.productId}</h1>
  )
}

export default ProductoDetail