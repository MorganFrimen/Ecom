const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

export default function PostCars({ title, image, body }) {
  return (
    <div>
      <img src={`${assetsUrl}/${image}`} />
      <div>{title}</div>
      <div>{body}</div>
    </div>
  )
}
