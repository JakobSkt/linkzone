import { db } from '$lib/db/db'
import { zones, links } from '$lib/db/schema'
import { eq } from 'drizzle-orm'

export const load = async ({ params }) => {
  const inputCode = params.code
  // console.log('inputCode: ', inputCode)

  //const zone = await db.select().from(zones).where(eq(zones.code, inputCode))
  const zoneDebug = [
    {
      id: 2,
      intro: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      code: 'custom1',
    }
  ]

  if(zoneDebug[0] != undefined) {

    //const zoneLinks = await db.select().from(links).where(eq(links.zoneId, zone[0].id))
    const zoneLinksDebug = [
      {
          "id": 3,
          "url": "https://orm.drizzle.team/docs/rqb#select-filters",
          "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
          "zoneId": 2,
          "createdAt": "2024-02-04T11:10:45.000Z"
      },
      {
          "id": 4,
          "url": "https://www.lipsum.com/",
          "description": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          "zoneId": 2,
          "createdAt": "2024-02-04T11:13:45.000Z"
      },
      {
        "id": 5,
        "url": "https://www.lipsum.com/",
        "description": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "zoneId": 2,
        "createdAt": "2024-02-04T11:13:45.000Z"
    },
    {
      "id": 6,
      "url": "https://www.lipsum.com/",
      "description": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      "zoneId": 2,
      "createdAt": "2024-02-04T11:13:45.000Z"
  },
  {
    "id": 7,
    "url": "https://www.lipsum.com/",
    "description": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "zoneId": 2,
    "createdAt": "2024-02-04T11:13:45.000Z"
},
{
  "id": 8,
  "url": "https://www.lipsum.com/",
  "description": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  "zoneId": 2,
  "createdAt": "2024-02-04T11:13:45.000Z"
},
  ]
    return { status: 201, inputCode, zoneDebug, zoneLinksDebug}

  } else {

    return { status: 404, error: 'Zone not found'}
  }
}