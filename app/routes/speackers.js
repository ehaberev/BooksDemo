import Route from '@ember/routing/route';

export default Route.extend({
    //dataService: service('data'),
    
    model(){
    //    return new Promise((resolve, reject)=>{
    //         later(async()=>{
    //             try{
    //                 let spk = await this.get("dataService").getDataSpeackers();
    //                 resolve(spk);
    //             }
    //             catch(e){
    //                 reject("Conn faild")
    //             }
                
    //         },1000)
    //     })
       
          let promise = this.get('store').findAll('speacker');
          return promise;

    
    }
});
