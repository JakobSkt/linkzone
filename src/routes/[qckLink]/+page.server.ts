import { redirect } from "@sveltejs/kit";

export const load = async ({ params }) => {
    const zoneCode = params.qckLink
    
    redirect(302, `/connect/${zoneCode}`)
}