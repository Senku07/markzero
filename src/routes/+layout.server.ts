
export async function load({locals}) {
    return {
        role: locals.userRole,
        email: locals.userName,
    }
}