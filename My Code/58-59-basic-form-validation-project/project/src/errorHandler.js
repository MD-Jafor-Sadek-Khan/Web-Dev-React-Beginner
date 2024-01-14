let counter = 0
export function emailErrorHandler(string){
    const newArr = []
    if(!(/@webdevsimplified\.com$/.test(string))) newArr.push("Must end in @webdevsimplified.com")


    if(string.length === 0) newArr.push("Required")
    counter ++
    console.log(counter);
    return newArr
    
}


export function passwordErrorHandler(string){
    const newArr = []



    if(!(/[a-z]/.test(string))) newArr.push("Must contain a LowerCase Letter")

    if(!(/[A-Z]/.test(string))) newArr.push("Must contain a UpperCase Letter")

    if(!(/[0-9]/.test(string))) newArr.push("Must contain a Number")


    if(string.length < 10) newArr.push("Must Be 10 characters or longer")



    return newArr


}