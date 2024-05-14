interface Props {
  params: {
    comentId: string,
    productId: string
  }
}

const CommentDetail: React.FC<Props> = ({ params }) => {
  return (
    <div>Comentario {params.comentId} del producto {params.productId}</div>
  )
}

export default CommentDetail