export async function fetchParkingPlace() {
    const token_api: any = process.env.API_TOKEN
    
    const response = await fetch('http://localhost:3001/parking-place/all-places', {
        method:'GET',
        headers:{
            "authenticationtoken": token_api
        }
    })
    const result = await response.json()
    return result
}