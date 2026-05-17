type Props = { data: object | object[] }

export default function JsonLd({ data }: Props) {
  const payload = Array.isArray(data) ? data : [data]
  return (
    <>
      {payload.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
