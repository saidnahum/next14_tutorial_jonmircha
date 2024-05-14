interface Props {
  params: {
    productId: string
  }
}

const ProductoDetail: React.FC<Props> = ({ params }) => {
  return (
    <h1>ProductoDetail: {params.productId}</h1>
  )
}

export default ProductoDetail