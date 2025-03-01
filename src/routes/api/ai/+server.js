export function GET() {
    const number = Math.floor(Math.random() * 6);

    // @ts-ignore
    return new Response(number, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}