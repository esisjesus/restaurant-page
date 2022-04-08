export const fetchData = function(){
    let _origin = './Data.json'
    let _menu = function(menu){
        return {menu}
    }
    
    return{
        fetchMenu: new Promise((resolve, reject)=>{
            resolve(
                fetch(_origin)
                .then(res => res.json())
                .then(data=> _menu(data['data']))
            )
        })
    }
}()