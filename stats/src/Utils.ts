export enum matchResult{
    Homewin = 'H',
    Awaywin = 'A',
    Draw = "D"
}

export const dateStringToDate = (dateString :string):Date =>{
    const date = dateString.split('/').map((value:string):number=>{
        return parseInt(value)
    })
    return new Date(date[2],date[1] - 1,date[0])

}