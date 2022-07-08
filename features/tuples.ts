const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

type drink = [string,boolean,number]

const pepsi: drink = ['brown',true, 40]
const sprite: drink = ['clear',true,40]
const tea: drink = ['brown',false,0]
