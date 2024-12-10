
export function username(name: string){
    return name.split(" ").concat(String(Math.floor((Math.random() * 10) + 1)))
}

export function token(){
    function rand(){
        return String((Math.random().toString(36).substring(2)))
    }
    return rand()+rand()+rand()
}