export async function fetchParkingPlace() {
    const response = await fetch('http://localhost:3001/parking-place/all-places', {
        method:'GET',
        headers:{
            "authenticationtoken":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InB1YmxpY0B0ZXN0LmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHdITUsuOU43Q2gwWG9LSU1LWnVJT3VhdS9RRy9aRFd6V1hRTXV5V0NFT09vOGc4b1pSVVhhIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAwNjU3ODMxLCJleHAiOjE3MDA3NDQyMzF9.StkbMlnY-HbR6REFIamKX6svKzEYlswWiuRCdGyMV7g'
        }
    })
    const result = await response.json()
    return result
}