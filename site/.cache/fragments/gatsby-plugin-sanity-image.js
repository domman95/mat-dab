
    import { graphql } from "gatsby"

    export const fragments = graphql`
      fragment Image on SanityImage {
        asset {
  _id
}
hotspot {
  height
  width
  x
  y
}
crop {
  bottom
  left
  right
  top
}
      }

      fragment ImageWithPreview on SanityImage {
        ...Image
        asset {
          metadata {
            preview: lqip
          }
        }
      }
    `
  