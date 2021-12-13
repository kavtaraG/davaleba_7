const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const deleteThis = document.querySelector('#deletethis');
const deleteThat = document.querySelector('#deletethat');
const ul = document.querySelector('ul');

function test1() {
    return new Promise ((resolve, reject) =>{
        if('./nbg.json' === 200){
            resolve('server is on');
        }else{
            reject('error 404');
        }
    })
}


  

    async function testThis(){
        test1();
        try{
            const result = await fetch('./nbg.json')
            response.data.currencies.forEach(item =>{
                item.target.btn1;
                ul.textContent = null;
                const li = document.createElement('li');
                li.textContent = `${item.code}`;
                ul.appendChild(li);
            })
           

            // console.log(result);
            return result.json();
        }catch(err){
            const li = document.createElement('li');
            li.textContent = `${err}`;
            ul.appendChild(li);
            console.log(err);
        }
        
    }
    
btn1.addEventListener('click', testThis);
deleteThis.addEventListener('click', function(){
    ul.textContent = null;
})

    testThis();
    const value1 = testThis();
    console.log('value ', value1);
   





// testThis().then(item =>{
//     console.log('value', item) //დააბრუნა json-ის მნიშვნელობა
// })


function test2() {
    return new Promise ((resolve, reject) =>{
        if('https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01'){
            resolve('server is on');
        }else{
            reject('error 404');
        }
    })
}




    async function testThat(){
        test2();
        try{
            const result = await fetch('https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01')
            response.data.data.email.forEach(item1 =>{
                item1.target.btn2;
                ul.textContent = null;
                const li = document.createElement('li');
                li.textContent = `${item1.email}`;
                ul.appendChild(li);
            })
            console.log(result);
        }catch(err){
            const li = document.createElement('li');
            li.textContent = `${err}`;
            ul.appendChild(li);
            console.log(err);
        }
    }
    
    btn2.addEventListener('click', testThat);
    deleteThat.addEventListener('click', function(){
        ul.textContent = null;
    })

    testThat();

    const value2 = testThat();
    console.log('value ', value2);

