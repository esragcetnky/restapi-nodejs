// uuid : universally unique identifier
// bunun sayesinde her kullanıcı birbirinden farklı değerler alacak.
import { v4 as uuidv4 } from 'uuid';

// kullanıcıların tutulduğu dizi
let users=[];

export const getUsers=(req,res) =>{
        res.send(users);
}

export const createUsers=(req,res)=>{
    console.log('POST ROUTE REACHED');
 
    // console.log(req.body);
    const user= req.body;
    // request içinde gelen user bilgilerine bir id ekler.
    const userWithId ={ ...user, id:uuidv4()}    

    // id ekledikten sonra son sonucu array'e ekler.
    users.push(userWithId);

    res.send(`User with the name ${user.firstName} added to the array!`);
}

export const findUsers=(req,res)=>{
    console.log('GET ID ROUTE REACHED'); 

    // url'de girilen değeri id ismiyle atar.
    const {id}=req.params;

    // id değerine sahip olan user'ı bulur ve foundUser değerine atar.
    const foundUser=users.find((user) => user.id==id);

    // bulunan user'ı geri döndürür.
    res.send(foundUser);
}

export const deleteUsers=(req,res)=>{
    // silinecek user'ın numarasını burada alır ve id değerine atar.
    const {id}=req.params;

    // burada numarası id değerine eşit olmayan bütün kullanıcılar array'de kalır 
    //eşit olan kullanıcı alınmaz böylece istenilen kullanıcı silinmiş olur.
    users=users.filter((user) => user.id != id);

    res.send(`User with the id ${id} is deleted from the array!`);    
}

export const updateUsers=(req,res) => {
    // değiştirilecek user'ın numarasını burada alır ve id değerine atar.
    const {id} =req.params;
    const {firstName, lastName, age}=req.body;

    // silinecek user burada bulunur ve userToBeUpdated değerine atar.
    const user =users.find((user) => user.id==id);

    // hangi değerler değiştirilecek ise bu kısımda değiştirilir.
    if(firstName) user.firstName=firstName;
    if(lastName) user.lastName=lastName;
    if(age) user.age=age;

    res.send(`User with the id ${id} has been updated !`); 
}