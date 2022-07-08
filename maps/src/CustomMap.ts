
export interface Mappalbe{
    location:{
        lat: number,
        lng: number
    }
    markerContent(): string
    color: string
}

export class CustomMap {
    private googleMap: google.maps.Map
    
    constructor(divID:string){
        this.googleMap = new google.maps.Map(document.getElementById(divID),{
            zoom: 1,
            center: {
                lat: 1,
                lng: 1
            }
        })
    }
    addMarker(mappalbe: Mappalbe): void{
        
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position:{
                lat: mappalbe.location.lat,
                lng: mappalbe.location.lng
            }
        })
        marker.addListener('click',()=>{
            const infoWindow = new google.maps.InfoWindow({
                content: mappalbe.markerContent()
            })
            infoWindow.open(this.googleMap,marker)
        })
    }
    // addCompanyMarker(company: Company): void{
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position:{
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }
}